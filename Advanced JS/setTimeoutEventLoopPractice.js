// starting timestamp
const start = performance.now();

setTimeout(() => {
    const end = performance.now();
    console.log(`Execution time: ${end - start} miliseconds`);
}, 1000);

for (let i = 0; i < 1000000; i++) {
    let answer = i * 2000000 / 67.8 * (45.7 / 3.2) //gibberish to stall time
}

//Time w/o slow executing code = 1001.296106 miliseconds
//Time w slow executing code = 1001.5696 miliseconds

//slight delay because of gibberish code affects setTimeout.
//so when we say how much time befaure a setTimeout executes, we can say a minimum of the miliseconds