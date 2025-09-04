document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const continueBtn = document.querySelector('.continue-btn');
  const loginForm = document.querySelector('.login-form');

  function checkInputs() {
    if (emailInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
      continueBtn.disabled = false;
      continueBtn.classList.add('enabled');
    } else {
      continueBtn.disabled = true;
      continueBtn.classList.remove('enabled');
    }
  }

  emailInput.addEventListener('input', checkInputs);
  passwordInput.addEventListener('input', checkInputs);

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // For demonstration, show an alert. In a real app, this would send to server.
    alert('Login successful! Welcome to AT\'s Travel Agency.');
    // Optionally, redirect or something
    // window.location.href = 'index.html';
  });
});
