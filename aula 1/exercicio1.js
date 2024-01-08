/*faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis:

    1 - Preço do combustível;
    2 - Gasto médio de combustível do carro por KM;
    3 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar a viagem.
*/

const precoCombustivel = 5.79;
const kmPorLitro = 10;
const distanciaKm = 100;

let litrosViagem = distanciaKm / kmPorLitro
let gastoViagem = litrosViagem * precoCombustivel 

console.log(gastoViagem.toFixed(2));//.toFixed(2) quantidade de números na casa decimal
