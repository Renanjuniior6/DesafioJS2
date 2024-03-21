// [] Faça um programa que gere um número aleatorio entre 1 e 10, esse numero é o número 'ganhador'.
// Então ele também irá gerar um numero aleatorio entre 1 e 10, e verifica se a pessoa ganhou ou não. 
// Em caso de ter ganhado, mostra o premio, se não ganhou, mostra outra mensagem.

const randomNumber = Math.floor(Math.random() * (10-1) + 1)
const winnerNumber = Math.floor(Math.random() * (10-1) + 1)

if (randomNumber === winnerNumber) {
    console.log('Você ganhou')
} else {
    console.log('Você perdeu')
}