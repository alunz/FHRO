require.config({
    paths: {
        'domReady': '../lib/domReady',
        'angular': '../lib/angular',
        'text': '../lib/text',
        'ngTrans': '../lib/angular-translate',
        'ngRouter': '../lib/angular-ui-router',
        'modal': '../lib/modal'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'ngTrans': {
            deps: ['angular']
        },
        'ngRouter': {
            deps: ['angular']
        },
        'modal': {
            deps: ['angular']
        }
    },
    deps: ['./bootstrap']
});