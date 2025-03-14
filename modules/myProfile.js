document.addEventListener("DOMContentLoaded", function () {
    // Back to menu button
    document.querySelector(".menu-btn").addEventListener("click", function () {
        window.location.href = "our-menu.html";
    });

    // Order history button
    document.querySelector(".order-history-btn").addEventListener("click", function () {
        window.location.href = "my-order.html";
    });

    // Edit profile button
    document.querySelector(".edit-profile-btn").addEventListener("click", function () {
        window.location.href = "edit-profile.html";
    });
    
    // Edit kundtjenst button
    document.querySelector(".support-btn").addEventListener("click", function () {
        window.location.href = "about-us.html";
    });

    // Back button
    document.querySelector(".back-btn").addEventListener("click", function () {
        window.history.back();
    });
});
