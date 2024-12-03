'use strict';

const h1 = document.querySelector('h1');

h1.classList.add('active');  //Adiciona classe a tag HTML
h1.classList.add('teste1', 'teste2');
h1.classList.remove('teste1');

h1.classList.toggle('teste2'); //Se existe a classe ele remove e caso não exista ele cria.

if(h1.classList.contains('active')){
    // alert('Existe a classe Active');
};



console.log(h1);