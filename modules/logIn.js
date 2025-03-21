import { oData } from "../data/data.js";
import { fetchData } from "./api.js";

export function loginUser() {
    document.addEventListener("DOMContentLoaded", async function () {
        try {
            if (!localStorage.getItem("users")) {
                await fetchData();
                const allUsers = oData.users;
    
                const userInfo = allUsers.map(user => ({
                    username: user.username,
                    email: user.email,
                    mobile: user.mobile,
                    password: user.password,
                    role: user.role
                }));
                localStorage.setItem('users', JSON.stringify(userInfo));
    
                console.log(userInfo);
            }

            // Get input fields and buttons
            const username = document.getElementById("username");
            const password = document.getElementById("password");
            const forgotPassword = document.getElementById("forgot-password");
            const loginBtn = document.querySelector(".login-btn");
            const verifyBtn = document.querySelector(".verify-btn");
            const registerBtn = document.querySelector(".register-btn");
            const backArrow = document.querySelector(".back-arrow"); // ✅ Get the back arrow

            // ✅ Add event listener to the back arrow
            if (backArrow) {
                backArrow.addEventListener("click", function () {
                    window.location.href = "our-menu.html";
                });
            }

            // Function to show an error message
            function showError(input, message, color = "red") {
                let error = input.nextElementSibling;
                if (!error || !error.classList.contains("error-text")) {
                    error = document.createElement("p");
                    error.classList.add("error-text");
                    input.parentNode.insertBefore(error, input.nextSibling);
                }
                error.textContent = message;
                error.style.color = color;
            }

            // Function to remove an error message
            function clearError(input) {
                let error = input.nextElementSibling;
                if (error && error.classList.contains("error-text")) error.remove();
            }

            // 📌 Allow both text (email) and numbers (phone) in the input fields
            username.addEventListener("input", function () {
                let value = username.value.trim();
                if (value.includes("@") || isNaN(value)) {
                    username.value = value;
                } else {
                    username.value = formatMobileNumber(value);
                }
            });

            // 📌 Format function for mobile numbers (only if it's a number)
            function formatMobileNumber(value) {
                let numericValue = value.replace(/\D/g, ""); // Remove non-numeric characters
                return numericValue.length > 6 ? numericValue.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4") : numericValue;
            }

            // 📌 Log in button: Check fields and go to "my-profile.html"
            loginBtn.addEventListener("click", function (event) {
                event.preventDefault();
                let isValid = true;

                if (!username.value.trim()) {
                    showError(username, "Please enter your email or phone number");
                    isValid = false;
                } else {
                    clearError(username);
                }

                if (!password.value.trim()) {
                    showError(password, "Please enter your password");
                    isValid = false;
                } else {
                    clearError(password);
                }

                if (isValid) {
                    let users = JSON.parse(localStorage.getItem("users")) || [];
                    let userFound = users.find(
                        user => (user.username === username.value.trim() || user.mobile === username.value.trim()) &&
                                 user.password === password.value.trim()
                    );

                    if (userFound) {
                        // ✅ Save the logged-in user
                        localStorage.setItem("currentUser", JSON.stringify(userFound));

                        // ✅ Redirect to profile page
                        window.location.href = "my-profile.html";
                    } else {
                        showError(username, "Invalid login credentials");
                    }
                }
            });
        } catch (error) {
            console.error("Error loading users:", error);
        }
    });
}