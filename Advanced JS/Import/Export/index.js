//importing the array of objects from data.js file and aliasing

import { interplanetaryDestinationsArr as destinations, interplanetaryDestinationsArr, shortSpaceTripsArr as shortTrips } from "./data.js";

//when we do export default, we dont need the curly braces and also we can name it however we want
//its useful, but can be confusing when different names in different functions
//only can have 1 default export
import search from "./searchFunction.js";

console.log(shortTrips);

console.log(search(interplanetaryDestinationsArr, 'going'));