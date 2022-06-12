window.addEventListener('load', function () {

    let form = this.document.querySelector('.register-form');
    form.addEventListener('submit', function (e) {

        let errors = [];

        let password = document.querySelector('#password');
        let passwordLength = document.querySelector('.password-length');
        let passwordValue = password.value;
        if (!passwordValue) {
            passwordLength.innerHTML = 'Debes completar la contraseña';
            errors.push('Debes completar la contraseña');
        } else if (passwordValue.length < 8) {
            passwordLength.innerHTML = 'La constraseña debe tener al menos 8 caracteres';
            errors.push('La constraseña debe tener al menos 8 caracteres');
        }

        let email = document.querySelector('#email');
        let emailError = document.querySelector('.email-error');
        let emailValue = email.value;
        if (!emailValue) {
            emailError.innerHTML = 'Debes completar el correo electrónico';
            errors.push('Debes completar el correo electrónico');
        }
        let input = email;
        emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!emailRegex.test(input.value)) {
            emailError.innerHTML = 'La dirección de correo electrónico no es válida';
            errors.push('La dirección de correo electrónico no es válida');
        }

        let firstName = document.querySelector('#first_name');
        let firstNameError = document.querySelector('.first_name-error');
        let firstNameValue = firstName.value;
        if (!firstNameValue) {
            firstNameError.innerHTML = 'Debes completar el nombre';
            errors.push('Debes completar el nombre');
        } else if (firstNameValue.length < 2) {
            firstNameError.innerHTML = 'El nombre debe tener al menos 2 caracteres';
            errors.push('El nombre debe tener al menos 2 caracteres');
        }

        let lastName = document.querySelector('#last_name');
        let lastNameError = document.querySelector('.last_name-error');
        let lastNameValue = lastName.value;
        if (!lastNameValue) {
            lastNameError.innerHTML = 'Debes completar el apellido';
            errors.push('Debes completar el apellido')
        } else if (lastNameValue.length < 2) {
            lastNameError.innerHTML = 'El apellido debe tener al menos 2 caracteres';
            errors.push('El apellido debe tener al menos 2 caracteres');
        }

        let userName = document.querySelector('#user_name');
        let userNameError = document.querySelector('.user_name-error');
        let userNameValue = userName.value;
        if (!userNameValue) {
            userNameError.innerHTML = 'Debes completar el nombre de usuario';
            errors.push('Debes completar el nombre de usuario');
        }

        let dateBirth = document.querySelector('#date_birth');
        let dateBirthError = document.querySelector('.date_birth-error');
        let dateBirthValue = dateBirth.value;
        let birthday = new Date(dateBirthValue);
        let today = new Date();
        let dayToday = today.getDate();
        let monthToday = today.getMonth() + 1;
        let yearToday = today.getFullYear();
        let minYear = yearToday - 10;
        let minDate = new Date(minYear + '-' + monthToday + '-' + dayToday);
        if (!dateBirthValue) {
            dateBirthError.innerHTML = 'Debes completar la fecha de nacimiento';
            errors.push('Debes completar la fecha de nacimiento');
        } else if(birthday>minDate){
            dateBirthError.innerHTML = 'La edad mínima para registrarse es de 10 años';
            errors.push('La edad mínima para registrarse es de 10 años');
        }

        let genre = document.querySelector('#genero');
        let genreError = document.querySelector('.genre-error');
        let genreValue = genre.value;
        if (!genreValue) {
            genreError.innerHTML = 'Debes completar el género';
            errors.push('Debes completar el género');
        }

        let country = document.querySelector('#country');
        let countryError = document.querySelector('.country-error');
        let countryValue = country.value;
        if (!countryValue) {
            countryError.innerHTML = 'Debes completar el país';
            errors.push('Debes completar el país');
        }

        let title = document.querySelector('#title');
        let titleError = document.querySelector('.title-error');
        let titleValue = title.value;
        if (!titleValue) {
            titleError.innerHTML = 'Debes completar el título';
            errors.push('Debes completar el título');
        }

        let avatar = document.querySelector('#avatar');
        let avatarError = document.querySelector('.avatar-error');
        let avatarValue = avatar.value;
        if (!avatarValue) {
            avatarError.innerHTML = 'Debes completar la imagen de usuario';
            errors.push('Debes completar la imagen de usuario');
        } else {
            if (!(avatarValue.includes('.jpg') || avatarValue.includes('.jpeg') || avatarValue.includes('.png') || avatarValue.includes('.gif'))) {
                avatarError.innerHTML = 'El formato de archivo no es válido, las extensiones permitidas son .jpg, .jpeg, .png y .gif';
                errors.push('El formato de archivo no es válido, las extensiones permitidas son .jpg, .jpeg, .png y .gif');
            }
        }

        if (errors.length > 0) {
            e.preventDefault();
        }
    });

    let password = document.querySelector('#password');
    let passwordLength = document.querySelector('.password-length');

    password.addEventListener('focus', function () {
        passwordLength.innerHTML = 'La constraseña debe tener al menos 8 caracteres';
    });

    password.addEventListener('blur', function () {
        let passwordValue = password.value;
        if (!passwordValue) {
            passwordLength.innerHTML = 'Debes completar la contraseña';
        } else if (passwordValue.length > 7) {
            passwordLength.innerHTML = '';
        } else {
            passwordLength.innerHTML = 'La constraseña debe tener al menos 8 caracteres';
        }
    });

    let pass = [];
    password.addEventListener('keypress', function (e) {
        let key = e.key;
        pass.push(key);
        if (pass.length > 7) {
            passwordLength.innerHTML = '';
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

    let firstName = document.querySelector('#first_name');
    let firstNameError = document.querySelector('.first_name-error');
    firstName.addEventListener('blur', function () {
        let firstNameValue = firstName.value;
        if (!firstNameValue) {
            firstNameError.innerHTML = 'Debes completar el nombre';
        } else if (firstNameValue.length < 2) {
            firstNameError.innerHTML = 'El nombre debe tener al menos 2 caracteres';
        } else {
            firstNameError.innerHTML = '';
        }
    });

    let lastName = document.querySelector('#last_name');
    let lastNameError = document.querySelector('.last_name-error');
    lastName.addEventListener('blur', function () {
        let lastNameValue = lastName.value;
        if (!lastNameValue) {
            lastNameError.innerHTML = 'Debes completar el apellido';
        } else if (lastNameValue.length < 2) {
            lastNameError.innerHTML = 'El apellido debe tener al menos 2 caracteres';
        } else {
            lastNameError.innerHTML = '';
        }
    });

    let userName = document.querySelector('#user_name');
    let userNameError = document.querySelector('.user_name-error');
    userName.addEventListener('blur', function () {
        let userNameValue = userName.value;
        if (!userNameValue) {
            userNameError.innerHTML = 'Debes completar el nombre de usuario';
        } else {
            userNameError.innerHTML = '';
        }
    });

    let dateBirth = document.querySelector('#date_birth');
    let dateBirthError = document.querySelector('.date_birth-error');
    dateBirth.addEventListener('blur', function () {
        let dateBirthValue = dateBirth.value;
        let birthday = new Date(dateBirthValue);
        let today = new Date();
        let dayToday = today.getDate();
        let monthToday = today.getMonth() + 1;
        let yearToday = today.getFullYear();
        let minYear = yearToday - 10;
        let minDate = new Date(minYear + '-' + monthToday + '-' + dayToday);

        if (!dateBirthValue) {
            dateBirthError.innerHTML = 'Debes completar la fecha de nacimiento';
        } else if(birthday>minDate){
            dateBirthError.innerHTML = 'La edad mínima para registrarse es de 10 años';
        } else {
            dateBirthError.innerHTML = '';
        }
    });

    let genre = document.querySelector('#genero');
    let genreError = document.querySelector('.genre-error');
    genre.addEventListener('blur', function () {
        let genreValue = genre.value;
        if (!genreValue) {
            genreError.innerHTML = 'Debes completar el género';
        } else {
            genreError.innerHTML = '';
        }
    });

    let country = document.querySelector('#country');
    let countryError = document.querySelector('.country-error');
    country.addEventListener('blur', function () {
        let countryValue = country.value;
        if (!countryValue) {
            countryError.innerHTML = 'Debes completar el país';
        } else {
            countryError.innerHTML = '';
        }
    });

    let title = document.querySelector('#title');
    let titleError = document.querySelector('.title-error');
    title.addEventListener('blur', function () {
        let titleValue = title.value;
        if (!titleValue) {
            titleError.innerHTML = 'Debes completar el título';
        } else {
            titleError.innerHTML = '';
        }
    });

    let avatar = document.querySelector('#avatar');
    let avatarError = document.querySelector('.avatar-error');
    avatar.addEventListener('change', function () {
        let avatarValue = avatar.value;
        if (avatarValue) {
            if (!(avatarValue.includes('.jpg') || avatarValue.includes('.jpeg') || avatarValue.includes('.png') || avatarValue.includes('.gif'))) {
                avatarError.innerHTML = 'El formato de archivo no es válido, las extensiones permitidas son .jpg, .jpeg, .png y .gif';
            } else {
                avatarError.innerHTML = '';
            }
        }
    });

});