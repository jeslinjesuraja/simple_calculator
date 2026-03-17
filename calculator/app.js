import { add, subtract, multiply, divide } from "./math.js";
import logResult from "./math.js";

function calculate() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;

    let result;

    if (!num1 && !num2) {
        document.getElementById("result").innerText = "Enter numbers";
        return;
    }

    switch (operator) {

        case "+":
            result = add(num1, num2);
            break;

        case "-":
            result = subtract(num1, num2);
            break;

        case "*":
            result = multiply(num1, num2);
            break;

        case "/":
            result = divide(num1, num2);
            break;
    }

    document.getElementById("result").innerText = result;

    logResult(result);
}

window.calculate = calculate;