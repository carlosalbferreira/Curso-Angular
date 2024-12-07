'use strict';

const btn = document.querySelector('button');
const h1 = document.querySelector('h1');
const button = document.querySelector('button');

btn.addEventListener('click', (event) => {
    document.querySelector('body').style.background = 'red';
    // const h1Bg =  document.querySelector('h1');
    button.style.background = '#fff';
});

// btn.addEventListener('click', (event) => {
//     console.log(2);
//     // console.log(event.layerX, event.layerY);
// });

btn.addEventListener('mouseleave', (event) => {
    button.style.background = 'blue';


});