angular.module('myApp.services.microcap', [])

.factory('Microcap', function () {
	var db = [
		{
			id: 1,
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
			id: 2,
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
			id: 3,
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
			id: 4,
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
			id: 5,
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

	return {
		all: function () {
			return db
		}
		, find: function (key) {
			var res = null
			db.forEach(function (item) {
				if(item.id === key)
					res = item
			})
			return res
		}
	}
})