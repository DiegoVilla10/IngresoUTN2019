function Mostrar()
{
//tomo el mes 
var mesDelAnio = document.getElementById('mes').value;

alert (mesDelAnio);
	
switch (mesDelAnio) {

    case "Enero":
    alert("Tiene 31 días");
    break;
    case "Febrero":
    alert("Tiene 29 días");
    break;
    case "Marzo":
    alert("Tiene 31 días");
    break;
    case "Abril":
    alert("Tiene 30 días");
    break;
    case "Mayo":
    alert("Tiene 31 días");
    break;
    case "Junio":
    alert("Falta para el invierno");
    break;
	case "Julio":
    case "Agosto":
    alert("Tiene 31 días");
    break;
    case "Septiembre":
    alert("Tiene 30 días");
    break;
    case "Octubre":
    alert("Tiene 31 días");
    break;
    case "Noviembre":
    alert("Tiene 30 días");
    break;
	case "Diciembre":
    alert("Tiene 31 días");
    break;

}


}//FIN DE LA FUNCIÓN