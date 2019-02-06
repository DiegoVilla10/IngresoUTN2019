/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var uno = document.getElementById("numeroDividendo").value;
    
    var dos = document.getElementById("numeroDivisor").value;

    var res = uno%dos;

    paraseInt(uno) + paraseInt(dos);

    alert(res);
}
