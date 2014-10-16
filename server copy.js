/*
console.log("hello world");
console.log("words to console?")
var http = require("http");
//This makes our local variable an object that carries all 
//the public methods the http module provides.
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.write("From back-end");
  response.end();
}).listen(8888);

//object.function.function(port number);
//http.createServer(function()).listen(8888);
//var server=http.createServer()
//createServer(parameter)

*/

var http = require("http");

function onRequest(request, response) {
  console.log("Request received.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  //response.write("Hello World");
  //response.write("\nthis is how to hide all the front-end lines");
  //response.write("\nput them in the back");
  response.write("this is response: "+response);
  response.write("\nthis is request: "+request);
  response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Server has started.");



