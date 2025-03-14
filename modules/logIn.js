document.addEventListener("DOMContentLoaded", function () {
    // Get input fields and buttons
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const forgotPassword = document.getElementById("forgot-password");
    const loginBtn = document.querySelector(".login-btn");
    const verifyBtn = document.querySelector(".verify-btn");
    const registerBtn = document.querySelector(".register-btn");

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

    // 📌 Auto-format mobile number (XXX XXX XX XX)
    forgotPassword.addEventListener("input", function () {
        let value = forgotPassword.value.replace(/\D/g, ""); // Remove non-numeric characters

        // Apply formatting: XXX XXX XX XX
        if (value.length > 3 && value.length <= 6) {
            value = value.replace(/(\d{3})(\d{0,3})/, "$1 $2");
        } else if (value.length > 6 && value.length <= 8) {
            value = value.replace(/(\d{3})(\d{3})(\d{0,2})/, "$1 $2 $3");
        } else if (value.length > 8) {
            value = value.replace(/(\d{3})(\d{3})(\d{2})(\d{0,2})/, "$1 $2 $3 $4");
        }

        forgotPassword.value = value;
    });

    // 📌 Log in button: Check fields and go to "my-profile.html"
    loginBtn.addEventListener("click", function (event) {
        event.preventDefault();
        let isValid = true;

        if (!username.value.trim()) {
            showError(username, "Please enter your username");
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
                user => (user.email === username.value.trim() || user.mobile === username.value.trim()) &&
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

    // 📌 Verify button: Check email or phone number
    verifyBtn.addEventListener("click", function () {
        let value = forgotPassword.value.trim();
        let numericValue = value.replace(/\D/g, ""); // Remove spaces for validation

        if (value.includes("@")) {
            clearError(forgotPassword);
            showError(forgotPassword, "Login detail sent, change password", "green");
            forgotPassword.value = ""; // Clear input
        } else if (/^\d{10}$/.test(numericValue)) {
            if (/^(\d)\1{9}$/.test(numericValue)) {
                showError(forgotPassword, "Number does not exist");
            } else {
                clearError(forgotPassword);
                showError(forgotPassword, "Code sent, change your password", "green");
                forgotPassword.value = ""; // Clear input
            }
        } else {
            showError(forgotPassword, "Enter a valid email or 10-digit number");
        }
    });

    // 📌 Register button: Redirect to "register.html"
    registerBtn.addEventListener("click", function () {
        window.location.href = "register.html";
    });
});
