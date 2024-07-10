/**
 * Operador Ternario 
 * Outra forma de fazer o If.
 */

const velocidade = 86;
const warn = 85;

const condicao = velocidade >= warn 
    ? console.log("Recebeu uma multa")
    : console.log("Continua andando");

if(velocidade >= warn) {
    console.log("Recebeu uma multa");
}else{
    console.log("Continua andando");
}