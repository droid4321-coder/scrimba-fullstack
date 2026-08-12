export const sendJSONResponse = (res, statusCode, payload) => {
        res.setHeader("Content-Type", "application/json"); //we are setting up the headers on the response, first is the content type and then the type of content
        res.setHeader("Access-Control-Allow-Origin", "*"); //we are allowing everyone to access this API
        res.setHeader("Access-Control-Allow-Methods", "GET");// we allow everyone to access the server via GET method
        //these lines of code are necessary to deploy an API to the internet
        res.statusCode = statusCode // return a response code of 200, succesful
        res.end(JSON.stringify(payload))
}