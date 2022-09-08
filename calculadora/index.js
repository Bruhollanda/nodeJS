const operacoes = require('./operacoes');
const readLine = require('readline-sync');

console.log("Calculadora");

const num1 = readLine.questionInt("Digite um numero: ");
const op = readLine.question("Digite a operação: ");
const num2 = readLine.questionInt("Digite um numero: ");

switch (op) {
  case "+":
    operacoes.sum(num1, num2);
    break;
  case "-":
    operacoes.sub(num1, num2);
    break;
  case "*":
    operacoes.mult(num1, num2);
    break;
  case "/":
    operacoes.div(num1, num2);
    break;

  default:
    console.log("A operação informada não foi implementada ou é desconhecida.");
}