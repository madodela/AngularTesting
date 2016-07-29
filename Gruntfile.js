module.exports = function(grunt) {
  grunt.initConfig({
    karma: { //karma task
      unit: { //unit subtask of karma will run the tasks
        configFile: 'karma-unit.conf.js'
      }
    }
  });
  //load app tasks
  grunt.loadNpmTasks('grunt-karma');
};
