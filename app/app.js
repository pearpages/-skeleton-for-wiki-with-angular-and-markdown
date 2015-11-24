(function() {
	'use strict';

	angular.module("app",['ui.router','yaru22.md'])
	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
		.state('docs', {
			url: "/docs/{path:.*}",
			controller: 'MainController',
			controllerAs: 'vm',
			templateUrl: 'app/md.html'
		})
		.state('home', {
		 	url: "/",
		 	controller: 'MainController',
		 	controllerAs: 'vm',
		 	templateUrl: 'app/md.html'
		});

		$urlRouterProvider.otherwise("/");

	});
	
})();