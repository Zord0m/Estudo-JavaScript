function aplicarDesconto(valor, desconto){
    return (valor - (valor *(desconto / 100)));
}

const precoEtiqueta = 100;
const formaPagamento = 4;

if (formaPagamento === 1){
    console.log(aplicarDesconto(precoEtiqueta, 10));
}else if (formaPagamento === 2){
    console.log(aplicarDesconto(precoEtiqueta, 15));
}else if (formaPagamento === 1){
    console.log(precoEtiqueta);
}

