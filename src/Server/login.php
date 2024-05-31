<?php
// Simula una autenticación básica
$username = $_POST['username'];
$password = $_POST['password'];

if ($username === '123' && $password === '142536') {
  // Usuario y contraseña correctos
  $response = [
    'success' => true
  ];
} else {
  // Usuario o contraseña incorrectos
  $response = [
    'success' => false,
    'error' => 'Usuario o contraseña incorrectos'
  ];
}

header('Content-Type: application/json');
echo json_encode($response);
?>
