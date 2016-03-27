module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            main: {
                src: ['src/**/*.rt.js']
            }
        },
        reactTemplates: {
            main: {
                src: ['src/**/*.rt'],
                options: {
                    format: 'stylish',
                    modules: 'amd'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-react-templates');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean', 'reactTemplates']);
};