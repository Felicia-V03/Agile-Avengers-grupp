import { oData } from '../data/data.js';

// export async function fetchMenu() {
//     const response = await fetch('https://santosnr6.github.io/Data/yumyumproducts.json');
//     let menu = await response.json();
//     oData.totalMenu = menu;
//     console.log(menu);
// }

export async function getapiData() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/yumyumproducts.json');
        const data = await response.json();
        console.log("API-data:", data); // Kolla att datan är korrekt
        return data;
    } catch (error) {
        console.error("Fel vid hämtning av API-data:", error);
        return [];
    }
}
 
export async function initMenu() {
    const menuData = await getapiData();
    filteredMenu(menuData, 'all'); // Filtrera efter alla objekt
}
 
initMenu(); // Startar menyhämtningen
 