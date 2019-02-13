/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var uno;
    var dos;
    var tres;
    var resultado;

    uno = parseFloat(document.getElementById("PrecioUno").value);

    dos = parseFloat(document.getElementById("PrecioDos").value);

    tres = parseFloat(document.getElementById("PrecioTres").value);

    resultado = uno + dos + tres;

    alert("La Suma es de " + resultado);
}
function Promedio () 
{
	var uno;
    var dos;
    var tres;
    var resultado;

    uno = parseFloat(document.getElementById("PrecioUno").value);

    dos = parseFloat(document.getElementById("PrecioDos").value);

    tres = parseFloat(document.getElementById("PrecioTres").value);

    resultado = (uno + dos + tres) / 3;

    alert("El promedio es de " + resultado);
}
function PrecioFinal () 
{
	var uno;
    var dos;
    var tres;
    var resultado;
    var iva;

    uno = parseFloat(document.getElementById("PrecioUno").value);

    dos = parseFloat(document.getElementById("PrecioDos").value);

    tres = parseFloat(document.getElementById("PrecioTres").value);

    iva = (uno + dos + tres) * 0.21;

    resultado = uno + dos + tres + iva

    alert("El total es " + resultado);
}