angular.module('neuderts').controller('blogCtrl',blogCtrl);

blogCtrl.$inject = ['$location', 'neuData', '$window', '$sce'];

function blogCtrl($location, neuData, $window, $sce){
  var vm = this;

  vm.articles = [];

  neuData.getAllBlog()
    .then(function(data){
      var post = data.data
      if (!post) {
        alert();
      } else if(post == 500){
        console.log("Error", data);
        $window.history.back();
      } else {
        vm.articles = post;
      }
    })
    .catch(function(error){
      console.log(error);
    })

}
