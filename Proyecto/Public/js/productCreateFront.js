window.addEventListener('load', function () {

    let id = (id) => document.getElementById(id);

    let form = this.document.querySelector('.formulario-edicion-productos');
    let campoTitulo = id("name"),
        campoDescription = id("description"),
        campoCategory = id("category"),
        campoMentor = id("mentor"),
        campoDuration = id("duration"),
        campoHorario = id("horario"),
        campoDia = id("dia"),
        campoPrice = id("price"),
        campoImage = id("image");

    form.addEventListener('submit', function (event) {

        let errors = [];

        let campoTituloValue = campoTitulo.value;
        console.log(campoTituloValue)
        let errorTitulo = document.getElementById('error-name');
        if (!campoTituloValue) {
            errorTitulo.innerHTML = 'Debe completar el nombre de la asesoría';
            errors.push('Debe completar el nombre de la asesoría');
        } else if (campoTituloValue.length < 5) {
            errorTitulo.innerHTML = 'El nombre debe tener al menos 5 caracteres';
            errors.push('El nombre debe tener al menos 5 caracteres');
        }

        let campoDescriptionValue = campoDescription.value;
        let errorDescription = document.getElementById('error-description');
        if (!campoDescriptionValue) {
            errorDescription.innerHTML = 'Debe completar la descripción del producto';
            errors.push('Debe completar la descripción del producto');
        } else if (campoDescriptionValue.length < 20) {
            errorDescription.innerHTML = 'La descripción debe tener al menos 20 caracteres';
            errors.push('La descripción debe tener al menos 20 caracteres');
        }

        let categoryError = document.getElementById('error-category');
        let categoryValue = campoCategory.value;
        if (!categoryValue) {
            categoryError.innerHTML = 'Debe seleccionar la categoría de la mentoría';
            errors.push('Debe seleccionar la categoría de la mentoría');
        }

        let mentorError = document.getElementById('error-mentor');
        let mentorValue = campoMentor.value;
        if (!mentorValue) {
            mentorError.innerHTML = 'Debe seleccionar un mentor';
            errors.push('Debe seleccionar un mentor');
        }


        let durationError = document.getElementById('error-duration');
        let durationValue = campoDuration.value;
        if (!durationValue) {
            durationError.innerHTML = 'Debe completar la duración de la mentoría';
            errors.push('Debe completar la duración de la mentoría');
        }

        let horarioError = document.getElementById('error-horario');
        let horarioValue = campoHorario.value;
        if (!horarioValue) {
            horarioError.innerHTML = 'Debe seleccionar el horario de la mentoría';
            errors.push('Debe seleccionar el horario de la mentoría');
        }

        let diaError = document.getElementById('error-dia');
        let diaValue = campoDia.value;
        if (!diaValue) {
            diaError.innerHTML = 'Debe seleccionar el día de la mentoría';
            errors.push('Debe seleccionar el día de la mentoría');
        }

        let priceError = document.getElementById('error-price');
        let priceValue = campoPrice.value;
        if (!priceValue) {
            priceError.innerHTML = 'Debe completar el precio';
            errors.push('Debe completar el precio');
        }

        let imageError = document.getElementById('error-image');
        let imageValue = campoImage.value;
        if (!imageValue) {
            imageError.innerHTML = 'Debes cargar la imagen de la mentoría';
            errors.push('Debes cargar la imagen de la mentoría');
        } else {
            if (!(imageValue.includes('.jpg') || imageValue.includes('.jpeg') || imageValue.includes('.png') || imageValue.includes('.gif'))) {
                imageError.innerHTML = 'El formato de archivo no es válido, las extensiones permitidas son .jpg, .jpeg, .png y .gif';
                errors.push('El formato de archivo no es válido, las extensiones permitidas son .jpg, .jpeg, .png y .gif');
            }
        }

        if (errors.length > 0) {
            event.preventDefault();
        }
    });

    let errorTitulo = document.getElementById('error-name');
    campoTitulo.addEventListener('focus', function () {
        if (!campoTituloValue) {
            errorTitulo.innerHTML = 'Debe completar el nombre de la asesoría';
        } else if (campoTituloValue.length > 5) {
            errorTitulo.innerHTML = '';
        } else {
            errorTitulo.innerHTML = 'El nombre debe tener al menos 5 caracteres';
        }
    });

    campoTitulo.addEventListener('blur', function () {
        let campoTituloValue = campoTitulo.value;
        if (!campoTituloValue) {
            errorTitulo.innerHTML = 'Debe completar el nombre de la asesoría';
        } else if (campoTituloValue.length > 5) {
            errorTitulo.innerHTML = '';
        } else {
            errorTitulo.innerHTML = 'El nombre debe tener al menos 5 caracteres';
        }
    });

    let tituloProd = [];
    campoTitulo.addEventListener('keypress', function (e) {
        let key = e.key;
        tituloProd.push(key);
        if (tituloProd.length > 5) {
            errorTitulo.innerHTML = '';
        }
    });

    let errorDescription = document.getElementById('error-description');
    campoDescription.addEventListener('focus', function () {
        errorDescription.innerHTML = 'La descripción debe tener al menos 20 caracteres';
    });
    campoDescription.addEventListener('blur', function () {
        let campoDescriptionValue = campoDescription.value;
        if (!campoDescriptionValue) {
            errorDescription.innerHTML = 'Debe completar la descripción del producto';
        } else if (campoDescriptionValue.length > 20) {
            errorDescription.innerHTML = '';
        } else {
            errorDescription.innerHTML = ' descripción debe tener al menos 20 caracteres';
        }
    });

    let descriptionProd = [];
    campoDescription.addEventListener('keypress', function (e) {
        let key = e.key;
        descriptionProd.push(key);
        if (descriptionProd.length > 20) {
            errorDescription.innerHTML = '';
        }
    });

    let categoryError = document.getElementById('error-category');
    campoCategory.addEventListener('blur', function () {
        let categoryValue = campoCategory.value;
        if (!categoryValue) {
            categoryError.innerHTML = 'Debe seleccionar la categoría de la mentoría';
        } else {
            categoryError.innerHTML = '';
        }
    });

    let mentorError = document.getElementById('error-mentor');
    campoMentor.addEventListener('blur', function () {
        let mentorValue = campoMentor.value;
        if (!mentorValue) {
            mentorError.innerHTML = 'Debe seleccionar un mentor';
        } else {
            mentorError.innerHTML = '';
        }
    });


    let durationError = document.getElementById('error-duration');
    campoDuration.addEventListener('blur', function () {
        let durationValue = campoDuration.value;
        if (!durationValue) {
            durationError.innerHTML = 'Debe completar la duración de la mentoría';
        } else {
            durationError.innerHTML = '';
        }
    });

    let horarioError = document.getElementById('error-horario');
    campoHorario.addEventListener('blur', function () {
        let horarioValue = campoHorario.value;
        if (!horarioValue) {
            horarioError.innerHTML = 'Debe seleccionar el horario de la mentoría';
        } else {
            horarioError.innerHTML = '';
        }
    });

    let diaError = document.getElementById('error-dia');
    campoDia.addEventListener('blur', function () {
        let diaValue = campoDia.value;
        if (!diaValue) {
            diaError.innerHTML = 'Debe seleccionar el día de la mentoría';
        } else {
            diaError.innerHTML = '';
        }
    });

    let priceError = document.getElementById('error-price');
    campoPrice.addEventListener('blur', function () {
        let priceValue = campoPrice.value;
        if (!priceValue) {
            priceError.innerHTML = 'Debe completar el precio';
        } else {
            priceError.innerHTML = '';
        }
    });

    let imageError = document.getElementById('error-image');
    campoImage.addEventListener('change', function () {
        let imageValue = campoImage.value;
        if (!imageValue) {
            imageError.innerHTML = 'Debes cargar la imagen de la mentoría';
        } else {
            if (!(imageValue.includes('.jpg') || imageValue.includes('.jpeg') || imageValue.includes('.png') || imageValue.includes('.gif'))) {
                imageError.innerHTML = 'El formato de archivo no es válido, las extensiones permitidas son .jpg, .jpeg, .png y .gif';
            } else {
                imageError.innerHTML = '';
            }
        }

    });

});