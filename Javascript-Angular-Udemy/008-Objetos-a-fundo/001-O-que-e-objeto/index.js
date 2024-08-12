/**
 * Objeto: Tenis (Propriedade) "cardaço", "palmilha"
 * Objeto: Celular (Propriedade)
 * Objeto: Drone (Propriedade)
 * 
 * Propriedades / Atributos / Funcionalidades
 */


let Tenis = {
    Tipo: "Tenis de Corrida",
    cardaco: "G",
    venda: false,
    tamanho: {
        palmilha: 39,
        tenis: 40,
        caixa: {
            altura: 35,
            largura: 50,
            profundidade: 10,

        },
    },
    marcaArrayValores: ["Nike", "Adidas", "etc"],
    marcaArrayObjetos: [
        {
            nome: "Nike"
        },
        {
            nome: "Adidas"
        },
        {
            nome: "Etc"
        },
    ],
    getMarcaArrayObjeto: function(param) {
        return this.marcaArrayValores[param].nome;
    },
    getMarcaArrayObjeto: function(param) {
        return this.marcaArrayObjetos[param].nome;
    },
};


console.log(Tenis.marcaArrayValores)
console.log(Tenis.marcaArrayValores[1]) // podemos acessar nossos objetos dessa forma sempre na ordem e accessar cada elemento dentro das arrays