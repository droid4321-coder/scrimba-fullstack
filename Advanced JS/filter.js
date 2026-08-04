//filter gets only the elements we want from an array that meet a certain condition

//example
const ages = [1, 5, 9, 23, 56, 10, 47, 70, 10, 19, 23, 18];

//this is a filter writing function long. short version below
//const adults = ages.filter(function (age) {
//    if (age >= 18) {
//        return true;
//    } else {
//        return false;
//    }
//})

const adults = ages.filter((age) => age >= 18);
const children = ages.filter((age) => age < 18);


console.log(adults);
console.log(children);