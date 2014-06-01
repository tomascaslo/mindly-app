'use-strict';

angular.module('mindlyApp')
	.service('TasksService', ['$http', function($http){
		return {
			getTask: function(id) {
				return {
						name: 'Enviar correos',
						description: 'Enviar correos a interesados en el curso.',
						priority: 1,
						project: 'Cursos de JS',
						project_id: 2,
						status: 'finished',
						date: '31/10/2014',
				};
			},
		};
	}]);