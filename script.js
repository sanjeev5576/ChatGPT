const display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        alert('Invalid Expression');
    }
}

function clearDisplay() {
    display.value = '';
}
