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
    const email = emailInput.value;
    const password = passwordInput.value;

    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then(response => response.text())
    .then(data => {
      alert(data);
      if (data === 'Login successful') {
        window.location.href = 'index.html';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Login failed');
    });
  });
});
