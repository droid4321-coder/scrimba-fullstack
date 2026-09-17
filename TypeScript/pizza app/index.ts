//TS helps us find errors in our code and avoid potential edge cases on the future implementation

//L8 - pizza type challenge

type Pizza = {
    id: number,
    name: string,
    price: number
}

//L11 - adding an order type
//L16 - adding type safety by making the status prop show ordered or completed!, if we put something other than ordered or completed, TS will throw a warning.

type Order = {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed"
}

//L23 - Automatic ID to pizzas
let nextPizzaId = 1

//L17 - Adding ids to pizzas to show that TS allows us to see where in the code we might need to add a feature or correct something

const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 }
]

let cashInRegister = 100
let nextOrderId = 1

//L13 - fixing order typing manual - all TS errors fixed, wow!
const orderQueue: Order[] = []

//challenge 1 - add pizza to object
//L8, using the custom type to add the object

//L20 void type, when a function does not return anything, TS infers it as a void type, so we can be explicit and type it.

//L26 Adding Omit type to pizza property to fix issues, we did add the omit pizza id and the Pizza, but TS warns us of the property not existing in the pizzaObj.
//The documentation will help us with the utility types
function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
    console.log(`${pizzaObj.name} with price ${pizzaObj.price} added to menu!`);
    const newPizza: Pizza =  {
        id: nextPizzaId++,
        ...pizzaObj
    }
    menu.push(newPizza)
    return newPizza
}

// addNewPizza("Custom", 10);
console.log(menu);

//challenge 2 - utility function that finds the pizza object in the menu, add the income to cashRegister, pushes orderobject to the queue, and returns the new order object

function placeOrder(pizza: string) : string | Order[] {
    const menuItem = menu.find((item) => {return item.name === pizza})
    console.log(menuItem)

    //TS makes us do defensive coding, warning us if an item might be undefined and suggesting us implement a guard clause.
    if (menuItem === undefined) {
        return `${pizza} not found on the menu list.`;
    } else {
        cashInRegister += menuItem.price
        console.log("Register price updated!");
        orderQueue.push({id: nextOrderId++, pizza: menuItem, status: "ordered"})
        console.log("Order placed on queue.");
        return orderQueue;
    }
}

// placeOrder("Pepperoni")
// console.log(orderQueue);
// console.log("Stop");

//L28 - Generic functions pizza restaurant.

//L29 - there is a bug on the status of the OrderQueue if we put something other than ordered or completed, TS wont warn us.
//when the function was defined, when we are calling, we expect TS to infer, to fix this, we put that explicit typing on the generic

function addToArray<T>(array: T[], item: T): T[]{
    array.push(item);
    return array
}

//example usage
addToArray<Pizza>(menu, { id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 })

//we add the Order to the generic in order to enforce the Order type.
addToArray<Order>(orderQueue, { id: nextOrderId++, pizza: menu[2], status: "completed" })

console.log(menu)
console.log(orderQueue);

//challenge3 - completeOrder function
//L6 - manual typing for functions, like we did now

function completeOrder(orderId: number) : string | Order {
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

//L18 - Challenge type narrowing - function to get pizza details from an ID or the pizza name, and writing the function. TS will want us to handle each use case

//L19 - Explicit. Be as explicit as we can when writing code. If a project might use a plain JS file, we want it to have guard clauses so the program will handle errors gracefully.

//L22 - retuen type to function. we added Pizza, but there is an error that Pizza | undefined is not assignable

export function getPizzaDetail(identifier: string | number): Pizza | undefined {
    if (typeof identifier === "string") {
        return menu.find((item) => { return item.name.toLowerCase() === identifier.toLowerCase() })
    } else if (typeof identifier === "number") {
        return menu.find((item) => { return item.id === identifier })
    } else {
        throw new TypeError(`Parameter identifier must be either a string or a number!`)
    }
}

console.log(getPizzaDetail(2))

addNewPizza({name:  "Chicken Bacon Ranch", price: 12})
addNewPizza({name: "BBQ Chicken", price : 12})
addNewPizza({name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")

completeOrder(1)

console.log(menu);
// console.log(cashInRegister);
// console.log(orderQueue);

//in the original code, it returns errors because const cant be reassigned thus crashing the program, this is where TS reviews the code and we can show it the code to see the bugs.