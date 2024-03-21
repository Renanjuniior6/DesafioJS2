// [] Faça um programa onde ele leia 4 numeros. Em cada caso, ele deve retornar a mensagem condizente:
// -Todos os números são impares => TODOS OS NUMEROS SÃO impares
// -Todos os números são pares => TODOS OS NUMEROS SÃO pares

const numberOne = 36
const numberTwo = 34
const numberThird = 32
const numberFour = 38

if (numberOne % 2 === 0 && numberTwo % 2 === 0 && numberThird % 2 === 0 && numberFour % 2 === 0) {
    console.log("Todos são pares")
}else if (numberOne % 2 !== 0 && numberTwo % 2 !== 0 && numberThird % 2 !== 0 && numberFour % 2 !== 0) {
    console.log("Todos são ímpares")
}else {
    console.log("Tudo misturado, ímpares e pares")
}
