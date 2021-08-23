(function () {

'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
	$scope.name = "Leonardo";
	$scope.sayHello = function () {
		return "Hello Coursera!";
	}
});

})();