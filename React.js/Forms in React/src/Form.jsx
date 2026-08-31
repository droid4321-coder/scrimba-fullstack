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
        const textArea = formData.get("description")
        const employmentStatus = formData.get("employment-status")
        const dietaryRestrictions = formData.getAll("dietary-restrictions")
        console.log(email);
        console.log(password);
        console.log(textArea)
        console.log(employmentStatus); //huh, it only returns on?
        //radio buttons dont come with the value we want, it only returns on or null if none is checked, we need to set up the value property with the expected value we want from that radio button. Also, we can select a default radio button to be filled by using defaultChecked attribute. This also works for checkboxes
        console.log(dietaryRestrictions); // we only get one? The easy way to get around it is by using getAll with formData

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
                        defaultValue="test@email.com"
                    />
                </label>
                <br />
                <label htmlFor="password">Password: 
                    <input
                    id="password"
                    type="password"
                        name="password"
                        defaultValue="password"
                    />
                <br />
                    
                <br />
                    <label htmlFor="description">Textarea: 
                        <textarea name="description" id="description" defaultValue="Description" ></textarea>
                    </label>
                    <br />
                    <fieldset>
                        <legend>Employment Status</legend>
                    <label htmlFor="radio">
                        <input type="radio" name="employment-status" id="radio" value="unemployed" defaultChecked="true" />Unemployed
                        </label>
                    <label htmlFor="radio">
                        <input type="radio" name="employment-status" id="radio" value="part-time" />Part-time
                        </label>
                    <label htmlFor="radio">
                        <input type="radio" name="employment-status" id="radio" value="full-time" />Full-time
                    </label>
                    </fieldset>
                    <br />
                    <fieldset>
                        <legend>Dietary Restrictions</legend>
                    <label htmlFor="checkbox">
                        <input type="checkbox" name="dietary-restrictions" id="checkbox" value="kosher" defaultChecked="true" />Kosher
                        </label>
                    <label htmlFor="checkbox">
                        <input type="checkbox" name="dietary-restrictions" id="checkbox" value="vegan" />Vegan
                        </label>
                    <label htmlFor="checkbox">
                        <input type="checkbox" name="dietary-restrictions" id="checkbox" value="gluten-free" />Gluten-free
                    </label>
                    </fieldset>
                    <button>Submit</button>
                </label>
            </form>
        </section>
    )
}