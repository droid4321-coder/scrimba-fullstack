let welcomeEl = document.getElementById("welcome")

function greetUser(greeting, name, emoji) {
    welcomeEl.textContent = `${greeting}, ${name}, ${emoji}`;
}

greetUser("Godspeed", "Droid4321", "Whatever emoji!");

//practicing functions

function add(num1, num2) {
    return num1 + num2;
}

console.log(add(1, 1));

//parameters are inside of the function
//arguments are on the outside of the function

//function with array as parameter and argument

function getFirst(arr) {
    return arr[0];
}

console.log(getFirst(["first" , "second", "third"]));