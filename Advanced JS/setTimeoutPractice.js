//🔴 🟡 🟢

//function displayTrafficLight(light) {
//    console.log(light);
//}
//
//
//we use setTimeOut with parameters, 3000 are the miliseconds, and the green light is the parameter we want to pass to the function
//setTimeout(displayTrafficLight, 3000, "🟢")
//
//displayTrafficLight("🔴")

//challenge

function logAnswer() {
    console.log("The answer is Lima of course! If you got that right, give yourself a cookie! +10 points!");
}

const timeout = setTimeout(logAnswer, 3000);

console.log("What is the capital of Peru?");

/*
    IF we want to stop a timeout we can implement it using the clearTimeout(), heres an example

    <!-- HTML DOCUMENT -->
    <button id="stop">Stop</button>

    /JS Document/
    button.addEventListener("click", function(} {
        clearTimeout(timeout);
        console.log("Stopped!");
    }))
*/

