/**
 * Precisamos mostrar quantas letras repetidas aparecem em uma palavra
 * exemplo: abacate = {a: 3, b: 1, c: 1, t: 1, e: 1};
 */

const palavra = "Carlos Alberto".toLowerCase().replaceAll(" ", "");
let letras = {}
// console.log(palavra.length);

for(let i = 0; i < palavra.length; i++){
    if(letras[palavra[i]]) {
        letras[palavra[i]]++
    }else {
        letras[palavra[i]] = 1;
    }
}
console.log(letras);
