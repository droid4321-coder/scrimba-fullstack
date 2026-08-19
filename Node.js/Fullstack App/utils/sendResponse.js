import http from "node:http";

export function sendResponse(req, res, statusCode, type, payload) {
    res.statusCode = statusCode;
    res.setHeader("Content-Type", type);
    res.end(payload);
}