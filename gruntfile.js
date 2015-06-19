module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // banner
        banner: '/**\n' +
                ' * <%= pkg.name %> - version <%= pkg.version %>\n' +
                // ' * <%= grunt.template.today("dd-mm-yyyy") %>\n' +
                ' *\n' +
                ' * <%= pkg.repository.url %>\n' +
                ' * <%= pkg.author.name %> - <%= pkg.author.email %>\n' +
                ' *\n' +
                ' */',

        // uglify
        uglify: {
            options: {
                // the banner is inserted at the top of the output
                // banner: '/*! <%= pkg.name %> v<%= pkg.version %> */\n'
            },
            all: {
                files: {
                    'dist/sidenotes.min.js': ['src/js/sidenotes.js']
                }
            }
        },

        // copy
        copy: {
            all: {
                files: [
                    // includes files within path
                    { expand: true, flatten: true, src: ['src/js/sidenotes.js'], dest: 'dist/', filter: 'isFile' }
                ],
            },
        },

        // banner
        usebanner: {
            all: {
                options: {
                    position: 'top',
                    banner: '<%= banner %>',
                    linebreak: true
                },
                files: {
                    src: [ 'dist/sidenotes.min.js', 'dist/sidenotes.js' ]
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify'); // uglify
    grunt.loadNpmTasks('grunt-contrib-copy'); // copy
    grunt.loadNpmTasks('grunt-banner'); // banner

    // tasks
    grunt.registerTask('dist', [
        'uglify:all', 'copy:all', 'usebanner:all'
    ]);
};