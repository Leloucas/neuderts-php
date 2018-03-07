angular.module('neuderts').controller('loginCtrl', loginCtrl);

loginCtrl.$inject = ['$location', 'authentication', '$window'];

function loginCtrl($location, authentication, $window){
  var vm = this;

  vm.error = false;
  vm.errormessage = '';

  vm.onSubmit = function(){
    var user = {
      email : vm.credentials.email,
      password : vm.credentials.password
    };
    vm.error = false;
    vm.errormessage = '';
    authentication.login(user)
      .then(function(data){
        if(data.data.status === 404){
          vm.error = true;
          vm.errormessage = "Usuario no encontrado";
        } else if(data.data.status === 400){
          vm.error = true;
          vm.errormessage = "Contaseña incorrecta";
        } else if(data.data.status === 200){
          vm.error = false;
          authentication.saveSession(data.data.session);
          $location.path('/admin');
        }
      })
      .catch(function(error){
        console.log(error);
      });
  };


}
