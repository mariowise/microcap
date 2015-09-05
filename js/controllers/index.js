angular.module('myApp.controllers.index', ["uiGmapgoogle-maps"])

.controller('index#index', ['$scope', 'Microcap', function ($scope, Microcap) {
	$scope.courses = Microcap.all()
}])


