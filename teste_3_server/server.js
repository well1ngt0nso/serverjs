const { createServer } = require('node:http');
const port = 3000;
const localhost = '127.0.0.1';

server = createServer((req,  res) => {

    if(req.url === "/pasta"){
        res.statusCode = 200;
        res.setHeader('Contain-Type', 'text/plain');
        res.end(req.url);
        console.log(req.url)

    } else if(req.url === "/edit"){

        res.statusCode = 200;
        res.setHeader('Contain-Type', 'text/plain');
        res.end(req.url);
        console.log(req.url)

    }else{
        res.statusCode = 404;
        res.setHeader('Contain-Type', 'text/plain');
        res.end(`Não encontrado`);
        console.log(req.url)

    }
})
server.listen(port, localhost, ()=>{

    console.log("Server conectado");

});
