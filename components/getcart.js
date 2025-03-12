export function getCart() {
    document.addEventListener('DOMContentLoaded', async () => {
      // Hämta favoritfilmer från localStorage
      const inCart = JSON.parse(localStorage.getItem('cart')) || [];
      
      //Kontrollera om filmer finns i localStorage (om det inte finns några filmer då visa meddelande)
      if (inCart.length === 0) {
        const p = document.createElement('p');
        p.textContent = 'No favorites added yet';
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
  const orderList = document.querySelector('.order-list');

  const listItem = document.createElement('li');
  listItem.classList.add('order-item');

  const title = document.createElement('h3');
  title.textContent = menu.Name;

  const price = document.createElement('p');
  price.textContent = `Pris: ${menu.Price} SEK`;
  price.classList.add('price')

  const removeBtn = document.createElement('button');
  removeBtn.textContent = "Ta bort";
  removeBtn.classList.add('remove-btn');

  removeBtn.addEventListener('click', () => removeFromCart(menu, listItem));

  listItem.appendChild(title);
  listItem.appendChild(price);
  listItem.appendChild(removeBtn);

  orderList.appendChild(listItem);
}

function removeFromCart(menu, listItem) {
  let inCart = JSON.parse(localStorage.getItem('cart')) || [];

  inCart = inCart.filter(cartItem => cartItem.Name !== menu.Name);

  localStorage.setItem('cart', JSON.stringify(inCart));

  listItem.remove();

  console.log('Uppdaterad kundvagn:', inCart);
}

export function addToCart(menu, btn) {
    const inCart = JSON.parse(localStorage.getItem('cart')) || [];
  
    btn.addEventListener('click', () => {
  
      const inCart = JSON.parse(localStorage.getItem('cart')) || [];
  
      if (btn) {
        if (!inCart.some(cart => cart.Name === menu.Name)) {
          inCart.push({
            Name: menu.Name,
            Ingredients: menu.Ingredients,
            Description: menu.Description,
            Price: menu.Price,
            Type: menu.Type,
          });
        }
      } else {
        const index = inCart.findIndex(cart => cart.Name === menu.Name);
        if (index > -1) {
          inCart.splice(index, 1);
        }
      }
  
      localStorage.setItem('cart', JSON.stringify(inCart));
  
      console.log('Cart:', inCart);
    });
}