'use strict';

const container = document.querySelector('.container');
const paragrafo = container.querySelector('.paragrafo'); //quero pegar a classe paragrafo que esta dentro de container(filho).

const h1 = document.querySelector('h1');

const newH2 = document.createElement('h2'); //cria um elemento html na memória.

newH2.innerText = 'Novo H2'; //texto que será inserido no elemento.

container.insertBefore(newH2, h1 ); //inseri o elemento entre os dois elementos selecionados.