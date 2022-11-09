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
            "<span> <img class='logo' src = '" +
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
console.log(extraMushroom.getHTML);

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
        let txt = "<span>" + this.name + this.speed + "km/h [";
        console.log(this.extras);
        //recorremos el array de extras, y lo añadimos a txt.
        this.extras.forEach((element) => {
            //console.log(element);
            txt += element.getHTML;
        });

        txt += "</span>]</span><br />";

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
console.log(cocheCarricoche.getHTML);

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
console.log(extraStar.getHTML);

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

    Object.entries(availableExtras).forEach(([index, element]) => {
        document.getElementById("listExtras").innerHTML += element.getHTML;
        document.getElementById("extraIndex").innerHTML +=
            "<option value= '" + index + "'>" + index + "</option>";
    });
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
    availableExtras.push(newExtra);
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
    let newCar = new Car(name, speed);
    availableCars[name] = newCar;
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
