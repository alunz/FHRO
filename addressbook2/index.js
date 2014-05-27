// npm init
// npm install --save express

var express = require('express');
var router = require('./router');

var app = express();

app.use(express.static(__dirname + '/public'));

router(app);

app.listen(8080);
