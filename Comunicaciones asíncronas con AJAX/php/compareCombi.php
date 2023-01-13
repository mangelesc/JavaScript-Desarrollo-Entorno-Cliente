<?php
/**5.Al clicar en el botón CHECK COMBINACION envía una petición al servidor con el API Fetch pasando la combinación formada por los 4 números escritos en los inputs. 
 * 5.1.El servidor ha de comprobar si son iguales a la combinación guardada.
 * 5.2.Si la combinación es igual, retorna al cliente un mensaje indicando que se ha guardado el valor. 
 * 5.3.Si la combinación no es igual, retorna al cliente un mensaje indicando que no se ha acertado la combinación.
 * 5.4.Ambos mensajes se muestran al usuario.
 */

// Iniciamos sesion
session_start();

// Obtenemos las dos combinaciones
$saved_combi = $_SESSION["combi"];
$send_combi = $_POST["send_combi"];

// Comparamos si ambas claves son iguales
if ($saved_combi == $send_combi){
    echo json_encode(array("valido" => "Combinación correcta"));
} else {
    echo json_encode(array("valido" => "Ups, combinación errónea"));
}
?>