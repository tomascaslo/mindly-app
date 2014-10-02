'use-strict';

angular.module('mindlyApp')
	.controller('CreateProjectCtrl', ['$scope', 'Footer', function($scope, Footer){
		var leftLabel = "<a ui-sref-active='active-step' ui-sref='.step1'><span>1</span></a>",
			middleLabel = "<a ui-sref-active='active-step' ui-sref='.step2'><span>2</span></a>",
			rightLabel = "<a ui-sref-active='active-step' ui-sref='.step3'><span>3</span></a>";

		$scope.projectData;

		function initCtrl(){
			Footer.setFooterOn();
			Footer.setLeftLabel(leftLabel);
			Footer.setMiddleLabel(middleLabel);
			Footer.setRightLabel(rightLabel);

			$scope.projectData = {
				name: '',
				company: '',
				description: '',
				imageUrl: '',
				startDate: '',
				endDate: '',
				numberOfStages: 5,
				members: [],
			};
		}

		initCtrl();

		$scope.processForm = function() {
			// Form validation stuff
		};

		$scope.changeNumStages = function(){
			var currNumStages = $scope.projectData.numberOfStages;
			if(currNumStages >= 5){
				currNumStages = 1;	
			} else{
				currNumStages +=1;
			}
			$scope.projectData.numberOfStages = currNumStages;
			console.log($scope.projectData.numberOfStages); 
		};

		$scope.toggleMember = function(partnerID){
			var members = $scope.projectData.members;
			var index = members.indexOf(partnerID);
			if(index > -1){
				members.splice(index, 1);
			} else{
				members.push(partnerID);
			}
			console.log(members)
		};

		// Events after finished using the controller
		$scope.$on('$destroy', function () {
			Footer.destroyFooter();
		});
	}]);