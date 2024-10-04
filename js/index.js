// Functions for operation input
function enterValue(value) {
    document.getElementById("input").value += value;
}


// Functions for solving equation
function solveEquation() {
    let input = document.getElementById("input").value
    input = input.replace("^2", "**2");
    input = input.replace(/√(\d+)/g, "Math.sqrt($1)");
    input = input.replace("%", "/100");
    let result = eval(input);
    document.getElementById("result").value = result;
    if(result == "isNan" || result == "Infinity" || reslut == "null" || result == "undefined") {
        document.getElementById("result").value = "Error";
    }
}


// Functions to clear the calculator
function clearInput() {
    document.getElementById("input").value = "";
}
function clearEverything() {
    document.getElementById("result").value = "";
    document.getElementById("input").value = "";
}
function deleteInput() {
    let del = document.getElementById("input");
    del.value = del.value.slice(0, -1);
}