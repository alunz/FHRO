module.exports = function(grunt) {
    grunt.initConfig({

        copy: {
            bower: {
                files: [
                    {
                        expand: true,
                        src: 'bower_components/jquery/dist/jquery.min.js',
                        dest: 'public/js',
                        flatten: true,
                        rename: function(dest, src) {
                            return dest + '/' + src.replace('.min', '');
                        }
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