
# What is a React component?
It is a reusable piece of code that allows us to use it on our Root Render and a function that returns a react element, which is an element thats pushed to the DOM, turning react elements into JS objects to turn to DOM nodes.

What's wrong with this code?

function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
We need to use PascalCase - Capital Letter

What's wrong with this code?

function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())

We dont call the function like Header(), we call it like <Header />