angular.module('neuderts', ['ngRoute', 'summernote', 'ngFileUpload']);

function config($routeProvider, $locationProvider, $qProvider, $provide){

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
    .when('/admin/blog/new', {
      templateUrl : 'assets/angular/admin/blog/blog.view.html',
      controller : 'newBlogCtrl',
      controllerAs : 'vm'
    })
    .when('/admin/blog/:id', {
      templateUrl : 'assets/angular/admin/blog/blog.view.html',
      controller : 'editBlogCtrl',
      controllerAs : 'vm'
    })
    .when('/admin/portfolio/new', {
      templateUrl : 'assets/angular/admin/portfolio/portfolio.view.html',
      controller : 'newPortCtrl',
      controllerAs : 'vm'
    })
    .when('/admin/portfolio/:id', {
      templateUrl : 'assets/angular/admin/portfolio/portfolio.view.html',
      controller : 'editPortCtrl',
      controllerAs : 'vm'
    })
    .otherwise({redirectTo: '/'});

  // use the HTML5 History API
  // $locationProvider.html5Mode(true);
  // $qProvider.errorOnUnhandledRejections(false);
}

angular
  .module('neuderts')
  .config(['$routeProvider', '$locationProvider', '$qProvider', config]);
