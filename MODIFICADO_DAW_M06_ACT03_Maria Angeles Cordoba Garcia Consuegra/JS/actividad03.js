//-------------------------------------
// ACTIVIDAD 2
//-------------------------------------
/* Crea una nueva clase “Extra” para almacenar: el precio y la url de la imagen 
del extra y una función “getHTML()” que al ejecutarse retorne un código HTML 
con la imagen y el precio del extra */

class Extra {
    constructor(price, urlImg) {
        this.price = price;
        this.urlImg = urlImg;
    }

    //usamos Get para crear la función getHTML
    get getHTML() {
        return (
            "<span class='h4 text-muted'> <img class='logo' src = '" +
            this.urlImg +
            "'/>" +
            this.price +
            "  € </span>"
        );
    }
}

//-------------------------------------
// ACTIVIDAD 3
//-------------------------------------
/* Una vez realizada la clase “Extra” deberá ser capaz de validar 
el siguiente código: */
let imgMushroom = "./img/mushroom.png";
let extraMushroom = new Extra(10, imgMushroom);

//-------------------------------------
// ACTIVIDAD 4
//-------------------------------------
/* Crea una clase “Coche” que almacene: el nombre del coche, su velocidad, 
una array vacía de extras,  una función (addExtra) que reciba un extra y 
lo añada a su array y una función (getHTML) que retorne un código HTML con 
los datos del Coche y de los extras*/

class Car {
    //declaramos el constructor de la clase, donde se introduce
    //el nombre y velocidad por parámetro
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
        this.extras = []; //añadimos un array vacio
    }

    addExtra(extra) {
        this.extras.push(extra);
    }

    //Declaramos el getter
    get getHTML() {
        let txt =
            "<span class='h4 text-muted' >" +
            this.name +
            ": " +
            this.speed +
            "km/h [";
        //recorremos el array de extras, y lo añadimos a txt.
        this.extras.forEach((element) => {
            txt += element.getHTML;
        });

        txt += "]</span><br />";

        return txt;
    }
}

//-------------------------------------
// ACTIVIDAD 5
//-------------------------------------
/* Una vez realizada la clase “Coche”, deberá ser capaz de validar el siguiente código:
Mostrando por consola un mensaje parecido a: <span> Carricoche  10km/h 
[<span> <img src='imgs/concha_azul.jpeg'/> 10€</span>]</span><br />”*/

let cocheCarricoche = new Car("Carricoche", 10);
cocheCarricoche.addExtra(extraMushroom);

//-------------------------------------
// ACTIVIDAD 6
//-------------------------------------
/*Crea un array global extrasDisponibles para almacenar todos los extras disponibles 
y añádele el extra creado anteriormente y otro extra. Éste array contendrá los extras 
que se pueden añadir a cualquier coche.*/

//Creamos un array vacio
let availableExtras = [];

//Declaramos un nuevo objeto de la clase extra
let imgStar = "./img/star.png";
let extraStar = new Extra(10, imgStar);

//Declaramos un array global, con los dos objetos de Extra creados
availableExtras.push(extraMushroom);
availableExtras.push(extraStar);

//-------------------------------------
// ACTIVIDAD 7
//-------------------------------------
/* Programa que una vez cargada la web llame a una función mostrarExtras() que 
muestre en el HTML todos los extras que contiene extrasDisponibles.*/

//Declaramos la función
function displayExtras() {
    document.getElementById("listExtras").innerHTML = "";
    document.getElementById("extraIndex").innerHTML = "";
    document.getElementById("removeIndex").innerHTML = "";

    let avExtras = "";

    Object.entries(availableExtras).forEach(([index, element]) => {
        document.getElementById("listExtras").innerHTML += element.getHTML;

        avExtras += "<option value= '" + index + "'>" + index + "</option>";
    });
    document.getElementById("extraIndex").innerHTML = avExtras;
    document.getElementById("removeIndex").innerHTML = avExtras;
}

//-------------------------------------
// ACTIVIDAD 8
//-------------------------------------
/* Crea un array asociativo global de nombre cochesDisponibles para almacenar
todos los coches creados según su nombre  y añádele el coche creado anteriormente.  */

let availableCars = { Carricoche: cocheCarricoche };

