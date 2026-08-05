//functions with arrows

//const getSpendAlert = function (amount) {
//    return `Warning! You just spent ${amount}`
//}

//when you have only one argument in an arrow function, you do not need the brackets
//if there are no parametes or 2+ parameters, you need the brackets
//an arrow function does not need curly brackets or return, its not always possible
//{} + return is needed when there is more complex logic in the code.
//you can return one line of code without curly braces or the return keyword
const getSpendAlert = amount => `Warning! You just spent ${amount}`

console.log(getSpendAlert(150));

//arrow function challenge
const speedWarning = (limit, speed) => { if (speed > limit) {return `Warning, you are going at ${speed} mph! It is over the designated limit of ${limit} mph!`}}

console.log(speedWarning(35, 40));

//inline arrow function challenge

const distanceTraveledMiles = [267, 345, 234, 190, 299];

const distanceTraveledKm = distanceTraveledMiles.map(distance => { return Math.round(distance * 1.6) });

console.log(distanceTraveledKm);