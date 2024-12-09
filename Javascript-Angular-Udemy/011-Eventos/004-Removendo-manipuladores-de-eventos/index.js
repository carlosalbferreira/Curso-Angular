'use strict';

const btn = document.querySelector('button');

const acionarAlert = () =>{
    alert('Carlos Clicou !');
}

btn.addEventListener('click', acionarAlert);
btn.removeEventListener('click', acionarAlert);