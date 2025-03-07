document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('registerUsername').value;
        const password = document.getElementById('registerPassword').value;

        if (localStorage.getItem(username)) {
            document.getElementById('registerMessage').textContent = 'Username already exists!';
        } else {
            localStorage.setItem(username, password);
            document.getElementById('registerMessage').textContent = 'Registration successful!';
        }
    });

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        const storedPassword = localStorage.getItem(username);

        if (username === "admin" && password === "password") {
            // Redirect to the dashboard page
            window.location.href = "index5.html";
        } else {
            document.getElementById('loginMessage').textContent = 'Invalid username or password!';
        }
    });
});