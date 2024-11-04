const pedidos = [
    {
        id: 420,
        nome: "Carlos",
        alimento: "Sandwich de presunto",
        bebida: "Suco de limão",
    },
    {
        id: 152,
        nome: "Caroline",
        alimento: "Pizza",
        bebida: "Suco de Pessego Mate",
    },
    {
        id: 33,
        nome: "Gabrielly",
        alimento: "Lanche do BK",
        bebida: "Suco de laranja",
    },
    {
        id: 55,
        nome: "Tiago",
        alimento: "Lanche de atum",
        bebida: "Refrigerante",
    },    
    {
        id: 29,
        nome: "Michele",
        alimento: "Bolo de abacaxi",
        bebida: "Agua",
    },
    {
        id: 66,
        nome: "Marlene",
        alimento: "Pão com ovo",
        bebida: "Refrigerante",
    },
];

/**
 * É bacana entender que, se você tem uma condição, ela vai tratar toda a sua array
 * assim podemos verificar se eles estão ok
 */

const everyRefri = pedidos.every((element) => {
    return element.bebida === "Refrigerante";
})

console.log(everyRefri);