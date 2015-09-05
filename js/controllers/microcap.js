angular.module('myApp.controllers.microcap', [])

.controller('MicrocapController', function ($scope) {
	console.log("MicrocapController")

	$('.nav > li').removeClass('active')
	$('#menu-microcaps').addClass('active')
})

.controller('microcap#index', function ($scope, Microcap) {
	console.log("microcap#index")

	var courses = Microcap.all()
	$scope.courses = angular.copy(courses)
	$scope.labels = ["Todos"]
	$scope.courses.forEach(function (item) {
		$scope.labels = $scope.labels.concat(item.labels)
	})
	$scope.labels = _.uniq($scope.labels)
	$scope.selectLabel = function (label) {
		if(label == "Todos") {
			$scope.courses = angular.copy(courses)
		} else {
			$scope.courses = _.filter(courses, function (item) { return item.labels.indexOf(label) != -1 })
		}
	}
	setTimeout(
		function() 
		{
			$(".rating").each(function(){
				$(this).raty({ starType: 'i',
					readOnly : true,
					score: $(this).attr("data-score"),
				});
			})
		}, 50);
})

.controller('microcap#show', function ($scope, $stateParams, Microcap) {
	console.log("microcap#show")

	$scope.course = Microcap.find($stateParams.id)
	console.log($scope.course)

	$('.rating').raty({ starType: 'i',
		readOnly : true, 
		score: $scope.course.user.score,
	});
})