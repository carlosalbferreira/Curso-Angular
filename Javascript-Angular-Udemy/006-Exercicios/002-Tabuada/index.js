/**
 * ==========Tabuada==========
Precisamos mostrar a tabuada no console de 0 a 10 neste seguinte formato

Multiplicador X Numero = Resultado.

multiplicador X 0 = Resultado.
multiplicador X 1 = Resultado.
multiplicador X 2 = Resultado.
multiplicador X 3 = Resultado.
....
multiplicador X 10 = Resultado.
*/

const multiplicador = 5;

for(let i = 0; i <= 10; i++){
    console.log(`${multiplicador} X ${i} = ${multiplicador * i}`)
}
