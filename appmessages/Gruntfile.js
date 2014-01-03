module.exports = function(grunt) {
  grunt.loadTasks('../vendor/amber/grunt/tasks/');

  grunt.registerTask('default', ['amberc:appmessages']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('../package.json'),

    amberc: {  
      options: {
        amber_dir: '../vendor/amber',
        closure_jar: ''
      },
      appmessages: {
        src: ['st/AppMessages.st'],
        libraries: ['Canvas'],
        output_dir: 'js',
        deploy: true,
        amd_namespace: 'dk_itu_app_messages'
      }
    }
  });

}
