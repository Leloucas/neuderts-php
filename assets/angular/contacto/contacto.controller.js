angular.module('neuderts').controller('contactoCtrl',contactoCtrl);

contactoCtrl.$inject = ['$location', 'neuData', '$timeout', '$window'];

function contactoCtrl($location, neuData, $timeout, $window){
  var vm = this;

  vm.info = {};

  vm.sent = false;

  vm.contactar = function(){
    neuData.sendEmail(vm.info)
      .then(function(data){
        if(data.data.status === 201){
          vm.sent = true;
          vm.contacto.$setUntouched();
          vm.info = {};
          $window.scrollTo(0,0);
          fnCancel();
        } else {
          console.log(data.data.message);
        }
      }).catch(function(error){
        console.log(error);
      });
  }



  function fnCancel(){
    $timeout(function(){
      vm.sent = false;
    }, 8000);
  }

  fnCancel();

}
