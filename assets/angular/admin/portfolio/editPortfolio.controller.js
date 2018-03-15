angular.module('neuderts').controller('editPortCtrl', editPortCtrl);

editPortCtrl.$inject = ['$location', 'neuData', '$routeParams', '$sce', '$window'];

function editPortCtrl($location, neuData, $routeParams, $sce, $window){
  var vm = this;

  var id = $routeParams.id;

  vm.header = 'Editar Portfolio';
  vm.message = '(Dejar en blanco si se desea conservar imagen actual)';

  vm.portfolio = {};

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

  neuData.getPortfolioAdmin(id)
  .then(function(data){
    var info = data.data;
    if (!info) {
      alert();
    } else if(info != 500){
      vm.portfolio = info;
      // vm.portfolio.body = $sce.trustAsHtml(vm.portfolio.body);
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
    neuData.updatePortfolio(vm.portfolio, vm.imagen)
      .then(function(data){
        if(data.data.status === 201){
          alert(data.data.message);
          // $window.history.back();
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
