angular.module('myApp', [
	'ui.router',

	'myApp.controllers.application',
	'myApp.controllers.index'
])

.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise("/app/index/");
	
	$stateProvider
	
    .state('app',{
        url:'/app',
        abstract: true,
        templateUrl:'templates/layout/layout.html',
        controller:'ApplicationController'
    })
    .state('app.index',{
        url:'/index',
        abstract: true,
        views: {
            'mainView': {
                templateUrl: 'templates/index/index.html',
                controller:'index#index'
            }
        }
    })
    .state('app.index.final', {
        url: '/',
        views: {
            'mainView': {
                templateUrl: 'templates/final/index.html',
                controller:'final#index'
            }
        }
    })
	
});