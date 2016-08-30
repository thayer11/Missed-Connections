angular.module('missedconnections', ['ngRoute'])
  .config(config)
  .controller("UserController", UserController);

function config($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: "angular-app/templates/root.html",
      controller: "UserController"
    })
    .when('/login', {
      templateUrl: "angular-app/templates/login.html",
      controller: "UserController"
    })
    .when('/signup', {
      templateUrl: "angular-app/templates/signup.html",
      controller: "UserController"
    }) ;
}

UserController.$inject = ["$http","$scope"];

function UserController($http,$scope) {
  $scope.login = login;
  $scope.createNewUser = createNewUser;

function createNewUser(request,response) {
  var newUser = new User();
    newUser.email = request.body.email;
    newUser.password = request.body.password;
    newUser.username = request.body.username;
    newUser.first_name = request.body.first_name;
    newUser.last_name = request.body.last_name;
    newUser.city = request.body.city;
    newUser.state = request.body.state;
    personal_bio = request.body.personal_bio

    User.hashPassword(newUser.password, function(err,hash) {
      if(err) {
        console.log('err');
      }
      newUser.password = hash;
    });

    newUser.save(function(err) {
      if(err) {
        console.log('error saving newuser: '+err);
        return response.json({url: "/#/signup", message: "Error saving user: "+err, error: true});
      }
      console.log('newuser save successful');
      // login(newUser);
      return response.json({url: "/#/login", message: 'Successfully created your new user!', error: false});
    });
}


// function createNewUser() {
//     console.log('in createNewUser front_end');
//     console.log($scope.newUser)
//     var user = $scope.newUser
//     console.log(user)
//     console.log($)

//     $.ajax({
//       type: "POST",
//       url: "/signup",
//       data: user
//     }).done(function(data){
//       console.log(data)
//     })
//     $http.post('/signup', user)
//       .then(function(response, headers) {
//         console.log('got a response')
//         console.log(response)
//         console.log(headers)
//         $scope.loginUser.email = $scope.newUser.email;
//         $scope.loginUser.password = $scope.newUser.password;
//         login();
//       });
//   }

function login() {
    console.dir($scope.loginUser);
    $http.post('/login',$scope.loginUser)
      .then(function(response) {
        console.log(response);
        console.log("response inside the login function: ");
        console.dir(response);
        // response.redirect('/#/messages');
      });
  }
}
 function logout() {
    console.log('in the logout function');
    $http.get('/logout')
      .then(function(response) {
        window.location.assign(response.data.url);
      });
  }


module.exports = {
  createNewUser: createNewUser,
  logout: logout,
  login: login,
  
};


