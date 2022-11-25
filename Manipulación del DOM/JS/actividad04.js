/***************************************************************************
 * 4.1.	Al clicar sobre  #addText se modifica el texto de #addText por el
 * introducido por el usuario en un input.
 */
const addText = document.querySelector("#addTextButton");
let domNodesAdd = document.querySelector("#domNodes");

addText.addEventListener("click", () => {
    //Obtenemos los datos del input
    let newText = document.querySelector("#addTextInput").value;

    //Obtenemos el elemento y cambiamos su texto
    let divText = document.querySelector("#addText");

    divText.innerHTML = newText;
});

/***************************************************************************
 * 4.2.	Al clicar sobre  #setColor  se modifica el color del botón
 * de #setColor por el introducido por el usuario en un input.
 */
const setColor = document.querySelector("#setColorButton");

setColor.addEventListener("click", () => {
    //Obtenemos los datos del input
    let newColor = document.querySelector("#setColorInput").value;

    //Obtenemos el elemento y cambiamos su color
    let divColor = document.querySelector("#setColor");

    divColor.style.backgroundColor = newColor;
});

/***************************************************************************
 * 4.3.	Al clicar sobre  #addDiv  se crea un nuevo div, dentro de
 * le sección #domNodes, con el texto introducido por el usuario
 * en el input.
 * El nuevo DIV será de la clase .addDiv
 */
const addDiv = document.querySelector("#addDivButton");

addDiv.addEventListener("click", () => {
    //Obtenemos los datos del input
    let newDivText = document.querySelector("#addDivInput").value;

    //Creamos el div y le asignamos las propiedades
    let newDiv = document.createElement("div");
    newDiv.className = "addDiv";
    newDiv.innerHTML = newDivText;

    //añadimos el elemento a #domNodes
    domNodesAdd.appendChild(newDiv);
});

/***************************************************************************
 * 4.4.	Al clicar sobre  #addSpan  se crea un nuevo Span, dentro de
 * le sección #domNodes, con el texto introducido por el usuario
 * en el Span.
 * El nuevo Span será de la clase .addSpan
 */
const addSpan = document.querySelector("#addSpanButton");

addSpan.addEventListener("click", () => {
    //Obtenemos los datos del input
    let newSpanText = document.querySelector("#addSpanInput").value;

    //Creamos el Span y le asignamos las propiedades
    let newSpan = document.createElement("span");
    newSpan.className = "addSpan";
    newSpan.innerHTML = newSpanText;

    //añadimos el elemento a #domNodes
    domNodesAdd.appendChild(newSpan);
});

/*************************************************************************
 * 4.5.	Al clicar sobre  #setContentPrev  se crea un nuevo div, dentro de
 * le sección #domNodes, div con el texto ‘setContentPrev’ y
 * de la clase .setContentPrev
 */

//Seleccionamos los elementos
const setContentPrev = document.querySelector("#setContentPrev");
let createdDiv = document.querySelectorAll(".setContentPrev");

//Al clicar, abrirá una función
setContentPrev.addEventListener("click", () => {
    //Creamos el div y le asignamos las propiedades
    let newSetContentPrev = document.createElement("div");

    newSetContentPrev.className = "setContentPrev";
    newSetContentPrev.innerHTML = "SET CONTENT PREV";

    //Añadimos el nuevo div a la sección
    domNodesAdd.appendChild(newSetContentPrev);

    //Si el nodo hermano anterior es #text (el título, lanzamos un mensaje de error)
    //Así nos aseguramos de que el título no se borre, y que no haya error al intertar
    //eliminar un elemento anterior si no lo hay
    //Si no lo es, cambiamos el valor del elemento hermano
    if (newSetContentPrev.previousSibling.nodeName != "#text") {
        newSetContentPrev.addEventListener("click", (e) => {
            //lanzamos un prompt para recoger los datos de ususario
            let newValue = window.prompt(
                "Introduce un texto para cambiar el elemento anterior"
            );
            newSetContentPrev.previousSibling.innerHTML = newValue;
        });
    } else {
        newSetContentPrev.setAttribute("data-bs-toggle", "modal");
        newSetContentPrev.setAttribute("data-bs-target", "#ventanaModal5error");
    }
});

/*************************************************************************
 * 4.6.	Al clicar sobre  #delPrevNode   se crea un nuevo Span, dentro de
 * le sección #domNodes, con el texto Remove Preview yde la clase .delPrevNode
 * y se añade dentro de #domNodes.
 */

const delPrevNode = document.querySelector("#delPrevNode");

