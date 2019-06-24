<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>RESPUESTA DEL SERVIDOR WEB</title>
</head>
<body>
  <h1>RESPUESTA DEL SERVIDOR TRAS PROCESAR LOS DATOS</h1>
  <?php
    echo "Nombre:" . $_POST["nombre"] . "<br>";
    echo "edad:" . $_POST["edad"] . "<br>";
    echo "email:" . $_POST["email"];
?>
</body>
</html>
