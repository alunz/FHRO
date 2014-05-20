define(
    ['angular', 'ngTrans', 'ngRouter', 'modal', 'translations/de', 'translations/en', 'text!../../list.html', 'text!../../form.html'],
    function(angular, ngTrans, ngRouter, modal, de, en, tplList, tplForm) {
    var addressBook = angular.module('addressBook', ['pascalprecht.translate', 'ui.router']);

    addressBook.config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('de', de);
        $translateProvider.translations('en', en);
        $translateProvider.preferredLanguage('en');
    }]);

    addressBook.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/list');
        $stateProvider.state('list', {
            url: '/list',
            template: tplList,
            controller: 'listCtrl'
        });

        $stateProvider.state('delete', {
            url: '/delete/:id',
            controller: 'deleteCtrl'
        });

        $stateProvider.state('edit', {
            url: '/edit/:id',
            template: tplForm,
            controller: 'formCtrl'
        });
    }]);

    addressBook.controller('translateCtrl', ['$scope', '$translate', function($scope, $translate) {
        $scope.translate = function(lang) {
            $translate.use(lang);
        };
    }]);

    addressBook.controller('listCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.addresses = [];
        $http.get('/address').success(function (data) {
            $scope.addresses = data;
        });
    }]);

    addressBook.controller('deleteCtrl', ['$scope', '$http', '$stateParams', '$state', function($scope, $http, $stateParams, $state) {
        $http.delete('/address/' + $stateParams.id).success($state.go.bind($state, 'list'));
    }]);

    addressBook.controller('formCtrl', ['$scope', '$http', '$stateParams', '$state', function($scope, $http, $stateParams, $state) {
        $scope.address = {
            id: '',
            gender: '',
            firstname: '',
            lastname: '',
            street: '',
            postcode: '',
            place: ''
        };

        if($stateParams.id) {
            $http.get('/address/' + $stateParams.id).success(function(data) {
                $scope.address = data;
            });
        }

        $scope.save = function () {
            if ($scope.address.id) {
                $http.put('/address/' + $scope.address.id, $scope.address).success($state.go.bind($state, 'list'));
            } else {
                $http.post('/address', $scope.address).success($state.go.bind($state, 'list'));
            }
        };

    }]);
});
