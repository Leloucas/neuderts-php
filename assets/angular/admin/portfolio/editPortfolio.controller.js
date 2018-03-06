angular.module('neuderts').controller('editPortCtrl', editPortCtrl);

editPortCtrl.$inject = ['$location', 'neuData', '$routeParams', '$sce', '$window'];

function editPortCtrl($location, neuData, $routeParams, $sce, $window){
  var vm = this;

  var id = $routeParams.id;

  vm.portfolio = {};

  vm.options = {
    height: 300
  };

  neuData.getPortfolioAdmin(id)
  .then(function(data){
    var info = data.data;
    if (!info) {
      alert();
    } else if(info != 500){
      vm.portfolio = info;
      // vm.portfolio.body = $sce.trustAsHtml(vm.portfolio.body);
    } else {
      $window.history.back();
    }
  })
  .catch(function(error){
    console.log(error, 'Error');
  })
  .finally(function(){
    vm.loading = false;
  });



  vm.submitForm = function(){

    neuData.updatePortfolio(vm.portfolio, vm.imagen)
      .then(function(data){
        console.log(data);
      })
      .catch(function(error){
        console.log(error);
      });
  };
}
