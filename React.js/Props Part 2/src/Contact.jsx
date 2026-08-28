//even though props name is generally used, we can use any name on the function parameter to pass property values.
//it logged 4 times to the console because the component is being called 4 times on the App function, we have 4 instances

//one example of console.logged
//{img: './src/images/mr-whiskerson.png', name: 'Mr. Whiskerson', phone: '(212) 555-1234', email: 'mr.whiskaz@catnap.meow'}
//what we are receiving as props is a regular JS Object is the properties that we passed to the props on the React component declaration.

//lets use these values now to remove hardcoded data and use the props components
//its important that the names of our properties match the names of the components to avoid rendering bugs
export default function Contact({ img, name, phone, email }) {

    //console.log(props);
    
    return (
        <article className="contact-card">
                <img 
                    src={img}
                    alt="Cat image"
                />
            <h3>{name}</h3>
                <div className="info-group">
                    <img 
                        src="./src/images/phone-icon.png" 
                        alt="phone icon" 
                    />
                <p>{phone}</p>
                </div>
                <div className="info-group">
                    <img 
                        src="./src/images/mail-icon.png" 
                        alt="mail icon"
                    />
                <p>{email}</p>
                </div>
        </article>
    )
}

//destructuring props

const person = {
    img: "./images/mr-whiskerson.png",
    name: "Mr.Whiskerson",
    phone: "(800) 555-1234",
    email: "mr.whiskaz@catnap.meow"
}

console.log(person.name);

//destructuring example
const { img, name } = person;
console.log(img);
console.log(name);

//if we want to destructure or use props its all up to user preference.