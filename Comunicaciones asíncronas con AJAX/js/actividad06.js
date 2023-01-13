// Obtenems los elementos del html
const inputN1= document.querySelector("#inputN1");
const inputN2= document.querySelector("#inputN2");
const inputN3= document.querySelector("#inputN3");
const inputN4= document.querySelector("#inputN4");

const inputC1= document.querySelector("#inputC1");
const inputC2= document.querySelector("#inputC2");
const inputC3= document.querySelector("#inputC3");
const inputC4= document.querySelector("#inputC4");

const btnSaveCombi = document.querySelector("#btnSaveCombi");
const btnCompareCombi = document.querySelector("#btnCompareCombi");

const checkCombiValues= document.querySelector("#checkCombiValues");
const checkCompareCombi= document.querySelector("#checkCompareCombi");



/**3. Al clicar en el botón GUARDAR COMBINACION envía una petición al servidor con el API 
 * XMLHttpRequest pasando la combinación formada por los 4 números escritos en los inputs.  
 */

const saveCombiValues = () => {
    //Obtenemos el valor de los inputs
    let combiValue = inputN1.value
                    + inputN2.value
                    + inputN3.value
                    + inputN4.value;
    
    //Declaramos el objeto XMLHttpRequest
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "./php/checkCombiValues.php?combi="+combiValue, true);
    //Establecemos el header de la petición
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //asigamos una función encargada de gestioner los cambios
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4){
            console.log("respuesta recibida!");
            if(xmlHttp.status == 200) {
                //Obtememos el array clientes en un JSON
                let textoRespuesta = xmlHttp.responseText;
                //Parseamos el JSON en array
                let infoPalabra = JSON.parse(textoRespuesta);
                let valido = infoPalabra.valido;
                //mostramos el mensaje al usuario
                document.getElementById("checkCombiValues").innerHTML = valido;
            }
        }
        
    }
    xmlHttp.send();
}


/**4.Escribir un valor en un input del apartado GUARDAR COMBINACION envía una petición al 
 * servidor con el API XMLHttpRequest pasando como mínimo el valor escrito.  
 */

const checkValueCombi = (numInput) => {
    //Obtenemos el valor del input
    let digit_combi = document.getElementById("inputN"+numInput).value;
    //Declaramos un objeto XMLHttpRequest
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "./php/checkValueCombi.php?digit_combi="+digit_combi+"&n="+numInput, true);
    //Establecemos el header de la petición
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //asigamos una función encargada de gestioner los cambios
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4){
            console.log("respuesta recibida!");
            if(xmlHttp.status == 200) {
                //Obtememos el array clientes en un JSON
                let textoRespuesta = xmlHttp.responseText;
                //Parseamos el JSON en array
                let infoPalabra = JSON.parse(textoRespuesta);
                let valido = infoPalabra.valido;
                let numInput = infoPalabra.n;
                //mostramos el mensaje al usuario
                document.getElementById("inputN"+numInput).nextElementSibling.innerHTML = valido;
            }
        }
        
    }
    xmlHttp.send();
}


/**4.Escribir un valor en un input del apartado GUARDAR COMBINACION envía una petición al 
 * servidor con el API XMLHttpRequest pasando como mínimo el valor escrito.  
 */

const compareValueCombi = (numInput) => {
    let digit_combi = document.getElementById("inputC"+numInput).value;

    let configFetch = {
        method: "POST",
        body: "digit_combi=" + digit_combi+"&numInput=" + numInput,
        headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
    }

    let promesa = fetch("./php/compareValueCombi.php", configFetch);
    promesa.then(
        function(response) {
            if(response.ok) {
                console.log("Respueste OK");
            }
            response.json().then(
                function (objetoJSON){
                    let valido = objetoJSON.valido;
                    let numInput = objetoJSON.n;
                    document.getElementById("inputC"+numInput).nextElementSibling.innerHTML = valido;
                }
            )
        }
    ).catch(function(error) {
        console.log("Error con la petición" + error.message);
    })
}

/**5.Al clicar en el botón CHECK COMBINACION envía una petición al servidor con el API 
 * Fetch pasando la combinación formada por los 4 números escritos en los inputs.  
 */

const compareCombi = () => {
    //Obtenemos el valor de los inputs
    let send_combi = inputC1.value
                    + inputC2.value
                    + inputC3.value
                    + inputC4.value;
    let configFetch = {
        method: "POST",
        body: "send_combi=" + send_combi,
        headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
    }
    let promesa = fetch("./php/compareCombi.php", configFetch);
    promesa.then(
        function(response){
            //Si se ha realizado correctamente, mostramos un mensaje se éxito
            if(response.ok){
                console.log("Respueste OK");
            }
            response.json().then(
                function (objetoJSON){
                    let valido = objetoJSON.valido;
                    checkCompareCombi.innerHTML = valido;
                }
            )
        }
    ).catch(function(error) {
        console.log("Error con la petición" + error.message);
    })
}


//Añadimos los event listeners
btnSaveCombi.addEventListener("click", saveCombiValues);
btnCompareCombi.addEventListener("click", compareCombi);


/**¿? 
 * Al añadir event listener a los inputs, no funciona, 
 * aparece directamente la opción de dígito inválido al cargar la página
 * no entiendo muy bien por qué pasa eso.
 * Para solucionarlo he puesto directamente el evento en el html
*/
// inputN1.addEventListener("keyup", checkValueCombi(1));
// inputN2.addEventListener("keyup", checkValueCombi(2));
// inputN3.addEventListener("keyup", checkValueCombi(3));
// inputN4.addEventListener("keyup", checkValueCombi(4));

// inputC1.addEventListener("keyup", compareValueCombi(1));
// inputC2.addEventListener("keyup", compareValueCombi(2));
// inputC3.addEventListener("keyup", compareValueCombi(3));
// inputC4.addEventListener("keyup", compareValueCombi(4));