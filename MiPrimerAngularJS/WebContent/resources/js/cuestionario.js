var cuestionario = angular.module('cuestionario', []);

cuestionario.controller('contCuestionario', function($scope) {

	$scope.respuestasValidas = 0;
	$scope.estadoUsuario = ""
	
	$scope.preguntas = [
	                    {
						id : 1,
						texto : "cual es la capital de colombia?",
						respuestaValida : 1,
						respuesta : null,
						estado : "",
						respuestas : [ 
			               {id : 1, texto : "Colombia"},
			               {id : 2, texto : "Lina"},
			               {id : 3, texto : "Panama"}
		               ]
					},
					{
						id : 2,
						texto : "cual es la capital de Perú?",
						respuestaValida : 2,
						respuesta : null,
						estado : "",
						respuestas : [
						          {id : 1, texto : "Colombia"},
						          {id : 2, texto : "Lina"},
						          {id : 3, texto : "Panama"}
						 ]
						}, {
								id : 3,
								texto : "cual es la capital de Panamá?",
								respuestaValida : 3,
								respuesta : null,
								estado : "",
								respuestas : [
								    {id : 1, texto : "Lina"},
								    {id : 2, texto : "Colombia"},
								    {id : 3, texto : "Panama"}
								 ]
							}];

	$scope.validar = function(pregunta) {
		if (pregunta.respuestaValida == pregunta.respuesta) {
			pregunta.estado = "ok";
			$scope.respuestasValidas++;
		} else {
			if(pregunta.estado == "ok" && $scope.respuestasValidas > 0){
				$scope.respuestasValidas--;
			}
			pregunta.estado = "error";
		}
		estadoUsuario();
	};
	
	function estadoUsuario() {
		var promedioRespuestas = ($scope.respuestasValidas /$scope.preguntas.length)* 100;
		if(promedioRespuestas ==0){
			$scope.estadoUsuario = "loser";
		}else if(promedioRespuestas == 100){
			$scope.estadoUsuario = "guru";
		}else{
			$scope.estadoUsuario = "poor";
		}
		
	}
	
});
