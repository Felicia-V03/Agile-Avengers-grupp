document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const mobileInput = document.getElementById("mobile");
    const passwordInput = document.getElementById("password");
    const genderInput = document.querySelector('input[name="gender"]:checked'); // Radio buttons for M/F
    const registerBtn = document.querySelector(".register-btn");

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

    function clearError(input) {
        let error = input.nextElementSibling;
        if (error && error.classList.contains("error-text")) error.remove();
    }

    // 📌 Mobile number auto-formatting: XXX XXX XX XX
    mobileInput.addEventListener("input", function () {
        let value = mobileInput.value.replace(/\D/g, ""); // Remove all non-digit characters

        // Apply the formatting (XXX XXX XX XX)
        if (value.length > 3 && value.length <= 6) {
            value = value.replace(/(\d{3})(\d{0,3})/, "$1 $2");
        } else if (value.length > 6 && value.length <= 8) {
            value = value.replace(/(\d{3})(\d{3})(\d{0,2})/, "$1 $2 $3");
        } else if (value.length > 8) {
            value = value.replace(/(\d{3})(\d{3})(\d{2})(\d{0,2})/, "$1 $2 $3 $4");
        }

        mobileInput.value = value; // Set the formatted value
    });

    registerBtn.addEventListener("click", function (event) {
        event.preventDefault();
        let isValid = true;

        if (!nameInput.value.trim()) {
            showError(nameInput, "Please enter your name");
            isValid = false;
        } else {
            clearError(nameInput);
        }

        if (!emailInput.value.trim() || !emailInput.value.includes("@")) {
            showError(emailInput, "Enter a valid email");
            isValid = false;
        } else {
            clearError(emailInput);
        }

        let mobileNumber = mobileInput.value.replace(/\D/g, ""); // Remove spaces for validation
        if (!/^\d{10}$/.test(mobileNumber)) {
            showError(mobileInput, "Enter a valid 10-digit number");
            isValid = false;
        } else if (/^(\d)\1{9}$/.test(mobileNumber)) {
            showError(mobileInput, "Number does not exist");
            isValid = false;
        } else {
            clearError(mobileInput);
        }

        if (!passwordInput.value.trim()) {
            showError(passwordInput, "Please enter a password");
            isValid = false;
        } else {
            clearError(passwordInput);
        }

        // ✅ Validate Gender Selection
        const selectedGender = document.querySelector('input[name="gender"]:checked');
        if (!selectedGender) {
            showError(registerBtn, "Please select a gender");
            isValid = false;
        } else {
            clearError(registerBtn);
        }

        if (isValid) {
            const gender = selectedGender.value; // 'M' or 'F'
            const profilePic = gender === "M" ? "Myy.png" : "Fyy.png"; // Assign profile picture

            const newUser = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                mobile: mobileInput.value.trim(),
                password: passwordInput.value.trim(),
                gender: gender,
                profilePic: profilePic, // Store the profile picture based on gender
            };

            // Retrieve existing users or create an empty array
            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));

            // ✅ Clear input fields before redirecting
            nameInput.value = "";
            emailInput.value = "";
            mobileInput.value = "";
            passwordInput.value = "";

            // ✅ Redirect to login page
            window.location.href = "log-in.html";
        }
    });
});
