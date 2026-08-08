/* Promises are like a job inteview. In a Job interview, usually it ends with a promise to let you know the results within a week or so
In JS, promises have 3 states, pending (the promise has yet to be completed), Resolved/Fulfiled (the promise has been copleted),
or Rejected(the Promise returned but was not completed)*/

//handling rejected promises
//this returns an error due to bad URL
//fetch("https://apis.scrimba.com/dog.ceo/api/breeds/image/random")
//    .then(response => response.json())
//    .then(data => {
//        console.log(data);
//    })
//    //with a catch we can handle errors in promises fetching
//    .catch(err => {
//        console.log(err);
//        //update the DOM to warn the user
//        //access an alternative api
//        //we can throw New Error(), but that stops code execution
//    })
//    .finally(() => console.log("Done!")); //the finally code runs whether a promise was fulfulled or rejected
//
//rejected promise example in browser console
/* unhandledrejection
    PromiseRejectionEvent {isTrusted: true, reason: TypeError: failed to fetch
        at getSuggestion (scrimba url)
        at h..., type:"unhandledrejection", target: Window, currentTarget:Window, ...} */

async function getDogImage() {
    try {
        const response = await fetch("https://apis.scrimba.com/dog.ceo/api/breeds/image/random");
        const data = await response.json();
        console.log(data); // 1. Logs data first
    } catch (err) {
        console.log(err);
    } finally {
        console.log("Done!"); // 2. Logs "Done!" last
    }
}

getDogImage();
