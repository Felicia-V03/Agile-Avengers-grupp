import { addClass, createElement, getElement } from "../utils/domUtils.js";

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

export async function dropDownStatus() {
    const cartIcon = document.querySelector(".cart");
    const dropDownContent = document.querySelector(".order-container");

    if (!cartIcon || !dropDownContent) return;

    cartIcon.addEventListener("click", () => {
        dropDownContent.classList.toggle("show-status");
        console.log("Hello from dropDownStatus");
        
    });

    dropDownContent.addEventListener("click", (event) => {
        if (event.target === dropDownContent) { // Klick utanför innehållet
            dropDownContent.classList.remove("show-status");
        }
    });
}



