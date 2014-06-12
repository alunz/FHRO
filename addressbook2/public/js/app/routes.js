define(['angular', 'ngRouter', 'text!../../list.html', 'text!../../form.html'], function(angular, router, tplList, tplForm) {
    var addressBookRoutes = angular.module('addressBook.routes', ['ui.router']);

    addressBookRoutes.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
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

    return addressBookRoutes;
});