// calculate factorial using while loop
function calculateFactorial(number){
    let output = 1;
    if (number === 0 || number === 1) {
        return 1
    }
    while(number>1) {
        output *=number;
        number--;
    }
    return output;
}

// Handle form submission
document.querySelector('#factorialForm').addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();

    const form = event.target;
    const numberInput = document.getElementById('numberInput');
    const resultDiv = document.getElementById('result');

    // Check if the form is valid
    if (form.checkValidity()) {
        const number = Number(numberInput.value);
        if (isNaN(number) || number < 0) {
            resultDiv.textContent = "Please enter a valid non-negative number.";
        } else {
            const factorial = calculateFactorial(number);
            resultDiv.textContent = `Factorial of ${number} is ${factorial}.`;
        }
    }

    // Add Bootstrap validation classes
    form.classList.add('was-validated');
});
