let sq = "";


// Functions for operation input
function enterValue(value) {
    document.getElementById("input").value += value;
}


// Functions for solving equation
function solveEquation() {
    let input = document.getElementById("input").value
    input = input.replace("^2", "**2");
    input = input.replace("%", "/100")
     while (input.includes("√")) {
        let startIndex = input.indexOf("√");
        let endIndex = startIndex + 1;
        
        // Find the next number (if any) following the square root
        while (endIndex < input.length && !isNaN(input[endIndex]) || input[endIndex] === '.') {
            endIndex++;
        }

        // Extract the number after √
        let number = input.substring(startIndex + 1, endIndex);
        // Replace "√" with Math.sqrt(number)
        input = input.replace("√" + number, `Math.sqrt(${number})`);
    }

    let result = eval(input);
    document.getElementById("result").value = result;
    if (result == "isNaN" || result == "Infinity" || result == "null" || result == "undefined") {
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