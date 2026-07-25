let age = 22;
console.log(age);

if (age <= 20) {
    console.log("You can not enter the club!");
} else {
    console.log("Welcome!");
}

age = 100;
console.log(age);
if (age < 100) {
    console.log("Not eligible!");
} else if (age === 100) {
    console.log("You are 100 years old!");
} else {
    console.log("Not eligible! You already passed 100 yrs!");
}

//booleans!

let isVegan = true;
console.log(isVegan);

let hasDiscountCode = true;

function processOrder () {
    if(hasDiscountCode) {
        console.log("Discount applied to food order!");
        hasDiscountCode = false;
    } else {
        console.log("No discount applied!");
    }
}

processOrder()
processOrder()

/* console.log(4 === 3) false// 
console.log(5 > 2)    true// 
console.log(12 > 12)  false//
console.log(3 < 0)    false//
console.log(3 >= 3)   true// 
console.log(11 <= 11) true//
console.log(3 <= 2)    false// */

let hasCompletedCourse = true;
let giveCertificate = true;

if (hasCompletedCourse && giveCertificate) {
    generateCertificate();
}

function generateCertificate() {
    console.log("Generating certificate...");
}

let hasSolvedChallenge = false;
let hasHintsLeft = false;

if (!hasSolvedChallenge && !hasHintsLeft) {
    showSolution()
}

function showSolution() {
    console.log("Showing the solution...");
}

let likesDocumentaries = true;
let likesStartups = false;

if (likesDocumentaries || likesStartups) {
    recommendMovie();
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!");
}