angular.module('neuderts').controller('newPortCtrl', newPortCtrl);

newPortCtrl.$inject = ['$location', 'neuData', '$window'];

function newPortCtrl($location, neuData, $window){
  var vm = this;

  vm.header = 'Crear Portfolio';
  vm.message = '';

  vm.options = {
    height: 300
  };

  vm.portfolio = {};

  vm.submitForm = function(){

    neuData.savePortfolio(vm.portfolio, vm.imagen)
      .then(function(data){
        if(data.data.status === 201){
          alert(data.data.message);
          $location.path('/admin');
        } else if(data.data.status === 500) {
          alert(data.data.message);
        } else if(data.data.status === 404) {
          alert(data.data.message);
        }
      })
      .catch(function(error){
        console.log(error);
    });

  }

}
