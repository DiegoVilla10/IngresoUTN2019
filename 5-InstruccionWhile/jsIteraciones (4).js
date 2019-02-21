function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");

while ( numero <= 0 || numero >= 10 || isNaN(numero) ) {
		numero = prompt("Error. Reingrese un nuevo numero entre 0 y 9");
    }

    document.getElementById("Numero").value = numero;
}//FIN DE LA FUNCIÓN