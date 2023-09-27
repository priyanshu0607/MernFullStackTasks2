const form = document.getElementById('form');
const username = document.getElementById('username');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const age = document.getElementById('age');
const phone = document.getElementById('phone');
const state = document.getElementById('state');
const address = document.getElementById('address');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const lastnameValue = lastname.value.trim()
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const ageValue = age.value.trim();
    const phoneValue = phone.value.trim();
    const stateValue = state.value.trim();
    const addressValue = address.value.trim();

    if (usernameValue === '') {
        setError(username, 'Poor');
    } else {
        setSuccess(username);
    }

    if (lastnameValue === '') {
        setError(lastname, 'Poor');
    } else {
        setSuccess(lastname);
    }

    if (emailValue === '') {
        setError(email, 'Poor');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Not Valid');
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Poor');
    } else if (passwordValue.length < 3) {
        setError(password, 'Password must be at least 2 character.')
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Poor');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Mismatch");
    } else {
        setSuccess(password2);
    }

    if (ageValue === '') {
        setError(age, 'Poor');
    } else {
        setSuccess(age);
    }

    if (phoneValue === '') {
        setError(phone, 'Poor');
    } else {
        setSuccess(phone);
    }

    if (stateValue === '') {
        setError(state, 'Poor');
    } else {
        setSuccess(state);
    }

    if(addressValue === ''){
        setError(address,'Poor');
    }else {
        setSuccess(address);
    }

};