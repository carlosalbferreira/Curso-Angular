/**
IMC é a sigla para indice de massa corpórea,
parâmetro adotado pela Organização Mundial
de Saúde para calcular o peso ideal de cada pessoa.

Como Calcular o iMC?
O IMC  é calculado dividindo o peso (em KG) pela 
altura ao quadrado (em m), de acordo com a seguinte fórmula:
IMC = peso / (altura x altura).

E nosso calculo devemos retornar os seguintes valores para o usuário:

|Resultado do calculo   |Resultado para o Usuário:|
|=======================|=========================|
|Abaixo de 17           |Muito abaixo do peso     |
|Entre 17 e 18,49       |Abaixo do peso           |
|Entre 18,5 e 24,99     |Peso normal              |
|Entre 25 e 29,99       |Acima do peso            |
|Entre 30 e 34,99       |Obesidade I              |
|Entre 35 e 39,99       |Obesidade II             |
 */

const peso = 1;
const altura = 1.66;
 
const imc = Number((peso / (altura * altura)).toFixed(2)); // toFixed() => mostra quantas casas quero depois da virgula

switch(true){   
    case imc < 17:
        console.log("Muito Abaixo do peso");
        break;
    case imc >= 17 && imc <= 18.49:
        console.log("Abaixo do peso");
        break;
    case imc >= 18.5 && imc <=24.99:
        console.log("Peso normal");
        break;
    case imc >= 25 && imc <=29.99:
        console.log("Acima do peso");
        break;
    case imc >= 30 && imc <=34.99:
        console.log("Obesidade I");
        break;
    case imc > 35:
        console.log("Obesidade II");
        break;        
}
console.log(imc);
/**

// Forma usando o if
 if (imc < 17){
    console.log("Muito Abaixo do peso");
}else if (imc > 17 && imc <= 18.49){
    console.log("Abaixo do peso");
}else if (imc >= 18.5 && imc <= 24.99){
    console.log("Peso Normal");
}else if (imc >= 25 && imc <= 29.99){
    console.log("Acima do peso");
}else if (imc >= 30 && imc <= 34.99){
    console.log("Obesidade I");
}else{
    console.log("Obesidade II");
}

console.log(imc);
 */

