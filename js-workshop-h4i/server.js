var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('hello world');
});

app.get('/greet/:name', function(req, res) {
    var name = req.params.name;
    res.send('hi ' + name);
});

// Actually starts the server
app.listen(process.env.PORT || 3000, function(){
    console.log("server started");
});