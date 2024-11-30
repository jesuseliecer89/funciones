const colores = {
  a: 'pink',
  s: 'orange',
  d: 'skyblue',
  q: 'purple',
  w: 'gray',
  e: 'brown'
};

// Obtener los elementos del DOM
const azul = document.getElementById('azul');
const rojo = document.getElementById('rojo');
const verde = document.getElementById('verde');
const amarillo = document.getElementById('amarillo');   

const key = document.getElementById('key');

// Agregar event listeners para cambiar el color al hacer clic
azul.addEventListener('click', () => {
  azul.style.backgroundColor = 'black';
});
rojo.addEventListener('click', () => {
  rojo.style.backgroundColor = 'black';
});
verde.addEventListener('click', () => {
  verde.style.backgroundColor = 'black';
});
amarillo.addEventListener('click', () => {
  amarillo.style.backgroundColor = 'black';
});

// Agregar event listener para el documento para detectar pulsaciones de teclas
document.addEventListener('keydown', (event) => {
  const color = colores[event.key.toLowerCase()]; // Obtener el color correspondiente a la tecla presionada
  if (color) {
      // Si existe el color, actualizar el div "key"
      key.style.backgroundColor = color;
  } else if (['q', 'w', 'e'].includes(event.key.toLowerCase())) {
      // Si se presionó q, w o e, crear un nuevo div
      const nuevoDiv = document.createElement('div');
      nuevoDiv.style.width = '200px';
      nuevoDiv.style.height = '200px';
      nuevoDiv.style.backgroundColor = color;
      document.body.appendChild(nuevoDiv);
  }
});