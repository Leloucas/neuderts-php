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

}
