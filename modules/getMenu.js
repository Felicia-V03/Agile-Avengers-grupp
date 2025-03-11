import { oData } from "../data/data.js";
import { getapiData } from "../modules/api.js";

// export async function getMenu() {
//     await fetchMenu();
//     const menu = oData.menu;

//     const menuInfo = menu.map(menu => ({
//         Name: menu.name,
//         Description: menu.description,
//         Ingredients: menu.ingredients,
//         Price: menu.price
//     }));
//     console.log('menu', menuInfo);
// }


export async function getMenu() {
    await getapiData();

    const allaMenu = await getapiData();
    
    console.log("oData:", allaMenu);

    // const alltMenu = oData.totalMenu.map(menuItem => ({
    //     Name: menuItem.name,
    //     Ingredients: menuItem.ingredients,
    //     Price: menuItem.price,
    // }));

    const menuInfo = allaMenu.map(menuItem => ({
        Name: menuItem.name,
        Ingredients: menuItem.ingredients,
        Price: menuItem.price,
    }));

    console.log('menu', menuInfo);
}