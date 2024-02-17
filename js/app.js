let displayPantalla = document.getElementById("pantalla");

function agregar(valor) {
  displayPantalla.value += valor;
}

function borrar() {
  displayPantalla.value = "";
}

function calcular() {
  const resultado = eval(displayPantalla.value);
  displayPantalla.value = resultado;
}
