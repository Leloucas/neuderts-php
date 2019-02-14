angular.module('neuderts').controller('videoCtrl',videoCtrl);

videoCtrl.$inject = ['$location', 'neuData'];

function videoCtrl($location, neuData){
  var vm = this;
  var type = 1;

  vm.portfolios = [];
  
  neuData.getAllPortfolio(type).then(function(data){
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