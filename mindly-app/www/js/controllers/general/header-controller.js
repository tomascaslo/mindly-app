'use-strict';

angular.module('mindlyApp')
	.controller('HeaderCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
		$scope.title = "Mindly";
	}]);