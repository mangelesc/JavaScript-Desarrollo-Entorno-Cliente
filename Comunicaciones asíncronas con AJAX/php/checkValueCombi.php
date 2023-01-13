<?php
/**4.Escribir un valor en un input del apartado GUARDAR COMBINACION envía una petición al servidor 
 * con el API XMLHttpRequest pasando como mínimo el valor escrito. 
 * 4.1.El servidor ha de comprobar si es un valor numérico de un único dígito y positivo. 
 * 4.2.Si el valor es correcto, retorna al cliente un mensaje indicando que el valor es correcto.
 * 4.3.Si el valor no es correcto, retorna al cliente un mensaje indicando que el valor no es correcto.
 * 4.4.Ambos mensajes se muestran al usuario quedando claro a qué input se refiere.
 */
session_start();

$digit_combi = $_GET["digit_combi"];
$n = $_GET["n"];

// Comprobamos si el número introducido es igual al guardado anteriormente.
if (is_numeric($digit_combi) &&  $digit_combi >= 0 && $digit_combi <= 9){
    echo json_encode(array("valido" => "✔", "n" => $n));
}else {
    echo json_encode(array("valido" => "✘", "n" => $n));
}
?>