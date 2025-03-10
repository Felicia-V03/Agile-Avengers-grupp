import { getMenu } from "../modules/getMenu.js"



//Till index sidan då visa den Trailers och Recommendations samt function för att söka
if(window.location.pathname === '/' || window.location.pathname === '/Index.html') {
    console.log('Index.html');


//Till bår meny sidan för visa våran meny och hambergare meny som visa about us knappen
} else if(window.location.pathname === '/Our_menu.html') {
    console.log('Our_menu.html');
    getMenu();

//Till favorites sidan då visa favoritfilmer samt function för att söka
} else if(window.location.pathname === '/About_us.html') {
    console.log('About_us.html');

//Till movie sidan då visa detaljer om filmen samt function för att söka
} else if(window.location.pathname === '/eta.html') {
    console.log('eta.html');

//Till search sidan då visa sökresultat samt function för att söka
} else if(window.location.pathname === '/my_order.html') {
    console.log('my_order.html');

//
} else if(window.location.pathname === '/receipt.html') {
    console.log('receipt.html');

}