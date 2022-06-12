window.addEventListener('load', function(){

    let select = document.querySelector('.select');
    let div = document.querySelector('.miniatura');

    let selFront = document.querySelectorAll('#one');
    let selBack = document.querySelectorAll('#two');
    let selUX = document.querySelectorAll('#three');
    let selDatabase = document.querySelectorAll('#four');
    let selMarketing = document.querySelectorAll('#five');
    let selDataAnalysis = document.querySelectorAll('#six');

    select.addEventListener('click', function(){

        if(select.value == 1){
            for(let i=0; i<selFront.length; i++){
                selFront[i].classList.remove('inactive');
            }
            for(let i=0; i<selBack.length; i++){
                selBack[i].classList.add('inactive');
            }
            for(let i=0; i<selUX.length; i++){
                selUX[i].classList.add('inactive');
            }
            for(let i=0; i<selDatabase.length; i++){
                selDatabase[i].classList.add('inactive');
            }
            for(let i=0; i<selMarketing.length; i++){
                selMarketing[i].classList.add('inactive');
            }
            for(let i=0; i<selDataAnalysis.length; i++){
                selDataAnalysis[i].classList.add('inactive');
            }
        } else if(select.value == 2){
            for(let i=0; i<selFront.length; i++){
                selFront[i].classList.add('inactive');
            }
            for(let i=0; i<selBack.length; i++){
                selBack[i].classList.remove('inactive');
            }
            for(let i=0; i<selUX.length; i++){
                selUX[i].classList.add('inactive');
            }
            for(let i=0; i<selDatabase.length; i++){
                selDatabase[i].classList.add('inactive');
            }
            for(let i=0; i<selMarketing.length; i++){
                selMarketing[i].classList.add('inactive');
            }
            for(let i=0; i<selDataAnalysis.length; i++){
                selDataAnalysis[i].classList.add('inactive');
            }
        } else if(select.value == 3){
            for(let i=0; i<selFront.length; i++){
                selFront[i].classList.add('inactive');
            }
            for(let i=0; i<selBack.length; i++){
                selBack[i].classList.add('inactive');
            }
            for(let i=0; i<selUX.length; i++){
                selUX[i].classList.remove('inactive');
            }
            for(let i=0; i<selDatabase.length; i++){
                selDatabase[i].classList.add('inactive');
            }
            for(let i=0; i<selMarketing.length; i++){
                selMarketing[i].classList.add('inactive');
            }
            for(let i=0; i<selDataAnalysis.length; i++){
                selDataAnalysis[i].classList.add('inactive');
            }
        } else if(select.value == 4){
            for(let i=0; i<selFront.length; i++){
                selFront[i].classList.add('inactive');
            }
            for(let i=0; i<selBack.length; i++){
                selBack[i].classList.add('inactive');
            }
            for(let i=0; i<selUX.length; i++){
                selUX[i].classList.add('inactive');
            }
            for(let i=0; i<selDatabase.length; i++){
                selDatabase[i].classList.remove('inactive');
            }
            for(let i=0; i<selMarketing.length; i++){
                selMarketing[i].classList.add('inactive');
            }
            for(let i=0; i<selDataAnalysis.length; i++){
                selDataAnalysis[i].classList.add('inactive');
            }
        } else if(select.value == 5){
            for(let i=0; i<selFront.length; i++){
                selFront[i].classList.add('inactive');
            }
            for(let i=0; i<selBack.length; i++){
                selBack[i].classList.add('inactive');
            }
            for(let i=0; i<selUX.length; i++){
                selUX[i].classList.add('inactive');
            }
            for(let i=0; i<selDatabase.length; i++){
                selDatabase[i].classList.add('inactive');
            }
            for(let i=0; i<selMarketing.length; i++){
                selMarketing[i].classList.remove('inactive');
            }
            for(let i=0; i<selDataAnalysis.length; i++){
                selDataAnalysis[i].classList.add('inactive');
            }
        } else if(select.value == 6){
            for(let i=0; i<selFront.length; i++){
                selFront[i].classList.add('inactive');
            }
            for(let i=0; i<selBack.length; i++){
                selBack[i].classList.add('inactive');
            }
            for(let i=0; i<selUX.length; i++){
                selUX[i].classList.add('inactive');
            }
            for(let i=0; i<selDatabase.length; i++){
                selDatabase[i].classList.add('inactive');
            }
            for(let i=0; i<selMarketing.length; i++){
                selMarketing[i].classList.add('inactive');
            }
            for(let i=0; i<selDataAnalysis.length; i++){
                selDataAnalysis[i].classList.remove('inactive');
            }
        } else if(select.value == 0){
            for(let i=0; i<selFront.length; i++){
                selFront[i].classList.remove('inactive');
            }
            for(let i=0; i<selBack.length; i++){
                selBack[i].classList.remove('inactive');
            }
            for(let i=0; i<selUX.length; i++){
                selUX[i].classList.remove('inactive');
            }
            for(let i=0; i<selDatabase.length; i++){
                selDatabase[i].classList.remove('inactive');
            }
            for(let i=0; i<selMarketing.length; i++){
                selMarketing[i].classList.remove('inactive');
            }
            for(let i=0; i<selDataAnalysis.length; i++){
                selDataAnalysis[i].classList.remove('inactive');
            }
        }
        
    });

});