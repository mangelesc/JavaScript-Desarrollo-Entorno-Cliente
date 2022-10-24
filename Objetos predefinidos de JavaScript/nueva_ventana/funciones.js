//-------------------------------------
// ACTIVIDAD 2.7
//-------------------------------------

/*Vuelvo a escribir la función valorCookie (creada en objetosPredef), 
porque tengo problemas al intentar importar la función desde el otro js*/
function valorCookie(name) {
    let value = `; ${document.cookie}`;
    let parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
}

/*Función para cargar una URL que sea el valor de una cookie 
introducida por parámetro*/
function CargarEnMismaVentana(nameCookie) {
    const url = valorCookie(nameCookie);
    window.location.assign("http://" + url);
}
