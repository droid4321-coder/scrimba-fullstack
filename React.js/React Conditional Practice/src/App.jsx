import React from "react";

export default function App() {

    const [unreadMessages, setUnreadMessages] = React.useState(["a", "b"])


    //the use of the shorthand operator allows us to render content depending if the condition is met

    //now with the conditional rendering we have made an if else statement, and this is repetition. The logical And operator is not a good choice. Its important to define the condition because if it is a falsy value, React will render the false value
    return (
        <div>
            {unreadMessages.length > 0 && <h1>You have {unreadMessages.length} unread messages!</h1>}
            {unreadMessages.length === 0 && <p>You have 0 unread messages</p>}
        </div>
    )
}