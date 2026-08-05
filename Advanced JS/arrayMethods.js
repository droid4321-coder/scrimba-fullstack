//every, some, find, findIndex, indexOf, and at()

const dailyStepsArr = [10000, 12000, 18000, 15000, 11000, 19000, 13000];

//every method checks if every item in index meets the requirements
const areAllOver10k = dailyStepsArr.every((stepCount) => stepCount >= 10000);
console.log(areAllOver10k);

//some methos returns true if one or more items pass the test
const areSomeOver10k = dailyStepsArr.some((stepCount) => stepCount >= 10000);
console.log(areSomeOver10k);

const invoicesUSDArr = [201, 354, 26, 1299, 1400, 60, 76]

//find executes the first item in the index that meets the requiements
const invoiceOver1k = invoicesUSDArr.find((invoice) => { return invoice > 1000 });
console.log(invoiceOver1k);

//findIndex returns the index of the first item that meets the requirements
const invoiceOver1kIndex = invoicesUSDArr.findIndex((invoice) => { return invoice > 1000 });
console.log(invoiceOver1kIndex);

//indexOf returns the index of solicited item. Returns -1 if not found in array
console.log(invoicesUSDArr.indexOf(26));

//at returns the item in a given index. When given negative numbers, it counts backwards from -1
console.log(invoicesUSDArr.at(-1));