const readline = require('readline-sync');

console.log('Hello, world!');

const name = readline.question('Qual seu nome? ');
  // interpreta a resposta como uma string comum
const age = readline.questionInt('Qual sua idade? ');
  // converte a resposta para número utilizando o parseInt e retorna um erro caso a pessoa tente inserir algo que não seja um número válido.

console.log(`Hello, ${name}! You are ${age} years old!`);