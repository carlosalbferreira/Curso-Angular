const Tenis = {
    tamanho: 45,
    estoque: true,
    preco: 199.90,
    marca: [{nome: "Nike",}, {nome: "Adidas",},],
    secret: 123456,
    n: 5,
    link: {a: "a é == a", b: {c: "c == c"}},
};

//hasOwnPropety | propetyName in tenis

console.log(Tenis.hasOwnProperty("estoque"));