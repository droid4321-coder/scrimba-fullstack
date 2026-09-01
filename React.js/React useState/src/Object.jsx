import React from "react"
import avatar from "./images/user.png"
import Star from "./Star.jsx"
//import starFilled from "./images/star-filled.png"
//import starEmpty from "./images/star-empty.png"

/* We have a state variable that is an object.
We are going to take the properties of the variable and update them to the Object Component to begin
The isFavorite object is meant to tell if the star icon is filled or not, and if it is filled is true if not false
*/

/* Updating info like the favorite icon 
    We set up a setcontact to update, but entering isFavorite: !prevcontact.isFavorite leads to a bug, instead of returning 5 properties, we return only 1 property and the other information disappears although the favorite icon works. We need to spread Interesting => having multiple of the same keys is not a syntax error in JS, it returns the last one of them*/

    /* 
        Setting state from child components 

        What if we want the child component to manage the state variable and reusing it in other components, we will see this now here.
        How to enable the child component to control the state variable of the main component?

        onClick does not work remember that JSX elements they get translated to a JSX element. Any properties by custom component in React are handled by us. The onClick we are passing to the component, and we need to pass it to the child component. In this case, we need to pass it to the Star jsx file with the handleClick name, and it works. We are passing the function to the child element, star, so we can put it in the button and therefore handle the favorite aspect of our contact
    */

export default function Object() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })



    function toggleFavorite() {
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}
