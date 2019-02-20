/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var precio = 35;
     var descuento;
     var precioFin;
     var lampara = parseInt(document.getElementById("Cantidad").value);
     var marca = document.getElementById("Marca").value
     var iibb;
     var totIibb


     if (lampara >= 6) {
         
        descuento = precio * 0.5;
        precioFin = precio * lampara - descuento;

        document.getElementById("precioDescuento").value = precioFin;

        alert("Total a pagar $" + precioFin);
        
     }
     else if (lampara == 5 & marca == "ArgentinaLuz") {

        descuento = precio * 0.4;
        precioFin = precio * lampara - descuento;

        document.getElementById("precioDescuento").value = precioFin;

        alert("Total a pagar $" + precioFin);
     }
     else if (lampara == 5) {

        descuento = precio * 0.3;
        precioFin = precio * lampara - descuento;

        document.getElementById("precioDescuento").value = precioFin;

        alert("Total a pagar $" + precioFin);
     }
     else if (lampara == 4 & marca == "ArgentinaLuz" || marca == "FelipeLamparas") {

        descuento = precio * 0.25;
        precioFin = precio * lampara - descuento;

        document.getElementById("precioDescuento").value = precioFin;

        alert("Total a pagar $" + precioFin);
     }
     else if (lampara == 4) {

        descuento = precio * 0.2;
        precioFin = precio * lampara - descuento;

        document.getElementById("precioDescuento").value = precioFin;

        alert("Total a pagar $" + precioFin);
     }
     else if (lampara == 3 & marca == "ArgentinaLuz") {

        descuento = precio * 0.15;
        precioFin = precio * lampara - descuento;

        document.getElementById("precioDescuento").value = precioFin;

        alert("Total a pagar $" + precioFin);
     }
     else if (lampara == 3 & marca == "FelipeLamparas") {

        descuento = precio * 0.10;
        precioFin = precio * lampara - descuento;

        document.getElementById("precioDescuento").value = precioFin;

        alert("Total a pagar $" + precioFin);
     }
     else if (lampara == 3) {

        descuento = precio * 0.05;
        precioFin = precio * lampara - descuento;

        document.getElementById("precioDescuento").value = precioFin;

        alert("Total a pagar $" + precioFin);
     }
     else{

        descuento = precio * 0.0;
        precioFin = precio * lampara - descuento;

        document.getElementById("precioDescuento").value = precioFin;

        alert("Total a pagar $" + precioFin);
     }
     if (precioFin >= 120) {

        iibb = precioFin * 0.1
        totIibb = precioFin + iibb

        document.getElementById("precioDescuento").value = precioFin;

        alert(" y su IIBB es $" + iibb);
     }
}
