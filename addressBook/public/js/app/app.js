var addressBook = angular.module('addressBook', []);

addressBook.controller('addressBookCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.displayForm = false;

    $scope.address = {
        id: '',
        gender: '',
        firstname: '',
        lastname: '',
        street: '',
        postcode: '',
        place: ''
    };

    $scope.addresses = [];

    $scope.edit = function(id) {
        $http.get('/address/' + id).success(function(data) {
            $scope.address.id = id;
            $scope.address.gender = data.gender;
            $scope.address.firstname = data.firstname;
            $scope.address.lastname = data.lastname;
            $scope.address.street = data.street;
            $scope.address.postcode = data.postcode;
            $scope.address.place = data.place;
        });
        $scope.showForm();
    };

    $scope.new = function() {
        $scope.address = {
            id: '',
            gender: '',
            firstname: '',
            lastname: '',
            street: '',
            postcode: '',
            place: ''
        };
        $scope.showForm();
    };

    $scope.showForm = function () {
        $scope.displayForm = true;
    };

    $scope.hideForm = function () {
        $scope.displayForm = false;
    };

    // persistance
    $scope.fetch = function () {
        $http.get('/address').success(function (data) {
            $scope.addresses = data;
            $scope.hideForm();
        });
    };

    $scope.delete = function (id) {
        $http.delete('/address/' + id).success($scope.fetch);
    };

    $scope.save = function () {
        var address = $scope.address;
        var data = {
            gender: address.gender,
            firstname: address.firstname,
            lastname: address.lastname,
            street: address.street,
            postcode: address.postcode,
            place: address.place
        };
        if (address.id) {
            $http.put('/address/' + address.id, data).success($scope.fetch);
        } else {
            $http.post('/address', data).success($scope.fetch);
        }
    };

    // initialize
    $scope.fetch();
}]);