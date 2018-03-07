angular.module('neuderts').controller('newBlogCtrl', newBlogCtrl);

newBlogCtrl.$inject = ['$location', 'neuData', '$window'];

function newBlogCtrl($location, neuData, $window){
  var vm = this;

  vm.header = 'Crear Blog';
  vm.message = '';

  vm.options = {
    height: 300
  };

  vm.blog = {};

  vm.submitForm = function(){

    neuData.saveBlog(vm.blog, vm.imagen)
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
