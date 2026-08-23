import sanitizeHtml from "sanitize-html";

export function sanitizeInput(data) {

    const cleanBody = {};
     //sanitization
     for (const [key, value] of Object.entries(data)) {
         if (typeof value === "string") {
             cleanBody[key] = sanitizeHtml(value, {
                 allowedTags: ["b"],
                 allowedAttributes: {}
             })
         } else {
             cleanBody[key] = value;
         }
     }
    return cleanBody;
}