import { getMenu } from "../components/getMenu.js"
import { getCart } from "../components/getcart.js"
import { openAndCloseNav, dropDownStatus } from "../modules/navMenu.js";
import { returnBtn, moneyBtn, receiptBtn, cartBtn, newOrderBtn, aboutButton, findUsButton} from "../modules/button.js"
import { timeLeft, randomOrderNmbr } from "../components/eta.js";
import { loadGoogleMaps } from "../modules/findUs.js";
import { initSlider } from "../components/landing-page.js";
import { showOrderDetails } from "../modules/orderHistory.js";


///////////////////////////////////////////////////////////////////
import { loadProfile } from "../modules/profile.js";
import { registerUser } from "../modules/register.js";
import { loginUser } from "../modules/logIn.js";
import { editUserProfile } from "../modules/editProfile.js";
import { manageProfilePage } from "../modules/myProfile.js";
////////////////////////////////////////////////////////////////////////

//Till index sidan då visa den Trailers och Recommendations samt function för att söka
if(window.location.pathname === '/' || window.location.pathname === '/Index.html') {
    console.log('index.html');
    time();


} else if(window.location.pathname === '/landing-page.html') {
    console.log('landing-page.html');
    openAndCloseNav();
    findUsButton();
    initSlider();
    

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
    initSlider();
    aboutButton();

//Till matlagningstid sidan visa upp lång tid det tar före användare kan hämta sin mat
} else if(window.location.pathname === '/eta.html') {
    console.log('eta.html');
    timeLeft(15);
    randomOrderNmbr();
    newOrderBtn();
    receiptBtn();

//Till order sidan visa upp odersnummer och information
} else if(window.location.pathname === '/my-order.html') {
    console.log('my-order.html');
    localStorage.removeItem('orderNumber');
    getCart();
    moneyBtn();
    returnBtn();

//Till kvittor sidan visa upp odersnummer och information
} else if(window.location.pathname === '/receipt.html') {
    console.log('receipt.html');
    getCart();
    newOrderBtn();
    randomOrderNmbr();

} else if(window.location.pathname === '/find-us.html') {
    console.log('find-us.html');
    document.addEventListener('DOMContentLoaded', () => {
        loadGoogleMaps();
    });
    returnBtn();
}
else if(window.location.pathname === '/order-history.html') {
    console.log('order-history.html')
    showOrderDetails();
}

function time() {
    setTimeout(function() {
        window.location.href = "landing-page.html";
    }, 3000);
}




////////////////////////////////////////////////////////////

if (window.location.pathname === '/profile.html') {
    console.log('profile.html');
    loadProfile();
}
if (window.location.pathname === '/register.html') {
    console.log('register.html');
    registerUser();
}
if (window.location.pathname === '/log-in.html') {
    console.log('log-in.html');
    loginUser();
}
if (window.location.pathname === '/edit-profile.html') {
    console.log('edit-profile.html');
    editUserProfile();
}
if (window.location.pathname === '/my-profile.html') {
    console.log('my-profile.html');
    manageProfilePage();
}
///////////////////////////////////////////////////////////////