let input = document.getElementById("input");
let operation = "";


// Functions for operation input
function enterValue(value) {
    document.getElementById("input").value += value;
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