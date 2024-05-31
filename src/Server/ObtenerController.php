<?php

// Verificar si la solicitud es de tipo POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Incluir el archivo de conexión a la base de datos
    include_once 'conexion.php';

    // Recibir los datos del formulario
    $tipo = $_POST['tipo'];

    // Lógica específica para cada tipo de modificación (usuario, trabajador, proveedor, técnico)
    switch ($tipo) {
        case 'usuario':
            // Aquí iría la lógica para modificar datos de usuario
            // Recibir otros campos del formulario y realizar operaciones en la base de datos
            break;
            
        case 'trabajador':
            // Recibir otros campos del formulario para modificar datos de trabajador
            $idTrabajador = $_POST['idTrabajador'];
            $nombreTrabajador = $_POST['nombreTrabajador'];
            $telefonoTrabajador = $_POST['telefonoTrabajador'];
            $correoTrabajador = $_POST['correoTrabajador'];
            $direccionTrabajador = $_POST['direccionTrabajador'];
            
            // Query para actualizar datos de trabajador en la base de datos
            $sql = "UPDATE trabajador SET nombre=?, telefono=?, correo=?, direccion=? WHERE id=?";
            // Preparar la declaración
            $stmt = $conn->prepare($sql);
            // Vincular los parámetros
            $stmt->bind_param("ssssi", $nombreTrabajador, $telefonoTrabajador, $correoTrabajador, $direccionTrabajador, $idTrabajador);
            break;
            
        case 'proveedor':
            // Recibir otros campos del formulario para modificar datos de proveedor
            $idProveedor = $_POST['idProveedor'];
            $nombreProveedor = $_POST['nombreProveedor'];
            $telefonoProveedor = $_POST['telefonoProveedor'];
            $correoProveedor = $_POST['correoProveedor'];
            $direccionProveedor = $_POST['direccionProveedor'];
            
            // Query para actualizar datos de proveedor en la base de datos
            $sql = "UPDATE proveedor SET nombre=?, telefono=?, correo=?, direccion=? WHERE id=?";
            // Preparar la declaración
            $stmt = $conn->prepare($sql);
            // Vincular los parámetros
            $stmt->bind_param("ssssi", $nombreProveedor, $telefonoProveedor, $correoProveedor, $direccionProveedor, $idProveedor);
            break;
            
        case 'tecnico':
            // Recibir otros campos del formulario para modificar datos de técnico
            $idTecnico = $_POST['idTecnico'];
            $nombreTecnico = $_POST['nombreTecnico'];
            $telefonoTecnico = $_POST['telefonoTecnico'];
            $correoTecnico = $_POST['correoTecnico'];
            $direccionTecnico = $_POST['direccionTecnico'];
            
            // Query para actualizar datos de técnico en la base de datos
            $sql = "UPDATE tecnico SET nombre=?, telefono=?, correo=?, direccion=? WHERE id=?";
            // Preparar la declaración
            $stmt = $conn->prepare($sql);
            // Vincular los parámetros
            $stmt->bind_param("ssssi", $nombreTecnico, $telefonoTecnico, $correoTecnico, $direccionTecnico, $idTecnico);
            break;
            
        default:
            // Si el tipo de modificación no es válido, retornar un código de respuesta 400 (Bad Request)
            http_response_code(400);
            // Enviar un mensaje de error como JSON
            echo json_encode(array("message" => "Tipo de modificación no válido"));
            // Salir del script
            exit();
    }

    // Ejecutar la declaración
    if ($stmt->execute()) {
        // Si la modificación se realizó con éxito, retornar un mensaje de éxito como JSON
        echo json_encode(array("message" => "Datos modificados correctamente"));
    } else {
        // Si hubo un error, retornar un mensaje de error como JSON
        echo json_encode(array("message" => "Error al modificar los datos"));
    }

    // Cerrar la conexión
    $stmt->close();
    $conn->close();

    // Salir del script
    exit();
}

?>
