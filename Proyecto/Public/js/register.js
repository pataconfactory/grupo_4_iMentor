window.addEventListener('load', function(){

    fetch('https://restcountries.com/v3.1/all')
        .then(function(response) {
            return response.json()})
        .then(function(countries) {

            countries.sort(function (a, b){
                return (a.name.common.toLowerCase().localeCompare(b.name.common.toLowerCase()))
            });

            
            let countriesArray = [];
            for(let i=0; i < countries.length; i++){
                countriesArray.push(countries[i].name.common);
            }

            let option = document.querySelector('#country');
            for(let i=0; i < countriesArray.length; i++){
                option.innerHTML += "<option>" + countriesArray[i] + "</option>";
            }
        });

}); 
