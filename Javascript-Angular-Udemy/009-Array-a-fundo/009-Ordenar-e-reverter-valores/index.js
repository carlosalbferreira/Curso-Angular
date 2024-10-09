// const arrayString = ["A", "C", "D", "W", "L", "B"];

// console.log(arrayString.sort()); // Deixa o array de string em ordem.
// console.log(arrayString.reverse()); // Deixa o array de string em ordem mais revertido.

const numberArray = [10, 20, 30, 40, 50, 1000, 1, 55, 15];

console.log(numberArray.sort((a, b) => a - b)); //Deixa o array em ordem numérica
console.log(numberArray.sort((a, b) => b - a)); //Deixa o array em ordem numérica mais revertida do maior para o menor.
console.log(numberArray.sort((a, b) => a - b).reverse()); //Deixa o array em ordem numérica mais revertida do maior para o menor.

const objArray = [
    {
        nome: "Carlos Alberto"
    },
    {
        nome: "Caroline Gregório"
    },
    {
        nome: "Gabrielly Gregório Ferreira"
    },
    {
        nome: "Marlene Ferreira"
    },
    {
        nome: "Tiago Ferreira"
    },
    {
        nome: "Antonio Carlos"
    },
    
]

console.log(objArray.sort((a, b) => a.nome.localeCompare(b.nome)));
console.log(objArray.sort((a, b) => b.nome.localeCompare(a.nome)));
console.log(objArray.sort((a, b) => a.nome.localeCompare(b.nome)).reverse())