angular.module('neuderts').controller('editBlogCtrl', editBlogCtrl);

editBlogCtrl.$inject = ['$location', 'neuData', '$routeParams', '$sce', '$window'];

function editBlogCtrl($location, neuData, $routeParams, $sce, $window){
  var vm = this;

  vm.header = 'Editar Blog';
  vm.message = 'Dejar en blanco si se desea conservar imagen actual';

  var id = $routeParams.id;

  vm.loading = false;
  vm.exists = false;

  vm.blog = {};

  vm.options = {
    height: 300,
    disableDragAndDrop: true,
    toolbar: [
      ['edit',['undo','redo']],
      ['headline', ['style']],
      ['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
      ['fontface', ['fontname']],
      ['textsize', ['fontsize']],
      ['fontclr', ['color']],
      ['alignment', ['ul', 'ol', 'paragraph', 'lineheight']],
      ['height', ['height']],
      ['table', ['table']],
      ['insert', ['link','picture','video','hr']],
      ['view', ['fullscreen', 'codeview']],
      ['help', ['help']]
    ]
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
    vm.loading = true;
    vm.exists = false;
    neuData.updateBlog(vm.blog, vm.imagen)
      .then(function(data){
        if(data.data.status === 201){
          alert(data.data.message);
          $window.history.back();
        } else if(data.data.status === 500) {
          alert(data.data.message);
        } else if(data.data.status === 404) {
          alert(data.data.message);
        } else if(data.data.status === 409) {
          vm.exists = true;
          alert(data.data.message);
        } else {
          alert("Ha ocurrido un error");
        }
      })
      .catch(function(error){
      	alert("Ha ocurrido un error");
        console.log(error);
      })
      .finally(function(){
        vm.loading = false;
      });
  };
}
