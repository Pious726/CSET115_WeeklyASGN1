let sq = "";


// Functions for operation input
function enterValue(value) {
    document.getElementById("input").value += value;
}


// Functions for solving equation
function solveEquation() {
    let input = document.getElementById("input").value
    input = input.replace("^2", "**2");
    input = input.replace("√", "//2");
    let result = eval(input);
    document.getElementById("result").value = result;
    if (result == "isNaN" || result == "Infinity" || result == "null") {
        document.getElementById("result").value = "ERROR";
    } 
    else if (input == "") {
        document.getElementById("result").value = "";
    }
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