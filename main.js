function add(num1, num2) {
    var num1 = document.getElementById(num1).value;
    var num2 = document.getElementById(num2).value;
    var sum = Number(num1) + Number(num2);

    window.alert(sum);
}

function subtract(num1, num2) {
    var num1 = document.getElementById(num1).value;
    var num2 = document.getElementById(num2).value;
    var difference = Number(num1) - Number(num2);

    window.alert(difference);
}

function multiply(num1, num2) {
    var num1 = document.getElementById(num1).value;
    var num2 = document.getElementById(num2).value;
    var product = Number(num1) * Number(num2);

    window.alert(product);
}

function divide(num1, num2) {
    var num1 = document.getElementById(num1).value;
    var num2 = document.getElementById(num2).value;
    var quotient = Number(num1) / Number(num2);

    window.alert(quotient);
}

function modulo(num1, num2) {
    var num1 = document.getElementById(num1).value;
    var num2 = document.getElementById(num2).value;
    var remainder = Number(num1) % Number(num2);

    window.alert(remainder);
}