"use strict";

/** 
 * textContent => Retorna o text COM formatações, mas sem os elementos html
 * innerText => Retorna somente texto, sem formatações ou elementos
**/

const p = document.querySelector("p");

console.log(p.textContent);
console.log(p.innerHTML);

p.textContent = "<strong>Carlos Alberto</strong>";
p.innerHTML = "<strong>Carlos Alberto</strong>" // posso inserir minhas tags e vai funcionar perfeitamente.