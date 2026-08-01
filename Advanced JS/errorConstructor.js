function checkUsername(userName) {
    if (userName) {
        console.log(userName);
    } else {
        //if used throw, it will stop code execution
        throw new Error("No username provided");
        //console.log(new Error("No username provided"));
    }
}

checkUsername();

//constructors use uppercase
//String()
//Number()
//Array()
//Object()
//Boolean()
//
////super rare, dont use it use the object literal
//const person = new Object()
//person.name = "Tom"
//console.log(person);