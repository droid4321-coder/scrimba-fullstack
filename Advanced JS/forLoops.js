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