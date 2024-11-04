const myArray = [1, 2, 3, 4, 5, 6];

// for ([inicialização]; [condição]; [expressão final])

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

const myArrayObj = [
    {
        nome: "Carlos",
        sobrenome: "Alberto",
        idade: 33,
    },
    {
        nome: "Caroline",
        sobrenome: "Gregorio",
        idade: 31,
    },
    {
        nome: "Gabrielly",
        sobrenome: "Gregorio",
        idade: 11,
    },
];

// for (let i = 0; i < myArrayObj.length; i++) {
//     console.log(myArrayObj[i].nome, myArrayObj[i].sobrenome, myArrayObj[i].idade, "Anos");
// }

//For of

// for(let item of myArrayObj) {
//     console.log(item.nome, item.sobrenome, item.idade, "Anos");
// }

// For in Para trabalhar com Objetos 
let obj = {nome: "Carlos", sobrenome: "Alberto"};

for(let item in obj){
    console.log(obj[item]);
}