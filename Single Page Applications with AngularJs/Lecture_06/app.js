(function () {

'use strict';

angular.module("NameCalculator",[])

.controller("NameCalculatorController", function ($scope){
	$scope.name = "";
	$scope.total_value = 0;
	$scope.displayValue = function(){
		var totalNameValue = calculateString($scope.name); //get the total value
		$scope.total_value = totalNameValue;
}
});


function calculateString(string){
	var StringValue = 0;
	for (var i = 0; i < string.length; i++){
		StringValue += string.charCodeAt(i);
	}

	return StringValue;
}
})();