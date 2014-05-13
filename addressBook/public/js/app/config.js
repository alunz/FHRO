require.config({
    paths: {
        'underscore': '../lib/underscore',
        'jquery': '../lib/jquery',
        'backbone': '../lib/backbone'
    },
    shim: {
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'backbone'
        },
        'jquery': {
            exports: 'jquery'
        },
        'underscore': {
            exports: 'underscore'
        }
    },
    deps: ['./main']
});