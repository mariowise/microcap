angular.module('myApp.services.microcap', [])

.factory('Microcap', function () {
	var db = [
		{
			id: 1,
			title: "Curso de Matemáticas PSU",
			description: "Curso para fortalecer los conocimientos de PSU generales",
			date: "20/08/2016",
			labels: ["PSU"],
			image_url: "img/diegoj.jpg",
			tarifa: "15.000 pesos por clase, maximo de 5 personas",
			hora:"Despues de las 7pm",
			user: {
				username: "Diego Jaume",
				score: 1
			}
		},
		{
			id: 2,
			title: "Taller de carpintería",
			description: "Hagalo usted mismo, carpintería en el hogar (Organizado por Muebles Lopez.)",
			date: "02/07/2016",
			labels: ["Técnico"],
			image_url: "https://pbs.twimg.com/profile_images/632607891703382016/-lL_bc1L_400x400.jpg",
			tarifa: "15.000 pesos por clase, maximo de 5 personas",
			hora:"Despues de las 7pm",
			user: {
				username: "Mario Lopez L.",
				score: 4
			}
		},
		{
			id: 3,
			title: "Curso de Redes sociales",
			description: "Nunca es tarde para aprender redes sociales, inscríbete en este curso básico",
			date: "03/07/2016",
			labels: ["Computación", "Informática", "Twitter"],
			image_url: "https://pbs.twimg.com/profile_images/622875213475250177/8JIs8AYU_400x400.png",
			tarifa: "15.000 pesos por clase, maximo de 5 personas",
			hora:"Despues de las 7pm",
			user: {
				username: "Fernando Rodríguez",
				score: 5
			}
		},
		{
			id: 4,
			title: "Taller de Programación en Rails",
			description: "Curso para profundizar sobre el framework Ruby on Rails Empresarial",
			date: "08/09/2016",
			labels: ["Cine"],
			image_url: "img/mariom.jpg",
			tarifa: "15.000 pesos por clase, maximo de 5 personas",
			hora:"Despues de las 7pm",
			user: {
				username: "Mario Muñoz",
				score: 5
			}
		},
		{
			id: 5,
			title: "Taller de Teatro",
			description: "Taller para iniciarse en el mundo del teatro",
			date: "22/08/2016",
			labels: ["Teatro"],
			image_url: "img/rai.jpg",
			tarifa: "15.000 pesos por clase, maximo de 5 personas",
			hora:"Despues de las 7pm",
			user: {
				username: "Raimundo Fernandez",
				score: 3
			}
		},
		{
			id: 6,
			title: "Taller de emprendimiento",
			description: "Taller que trata los temas fundamentales para iniciar un emprendimiento",
			date: "03/07/2016",
			labels: ["Emprendimiento"],
			image_url: "img/diegob.jpg",
			tarifa: "15.000 pesos por clase, maximo de 5 personas",
			hora:"Despues de las 7pm",
			user: {
				username: "Diego Berrios",
				score: 3
			}
		},
		{
			id: 7,
			title: "Curso de Lenguaje",
			description: "Curso enfocado al uso de sinónimos",
			date: "15/08/2016",
			labels: ["Lenguaje"],
			image_url: "img/diegoj.jpg",
			tarifa: "15.000 pesos por clase, maximo de 5 personas",
			hora:"Despues de las 7pm",
			user: {
				username: "Diego Jaume",
				score: 0
			}
		},
		{
			id: 8,
			title: "Curso de Inglés",
			description: "Curso para aprender inglés básico gratuito",
			date: "01/07/2016",
			labels: ["Inglés", "Curso Públicos"],
			image_url: "img/danilo.png",
			tarifa: "-",
			hora:"Despues de las 7pm",
			user: {
				username: "Danilo Aburto",
				score: 2
			}
		},
		{
			id: 9,
			title: "Taller de cocina chilena",
			description: "Aquí podras conocer las distintas recetas mas ricas de la cocina chilena",
			date: "07/08/2016",
			labels: ["Cocina", "Curso Públicos"],
			image_url: "img/gab.jpg",
			tarifa: "15.000 pesos por clase, maximo de 5 personas",
			hora:"Despues de las 7pm",
			user: {
				username: "Gabriela León",
				score: 3
			}
		},
		{
			id: 10,
			title: "Taller de Mosaicos",
			description: "Taller enfocado al aprendizaje y uso de mosaicos",
			date: "23/08/2016",
			labels: ["Arte"],
			image_url: "img/gab.jpg",
			tarifa: "15.000 pesos por clase, maximo de 5 personas",
			hora:"Despues de las 7pm",
			user: {
				username: "Gabriela León",
				score: 2
			}
		},
		{
			id: 11,
			title: "Taller de Cine",
			description: "Curso para conocer mas sobre el cine de la actualidad",
			date: "26/08/2016",
			labels: ["Cine"],
			image_url: "img/mariom.jpg",
			tarifa: "15.000 pesos por clase, maximo de 5 personas",
			hora:"Despues de las 7pm",
			user: {
				username: "Mario Muñoz",
				score: 5
			}
		},
		{
			id: 12,
			title: "Taller de tenis de mesa",
			description: "Curso para iniciarse en el tenis de mesa",
			date: "03/09/2016",
			labels: ["Cine"],
			image_url: "img/diegob.jpg",
			tarifa: "15.000 pesos por clase, maximo de 5 personas",
			hora:"Despues de las 7pm",
			user: {
				username: "Diego Berrios",
				score: 4
			}
		},
		{
			id: 13,
			title: "Taller de Ajedrez",
			description: "Curso para profundizar en los movimientos de ataque del Ajedrez",
			date: "04/09/2016",
			labels: ["Juegos"],
			image_url: "img/danilo.png",
			tarifa: "15.000 pesos por clase, maximo de 5 personas",
			hora:"Despues de las 7pm",
			user: {
				username: "Danilo Aburto",
				score: 3
			}
		},
		{
			id: 14,
			title: "Curso de Matemáticas",
			description: "Curso para aprender fracciones desde cero",
			date: "10/08/2016",
			labels: ["Matemáticas"],
			image_url: "img/gonzalo.jpg",
			tarifa: "15.000 pesos por clase, maximo de 5 personas",
			hora:"Despues de las 7pm",
			user: {
				username: "Gonzalo Barra",
				score: 4
			}
		},
		{
			id: 15,
			title: "Taller de Programación en C#",
			description: "Curso para profundizar sobre C#",
			date: "13/09/2016",
			labels: ["Computación"],
			image_url: "img/daniel.jpg",
			tarifa: "15.000 pesos por clase, maximo de 5 personas",
			hora:"Despues de las 7pm",
			user: {
				username: "Daniel Quinteros",
				score: 2
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