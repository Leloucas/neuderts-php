angular.module('neuderts', ['ngRoute', 'summernote', 'ngFileUpload', 'ui.sortable']);

function config($routeProvider, $locationProvider, $qProvider, $provide){

  $routeProvider
    .when('/', {
      templateUrl: 'assets/angular/home/home.view.html', 
      controller: 'homeCtrl',
      controllerAs: 'vm'
    })
    .when('/video',{
      templateUrl: 'assets/angular/video/video.view.html',
      controller: 'homeCtrl',
      controllerAs: 'vm'
    })
    .when('/diseño',{
      templateUrl: 'assets/angular/diseño/diseño.view.html',
      controller: 'homeCtrl',
      controllerAs: 'vm'
    })
    .when('/contacto', {
      templateUrl: 'assets/angular/contacto/contacto.view.html',
      controller: 'contactoCtrl',
      controllerAs: 'vm'
    })
    /* Deshabilitación de
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
    */
    .when('/portfolio/:slug', {
      templateUrl: 'assets/angular/portfolio/portfolio.view.html',
      controller: 'portfolioCtrl',
      controllerAs: 'vm'
    })
    .when('/admin', {
      templateUrl: 'assets/angular/admin/home.view.html',
      controller: 'adminCtrl',
      controllerAs: 'vm',
      needsLogin : true
    })
    .when('/admin/blog/new', {
      templateUrl : 'assets/angular/admin/blog/blog.view.html',
      controller : 'newBlogCtrl',
      controllerAs : 'vm',
      needsLogin : true
    })
    .when('/admin/blog/:id', {
      templateUrl : 'assets/angular/admin/blog/blog.view.html',
      controller : 'editBlogCtrl',
      controllerAs : 'vm',
      needsLogin : true
    })
    .when('/admin/portfolio/new', {
      templateUrl : 'assets/angular/admin/portfolio/portfolio.view.html',
      controller : 'newPortCtrl',
      controllerAs : 'vm',
      needsLogin : true
    })
    .when('/admin/portfolio/:id', {
      templateUrl : 'assets/angular/admin/portfolio/portfolio.view.html',
      controller : 'editPortCtrl',
      controllerAs : 'vm',
      needsLogin : true
    })
    .when('/login', {
      templateUrl : 'assets/angular/auth/login.view.html',
      controller : 'loginCtrl',
      controllerAs : 'vm'
    })
    .otherwise({redirectTo: '/'});

  // use the HTML5 History API
  //$locationProvider.html5Mode(true);
  // $qProvider.errorOnUnhandledRejections(false);
}

function run ($rootScope, $location, authentication) {
  $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
    var isLogged = authentication.isLoggedIn();
    if (nextRoute.needsLogin && !isLogged) {
      $location.path('/');
    }
    if ($location.path() === '/login' && isLogged) {
      $location.path('/admin');
    }
  });
};

angular
  .module('neuderts')
  .config(['$routeProvider', '$locationProvider', '$qProvider', config])
  .run(['$rootScope', '$location', 'authentication', run]);
