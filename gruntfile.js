module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    files: {
        grunt      : ['gruntfile.js']
      , less       : ['public/css/*.less'] 
      , handlebars : ['public/handlebars']
    },
    
      /* Styles Tasks
    ------------------------------ */
    // Compile LESS into CSS
    less: {
      all: {
        files: {
            'public/css/styles.css'   : 'public/css/styles.less'
        }
      }
    },

    /* Watch Task
    ------------------------------ */
    watch: {
      less: {
        options: {
          livereload: true
        },
        files: ['<%= files.less %>'],
        tasks: ['less']
      },
      handlebars: {
        options: {
          livereload: true
        },
        files: ['<%= files.handlebars %>']
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['less', 'watch']);

};


