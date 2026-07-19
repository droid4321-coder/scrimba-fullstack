let btn = document.getElementById("buy");
let error = document.getElementById("error");

btn.addEventListener("click", () => {
    error.textContent = "Something went wrong, please try again."
})