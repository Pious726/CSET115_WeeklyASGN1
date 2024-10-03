let input = document.getElementById("input");
let operation = "";


// Functions for operation input
<<<<<<< HEAD

function dis(val) {
    document.getElementById("result").value += val
}
function enterEvent(buttonPress) {
    document.getElementById("input").value += val;
    if (buttonPress.key == "0" || buttonPress.key == "1"
        || buttonPress.key == "2" || buttonPress.key == "3"
        || buttonPress.key == "4" || buttonPress.key == "5"
        || buttonPress.key == "6" || buttonPress.key == "7"
        || buttonPress.key == "8" || buttonPress.key == "9"
        || buttonPress.key == "+" || buttonPress.key == "-"
        || buttonPress.key == "*" || buttonPress.key == "/"
        || buttonPress.key == "^2" || buttonPress.key == "√") 
        {
        document.getElementById("input").value += buttonPress.key
    }
=======
function enterValue(value) {
    document.getElementById("input").value += value;
>>>>>>> 3733a2a13105f546fb9ab8b6efd50e5a5542b00f
}


// Functions for solving equation
function equalsButton() {
    if (buttonPress.key == "enter") {
        let x = document.getElementById("result").value;
        solveEquation();
    }
}
function solveEquation() {
    
}


// Functions to clear the calculator
function clearInput() {
    document.getElementById("input").value = "";
}
function clearResult() {
    document.getElementById("result").value = "";
}
function deleteInput() {
    let del = document.getElementById("result");
    del.value = del.value.slice(0, -1);
}