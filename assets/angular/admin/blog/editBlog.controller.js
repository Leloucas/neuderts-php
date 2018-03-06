angular.module('neuderts').controller('editBlogCtrl', editBlogCtrl);

editBlogCtrl.$inject = ['$location', 'neuData', '$routeParams', '$sce', '$window'];

function editBlogCtrl($location, neuData, $routeParams, $sce, $window){
  var vm = this;

  var id = $routeParams.id;

  vm.blog = {};

  neuData.getOneBlog(id)
  .then(function(data){
    var info = data.data;
    if (!info) {
      alert();
    } else if(info != 500){
      vm.blog = info;
      vm.blog.body = $sce.trustAsHtml(vm.blog.body);
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
}
