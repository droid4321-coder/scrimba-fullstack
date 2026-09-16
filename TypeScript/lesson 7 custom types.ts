//Custom Types

//by the type keyword we can assign custom types, and give it to variables
//doing this to primitive values wont make much difference, but we talk about unions or intersections
type Food = string

//variable w/custom type
let favoriteFood: Food = "pizza"

//custom types w/objects
//in objects, we can separate them with commas, semicolons, or nothing!
//we can set type Safety!

//L9 - nested object property - adding nested objects inside the type in order to set up our type

//L10 - optional properties - TS has ways to flexibilize types but they come with reduced type safety. One way to do this is by adding a question mark to the property and it will be optional

//we can also set it up alone and nest it in another type
type Address = {
    street: string,
    city: string,
    country: string,
}

type Person = {
    name: string,
    age: number,
    isStudent: boolean,
    address?: Address,
}

//because we added a new prop in the type, there is a mismatch and TS shows us.
let person: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
}

let person2: Person = {
    name: "Jill",
    age: 60,
    isStudent: false,
    // address: {
    //     street: "1 Street",
    //     city: "! City",
    //     country: "Earth"
    // }
}

//this returns us an error because since it is optional, it may return undefined if the object does not have it. It can be fixed by adding a question mark for optional chaining.

function displayInfo(person: Person) {
    return `${person.name} lives at ${person.address?.street}`
}

displayInfo(person2)

//even though TS is kinda rigid, its beneficial for a prod environment, so we must get accustomed to coding in TypeScript