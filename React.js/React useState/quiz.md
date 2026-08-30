
# You have 2 options for what you can pass in to a state setter function (e.g. `setCount`). What are they?

   1. We can pass the new version of state that we want to use as the replacement for the old version of state.
   2. Pass a callback function that must return what we want to be the new value of state to be, it will receive the old version of state as a parameter so we can use it to help determine what we want the new value to be.

When would you want to pass the first option (from answer above) to the state setter function?
   When we are setting up a new state and dont care about the old value

When would you want to pass the second option (from answer above) to the state setter function?
   When we need to know the previous value and need it to change the new state value
