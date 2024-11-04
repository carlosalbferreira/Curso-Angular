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
// callback function
myArrayObj.forEach((item, index) => {
    if(item.nome === "Caroline"){
        return console.log("ta ai");
    }
    console.log(index, item.nome);
});