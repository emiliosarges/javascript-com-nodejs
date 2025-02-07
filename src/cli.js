<<<<<<< HEAD
import { readFile } from 'fs';
import trataErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';


const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];
const endereco = caminhoArquivo[3]
=======
import fs from 'fs';
import trataErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';
import { montaSaidaArquivo } from './helpers.js';

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];
const endereco = caminhoArquivo[3];
>>>>>>> 23ce80ef0906e081d262bf78b6d01b91152c8602

fs.readFile(link, 'utf-8', (erro, texto) => {
    try {
        if (erro) throw erro
        const resultado = contaPalavras(texto);
        criaESalvaArquivo(resultado, endereco);
    }   catch(erro) {
<<<<<<< HEAD
       console.log(trataErros(erro));
    }
})

async function criaESalvaArquivo(listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = JSON.stringify(listaPalavras);
    try {
        await fs.promises.writeFile(arquivoNovo, textoPalavras);
        console.log('Arquivo criado');
    } catch(erro) {
        throw erro;
    }
}
=======
        trataErros(erro);
    }
})

//async await - mais moderna, mais fácil de escrever e de entender

async function criaESalvaArquivo(listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = montaSaidaArquivo(listaPalavras);
    try{
        await fs.promises.writeFile(arquivoNovo, textoPalavras);
        console.log('arquivo criado');

    } catch(erro) {
        throw erro;
    }
}

//then, mais antiga, mais encontrada nos códigos, menos fácil de escrever e de entender

// function criaESalvaArquivo(listaPalavras, endereco) {
//     const arquivoNovo = `${endereco}/resultado.txt`;
//     const textoPalavras = JSON.stringify(listaPalavras);
//     fs.promises.writeFile(arquivoNovo, textoPalavras)
//       .then((json) => {
//         console.log('arquivo criado');
//       })
//       .catch((erro) => {
//         throw erro
//       })
//       .finally(() => console.log('operação finalizada'));
// }

>>>>>>> 23ce80ef0906e081d262bf78b6d01b91152c8602
