//esse algorítmo vem direto da página do Node, não consegui rodar de primeira com ele, mas depois consegui ajeitar ele e é isso que vamos ver...

// server.mjs
import { createServer } from 'node:http';  // importa o módulo creaeteServer do node:http

const server = createServer((req, res) => {  // Configura o server 
res.writeHead(200, { 'Content-Type': 'text/plain' });  //retorna um cabeçaljo para resposta padrão
res.end('Hello World!\n'); //resposta
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {   //deixa o server rodando no ip local e na porta 3000
console.log('Listening on 127.0.0.1:3000'); // caso a conexão seja bem sucedida, printa algo n otermil/console
});

// OBS: SIGA AS ETAPAS DE CRIAÇÃO  E EXECUÇÃO DO ARQUIVO NO README.md da pasta...
// run with `node server.mjs`

