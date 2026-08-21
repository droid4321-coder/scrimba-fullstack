/*
Challenge 2:

1. Create and export a function called 'serveStatic'. 
   It should take in the base directory as a parameter.

2. Build a path to index.html in the 'public' folder and save it to a const 'filePath'. 
   (Which node module will you need to import to do this? Which method joins the path together?)

3. Log 'filePath' to the console.
*/

import http from "node:http"
import path from 'node:path'
import fs from "node:fs/promises"
import { sendResponse } from './sendResponse.js'
import { getContentType } from "./getContentType.js"

export async function serveStatic(req, res, baseDir) {

   const publicDir = path.join(baseDir, "public");
   
   try {
      const filePath = path.join(publicDir, req.url === "/" ? "index.html" : req.url)
      //console.log(filePath)
      const content = await fs.readFile(filePath);
      const ext = path.extname(filePath);
      const contentType = getContentType(ext);
      return sendResponse(req, res, 200, contentType, content);
   } catch (error) {
      console.log(error.code);
      //error for ENOENT content not found or route not available
      if (error.code === "ENOENT") {
         const content = await fs.readFile(path.join(publicDir, "404.html"));
         return sendResponse(req, res, 404, "text/html", content);
      }
      if (error) {
         return sendResponse(req, res, 500, "text/html", `<html><h1>Server Error: ${error.code}</h1></html>`)
      }
   }


}

/* ENOENT is an error code that says a directory not found, we will implement this in new code */
