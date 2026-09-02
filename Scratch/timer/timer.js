//yeah yeah boohoo im vibecoding at times lol

let initialTime = 0;
let timerId = null;
const timer = document.getElementById("timer");
const error = document.getElementById("error");
const customTime = document.getElementById("time");
const submitTime = document.getElementById("submit-time");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

function formatTime(totalSeconds) {
    let minutes = String(Math.floor(totalSeconds / 60));
    let seconds = String(totalSeconds % 60);

    // --- THIS IS WHERE YOU WILL TACKLE YOUR EDGE CASE ---
    // (Add your padding logic here to fix numbers less than 10)
    if (minutes.length < 2) {
        minutes = minutes.padStart(2, "0");
    }
    
    if (seconds.length < 2) {
        seconds = seconds.padStart(2, "0");
    }
    // Return the final combined text string
    return `${minutes}:${seconds}`; 
}

function countdown() {
        timerId = setInterval(() => {
        if (initialTime <= 0) {
            error.textContent = "Please enter a positive number";
            return;
        }

        initialTime--;
        console.log(initialTime);
        timer.textContent = formatTime(initialTime);

    // 💡 THE ANIMATION TRICK
    // 1. Remove the class if it's already there
        timer.classList.remove("tick-animation");
    
    // 2. Force a DOM reflow (this line tells the browser to reset the animation)
        void timer.offsetWidth; 
    
    // 3. Add the class back to trigger the fresh animation
        timer.classList.add("tick-animation");

        if (initialTime <= 0) {
            error.textContent = "Times up!";
            clearInterval(timerId);
            startButton.disabled = false;
            submitTime.disabled = false;
            timer.classList.remove("tick-animation");
        }
    }, 1000)
}

submitTime.addEventListener("click", () => {
    if (customTime.value === "") { 
        error.textContent = "Please enter a number!";
        return;
    }

    initialTime = Number(customTime.value);
    timer.textContent = formatTime(initialTime);
})

startButton.addEventListener("click", () => {
    clearInterval(timerId);

    startButton.disabled = true;
    submitTime.disabled = true;
    error.textContent = "Timer started";

    countdown()
})

pauseButton.addEventListener("click", () => {
    if (pauseButton.textContent === "Pause") {
        clearInterval(timerId);
        timer.textContent = formatTime(initialTime);
        startButton.disabled = false;
        submitTime.disabled = false;
        error.textContent = "Timer paused!";
        pauseButton.textContent = "Resume";
    } else {
        countdown();
    }
resetButton.addEventListener("click", () => {
    clearInterval(timerId);
    initialTime = 0;
    timerId = null;
    timer.textContent = "00:00";
    customTime.value = 0;
    error.textContent = "Timer reset!";
    startButton.disabled = false;
    submitTime.disabled = false
})})