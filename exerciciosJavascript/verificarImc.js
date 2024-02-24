let nome = "Pedro";
let idade = 20;
let peso = 60;
let altura = 1.8;
const imc = peso / altura ** 2;

console.log("O nome do usuário é: " + nome);
console.log("A sua idade é: " + idade);
console.log("O seu peso é: " + peso);
console.log("Seu imc é: " + imc);

if (imc <= 18.5) {
  console.log("Você está abaixo do peso adequado.");
}
if (imc >= 18.5 && imc <= 24.99) {
  console.log("Você está no peso adequado.");
}
if (imc >= 25 && imc <= 29.99) {
  console.log("Você está acima do peso adequado.");
}
if (imc >= 30) {
  console.log("Você está com um quadro de obesidade. Cuide-se!");
}
