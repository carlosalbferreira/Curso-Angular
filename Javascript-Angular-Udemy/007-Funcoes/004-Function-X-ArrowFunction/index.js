/**
 * 1 - Nome da Função.
 * 2 - Retorno
 * 3 - Não tem Hoisting
 * 4 - Arguments
 */

/**
 * 5 - Não pode ser invocada com new
 */

/**
 * 6 - Contexto
 * Arrow Functions possuem this léxico enquanto o model normal possui This dinâmico.
 * 
 * Isso significa que Arrow Functions herdam  o contexto local de onde foi declarado,
 * Enquanto o modelo normal possui o contexto associado ao objeto que ele está vinculado 
 * no momento da chamada.
 * 
 * Se ele não tiver associado a ninguem na chamada, ele assumira o This automaticamente
 * como o contexto global, que no caso o navegador é window.
 */

/**
 * 7 -  Constructor 
 * Arrow Functions não podem ser constructors, então nao é possivel usar o operador 
 * new com a mesma.
 */