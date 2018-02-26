angular.module('neuderts').controller('postCtrl',postCtrl);

postCtrl.$inject = ['$location', '$routeParams', '$sce', 'neuData'];

function postCtrl($location, $routeParams, $sce, neuData){
  var vm = this;

  vm.post = {};

  var slug = $routeParams.slug;

  neuData.getOneBlog(slug)
    .then(function(data) {
      var post = data.data;
      if(!post){
        alert();
      } else if(post != 500){
        vm.post = post;
        vm.post.body = $sce.trustAsHtml(vm.post.body);
      } else {
        $window.history.back();
      }
    })
    .catch(function(error){
      console.log(error);
  });
}
