let date_birth = document.querySelector('#date_birth');
let ageInput = document.querySelector('#age');

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

    
    date_birth.addEventListener('change', function(){

        let date = this.value;
        let age = ageCalculate(date);
        
        if(this.value){
            ageInput.value = age;
        }
    });

}); 

function ageCalculate(date) {
    var today = new Date();
    var birthday = new Date(date);
    var age = today.getFullYear() - birthday.getFullYear();
    var m = today.getMonth() - birthday.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }

    return age;
}







