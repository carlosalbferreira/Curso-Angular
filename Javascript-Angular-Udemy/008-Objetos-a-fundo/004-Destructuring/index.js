const Tenis = {
    tamanho: 45,
    estoque: true,
    preco: 199.90,
    marca: [
        {
            nome: "Nike",
        },
        {
            nome: "Adidas",
        },
    ],
};

const {tamanho, estoque, preco, marca} = Tenis;

console.log(tamanho, estoque, preco, marca);