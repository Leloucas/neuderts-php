angular.module('neuderts').service('authentication', authentication);

authentication.$inject = ['$http', '$window', '$location'];

function authentication ($http, $window, $location) {
  var saveSession = function(session){
    $window.localStorage.session = session;
  }

  var getSession = function () {
    return $window.localStorage.session;
  };

  var isLoggedIn = function() {
    var session = getSession();

    if(session){
      return session;
    } else {
      return false;
    }
  };

  var login = function(user) {
    return $http({
      url: './scripts/session.php',
      method: 'POST',
      data: user
    })
    .then(function(data) {
      return data;
    }).catch(function(error){
      return error;
    });
  };

  var logout = function() {
    console.log("logged out");
    $window.localStorage.removeItem('token');

    $location.path('/');
    $window.location.reload();
  };

  return {
    saveSession : saveSession,
    getSession : getSession,
    isLoggedIn : isLoggedIn,
    login : login,
    logout : logout
  }

}
