//typing arrays

//when manual typing an array, we need to add brackets to tell TS that its a string of certain type.

//when we add another type, it throws us an error that is not assignable. The same will happen if we push something.
// let ages: number[] = [100, 101, "string"]
//ages.push(true) returns error

type Persona = {
    name: string,
    age: number,
    isStudent: boolean,
}

let persona: Persona = {
    name: "Joe",
    age: 42,
    isStudent: true,
}

let persona2: Persona = {
    name: "Jill",
    age: 60,
    isStudent: false,
}

//TS infers when we put the people, that its an array of type persons, or Persona here to avoid more errors ;-). If the person type was not in the variables, it would infer as an object. Also, generics might be in syntax, like Array<Type>

const peopleArr: Persona[] = [persona, persona2]