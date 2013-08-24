module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      styles: {
        files: [
          { expand: true, cwd: 'dev/css', src: '**', dest: 'css/'}
        ]
      },
      images: {
        files: [{src: 'dev/img/myfavicon.ico', dest: 'img/myfavicon.ico'}]
      },
      comingsoon: {
        files: [{src: 'comingsoon.html', dest: 'index.html'}]
      }


    },

  imagemin: {                          // Task
    default: {                          // Target
      options: {                       // Target options
        optimizationLevel: 3
      },
      files: [{
        expand: true,  
        cwd: 'dev/img/',                       
        src: ['*.{png,jpg}'],
        dest: 'img/'
      }]
    }
  },

  cssmin: {
    combine: {
      files: {
        'css/style.min.css': ['dev/css/style.css']
      }
    }
  },

  compass: {                 
    options: {
      imagesDir: 'dev/img/',
      httpGeneratedImagesPath: "../img/"

    },

    dev: {                  
      options: {
        sassDir: 'dev/scss',
        cssDir: 'dev/css'
      }
    }
  },

  processhtml: {
    dist: {
      files: {
        'index.html': ['dev/index.html']
      }
    }
  }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-compass');
  

  // Default task(s).
  // grunt.registerTask('default', ['']);
  grunt.registerTask('dist', ['processhtml', 'compass:dev', 'copy:styles', 'copy:images', 'imagemin:default', 'cssmin:combine']);
  grunt.registerTask('comingsoon', ['copy:comingsoon']);
  grunt.registerTask('compasss', ['compass:dev']);

};