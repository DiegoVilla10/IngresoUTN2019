/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
	var imp;
    var res;
    var des;

    imp = parseInt(document.getElementById("importe").value);

    des = parseInt(imp * 0.25)

    res = imp - des

    document.getElementById("resultado").value = res
}
