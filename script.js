// script.js

const card = document.querySelector('.card');
const switchToRegister = document.getElementById('switchToRegister');
const switchToLogin = document.getElementById('switchToLogin');

// Flip to the back (Register Form)
switchToRegister.addEventListener('click', () => {
  card.classList.add('flipped');
});

// Flip to the front (Login Form)
switchToLogin.addEventListener('click', () => {
  card.classList.remove('flipped');
});

// Handle Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert("Login Successful!");
});

// Handle Registration Form Submission
document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert("Registration Successful!");
});

