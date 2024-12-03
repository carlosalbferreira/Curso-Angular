'use strict';

const container = document.querySelector('.container');

const newP = document.createElement('p'); // cria uma nova tag na memória.
newP.innerText = 'Olá Carlos'; // Texto ue vamos inserir na tag;

container.before(newP); //aqui criamos a tag depois da class container
container.after(newP); //aqui criamos a tag antes da class container

console.log(newP);