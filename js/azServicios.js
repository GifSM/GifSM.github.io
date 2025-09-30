function mostrarOcultarImagen(imgId){
    var imagen = document.getElementById(imgId);
    if(imagen.style.display === "none"){
        imagen.style.display = "block";
    } else {
        imagen.style.display = "none";
    }
}
function renovarContrato(espacioId,vigencia){
    let palabras= espacioId.split(' ');
    let inmueble= palabras[0];
    let espacio= palabras[1];
    let espacioDesc= '';
    if(espacio.startsWith('S')){ espacioDesc= 'salón'; }
    if(espacio.startsWith('D')){ espacioDesc= 'departamento'; }
    if(espacio.startsWith('L')){ espacioDesc= 'local'; }
    if(espacio.startsWith('E')){ espacioDesc= 'estacionamiento'; }
    let respuesta= confirm('¿Enviar solicitud de renovación de contrato del '+espacioDesc+' '+espacio.substring(1)+'?');
    if(respuesta){
        alert('Por favor ten lista la siguiente información: plazo deseado en meses, pueden ser 6 o 12.');
        mail(espacioId,'Renovación de contrato '+espacioId,'Plazo: 12 meses.');
    }else{ alert(vigencia); }
}
function mail(espacioId,subject,msg){
    var myMailTo= 'mailto:systemklx@gmail.com?cc=lexossoxel@me.com&subject=Gif SM ONLINE: ';
    window.location.href= myMailTo+subject+'&body='+msg+'%0A%0ASaludos!';
}
