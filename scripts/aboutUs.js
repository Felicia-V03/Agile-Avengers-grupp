document.addEventListener("DOMContentLoaded", () => {
    console.log("About Us page loaded");

    // Selecting the explore menu button
    const exploreButton = document.querySelector(".about-btn");

    if (exploreButton) {
        exploreButton.addEventListener("click", () => {
            window.location.href = "Our_menu.html"; // Redirect to menu page
        });
    }

});
