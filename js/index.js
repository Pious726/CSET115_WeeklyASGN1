let input = document.getElementById("input");
let operation = "";

// Functions for operation input
function enterValues(val) {
    document.getElementById("result").value += val;
}

function enterEvent(buttonPress) {
    if (buttonPress.key == "0" || buttonPress.key == "1"
        || buttonPress.key == "2" || buttonPress.key == "3"
        || buttonPress.key == "4" || buttonPress.key == "5"
        || buttonPress.key == "6" || buttonPress.key == "7"
        || buttonPress.key == "8" || buttonPress.key == "9"
        || buttonPress.key == "+"
    ) {
        document.getElementById("input").value += buttonPress
    }
}

function clearInput() {
    document.getElementById("input").value = "";
}
function clearResult() {
    document.getElementById("result").value = "";
}

// Functions for performing action
function equalsButton(firstNumber, secondNumber) {
    if (operation == "+") {
        result.innerHTML = firstNumber + secondNumber;
    }
}