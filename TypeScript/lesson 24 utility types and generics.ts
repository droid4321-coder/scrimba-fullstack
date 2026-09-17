//user type w/ object properties

//utility types
//Like a function, they take other types in as a parameter and return a new type, with some changes made to it.
//Built-in to TS, perform commonly needed modifications to existing types.
//Utility types use a generics syntax using angle brackets <>

//one utility type is the patial type, which maked the type you pass in and turns all properties into optional properties.

type User = {
    id: number
    username: string
    role: "member" | "contributor" | "admin"
}

//partial type, all the properties are set to optional, we can provide an object that is missing some of the properties.
type UpdatedUser = Partial<User>

let nextUserId = 1

//users array of objects
const users: User[] = [
    { id: nextUserId++, username: "john_doe", role: "member" },
    { id: nextUserId++, username: "jane_smith", role: "contributor" }
];


//we cant pass the User type to the function, because we dont know what object is being passed, nor can we create a new type to update it
function updateUser(id: number, updates: UpdatedUser) {
    //find the user in the array by ID
    const foundUser = users.find(user => user.id === id)
    //if user not found return early, else assign it to the founduser object
    if (!foundUser) {
        console.error("User not found!")
        return
    }
    Object.assign(foundUser, updates)
}

// updateUser(1, { username: "new_john_doe" });
// updateUser(4, { role: "contributor" });

//this function takes a user, and get the new id updated to +1 the id and gets the content from User type
//in scrimba it does not work, omit is omitted lol, omit was introduced on TS 3.5, if a property is removed, it will throw a warning.
//with omit type, we let the function manage the omitted property, you can provide a string or union of strings.
function addNewUser(newUser: Omit<User, "id">): User {
    const user: User = {
        id: nextUserId++,
        ...newUser
    }
    users.push(user)
    return user
    // Create a new variable called `user`, add an `id` property to it
    // and spread in all the properties of the `newUser` object. Think
    // about how you should set the type for this `user` object.
    // Push the new object to the `users` array, and return the object
    // from the function at the end
}

// example usage:
addNewUser({ username: "joe_schmoe", role: "member" })

//L25 - omit utility type - we do not want the function to be an any type because this might lead to bugs when passed other data types or properties.
//it cannot be a partial user, because we want all the properties, not put them as optional ones.
//for this we do the omit type, omit takes in a type AND a string (or union of strings) property names, and returns a new type with those properties removed

console.log(users)
console.log("Done!")
