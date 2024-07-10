/**
 * **********ESCOPO**********
 * Determina quais são os dados que podem ser acessados em uma determinada parte do código.
 */

// Se a variável foi criada como global podemos usar dentro de qualquer escopo.
let nome = "Carlos /alberto";
{
    console.log(nome);
}
// Não consigo chamar a variavel fora do escopo,
{
    let nomeCachorro = "kassye";
}

console.log(nomeCachorro);