define(['angular', 'ngTrans', 'translations/de', 'translations/en'], function(angular, ngTrans, de, en) {
    var addressBookTranslation = angular.module('addressBook.translation', ['pascalprecht.translate']);

    addressBookTranslation.config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('de', de);
        $translateProvider.translations('en', en);
        $translateProvider.preferredLanguage('en');
    }]);

    addressBookTranslation.controller('translateCtrl', ['$scope', '$translate', function($scope, $translate) {
        $scope.translate = function(lang) {
            $translate.use(lang);
        };
    }]);

    return addressBookTranslation;
});

