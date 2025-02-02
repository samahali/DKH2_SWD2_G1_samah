function add() {
    total = Number(document.querySelector('#num1').value) + Number(document.querySelector('#num2').value);
    document.querySelector('output').innerText = total;
}