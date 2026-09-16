//TS helps us find errors in our code and avoid potential edge cases on the future implementation

const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 }
]

let cashInRegister = 100
let nextOrderId = 1
const orderQueue: object[] = []

//challenge 1 - add pizza to object
function addNewPizza(name:string , price: number) {
    return menu.push({
        name: name,
        price: price,
    })
}

// addNewPizza("Custom", 10);
// console.log(menu);

//challenge 2 - utility function that finds the pizza object in the menu, add the income to cashRegister, pushes orderobject to the queue, and returns the new order object

function placeOrder(pizza: string) {
    const menuItem = menu.find((item) => {return item.name === pizza})
    console.log(menuItem)

    //TS makes us do defensive coding, warning us if an item might be undefined and suggesting us implement a guard clause.
    if (menuItem === undefined) {
        return `${pizza} not found on the menu list.`;
    } else {
        cashInRegister += menuItem.price
        orderQueue.push({ ...menuItem, id: nextOrderId++, status: "ordered" })
        return orderQueue;
    }
}

// placeOrder("Pepperoni")
// console.log(orderQueue);
// console.log("Stop");

//challenge3 - completeOrder function

//L6 - manual typing for functions, like we did now

function completeOrder(orderId: number) {
    const orderFind = orderQueue.find((item) => { return item.id === orderId });
    if (orderFind === undefined) {
        return `Order #${orderId} not found on the queue.`;
    } else {
        orderFind.status = "completed";
        return orderFind;
    }
}

// completeOrder(1)
// console.log(orderQueue);
// console.log("Stop");

addNewPizza("Chicken Bacon Ranch", 12)
addNewPizza("BBQ Chicken", 12)
addNewPizza("Spicy Sausage", 11)

placeOrder("Chicken Bacon Ranch")

completeOrder(1)

console.log(menu);
console.log(cashInRegister);
console.log(orderQueue);

//in the original code, it returns errors because const cant be reassigned thus crashing the program, this is where TS reviews the code and we can show it the code to see the bugs.