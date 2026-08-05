import { itemsBoughtArr } from "./itemsBoughtArr.js";

function calculateTotalCost(itemsBoughtArr) {
    const totalCost = itemsBoughtArr.reduce((total, item) => total + item.priceUSD, 0)
    return totalCost;
}

console.log(calculateTotalCost(itemsBoughtArr));