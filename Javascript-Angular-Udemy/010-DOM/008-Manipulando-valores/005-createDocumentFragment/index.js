'use strict';

// FRAGMENT É MUITO MELHOR PARA DESEMPENHO DO QUE O DOM.

const ul = document.querySelector('ul');
const fragment = document.createDocumentFragment()

const lanches = ["Lanche 1", "Lanche 2", "Lanche 3", "Lanche 4"];

lanches.forEach((element) => {
    const li = document.createElement('li');
    li.textContent = element;
    fragment.append(li);
}); 

console.log(fragment);
ul.append(fragment);

// const li = document.querySelector('li');
// const fragment = document.createDocumentFragment();

// const lista = ['Arroz', 'Feijão', 'Macarrão', 'Sal'];

// lista.forEach((element) => {
//     const li = document.createElement('li');
//     li.textContent = element;
//     fragment.append(li);
// })

// li.append(fragment);
// console.log(li);

