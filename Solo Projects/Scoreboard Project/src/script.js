let currentHomeScore = 0;
let currentGuestScore = 0;
let period = 1;
let initialTimer = 900;
let timerId = null;


let homeTeam = "Boston\nCeltics"
let guestTeam = "New York\nKnicks"

let homeText = document.getElementById("home-text");
let guestText = document.getElementById("guest-text");
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
const homeAdd1 = document.getElementById("home-add1");
const homeAdd2 = document.getElementById("home-add2");
const homeAdd3 = document.getElementById("home-add3");
const guestAdd1 = document.getElementById("guest-add1");
const guestAdd2 = document.getElementById("guest-add2");
const guestAdd3 = document.getElementById("guest-add3");
const resetBtn = document.getElementById("reset-btn");
const pauseBtn = document.getElementById("pause-btn");
const resumeBtn = document.getElementById("resume-btn");
const resetTimerBtn = document.getElementById("reset-timer-btn");
const periodEl = document.getElementById("period")

homeText.textContent = homeTeam || "HOME"
guestText.textContent = guestTeam || "GUEST"

function formatTime(totalSeconds) {
    let minutes = String(Math.floor(totalSeconds / 60));
    let seconds = String(totalSeconds % 60);

    if (minutes.length < 2) {
        minutes = minutes.padStart(2, "0");
    }
    
    if (seconds.length < 2) {
        seconds = seconds.padStart(2, "0");
    }
    return `${minutes}:${seconds}`; 
}

const timer = document.getElementById("timer");
timer.textContent = formatTime(initialTimer);

function countdown() {
        timerId = setInterval(() => {


        initialTimer--;
        console.log(initialTimer);
        timer.textContent = formatTime(initialTimer);

        if (initialTimer <= 0) {
            clearInterval(timerId);
        }
    }, 1000)
}

function highlightLeader () {
    if (currentHomeScore > currentGuestScore) {
        homeScore.style.color = "green";
        guestScore.style.color = "red";
    } else if (currentHomeScore === currentGuestScore) {
        homeScore.style.color = "green";
        guestScore.style.color = "green";
    } else {
        guestScore.style.color = "green";
        homeScore.style.color = "red";
    }
}

function resumeTimer () {
    clearInterval(timerId);
    resumeBtn.disabled = true;
    pauseBtn.disabled = false;
    countdown();
}

function pauseTimer () {
    clearInterval(timerId);
    timer.textContent = formatTime(initialTimer);
    resumeBtn.disabled = false;
    pauseBtn.disabled = true;
}

function resetTimer () {
    clearInterval(timerId);
    initialTimer = 900;
    timer.textContent = formatTime(initialTimer);
    timerId - null;
    resumeBtn.disabled = false;
    pauseBtn.disabled = false;
    period = 1;
    periodEl.textContent = 1;
}

function updateHome(points) {
    currentHomeScore += points;
    homeScore.textContent = currentHomeScore;
    buffer = points;
    highlightLeader();
}

function updateGuest(points) {
    currentGuestScore += points;
    guestScore.textContent = currentGuestScore;
    buffer = points;
    highlightLeader();
}

function resetScore () {
    console.log("Reset Clicked!");
    currentHomeScore = 0;
    currentGuestScore = 0;
    homeScore.textContent = 0;
    guestScore.textContent = 0;
}

function updatePeriod () {
    period += 1;
    periodEl.textContent = period;
}

homeAdd1.addEventListener("click", () => updateHome(1))
homeAdd2.addEventListener("click", () => updateHome(2))
homeAdd3.addEventListener("click", () => updateHome(3))
guestAdd1.addEventListener("click", () => updateGuest(1))
guestAdd2.addEventListener("click", () => updateGuest(2))
guestAdd3.addEventListener("click", () => updateGuest(3))
resetBtn.addEventListener("click", () => resetScore())
resumeBtn.addEventListener("click", resumeTimer)
pauseBtn.addEventListener("click", pauseTimer)
resetTimerBtn.addEventListener("click", resetTimer)
periodEl.addEventListener("click", updatePeriod)