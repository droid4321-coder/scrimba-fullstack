export const sendJSONResponse = (res, statusCode, payload) => {
        res.setHeader("Content-Type", "application/json"); //we are setting up the headers on the response, first is the content type and then the type of content
        res.statusCode = statusCode // return a response code of 200, succesful
        res.end(JSON.stringify(payload))
}