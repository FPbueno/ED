import * as fs from 'fs';

// Função para ler o arquivo e armazenar as palavras em um vetor
function lerArquivoEArmazenarPalavras(nomeArquivo: string): string[] {
    // Lê o conteúdo do arquivo de forma síncrona
    const conteudo = fs.readFileSync(nomeArquivo, 'utf-8');
    
    // Separa as palavras do texto
    const palavras = conteudo.split(/\s+/);
    
    const palavrasUnicas = Array.from(new Set(palavras));
    
    return palavrasUnicas;
}

function bubbleSort(palavras: string[]): string[] {
    const n = palavras.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (palavras[j] > palavras[j + 1]) {
                const temp = palavras[j];
                palavras[j] = palavras[j + 1];
                palavras[j + 1] = temp;
            }
        }
    }
    return palavras;
}

function escreverPalavrasOrdenadas(nomeArquivo: string, palavras: string[]): void {
    const conteudo = palavras.join('\n');
    
    fs.writeFileSync(nomeArquivo, conteudo, 'utf-8');
}

const nomeArquivoEntrada = 'entrada.txt';
const nomeArquivoSaida = '_ord.txt';

const listaDePalavras = lerArquivoEArmazenarPalavras(nomeArquivoEntrada);

const listaDePalavrasOrdenadas = bubbleSort(listaDePalavras);

escreverPalavrasOrdenadas(nomeArquivoSaida, listaDePalavrasOrdenadas);

console.log(listaDePalavrasOrdenadas);
