/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

    var sueldo;
    var res;
    var aum;

    sueldo = parseInt(document.getElementById("sueldo").value);

    aum = parseInt(sueldo * 0.10)

    res = sueldo + aum

    document.getElementById("resultado").value = res

    alert(aum)

}
