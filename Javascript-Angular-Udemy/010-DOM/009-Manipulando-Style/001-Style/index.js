'use strict';

const h1 = document.querySelector('h1');

h1.style.background = 'red';
h1.style.fontFamily = 'arial';

const p = document.querySelectorAll('p');

p.forEach((element) => {
    element.style.fontFamily = 'arial';
    element.style.fontSize = '12px';
    element.style.background = 'purple';
})

