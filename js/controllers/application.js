angular.module('myApp.controllers.application', [])

.controller('ApplicationController', ['$scope', function ($scope) {
	console.log("ApplicationController running")

	$('.nav > li').removeClass('active')
	$('#menu-inicio').addClass('active')
}])