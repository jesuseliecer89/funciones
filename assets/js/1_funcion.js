const example = function(a, b, c) {
  return a + b + c;
};

function calcular() {
  const num1 = parseInt(document.getElementById('num1').value);
  const num2 = parseInt(document.getElementById('num2').value);
  const   
num3 = parseInt(document.getElementById('num3').value);

  const   
resultado = example(num1, num2, num3);
  document.getElementById('resultado').textContent = resultado;
}