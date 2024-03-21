// [] Faça um programa onde os jurados vão dar a explicação para cada nota dada.
// São permitidos notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

const nota = (Math.floor(Math.random() * 11))

switch (nota) {
    case 0: 
        console.log('nota 0, Muito ruim')
    break 
    
    case 1: 
        console.log('nota 1, dá para ser melhor que isso')
    break

    case 2: 
        console.log('nota 2, você pode fazer bem melhor')
    break

    case 3:
        console.log('nota 3, tá no caminho')
    break

    case 4: 
        console.log('nota 4, tá ficando melhor')
    break

    case 5:
        console.log('nota 5, mais ou menos')
    break

    case 6: 
        console.log('nota 6, razoável')
    break

    case 7:
        console.log('nota 7, bom')
    break

    case 8:
        console.log('nota 8, muito bom')
    break

    case 9: 
        console.log('nota 9, ótimo')
    break

    case 10: 
        console.log('nota 10, excelente')
    break

    default:
        console.log('avaliação não disponível')
    break
}