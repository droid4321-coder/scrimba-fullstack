//string replace and replaceAll
let paragraph = "js is the backbone of the internet. It was created in 1995. Before js, websites were so boring."

//replace has 2 parameters for pattern and replacement
//replace does the first one, replaceAll does them all that meet the criteria
paragraph = paragraph.replaceAll("js", "JS");

console.log(paragraph);

let sentence = "i went to Australia and i saw a shark";

//replacing i with Uppercase I
//but it changes all the Is ans we dont want that, regex comes to play here
//heres a regex for looking for i's that are not part of a word
sentence = sentence.replaceAll(/\b(i)\b/g , "I");

console.log(sentence);

//regex or regular expression is a sequence of characters that specifies a match pattern in text
//examples - /[a-zA-Z1-9]/ matches letters a-z lowercase, uppercase, and numbrs 1-9
// /^\d{5}(-\d{4})?$/ validates US zip codes

//lol use ai for regex, i do lol

const sentence2 = "I love you with all my heart!"
//replace with a function, similar to map function
console.log(sentence2.replaceAll(/\b(love|heart)\b/g, function (match) {
    return `${match} ♥️`
}));

let paragraph2 = "javascript is the backbone of the internet. it was created in 1995. before js, websites were so boring.";

paragraph2 = paragraph2.replaceAll(/(?:^|[.!?]\s+)(\w)/g, (item) => {
    return item.toUpperCase();
})

console.log(paragraph2);

//regex in JS
//the g flag is global, not only finds the first instance, finds all, needed to call up replaceall, if not throws an error
//the i flag makes the regular expression case insensitive

const text = "Please turn off the WiFi before you leave."

//if it does not have the i flag it returns false.
//with the flag it returns true
const regex = /wifi/gi

//regexp constructor
//cont regex = `/${userInput}/gi` //throws an error regex.test is not a function
const userInput = "wifi"
const regex1 = new RegExp(userInput, "gi")

const doesMatch = regex1.test(text);

console.log(doesMatch);

