var express = require('express');

var routes = require('./routes.js');

var app = express();

app.use(express.bodyParser());

routes(app);

app.use('/', express.static(__dirname + '/public/html'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/style', express.static(__dirname + '/public/style'));

app.listen(8080);

// curl -X GET http://localhost:8080/address
// curl -X POST -d "gender=male&firstname=Klaus&lastname=Schmidt&street=Hauptstraße 1&postcode=67890&place=München" http://localhost:8080/address
// curl -X PUT -d "gender=female&firstname=Lisa&lastname=Müller&street=Dorfstraße 2&postcode=24680&place=Berlin" http://localhost:8080/address/id/2
// curl -X DELETE http://localhost:8080/address/id/2