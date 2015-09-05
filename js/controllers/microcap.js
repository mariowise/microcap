angular.module('myApp.controllers.microcap', [])

.controller('MicrocapController', function ($scope) {
	console.log("MicrocapController")

	$('.nav > li').removeClass('active')
	$('#menu-microcaps').addClass('active')
})

.controller('microcap#index', function ($scope, Microcap) {
	console.log("microcap#index")

	$scope.courses = Microcap.all()
})

.controller('microcap#show', function ($scope, $stateParams, Microcap) {
	console.log("microcap#show")

	$scope.course = Microcap.find($stateParams.id)
	console.log($scope.course)
})