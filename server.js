var http=require("http");
var url=require("url");

function start (route,handle) {
	function onRequest(request,response){
        var postData="";
		var pathname=url.parse(request.url).pathname;
		console.log("pathname  "+pathname + " is received.");

        request.setEncoding("utf8");


        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk '"+
            postDataChunk + "'.");
        });

        request.addListener("end",function(){
            route(handle,pathname,response,postData);
        });

		//instead of having the "response" here in the server.js
		//passing it down 

	}

	http.createServer(onRequest).listen(8888);
	//console.log("Server has started.");
}

exports.start=start;