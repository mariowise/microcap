angular.module('myApp.controllers.index', ["uiGmapgoogle-maps"])

.controller('index#index', ['$scope', function ($scope) {
	console.log("index#index running")

	$scope.testing = "The Testing Text"
	$scope.map = { center: { latitude: -39.8128564, longitude: -73.2469609 }, zoom: 14 };
	$scope.courses = [
		{
			title: "Curso de Inglés",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui mollitia, ab modi ?",
			date: "01/07/2016",
			labels: ["Inglés", "Curso Municipal"],
			image_url: "img/user.jpg",
			user: {
				username: "mariowise"
			},
			marker:{
				id: 0,
				coords: {
					latitude: -39.8128564,
					longitude: -73.2469609
				},
				options: { draggable: false},
			}
		},
		{
			title: "Taller de carpintería",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui mollitia, ab modi ?",
			date: "01/07/2016",
			labels: ["Técnico"],
			image_url: "img/user.jpg",
			user: {
				username: "mariowise"
			},
			marker:{
				id: 1,
				coords: {
					latitude: -39.81647017616702,
					longitude: -73.24259150120243
				},
				options: { draggable: false },
			}
		},
		{
			title: "Curso de computación",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui mollitia, ab modi ?",
			date: "01/07/2016",
			labels: ["Computación", "Informática"],
			image_url: "img/user.jpg",
			user: {
				username: "mariowise"
			},
			marker:{
				id: 2,
				coords: {
					latitude: -39.8134016,
					longitude: -73.2446403
				},
				options: { draggable: false },
			}
		},
		{
			title: "Taller de emprendimiento",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui mollitia, ab modi ?",
			date: "01/07/2016",
			labels: ["Emprendimiento"],
			image_url: "img/user.jpg",
			user: {
				username: "mariowise"
			},
			marker:{
				id: 3,
				coords: {
					latitude: -39.8106266,
					longitude: -73.2534791
				},
				options: { draggable: false },
			}
		},
		{
			title: "Taller de cocina chilena",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui mollitia, ab modi ?",
			date: "01/07/2016",
			labels: ["Cocina", "Curso Municipal"],
			image_url: "img/user.jpg",
			user: {
				username: "mariowise"
			},
			marker:{
				id: 4,
				coords: {
					latitude: -39.8178808,
					longitude: -73.2575685
				},
				options: { draggable: false },
			}
		}
	]
}])


