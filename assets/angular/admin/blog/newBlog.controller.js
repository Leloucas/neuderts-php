angular.module('neuderts').controller('newBlogCtrl', newBlogCtrl);

newBlogCtrl.$inject = ['$location', 'neuData', '$window'];

function newBlogCtrl($location, neuData, $window){
  var vm = this;

  vm.header = 'Crear Blog';
  vm.message = '';

  vm.loading = false;
  vm.exists = false;

  vm.options = {
    height: 300
  };

  vm.blog = {};

  vm.submitForm = function(){
    vm.loading = true;
    vm.exists = false;
    neuData.saveBlog(vm.blog, vm.imagen)
      .then(function(data){
        if(data.data.status === 201){
          alert(data.data.message);
          $location.path( '/admin' );
        } else if(data.data.status === 500) {
          alert(data.data.message);
        } else if(data.data.status === 404) {
          alert(data.data.message);
        } else if(data.data.status === 409) {
          vm.exists = true;
          alert(data.data.message);
        }
      })
      .catch(function(error){
        console.log(error);
      })
      .finally(function(){
        vm.loading = false;
      });

  }
}
