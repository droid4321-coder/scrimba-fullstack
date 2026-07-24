p1Time = 102;
p2Time = 107;

function getFastestRaceTime() {
    if (p1Time < p2Time) {
        return p1Time
    } else if (p2Time < p1Time) {
        return p2Time
    } else {
        return p1Time
    }
}

let fastestTime = getFastestRaceTime;
console.log(fastestTime);