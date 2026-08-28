/**
 * Challenge:
 * - Create a Contact component in another file
 * - Move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card
 *     - Think ahead: what's the problem with doing it this way? - The problem is that because the data is hardcoded into the app, the same Contact will appear 4 times. We need props to pass the desired info to the component.
 */
import Contact from "./Contact.jsx";

//props part 4 - passing properties to React Contact component
//it looks way nicer!
function App() {
    return (
        <div className="contacts">

            <Contact
                img="./src/images/mr-whiskerson.png"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact
                img="./src/images/fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact
                img="./src/images/felix.png"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact
                img="./src/images/pumpkin.png"
                name="Pumpkin"
                phone="(800) CAT-KING"
                email="pumpking@scrimba.com"
            />
            
        </div>
    )
}

            /*<article className="contact-card">
                <img 
                    src="./src/images/fluffykins.png"
                    alt="Photo of Fluffykins"
                />
                <h3>Fluffykins</h3>
                <div className="info-group">
                    <img 
                        src="./src/images/phone-icon.png" 
                        alt="phone icon" 
                    />
                    <p>(212) 555-2345</p>
                </div>
                <div className="info-group">
                    <img 
                        src="./src/images/mail-icon.png" 
                        alt="mail icon"
                    />
                    <p>fluff@me.com</p>
                </div>
            </article>
            
            <article className="contact-card">
                <img 
                    src="./src/images/felix.png"
                    alt="Photo of Felix"
                />
                <h3>Felix</h3>
                <div className="info-group">
                    <img 
                        src="./src/images/phone-icon.png" 
                        alt="phone icon" 
                    />
                    <p>(212) 555-4567</p>
                </div>
                <div className="info-group">
                    <img 
                        src="./src/images/mail-icon.png" 
                        alt="mail icon"
                    />
                    <p>thecat@hotmail.com</p>
                </div>
            </article>
            
            <article className="contact-card">
                <img 
                    src="./src/images/pumpkin.png"
                    alt="Photo of Pumpkin"
                />
                <h3>Pumpkin</h3>
                <div className="info-group">
                    <img 
                        src="./src/images/phone-icon.png" 
                        alt="phone icon" 
                    />
                    <p>(0800) CAT KING</p>
                </div>
                <div className="info-group">
                    <img 
                        src="./src/images/mail-icon.png" 
                        alt="mail icon"
                    />
                    <p>pumpkin@scrimba.com</p>
                </div>
            </article> */

            /* In html we can use attributes on elements to pass information to it. 
               In the React element you just created, you can pass the information you want to the commponent, in React its called a property, or prop
               We can pass any kind of info*/

export default App