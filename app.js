var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.listen(port, function(err) {
    if(err) {console.log(err)};
    console.log("listening on port: ", port);
});