var fs = require("fs");
var express = require("express");
var config = JSON.parse(fs.readFileSync("config.json"));
var host = config.host;
var port = config.port;

var app = express();

app.use(express.bodyParser());

app.get("/form", function(request, response){
	var body = '<html>'+
		'<head>'+
		'<meta http-equiv="Content-Type" content="text/html; '+
		'charset=UTF-8" />'+
		'</head>'+
		'<body>'+
		'<form method="post" action="/">'+
	    '<input type="text" name="fred">'+
	    '<input type="submit" value="Submit">'+
		'</form>'+
		'</body>'+
		'</html>';
	response.send(body);
	
});

app.post('/', function(req, res){

    console.log(req.body.fred);

});

app.listen(port, host);
console.log("listening");