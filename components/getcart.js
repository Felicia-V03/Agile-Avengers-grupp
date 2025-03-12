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