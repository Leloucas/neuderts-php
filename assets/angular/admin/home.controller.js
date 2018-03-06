angular.module('neuderts').controller('adminCtrl',adminCtrl);

adminCtrl.$inject = ['$location', 'neuData'];

function adminCtrl($location, neuData){
  var vm = this;

  vm.portfolios = [];
  vm.blogs = [];

  neuData.getAllPortfolio().then(function(port){
    if(!port.data){
      alert();
    } else if(port.data != 500){
      vm.portfolios = port.data;
      return neuData.getAllBlog();
    } else {
      console.log("Error 500", data);
    }
  }).then(function(blog){
    if(!blog.data){
      alert();
    } else if(blog.data != 500){
      vm.blogs = blog.data;
    } else {
      console.log("Error 500", data);
    }
  }).catch(function(error){
    console.log(error);
  }).finally(function(){
    console.log("ya se cargó");
    vm.loading = false;
  });


}
