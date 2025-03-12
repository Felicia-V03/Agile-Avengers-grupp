export function getCart() {
    document.addEventListener('DOMContentLoaded', async () => {
      const inCart = JSON.parse(localStorage.getItem('cart')) || [];
      
      if (inCart.length === 0) {
        const p = document.createElement('p');
        p.textContent = 'No items added yet';
        const orderContainer = getElement('.order-container');
        orderContainer.appendChild(p);
      } else {
        inCart.forEach(menu => {
            orderCard(menu);
        });
      }
    });
}

function orderCard(menu) {
    
}

export function addToCart(menu, btn) {
    btn.addEventListener('click', () => {
  
        const inCart = JSON.parse(localStorage.getItem('cart')) || [];

        const index = inCart.find(cart => cart.Name === menu.Name);

        if (index) {
            index.Antal += 1;
        } else {
            inCart.push({
                Name: menu.Name,
                Ingredients: menu.Ingredients,
                Description: menu.Description,
                Price: menu.Price,
                Type: menu.Type,
                Antal: 1
            });
        }
      
        localStorage.setItem('cart', JSON.stringify(inCart));
      
        console.log('Cart:', inCart);
        const total = totalSum();
        console.log('Total sum:', total);

    });
}

export function totalSum() {
    const inCart = JSON.parse(localStorage.getItem('cart')) || [];

    if (inCart.length > 0) {
        let totalPrice = 0;

        inCart.forEach(menu => {
            const itemTotal = menu.Price * menu.Antal;

            totalPrice += itemTotal;

            console.log(`${menu.Name}: Total Price = ${itemTotal} (Price: ${menu.Price} * Antal: ${menu.Antal})`);
        });

        console.log('Total Price for all items:', totalPrice);

        return totalPrice;
    } else {
        console.log('Varukorgen är tom');
        return 0;
    }
}
