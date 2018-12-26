angular.module('neuderts').service('neuData', neuData);

neuData.$inject = ['$http', '$window', 'Upload'];

function neuData($http, $window, Upload){
  function getAllPortfolio(){
    return $http.get('/neuderts/scripts/portfolio/getAllPortfolio.php').then(complete).catch(failed);
  }

  function getOnePortfolio(slug){
    return $http.get('/neuderts/scripts/portfolio/getOnePortfolio.php?slug='+slug).then(complete).catch(failed);
  }

  function getPortfolioAdmin(id){
    return $http.get('/neuderts/scripts/portfolio/getOnePortfolio.php?id='+id).then(complete).catch(failed);
  }

  function getAllBlog(){
    return $http.get('/neuderts/scripts/blog/getAllBlog.php').then(complete).catch(failed);
  }

  function getOneBlog(slug){
    return $http.get('/neuderts/scripts/blog/getOneBlog.php?slug='+slug).then(complete).catch(failed);
  }

  function getBlogAdmin(id){
    return $http.get('/neuderts/scripts/blog/getOneBlog.php?id='+id).then(complete).catch(failed);
  }

  function savePortfolio(data, img){

    var req = {
      url: '/neuderts/scripts/portfolio/saveNewPortfolio.php',
      method: 'POST',
      file: img,
      data: {
        portfolio: data,
        targetPath: 'neuderts/public/assets/img/portfolio/'
      }
    };

    return Upload.upload(req).then(complete).catch(failed);
  }

  function saveBlog(data, img){

    var req = {
      url: '/neuderts/scripts/blog/saveNewBlog.php',
      method: 'POST',
      file: img,
      data: {
        blog: data,
        targetPath: 'neuderts/public/assets/img/blog/'
      }
    };

    return Upload.upload(req).then(complete).catch(failed);
  }

  function updatePortfolio(data, img){

    var req = {
      url: '/neuderts/scripts/portfolio/updateOnePortfolio.php',
      method: 'POST',
      file: img,
      data: {
        portfolio: data,
        targetPath: 'neuderts/public/assets/img/portfolio/'
      }
    };

    return Upload.upload(req).then(complete).catch(failed);
  }

  function updateBlog(data, img){

    var req = {
      url: '/neuderts/scripts/blog/updateOneBlog.php',
      method: 'POST',
      file: img,
      data: {
        blog: data,
        targetPath: 'neuderts/public/assets/img/blog/'
      }
    };

    return Upload.upload(req).then(complete).catch(failed);
  }

  function deleteBlog(id){
    return $http.post('/neuderts/scripts/blog/deleteBlog.php', id).then(complete).catch(failed);
  }

  function deletePortfolio(id){
    return $http.post('/neuderts/scripts/portfolio/deletePortfolio.php', id).then(complete).catch(failed);
  }

  function sendEmail(data){
    return $http.post('/neuderts/scripts/sendEmail.php', data).then(complete).catch(failed);
  }

  function updatePortfolioOrder(id, order){

    return $http({
      method: 'POST',
      url: '/neuderts/scripts/portfolio/updatePortfolioOrder.php',
      data: [id, order], 
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
   }).then(complete).catch(failed);
  }

  function updateBlogOrder(id, order){
    return $http({
      method: 'POST',
      url: '/neuderts/scripts/blog/updateBlogOrder.php',
      data: [id, order], 
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(complete).catch(failed);
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
    sendEmail : sendEmail,
    updatePortfolioOrder : updatePortfolioOrder,
    updateBlogOrder : updateBlogOrder
  }
}
