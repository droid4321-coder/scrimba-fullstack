document.getElementById("my-form").addEventListener("submit", (event) => {
    event.preventDefault() //this prevents refreshing and default behavior
    const formData = new FormData(event.currentTarget) //gets the data and puts it in this variable
    console.log(formData);
    const firstName = formData.get("firstName") //get the elements
    const lastName = formData.get("lastName")
    submitViaAPI({
        firstName,
        lastName,
    })
    
})

//submits the data and logs it to the console
function submitViaAPI(data) {
    console.log(data);
    console.log("Submitted!");
}