function vistaPrevia(){
 var mensaje = document.getElementById("contenido").value;
 document.getElementById("vista").innerHTML = mensaje
}

function textoGrande(){
 document.getElementById("vista").style.fontSize = "50px";
}
function cambioColorTexto(){
 var pedirColorHex = prompt("Elige un color de fuente : ");
 pedirColorHex = "#" + pedirColorHex;
 document.getElementById("vista").style.color = pedirColorHex;
}