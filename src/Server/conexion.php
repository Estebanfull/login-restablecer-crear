<?php
// Detalles de conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "142536";
$database = "bd_ike";

// Crear una conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}