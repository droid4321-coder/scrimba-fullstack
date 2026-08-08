//Promise.all

function createPromise() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5
        if (success) {
            resolve("Operation successful!");
        } else {
            reject("Operation failed!")
        }
    })
}

try {
    const promise1 = createPromise();
    const promise2 = createPromise();
    const promise3 = createPromise();
    const results = await Promise.all([promise1, promise2, promise3])
    console.log(results);
} catch (err) {
    console.log(err);
}