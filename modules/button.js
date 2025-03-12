export async function returnBtn() {
    document.addEventListener("DOMContentLoaded", () => {
        // Selecting the explore menu button
        const exploreButton = document.querySelector(".return-btn");
        const backArrow = document.querySelector('.my-icon')

        if (exploreButton) {
            exploreButton.addEventListener("click", () => {
                window.location.href = "our-menu.html"; // Redirect to menu page
            });
        }

        if (backArrow) {
            backArrow.addEventListener("click", () => {
                window.location.href = "our-menu.html";
            });
        }

    });
}

export async function moneyBtn() {
    document.addEventListener("DOMContentLoaded", () => {    
        // Selecting the explore menu button
        const exploreButton = document.querySelector(".order-btn");
    
        if (exploreButton) {
            exploreButton.addEventListener("click", () => {
                window.location.href = "eta.html"; // Redirect to menu page
            });
        }
    
    });
}

export async function cartBtn() {
    document.addEventListener("DOMContentLoaded", () => {    
        // Selecting the explore menu button
        const exploreButton = document.querySelector(".cart");
    
        if (exploreButton) {
            exploreButton.addEventListener("click", () => {
                window.location.href = "my-order.html"; // Redirect to menu page
            });
        }
    
    });
}

export async function receiptBtn() {
    document.addEventListener("DOMContentLoaded", () => {    
        // Selecting the explore menu button
        const exploreButton = document.querySelector(".receipt-btn");
    
        if (exploreButton) {
            exploreButton.addEventListener("click", () => {
                window.location.href = "receipt.html"; // Redirect to menu page
            });
        }
    
    });
}