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

document.getElementById("container").innerHTML = playlistHtml;
//we can also join here and it works.

//there is an issue, there are commas between every item, we are going to use the join() function to fix this

//join example

const guestsArr = ["Amy", "Clare", "Keith", "Dan"]
console.log(guestsArr.join()); //join is a string
console.log(guestsArr.join(" ")); //the string inside join is a separator
//when ir is empty, all the array items are together