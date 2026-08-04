//filter gets only the elements we want from an array that meet a certain condition

//example
const ages = [1, 5, 9, 23, 56, 10, 47, 70, 10, 19, 23, 18];

//this is a filter writing function long. short version below
//const adults = ages.filter(function (age) {
//    if (age >= 18) {
//        return true;
//    } else {
//        return false;
//    }
//})

const adults = ages.filter((age) => age >= 18);
const children = ages.filter((age) => age < 18);


console.log(adults);
console.log(children);

//filter with objects

const series = [
    {
        title: "The Wire",
        location: "Baltimore",
        lengthInHours: 60,
        genres: ["action", "thriller", "detective", "suspense"]
    },
    {
        title: "Game of Thrones",
        location: "Westeros and Essos",
        lengthInHours: 70.25,
        genres: ["action", "fantasy", "tragedy"]
    },
    {
        title: "Friends",
        location: "New York",
        lengthInHours: 85,
        genres: ["comedy", "romance", "drama"]
    },
    {
        title: "The Walking Dead",
        location: "Atlanta",
        lengthInHours: 131,
        genres: ["thriller", "zombie", "apocalypse", "suspense"]
    },
    {
        title: "The Big Bang Theory",
        location: "Pasadena",
        lengthInHours: 139.66,
        genres: ["comedy", "nerd", "romance"]
    },
]

//series in new york
const newYorkSeries = series.filter((item) => item.location === "New York");
console.log(newYorkSeries);

//finding series with thriller as genre
const thrillerSeries = series.filter((item) => item.genres.includes("thriller"))
console.log(thrillerSeries);