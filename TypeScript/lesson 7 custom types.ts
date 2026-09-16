//Custom Types

//by the type keyword we can assign custom types, and give it to variables
//doing this to primitive values wont make much difference, but we talk about unions or intersections
type Food = string

//variable w/custom type
let favoriteFood: Food = "pizza"

//custom types w/objects
//in objects, we can separate them with commas, semicolons, or nothing!
//we can set type Safety!
type Person = {
    name: string,
    age: number,
    isStudent: boolean
}

let person: Person = {
    name: "Joe",
    age: 42,
    isStudent: true
}

let person2: Person = {
    name: "Jill",
    age: 60,
    isStudent: false
}