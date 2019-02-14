function Mostrar()
{
//tomo la edad  


var edad;
edad = parseInt(document.getElementById("edad").value);
if( edad < 13){

    alert("Usted es un niño");
}
else if(edad > 17){
    
  alert("Usted es un adulto");
        
}
else{

   	alert("Usted es un adolescente")
}


}//FIN DE LA FUNCIÓN
