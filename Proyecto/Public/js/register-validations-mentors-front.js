window.addEventListener('load', function () {
   
    let description = document.querySelector('#description');
    let descriptionError = document.querySelector('.description-error');
    description.addEventListener('blur', function () {
        let descriptionValue = description.value;
        if (!descriptionValue) {
            descriptionError.innerHTML = 'Debes completar una descripción sobre ti';
        }
    });

    let hourPrice = document.querySelector('#hour_price');
    let hourPriceError = document.querySelector('.hour_price-error');
    hourPrice.addEventListener('blur', function () {
        let hourPriceValue = hourPrice.value;
        if (!hourPriceValue) {
            hourPriceError.innerHTML = 'Debes completar el precio por hora';
        }
    });

    let bank = document.querySelector('#bank');
    let bankError = document.querySelector('.bank-error');
    bank.addEventListener('blur', function () {
        let bankValue = bank.value;
        if (!bankValue) {
            bankError.innerHTML = 'Debes completar el banco';
        }
    });

    let cbu = document.querySelector('#cbu');
    let cbuError = document.querySelector('.cbu-error');
    cbu.addEventListener('blur', function () {
        let cbuValue = cbu.value;
        if (!cbuValue) {
            cbuError.innerHTML = 'Debes completar el CBU';
        }
    });

})