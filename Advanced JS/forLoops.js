//for...in

const character1 = {
    title: "Ninja",
    emoji: "🥷",
    powers: ["agility", "stealth", "aggression"],
}

for (let property in character1) {
    console.log(character1[property]);
}

const character = "ninja"

for (let letter of character) {
    console.log(letter);
}

//these loops can be used with let or const, obvious if you reassign use let.

// for ... of vs for ... in loops
//both iterate over object data structures - an array is a type of object too!
//for...in iterated over all enumerable property keys of an object
//for...of iterates over the values of an iterable object (iterable objects include arrays, strings, etc.)

//forEach loops
const characters = [
    {
    title: "Ninja",
    emoji: "🥷",
    powers: ["agility", "stealth", "aggression"],
}, {
    title: "Sorcerer",
    emoji: "🧙‍♂️",
    powers: ["magic", "invisibility", "necromancy"],
    },  {
    title: "Unicorn",
    emoji: "🦄",
    powers: ["flight", "power", "purity"],
    }, {
    title: "Ogre",
    emoji: "👹",
    powers: ["power", "stamina", "shapeshifting"],
    }
]

//for (let character of characters) {
//    console.log(character);
//}

//forEach - method to iterate over arrays
//foreach needs a function and a parameter that represents all the properties and values of the object, very similar to character in for loop
//forEach is neater and cleaner

//characters.forEach(function (character) {
//    console.log(character); //when you use dot notation, we can access certain values like characters.title!
//})

//iterating inception!
//characters.forEach((character) => {
//    character.powers.forEach((item) => {
//        console.log(item);
//    })
//})

//forEach with index parameter
characters.forEach(function (character, index) {
    console.log(index, character.title);
})

//break and continue on for loops

const expensesAndRefunds = [
    { description: "Groceries", amount: 50, year: 2023 },
    { description: "Electronics", amount: -10, year: 2023 },
    { description: "Dinner", amount: 40, year: 2023 },
    { description: "Clothing", amount: 60, year: 2023 },
    { description: "Entertainment", amount: 25, year: 2023 },
    { description: "Rent", amount: -500, year: 2024 },
    { description: "Utilities", amount: 100, year: 2024 },
    { description: "Books", amount: 20, year: 2024 },
    { description: "Fitness", amount: 30, year: 2024 },
    { description: "Gifts", amount: 15, year: 2024 },
]



let totalSpent = 0;
const cutOffDate = 2024;

//iterate with conditionals and skip elements not wanted
for (let i = 0; i < expensesAndRefunds.length; i++) {
    const currentExpensesOrRefund = expensesAndRefunds[i];
    if (currentExpensesOrRefund.year >= cutOffDate) {
        console.log("Reached cutoff date, exiting loop");
        break; //exits loop when conditions met
    }
    if (currentExpensesOrRefund.amount < 0) {
        console.log(`Skipping ${currentExpensesOrRefund.description} due to refund`);
        continue; //skips current element that meets the conditions
    }

    totalSpent += currentExpensesOrRefund.amount
    
}

console.log(`Total amount spent on items in 2023: $${totalSpent}`);