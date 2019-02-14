function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var num

	num = parseInt(Math.random(2) * 10) + 1

	if( num >= 9) {

		alert(num + " ¡EXCELENTE!")
	}
	else if( num >= 4){

		alert(num + " ¡APROBÓ!")
	}
	else {

		alert( num + " Vamos, la proxima se puede")
	}

}//FIN DE LA FUNCIÓN