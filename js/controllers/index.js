angular.module('myApp.controllers.index', [])

.controller('index#index', ['$scope', function ($scope) {
	console.log("index#index running")

	$scope.courses = [
		{
			title: "Curso de Inglés",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui mollitia, ab modi ?",
			date: "01/07/2016",
			labels: ["Inglés", "Curso Municipal"],
			image_url: "img/user.jpg",
			user: {
				username: "mariowise"
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
			}
		}
	]
}])


