import { oData } from '../data/data.js';

export async function fetchMenu() {
    const response = await fetch('https://santosnr6.github.io/Data/yumyumproducts.json');
    let menu = await response.json();
    oData.allMenu = menu;
    console.log(menu);
}