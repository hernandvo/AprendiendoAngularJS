angular.module('myFiltro', []).filter('reverse', function() {
	return function(input) {
		input = input || '';
		var out = "";
		for (var i = 0; i < input.length; i++) {
			out = input.charAt(i) + out;
		}
		return out;
	};
}).controller('Controller', [ '$scope', function($scope) {
	$scope.texto = '';
} ]);