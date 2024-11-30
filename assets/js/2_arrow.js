const suma = (a, b) => a + b;

function calcular() {
  const num1 = parseInt(document.getElementById('num1').value);
  const num2 = parseInt(document.getElementById('num2').value);

  const   
resultado = suma(num1, num2);
  document.getElementById('resultado').textContent = resultado;
}