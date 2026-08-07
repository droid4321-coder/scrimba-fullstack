//JS functions are first class citizens in the sense that.
//Functions can be assigned to variables - like seen with function expressions
//functions can be passed as argunments to other functions

//list times we have passed functions as arguments to other functions
// with array functions like map and so on

//arrayOfNames.forEach((name) => console.log(name))

function notifyUser(notificationfn) {
    //this is a callback
    notificationfn()
}

const emailNotification = () => console.log("Email sent");
const smsNotification = () => console.log("SMS Sent");

notifyUser(emailNotification);
notifyUser(smsNotification);