'use-strict';

angular.module('mindlyApp')
	.controller('HomeCtrl', ['$scope', 'HomeService', function($scope, HomeService){
		$scope.tasks;

		function initCtrl(){
			$scope.tasks = HomeService.getMyTasks();
		}

		initCtrl();

	}]);