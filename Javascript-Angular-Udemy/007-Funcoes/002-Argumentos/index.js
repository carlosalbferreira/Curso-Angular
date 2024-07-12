/**
 * ===========Argumentos dentro das funções=====================
 */

// const soma = (a, b) => {
//     if(typeof a === "number" && typeof b === "number"){ 
//         return (a + b) * 5;
//     }
//     return "Você não Informou os numeros!!"
// }
// console.log(soma(3, 2))


function subtracao(){
    return arguments;
}

console.log(subtracao(1 ,2, "Carlos"));