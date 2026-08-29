import Header from "../components/Header.jsx";
import Entry from "../components/Entry.jsx";
import data from "./data.js";

/* old entry <Entry
            key={entry.id}
            img={entry.img}
            title={entry.title}
            country={`${entry.country.toUpperCase()}`}
            googleMapsLink={entry.googleMapsLink}
            dates={entry.dates}
            text={entry.text}
        />
        */

export default function App() {

    const entryElements = data.map((entry) => {
        return <Entry
            key={entry.id}
            {...entry}
        />
    })
    return (
        <>
            <Header />
            {entryElements}
        </>
    )
}

 /*           <Entry
                img={{
                    src: "https://scrimba.com/links/travel-journal-japan-image-url",
                    alt: "Mount Fuji"
                }}
                country={`${"japan".toUpperCase()}`}
                googleMapslink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
                title="Mount Fuji"
                dates="12 Jan, 2021 - 24 Jan, 2021"
                text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
            /> */

            /* key prop
                The display is a function of the dara we are pulling from the app, or api or something. When we hit save it says a warning, that each item on the list should have a key prop, this is a common warning.
                
                When we do something with an array, keys are important, because for example when we are dealing with functions that add or delete data, a key is crucial to know which data we are going to manipulate and keep track of.
                
                To pass this key prop, we need to pass a key attribute to the component and associate it with a unique identifier for each array object or index, API's will usually send a unique identifier like an ID or uuid to identify each item in the index. It does not have to be a number BUT it needs to be something unique, an ID is recommended.

                Also, you can access an index by passng it as a parameter inside the array.map function. Then passing it as a key prop => key={index} this is not recommended but its an option, generally speaking avoid it.
                */
               
                /* We are passing a lengthy properties to the entry component, how can we pass various items in one. One thing we can do is pass the entire entry as an object, like entry={entry}
                */

                /* Spread object as props

                This trick uses the spread object notation
                {...entry} => React looks at this and creates a new prop and create it, exactly the same as objectKey={spreadName.objectKey}

                */