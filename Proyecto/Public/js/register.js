window.addEventListener('load', function(){

    fetch('https://restcountries.com/v3.1/all')
        .then(function(response) {
            return response.json()})
        .then(function(countries) {

            let option = document.querySelector('#country');

            for(let i=0; i < countries.length; i++){
                option.innerHTML += "<option>" + countries[i].name.common + "</option>";
            }
        })

}); 