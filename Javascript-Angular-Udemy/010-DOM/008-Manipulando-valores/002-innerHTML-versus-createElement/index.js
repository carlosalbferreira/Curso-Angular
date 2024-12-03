'use strict';

/**
 * InnerHtml => Retorna o texto, com formatações e com elementos html.
 * createElement => Cria um elemento Html.
 */

const div = document.querySelector('div');

// console.log(1, div);

// div.innerHTML = '<strong>Esse é o meu novo texto</strong>';
// div.innerHTML = `${div.innerHTML} => incrementado`

// console.log(2, div);

const elementUl = document.createElement('ul');
console.log(elementUl);

const arrayCad = ['Nome', 'Endereço', 'Contato'];

arrayCad.forEach((element) => {
    const elementLi = document.createElement('li');
    elementUl.appendChild(elementLi);
    elementLi.innerText = element;
})

div.appendChild(elementUl);

