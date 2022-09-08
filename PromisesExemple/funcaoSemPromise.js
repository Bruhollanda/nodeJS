const calcularDivisao = (num1, num2) => {
  if (num2 === 0) throw new Error('Não pode ser feita divisão por zero.');

  return num1/num2;
};

try {
  const resultado = calcularDivisao(2, 1);
  console.log("Resultado: "+ resultado);
} catch (error) {
  console.log("Erro: "+ error.message);
}