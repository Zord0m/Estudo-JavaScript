/*  
    Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior sorteado.

    dados de entrada:
    5
    50
    10
    98
    23

    saída:
    98
*/

const entradas = [5, 50, 10, 98, 23];
let i = 0; 

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto)
}

module.exports={ gets , print }