document.addEventListener("DOMContentLoaded", function () {
    const profileName = document.getElementById("profileName");
    const profileEmail = document.getElementById("profileEmail");
    const profileMobile = document.getElementById("profileMobile");
    const profileImage = document.getElementById("profileImage");

    // Retrieve the logged-in user
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    console.log("Loaded currentUser:", currentUser); // Debugging line

    if (currentUser) {
        profileName.textContent = currentUser.name;
        profileEmail.textContent = currentUser.email;
        profileMobile.textContent = currentUser.mobile;
        profileImage.src = `./assets/${currentUser.profilePic}`;
    } else {
        profileName.textContent = "Guest";
        profileEmail.textContent = "Not logged in";
        profileMobile.textContent = "-";
        profileImage.src = "./assets/default.png";
    }
});
