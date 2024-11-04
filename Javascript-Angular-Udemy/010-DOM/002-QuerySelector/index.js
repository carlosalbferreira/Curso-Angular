"use strict";

const h1 = document.querySelector("h1"); //TAG HTML
const classP = document.querySelector(".paragrafo");
const idP = document.querySelector("#paragrafo");
const tempo = document.querySelector(".tempo");

console.log(h1);
console.log(classP);
console.log(idP);

let timer = 0;

const title = document.querySelector("title");

setInterval(() => {
    title.innerText = timer;
    timer++
}, 1000)


setInterval(() => {
    tempo.innerText = timer;
}, 1000);
