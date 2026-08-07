import propertyForSaleArr from "./properties/propertyForSaleArr.js";
import { placeholderpropertyObj } from "./properties/placeholderPropertyObj.js";

function getPropertyHtml(propertiesArr = placeholderpropertyObj) {
    const displayArr = propertiesArr.map((item) => {
    return `<section class="card">
    <img src="./images/${item.image}">
    <div class="card-right">
        <h2>${item.propertyLocation}</h2>
        <h3>€${item.priceGBP}</h3>
        <p>${item.comment}</p>
        <h3>${item.roomsM2.reduce((one, two) => {return one + two})}m&sup2;</h3>
    </div>
</section>`
    })
    return displayArr.join("")
}

document.getElementById("container").innerHTML = getPropertyHtml(propertyForSaleArr);

/*
Scrimba official solution:
const displayArr = propertiesArr.map((item) => {
    // This is object destructuring:
    const { propertyLocation, priceGBP, comment, roomsM2, image } = item;

    // Now you can drop the "item." prefix completely:
    return `<section class="card">
    <img src="./images/${image}">
    <div class="card-right">
        <h2>${propertyLocation}</h2>
        <h3>€${priceGBP}</h3>
        <p>${comment}</p>
        <h3>${roomsM2.reduce((one, two) => one + two)}m&sup2;</h3>
    </div>
</section>`;
});

*/