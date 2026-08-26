
# Where does React put all of the elements I create in JSX when I  call `root.render()`?

It puts them in the element we defined in the createRoot variable

What would show up in my console if I were to run this line of code:
console.log(<h1>Hello world!</h1>)
An error??? Nope, it returns an object.

What's wrong with this code:
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
This code needs to be inside of a parent element

What does it mean for something to be "declarative" instead of "imperative"?
When something is declarative the program handles the code for us, imperative means we have to tell the program hot to handle certain code.

What does it mean for something to be "composable"?
Composable means reusable, we can take the components we use and reuse them instead of making it page by page, and also makes the code flexible with different blocks.
Small pieces that together puts something complex.
