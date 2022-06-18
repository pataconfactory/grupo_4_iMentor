window.addEventListener('load', function () {

    let password = document.querySelector('#password');
    let passwordError = document.querySelector('.password-error');
    password.addEventListener('blur', function () {
        let passwordValue = password.value;
        if (!passwordValue) {
            passwordError.innerHTML = 'Debes completar la contraseña';
        } else if(passwordValue.length < 8) {
            passwordError.innerHTML = 'La constraseña debe tener al menos 8 caracteres, un número, una letra mayúscula y un caracter especial';
        } else {
            passwordError.innerHTML = '';
        }
    });

    let email = document.querySelector('#email');
    let emailError = document.querySelector('.email-error');
    let input = email;
    emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    email.addEventListener('blur', function (e) {
        let emailValue = email.value;
        if (!emailValue) {
            emailError.innerHTML = 'Debes completar el correo electrónico';
        } else if (!emailRegex.test(input.value)) {
            emailError.innerHTML = 'La dirección de correo electrónico no es válida';
        } else {
            emailError.innerHTML = '';
        }
    });

    let form = document.querySelector('.login-form');
    form.addEventListener('submit', function (e) {

        let errors = [];

        let password = document.querySelector('#password');
        let passwordError = document.querySelector('.password-error');
        let passwordValue = password.value;
        if (!passwordValue) {
            passwordError.innerHTML = 'Debes completar la contraseña';
            errors.push('Debes completar la contraseña');
        } else if (passwordValue.length < 8) {
            passwordError.innerHTML = 'La constraseña debe tener al menos 8 caracteres, un número, una letra mayúscula y un caracter especial';
            errors.push('La constraseña debe tener al menos 8 caracteres, un número, una letra mayúscula y un caracter especial');
        } else {
            passwordError.innerHTML = '';
        }

        let email = document.querySelector('#email');
        let emailError = document.querySelector('.email-error');
        let emailValue = email.value;
        let input = email;
        emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!emailValue) {
            emailError.innerHTML = 'Debes completar el correo electrónico';
            errors.push('Debes completar el correo electrónico');
        } else if (!emailRegex.test(input.value)) {
            emailError.innerHTML = 'La dirección de correo electrónico no es válida';
            errors.push('La dirección de correo electrónico no es válida');
        } else {
            emailError.innerHTML = '';
        }

        if (errors.length > 0) {
            e.preventDefault();
        }

    });
});