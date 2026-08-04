//reduce method in JS - it reduces an array to one value using a function passed to it
//it will take the first element and does a operation to the next array, in sequence. index 0 to index 1, index 1 to index 2, etc.

const rainJanuaryByWeek = [10, 20, 0, 122]

//the reduce function takes 2 parameters
const totalRainfallJanuary = rainJanuaryByWeek.reduce(function (total, currentElement) {
    console.log(`total: ${total}, currentElement: ${currentElement}`)
    return total + currentElement})
console.log(totalRainfallJanuary);

//reduce method challenge

const grades = [75, 83, 66, 43, 55, 99, 87, 16, 89, 64, 70, 80, 94, 77, 66, 73];
const sumGrades = grades.reduce((total, currentGrade) => total + currentGrade);
console.log(sumGrades);
const avg = sumGrades / grades.length;
console.log(`The class average is ${avg}`);