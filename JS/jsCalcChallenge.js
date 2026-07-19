let num1 = 0;
let num2 = 0;

document.getElementById("number1").addEventListener("input", () => {
    num1 = +document.getElementById("number1").value;
})

document.getElementById("number2").addEventListener("input", () => {
    num2 = +document.getElementById("number2").value;
})

const result = document.getElementById("result");
const sum = document.getElementById("sum");
const sub = document.getElementById("sub");
const mul = document.getElementById("mul");
const div = document.getElementById("div");

sum.addEventListener("click", () => {
    result.textContent = num1 + num2;
})

sub.addEventListener("click", () => {
    result.textContent = num1 - num2;
})

mul.addEventListener("click", () => {
    result.textContent = num1 * num2;
})

div.addEventListener("click", () => {
    result.textContent = num1 / num2;
})