var address = require('./../model/address');

module.exports = {
    fetch: function(req, res) {

    },
    fetchAll: function(req, res) {
        address.get().then(function(data) {
            res.send(JSON.stringify(data));
        });
    },
    create: function(req, res) {

    },
    update: function(req, res) {

    },
    remove: function(req, res) {

    }
};