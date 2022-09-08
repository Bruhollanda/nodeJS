const calcularDivisao = (num1, num2) => {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0) reject(new Error('Não pode ser feita divisão por zero.'));
    const resultado = num1/num2;
    resolve(resultado);
  });

  return promise;
};

calcularDivisao(2, 2)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message))