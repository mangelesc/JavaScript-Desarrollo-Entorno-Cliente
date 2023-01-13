<?php
/**6.Escribir un valor en un input del apartado GUARDAR COMBINACION envía una petición al servidor con el API Fetch pasando como mínimo el valor escrito. 
 * 6.1.Si el digito se corresponde con el digito guardado en el servidor, retorna al cliente un mensaje indicando que el valor es correcto.
 * 6.2.Si el valor no se corresponde, retorna al cliente un mensaje indicando que el valor no es correcto.
 * 6.3.Ambos mensajes se muestran al usuario quedando claro a qué input se refiere
 */

session_start();

$combi = $_SESSION["combi"];
$digit_combi = $_POST["digit_combi"];
$numInput = $_POST["numInput"];

// Comprobamos si el número introducido es igual al guardado anteriormente.
if ($digit_combi == substr($combi, $numInput -1, 1)){
    echo json_encode(array("valido" => "✔", "n" => $numInput));
}else {
    echo json_encode(array("valido" => "✘", "n" => $numInput));
}
?>