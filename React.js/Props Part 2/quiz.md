
# What do props help us accomplish?

It helps us to accomplish avoiding hardcoded data and also to create reusable components.

How do you pass a prop into a component?
After the prop we called we pass props like we pass attributes to an html element
<Component prop=value />

Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
No, because a regular html element is thru JSX syntax and it returns a JS object that tells the element used, and the attributes that the element recognizes. It will be returned into a REAL DOM object

How do I receive props in a component?
function Navbar(props) {
    return (
        <header>
            ...
        </header>
    )
}

What data type is `props` when the component receives it?
Its a regular JS object with keys and values.