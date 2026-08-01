//inbuilt date constructor example, important! constructos start with An Upper Case Letter!

const dateSnapshot = new Date()

//even though it looks like a string, it is an object type, this object was made more human readable
console.log(dateSnapshot.toString());

const dateYear = dateSnapshot.getFullYear();

console.log(`Copyright ${dateYear} all rights reserved.`);

//luxon package for JS is good for handling dates