delPrevNode.addEventListener("click", () => {
    //Creamos el div y le asignamos las propiedades
    let newdelPrevNode = document.createElement("div");
    newdelPrevNode.className = "delPrevNode";
    newdelPrevNode.innerHTML = "REMOVE PREV";

    //Añadimos el nuevo div a la sección
    domNodesAdd.appendChild(newdelPrevNode);

    //Al clicarlo, lanzaremos la función
    newdelPrevNode.addEventListener("click", (e) => {
        //Si el id del elemento hermano anterio es #hgroup
        //Lanzamos un mensaje, ya que hgroup es el título (que no queremos borrar)
        //y después va el primer elemento, por lo que no tendría elemento anterior.
        if (newdelPrevNode.previousElementSibling.id == "hgroup") {
            var myModal = new bootstrap.Modal(
                document.getElementById("ventanaModal6error")
            );
            myModal.show();
        } else {
            // newdelPrevNode.addEventListener("click", (e) => {
            newdelPrevNode.previousSibling.remove();
        }
    });
});

/********************************************************************************************
 *  4.7. Al clicar sobre  #delNextNode se crea un DIV con el texto ‘Remove Next’, de la clase .delNextNode
 * y se añada dentro de #domNodes.
 * Al clicar encima el DIV creado se llama a una función que compruebe si hay un nodo elemento
 * después de él y en tal caso lo borra.
 */

const delNextNode = document.querySelector("#delNextNode");

delNextNode.addEventListener("click", () => {
    //Creamos el div y le asignamos las propiedades
    let newdelNextNode = document.createElement("div");
    newdelNextNode.className = "delNextNode";
    newdelNextNode.innerHTML = "REMOVE NEXT";

    domNodesAdd.appendChild(newdelNextNode);

    // if (newdelNextNode.previousElementSibling.id == "hgroup") {
    //     newdelNextNode.setAttribute("data-bs-toggle", "modal");
    //     newdelNextNode.setAttribute("data-bs-target", "#ventanaModal6error");
    // }
    newdelNextNode.addEventListener("click", (e) => {
        if (newdelNextNode.nextSibling == null) {
            var myModal = new bootstrap.Modal(
                document.getElementById("ventanaModal7error"),
                {}
            );
            myModal.show();
        } else {
            // newdelNextNode.addEventListener("click", (e) => {
            newdelNextNode.nextElementSibling.remove();
        }
    });
});

/********************************************************************************************
 *  4.8. Al clicar sobre  #addAttr se añade (o sustituye si ya existe) al elemento
 * en la posición indicada dentro de #domNodes el atributo con el valor indicado.
 * Si no existe ningún elemento en esa posición se muestra un mensaje al usuario
 */

const addAttr = document.querySelector("#addAttrButton");
let allSections = domNodesAdd.children; //array

addAttr.addEventListener("click", () => {
    let posicion = document.querySelector("#addAttrNum").value;
    let atributo = document.querySelector("#addAttrNombre").value;
    let valor = document.querySelector("#addAttrValor").value;

    try {
        if (
            posicion >= 0 &&
            posicion < allSections.length &&
            atributo != "" &&
            valor != ""
        ) {
            let changingSection = allSections[posicion];
            changingSection.setAttribute(atributo, valor);
        } else {
            var myModal = new bootstrap.Modal(
                document.getElementById("ventanaModal9error"),
                {}
            );
            myModal.show();
        }
    } catch (error) {
        var myModal = new bootstrap.Modal(
            document.getElementById("ventanaModal9error"),
            {}
        );
        myModal.show();
    }
});

/********************************************************************************************
 *  4.9. Al clicar sobre  #delAllType  pide al usuario un tipo de dato (SPAN, DIV...) y
 * se elimina de #domNodes todos aquellos elementos de ese tipo (si es que existe alguno).
 */

const delAllType = document.querySelector("#delAllTypeButton");

delAllType.addEventListener("click", () => {
    //Cogemos los datos introducidos por el usuario y los buscamos en #domNodes
    let delType = document.querySelector("#delAllTypeInput").value;

    let domNodesAdd = document.querySelector("#domNodes");

    //Comprobamos que #domNodes tenga nodos hijos,
    if (domNodesAdd.children.length > 0) {
        let allType = domNodesAdd.getElementsByTagName(delType);

        //Si el array obtenido es mayor a 0, borramos los elementos, usando un for
        if (allType.length > 0) {
            for (let i = allType.length - 1; i >= 0; i--) {
                allType[i].remove();
            }
        } else {
            var myModal = new bootstrap.Modal(
                document.getElementById("ventanaModal9error")
            );
            myModal.show();
        }
    }
});
