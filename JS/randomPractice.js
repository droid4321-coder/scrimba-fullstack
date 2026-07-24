let randomNumber = Math.random() * 6;

let flooredNumber = Math.floor(3.45692);

//console.log(randomNumber);

//console.log(flooredNumber);

//console.log(dice);

function rollDice(times) {
    for (let i = 0; i < times; i++) {
        let dice = Math.floor(Math.random() * 6) + 1;
        console.log(`Dice rolled and got a ${dice}`);
    }
}

console.log(rollDice(1000));