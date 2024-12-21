"use strict";

const form = document.forms.namedItem("select-radio");

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    
    const radio = form.radio;
    console.log(radio.value);



    if(radio.value == 'html5'){
        radio.value = document.querySelector('.label-html').style.background = 'green'
    }else{
        radio.value = document.querySelector('.label-html').style.background = 'white'
    }

    if(radio.value == 'css3'){
        radio.value = document.querySelector('.label-css').style.background = 'green'
    }else{
        radio.value = document.querySelector('.label-css').style.background = 'white'
    }

    if(radio.value == 'javascript'){
        radio.value = document.querySelector('.label-js').style.background = 'green'
    }else{
        radio.value = document.querySelector('.label-js').style.background = 'white'
    }

})

