(function() {
	'use strict';

	angular.module("app")
	.controller('MainController',['$state',MainController]);

	function MainController($state) {
		var vm = this;

		vm.index = 'docs/index.md';

		if($state.current.name === 'docs'){
			vm.url = 'docs/' + $state.params.path + '.md';
		}else{
			vm.url = '/README.md';
		}
		
	}
})();