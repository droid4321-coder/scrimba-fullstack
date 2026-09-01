import React from "react";

export default function App() {

    const [unreadMessages, setUnreadMessages] = React.useState(["a", "b"])
    const inboxMessages = unreadMessages.length
    console.log(inboxMessages);


    //the use of the shorthand operator allows us to render content depending if the condition is met

    //now with the conditional rendering we have made an if else statement, and this is repetition. The logical And operator is not a good choice. Its important to define the condition because if it is a falsy value, React will render the false value
    /*   return (
           <div>
               {inboxMessages > 0 && <h1>You have {inboxMessages} unread messages!</h1>}
               {inboxMessages === 0 && <p>You have 0 unread messages</p>}
           </div>
       )
   } */

    // {inboxMessages === 0 ? <h1>You're all caught up!</h1>
    //  : inboxMessages === 1 ? <h1>You have 1 unread message</h1>
    //  : inboxMessages > 1 ? <h1>You have {inboxMessages} unread messages</h1>
    //  : <h1>Can't process messages right now. Please try again later.</h1> }
    return (
        <div>
        { inboxMessages === 0 ? <h1>You're all caught up!</h1>
        : inboxMessages === 1 ? <h1>You have 1 unread message</h1>
        : inboxMessages > 1 ? <h1>You have {inboxMessages} unread messages</h1>
        : <h1>Can't process messages right now. Please try again later.</h1> }
        </div>
    )
}

            //{inboxMessages === 0 && <h1>You're all caught up!</h1>}
            //{inboxMessages === 1 && <h1>You have 1 unread message</h1>}
            //{inboxMessages > 1 && <h1>You have {inboxMessages} unread messages</h1>}