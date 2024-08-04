// var http = require('http');
import { createServer } from "node:http";

// http.
const server = createServer();
server.listen(8080);
server.on("request", function (req, res) {
  console.log("URL:", req.url);
  console.log("Method:", req.method);
  
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello World!");
  res.end();
});
// run `node server.js`
