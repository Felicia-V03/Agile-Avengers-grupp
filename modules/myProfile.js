export function manageProfilePage() {
    document.addEventListener("DOMContentLoaded", function () {
        const profileName = document.getElementById("profileName");
        const profileEmail = document.getElementById("profileEmail");
        const profileMobile = document.getElementById("profileMobile");
        const profileImage = document.getElementById("profileImage");
        const editProfileBtn = document.querySelector(".edit-profile-btn"); // Pen Icon
        const mainMenuBtn = document.querySelector(".menu-btn");
        const contactUsBtn = document.querySelector(".support-btn");

        // Retrieve the logged-in user
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));

        console.log("Loaded currentUser:", currentUser); // Debugging line

        if (currentUser) {
            profileName.textContent = currentUser.name;
            profileEmail.textContent = currentUser.email;
            profileMobile.textContent = currentUser.mobile;
            
            // Ensure profilePic is set correctly
            profileImage.src = currentUser.profilePic ? `./assets/${currentUser.profilePic}` : "./assets/default.png";
        } else {
            profileName.textContent = "Guest";
            profileEmail.textContent = "Not logged in";
            profileMobile.textContent = "-";
            profileImage.src = "./assets/default.png";
        }

        // Event Listeners for Buttons
        if (editProfileBtn) {
            editProfileBtn.addEventListener("click", () => {
                console.log("Edit Profile button clicked");
                window.location.href = "edit-profile.html";
            });
        }

        if (mainMenuBtn) {
            mainMenuBtn.addEventListener("click", () => {
                console.log("Main Menu button clicked");
                window.location.href = "our-menu.html";
            });
        }

        if (contactUsBtn) {
            contactUsBtn.addEventListener("click", () => {
                console.log("Contact Us button clicked");
                window.location.href = "about-us.html";
            });
        }
    });
}

// ✅ Ensure the function runs when the script loads
manageProfilePage();
