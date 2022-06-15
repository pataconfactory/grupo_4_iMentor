window.addEventListener('load', function () {

    let form = this.document.querySelector('.contact-form');
    form.addEventListener('submit', function (e) {

        let errors = [];

        let name = document.querySelector('#name');
        let nameError = document.querySelector('.name-error');
        let nameValue = name.value;
        if (!nameValue) {
            nameError.innerHTML = 'Debes completar el nombre';
            errors.push('Debes completar el nombre');
        } else if (nameValue.length < 2) {
            nameError.innerHTML = 'El nombre debe tener al menos 2 caracteres';
            errors.push('El nombre debe tener al menos 2 caracteres');
        }

        let email = document.querySelector('#email');
        let emailError = document.querySelector('.email-error');
        let emailValue = email.value;
        if (!emailValue) {
            emailError.innerHTML = 'Debes completar el correo electrónico';
            errors.push('Debes completar el correo electrónico');
        }

        let phone = document.querySelector('#phone');
        let phoneError = document.querySelector('.phone-error');
        let phoneValue = phone.value;
        if (!phoneValue) {
            phoneError.innerHTML = 'Debes completar el teléfono';
            errors.push('Debes completar el teléfono');
        }
        let message = document.querySelector('#message')
        let messageValue = message.value;
        let messageError = document.querySelector('.message-error');
        if (!messageValue) {
            messageError.innerHTML = 'Debe completar el mensaje';
            errors.push('Debe completar el mensaje');
        } 
        
        if (errors.length > 0) {
            e.preventDefault();
        }
    });

    let name = document.querySelector('#name');
    let nameError = document.querySelector('.name-error');
    name.addEventListener('blur', function (e) {
    let nameValue = name.value;
    if (!nameValue) {
        nameError.innerHTML = 'Debes completar el nombre';
        errors.push('Debes completar el nombre');
    } else if (nameValue.length < 2) {
        nameError.innerHTML = 'El nombre debe tener al menos 2 caracteres';
        errors.push('El nombre debe tener al menos 2 caracteres');
    }
});
    let email = document.querySelector('#email');
    let emailError = document.querySelector('.email-error');
    email.addEventListener('blur', function (e) {
    let emailValue = email.value;
    if (!emailValue) {
        emailError.innerHTML = 'Debes completar el correo electrónico';
        errors.push('Debes completar el correo electrónico');
    }
});

    let phone = document.querySelector('#phone');
    let phoneError = document.querySelector('.phone-error');
    phone.addEventListener('blur', function (e) {
    let phoneValue = phone.value;
    if (!phoneValue) {
        phoneError.innerHTML = 'Debes completar el teléfono';
        errors.push('Debes completar el teléfono');
    }
    if (errors.length > 0) {
        e.preventDefault();
    };

    let message = document.querySelector('#message')
    let messageError = document.querySelector('.message-error');
    message.addEventListener('focus', function () {
        messageError.innerHTML = 'Debe completar el mensaje con más de 20 caracteres';
    });
    message.addEventListener('blur', function () {
        let messageValue = message.value;
        if (!messageValue) {
            messageError.innerHTML = 'Debe completar el mensaje';
        } else if (messageValue.length > 20) {
            messageError.innerHTML = '';
        } else {
            messageError.innerHTML = 'Debe completar el mensaje con más de 20 caracteres';
        }
    });

    let messageContact = [];
    message.addEventListener('keypress', function (e) {
        let key = e.key;
        messageContact.push(key);
        if (messageContact.length > 20) {
            messageError.innerHTML = '';
        }
    });

});

});