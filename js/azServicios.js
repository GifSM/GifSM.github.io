function mostrarOcultarImagen(imgId){
    var imagen = document.getElementById(imgId);
    if(imagen.style.display === "none"){
        imagen.style.display = "block";
    } else {
        imagen.style.display = "none";
    }
}
