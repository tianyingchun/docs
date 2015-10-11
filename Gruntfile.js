module.exports = function (grunt) {

  grunt.initConfig({
    // Eslint task for current project.
    eslint: {
      //http://eslint.org/docs/rules/
      options: {
        configFile: '.eslintrc'
      },
      react: [
        './docs/**/*{.jsx,.js}'
      ]
    },
    nodemon: {
      options: {
        ignore: ['node_modules/**', 'shared/*/node_modules/**']
      },
      api: {
        script: './bin/api',
        options: {
          env: {
            PORT: '5000',
            // for development, isomorphic server render react
            NODE_ENV: '',
            DEBUG: 'iso:*,',
            DEBUG_COLORS: true
          },
          ext: 'js,jsx,html,ejs'
        }
      },
      isomorphic: {
        script: './bin/isomorphic',
        options: {
          nodeArgs: [ /*'--debug' */ ],
          env: {
            PORT: '2000',
            // for development, isomorphic server render react
            NODE_ENV: '',
            DEBUG: 'iso:*,',
            DEBUG_COLORS: true
          },
          ext: 'js,jsx,html,ejs'
        }
      },
      server: {
        script: './bin/simple',
        options: {
          nodeArgs: [ /*'--debug' */ ],
          env: {
            PORT: '4000',
            // for development, isomorphic server render react
            NODE_ENV: '',
            DEBUG_COLORS: true
          },
          ext: 'js,jsx,html,ejs'
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  // Load customized webpack build infrastructure.
  require('./buildtool')(grunt);

  grunt.registerTask('server', ['nodemon:server']);
  grunt.registerTask('api', ['nodemon:api']);
  grunt.registerTask('isomorphic', ['nodemon:isomorphic']);

};
