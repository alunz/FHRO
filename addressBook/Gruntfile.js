module.exports = function(grunt) {
    grunt.initConfig({

        copy: {
            bower: {
                files: [
                    {
                        expand: true,
                        src: 'bower_components/angular/angular.js',
                        dest: 'public/js/lib',
                        flatten: true
                    },{
                        expand: true,
                        src: 'bower_components/angular-translate/angular-translate.js',
                        dest: 'public/js/lib',
                        flatten: true
                    },{
                        expand: true,
                        src: 'bower_components/angular-ui-router/release/angular-ui-router.js',
                        dest: 'public/js/lib',
                        flatten: true
                    },{
                        expand: true,
                        src: 'bower_components/domReady/domReady.js',
                        dest: 'public/js/lib',
                        flatten: true
                    },{
                        expand: true,
                        src: 'bower_components/requirejs/require.js',
                        dest: 'public/js/lib',
                        flatten: true
                    },{
                        expand: true,
                        src: 'bower_components/text/text.js',
                        dest: 'public/js/lib',
                        flatten: true
                    },{
                        expand: true,
                        src: 'bower_components/angular-ui-bootstrap/src/modal/modal.js',
                        dest: 'public/js/lib',
                        flatten: true
                    }, {
                        expand: true,
                        src: 'bower_components/angular-resource/angular-resource.js',
                        dest: 'public/js/lib',
                        flatten: true
                    }

                ]
            }
        },

        clean: {
            bower: ['bower_components']
        },

        shell: {
            bower: {
                command: 'bower install'
            }
        }


    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('bower', ['shell:bower', 'copy:bower', 'clean:bower']);
}