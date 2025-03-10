import { oData } from "../data/data.js";
import { fetchMenu } from "../modules/api.js"

export async function getMenu() {
    await fetchMenu();
    const menu = oData.menu;

    const menuInfo = menu.map(menu => ({
        Name: menu.name,
        Description: menu.description,
        Ingredients: menu.ingredients,
        Price: menu.price
    }));
    console.log('menu', menuInfo);
}

