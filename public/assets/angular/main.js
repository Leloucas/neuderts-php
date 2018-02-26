angular.module('neuderts', ['ngRoute']);

function config($routeProvider, $locationProvider, $qProvider){

  $routeProvider
    .when('/', {
      templateUrl: 'home/home.view.html',
      controller: 'homeCtrl',
    })

  // use the HTML5 History API
  $locationProvider.html5Mode(true);
  $qProvider.errorOnUnhandledRejections(false);
}

angular
  .module('neuderts')
  .config(['$routeProvider', '$locationProvider', '$qProvider', config]);
