const http = require("http");

const fs = require("fs");
//create server object
const myServer = http.createServer((req, res) => {
  //log every request to a file
  const log = `${Date.now()} : ${req.url}New Request received \n`;

  //always try to do non blocking tasks in node js
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Welcome to Home Page");
        break;
      case "/about":
        res.end("Welcome to About Page");
        break;
      case "/contact":
        res.end("Welcome to Contact Page");
        break;
      default:
        res.end("404 Page Not Found");
        break;
    }
  });
});

//server listening on port 8000

myServer.listen(8000, () => console.log("server is listening on port 8000"));
