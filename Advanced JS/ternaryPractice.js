//ternary operator

const exerciseTimeMins = 80

/* let message = ""

if (excerciseTimeMinutes < 30) {
    message = "You need to try harder!"
} else {
    message = "Doing Good!"
}
console.log(message)
*/

//let message = exerciseTimeMins < 30 ? "You need to try harder!" : "Doing Good!"

//console.log(message);

//complex conditionals

/* let message = ""

if (exerciseTimeMinutes < 30) {
    message = "You need to try harder!"
} else if (exerciseTimeMinutes < 60) {
    message = "Doing Good!"
} else {
    message = "Excellent!"
}
console.log(message)
*/

//keep adding colons with other conditions
//let message = exerciseTimeMins < 30 ? "You need to try harder!" : exerciseTimeMins < 60 ? "Doing Good!" : "Excellent!"

//console.log(message);

//ternary challenge section 4

const playerGuess = 6
const correctAnswer = 6

const message = playerGuess < correctAnswer ? "Guess higher!" : playerGuess > correctAnswer ? "Guess lower!" : "Exact Number!"
console.log(message);