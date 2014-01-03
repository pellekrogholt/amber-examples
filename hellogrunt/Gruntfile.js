module.exports = function(grunt) {
  grunt.loadTasks('../vendor/amber/grunt/tasks/');

  grunt.registerTask('default', ['amberc:hellogrunt']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('../package.json'),

    amberc: {  
      options: {
        amber_dir: '../vendor/amber',
        closure_jar: ''
      },
      hellogrunt: {
        src: ['st/HelloGruntApp.st'],
        libraries: ['Canvas'],
        output_dir: 'js',
        deploy: true,
        amd_namespace: 'com_example_hello_grunt'
      }
    }
  });

}
