document.addEventListener("DOMContentLoaded", function () {
     let inputField = document.querySelector("#cdisplay input");

    function mod(a, b) {
        return ((a % b) + b) % b; // Ensures positive remainder
    }

    document.getElementById("calc").addEventListener("click", function (event) {
        if (event.target.tagName === "BUTTON") {
            let buttonValue = event.target.innerText;
            if (buttonValue === "C") {
                inputField.value = "0";
            } else if (buttonValue === "=") {
                try {
                    let expression = inputField.value
                        .replace(/x/g, "*") // Replace 'x' with '*'
                        .replace(/(\d+(\.\d+)?)%/g, "($1 / 100)"); // Convert 3% → (3/100)
                    
                        // Handle squaring (e.g., "5²" → "Math.pow(5,2)")
                    expression = expression.replace(/(\d+)²/g, "Math.pow($1,2)");

                    // Handle 'mod' separately
                    if (expression.includes(" mod ")) {
                        let parts = expression.split(" mod ");
                        if (parts.length === 2) {
                            let a = parseFloat(parts[0]);
                            let b = parseFloat(parts[1]);
                            inputField.value = mod(a, b);
                        } else {
                            inputField.value = "Error";
                        }
                    } else {
                        inputField.value = eval(expression); // Evaluate normal expressions
                    }
                } catch {
                    inputField.value = "Error";
                }

                // Handle x² separately
            } else if (event.target.id === 'square') {
                let input = inputField.value;
                input += event.target.innerText; 
                input = input.replaceAll(/x²/g, '²');
                inputField.value = input;
            } else if (buttonValue === "mod") {
                inputField.value += " mod "; // Append `mod`
            } else if (buttonValue === "%") {
                inputField.value += "%"; // Keep % visible in input field
            } else {
                inputField.value = inputField.value === "0" ? buttonValue : inputField.value + buttonValue;
            }
        }
    });
});



