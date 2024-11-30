// Función para cambiar el color de fondo de un elemento
function pintar(elemento, color = 'green') {
  elemento.style.backgroundColor = color;
}

// Obtener el elemento por su ID
const ele = document.getElementById("ele1");

// Aplicar el color inicial (verde) al elemento
pintar(ele);

// Agregar un event listener al elemento
ele.addEventListener("click", () => {
  pintar(ele, 'yellow'); // Cambiar el color a amarillo al hacer clic
});