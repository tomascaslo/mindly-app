'use-strict';

angular.module('mindlyApp')
	.controller('TaskDetailCtrl', ['$scope', '$stateParams', 'Footer', 'TasksService', function($scope, $stateParams, Footer, TasksService){
		$scope.task;

		function initCtrl(){
			Footer.setFooterOn(); // Colocamos el footer para esta vista
			var taskId = $stateParams.task;
			$scope.task = TasksService.getTask(taskId);
			Footer.setLeftLabel("Pr. " + $scope.task.priority);
			Footer.setRightLabel($scope.task.date);
		}

		initCtrl();

		// Events after finished using the controller
		$scope.$on('$destroy', function () {
			Footer.destroyFooter();
		});

	}]);