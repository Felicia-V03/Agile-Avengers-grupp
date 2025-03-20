export function manageProfilePage() {
    document.addEventListener("DOMContentLoaded", function () {
        const profileName = document.getElementById("profileName");
        const profileEmail = document.getElementById("profileEmail");
        const profileMobile = document.getElementById("profileMobile");
        const profileImage = document.getElementById("profileImage");
        const editProfileBtn = document.querySelector(".edit-profile-btn"); // Pen Icon
        const mainMenuBtn = document.querySelector(".menu-btn");
        const contactUsBtn = document.querySelector(".support-btn");
        const logOutBtn = document.querySelector(".log-out-btn");
        const logInBtn = document.querySelector(".log-in-btn");

        // Retrieve the logged-in user
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));

        // console.log("Loaded currentUser:", currentUser); // Debugging line

        if (currentUser) {
            // document.querySelector(".logg-In").classList.add = ("d-none");

            profileName.textContent = currentUser.name;
            profileEmail.textContent = currentUser.email;
            profileMobile.textContent = currentUser.mobile;
            
            // Ensure profilePic is set correctly
            profileImage.src = currentUser.profilePic ? `./assets/${currentUser.profilePic}` : "./assets/default.png";
        
            if (currentUser.role === "admin") {
                profileName.textContent = currentUser.name + "";
                
            }
        
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

export function loginLogout() {
    document.addEventListener("DOMContentLoaded", () => {
        const logOutBtn = document.querySelector("#logOutBtn"); // Knappen för att logga ut
        const logInBtn = document.querySelector("#logInBtn"); // Knappen för att logga in
        const currentUser = localStorage.getItem("currentUser");
    
        if (currentUser) {
            // Om en användare är inloggad: Visa "Logga ut", dölj "Logga in"
            logOutBtn.classList.remove("d-none");
            logInBtn.classList.add("d-none");
        } else {
            // Om ingen är inloggad: Visa "Logga in", dölj "Logga ut"
            logInBtn.classList.remove("d-none");
            logOutBtn.classList.add("d-none");
        }
    
        // När användaren klickar på "Logga ut"
        logOutBtn.addEventListener("click", () => {
            console.log("Logga ut-knappen klickad");
    
            localStorage.removeItem("currentUser");
    
            // Skicka användaren till login-sidan direkt
            window.location.href = "landing-page.html";
        });
    
        // När användaren klickar på "Logga in"
        logInBtn.addEventListener("click", () => {
            window.location.href = "log-in.html";
        });
    });
}

