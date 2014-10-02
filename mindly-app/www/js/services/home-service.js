'use-strict';

angular.module('mindlyApp')
	.service('HomeService', ['$http', function($http){
		return {
			getMyTasks: function(){
				var url = '/api/mindly/tasks/';
				// return url.get(url).success(function(response){ return response.data});
				return [
					{
						task_id: 1,
						name: 'Enviar correos',
						description: 'Enviar correos a interesados en el curso.',
						priority: 1,
						project: 'Cursos de JS',
						project_id: 2,
						imgUrl: '../img/ionic.png',
					},
					{
						task_id: 2,
						name: 'Comprar despensas',
						description: 'Comprar despensas con el presupuesto.',
						priority: 2,
						project: 'Alianza Real',
						project_id: 1,
						imgUrl: '../img/ionic.png',
					},
					{
						task_id: 3,
						name: 'Organizar curso',
						description: 'Preparar temas a ver en el curso.',
						priority: 3,
						project: 'Cursos de JS',
						project_id: 2,
						imgUrl: '../img/ionic.png',
					},  
				];
			},
		};
	}]);