angular.module('neuderts').service('neuData', neuData);

neuData.$inject = ['$http', '$window', 'Upload'];

function neuData($http, $window, Upload){
  function getAllPortfolio(){
    return $http.get('/scripts/portfolio/getAllPortfolio.php').then(complete).catch(failed);
  }

  function getOnePortfolio(slug){
    return $http.get('/scripts/portfolio/getOnePortfolio.php?slug='+slug).then(complete).catch(failed);
  }

  function getPortfolioAdmin(id){
    return $http.get('/scripts/portfolio/getOnePortfolio.php?id='+id).then(complete).catch(failed);
  }

  function getAllBlog(){
    return $http.get('/scripts/blog/getAllBlog.php').then(complete).catch(failed);
  }

  function getOneBlog(slug){
    return $http.get('/scripts/blog/getOneBlog.php?slug='+slug).then(complete).catch(failed);
  }

  function getBlogAdmin(id){
    return $http.get('/scripts/blog/getOneBlog.php?id='+id).then(complete).catch(failed);
  }

  function savePortfolio(data, img){

    var req = {
      url: '/scripts/portfolio/saveNewPortfolio.php',
      method: 'POST',
      file: img,
      data: {
        portfolio: data,
        targetPath: '/public/assets/img/portfolio/'
      }
    };

    return Upload.upload(req).then(complete).catch(failed);
  }

  function saveBlog(data, img){

    var req = {
      url: '/scripts/blog/saveNewBlog.php',
      method: 'POST',
      file: img,
      data: {
        blog: data,
        targetPath: '/public/assets/img/blog/'
      }
    };

    return Upload.upload(req).then(complete).catch(failed);
  }

  function updatePortfolio(data, img){

    var req = {
      url: '/scripts/portfolio/updateOnePortfolio.php',
      method: 'POST',
      file: img,
      data: {
        portfolio: data,
        targetPath: '/public/assets/img/portfolio/'
      }
    };

    return Upload.upload(req).then(complete).catch(failed);
  }

  function updateBlog(data, img){

    var req = {
      url: '/scripts/blog/updateOneBlog.php',
      method: 'POST',
      file: img,
      data: {
        blog: data,
        targetPath: '/public/assets/img/blog/'
      }
    };

    return Upload.upload(req).then(complete).catch(failed);
  }

  function deleteBlog(id){
    return $http.post('/scripts/blog/deleteBlog.php', id).then(complete).catch(failed);
  }

  function deletePortfolio(id){
    return $http.post('/scripts/portfolio/deletePortfolio.php', id).then(complete).catch(failed);
  }


  function sendEmail(data){
    return $http.post('/scripts/sendEmail.php', data).then(complete).catch(failed);
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
    getPortfolioAdmin : getPortfolioAdmin,
    getAllBlog : getAllBlog,
    getOneBlog : getOneBlog,
    getBlogAdmin : getBlogAdmin,
    savePortfolio : savePortfolio,
    saveBlog : saveBlog,
    updatePortfolio : updatePortfolio,
    updateBlog : updateBlog,
    deleteBlog : deleteBlog,
    deletePortfolio : deletePortfolio,
    sendEmail : sendEmail
  }
}
