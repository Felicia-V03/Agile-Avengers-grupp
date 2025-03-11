import { oData } from "../data/data.js";
import { fetchMenu } from "../modules/api.js";
import { getElement, createElement } from "../utils/domUtils.js";

export async function getMenu() {
    try {
        await fetchMenu();
      
        const allMenu = oData.totalMenu;
        
        console.log('Fetched Products:', allMenu);
        
        const menuInfo = allMenu.map(menu => ({
          Name: menu.name,
          Ingredients: menu.ingredients,
          Price: menu.price,
          Type: menu.type,
        }));
      
        console.log('Product Info:', menuInfo);

        menuInfo.forEach(menu => {
            createMenu(menu);  // Skapa ett kort för varje produkt
        });
      
    } catch (error) {
        console.error('Det gick inte att hämta produkter:', error);
    }
}
  
function createMenu(menu) {
    const cardNav = getElement('#menuItemsNav');

    const card = createElement('ol');
    card.classList.add('menu-items');

    const btn = createElement('button');
    btn.classList.add('plus-btn');
    btn.textContent = ("+");

    const menuText = createElement('article');
    menuText.classList.add('menu-text');

    const namePriceBox = createElement('section');
    namePriceBox.classList.add('first-row');

    const name = createElement('h3');
    name.textContent = `${menu.Name}`;

    const price = createElement('h3');
    price.textContent = `${menu.Price} SEK`;

    const ingredientsBox = createElement('section');
    ingredientsBox.classList.add('second-row');

    const ingredients = createElement('p');
    if (menu.Ingredients && menu.Ingredients.length > 0) {
        ingredients.textContent = `${menu.Ingredients}`;
    } else {
        ingredients.textContent = '';
    }

    namePriceBox.appendChild(name);
    namePriceBox.appendChild(price);
    ingredientsBox.appendChild(ingredients);
    menuText.appendChild(namePriceBox);
    menuText.appendChild(ingredientsBox);
    card.appendChild(btn);
    card.appendChild(menuText);
    cardNav.appendChild(card);    
}