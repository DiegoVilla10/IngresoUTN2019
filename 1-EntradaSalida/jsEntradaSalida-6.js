/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
     var uno = document.getElementById("numeroUno").value;

     var dos = document.getElementById("numeroDos").value;

     var total = parseInt(uno) + parseInt(dos);

     alert("La suma es " + total);

}

