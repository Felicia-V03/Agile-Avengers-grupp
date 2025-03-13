import { cartAntal } from "../components/getMenu.js"

export function getCart() {
    document.addEventListener('DOMContentLoaded', async () => {

        const inCart = JSON.parse(localStorage.getItem('cart')) || [];

        if (inCart.length === 0) {
          const p = document.createElement('p');
          p.textContent = 'No items added yet';
          p.classList.add('no-items')
          const orderContainer = getElement('.order-list');
          orderContainer.appendChild(p);
        } else {
          inCart.forEach(menu => {
              orderCard(menu);
          });
        }
        totalSum()
    });
}

function orderCard(menu) {
    const orderList = document.querySelector('.order-list');

    const listItem = document.createElement('li');
    listItem.classList.add('order-item');

    const title = document.createElement('h3');
    title.textContent = menu.Name;

    const itemTotal = menu.Price * menu.Antal;
    const price = document.createElement('p');
    price.textContent = `Pris: ${itemTotal} SEK`;
    price.classList.add('price');

  const quantityContainer = document.createElement('div');
    quantityContainer.classList.add('quantity-container');

    const increaseBtn = document.createElement('button');
    increaseBtn.textContent = "▲";
    increaseBtn.classList.add('quantity-btn');
    increaseBtn.classList.add('up-btn');
    increaseBtn.addEventListener('click', () => updateItemAmount(menu, 1));

    const quantityText = document.createElement('p');
    quantityText.textContent = menu.Antal;
    quantityText.classList.add('quantity-text');

    const decreaseBtn = document.createElement('button');
    decreaseBtn.textContent = "▼";
    decreaseBtn.classList.add('quantity-btn');
    decreaseBtn.classList.add('down-btn');
    decreaseBtn.addEventListener('click', () => updateItemAmount(menu, -1));

    quantityContainer.appendChild(increaseBtn);
    quantityContainer.appendChild(quantityText);
    quantityContainer.appendChild(decreaseBtn);

    listItem.appendChild(title);
    listItem.appendChild(price);
    listItem.appendChild(quantityContainer);

    orderList.appendChild(listItem);
}

export function addToCart(menu, btn) {
    btn.addEventListener('click', () => {
        const inCart = JSON.parse(localStorage.getItem('cart')) || [];

        const index = inCart.findIndex(cart => cart.Name === menu.Name);

        if (index > -1) {
            inCart[index].Antal += 1;
        } else {
            inCart.push({
                Name: menu.Name,
                Ingredients: menu.Ingredients,
                Description: menu.Description,
                Price: menu.Price,
                Type: menu.Type,
                Antal: 1,
            });
        }

        localStorage.setItem('cart', JSON.stringify(inCart));
        console.log('Cart:', inCart);
        totalSum();

        cartAntal();
    });
}

function totalSum() {
    const inCart = JSON.parse(localStorage.getItem('cart')) || [];

    if (inCart.length > 0) {
        let totalPrice = 0;

        inCart.forEach(menu => {
            const itemTotal = menu.Price * menu.Antal;
            totalPrice += itemTotal;

            console.log(`${menu.Name}: Total Price = ${itemTotal} (Price: ${menu.Price} * Antal: ${menu.Antal})`);
        });

        console.log('Total Price for all items:', totalPrice);

        const orderSummary = document.querySelector('.order-summary');
        if (orderSummary) {
            orderSummary.textContent = `Total: ${totalPrice} SEK`;
        }

        const orderSummarySpan = document.querySelector('.order-summary-span');
        if (orderSummarySpan) {
            orderSummarySpan.textContent = `${totalPrice} SEK`;
        }

        return totalPrice;
    } else {
        console.log('Varukorgen är tom');
        return {
            totalPrice: 0,
        };
    }
}

function updateItemAmount(menu, change) {
    let inCart = JSON.parse(localStorage.getItem('cart')) || [];

    const index = inCart.findIndex(cart => cart.Name === menu.Name);

    if (index > -1) {
        inCart[index].Antal += change;

        if (inCart[index].Antal <= 0) {
            inCart.splice(index, 1);
        }
    }

    localStorage.setItem('cart', JSON.stringify(inCart));
    cartAntal();
    updateCartDisplay();
    totalSum();
}

function updateCartDisplay() {
    const inCart = JSON.parse(localStorage.getItem('cart')) || [];
    const orderList = document.querySelector('.order-list');
    orderList.innerHTML = '';

    inCart.forEach(menu => {
        orderCard(menu);
    });
}