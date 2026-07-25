//JS Challenges Part II

//Challenge 1

let person = {
    name: "Droid",
    age: 30,
    country: "Earth"
}

function logData(object) {
    return `${object.name} is ${object.age} years old and lives in ${object.country}`;
}

console.log(logData(person));

//Challenge 2

let age = 15

if (age < 6) {
    console.log("Free Ride");
} else if (age <= 17) {
    console.log("Child Discount");
} else if (age <= 26) {
    console.log("Student Discount");
} else if (age <= 66) {
    console.log("Full Price");
} else {
    console.log("Senior Discount");
}

// Challenge 3

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

function logToConsole(arr) {
    console.log("The 5 largest countries in the world:");
    for (let i = 0; i < arr.length; i++) {
        console.log(`- ${arr[i]}`);
    }

    return;
}

logToConsole(largeCountries);

// Challenge 4

largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"] //add China and Pakistan Back
largeCountries.pop() // removes last index
largeCountries.push("Pakistan") // adds to last index
largeCountries.shift(); // removes first index
largeCountries.unshift("China"); // adds to first index
console.log(largeCountries);


//Challenge 5

let dayOfMonth = 13;
let weekDay = "Friday";

if (dayOfMonth === 13 && weekDay === "Friday") {
    console.log("😱");
}

//Challenge 6

let hands = ["rock", "paper", "scissors"]

function janKenPon(arr) {
    return arr[Math.floor(Math.random() * 3)]
}

console.log(janKenPon(hands));

//Challenge 6 done in EmojiFighter Folder (vibecoded some lol)

//Challenge 7 also done in FruitSorter Folder