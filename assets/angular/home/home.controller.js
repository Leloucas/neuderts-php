angular.module('neuderts').controller('homeCtrl',homeCtrl);

homeCtrl.$inject = ['$location', 'neuData'];

function homeCtrl($location, neuData){
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
  });


}
