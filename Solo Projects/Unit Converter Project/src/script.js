//elements and variables
const amount = document.getElementById("unit");
const btn = document.getElementById("btn");
const error = document.getElementById("error");
const conversionsContainer = document.getElementById("conversions-container");
const oneMeterToFeet = 3.281;
const oneLiterToGallon = 0.264;
const oneKilogramToPound = 2.204;


//functions
function convertLength(unit, container) {
    let textDOM = ""
    textDOM += `<div class="conversion-container">
    <h2 class="text">Length (Meter/Feet)</h2>
    <p class="text">${unit} meters = ${(unit * oneMeterToFeet).toFixed(3)} feet | ${unit} feet = ${(unit / oneMeterToFeet).toFixed(3)} meters</p>
    </div>`;
    container.innerHTML += textDOM;
}

function convertVolume(unit, container) {
    let textDOM = ""
    textDOM += `<div class="conversion-container">
    <h2 class="text">Volume (Liters/Gallons)</h2>
    <p class="text">${unit} liters = ${(unit * oneLiterToGallon).toFixed(3)} gallons | ${unit} gallons = ${(unit / oneLiterToGallon).toFixed(3)} liters</p>
    </div>`;
    container.innerHTML += textDOM;
}

function convertMass(unit, container) {
    let textDOM = ""
    textDOM += `<div class="conversion-container">
    <h2 class="text">Mass (Kilograms/Pounds)</h2>
    <p class="text">${unit} kilos = ${(unit * oneKilogramToPound).toFixed(3)} pounds | ${unit} pounds = ${(unit / oneKilogramToPound).toFixed(3)} kilos</p>
    </div>`;
    container.innerHTML += textDOM;
}

//eventlisteners
btn.addEventListener("click", function () {
    const value = parseFloat(amount.value);
    if (isNaN(value) || value <= 0) {
        error.textContent = "Please enter a value that is a positive number."
        return;
    }
    error.textContent = "";
    conversionsContainer.innerHTML = "";
    convertLength(value, conversionsContainer);
    convertVolume(value, conversionsContainer);
    convertMass(value, conversionsContainer);
})