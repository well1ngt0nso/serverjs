
const { createServer } = require('node:http');

const hostname = '192.168.2.5';  
const port = 3000;

const server = createServer((req, res) => {
    console.log(req.url); // Loga a URL requisitada

    // Tratamento para a URL "/pasta"
    if (req.url === "/pasta") {
        res.statusCode = 200; // OK
        res.setHeader('Content-Type', 'text/plain');
        res.end('Estamos na pasta\n'); // Envia a resposta
    } 
    // Tratamento para a URL "/pasta/edit"
    else if (req.url === "/pasta/edit") {
        res.statusCode = 200; // OK
        res.setHeader('Content-Type', 'text/plain');
        res.end('Estamos na edição da pasta\n'); // Envia a resposta
    } 
    // Caso não encontre nenhuma rota
    else {
        res.statusCode = 404; // Página não encontrada
        res.setHeader('Content-Type', 'text/plain');
        res.end(`A rota "${req.url}" não é válida.\n`); // Resposta personalizada para URLs não definidas
    }
});

// Inicia o servidor
server.listen(port, hostname, () => {
    console.log('Servidor rodando em http://' + hostname + ':' + port);
});
