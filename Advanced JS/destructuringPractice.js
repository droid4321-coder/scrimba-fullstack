const favouriteTitle = {
    title: "Top Gun",
    year: "1986",
    genre: "action",
    star: "Tom Cruise",
    director: "Tony Scott"
}

//we dont want to do 5 variables to assign to different object entries and do a long console.log
//no DRY - dont repeat yourself


//destructuring objects
const { title, year, genre, star, director } = favouriteTitle;

console.log(`My favourite film is ${title} starring ${star}. It's an ${genre} film that is directed by ${director} and released in ${year}`);

//challenge

const dreamHoliday = {
    destination: "Japan",
    activity: "Drive cars like Intial D",
    accomodation: "Motel",
    companion: "None"
}

const { destination, activity, accomodation, companion } = dreamHoliday;

console.log(`I would love to go to ${destination} to ${activity}. I'd sleep in a ${accomodation} and hang out with ${companion}`);