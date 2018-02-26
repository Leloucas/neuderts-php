angular.module('neuderts').service('neuData', neuData);

neuData.$inject = ['$http', '$window'];

function neuData($http, $window){
  function getAllPortfolio(){
    return $http.get('/neuderts/scripts/portfolio/getAllPortfolio.php').then(complete).catch(failed);
  }

  function getOnePortfolio(slug){
    return $http.get('/neuderts/scripts/portfolio/getOnePortfolio.php?slug='+slug).then(complete).catch(failed);
  }

  function getAllBlog(){
    return $http.get('/neuderts/scripts/blog/getAllBlog.php').then(complete).catch(failed);
  }

  function getOneBlog(slug){
    return $http.get('/neuderts/scripts/blog/getOneBlog.php?slug='+slug).then(complete).catch(failed);
  }

  function complete(response){
    return response;
  }

  function failed(error){
    return error;
  }

  return {
    getAllPortfolio : getAllPortfolio,
    getOnePortfolio : getOnePortfolio,
    getAllBlog : getAllBlog,
    getOneBlog : getOneBlog
  }
}