//-------------------------------------
// ACTIVIDAD 9
//-------------------------------------
/* Programa que una vez cargada la web llame a una función mostrarCoches() que 
muestre en el HTML todos los coches (con sus extras) que contiene coches disponibles*/

function displayCars() {
    document.getElementById("listCars").innerHTML = "";
    document.getElementById("carIndex").innerHTML = "";

    Object.entries(availableCars).forEach(([key, value]) => {
        document.getElementById("listCars").innerHTML += value.getHTML;
        document.getElementById("carIndex").innerHTML +=
            "<option value= '" + key + "'>" + key + "</option>";
    });
}

//Programamos para que, una vez cargada la web, muestre las funciones anteriores
window.onload = function () {
    displayExtras();
    displayCars();
};

//-------------------------------------
// ACTIVIDAD 10
//-------------------------------------
/*Programa el botón ADD EXTRA  para que añada en extrasDisponibles un nuevo extra con 
el precio indicado y la imagen seleccionada del select y actualice visualmente todos 
los extras disponibles (llama a mostrarExtras() */

function addNewExtra() {
    let img = document.getElementById("imgExtra").value;
    let extraPrice = document.getElementById("extraPrice").value;
    let newExtra = new Extra(extraPrice, img);

    /**
     * CORRECCIÓN
     * Añadimos una comprobación para que el precio del extra sea un
     * número mayor que 0
     */
    if (extraPrice > 0) {
        availableExtras.push(newExtra);
    } else {
    }

    /**
     * CORRECCIÓN:
     * Al añadir un extra, se habilita el  botón para
     * añadir un extra a algún coche
     * (El array availableExtras, no estará vacio)
     */
    document.getElementById("AddExtraButton").disabled = false;

    displayExtras();
}

//-------------------------------------
// ACTIVIDAD 11
//-------------------------------------
/*Pograma el botón BORRAR para que borre de extrasDisponibles el número de extra 
indicado (el número es la posición que ocupa el extra dentro del array de extrasDisponibles)*/

function removeExtra() {
    let extra = document.getElementById("removeIndex").value;
    //Usamos splice para eliminar 1 elemento en la posición "extra"
    availableExtras.splice(extra, 1);

    /**
     * CORRECCIÓN:
     * Al eliminiar un extra, comprobamos que el array
     * availableExtras no esté vacio.
     * Si lo está, deshabilitamos el botón de
     * añadir un extra a algún coche
     * (Se volverá a habilitar al aladir un extra al array)
     */
    if (availableExtras.length <= 0) {
        document.getElementById("AddExtraButton").disabled = true;
    }

    displayExtras();
}

//-------------------------------------
// ACTIVIDAD 12
//-------------------------------------
/*Programa el botón ADD COCHE para que añada a cochesDisponibles un nuevo coche 
con el nombre y la velocidad máxima indicada y actualice visualmente todos los 
coches disponibles (llama a mostrarCoches() )*/

function addCar() {
    let name = document.getElementById("carName").value;
    let speed = document.getElementById("carSpeed").value;

    /**
     * CORRECCIÓN
     * Añadimos una comprobación para que el campo del nombre
     * del coche no esté vacio y que la velocidad introducida por el
     * usuario sea mayor que 0
     */

    if (name != "") {
        if (speed > 0) {
            let newCar = new Car(name, speed);
            availableCars[name] = newCar;
        }
    }

    displayCars();
}

//-------------------------------------
// ACTIVIDAD 13
//-------------------------------------
/*Modifica  mostrarExtras() para que por cada extra se añada un option al select con el 
número de extra , y modifica mostrarCoches() para que por cada coche  se añada un option 
al select con el nombre del coche.*/

//Modificado en cada función

//-------------------------------------
// ACTIVIDAD 14
//-------------------------------------
/*Programa el botón ADD EXTRA COCHE para que añada al coche seleccionado  el número de 
extra seleccionado y actualice visualmente todos los coches disponibles.*/
function addExtraCar() {
    let extraIndex = document.getElementById("extraIndex").value;
    let car = document.getElementById("carIndex").value;
    let extra = availableExtras[extraIndex];
    availableCars[car].addExtra(extra);
    displayCars();
}
