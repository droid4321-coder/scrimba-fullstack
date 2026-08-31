import React from "react";

/* 

    This will show us how forms work, and starting with React 19, it becomes better.
    The input type is overloaded because it contains many attributes and allows us to enter input in various ways

*/

export default function Form() {

    function signUp(formData) {
        //event.preventDefault(); //prevents default behavior this is done by default now with the form action function
        //console.log("Submitted!");
        //const formEl = event.currentTarget // gets the current event, done noe by default
        //const formData = new FormData(formEl) // takes the event and converts the information into an object
        const email = formData.get("email") // gets the email form value
        const password = formData.get("password")
        console.log(email);
        console.log(password);
        //formEl.reset() //clears the input fields. Default done now
        //then we would get the info from the form and submit it to a backend, where it gets sanitized and verified against a database for example
    }

    return (
        <section>
            <h1>Signup Form</h1>
            <form action={signUp}>
                <label htmlFor="email">Email: 
                    <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="joe@schmoe.com"
                    />
                </label>
                <br />
                <label htmlFor="password">Password: 
                    <input
                    id="password"
                    type="password"
                    name="password"
                    />
                <br />
                <button>Submit</button>
                </label>
            </form>
        </section>
    )
}