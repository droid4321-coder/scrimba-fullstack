const credits = 0

if (credits > 0) {
    console.log("Let's play!");
    } else {
        console.log("Sorry, you have no credits");
}


/* Truthy and falsy values

"yolo" is a truthy value
an array is a truthy value.
"" is a falsy value.

falsy values:

false
0
""
null -  null and undefined both are primitive data types, the difference is that null signifies developer emptiness and undefined defines Javascript emptiness. Devs use null, JS uses undefined
undefined
NaN - Not a Number

*/
let trueOrFalse = Boolean("hello")

console.log(trueOrFalse);

/*
    Boolean practice
    "" = false
    "0" = true
    100 = true
    null = false
    [0] = true
    -0 = false
*/ 