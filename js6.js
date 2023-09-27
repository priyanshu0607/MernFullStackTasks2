function validateform() {
    let name = document.myform.name.value;
    let password = document.myform.password.value;
    let usernameError = document.getElementById('username-error');
    let passwordError = document.getElementById('password-error');

    usernameError.innerHTML = '';
    passwordError.innerHTML = '';

    if (name.trim() === '') {
        usernameError.innerHTML = 'Username can\'t be blank';
        return false;
    }
    if (password.length < 6) {
        passwordError.innerHTML = 'Password must be at least 6 characters long.';
        return false;
    }
}