define([
    'require',
    'angular',
    'app'
], function(require, ng) {
    require(['domReady!'], function() {
        ng.bootstrap(document, ['addressBook']);
    });
});