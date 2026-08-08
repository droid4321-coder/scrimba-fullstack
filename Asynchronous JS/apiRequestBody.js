async function fetchAPI() {
    try {
        //fetch can get a second parameter
        const url = await fetch("https://apis.scrimba.com/jsonplaceholder/posts/", {
            method: "POST",
            headers: { //adding headers to the post request
                "Content-Type": "application/json", //double quotes need to be on content type because it has a hyphen.
            },
            body: JSON.stringify({
                title: "New Post",
                body: "New Body",
                userId: 69
            }),
        });
        if (!url.ok) {
            throw new Error("There was a problem with the API, please try again");
        }
        const data = await url.json();
        console.log(data);
        
    }catch (err) {
        console.log(err);
    }
    finally {
        console.log("Done!");
    }
}

fetchAPI()
console.log("Breakpoint!");

/*
    Code snippet to do a POST request:

    fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST", //this is the method used
    body: JSON.stringify ({ //body is an object by itself and has property
    title: "foo", //title of the post
    body: "bar", // body of the posr
    userId: 1,}), // the id of the user sending thre POST request
    })
*/

//JSON stringify takes a JS object and converts it to a string

//when the API says id 101 it means it has recived the request, usually they will contain the data

//we can send headers to ths API with a post request, headers contain extra info about the request like metadata, authentication, type of data sent, etc/
//inChrome we can go to Dev Console and get the headers being sent. Burp suite also hehe.

//challenge- add headers to our json request

/* UPDATING A POST EXAMPLE
        const url = await fetch("https://apis.scrimba.com/jsonplaceholder/posts/", {
            method: "PUT",
            headers: { //adding headers to the post request
                "Content-Type": "application/json", //double quotes need to be on content type because it has a hyphen.
            },
            body: JSON.stringify({
                id: 1,
                title: "New Post",
                body: "New Body",
                userId: 69
            }),
        });
*/