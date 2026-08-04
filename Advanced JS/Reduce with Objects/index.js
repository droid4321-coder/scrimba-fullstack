import { studentsArr } from "./studentsArr.js";

function calculateClassAverage(studentsArr) {
    //the reduce method takes in a function as a parameter
    //the 0 on the second parameter tells the reuduce function, instead of starting with certain value, start with 0
    //total starts with the first element of an array, and current student goes on with the second element so on...
    //now we have a second parameter that tells reduce function start with a 0. therefore curentStudent now starts with the first element of an array
    const totalGrades = studentsArr.reduce(function (total, currentStudent) {
        return total + currentStudent.grade;
    }, 0)
    return totalGrades / studentsArr.length
}

console.log(calculateClassAverage(studentsArr));