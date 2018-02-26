angular.module('neuderts').controller('portfolioCtrl',portfolioCtrl);

portfolioCtrl.$inject = ['$location', '$routeParams', '$sce', 'neuData', '$window'];

function portfolioCtrl($location, $routeParams, $sce, neuData, $window){
  var vm = this;

  vm.portfolio = {};

  var slug = $routeParams.slug;

  neuData.getOnePortfolio(slug)
    .then(function(data){
      var info = data.data;
      if(!info){
        alert("no se ha encontrado");
      } else if(info != 500){
        vm.portfolio = info;
        vm.portfolio.body = $sce.trustAsHtml(vm.portfolio.body);
      } else {
        $window.history.back();
      }
    })
    .catch(function(error){
      console.log(error);
  });

  // vm.portfolio = {
  //   title : "Summernote",
  //   slug : $routeParams.slug,
  //   subtitle : "Test del summernote",
  //   img : '000_ElShowDeKarl.png',
  //   date : '18-12-2018',
  //   body : '<h1> HEY PAISANOS </h1><br><p>Its the super mario brothers super show</p>'
  // };



  console.log($routeParams.slug);


}
