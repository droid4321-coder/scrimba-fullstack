//#1 let and const

const player = "P1";
const opponent = "P2";
const game = "RandomGame";
let points = 0;
let hasWon = false;
points += 100;
hasWon = true;

if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`);
} else {
    console.log(`The winner is ${opponent}! ${player} has lost the game`);
}

//#2 Logging out items from array

let myCourses = ["HTML", "CSS", "JavaScript"];

function logArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    return "";
}

logArray(myCourses);

/* //#3 save to localStorage

const variable = "Test String";

localStorage.setItem("String", variable);

console.log(localStorage.getItem("String"));

localStorage.removeItem("String");

//#4 addEventListener and log score

let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]

const scoreBtn = document.getElementById("score-btn");

scoreBtn / addEventListener("click", function () {
    console.log(data[0].score);
}) 8*/

//#5 Generate sentence using function that has a counter for array length, description, and array

function generateSentence(desc, arr) {
    let blank = [];
    for (let i = 0; i < arr.length; i++) {
        blank.push(` ${arr[i]}`);
    }
    return `The ${arr.length} ${desc} are${blank}`;
}

console.log(generateSentence("largest countries", ["China", "India", "USA"]));