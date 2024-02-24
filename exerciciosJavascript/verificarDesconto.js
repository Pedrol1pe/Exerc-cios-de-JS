let compra = 18;

const desconto1 = (compra * 12) / 100; //acima de R$100
if (compra >= 100) {
  console.log("Você ganhou um desconto de 12%");

  const desc1 = compra - (compra * 12) / 100;
  console.log("Você vai pagar: " + desc1);
}
const desconto2 = (compra * 10) / 100; //acima de R$50
if (compra >= 50 && compra < 100) {
  console.log("Você ganhou um desconto de 10%");

  const desc2 = compra - (compra * 10) / 100;
  console.log("Você vai pagar: " + desc2);
}
const desconto3 = (compra * 5) / 100; //acima de R$20
if (compra >= 20 && compra < 50) {
  console.log("Você ganhou um desconto de 5%");

  const desc3 = compra - (compra * 5) / 100;
  console.log("Você vai pagar: " + desc3);
}
if (compra < 20 ) {
  console.log("Você não ganhou nenhum desconto.");
}
