angular.module('neuderts').controller('disenoCtrl',disenoCtrl);

videoCtrl.$inject = ['$location', 'neuData'];

function disenoCtrl($location, neuData){
  var vm = this;

  vm.portfolios = [];

  neuData.getAllPortfolio().then(function(data){
    if(data.data == 500){
      console.log("Error", data);
    } else {
      vm.portfolios = data.data;
    }
  }).catch(function(error){
    console.log(error);
  }).finally(function(){
    vm.loading = false;
  });


}