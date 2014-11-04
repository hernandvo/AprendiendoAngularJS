var miAplicacion = angular.module('miAplicacion', []);

miAplicacion.controller('Controlador', [ '$scope', function($scope) {

	$scope.lista = [ {
		texto : 'Prueba 1',
		seleccionado : true
	}, {
		texto : 'Prueba 2',
		seleccionado : false
	} ];

	$scope.agregar = function() {
		if ($scope.texto != null && $scope.texto != '') {
			$scope.lista.push({
				texto : $scope.texto,
				seleccionado : false
			});
			$scope.texto = '';
		}else{
			alert("Debe digitar un valor")
		}
	};

	$scope.eliminar = function() {
		var lista = $scope.lista;
		$scope.lista = [];
		angular.forEach(lista, function(item) {
			if (!item.seleccionado)
				$scope.lista.push(item);
		});
	};
} ]);