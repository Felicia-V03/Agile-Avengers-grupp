import { oData } from '../data/data.js';

export async function fetchMenu() {
    // Hämta JSON-data från API:et
    const response = await fetch('https://santosnr6.github.io/Data/yumyumproducts.json');

    // Kolla om vi fick ett OK-svar
    if (!response.ok) {
      throw new Error('Något gick fel när data skulle hämtas.');
    }

    const data = await response.json();

    oData.totalMenu = data.items;
}

export async function fetchData() {
  // Hämta JSON-data från API:et
  const response = await fetch('https://santosnr6.github.io/Data/yumyumusers.json');

  // Kolla om vi fick ett OK-svar
  if (!response.ok) {
    throw new Error('Något gick fel när data skulle hämtas.');
  }

  const data = await response.json();
  oData.users = data.users;
  console.log(oData.users);
}