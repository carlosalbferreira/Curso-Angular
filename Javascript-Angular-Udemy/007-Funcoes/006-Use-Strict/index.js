/**
 * O Strict mode elimina alguns erros silenciosos
 * Que passariam batido pelo Javascript e os faz emitir erros
 * 
 * alem disso, essa forma corrige alguns erros que tornam o Javasript 
 * difícil de ser otimizado , então algumas vezes os códigos de modo estrito 
 * rodam mais otimizados e velozes  do que os códigos no "Modo Normal"
 * 
 * Link:  https://www.geeksforgeeks.org/strict-mode-javascript/
 */
'use strict'

(() => {
    teste = "Teste";
})();
console.log(teste);