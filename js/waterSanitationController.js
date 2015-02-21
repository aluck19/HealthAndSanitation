mainApp.controller('waterSanitationController', ['$scope', '$http',
function($scope, $http) {
	var url = "data/waterSanitationData.json";
	$http.get(url).success(function(response) {
		$scope.waters = response;
	});

}]);
