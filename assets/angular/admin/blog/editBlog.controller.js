angular.module('neuderts').controller('editBlogCtrl', editBlogCtrl);

editBlogCtrl.$inject = ['$location', 'neuData', '$routeParams', '$sce', '$window'];

function editBlogCtrl($location, neuData, $routeParams, $sce, $window){
  var vm = this;

  vm.header = 'Editar Blog';
  vm.message = 'Dejar en blanco si se desea conservar imagen actual';

  var id = $routeParams.id;

  vm.blog = {};

  vm.options = {
    height: 300
  };

  neuData.getBlogAdmin(id)
  .then(function(data){
    var info = data.data;
    if (!info) {
      alert();
    } else if(info != 500){
      vm.blog = info;
      // vm.blog.body = $sce.trustAsHtml(vm.blog.body);
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

    neuData.updateBlog(vm.blog, vm.imagen)
      .then(function(data){
        if(data.data.status === 201){
          alert(data.data.message);
          $window.history.back();
        } else if(data.data.status === 500) {
          alert(data.data.message);
        } else if(data.data.status === 404) {
          alert(data.data.message);
        }
      })
      .catch(function(error){
        console.log(error);
      });
  };
}
