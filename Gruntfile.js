module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                        name: 'small',
                        width: '100%',
                        suffix: '_small',
                        quality: 30
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'img',
                    dest: 'images/'
                }]
            }
        },
        uglify: {
            my_target: {
                files: {
                    'js/dist/Analytics.min.js': ['js/src/Analytics.js'],
                    'js/dist/fontload.min.js': ['js/src/fontload.js'],
                    'js/dist/perfmatters.min.js': ['js/src/perfmatters.js'],
                    'views/js/dist/main.min.js':['views/js/src/main.js']
                }
            }
        }
    });

    // Load the plugin that provides the "responsive-image","uglify" task.
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Default task(s).
    grunt.registerTask('default', ['responsive_images'], ['uglify']);

};