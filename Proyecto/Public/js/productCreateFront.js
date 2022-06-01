window.addEventListener('load', () => {
campoTitulo = document.getElementById('name').focus() })

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);


let form = id("formulario"),
    errorName = id("error-name"),
    errorDescription = id("error-description"),
    errorCategory = id("error-category"),
    errorMentor = id("error-mentor"),
    errorDuration = id("error-duration"),
    errorHorario = id("error-horario"),
    errorDia = id("error-dia"),
    errorPrice = id("error-price"),
    errorImage = id("error-image")


    function validateName() {
        let name = document.getElementById('name').value;
        if (name.length == 0) {
            errorName.innerHTML = 'Debes completar el nombre del producto';
            return false; }

        if (name.length < 5) {
            errorName.innerHTML = 'El nombre debe tener al menos 5 caracteres';
            return false
        } 
        
            errorName.innerHTML = '<i class="far fa-check-circle success-icon"></i>';
            return true;
        
    }

    function validateDescription() {
        let descripcion = document.getElementById('description').value;
        var textRequired = 20;
        var left = textRequired - descripcion.length;

        if (left > 0) {
            errorDescription.innerHTML = left + ' faltan para completar la descripción del producto';
            return false;
        }
        errorDescription.innerHTML = '<i class="far fa-check-circle success-icon"></i>';
        return true;
    }