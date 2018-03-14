angular.module('neuderts').controller('adminCtrl',adminCtrl);

adminCtrl.$inject = ['$location', 'neuData', '$window'];

function adminCtrl($location, neuData, $window){
  var vm = this;

  vm.portfolios = [];
  vm.blogs = [];

  vm.loading = false;

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
    vm.loading = false;
  });

  vm.rmPort = function(id){
    var remove = $window.confirm('Está a punto de borrar un registro.\nEsta acción no se puede deshacer.\n¿Desea continuar?');
    if (remove) {
      vm.loading = true;
      neuData.deletePortfolio(id)
        .then(function(data){
          if(data.data.status === 201){
            alert(data.data.message);
            removeFromList(vm.portfolios, id);
          } else if(data.data.status === 500) {
            alert(data.data.message);
          } else if(data.data.status === 404) {
            alert(data.data.message);
          }
        }).catch(function(error){
          console.log(error);
        }).catch(function(){
          vm.loading = false;
        });
    }
  }

  vm.rmBlog = function(id){
    var remove = $window.confirm('Está a punto de borrar un registro.\nEsta acción no se puede deshacer.\n¿Desea continuar?');
    if (remove) {
      vm.loading = true;
      neuData.deleteBlog(id)
        .then(function(data){
          if(data.data.status === 201){
            alert(data.data.message);
            removeFromList(vm.blogs, id);
          } else if(data.data.status === 500) {
            alert(data.data.message);
          } else if(data.data.status === 404) {
            alert(data.data.message);
          }
        }).catch(function(error){
          console.log(error);
        }).catch(function(){
          vm.loading = false;
        });
    }
  }

  var removeFromList = function(arr, id){
    var index = arr.filter(function(e) {
      return e.id == id;
    });
    var item = arr.indexOf(index[0]);
    arr.splice(item, 1);
  }

}
