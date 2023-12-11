let plus = document.querySelector('#plus');
let minus = document.querySelector('#btnMinus');
let times = document.querySelector('#times');
let divide = document.querySelector('#divide');
let number1 = document.querySelector('#num1');
let number2 = document.querySelector('#num2');
let inputResult = document.querySelector('#result');


function Plus(num1, num2) {
    return num1 + num2;
}

function Minus(num1, num2) {
    return num1 - num2;
}

function Times(num1, num2) {
    return num1 * num2;
}

function Divide(num1, num2) {
    return num1 / num2;
}

plus.addEventListener('click', function () {
    let num1 = +number1.value;
    let num2 = +number2.value;
    inputResult.value = Plus(num1, num2);
})
minus.addEventListener('click', function () {
    let num1 = +number1.value;
    let num2 = +number2.value;
    inputResult.value = Minus(num1, num2);
})
multiply.addEventListener('click', function () {
    let num1 = +number1.value;
    let num2 = +number2.value;
    inputResult.value = Multiply(num1, num2);
})
divide.addEventListener('click', function () {
    let num1 = +number1.value;
    let num2 = +number2.value;
    inputResult.value = Divide(num1, num2);
})