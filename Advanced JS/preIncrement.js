let currentTicketNumber = 0

//Preincrement increments before it is used in the function
//Also we can decrement
function getNextTicketNumber() {
    return ++currentTicketNumber;
}

//guest simulation and ticket numbers
console.log(`Guest 1, your ticket number is: ${getNextTicketNumber()}`);
console.log(`Guest 2, your ticket number is: ${getNextTicketNumber()}`);
console.log(`Guest 3, your ticket number is: ${getNextTicketNumber()}`);