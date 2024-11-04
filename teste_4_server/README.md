# Tratando as respostas no html 
Até aqui já conseguimos receber e tratar as respostas no prório server quando as requisições vem de uma página html, agora vamos tratalas e ver algo além das mensagens do console do navegador

## Tratando Respostas com `.then` em JavaScript

Ao realizar requisições a partir de uma página HTML, utilizamos o método `.then()` para manipular as respostas de forma assíncrona de modo que não trave a execução do restante do código. O método `.then()` permite processar a resposta da requisição assim que ela é recebida, o que facilita a exibição ou manipulação dos dados diretamente no navegador.

### Exemplo de Uso com `.then()`

Abaixo está um exemplo de como usar `.then()` para processar dados retornados por uma API ou servidor.

```javascript
fetch('URL_DA_SUA_API')
  .then(response => {
    // Verifica se a resposta está ok (status 200)
    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    // Converte a resposta para JSON
    return response.json();
  })
  .then(data => {
    // Manipula os dados recebidos
    console.log(data);
    // Exemplo de exibição dos dados em um elemento HTML
    document.getElementById('resposta').innerText = JSON.stringify(data);
  })
  .catch(error => {
    console.error('Erro:', error);
  });
```
- **`fetch('URL_DA_SUA_API')` **: Inicia a requisição HTTP para a API ou servidor especificado.
- **`.then(response => { ... })`**: Trata a resposta inicial da requisição.
  - **`response.ok`**: Checa se o status da resposta é bem-sucedido (código 200).
  - **`response.json()`**: Converte a resposta em JSON, para que os dados possam ser manipulados.
- **`.then(data => { ... })`**: Processa os dados convertidos. Aqui, podemos exibir os dados na página HTML ou manipulá-los conforme necessário.
- **`.catch(error => { ... })`**: Captura e lida com erros que possam ocorrer durante a requisição ou processamento dos dados.

### SISTEMA COMPLETO
Estrututra:

```plaintext
tratando_solicitacao_simples
│
├── README.md          # Documentação do projeto
├── server.js          # Arquivo JavaScript para o servidor
└── index.html         # Arquivo HTML principal
```

O html semelhante ao do exemplo anterior: 
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset = 'UTF8'>
        <title>Teste Requisição</title>
         <script>
        // Função para fazer requisição
        function requist(endpoint) {
            fetch('http://127.0.0.1:3000' + endpoint)  // Endpoint ABSOLUTO relativo seria o próprio "endpoint"
                .then(response => {
                    // Verifica se a resposta foi bem-sucedida
                    if (!response.ok) {
                        throw new Error('Erro na requisição: ' + response.status);
                    }
                    return response.text();
                })
                .then(data => {
                    // Atualiza o output com a nova respost
                    console.log('aqui');
                    document.getElementById('output').innerHTML = data; // Substitui o conteúdo
                })
                .catch(error => console.error('Erro:', error));
              }
         </script>

    
    </head>
    <body>
        <h1> Teste de Requisição </h1>  
        <button onclick ="requist('/pasta')"> /pasta</button>
        <button onclick ="requist('/edit')"> /edit </button>
        <button onclick ="requist ('/favcon.ico')"> / favicon.ico </button>
    </body>
</html>
```

Jacascript do servidor:
```javascript

/* const { createServer } = require('node:http');
const { readFile } = require('node:fs');
const path = require('node:path');

const hostname = '192.168.1.4';  
const port = 3000;

// Função para servir arquivos
function serveFile(filePath, res, contentType = 'text/html') { //recebe o caminho correto, o objeto da resposta e um argumento que até podemos omitir 
    readFile(filePath, (err, data) => {  
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Erro ao carregar o arquivo.');
            console.error(err);
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', contentType);
            res.end(data);
        }
    });
}

const server = createServer((req, res) => {
    console.log(req.url); // Loga a URL requisitada
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permite todas as origens
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Permite métodos
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Permite cabeçalhos


    if (req.url === "/") {
        // Serve o index.html na raiz
        serveFile(path.join(__dirname, 'index.html'), res); //__dirname (caminho onde o arqui server.js está) Esse path.join é semelhante ao python (ele vê qual sistema e deixa no formato certo)
    } 
    else if (req.url === "/pasta") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Estamos na pasta\n');
    } 
    else if (req.url === "/pasta/edit") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Estamos na edição da pasta\n');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`A rota nao é válida.\n`);
    }
});

// Inicia o servidor
server.listen(port, hostname, () => {
    console.log('Servidor rodando em http://' + hostname + ':' + port);
});


//CRIA JASON
//npm init -y    */

