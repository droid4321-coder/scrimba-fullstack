//when using any, we turn off type checking

//if not specified as any, it returns error, but with any it wont return error.
let value: any = 1;
value = true

//when to use any???? Well, DONT, this may lead to a lot of problems or bugs on the code
//ONE legit use case is when we are transitioning code from JS to TS and dont have the time inmediately to write complex types. We can use Any, and then little by little fix it later. This SHOULD be temporary.