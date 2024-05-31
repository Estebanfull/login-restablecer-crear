<?php

// Verificar si la solicitud es de tipo POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Incluir el archivo de conexión a la base de datos
    include_once 'conexion.php';

    // Recibir los datos del formulario
    $idUsuario = $_POST['idUsuario'];
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $correoElectronico = $_POST['correoElectronico'];
    $direccion = $_POST['direccion'];
    $tipoAsistencia = $_POST['tipoAsistencia'];
    $clave = $_POST['clave'];

    // Query para actualizar el perfil del usuario en la base de datos
    $sql = "UPDATE usuario SET nombre=?, telefono=?, correo_electronico=?, direccion=?, tipo_de_asistencia=?, clave=? WHERE ID_USUARIO=?";
    
    // Preparar la declaración
    $stmt = $conn->prepare($sql);
    
    // Vincular los parámetros
    $stmt->bind_param("ssssssi", $nombre, $telefono, $correoElectronico, $direccion, $tipoAsistencia, $clave, $idUsuario);
    
    // Ejecutar la declaración
    if ($stmt->execute()) {
        // Si la modificación se realizó con éxito, retornar un mensaje de éxito como JSON
        echo json_encode(array("message" => "Perfil modificado correctamente"));
    } else {
        // Si hubo un error, retornar un mensaje de error como JSON
        echo json_encode(array("message" => "Error al modificar el perfil"));
    }

    // Cerrar la conexión
    $stmt->close();
    $conn->close();

    // Salir del script
    exit();
}

?>