const { createServer } = require('node:http');
const port = 3000;
const localhost = '127.0.0.1';

server = createServer((req,  res) => {
    if(req.url === "/pasta"){
        res.statusCode = 200;
        res.setHeader('Contain-Type', 'text/plain');
        res.end(`Requisicao recebida para:` + req.url);
        console.log(`Requisicao recebida para:` + req.url);

    } else if(req.url === "/edit"){

        res.statusCode = 200;
        res.setHeader('Contain-Type', 'text/plain');
        res.end(`Requisicao recebida para:` + req.url);
        console.log(`Requisição recebida para:` + req.url);

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
```

Criando esses arquivos, basta rodar o servidor e depois abir o `index.html` no navegador, embora a pasta já esteja toda feita [aqui](), recomendo digitar para gravar e tentar se familiarizar com os arquivos, pastas, foramtos e o algorítimo em si...

A primeira coisa que destaco é que como server iniciado ou não, a página vai aparecer... Estranho né? já que as páginas ficam armazenadas no servidor, pode ser que o server já tivessse iniciado, derrube ele e tente rodar página novamente, rodou né?! vamos ver isso...

Após aberto deve aparecer algo assim, 1 e 2, mas com o botão direito do mouse >> inspecionar, deve aparecer o 3 que é o console do navegador, vamos vendo para que serve... Pode ser que apareça alguma mensagens de início em vermelho, siga os passos:
1. Atualize a página
2. Se aparecer mensagens de erro ao lado clique no cículo com uma linha que o corta no canto superior esquerdo para limpar o console
3. Inicie o server, se já estava iniciado Ok.

 <p align="center">
  <img src="https://github.com/user-attachments/assets/c0136dcd-ebed-48ac-9a8a-2e8638776217" width="80%" />
</p>



Ok, server iniciado e página ok, apertamos algum botão e aparece vários erros: 

 <p align="center">
  <img src="https://github.com/user-attachments/assets/fc753285-59c6-4b9a-bcc8-08acdc87f68b" width="80%" />
</p>

1. Pode ser problema na página, no server, no navegador e em vários outros lugares, o que recomendo de início é checar o algoritmo, os nomes e fazer todo o caminho: botão chama a função tal (essa função está definida) >> função faz requisição em tal endereço.. (tal endereço está certo?)... até chegar no server e nas respostas, estando tudo ok, vamos para outras analises
2. Página está rodandp?  supordo que ela apareceu no navegador, tudo ok
3. O  serve está rodandp? Faça uma requisição direta da barra de endereço do navegador e veja: `http://127.0.0.1:3000/` ou `http://127.0.0.1:3000/pasta` ....
   veja o que acontece, lembre que o retorno deve está de acordo com o que voçê definiu para cada endpoint:

```javascript 
   if(req.url === "/pasta"){
        res.statusCode = 200;
        res.setHeader('Contain-Type', 'text/plain');
        res.end(`Requisicao recebida para:` + req.url);  
        console.log(`Requisicao recebida para:` + req.url);

    } else if(req.url === "/edit"){

        res.statusCode = 200;
        res.setHeader('Contain-Type', 'text/plain');
        res.end(`Requisicao recebida para:` + req.url);
        console.log(`Requisição recebida para:` + req.url);

    }else{
        res.statusCode = 404;
        res.setHeader('Contain-Type', 'text/plain');
        res.end(`Requisicao recebida mas nao encontrada para:` + req.url);
        console.log(`Requisição recebida mas não encontrada para:` + req.url);

    }
```

Supondo que voçê fez tudo igual aos algoritmos que forneci, deve está recebendo a resposta quando digita o endereço direto na barra do navegador, veja novamente o index e veja se ao apertar o botão o endereço está sendo formatado corretamente, supondo que está igual ao que forneci, não nos resta mais nada, o navegador é o culpado! Vamos testar para ver se é ele mesmo, faça uma requisição e veja no terminal do server no VS se você tem resposta ao apertar os botões, você programou um `console.log` para printar algo quando recebe uma requisição...

Você deve ter acabado de ver que recebe, ou seja, `index.html` ok, `server.js` também, só ainda não temos essa resposta visual no navegador, não como queriamos, estamos recebendo erros, pode ser problema ao manipular a resposta, seja na interpretaação ou no envio, vamos abordar as duas:

- **RESPOSTA NO SERVER** : Tudo ok, você já testou isso ao fazer a requisição direta da barra do navegador e obter resposta;



[<< VOLTANDO](https://github.com/well1ngt0nso/serverjs/blob/main/teste_3_server/README.md#requisitando-valores)  [ANDAMENTO>>]()
