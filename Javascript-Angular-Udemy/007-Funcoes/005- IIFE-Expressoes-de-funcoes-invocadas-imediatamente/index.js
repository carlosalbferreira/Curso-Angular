// IIFE Immediately Invoked Function Expression .
// IIFE Expressão de Função Invocada Imeditamente.

(function(){
    return console.log('con');
})();


(function(num1,  num2){
    const soma = num1 + num2;
    return console.log(soma);
})(1, 2);

(function (){
    return console.log("carls teste");
})();

(() =>{
    console.log("Arrow teste");
})();

// ((win, doc) => {
//     console.log(win);
//     console.log(doc);
// })(window, document);

// Os dois const testes não saem do escopo da função.
(() =>{
    const teste = "Teste Const1"
    console.log(teste);
})();

(() =>{
    const teste = "Teste Const2"
    console.log(teste);
})();
