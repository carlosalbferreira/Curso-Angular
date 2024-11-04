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

for(let item of myArrayObj){
    if(item.nome === "Caroline"){
        console.log("Mozão está me esperando");
        continue;
    }
    console.log(item);
    if(item.nome === "Gabrielly"){
        console.log("Minha filha é Linda!");
        break;
    }
}