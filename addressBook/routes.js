var CsvDb = require('csv-db');

var addressModel = new CsvDb('db/address.csv', ['id', 'gender', 'firstname', 'lastname', 'street', 'postcode', 'place']);

module.exports = function (app) {
    app.get('/address', function(req, res) {
        addressModel.get().then(function(addresses) {
            res.send(JSON.stringify(addresses));
        });
    });

    app.post('/address', function(req, res) {
        var addressData = {
            gender: req.body.gender,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            street: req.body.street,
            postcode: req.body.postcode,
            place: req.body.place
        };

        addressModel.insert(addressData).then(function(address) {
            res.send(JSON.stringify({id: address}));
        });
    });

    app.put('/address/id/:id', function(req, res) {
        var addressData = {
            gender: req.body.gender,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            street: req.body.street,
            postcode: req.body.postcode,
            place: req.body.place
        };

        addressModel.update(addressData, req.params.id).then(function() {
            res.send(JSON.stringify(true));
        });
    });

    app.delete('/address/id/:id', function(req, res) {
        addressModel.delete(req.params.id).then(function(address) {
            res.send(address);
        });
    });
};