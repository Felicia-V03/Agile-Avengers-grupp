import { getMenu } from "../components/getMenu.js"
import { getCart } from "../components/getcart.js"
import { openAndCloseNav, dropDownStatus } from "../modules/navMenu.js";
import { returnBtn, moneyBtn, receiptBtn, cartBtn} from "../modules/button.js"

//Till index sidan då visa den Trailers och Recommendations samt function för att söka
if(window.location.pathname === '/' || window.location.pathname === '/index.html') {
    console.log('index.html');
    time();

//Till bår meny sidan för visa våran meny och hambergare meny som visa about us knappen
} else if(window.location.pathname === '/our-menu.html') {
    console.log('our-menu.html');
    getMenu();
    openAndCloseNav();  
    dropDownStatus();
    cartBtn();

//Till about us sidan visa information om våran app
} else if(window.location.pathname === '/about-us.html') {
    console.log('about-us.html');
    returnBtn();

//Till matlagningstid sidan visa upp lång tid det tar före användare kan hämta sin mat
} else if(window.location.pathname === '/eta.html') {
    console.log('eta.html');
    returnBtn();
    receiptBtn();

//Till order sidan visa upp odersnummer och information
} else if(window.location.pathname === '/my-order.html') {
    console.log('my-order.html');
    getCart();
    moneyBtn();
    returnBtn();

//Till kvittor sidan visa upp odersnummer och information
} else if(window.location.pathname === '/receipt.html') {
    console.log('receipt.html');
    getCart();
    returnBtn();

}

function time() {
    setTimeout(function() {
        window.location.href = "our-menu.html";
    }, 3000);
}