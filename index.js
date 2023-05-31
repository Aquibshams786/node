//6
// console.log("Aquib")
// const fs = require('fs')
// fs.writeFileSync("hello.txt","Hello sahil")    // we create a file using fs

//7

const http = require("http"); // http handles the request adn response of the server in node js
http
  .createServer((req, resp) => {
    resp.write("<p>Hello, This is Aquib Shams<p>");
    resp.end();
  })
  .listen(4500);
