/*Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Km rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso*/

class Carro {
    marca;
    cor;
    gastoMedioPorKM;

    constructor(marca, cor, gastoMedioPorKM) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKM = gastoMedioPorKM;

    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKM * precoCombustivel
    }

}
const uno = new Carro('Fiat', 'Prata', 1/12)

console.log(uno.calcularGastoDePercurso(70, 5));

const palio = new Carro('Fiat', 'Preto', 1/12)

console.log(palio.calcularGastoDePercurso(70, 5));