define(['angular', 'ngResource'], function() {
    var addressBookAddress = angular.module('addressBook.address', ['ngResource']);

    addressBookAddress.factory('address', ['$resource', function($resource) {
        return $resource(
            '/address/:id',
            {id: '@id'},
            {
                getAll: {method: 'GET', isArray: true},
                create: {method: 'POST'},
                read: {method: 'GET'},
                update: {method: 'PUT'},
                delete: {method: 'DELETE'}
            }
        );
    }]);

    return addressBookAddress;
});