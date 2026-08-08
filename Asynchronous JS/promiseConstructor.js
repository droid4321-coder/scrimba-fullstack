//create our own asynchronous action
//they are functions that pass down a value when using the next .then or when using async await functions
//the item passed to resolve or reject can be any data type supported by JS

const promise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5
    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }
})

//promise.then(response => console.log(response))

try {
    const response = await promise;
    console.log(response);
} catch (err) {
    console.log(err);
}