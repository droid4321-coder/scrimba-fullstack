/* Skipping everything I already learned */

let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")

let msg = document.getElementById("message")

console.log(countEl);

let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
    msg.textContent = "Numero Añadido!"
}

function save() {
   saveEl.textContent += `${count} - `
   msg.textContent = "Datos Guardados!"
}

function reset () {
    count = 0;
    countEl.textContent = count;
    msg.textContent = "Cuenta Borrada!"

}