import React from "react"

export default function App() {
  /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array as an empty array
     * 
     * Don't worry about fixing `addFavoriteThing` quite yet.
     */
    const [myFavoriteThings, setMyFavoriteThings] = React.useState([]);
  const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
  "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

    /* We might be tempted to just push to an array, but it wont work that way. Modifying the state variable in React does not always do a re-render. It is adding these things to the array, it wont re-render. In react you never want to modify a state directly
    
        We put the setter function on the function, and in this case we do need the previous state because it is an array and we are updating it, and we need the previous info. To get the previous items in the array without modifiying the array, we pass in a new array with the spread operator for previous index items and the new item. in this case, we will make it so everytime the button is clicked, the item in the index starting from 0 first click and so on will show.*/
    
  function addFavoriteThing() {
      // We'll work on this next, nothing to do here yet.
      setMyFavoriteThings((prevFavThings) =>
          [...prevFavThings, allFavoriteThings[prevFavThings.length]])
  }
  
  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">
        {thingsElements}
      </section>
    </main>
  )
}