
export function openAndCloseNav() {
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".fa-bars");
    const closeButton = document.querySelector(".close-nav");
    const navMenu = document.querySelector(".navigation-meny"); 

    menuButton.addEventListener("click", function () {
        navMenu.classList.add("show-menu");
    });

    closeButton.addEventListener("click", function () {
        navMenu.classList.remove("show-menu");
    });

    navMenu.addEventListener("click", function (event) {
        if (event.target === navMenu) {
            navMenu.classList.remove("show-menu");
        }
    });
});
}