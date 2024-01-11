const{ gets, print } = require ('./importacaoExportacao.1');

const numerosSorteados = [];
let maiorValor = 0;

for (let i = 0; i < 5; i++) {
    const numerosSorteados = gets();
    if (numerosSorteados > maiorValor){
        maiorValor = numerosSorteados;
    }

}

print(maiorValor)