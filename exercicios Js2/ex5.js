// [] Crie 5 objetos nesse formato  //fazer mais 4

//{
    nome: ""
    idade: ""
    sexo: ""
    profissão:""
    nacionalidade: ""

// }

// Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo,
// a pessoa deve ser maior de idade e brasileira para ser aprovada.

const personOne = { nome: 'Renato', idade: 25, sexo: 'Masculino', profissão: "Programador", nacionalidade: "Brasileiro"}

if (personOne.idade >=18 && (personOne.nacionalidade === "Brasileiro" || personOne.nacionalidade === "Brasileira")) {
    console.log("Você passou no processo")
}else {
    console.log("Você NÃO passou no processo")
}


