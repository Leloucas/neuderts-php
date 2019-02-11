<!DOCTYPE html>
<html ng-app="neuderts">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="shortcut icon" type="image/png" href="assets/img/neuderts-favicon.png"/>



    <title>Neuderts</title>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/summernote.min.css">
    <link rel="stylesheet" href="assets/css/styles.css">


    <script src="assets/js/jquery-3.2.1.min.js" charset="utf-8"></script>
    <script src="assets/js/jqueryui.1.12.min.js" charset="utf-8"></script>
    <script src="assets/js/bootstrap.min.js" charset="utf-8"></script>
    <script src="assets/js/fontawesome-all.min.js" charset="utf-8"></script>
    <script src="assets/angular/angular.min.js" charset="utf-8"></script>
    <script src="assets/js/summernote.js" charset="utf-8"></script>

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
              <li><a ng-href="#!/video">Video</a></li>
              <li><a ng-href="#!/diseño">Diseño</a></li>
              <li><a ng-href="#!/contacto">Contacto</a></li>
              <li><a href="https://www.instagram.com/neudertsmx" target="_blank">Instagram</a></li>
              <li><a href="https://www.facebook.com/neuderts" target="_blank">Facebook</a></li>
              <li><a href="https://vimeo.com/neuderts" target="_blank">Vimeo</a></li>
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
            <span class="pull-middle text-center footer-contacto"">
              Contáctanos.
              <br>
              contacto@neuderts.com | (+52) 3 10 34 10
              <br>
              Hermosillo, Sonora, México
            </span>
            <hr>
            <span class="pull-left text-left footer-contacto">
              &copy; Neuderts 2018 Todos los Derechos Reservados.
            </span>
            <span class="pull-right text-right footer-contacto"><a href="#!/contacto">Contacto</a></span>
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
    <script src="assets/angular/auth/login.controller.js" charset="utf-8"></script>
    <script src="assets/angular/contacto/contacto.controller.js" charset="utf-8"></script>
    <script src="assets/angular/portfolio/portfolio.controller.js" charset="utf-8"></script>
    <script src="assets/angular/admin/home.controller.js" charset="utf-8"></script>
    <script src="assets/angular/admin/blog/editBlog.controller.js" charset="utf-8"></script>
    <script src="assets/angular/admin/blog/newBlog.controller.js" charset="utf-8"></script>
    <script src="assets/angular/admin/portfolio/editPortfolio.controller.js" charset="utf-8"></script>
    <script src="assets/angular/admin/portfolio/newPortfolio.controller.js" charset="utf-8"></script>
    <script src="assets/angular/services/authentication.service.js" charset="utf-8"></script>

    <script src="assets/js/angular-summernote.min.js" charset="utf-8"></script>
    <script src="assets/js/ng-file-upload-shim.min.js" charset="utf-8"></script>
    <script src="assets/js/ng-file-upload-all.min.js" charset="utf-8"></script>
    <script src="assets/js/sortable.js" charset="utf-8"></script>
  </body>
</html>
