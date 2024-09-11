let Tenis = {
    tamanho: 45,
    estoque: true,
};

let link = {link: {a: "a", b: {c: "c"}}};

let clone1 = Tenis
 
console.log(clone1);

// Faz a união dos objetos para uma variável só.
let mesclar1 = Object.assign(Tenis, link); // Assing diz que vai juntar os objetos
console.log(mesclar1);

let mesclar2 = {...Tenis, ...link};
console.log(mesclar2);

//Pode haver problemas caso queiramos adicionar itens
//Ele pode alterar o que você esta clonando por ser a referência.

clone1.estoque = false;

console.log(mesclar1);
console.log(mesclar2);
console.log(Tenis);
