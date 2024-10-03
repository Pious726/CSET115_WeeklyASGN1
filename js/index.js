let input = document.getElementById("input");
let operation = "";


// Functions for operation input
function enterValues(val) {
    document.getElementById("input").value += val;
}
function enterEvent(buttonPress) {
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
}


// Functions for solving equation
function equalsButton() {
    if (buttonPress.key == "enter") {
        let x = document.getElementById("result").value;
        solveEquation();
    }
}
function solveEquation() {
    let x = document.getElementById("input").value;
    let y = math.evaluate(x)
    document.getElementById("result").value = y
}


// Functions to clear the calculator
function clearInput() {
    document.getElementById("input").value = "";
}
function clearResult() {
    document.getElementById("result").value = "";
}