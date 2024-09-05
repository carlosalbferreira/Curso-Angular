const Tenis = {
    tamanho: 45,
    estoque: true,
}
console.log("estoque" in Tenis);

Tenis.tamanho = 43;
Tenis.estoque = false;

console.log(Tenis.tamanho);
console.log(Tenis.estoque);

Tenis.preco = 43;

console.log(Tenis)
console.log(Tenis["preco"])
