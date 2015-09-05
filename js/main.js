angular.module('myApp', [
	'ui.router',

	'myApp.controllers.application',
    'myApp.controllers.index',
	'myApp.controllers.microcap',
    
    'myApp.directives.courses',

    'myApp.services.microcap'
])

.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise("/app/");
	
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
        url:'/',
        templateUrl: 'templates/index/index.html',
        controller:'index#index'
    })

    .state('microcap', {
        url: '/microcap',
        abstract: true,
        views: {
            "mainView": {
                templateUrl: "templates/layout/layout.html",
                controller: "MicrocapController"
            }
        }
    })
    .state('microcap.index', {
        url: '/',
        templateUrl: "templates/microcap/index.html",
        controller: "microcap#index"
    })
    .state('microcap.show', {
        url: '/:id',
        templateUrl: "templates/microcap/show.html",
        controller: "microcap#show"
    })
});