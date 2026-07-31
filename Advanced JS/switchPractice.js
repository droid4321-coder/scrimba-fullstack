/* Price list for vending machine

Coffee $2
Sandwiches $5
Salad $4
Lemon Cake $3

*/

function selectItem(item) {
    let price = 0;


//in the switches the cases are equal to strict comparisons (===)
    switch (item) {
        case "coffee":
            price = 2;
            break;
        case "sandwich":
            price = 5;
            break;
        case "salad":
            price = 4;
            break;
        case "lemon cake":
            price = 3;
            break;
        default:
            return "Item not found";
    }
    return `You selected ${item}. That will be $${price}`
}

console.log(selectItem("lemon cake"));