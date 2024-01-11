
/*
const camiseRenantaAzul = true;
const camisetaLemaoAzul = false;
boleanos
*/

//numero par

const numero = 10;

const numeroPar = (numero %2) === 0;

if (numero === 0){
    console.log('O número é inválido')
}else if (numeroPar) {//(!numeroPar) assim vira negação
    console.log('Par');
}else { 
    console.log('Impar');
}