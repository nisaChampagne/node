var http = require('http'); // 1 - Import Node.js core module

var app = http.createServer(function (req, res) {   // 2 - creating server

    //handle incomming requests here..

});
var port = process.env.PORT || 5000

app.listen(port); //3 - listen for any incoming requests

console.log("Node Server started on: " + port)