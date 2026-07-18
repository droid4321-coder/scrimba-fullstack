//Challenge #1

const firstName = "Droid"
const lastName = "Coder"

const fullName = `${firstName} ${lastName}`

console.log(fullName)

//challenge #2

function concatName (greeting, name) {
    if (typeof name !== "string" || typeof greeting !== "string") {
        return "Name and greeting must be a string";
    } else {
        return `${greeting}, ${name}!`
    }
}

console.log(concatName("Godspeed", "Droid"))

//Challenge #3

let myPoints = 0;

function editPoints (command, amount) {
    if (command !== "add" && command !== "remove") {
        return "Commands are add or remove.";
    } else if (command === "add") {
        myPoints += amount;
        console.log(`${amount} points added!`);
        console.log("Total Points: " + myPoints);
    }  else if (command === "remove") {
        myPoints -= amount;
        console.log(`${amount} points removed!`);
        console.log("Total Points: " + myPoints);
    }
}

editPoints("add", 10);
editPoints("remove", 5);

/*
    Challenge #4, guessing output on console.logs()

    1. "2" + 2 = 22
    2. 11 + 7 = 18
    3. 6 + "5" = 65
    4. "My Points: " + 5 + 9 = My Points: 59
    5. 2 + 2 = 4
    6. "11" + "14" = 1114

    Dang, perfect! :)
*/