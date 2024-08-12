/**
 * Funções Construtoras
 */

// function Name(nome, sobrenome){
//     this.nome = nome;

//     this.sobreNome = () => {
//         const nomeCompleto = `${this.nome} ${sobrenome}`;
//         return nomeCompleto;

//     }
// };

// const carlos = new Name("Carlos", "Alberto");

// console.log(carlos.sobreNome());

function Calculadora(num1, num2) {

    this.soma = () => {
        return `${num1 + num2}`
    }

    this.subtracao = () => {
        return `${num1 - num2}`
    }
};

const calculadora = new Calculadora(1, 1); //Podemos escolher dentro das próprias funções onde desejamos inserir nossos parâmetros.

console.log(calculadora.soma());
console.log(calculadora.subtracao());



