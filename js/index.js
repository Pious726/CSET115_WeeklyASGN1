let sq = "";


// Functions for operation input
function enterValue(value) {
    document.getElementById("input").value += value;
}


// Functions for solving equation
function solveEquation() {
    if (sq == "\^2") {
        let equation = document.getElementById("input").value;
        let result = Math.sqrt(equation);
        document.getElementById("result").value = result;
    } else {
        let equation = document.getElementById("input").value;
        let result = eval(equation);
        document.getElementById("result").value = result;
    }
}
function squareRoot() {
    sq = "\^2";
    document.getElementById("input").value += value;
}

// Functions to clear the calculator
function clearInput() {
    document.getElementById("input").value = "";
}
function clearEverything() {
    document.getElementById("input").value = "";
    document.getElementById("result").value = "";
}
function deleteInput() {
    let del = document.getElementById("input");
    del.value = del.value.slice(0, -1);
}