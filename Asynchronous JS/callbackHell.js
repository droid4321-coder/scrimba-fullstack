//escaping callback jail

//examples given

//function uploadFile(callback) {
//    console.log("Step 1: Uploading file...");
//    setTimeout(() => {
//        callback(); //call the next step after 1 second
//    }, 1000)
//}
//
//function processFile(callback) {
//    console.log("Step 2: Processing file...");
//    setTimeout(() => {
//        callback(); //call the next step after 1 second
//    }, 1000)
//}
//
//function notifyUser(callback) {
//    console.log("Step 3: Notifying user...");
//    setTimeout(() => {
//        callback(); //call the next step after 1 second
//    }, 1000)
//}

//converting to promises

function uploadFile(callback) {
    return new Promise((resolve, reject) => {
    console.log("Step 1: Uploading file...");
    setTimeout(() => {
        resolve(); //call the next step after 1 second
    }, 1000)
    })
}

function processFile(callback) {
    return new Promise((resolve, reject) => {
    console.log("Step 2: Processing file...");
    setTimeout(() => {
        resolve(); //call the next step after 1 second
    }, 1000)
    })
}
function notifyUser(callback) {
    return new Promise((resolve, reject) => {
    console.log("Step 3: Notifying user...");
    setTimeout(() => {
        resolve(); //call the next step after 1 second
    }, 1000)
    })
}

async function processFunctions() {
    try {
        const upload = await uploadFile();
        const process = await processFile();
        const notify = await notifyUser();
    } catch (err) {
        console.log(err);
    } finally {
        console.log("All steps completed!");
    }
}

processFunctions();

//ye olde callback hell method:

/*uploadFile(() => 
    processFile(() => 
        notifyUser(() =>
            console.log("All steps completed!")
        )
    )
) */