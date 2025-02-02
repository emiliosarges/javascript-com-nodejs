const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
    console.log(texto);
})

//Lista de Tarefas
//Criar um array com as palavras
//contar as ocorrências
//montar um objeto com o resultado

// {
//     "web": 5,
//     "computador": 4
// }

function vericaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ');
    const resultado = {};
    // objeto[propriedade] = valor;
    listaPalavras.forEach(palavra => {
        resultado[palavra] = (resultado[palavra]) || 0) +1;
    })
    console.log(resultado); 
}