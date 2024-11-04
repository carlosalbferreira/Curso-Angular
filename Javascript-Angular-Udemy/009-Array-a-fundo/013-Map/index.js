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
 * O Método Map além de iterar todo o array ele é muito bom para editar o iteravel (Resumindo o Array)
 */

pedidos.map((element, index) => {
    console.log(index, element);
    if(element.id === 29 && element.alimento === "Bolo de abacaxi") {
        return (element.alimento = "Kibe");
    }

});
console.log(pedidos)
