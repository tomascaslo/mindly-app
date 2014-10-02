'use-strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('mindlyApp', [
    'ionic',
    'underscore',
    ])

.run(['$rootScope', '$ionicPlatform', function($rootScope, $ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}])

.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', function($httpProvider, $stateProvider, $urlRouterProvider) {

    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.headers.patch = {
        'Content-Type': 'application/json;charset=utf-8',
    };

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  
 	.state('menu', {
 		url: "/menu",
 		abstract: true,
 		templateUrl: "views/general/menu.html",
 		controller: "MenuCtrl",
 	})

 	.state('menu.header', {
 		url: "/header",
    views: {
      'header' : {
        templateUrl: "views/general/header.html",
        controller: "HeaderCtrl",
      },
    }, 
 	})

  .state('menu.header.home', {
    url: "/home",
    views: {
      'content': {
        templateUrl: "views/home.html",
        controller: "HomeCtrl",
      },
    }, 
  })

  .state('menu.header.task-detail', {
    url: "/:task",
    views: {
      'content': {
        templateUrl: "views/tasks/task-detail.html",
        controller: "TaskDetailCtrl",
      },
    }, 
  })

  .state('menu.header.projects', {
      url: "/projects",
      views: {
        'content': {
          templateUrl: "views/projects/projects.html",
        },
      }, 
    })

  // ROUTES FOR CREATING A NEW PROJECT
  .state('menu.header.new-project', {
    url: "/newProject",
    views: {
      'content': {
        templateUrl: "views/projects/new-project.html",
        controller: "CreateProjectCtrl",
      },
    }, 
  })

  .state('menu.header.new-project.step1', {
    url: "/step1",
    templateUrl: "views/projects/new-project-step1.html",
  })

  .state('menu.header.new-project.step2', {
    url: "/step2",
    templateUrl: "views/projects/new-project-step2.html",
  })

  .state('menu.header.new-project.step3', {
    url: "/step3",
    templateUrl: "views/projects/new-project-step3.html",
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/menu/header/home');

}]);