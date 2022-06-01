window.addEventListener('load', () => {
    campoTitulo = document.getElementById('name').focus()
})

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

/* declaro todas las variables de ID y Clase*/
let form = id("formulario"),
    errorName = id("error-name"),
    errorDescription = id("error-description"),
    errorCategory = id("error-category"),
    errorMentor = id("error-mentor"),
    errorDuration = id("error-duration"),
    errorHorario = id("error-horario"),
    errorDia = id("error-dia"),
    errorPrice = id("error-price"),
    errorImage = id("error-image"),
    submitError = id("submit-error")
errorNameSubmit = id("error-name"),
    errorDescriptionSubmit = id("error-description-submit"),
    errorCategorySubmit = id("error-category-submit"),
    errorMentorSubmit = id("error-mentor-submit"),
    errorDurationSubmit = id("error-duration-submit"),
    errorHorarioSubmit = id("error-horario-submit"),
    errorDiaSubmit = id("error-dia-submit"),
    errorPriceSubmit = id("error-price-submit"),
    errorImageSubmit = id("error-image-submit"),
    submitErrorSubmit = id("submit-error-submit")
var inputs = document.querySelectorAll("input, select")

/* Valida el nombre del producto*/
function validateName() {
    let name = document.getElementById('name').value;
    if (name.length === 0) {
        errorName.innerHTML = 'Debes completar el nombre del producto';
        return false;
    }

    if (name.length < 5) {
        errorName.innerHTML = 'El nombre debe tener al menos 5 caracteres';
        return false
    }

    errorName.innerHTML = '<i class="far fa-check-circle success-icon"></i>';
    return true;

}

/* Valida la descripción*/
function validateDescription() {
    let descripcion = document.getElementById('description').value;
    var textRequired = 20;
    var left = textRequired - descripcion.length;

    if (left > 0) {
        errorDescription.innerHTML = 'Faltan ' + left + ' caracteres para completar la descripción del producto';
        return false;
    }
    errorDescription.innerHTML = '<i class="far fa-check-circle success-icon"></i>';
    return true;
}

/* Valida la categororía*/
function validatecategory() {
    let campoCategory = document.getElementById('category').value;

    if (campoCategory === 'seleccione la categoría') {
        errorCategory.innerHTML = 'Seleccione una categoría';
        return false;
    }

    errorCategory.innerHTML = '<i class="far fa-check-circle success-icon"></i>';
    return true;
}

/* Valida el mentor*/

function validatementor() {
    let campoMentor = document.getElementById('mentor').value;

    if (campoMentor === 'seleccione el mentor') {
        errorMentor.innerHTML = 'seleccione el mentor';
        return false;
    }

    errorMentor.innerHTML = '<i class="far fa-check-circle success-icon"></i>';
    return true;
}

/* Valida la duración*/
function validateduration() {
    let campoDuration = document.getElementById('duration').value;

    if (campoDuration.length == 0) {
        errorDuration.innerHTML = 'La duración en horas es requerida (sólo digitos)';
        return false;

    }
    if (campoDuration >= 10) {
        errorDuration.innerHTML = 'Debe ser menos de 10 horas';
        return false;
    }

    errorDuration.innerHTML = '<i class="far fa-check-circle success-icon"></i>';
    return true;
}

/* Valida el horario*/
function validatehorario() {
    let campoHorario = document.getElementById('horario').value;

    if (campoHorario === 'seleccione el horario') {
        errorHorario.innerHTML = 'seleccione un horario';
        return false;
    }

    errorHorario.innerHTML = '<i class="far fa-check-circle success-icon"></i>';
    return true;
}

/* Valida el día*/

function validateDia() {
    let campoDia = document.getElementById('dia').value;

    if (campoDia === 'seleccione el día') {
        errorDia.innerHTML = 'seleccione el día';
        return false;
    }

    errorDia.innerHTML = '<i class="far fa-check-circle success-icon"></i>';
    return true;
}

/* Valida el precio*/
function validatePrice() {
    let campoPrice = document.getElementById('price').value;

    if (campoPrice == 0) {
        errorPrice.innerHTML = 'El precio en pesos argentinos es requerido';
        return false;

    }

    errorPrice.innerHTML = '<i class="far fa-check-circle success-icon"></i>';
    return true;


}
/* Valida la imagen*/
let imageProducto = document.querySelector('#image');
imageProducto.addEventListener('change', function () {
    let imageProductoValue = imageProducto.value;
    if (imageProductoValue) {
        if (!(imageProductoValue.includes('.jpg') || imageProductoValue.includes('.jpeg') || imageProductoValue.includes('.png') || imageProductoValue.includes('.gif'))) {
            errorImage.innerHTML = 'El formato de archivo no es válido, las extensiones permitidas son .jpg, .jpeg, .png y .gif';
        } else {
            errorImage.innerHTML = '';
        }
    }
});

/* INPUT*/
/*
form.addEventListener('submit', function (e) {
    inputs.forEach(input =>{
        if (input.value == ""){
        e.preventDefault()
        errorNameSubmit.innerHTML= 'Debes completar el nombre del producto';
        errorDescriptionSubmit.innerHTML =   'Faltan '  + left  +' caracteres para completar la descripción del producto'
        errorCategorySubmit.innerHTML = 'Seleccione una categoría'
        errorMentorSubmit.innerHTML = 'seleccione el mentor'
        errorDurationSubmit.innerHTML = 'La duración en horas es requerida (sólo digitos)'
        errorHorarioSubmit.innerHTML  = 'seleccione un horario'
        errorDiaSubmit.innerHTML = 'seleccione el día'
        errorPriceSubmit.innerHTML = 'El precio en pesos argentinos es requerido'
        errorImageSubmit.innerHTML = 'El formato de archivo no es válido, las extensiones permitidas son .jpg, .jpeg, .png y .gif'
      
        
    }

    }

    )})*/