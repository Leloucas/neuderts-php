angular.module('neuderts', ['ngRoute']);

function config($routeProvider, $locationProvider, $qProvider){

  $routeProvider
    .when('/', {
      templateUrl: 'assets/angular/home/home.view.html',
      controller: 'homeCtrl',
      controllerAs: 'vm'
    })
    .when('/contacto', {
      templateUrl: 'assets/angular/contacto/contacto.view.html',
      controller: 'contactoCtrl',
      controllerAs: 'vm'
    })
    .when('/blog',{
      templateUrl: 'assets/angular/blog/blog.view.html',
      controller: 'blogCtrl',
      controllerAs: 'vm'
    })
    .when('/blog/:slug',{
      templateUrl: 'assets/angular/post/post.view.html',
      controller: 'postCtrl',
      controllerAs: 'vm'
    })
    .when('/blog/nuevo', {
      templateUrl: 'assets/angular/blog/blog-new.view.html',
      controller: 'blogNewCtrl',
      controllerAs: 'vm'
    })
    .when('/portfolio/:slug', {
      templateUrl: 'assets/angular/portfolio/portfolio.view.html',
      controller: 'portfolioCtrl',
      controllerAs: 'vm'
    })
    .when('/admin', {
      templateUrl: 'assets/angular/admin/home.view.html',
      controller: 'adminCtrl',
      controllerAs: 'vm'
    })
    .otherwise({redirectTo: '/'});

  // use the HTML5 History API
  // $locationProvider.html5Mode(true);
  // $qProvider.errorOnUnhandledRejections(false);
}

angular
  .module('neuderts')
  .config(['$routeProvider', '$locationProvider', '$qProvider', config]);
