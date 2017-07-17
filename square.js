/*
- 9 cuadrados ~ 3 x 3
- 200 px x 200 px cada cuadrado.
- c/u separados 50 px separación.
- cargar la página 5 segundos después, el cuadro del medio dice felicidaes.
- El texto de felicidades debe ser azul.
- El cuadrado color rojo.
*/

(function(){
	
	//setTimeout(functionTimer, 5000);
	setInterval(functionTimer, 5000);
	var classSquare = document.getElementsByClassName("square");

	//presionar el cuadrado.
	for(var i=0;  i<classSquare.length; i++){
		classSquare[i].addEventListener("click", colorSquare);
	}

	console.log("cuadrado");

	//Contador después de 5 segundos
	function functionTimer(){
		document.getElementById("middle").classList.add("red");
		document.getElementById("middle").classList.remove("black");
		console.log('hello');
	}

	function colorSquare(){
		this.classList.add("black");		
		console.log("black");
	}
})(); //Ejecutar así misma debe cerrar y abrir paréntesis
