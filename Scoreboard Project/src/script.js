let currentHomeScore = 0;
let currentGuestScore = 0;

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

homeText.textContent = homeTeam || "HOME"
guestText.textContent = guestTeam || "GUEST"

function updateHome(points) {
    currentHomeScore += points;
    homeScore.textContent = currentHomeScore;
    buffer = points;
}

function updateGuest(points) {
    currentGuestScore += points;
    guestScore.textContent = currentGuestScore;
    buffer = points;
}

function resetScore () {
    console.log("Reset Clicked!");
    currentHomeScore = 0;
    currentGuestScore = 0;
    homeScore.textContent = 0;
    guestScore.textContent = 0;
}

homeAdd1.addEventListener("click", () => updateHome(1))
homeAdd2.addEventListener("click", () => updateHome(2))
homeAdd3.addEventListener("click", () => updateHome(3))
guestAdd1.addEventListener("click", () => updateGuest(1))
guestAdd2.addEventListener("click", () => updateGuest(2))
guestAdd3.addEventListener("click", () => updateGuest(3))
resetBtn.addEventListener("click", () => resetScore())