(function () {

'use strict';

angular.module('DIApp',[]).controller('DIController',DIController);

function DIController($scope) {
	$scope.name = "Leonardo";
	console.log("Lula 2022");
}
})();

// Hierarchy: module("app")/ng.app = "app" -> controller("control",[])/ng-controller = "control" -> $scope.something/ng.model = "something"