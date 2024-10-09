/**
 * Slice -  Pega os dados dentro de um range sem quebrar o array
 * splice - remove os dados do array dentro de um range
 */

let arr = [
    
    {nome: "Carlos", tel: "(99)1234-5678"},
    {nome: "Carol", tel: "(99)1234-5678"},
    {nome: "Gabrielly", tel: "(99)1234-5678"},
    {nome: "Michele", tel: "(99)1234-5678"},
    {nome: "Marlene", tel: "(99)1234-5678"},
]

// console.table(arr);
// const newArray = arr.slice(0,3); // faz somente a copia sem alterar o range

// console.table(newArray);
console.table(arr);

arr.splice(1, 3); // elimina do array conforme voce coloca as posições dos indices e quantos a partir daquele indice

console.table(arr);

