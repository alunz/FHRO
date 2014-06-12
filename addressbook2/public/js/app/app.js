define(['angular', 'routes', 'translation', 'address'], function(angular) {
    var addressBook = angular.module('addressBook', ['addressBook.translation', 'addressBook.routes', 'addressBook.address']);

    addressBook.controller('listCtrl', ['$scope', 'address', function($scope, address) {
        $scope.addresses = address.getAll();
    }]);

    addressBook.controller('deleteCtrl', ['$scope', '$stateParams', '$state', 'address', function($scope, $stateParams, $state, address) {
        address.delete({id: $stateParams.id}).$promise.then($state.go.bind($state, 'list'));
    }]);

    addressBook.controller('formCtrl', ['$scope', '$stateParams', '$state', 'address', function($scope, $stateParams, $state, address) {
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
            $scope.address = address.read({id: $stateParams.id});
        }

        $scope.save = function () {
            if ($scope.address.id) {
                address.update($scope.address).$promise.then($state.go.bind($state, 'list'));
            } else {
                address.create($scope.address).$promise.then($state.go.bind($state, 'list'));
            }
        };

    }]);
});
