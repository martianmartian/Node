var http=require("http");
var url=require("url");

function start (route,handle) {
	function onRequest(request,response){
		var pathname=url.parse(request.url).pathname;
		console.log("pathname  "+pathname + " is received.");

		route(handle,pathname,response);
		//instead of having the "response" here in the server.js
		//passing it down 

	}

	http.createServer(onRequest).listen(8888);
	//console.log("Server has started.");
}

exports.start=start;