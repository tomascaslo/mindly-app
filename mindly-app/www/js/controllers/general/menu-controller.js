'use-strict';

angular.module('mindlyApp')
	.controller('MenuCtrl', ['$scope', '$rootScope', 'Footer', function($scope, $rootScope, Footer){

		// Tab bar information
		$scope.useTabBar = function() { 
			return Footer.getFooterState()
		};

		$scope.leftLabel = function(){
			return Footer.getLeftLabel();
		};

		$scope.middleLabel = function(){
			return Footer.getMiddleLabel();
		};

		$scope.rightLabel = function(){
			return Footer.getRightLabel();
		};

	}]);