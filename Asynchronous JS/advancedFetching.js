//using the JSON placeholder API

async function fetchAPI() {
    try {
        //fetch can get a second parameter
        const url = await fetch("https://apis.scrimba.com/jsonplaceholder/posts/");
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

//when we got stuff from an API, we are making a GET request to get data, POST request for posting data, PUT for updating Data, DELETE for deleting data.
//PATCH and OPTIONS are other methods