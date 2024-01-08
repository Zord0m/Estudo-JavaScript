/*
Faça um programa para calcular o valor de uma viagem:

você terá 5 variáveis, sendo elas:
    1 - Preço etanol;
    2 - Preço gasolina;
    3 - O tipo de combustível que está no carro;
    4 - Gasto médio de combustível do carro por KM;
    5 - Distância em Km da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/
const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoCombustivel = 'Etanol';
const kmPorLitro = 10;
const distanciaKm = 100;
const litrosConsumidos = distanciaKm / kmPorLitro

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina
    console.log(valorGasto.toFixed(2));
}

