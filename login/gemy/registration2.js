const form = document.getElementById('registrationForm');
const firstNameInput = document.getElementById('first_name');
const lastNameInput = document.getElementById('last_name');
const cityInput = document.getElementById('city');
const governorateInput = document.getElementById('governorate');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm_password');

const showError = (input, errorMessage) => {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = errorMessage;
    errorElement.classList.add('error');
};

const hideError = (input) => {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = '';
    errorElement.classList.remove('error');
};

const validateForm = () => {
    let isValid = true;

    if (firstNameInput.value.trim() === '') {
        showError(firstNameInput, 'First name cannot be empty.');
        isValid = false;
    } else {
        hideError(firstNameInput);
    }

    if (lastNameInput.value.trim() === '') {
        showError(lastNameInput, 'Last name cannot be empty.');
        isValid = false;
    } else {
        hideError(lastNameInput);
    }

    if (cityInput.value.trim() === '') {
        showError(cityInput, 'City cannot be empty.');
        isValid = false;
    } else {
        hideError(cityInput);
    }

    if (governorateInput.value.trim() === '') {
        showError(governorateInput, 'Governorate cannot be empty.');
        isValid = false;
    } else {
        hideError(governorateInput);
    }

    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Email cannot be empty.');
        isValid = false;
    } else if (!emailInput.validity.valid) {
        showError(emailInput, 'Please enter a valid email address.');
        isValid = false;
    } else {
        hideError(emailInput);
    }

    if (phoneInput.value.trim() === '') {
        showError(phoneInput, 'Phone cannot be empty.');
        isValid = false;
    } else if (!phoneInput.validity.valid) {
        showError(phoneInput, 'Please enter a valid phone number (11 digits).');
        isValid = false;
    } else {
        hideError(phoneInput);
    }

    if (passwordInput.value.trim() === '') {
        showError(passwordInput, 'Password cannot be empty.');
        isValid = false;
    } else if (passwordInput.value.length < 8) {
        showError(passwordInput, 'Password must be at least 8 characters long.');
        isValid = false;
    } else {
        hideError(passwordInput);
    }

    if (confirmPasswordInput.value.trim() === '') {
        showError(confirmPasswordInput, 'Confirm password cannot be empty.');
        isValid = false;
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        showError(confirmPasswordInput, 'Passwords do not match.');
        isValid = false;
    } else {
        hideError(confirmPasswordInput);
    }

    return isValid;
};

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (validateForm()) {
        // If the form is valid, submit it
        this.submit();
    }
});

firstNameInput.addEventListener('input', () => hideError(firstNameInput));
lastNameInput.addEventListener('input', () => hideError(lastNameInput));
cityInput.addEventListener('input', () => hideError(cityInput));
governorateInput.addEventListener('input', () => hideError(governorateInput));
emailInput.addEventListener('input', () => hideError(emailInput));
phoneInput.addEventListener('input', () => hideError(phoneInput));
passwordInput.addEventListener('input', () => hideError(passwordInput));
confirmPasswordInput.addEventListener('input', () => hideError(confirmPasswordInput));