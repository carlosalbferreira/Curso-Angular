/**
 * 1 - Nome da Função.
 * 2 - Retorno
 * 3 - Não tem Hoisting
 * 4 - Arguments
 */

function nomefunc(){
    return "Carlos Alberto";
}
console.log(nomefunc());

const nomeFuncArrow = () => {
    return "Carlos Alberto";
}
console.log(nomeFuncArrow());

const nomeFuncArrowRetorno = () => "Carlos Alberto"; // Retorna na mesma linha
console.log(nomeFuncArrowRetorno());

const nomeFuncArrowHoisting = () => {
    return "Carlos Alberto";
}
console.log(nomeFuncArrowHoisting());// em Arrow Function so podemos chamar a função na ordem.

const nomeArrowParams = (param) => param;
console.log(nomeArrowParams("Parametro"));
// Não funciona o Arguments
// const nomeFuncArrowArguments = () => {
//     return arguments;
// }
// console.log(nomeFuncArrowArguments());

function nomeFuncArguments() {
    return arguments;
}

console.log(nomeFuncArguments("Carlos Alberto"));

/**
 * 5 - Funções não podem ser invocadas com new porque não tem constructor.
 */
class newFunc{
    constructor(nome){
        this.nome = nome;
    }
}
const a = new newFunc("Carlos Alberto");
console.log(a.nome);


/**
 * 6 - Contexto
 * Arrow Functions possuem this léxico enquanto o model normal possui This dinâmico.
 * 
 * Isso significa que Arrow Functions herdam  o contexto local de onde foi declarado,
 * Enquanto o modelo normal possui o contexto associado ao objeto que ele está vinculado 
 * no momento da chamada.
 * 
 * Se ele não tiver associado a ninguem na chamada, ele assumira o This automaticamente
 * como o contexto global, que no caso o navegador é window.
 */
const lanches = {

    cardapio: [
        {nome: "X-Salada", preco: "R$ 25"},
        {nome: "X-Bacon ", preco: "R$ 30"},
    ],

    meuPedidoFunc: function(select) {
        return console.log(this.cardapio[select]);
    },

    meuPedidoFuncTimeOut: function(){
        setTimeout(function() {
            console.log(this.cardapio);
            console.log(this);
        }.bind(this), 1000); // utiliza o .bind(this) para entrar dentro do objeto pai.
    },

    meuPedidoArrow: (select) => {
        this.cardapio = [
            {nome: "X-Salada", preco: "R$ 25"},
            {nome: "X-Bacon ", preco: "R$ 30"},
        ]
        return console.log(this.cardapio[select]);
    }
}

lanches.meuPedidoFunc(1);
lanches.meuPedidoArrow(0);
lanches.meuPedidoFuncTimeOut(1);


/**
 * 7 -  Constructor 
 * Arrow Functions não podem ser constructors, então nao é possivel usar o operador 
 * new com a mesma.
 */

class newFunc{
    constructor(nome){
        this.nome = nome;
    }
}
const teste = new newFunc("Carlos Alberto");
console.log(teste.nome);
