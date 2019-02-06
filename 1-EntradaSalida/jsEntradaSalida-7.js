/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var uno = document.getElementById("numeroUno").value;

    var dos = document.getElementById("numeroDos").value;

    var tot = parseInt(uno) + parseInt(dos);

    alert("La suma es " + tot);

}

function restar()
{
	var uno = document.getElementById("numeroUno").value;

    var dos = document.getElementById("numeroDos").value;
    
    var tot = parseInt(uno) - parseInt(dos);

    alert("La resta es " + tot);
}

function multiplicar()
{ 
	var uno = document.getElementById("numeroUno").value;

    var dos = document.getElementById("numeroDos").value;
    
    var tot = parseInt(uno) * parseInt(dos);

    alert("La multiplicacion es " + tot);
}

function dividir()
{
	var uno = document.getElementById("numeroUno").value;

    var dos = document.getElementById("numeroDos").value;
    
    var tot = parseInt(uno) / parseInt(dos);

    alert("La division es " + tot);


}

