'use strict';

angular.module('myApp.view1', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/view1', {
			templateUrl: 'view1/view1.html',
			controller: 'View1Ctrl'
		});
	}])

	.controller('View1Ctrl', ["$http", "$scope", function ($http, $scope) {

		$scope.movies = [];
		$scope.newMovie = {
			title: undefined,
			director: {
				name: undefined
			}
		};
		$scope.addMovie = function () {
			$http.post("http://localhost:8080/api/movies", $scope.newMovie)
				.then(
					function (response) {
						$http.get("http://localhost:8080/api/movies")
							.then(function (response) {
								$scope.movies = response.data;
							}).catch(function (response) {
							alert("Error: " + response.data);
						});
					}).catch(function (response) {
				alert("Error: " + response.data);
			})
		};


	}]);