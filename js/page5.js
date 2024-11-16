function togglePassword(id) {
    const passwordField = document.getElementById(id);
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
}