angular.module('myApp.controllers.index', ["uiGmapgoogle-maps"])

.controller('index#index', ['$scope', 'Microcap', function ($scope, Microcap) {
	console.log("index#index running")

	$scope.testing = "The Testing Text"
	$scope.map = { center: { latitude: -39.8128564, longitude: -73.2469609 }, zoom: 14 };
	$scope.markers = [
		{
			id: 0,
			coords: {
				latitude: -39.8128564,
				longitude: -73.2469609
			},
			options: { draggable: false },
		},
		{
			id: 1,
			coords: {
				latitude: -39.81647017616702,
				longitude: -73.24259150120243
			},
			options: { draggable: false },
		}
	]
	$scope.courses = Microcap.all()
}])


