"use strict";

const p = document.getElementsByClassName("paragrafo");

console.log(p);

for (let element of p) {
    element.style.background = "red";
}