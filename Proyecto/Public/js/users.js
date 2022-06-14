window.addEventListener('load', function(){

    let select = document.querySelector('.select');
    let form = document.querySelector('.select-form');

    select.addEventListener('change', function(){
        form.submit();
    });

});