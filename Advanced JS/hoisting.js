//function hoisting

//variable and function declarations are movd to the top of their containing scope during the compilation phase, before code execuition.
//functions behave like they are declared at the top of the js file


//normal function execution
function getWeather() {
    return "Today's weather is warm and sunny";
}

console.log(getWeather());

//yes it works, function hosting
console.log(getNews());

function getNews() {
    return "A new swimming pool has opened in the town centre..."
}

//error, cannot access variable before initialization, we need to declare vars before initializaing

//this happens because the variable is in a temporal dead zone, it is a state where a variable is declared and JS knows it, but cannot be accesed at this time until its initialized. It is hoisted but not initialized

//when var is used, it returns undefined
//console.log(trafficInfo);

let trafficInfo = "All roads are busy right now."

//if we declare a variable before it is expressed, the error says it is not defined
//console.log(randomVariable);