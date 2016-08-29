angular.module('missedconnections', ['ngRoute']).config(config);

function config($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'angular-app/index.html',
      // controller: MessageController,
      // controllerAs: 'vms'
    })
	.when('/poem/:id',{
		templateUrl: 'angular-app/poem-display/poem.html',
		controller: PoemController,
		controllerAs: 'vm'
	}); 
   }
    