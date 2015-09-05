angular.module('myApp.controllers.index', [])

.controller('index#index', ['$scope', '$state', 'Microcap', function ($scope, $state, Microcap) {
	$scope.courses = Microcap.all()

	$scope.search = function () {
		$state.go('microcap.index')
	}
}])


