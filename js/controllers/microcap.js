angular.module('myApp.controllers.microcap', [])

.controller('microcap#index', function ($scope, Microcap) {
	$scope.courses = Microcap.all()
})

.controller('microcap#show', function ($scope, $scopeParams, Microcap) {
	$scope.course = Microcap.find($scopeParams.id)
})