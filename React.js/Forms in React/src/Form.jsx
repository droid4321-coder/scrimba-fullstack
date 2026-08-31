import React from "react";

/* 

    This will show us how forms work, and starting with React 19, it becomes better.
    The input type is overloaded because it contains many attributes and allows us to enter input in various ways

*/

export default function Form() {

    function handleSubmit(event) {
        event.preventDefault(); //prevents default behavior
        console.log("Submitted!");
        const formEl = event.currentTarget // gets the current event
        const formData = new FormData(formEl) // takes the event and converts the information into an object
        const email = formData.get("email") // gets the email form value
        console.log(email);
        formEl.reset() //clears the input fields.
        //then we would get the info from the form and submit it to a backend, where it gets sanitized and verified against a database for example
    }

    return (
        <section>
            <h1>Signup Form</h1>
            <form onSubmit={handleSubmit} action="" method="POST">
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