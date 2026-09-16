//TS helps us find errors in our code and avoid potential edge cases on the future implementation

//L8 - pizza type challenge

type Pizza = {
    name: string,
    price: number
}

//L11 - adding an order type

type Order = {
    id: number,
    pizza: Pizza,
    status: string
}

const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 }
]

let cashInRegister = 100
let nextOrderId = 1

//L13 - fixing order typing manual - all TS errors fixed, wow!
const orderQueue: Order[] = []

//challenge 1 - add pizza to object
//L8, using the custom type to add the object
function addNewPizza(pizzaObj: Pizza) {
    console.log(`${pizzaObj.name} with price ${pizzaObj.price} added to menu!`);
    return menu.push(pizzaObj)
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
        console.log("Register price updated!");
        orderQueue.push({id: nextOrderId++, pizza: menuItem, status: "Ordered"})
        console.log("Order placed on queue.");
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
        console.log(`Order #${orderId} completed!`);
        return orderFind;
    }
}

// completeOrder(1)
// console.log(orderQueue);
// console.log("Stop");

//L8 - fixed to change cost to price, TS shows us that the type does not have a prop called cost
addNewPizza({name:  "Chicken Bacon Ranch", price: 12})
addNewPizza({name: "BBQ Chicken", price : 12})
addNewPizza({ name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")

completeOrder(1)

console.log(menu);
console.log(cashInRegister);
console.log(orderQueue);

//in the original code, it returns errors because const cant be reassigned thus crashing the program, this is where TS reviews the code and we can show it the code to see the bugs.