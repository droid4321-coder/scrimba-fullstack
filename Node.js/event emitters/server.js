//import event transmitter
import { EventEmitter } from "node:events";

const customerDetails = {
    fullName: "Meryl Sheep",
    email: "baah@thedevilwearswool.com",
    phone: 12345678910,
}

//create the emitter
const emailRequestEmitter = new EventEmitter()

//define the listener function
function generateEmail(customer) {
    console.log(`Email generated for ${customer.email}`);
}

//register the emitter - we pass the name of the event and the function
emailRequestEmitter.on("emailRequest", generateEmail)
emailRequestEmitter.on("emailRequest", () => console.log("task assigned"))
emailRequestEmitter.on("emailRequest", () => console.log("email logged"))

//emit the event - this takes the event name and the variable we want to put the event on
setTimeout(() => {
    emailRequestEmitter.emit("emailRequest", customerDetails)
}, 2000)

//when the code is modular we can emit events on one function and listen on another, making it for modular code