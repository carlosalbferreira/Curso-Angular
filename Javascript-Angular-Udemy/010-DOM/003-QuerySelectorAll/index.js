"use strict";

const p = document.querySelectorAll("p");

p.forEach((element, index) => {
    if(index === 0) {
        element.style.background = "blue";
    }
});