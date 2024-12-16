'use strict';

const menu = document.querySelector('#menu');
const body = document.querySelector('body');

menu.addEventListener('click', (event) => {
    const {target} = event;
    
    switch(target.getAttribute('class')){
        case "home":
        body.style.background = 'blue';
        break;

        case "sobre":
        body.style.background = 'red';
        break;

        case "contato":
        body.style.background = 'purple';
        break;
    }
})