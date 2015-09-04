angular.module('myApp.controllers.index', [])

.controller('index#index', ['$scope', function ($scope) {
	console.log("index#index running")

	$scope.testing = "The Testing Text"

}])


