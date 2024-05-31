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

// Verificar si se recibió una solicitud POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Decodificar el JSON recibido
    $data = json_decode(file_get_contents("php://input"), true);

    // Crear un nuevo usuario
    $sqlUsuario = "INSERT INTO usuario (nombre, telefono, correo_electronico, direccion, tipo_de_asistencia, clave) VALUES (?, ?, ?, ?, ?, ?)";
    $stmtUsuario = $conn->prepare($sqlUsuario);
    $stmtUsuario->bind_param("ssssss", $data['nombre'], $data['telefono'], $data['correoElectronico'], $data['direccion'], $data['tipoDeAsistencia'], $data['clave']);
    $stmtUsuario->execute();

    // Crear un nuevo trabajador
    $sqlTrabajador = "INSERT INTO trabajador (nombre, telefono, correo_electronico, contrasena) VALUES (?, ?, ?, ?)";
    $stmtTrabajador = $conn->prepare($sqlTrabajador);
    $stmtTrabajador->bind_param("ssss", $data['nombreTrabajador'], $data['telefonoTrabajador'], $data['correoElectronicoTrabajador'], $data['contrasenaTrabajador']);
    $stmtTrabajador->execute();

    // Crear un nuevo proveedor
    $sqlProveedor = "INSERT INTO proveedor (nombre, numero, correo_electronico, tipo_de_servicio) VALUES (?, ?, ?, ?)";
    $stmtProveedor = $conn->prepare($sqlProveedor);
    $stmtProveedor->bind_param("ssss", $data['nombreProveedor'], $data['numeroProveedor'], $data['correoElectronicoProveedor'], $data['tipoDeServicioProveedor']);
    $stmtProveedor->execute();

    // Crear un nuevo técnico
    $sqlTecnico = "INSERT INTO tecnico_asistencia (nombre, telefono, especialidad) VALUES (?, ?, ?)";
    $stmtTecnico = $conn->prepare($sqlTecnico);
    $stmtTecnico->bind_param("sss", $data['nombreTecnico'], $data['telefonoTecnico'], $data['especialidadTecnico']);
    $stmtTecnico->execute();

    // Verificar si al menos una consulta fue exitosa
    if ($stmtUsuario->affected_rows > 0 || $stmtTrabajador->affected_rows > 0 || $stmtProveedor->affected_rows > 0 || $stmtTecnico->affected_rows > 0) {
        // Éxito
        http_response_code(201);
        echo json_encode(array("message" => "¡Los registros se crearon correctamente!"));
    } else {
        // Error
        http_response_code(500);
        echo json_encode(array("message" => "Error al crear los registros"));
    }
} else {
    // Método no permitido
    http_response_code(405);
    echo json_encode(array("message" => "Método no permitido"));
}

// Cerrar la conexión
$conn->close();
?>
