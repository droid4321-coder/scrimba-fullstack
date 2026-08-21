export function getContentType(ext) {

    //types of content based on extension
    const types = {
        ".js": "text/javascript",
        ".css": "text/css",
        ".json": "application/json",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".gif": "image/gif",
        ".svg" : "image/svg+xml",
    }

    //this returns the type of content in lowercase for sanitization and if it returns false it will be an html file
    // a browser will handle a file typically if the content is an html si this generalizes any unknown extension
    return types[ext.toLowerCase()] || "text/html"
}