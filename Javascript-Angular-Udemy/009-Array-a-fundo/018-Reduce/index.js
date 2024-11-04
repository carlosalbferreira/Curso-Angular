const pedidos = [
    {
        id: 420,
        nome: "Carlos",
        alimento: "Sandwich de presunto",
        bebida: "Suco de limão",
        preco:  33
    },
    {
        id: 152,
        nome: "Caroline",
        alimento: "Pizza",
        bebida: "Suco de Pessego Mate",
        preco: 12
    },
    {
        id: 33,
        nome: "Gabrielly",
        alimento: "Lanche do BK",
        bebida: "Suco de laranja",
        preco: 52
    },
    {
        id: 55,
        nome: "Tiago",
        alimento: "Lanche de atum",
        bebida: "Refrigerante",
        preco: 125
    },    
    {
        id: 29,
        nome: "Michele",
        alimento: "Bolo de abacaxi",
        bebida: "Agua",
        preco: 144
    },
    {
        id: 66,
        nome: "Marlene",
        alimento: "Pão com ovo",
        bebida: "Refrigerante",
        preco: 65
    },
];

/**
 * A ideia dele é pegar todos os valores de um array e condensa-lo em um só.
 * somam todos os valores dessa forma 
 */

const balancete = pedidos.reduce((total , element) => {
    return total + element.preco;
}, 0);

console.log(balancete)
