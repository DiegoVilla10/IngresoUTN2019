/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

    var largo;
    var ancho;
    var perimetro;
    var alambre;

    largo = parseFloat(document.getElementById("Largo").value);
    ancho = parseFloat(document.getElementById("Ancho").value);

    perimetro = (largo + ancho) * 2;

    alambre = perimetro * 3;

    alert("Se necesitan " + alambre + "m de alambre");

}
function Circulo () 
{
    var diametro
    var radio;
    var alambre;

    radio = parseInt(document.getElementById("Radio").value);

    diametro = radio * 2 * Math.PI;

    alambre = diametro * 3;

    alert("Se necesitan " + alambre.toFixed(2) + "m de alambre");
}
function Materiales () 
{
    //Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, 
    //debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas del terreno rectangular.
	var largo;
    var ancho;
    var cemento;
    var cal;
    var superficie;

    largo = parseFloat(document.getElementById("Largo").value);
    ancho = parseFloat(document.getElementById("Ancho").value);

    superficie = largo * ancho
    cemento = superficie * 2 ;
    cal = (largo * ancho) * 3

    alert("Se necesitan " + cemento + " bolsas de cemento y " + cal + " de cal");
}