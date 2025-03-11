export async function returnBtn() {
    document.addEventListener("DOMContentLoaded", () => {
    console.log("About Us page loaded");

    // Selecting the explore menu button
    const exploreButton = document.querySelector(".return-btn");

    if (exploreButton) {
        exploreButton.addEventListener("click", () => {
            window.location.href = "our-menu.html"; // Redirect to menu page
        });
    }

    });
}

export async function moneyBtn() {
    document.addEventListener("DOMContentLoaded", () => {
        console.log("About Us page loaded");
    
        // Selecting the explore menu button
        const exploreButton = document.querySelector(".order-btn");
    
        if (exploreButton) {
            exploreButton.addEventListener("click", () => {
                window.location.href = "eta.html"; // Redirect to menu page
            });
        }
    
    });
}

export async function receiptBtn() {
    document.addEventListener("DOMContentLoaded", () => {
        console.log("About Us page loaded");
    
        // Selecting the explore menu button
        const exploreButton = document.querySelector(".receipt-btn");
    
        if (exploreButton) {
            exploreButton.addEventListener("click", () => {
                window.location.href = "receipt.html"; // Redirect to menu page
            });
        }
    
    });
}