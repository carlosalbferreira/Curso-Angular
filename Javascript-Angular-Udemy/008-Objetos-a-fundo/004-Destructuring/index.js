const Tenis = {
    tamanho: 45,
    estoque: true,
    preco: 199.90,
    marca: [{nome: "Nike",}, {nome: "Adidas",},],
    secret: 123456,
    n: 5,
    link: {a: "a é == a", b: {c: "c == c"}},
};

// const {tamanho, estoque, preco, marca = "Não possui MARCA"} = Tenis;

// console.log(tamanho, estoque, preco, marca);

// // podemos criar ALIAS dentro do nosso destruct

// const {secret: randonNumber, n: avaliacoes} = Tenis;

// console.log(randonNumber);
// console.log(avaliacoes);

const {link: {a, b: {c}}} = Tenis; //Podemos acessar os objetos em niveis.

console.log(c);