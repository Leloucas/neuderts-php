angular.module('neuderts').controller('newBlogCtrl', newBlogCtrl);

newBlogCtrl.$inject = ['$location', 'neuData', '$window'];

function newBlogCtrl($location, neuData, $window){
  var vm = this;

  vm.header = 'Crear Blog';
  vm.message = '';

  vm.loading = false;
  vm.exists = false;

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

  vm.blog = {};

  vm.submitForm = function(){
    vm.loading = true;
    vm.exists = false;
    neuData.saveBlog(vm.blog, vm.imagen)
      .then(function(data){
        if(data.data.status === 201){
          alert(data.data.message);
          $location.path('/admin');
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

  }
}
