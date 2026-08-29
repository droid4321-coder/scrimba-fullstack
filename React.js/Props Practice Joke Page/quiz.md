
# What does the `.map()` array method do?

The map method takes an array of data and modifies or renders the input depending on the return function callbacked to it. it iterates to every index and returns it to a new array on the same index

What do we usually use `.map()` for in React?
In React, we can use map method to pass the properties to a component, in order to render the data and avoid having to type data manually.

Critical thinking: why is using `.map()` better than justcreating the components manually by typing them out?
Using map is better because it allows us to separate the data array from the component entry and allows for more reusability and handling of code, and we dont know what kind of array an API returns, this makes the code more self sustaining.
