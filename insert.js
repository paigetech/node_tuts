var mongo = require("mongodb");
var host = "127.0.0.1";
var port = mongo.Connection.DEFAULT_PORT;
var db = new mongo.Db("nodejs-introduction", new mongo.Server(host, port, {}), {safe:true});
db.open(function(error){
	console.log("We are connected! " + host + ":" + port);

	db.collection("user", function(error, collection){
		console.log("We have the collection");
		var id = "3";
		var name = "foo";
		var twitter = "foobar";
		var email = "foo@bar.com";

		collection.insert({
			id: id,
			name: name,
			twitter: twitter,
			email: email
		}, function(){
			console.log("Successfully inserted " + name);
		});

	});

});


	// 	collection.insert({
	// 		id: "2",
	// 		name: "Joe Blogs",
	// 		twitter: "joeblogs",
	// 		email: "joeblogs@ollieparsley.com"
	// 	}, function() {
	// 		console.log("Successfully inserted joeblogs");
	// 	});
	// 



	


// db.open(function(error){
// 	console.log("We are connected! " + host + ":" + port);

// 	db.collection("user", function(error, collection){
// 		console.log("We have the collection");

// 		collection.insert({
// 			id: req.body.idNum,
// 			name: req.body.firstname,
// 			twitter: req.body.twitter,
// 			email: req.body.email
// 		}, function(){
// 			console.log("Successfully inserted " + req.body.firstname);
// 		});

// 	});

// });