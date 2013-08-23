module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      styles: {
        files: [
          { expand: true, cwd: 'dev/css', src: '**', dest: 'prod/assets/css'}
        ]
      },
      scripts: {
        files: [
          { expand: true, cwd: 'dev/js', src: '**', dest: 'prod/assets/js'}
        ]
      }


    },

    watch: {
      styles: {
        files: ['dev/css/*.css'],
        tasks: ['copy:styles']
      },
      scripts: {
        files: ['dev/js/*.js'],
        tasks: ['copy:scripts']
      },
      sass: {
        files: ['dev/scss/*.scss'],
        tasks: ['sass:dev']
      },
      templates: {
        files: ['dev/templates/*', 'dev/partials/*'],
        tasks: ['staticHandlebars']
      }
    },


      },

  //   uglify: {
  //     options: {
  //       banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
  //     },
  //     build: {
  //       src: 'dev/js/<%= pkg.name %>.js',
  //       dest: 'dev/js/<%= pkg.name %>.min.js'
  //     }
  //   }
  // });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-processhtml');
  // grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // grunt.loadNpmTasks('grunt-static-handlebars');
  

  // Default task(s).
  // grunt.registerTask('default', ['sass', 'uglify', 'staticHandlebars', 'copy', 'watch']);
  grunt.registerTask('dev', ['']);
  grunt.registerTask('dist', ['']);

};