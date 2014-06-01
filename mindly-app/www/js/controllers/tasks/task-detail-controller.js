'use-strict';

angular.module('mindlyApp')
	.controller('TaskDetailCtrl', ['$scope', '$stateParams', 'TasksService', function($scope, $stateParams, TasksService){
		$scope.task;

		function initCtrl(){
			var taskId = $stateParams.task;
			$scope.task = TasksService.getTask(taskId);
		}

		initCtrl();

	}]);