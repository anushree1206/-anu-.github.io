function showForm(formType) {
    const signInForm = document.getElementById('signInForm');
    const registerForm = document.getElementById('registerForm');
    const signInTab = document.getElementById('signInTab');
    const registerTab = document.getElementById('registerTab');

    if (formType === 'signIn') {
      signInForm.classList.remove('hidden');
      registerForm.classList.add('hidden');
      signInTab.classList.add('active');
      registerTab.classList.remove('active');
    } else {
      registerForm.classList.remove('hidden');
      signInForm.classList.add('hidden');
      registerTab.classList.add('active');
      signInTab.classList.remove('active');
    }
  }

  function validateSignIn() {
    const username = document.getElementById('signInUsername').value;
    const password = document.getElementById('signInPassword').value;
    const errorMessage = document.getElementById('signInError');

    errorMessage.textContent = '';

    if (!username || !password) {
      errorMessage.textContent = 'Please enter both username and password';
      return;
    }

    const demoUsername = 'vietnamTraveler';
    const demoPassword = 'welcomeVietnam123';

    if (username === demoUsername && password === demoPassword) {
      alert('Login successful!');
      window.location.href = 'home.html';
    } else {
      errorMessage.textContent = 'Invalid username or password';
    }
  }

  function validateRegister() {
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const errorMessage = document.getElementById('registerError');

    errorMessage.textContent = '';

    if (!username || !email || !password) {
      errorMessage.textContent = 'Please fill out all fields';
      return;
    }

    if (!email.includes('@')) {
      errorMessage.textContent = 'Please enter a valid email address';
      return;
    }

    alert('Registration successful! You can now log in.');
    showForm('signIn');
}