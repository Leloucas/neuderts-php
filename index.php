<!DOCTYPE html>
<html ng-app="neuderts">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">


    <title>Neuderts</title>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/styles.css">

    <script src="assets/angular/angular.min.js" charset="utf-8"></script>
    <script src="assets/js/jquery-3.2.1.min.js" charset="utf-8"></script>
    <script src="assets/js/bootstrap.min.js" charset="utf-8"></script>
  </head>
  <body>
    <!-- nav -->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#neuNavCollapse" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" ng-href="#!/"><img src="assets/img/neuderts-logo.png" alt="Neuderts" class="img-responsive"></a>
          </div>
        </div>
        <div class="collapse navbar-collapse" id="neuNavCollapse">
          <div class="navbar-right">
            <ul class="nav navbar-nav navbar-right">
              <li><a ng-href="#!/">Inicio</a></li>
              <li><a ng-href="#!/contacto">Contacto</a></li>
              <li><a ng-href="#!/blog">Blog</a></li>
              <li><a href="https://www.facebook.com/neuderts" target="_blank">Facebook</a></li>
              <li><a href="https://www.instagram.com/neudertsmx" target="_blank">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <!-- /nav -->
    <div class="container">
      <ng-view autoscroll="true"></ng-view>
    </div>
    <!-- footer -->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <p class="text-center" style="font-weight: normal;font-size: 12px;">
            Neuderts 2018
            <span class="pull-right text-right" class="footer-contacto">
              (+52) 3 10 34 10
              <br>
              contacto@neuderts.com
              <br>
              Hermosillo, Sonora, México
            </span>
          </p>
        </div>
      </div>
    </footer>

      <script src="assets/angular/angular-route.min.js" charset="utf-8"></script>
      <script src="assets/angular/main.js" charset="utf-8"></script>
      <script src="assets/angular/services/data.services.js" charset="utf-8"></script>
      <script src="assets/angular/home/home.controller.js" charset="utf-8"></script>
      <script src="assets/angular/blog/blog.controller.js" charset="utf-8"></script>
      <script src="assets/angular/post/post.controller.js" charset="utf-8"></script>
      <script src="assets/angular/blog/blog-new.controller.js" charset="utf-8"></script>
      <script src="assets/angular/contacto/contacto.controller.js" charset="utf-8"></script>
      <script src="assets/angular/portfolio/portfolio.controller.js" charset="utf-8"></script>
      <script src="assets/angular/admin/home.controller.js" charset="utf-8"></script>
  </body>
</html>
