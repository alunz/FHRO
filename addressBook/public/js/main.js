require.config({
    paths: {
        'jquery': 'lib/jquery'
    },
    shim: {
        'jquery': {
            exports: 'jquery'
        }
    },
    deps: ['./app/app']
});