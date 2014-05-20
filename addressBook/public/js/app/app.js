define(['angular', 'ngTrans', 'ngRouter', 'modal', 'translations/de', 'translations/en'], function(angular, ngTrans, ngRouter, modal, de, en) {
    var addressBook = angular.module('addressBook', ['pascalprecht.translate']);

    addressBook.config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('de', de);
        $translateProvider.translations('en', en);
        $translateProvider.preferredLanguage('en');
    }]);

    addressBook.controller('addressBookCtrl', ['$scope', '$http', '$translate', function($scope, $http, $translate) {

        $scope.translate = function(lang) {
            $translate.use(lang);
        };

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
                $scope.address = data;
            });
            $scope.showForm();
        };

        $scope.new = function() {
            for (var i in $scope.address) {
                if ($scope.address.hasOwnProperty(i)) {
                    $scope.address[i] = '';
                }
            }
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
            if ($scope.address.id) {
                $http.put('/address/' + $scope.address.id, $scope.address).success($scope.fetch);
            } else {
                $http.post('/address', $scope.address).success($scope.fetch);
            }
        };

        // initialize
        $scope.fetch();
    }]);
});
