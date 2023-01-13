<?php
/**3.Al clicar en el botón GUARDAR COMBINACION envía una petición al servidor con el API XMLHttpRequest pasando la combinación formada por los 4 números escritos en los inputs. 
 * 3.1.El servidor ha de comprobar que sean efectivamente 4 números de un dígito y positivo. 
 * 3.2.Si la combinación es válida se guarda en una (o varias) variables de sesión y retorna al cliente un mensaje indicando que se ha guardado el valor. 
 * 3.3.Si la combinación no es válida se retorna al cliente un mensaje indicando que no se ha guardado el valor porque la combinación no es válida. 
 * 3.4.Ambos mensajes se muestran al usuario.
 */

session_start();

$combi = $_GET["combi"];

// Comprobamos si el número introducido es igual al guardado anteriormente.
if (is_numeric($combi) && strlen($combi) == 4){
    echo json_encode(array("valido" => "Combinación guardadada"));
    $_SESSION["combi"] = $combi;

}else {
    echo json_encode(array("valido" => "Ups, combinación inválida"));
}
?>