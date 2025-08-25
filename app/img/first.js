document.addEventListener("DOMContentLoaded", function () {
    const ctaButtons = document.querySelectorAll(".cta-button, .btn");
    
    ctaButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "login.html";
        });
    });

    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            
            if (email && password) {
                localStorage.setItem("user", email);
                window.location.href = "dashboard.html";
            } else {
                alert("Please enter valid login credentials.");
            }
        });
    }

    const logoutButton = document.getElementById("logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            localStorage.removeItem("user");
            window.location.href = "index.html";
        });
    }
});
