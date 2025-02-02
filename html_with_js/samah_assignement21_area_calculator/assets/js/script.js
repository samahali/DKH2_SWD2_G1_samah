function calcRectangleArea(e) {
    const width = document.getElementById("rect_w").value;
    const length = document.getElementById("rect_l").value;
    const area = Number(width) * Number(length);
    let resultDiv = getResultDiv(e);
    setResult(resultDiv, area);
}


function calcTriangleArea(e) {
    const height = document.getElementById("tri_h").value;
    const base = document.getElementById("tri_b").value;
    const area = height * base / 2;
    let resultDiv= getResultDiv(e);
    setResult(resultDiv, area);
}

function calcParallelogramArea(e) {
    const height = document.getElementById("para_h").value;
    const base = document.getElementById("para_b").value;
    const area = height * base;
    let resultDiv= getResultDiv(e);
    setResult(resultDiv, area);
}

function calcCircleArea(e) {
    const pi = document.getElementById("pi").value;
    const radius = document.getElementById("radius").value;
    const area = pi * radius**2;
    let resultDiv= getResultDiv(e);
    setResult(resultDiv, area);
}


function calcTrapezoidArea (e) {
    const top = document.getElementById("trap_t").value;
    const base = document.getElementById("trap_b").value;
    const height = document.getElementById("trap_h").value;
    const area = (top + base) * height / 2;
    let resultDiv= getResultDiv(e);
    setResult(resultDiv, area);
}


function getResultDiv(e) {
    const hrefContent = e.getAttribute("href");
    const resultDiv= document.querySelector(`${hrefContent} .result`);
    return resultDiv
}

function setResult(resultDiv, area) {
    // Remove existing output
    resultDiv.querySelector("output")?.remove();
    // Add new output with calculated area
    resultDiv.innerHTML += `<output class="fw-semibold">${area}</output>`;
}