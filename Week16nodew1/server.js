// var http = require('http');
import { createServer } from "node:http";

// http.
createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello World!");
  res.end();
}).listen(8080);

// run `node server.js`
