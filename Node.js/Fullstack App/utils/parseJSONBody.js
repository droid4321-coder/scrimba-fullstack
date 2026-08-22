export async function parseJSONBody(req) {
    let body = ""

    for await (const chunk of req) {
            body += chunk;
        }

    try {
        const parsedBody = JSON.parse(body);
        console.log(parsedBody);
        return parsedBody;
    } catch (error) {
        console.log(`Invalid JSON format: ${error}`);
        return null;
    }
}