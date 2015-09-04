angular.module('myApp', [
	'ui.router',

	'myApp.controllers.application',
	'myApp.controllers.index'
])

.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise("/app/index");
	
	$stateProvider
	
    .state('app',{
        url:'/app',
        abstract: true,
        views: {
            "mainView": {
                templateUrl:'templates/layout/layout.html',
                controller:'ApplicationController'
            }
        }
    })
    .state('app.index',{
        url:'/index',
        templateUrl: 'templates/index/index.html',
        controller:'index#index'
    })
});