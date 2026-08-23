import sanitizeHtml from "sanitize-html"

console.log(sanitizeHtml(`h1: <h1>I am an h1 tag</h1>`));
console.log(sanitizeHtml(`strong: <strong>I am a strong tag</strong>`));
console.log(sanitizeHtml(`p: <p>I am in a p tag</p>`));
console.log(sanitizeHtml(`style: <style>I am a style tag</style>`));
console.log(sanitizeHtml(`script: <script>I am a script tag</script>`));

//some tags survived, but not style or script, this is sanitization to prevent attacks

//block all objects with the allowedtags and allowedattributes
console.log(sanitizeHtml(`h1: <h1>I am an h1 tag</h1>`, { allowedTags: [], allowedAttributes: {} }));

//this allows control with tags
//object example

const hacker = {
    title: "Dr",
    surname: "<script>Evil</script>",
    location: "A dark room somewhere"
}

//console.log(sanitizeHtml(hacker)); this wont work because sanititzehtml expects strings, not objects

console.log(sanitizeHtml(hacker.title));
console.log(sanitizeHtml(hacker.surname));
console.log(sanitizeHtml(hacker.location));
