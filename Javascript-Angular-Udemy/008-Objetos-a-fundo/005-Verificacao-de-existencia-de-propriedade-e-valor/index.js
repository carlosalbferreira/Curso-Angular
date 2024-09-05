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



// if (Tenis.hasOwnProperty("estoque")){
//     console.log("existe");
// }else {
//     console.log("não existe")
// }

// console.log(Tenis.hasOwnProperty("estoque"));
console.log("carlos" in Tenis);
