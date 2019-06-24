function validarFormulario() {
  if (!validarNombre()) {
    return false;
  }
  if (!validarEdad()) {
    return false;
  }
  if (!validarEmail()) {
    return false;
  }
  return true;
}

function validarNombre() {
  let campoNombre = document.getElementById('nombre');
  if (/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/.test(campoNombre.value)) {
    return true;
  } else {
    document.getElementById("e1").innerHTML = ("<i>*INTRODUZCA SU NOMBRE CORRECTAMENTE</i><br>")
    return false;
  }
}
function validarEdad() {
  let campoEdad = document.getElementById('edad');
  if  { (/^[\d] $/.test(campoEdad));
    return true;
  } else {
    document.getElementById("e2").innerHTML = ("<i>*INTRODUZCA SU EDAD CORRECTAMENTE</i><br>")
    return false;
  }
}
function validarEmail() {
  let campoEmail = document.getElementById('email');
  if (/^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/.test(campoEmail.value)) {
    return true;
  } else {
    document.getElementById("e3").innerHTML = ("<i>*INTRODUZCA UN EMAIL VÁLIDO</i><br>")
    return false;
  }
}

/*Autor: Román
version: 1*/