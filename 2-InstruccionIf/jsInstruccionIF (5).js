function Mostrar()
{
  
    var edad;
    edad = parseInt(document.getElementById("edad").value);
    if( edad < 13 || edad > 17){
    
        alert("Usted NO es un adolescente");
        
    }
    else {

    	alert("Usted es un adolescente")
    }

}//FIN DE LA FUNCIÓN