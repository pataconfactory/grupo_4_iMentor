window.addEventListener('load', function () {
    let password = document.querySelector('#password');
    let passwordError = document.querySelector('.password-error');

    password.addEventListener('blur', function () {
        let passwordValue = password.value;
        if (!passwordValue) {
            passwordError.innerHTML = 'Debes completar la contraseña';
        } else {
            passwordError.innerHTML = 'La constraseña debe tener al menos 8 caracteres';
        }
    });

    let email = document.querySelector('#email');
    let emailError = document.querySelector('.email-error');
    email.addEventListener('blur', function (e) {
        let emailValue = email.value;
        if (!emailValue) {
            emailError.innerHTML = 'Debes completar el correo electrónico';
        } else {
            let input = e.target;
            emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (!emailRegex.test(input.value)) {
                emailError.innerHTML = 'La dirección de correo electrónico no es válida';
            } else {
                emailError.innerHTML = '';
            }
        }
    });

})