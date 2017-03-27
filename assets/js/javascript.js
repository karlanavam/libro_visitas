

function vistaPrevia(){
  var mensaje = document.getElementById("contenido").value;
  document.getElementById("vista").innerHTML = mensaje
}

function textoGrande(){
  document.getElementById("vista").style.fontSize = "4em";
}
function textoMediano(){
  document.getElementById("vista").style.fontSize = "3em";
}
function textoChico(){
  document.getElementById("vista").style.fontSize = "2em";
}

function cambioColorTexto(){
 var pedirColorHex = prompt("Elige un color de fuente : ");
 pedirColorHex = "#" + pedirColorHex;
 document.getElementById("vista").style.color = pedirColorHex;
}

function cambioColorFondo(){
 var pedirColorHex = prompt("dasdsakm");
 pedirColorHex = "#" + pedirColorHex;
 document.getElementById("vista").style.backgroundColor = pedirColorHex;
}

function alineacionIzquierda() {
  var alineacionizq = document.getElementById('vista').style.textAlign = "left";
}
function alineacionCentro() {
  var alineacionCent = document.getElementById('vista').style.textAlign = "center";
}
function alineacionDerecha() {
  var alineacionDer = document.getElementById('vista').style.textAlign = "right";
}

function publicarComentario() {
	var comentarioPublicado = document.getElementById("vista").cloneNode(true);
	comentarioPublicado.removeAttribute("id");

	var nuevosComentarios = document.getElementById("comentariosPublicados");
	espacioComentarios.insertBefore(comentarioPublicado, espacioComentarios.firstChild);

	var lineaSeparadora = document.createElement("hr");
	espacioComentarios.insertBefore(lineaSeparadora, espacioComentarios.firstChild);
	document.getElementById("espacioComentarios").value = "";
}

function cargarImagen(url)
      {
        var imagen = new Image();
        imagen.onload = imagenCargada;
        imagen.src = url;
        return imagen;
      }

/*var image = document.getElementById('image');
function getUrl() {
    var url = prompt('Enter image URL');

    if (url) { // Do string and URL validation here and also for image type
        return url;
    } else {
        return getUrl();
    }
}

image.src = getUrl();*/
