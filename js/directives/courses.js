angular.module('myApp.directives.courses', [])

.directive('coursePill', function () {
	return {
		scope: {
			course: '='
		}
		, templateUrl: "templates/shared/course-pill.html"
		, link: function (scope, element, attrs) {
			console.log("coursePill running")
		}
	}
})