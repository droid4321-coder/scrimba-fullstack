import { itemsBoughtArr } from "./itemsBoughtArr.js";

//discount has a default parameter that way if not declared on botton takes default value. Once value is declared in bottom it overrides default.
function calculateTotalCost(itemsBoughtArr, discount = 0) {
    const totalCost = itemsBoughtArr.reduce((total, item) => total + item.priceUSD, 0)
    return totalCost - discount;
}

console.log(calculateTotalCost(itemsBoughtArr));

//default parameters
//when second parameter has nothing, it returns null
//default parameters