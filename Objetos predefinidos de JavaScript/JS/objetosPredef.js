//-------------------------------------
// ACTIVIDAD 2.2
//-------------------------------------

//Función para añadir las etiquetas <li> y </li> a un texto
function CrearLi(text) {
    return "<li class='list-group-item list-group-item-info'>" + text + "</li>";
}

/* Función para crear dentro de un id una lista HTML desordenada
Para hacerla más funcional, le pasaré los datos por parámetro para que sea reutilizable. 
Pasámos por parámetro el id, 
Usamos Spread syntax para poder añadir un numero variable de elementos <li> a la lista*/
function CrearLista(tipo, id, ...elements) {
    let identificarId = document.getElementById(id);
    let listaDes = document.createElement(tipo);
    listaDes.className = "list-group";
    for (let i in elements) {
        listaDes.innerHTML += CrearLi(elements[i]);
    }
    identificarId.appendChild(listaDes);
}

/*Creamos otra función para crear la lista desordenada con los datos, 
obtenidos de los métidos de los objetos predefinidos JavaScript que nos pide el ejercicio 2*/
function ListaDesordenada() {
    let nuevaLista = CrearLista(
        "ul",
        "listaPropiedades",
        "<b>Valor máximo que JS puede alcanzar: </b>" + Number.MAX_VALUE,
        "<b>Altura total de la pantalla: </b>" + screen.height,
        "<b>Anchura total de la pantalla: </b>" + screen.width,
        "<b>Altura interna de la ventana: </b>" + screen.availHeight,
        "<b>Anchura interna de la ventana: </b>" + screen.availWidth,
        "<b>URL de la web: </b>" + window.location.href,
        "<b>Título de la página web: </b>" + document.title,
        "<b>Valor aleatorio entre 0 y 200: </b>" +
            Math.round(Math.random() * 200 + 1),
        "<b>Fecha actual: </b>" + fechaActual(),
        "<b>Hora actual: </b>" + horaActual()
    );

    return nuevaLista;
}

//Devuelve la fecha actual
function fechaActual() {
    var fecha = new Date();
    return (
        fecha.getDate() +
        "-" +
        (fecha.getMonth() + 1) +
        "-" +
        fecha.getFullYear()
    );
}

//Devuelve la hora actual
function horaActual() {
    var fecha = new Date();
    return fecha.getHours() + ":" + fecha.getMinutes() + "h";
}

//-------------------------------------
// ACTIVIDAD 2.3.1
//-------------------------------------
function AnadirElemento(id, element) {
    document.getElementById(id).innerHTML = element;
}

//-------------------------------------
// ACTIVIDAD 2.4
//-------------------------------------

/* Función para establecer a una cookie un valor 
(ambos pasados por parámetro)*/
function ModificarCookie(nombreCookie, idValor) {
    let valorInput = document.getElementById(idValor).value;
    document.cookie =
        nombreCookie +
        " = " +
        valorInput +
        ";expires=Thu, 2 Aug 2023 20:47:11 UTC;";
}

//-------------------------------------
// ACTIVIDAD 2.5
//-------------------------------------

/*Función que, una vez cargada la web, el valor del input introducido 
por parámetro sea el valor guardado en la cookie también introducida por parámetro.*/
function valorCookie(name) {
    let value = `; ${document.cookie}`;
    let parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
}

function valorInput(idInput, cookie) {
    let valInput = document.getElementById(idInput);
    let valueCookie = valorCookie(cookie);
    valInput.value = valueCookie;
}

//Llamamos a la función
valorInput("url", "url_usuario");

//-------------------------------------
// ACTIVIDAD 2.6
//-------------------------------------

/*Función para abrir una nueva ventana pasada por parámetro, sin barra de menu y con dimensiones 
pasádas por parametos
sin barra de menús y situada en el centro de la pantalla*/
function nuevaVentana(pageURL, w, h) {
    let left = window.screen.width + w;
    let top = window.screen.heigh + h;
    let ventanaNueva = window.open(
        pageURL,
        "",
        "menubar=no, height=" +
            h +
            ", width=" +
            w +
            ", top=" +
            top +
            ", left=" +
            left
    );

    //Pasados 7 segundos, se cierra
    window.setTimeout(function () {
        ventanaNueva.close();
    }, 7000);
}

//hacemos pública la función valorCookie, ya que la necesitamos en otro js
module.export = {
    valorCookie,
};
