let numA;
let numB;
let operator;

let btnNum = document.querySelectorAll('.btn');

btnNum.forEach(function (button) {
    button.addEventListener('click', function () {
        numA = button.innerHTML;
        console.log(numA);
        display.textContent = numA;

    });
});


let display = document.querySelector('.display');
// display.textContent = numA;
