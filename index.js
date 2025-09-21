// Variables
const homeContentBtn = document.querySelectorAll('.home-content-btn');

const bmiForm = document.getElementById('bmi-form');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const bmiFormBtn = document.getElementById('bmi-form-btn');

const bmiDesCatText1 = document.getElementById('cat-1');
const bmiDesCatText2 = document.getElementById('cat-2');
const bmiDesCatText3 = document.getElementById('cat-3');
const bmiDesCatText4 = document.getElementById('cat-4');
const bmiDesCatText5 = document.getElementById('cat-5');

homeContentBtn.forEach(button => {
    button.addEventListener('click',(e) => {
        e.preventDefault();


    switch (button.id) {
        case 'bmi-btn':
            window.location.href = 'bmi.html';
            break;
        
        case 'cal-btn':
            window.location.href = 'calories.html';    
            break;
        
        case 'exp-protein-btn':
            window.location.href = 'proteinGuide.html';
            break;
            
        case 'exercise-btn':
            window.location.href = 'exercise.html';
            break;

        default:
            window.location.href = 'index.html';
            break;
        }
    });
});


// BMI Calculator

bmiForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if ( (height<=0) || (weight<=0) ) {
        alert('Please enter valid height and weight');
        return;
    }

    const bmi = weight / ( (height/100) * (height/100));
    const bmiRoundOf = bmi.toFixed(2);


    
        if (bmi < 18.5) {
            bmiDesCatText1.innerHTML = "Your BMI: " + bmiRoundOf  + "&nbsp;&nbsp;&nbsp;&nbsp;Category: Underweight";
            bmiDesCatText2.innerHTML = '';
            bmiDesCatText3.innerHTML = '';
            bmiDesCatText4.innerHTML = '';
            bmiDesCatText5.innerHTML = '';

        } else if (bmi >= 18.5 && bmi < 25) {
            bmiDesCatText1.innerHTML = '';
            bmiDesCatText2.innerHTML = "Your BMI: " + bmiRoundOf  + "&nbsp;&nbsp;&nbsp;&nbsp;Category: Normal";
            bmiDesCatText3.innerHTML = '';
            bmiDesCatText4.innerHTML = '';
            bmiDesCatText5.innerHTML = '';

        } else if (bmi >= 25 && bmi < 30) {
            bmiDesCatText1.innerHTML = '';
            bmiDesCatText2.innerHTML = '';
            bmiDesCatText3.innerHTML = "Your BMI: " + bmiRoundOf  + "&nbsp;&nbsp;&nbsp;&nbsp;Category: Overweight";
            bmiDesCatText4.innerHTML = '';
            bmiDesCatText5.innerHTML = '';

        } else if (bmi >= 30 && bmi <= 40) {
            bmiDesCatText1.innerHTML = '';
            bmiDesCatText2.innerHTML = '';
            bmiDesCatText3.innerHTML = '';
            bmiDesCatText4.innerHTML = "Your BMI: " + bmiRoundOf  + "&nbsp;&nbsp;&nbsp;&nbsp;Category: Obese";
            bmiDesCatText5.innerHTML = '';

        } else {
            bmiDesCatText1.innerHTML = '';
            bmiDesCatText2.innerHTML = '';
            bmiDesCatText3.innerHTML = '';
            bmiDesCatText4.innerHTML = '';
            bmiDesCatText5.innerHTML = "Your BMI: " + bmiRoundOf  + "&nbsp;&nbsp;&nbsp;&nbsp;Category: Extremely Obese";
        }
});