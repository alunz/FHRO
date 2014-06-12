var CsvDb = require('csv-db');

var addressModel = new CsvDb('db/address.csv',
    ['id',
    'gender',
    'firstname',
    'lastname',
    'street',
    'postcode',
    'place']);

module.exports = addressModel;