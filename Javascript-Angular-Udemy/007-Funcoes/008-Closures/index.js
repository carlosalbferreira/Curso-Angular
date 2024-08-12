/**
 * Uma Closure ocorre normalmente quando uma função
 * é declarada dentro do corpo de outra, e a função interior
 * referencia variáveis locais da função exterior.
 */

// function QualSeuNome(name) {
//     const mens = `O seu nome é:`;

//     function SeuNome() {
//         return `${mens} ${name}`;
//     };

//     return SeuNome();
// };

// console.log(QualSeuNome("Carlos"));

function Calculadora(num1, num2) {
    const mensagem = `Resultado é: `;

    const soma = () => {
        return `${mensagem} ${num1 + num2}`;
    }
    const subtracao = () => {
        return `${mensagem} ${num1 - num2}`;
    }
    const divisao = () => {
        return `${mensagem} ${num1 / num2}`;
    }
    const multiplicacao = () => {
        return `${mensagem} ${num1 * num2}`;
    };

    return{  //Formas de acessar um objeto. 
        soma: soma(),
        subtracao: subtracao(),
        divisao: divisao(),
        multiplicacao: multiplicacao(),
    }
};
console.log(Calculadora(10, 5))