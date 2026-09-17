//Generics

//sum arrays
const gameScores = [14, 21, 33, 42, 59]
const favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper bottles", "warm woolen mittens"]
const voters = [
    {
        name: "Alice",
        age: 42
    }, {
        name: "Bob",
        age: 77
    }
]

//get the array and returns the last item
//when we do this function, TS tells us param array has an any type, we can type as any, but leads to bugs. We cant say this is an array of certain data type, because we dont know. This is where generics comes into play.

//generics acts as a placeholder. we put angle brackets and the convention is to put T, for Type. I can use the generic to implicitly say to TS that, it will be an array of a generic Type, we can call it whatever we want
function getLastItem<T>(array: T[]): T | undefined {
    return array[array.length - 1]
}

console.log(getLastItem(gameScores));
console.log(getLastItem(favoriteThings));
console.log(getLastItem(voters));
console.log("Breakpoint");
