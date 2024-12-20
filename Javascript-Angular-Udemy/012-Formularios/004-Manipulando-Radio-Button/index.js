"use strict";

const form = document.forms.namedItem("select-radio");

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    
    const checkbox = form.checkbox;

    console.log(checkbox);
})