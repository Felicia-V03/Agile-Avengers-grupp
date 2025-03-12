// export function getCart() {
//     document.addEventListener('DOMContentLoaded', async () => {
//       const inCart = JSON.parse(localStorage.getItem('cart')) || [];
      
//       if (inCart.length === 0) {
//         const p = document.createElement('p');
//         p.textContent = 'No items added yet';
//         const orderContainer = getElement('.order-container');
//         orderContainer.appendChild(p);
//       } else {
//         inCart.forEach(menu => {
//             orderCard(menu);
//         });
//       }
//     });
// }

// function orderCard(menu) {
//     const orderList = document.querySelector('.order-list');

//     const listItem = document.createElement('li');
//     listItem.classList.add('order-item');

//     const title = document.createElement('h3');
//     title.textContent = menu.Name;

//     const price = document.createElement('p');
//     price.textContent = `Pris: ${menu.itemTotal} SEK`;
//     price.classList.add('price')

//     const removeBtn = document.createElement('button');
//     removeBtn.textContent = "Ta bort";
//     removeBtn.classList.add('remove-btn');
//     removeBtn.addEventListener('click', () => removeFromCart(menu, listItem));

    

//     listItem.appendChild(title);
//     listItem.appendChild(price);
//     listItem.appendChild(removeBtn);

//     orderList.appendChild(listItem);
// }

// function removeFromCart(menu, listItem) {
//     let inCart = JSON.parse(localStorage.getItem('cart')) || [];
    
//     inCart = inCart.filter(cartItem => cartItem.Name !== menu.Name);
    
//     localStorage.setItem('cart', JSON.stringify(inCart));
    
//     listItem.remove();
    
//     console.log('Uppdaterad kundvagn:', inCart);
// }

// export function addToCart(menu, btn) {
//     btn.addEventListener('click', () => {
  
//         const inCart = JSON.parse(localStorage.getItem('cart')) || [];

//         const index = inCart.find(cart => cart.Name === menu.Name);

//         if (index) {
//             index.Antal += 1;
//         } else {
//             inCart.push({
//                 Name: menu.Name,
//                 Ingredients: menu.Ingredients,
//                 Description: menu.Description,
//                 Price: menu.Price,
//                 Type: menu.Type,
//                 Antal: 1,
//             });
//         }
      
//         localStorage.setItem('cart', JSON.stringify(inCart));
      
//         console.log('Cart:', inCart);
//         const total = totalSum();
//         console.log('Total sum:', total);

//     });
// }

// export function totalSum() {
//     const inCart = JSON.parse(localStorage.getItem('cart')) || [];

//     if (inCart.length > 0) {
//         let totalPrice = 0;

//         inCart.forEach(menu => {
//             const itemTotal = menu.Price * menu.Antal;

//             totalPrice += itemTotal;

//             console.log(`${menu.Name}: Total Price = ${itemTotal} (Price: ${menu.Price} * Antal: ${menu.Antal})`);
//         });

//         console.log('Total Price for all items:', totalPrice);

//         return totalPrice;
//     } else {
//         console.log('Varukorgen är tom');
//         return 0;
//     }
// }

export function getCart() {
    document.addEventListener('DOMContentLoaded', async () => {
        const inCart = JSON.parse(localStorage.getItem('cart')) || [];
        
        if (inCart.length === 0) {
            const p = document.createElement('p');
            p.textContent = 'No items added yet';
            const orderContainer = document.querySelector('.order-container');
            orderContainer.appendChild(p);
        } else {
            inCart.forEach(menu => {
                orderCard(menu);
            });
            const total = totalSum();
            const orderSummary = document.createElement('h2');
            orderSummary.classList.add('order-summary');
            orderSummary.textContent = `Total: ${total} SEK`;
            const orderContainer = document.querySelector('.order-container');
            orderContainer.appendChild(orderSummary);
        }
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

        return {
            totalPrice: totalPrice,
        };
    } else {
        console.log('Varukorgen är tom');
        return {
            totalPrice: 0,
        };
    }
}
