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
const { createServer } = require('node:http');
const port = 3000;
const localhost = '127.0.0.1';

server = createServer((req,  res) => {

    if(req.url === "/pasta"){
        res.statusCode = 200;
        res.setHeader('Contain-Type', 'text/plain');
        res.end(req.url);
        console.log(req.url);

    } else if(req.url === "/edit"){

        res.statusCode = 200;
        res.setHeader('Contain-Type', 'text/plain');
        res.end(req.url);
        console.log(req.url);

    }else{
        res.statusCode = 404;
        res.setHeader('Contain-Type', 'text/plain');
        res.end(`Não encontrado`);
        console.log(req.url);

    }
})
server.listen(port, localhost, ()=>{

    console.log("Server conectado");

});
```



Javascript do cliente, poderia fazer assim, mas seria a mesma coisa apenas com uma nova pasta para os sxripts:
```javascript
<script>
      function requist(endpoint){
      fetch ('http://127.0.0.1:3000' + endpoint)
</script>
```

 


[<< VOLTANDO](https://github.com/well1ngt0nso/serverjs/blob/main/teste_3_server/README.md#requisitando-valores)  [ANDAMENTO>>]()
