let display = '0';
let equation = '';

function updateDisplay() {
    document.getElementById('result').textContent = display;
    document.getElementById('equation').textContent = equation;
}

function handleNumber(number) {
    if (display === '0') {
        display = number;
    } else {
        display += number;
    }
    equation += number;
    updateDisplay();
}

function handleOperator(operator) {
    display = '0';
    equation += ' ' + operator + ' ';
    updateDisplay();
}

function handleEqual() {
    try {
        const result = eval(equation);
        display = result.toString();
        equation = result.toString();
        updateDisplay();
    } catch (error) {
        display = 'Error';
        equation = '';
        updateDisplay();
    }
}

function handleClear() {
    display = '0';
    equation = '';
    updateDisplay();
}

// Initialize display
updateDisplay();