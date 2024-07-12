/**
 *  O que é uma Função ?
 * É o conjunto de instruções que executa uma tarefa ou calcula um valor.
 */

// 1 - Functions declarations;
function soma(a, b) {
    return a + b;
}
console.log(soma(1, 2));


function isValidDeclaration(){
    const soma = 1 + 2;

    if(soma === 3) {
        return true;
    }
    return false;
}
console.log(isValidDeclaration());


// 2 - Function expression;
const isValidExpression = function (){
    return false
}

console.log(isValidExpression());

// 3 - Arrow Function.

const isValidArrow = () => {
    const multiplicacao = 3 * 3;

    return multiplicacao;
};

console.log(isValidArrow());