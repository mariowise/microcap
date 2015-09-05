angular.module('myApp.services.microcap', [])

.factory('Microcap', function () {
	var db = [
		{
			id: 1,
			title: "Curso de Inglés",
			description: "Curso para aprender inglés básico gratuito",
			date: "01/07/2016",
			labels: ["Inglés", "Curso Municipal"],
			image_url: "img/danilo.png",
			user: {
				username: "Danilo Aburto"
			}
		},
		{
			id: 2,
			title: "Taller de carpintería",
			description: "Hagalo usted mismo, carpintería en el hogar",
			date: "02/07/2016",
			labels: ["Técnico"],
			image_url: "img/daniel.jpg",
			user: {
				username: "Daniel Quinteros"
			}
		},
		{
			id: 3,
			title: "Curso de computación",
			description: "Nunca es tarde para aprender computación, inscríbete en este curso básico",
			date: "03/07/2016",
			labels: ["Computación", "Informática"],
			image_url: "img/mariom.jpg",
			user: {
				username: "Mario Muñoz"
			}
		},
		{
			id: 4,
			title: "Taller de emprendimiento",
			description: "Taller que trata los temas fundamentales para iniciar un emprendimiento",
			date: "03/07/2016",
			labels: ["Emprendimiento"],
			image_url: "img/diegob.jpg",
			user: {
				username: "Diego Berrios"
			}
		},
		{
			id: 5,
			title: "Taller de cocina chilena",
			description: "Aquí podras conocer las distintas recetas mas ricas de la cocina chilena",
			date: "07/08/2016",
			labels: ["Cocina", "Curso Municipal"],
			image_url: "img/gab.jpg",
			user: {
				username: "Gabriela León"
			}
		},
		{
			id: 6,
			title: "Curso de Matemáticas",
			description: "Curso para aprender fracciones desde cero",
			date: "10/08/2016",
			labels: ["Matemáticas"],
			image_url: "img/gonzalo.jpg",
			user: {
				username: "Gonzalo Barra"
			}
		},
		{
			id: 7,
			title: "Curso de Lenguaje",
			description: "Curso enfocado al uso de sinónimos",
			date: "15/08/2016",
			labels: ["Lenguaje"],
			image_url: "img/diegoj.jpg",
			user: {
				username: "Diego Jaume"
			}
		},
		{
			id: 8,
			title: "Curso de Matemáticas PSU",
			description: "Curso para fortalecer los conocimientos de PSU generales",
			date: "20/08/2016",
			labels: ["PSU"],
			image_url: "img/diegoj.jpg",
			user: {
				username: "Diego Jaume"
			}
		},
		{
			id: 9,
			title: "Taller de Teatro",
			description: "Taller para iniciarse en el mundo del teatro",
			date: "22/08/2016",
			labels: ["Teatro"],
			image_url: "img/rai.jpg",
			user: {
				username: "Raimundo Fernandez"
			}
		},
		{
			id: 10,
			title: "Taller de Mosaicos",
			description: "Taller enfocado al aprendizaje y uso de mosaicos",
			date: "23/08/2016",
			labels: ["Arte"],
			image_url: "img/gab.jpg",
			user: {
				username: "Gabriela León"
			}
		},
		{
			id: 11,
			title: "Taller de Cine",
			description: "Curso para conocer mas sobre el cine de la actualidad",
			date: "26/08/2016",
			labels: ["Cine"],
			image_url: "img/mariom.jpg",
			user: {
				username: "Mario Muñoz"
			}
		},
		{
			id: 12,
			title: "Taller de tenis de mesa",
			description: "Curso para iniciarse en el tenis de mesa",
			date: "03/09/2016",
			labels: ["Cine"],
			image_url: "img/diegob.jpg",
			user: {
				username: "Diego Berrios"
			}
		},
		{
			id: 13,
			title: "Taller de Ajedrez",
			description: "Curso para profundizar en los movimientos de ataque del Ajedrez",
			date: "04/09/2016",
			labels: ["Juegos"],
			image_url: "img/danilo.png",
			user: {
				username: "Danilo Aburto"
			}
		},
		{
			id: 14,
			title: "Taller de Programación en Rails",
			description: "Curso para profundizar sobre el framework Rails",
			date: "08/09/2016",
			labels: ["Cine"],
			image_url: "img/mariom.jpg",
			user: {
				username: "Mario Muñoz"
			}
		},
		{
			id: 15,
			title: "Taller de Programación en C#",
			description: "Curso para profundizar sobre C#",
			date: "13/09/2016",
			labels: ["Computación"],
			image_url: "img/daniel.jpg",
			user: {
				username: "Daniel Quinteros"
			}
		},
	]

	return {
		all: function () {
			return db
		}
		, find: function (key) {
			var res = null
			db.forEach(function (item) {
				if(item.id === Number(key))
					res = item
			})
			return res
		}
	}
})