import { oData } from "../data/data.js";
import { fetchMenu } from "../modules/api.js";
import { addToCart } from "../components/getcart.js"
import { getElement, createElement } from "../utils/domUtils.js";

export async function getMenu() {
    try {
        await fetchMenu();
      
        const allMenu = oData.totalMenu;
        
        console.log('Fetched Products:', allMenu);
        
        const menuInfo = allMenu.map(menu => ({
          Name: menu.name,
          Ingredients: menu.ingredients,
          Description: menu.description,
          Price: menu.price,
          Type: menu.type,
        }));
      
        console.log('Product Info:', menuInfo);

        menuInfo.forEach(menu => {
            createMenu(menu);  // Skapa ett kort för varje produkt
        });

        const allBtn = getElement(".all-btn");
        const wontonBtn = getElement(".wonton-btn");
        const drinkBtn = getElement(".drink-btn");
        const dipBtn = getElement(".dip-btn");
    
        if (allBtn) {
            allButton();
        }
        if (wontonBtn) {
            wontonButton();
        }
        if (drinkBtn) {
            drinkButton();
        }
        if (dipBtn) {
            dipButton();
        }
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
    addToCart(menu, btn);

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
    if (menu.Description && menu.Description.length > 0) {
        ingredients.textContent = `${menu.Description}`;
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

function allButton() {
    const allBtn = getElement(".all-btn");

    allBtn.addEventListener("click", () => {
        try {
            const cardNav = getElement('#menuItemsNav');
            cardNav.textContent = '';

            const allMenu = oData.totalMenu;

            const menuInfo = allMenu.map(menu => ({
                Name: menu.name,
                Ingredients: menu.ingredients,
                Description: menu.description,
                Price: menu.price,
                Type: menu.type,
            }));
        
            menuInfo.forEach(menu => {
                createMenu(menu);  // Skapa ett kort för varje produkt
            });
        
        } catch (error) {
            console.error('Det gick inte att hämta produkter:', error);
        }
    });
}

function wontonButton() {
    const wontonBtn = getElement(".wonton-btn");

    wontonBtn.addEventListener("click", () => {
        try {
            const cardNav = getElement('#menuItemsNav');
            cardNav.textContent = '';

            const allMenu = oData.totalMenu;

            const wonton = "wonton";  // Definiera wonton som en sträng
            const wontonInfo = allMenu.filter(menu => menu.type === wonton);
            console.log('här', wontonInfo);

            const menuInfo = wontonInfo.map(menu => ({
                Name: menu.name,
                Ingredients: menu.ingredients,
                Description: menu.description,
                Price: menu.price,
                Type: menu.type,
            }));
        
            menuInfo.forEach(menu => {
                createMenu(menu);  // Skapa ett kort för varje produkt
            });
        
        } catch (error) {
            console.error('Det gick inte att hämta produkter:', error);
        }
    });
}

function drinkButton() {
    const drinkBtn = getElement(".drink-btn");

    drinkBtn.addEventListener("click", () => {
        try {
            const cardNav = getElement('#menuItemsNav');
            cardNav.textContent = '';

            const allMenu = oData.totalMenu;

            const drink = "drink";  // Definiera drink som en sträng
            const drinkInfo = allMenu.filter(menu => menu.type === drink);
            console.log('här', drinkInfo);

            const menuInfo = drinkInfo.map(menu => ({
                Name: menu.name,
                Ingredients: menu.ingredients,
                Description: menu.description,
                Price: menu.price,
                Type: menu.type,
            }));
        
            menuInfo.forEach(menu => {
                createMenu(menu);  // Skapa ett kort för varje produkt
            });
        
        } catch (error) {
            console.error('Det gick inte att hämta produkter:', error);
        }
    });
}

function dipButton() {
    const dipBtn = getElement(".dip-btn");

    dipBtn.addEventListener("click", () => {
        try {
            const cardNav = getElement('#menuItemsNav');
            cardNav.textContent = '';

            const allMenu = oData.totalMenu;

            const dip = "dip";  // Definiera dip som en sträng
            const dipInfo = allMenu.filter(menu => menu.type === dip);
            console.log('här', dipInfo);
        
            const menuInfo = dipInfo.map(menu => ({
                Name: menu.name,
                Ingredients: menu.ingredients,
                Description: menu.description,
                Price: menu.price,
                Type: menu.type,
            }));
        
            menuInfo.forEach(menu => {
                createMenu(menu);  // Skapa ett kort för varje produkt
            });
        
        } catch (error) {
            console.error('Det gick inte att hämta produkter:', error);
        }
    });
}