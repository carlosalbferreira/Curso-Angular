"use strict";

//Traz todas as TAGS que colocarmos nele.

const p = document.getElementsByTagName("p");

console.log(p);

for (let element of p){
    console.log(element.style.background = "pink")
}

