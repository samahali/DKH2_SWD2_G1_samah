// starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'
  // Trigger the modal when the page loads
  window.addEventListener('load', function() {
    const myModal = new bootstrap.Modal(document.getElementById('modalId'));
    myModal.show();
  });


  // Validate the number input field
  document.getElementById("numberInput").addEventListener("input", function(event) {
    const value = parseInt(event.target.value, 10);
    document.getElementById("numberList").innerHTML = "";
    if (!(value < 1 || value > 5)) {
        for(let i=0; i<value; i ++) {
          document.getElementById("numberList").innerHTML += `
          <input type="number" class="form-control" placeholder="Number ${i+1}"
          id="numberInput${i}" min="1" step="1"
          aria-describedby="number${i}"><div class="valid-feedback"></div><br>
          `;
        }
    }
  });

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      const valueNumberInput = Number(document.getElementById("numberInput").value);
      if (valueNumberInput < 1 || valueNumberInput > 5) {
        event.preventDefault();
        event.stopPropagation();
      }
      else {
        event.preventDefault();
        event.stopPropagation();
        let arr = new Array();
        for(let i = 0; i < valueNumberInput; i++) {
          document.querySelector(`#numberList #numberInput${i}`).setAttribute("readonly", "readonly");
          const x = document.querySelector(`#numberList #numberInput${i}`).value;
          const num= Number(x);
          arr.push(num);
        }
        const total = addNumbers(...arr);
        setResult(total);
      }
      form.classList.add('was-validated');
    }, false)
  })
})()


function addNumbers(...args) {
  return args.reduce(function (x, y) {
    return x + y;
}, 0);
}

function setResult(total) {
  const numList = document.getElementById("numberList");
  // Remove existing output
  numList.querySelector("output")?.remove();
  // Add new output with total
  const output = document.createElement("output");
  output.classList.add("fw-semibold");
  output.textContent = `Total: ${total}`;
  numList.appendChild(output);
}