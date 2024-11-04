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
    },    {
        id: 29,
        nome: "Michele",
        alimento: "Bolo de abacaxi",
        bebida: "Agua",
    },
];

/**
 * Como o nome já diz, esse método deve ser usado quando temos a necessidade de filtrar nossas lista
 * E ele pega todos os elementos que estamos procurando dentro da nossa array
 */

const filterRefri = pedidos.filter((element) => {
    return element.bebida === "Refrigerante"
});

// console.log(pedidos);
console.log(filterRefri);