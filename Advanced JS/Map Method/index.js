import { playlistArr } from "./playlist.js";

//let playlistHtml = [];

//refactor this to using map mathod()
//for (let i = 0; i < playlistArr.length; i++) {
//    playlistHtml.push(
//        `<section class="card">
//            <div class="card">
//                <div class="card-start">
//                    <img src="${playlistArr[i].albumArt}" />
//                </div>
//                <div class="card-mid">
//                    <h4 class="card-title">${playlistArr[i].title}</h4>
//                    <p class="card-artist">${playlistArr[i].artit}</p>
//                </div>
//                <div class="card-end">
//                    <p class="menu">...</p>
//                </div>
//            </div>
//        </section>
//        `
//    )
//}

//original map function
const playlistHtml = playlistArr.map((i) => {
    return `
    <section class="card">
            <div class="card">
                <div class="card-start">
                    <img src="${i.albumArt}" />
                </div>
                <div class="card-mid">
                    <h4 class="card-title">${i.title}</h4>
                    <p class="card-artist">${i.artit}</p>
                </div>
                <div class="card-end">
                    <p class="menu">...</p>
                </div>
            </div>
        </section>
        `
}).join("")


//convertting to forEach for comparison

//let playlistHtml = [];
//
//playlistArr.forEach((i) => {
//    playlistHtml.push(`
//    <section class="card">
//            <div class="card">
//                <div class="card-start">
//                    <img src="${i.albumArt}" />
//                </div>
//                <div class="card-mid">
//                    <h4 class="card-title">${i.title}</h4>
//                    <p class="card-artist">${i.artit}</p>
//                </div>
//                <div class="card-end">
//                    <p class="menu">...</p>
//                </div>
//            </div>
//        </section>
//        `)
//})

//cannot join with forEach, and the commas appear again
//only methods that return a new array are chainable

//where map returns a new array, and forEach returns undefined, for it to work we need to do a new array and push into it
//now the join is here and it works
document.getElementById("container").innerHTML = playlistHtml
//we can also join here and it works.

//there is an issue, there are commas between every item, we are going to use the join() function to fix this

//join example

const guestsArr = ["Amy", "Clare", "Keith", "Dan"]
console.log(guestsArr.join()); //join is a string
console.log(guestsArr.join(" ")); //the string inside join is a separator
//when ir is empty, all the array items are together

//you can use .map if you need to make use of the new array it returns,
//you can use forEach if you dont need to create a new array