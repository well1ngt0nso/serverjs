const { createServer } = require('node:http');
const port = 3000;
const localhost = '127.0.0.1';


server = createServer((req,  res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permite todas as origens
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Permite métodos
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Permite cabeçalhos

    if(req.url === "/pasta"){
        res.statusCode = 200;
        res.setHeader('Contain-Type', 'text/plain');
        res.end(`Requisicao recebida para:` + req.url);
        console.log(`Requisicao recebida para:` + req.url);

    } else if(req.url === "/edit"){

        res.statusCode = 200;
        res.setHeader('Contain-Type', 'text/plain');
        res.end(`Requisicao recebida para:` + req.url);
        console.log(`Requisicao recebida para:` + req.url);

    }else{
        res.statusCode = 404;
        res.setHeader('Contain-Type', 'text/plain');
        res.end(`Requisicao recebida mas nao encontrada para:` + req.url);
        console.log(`Requisição recebida mas não encontrada para:` + req.url);

    }
})
server.listen(port, localhost, ()=>{

    console.log("Server conectado");

});