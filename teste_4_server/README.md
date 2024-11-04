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
            fetch('http://127.0.0.1:3000' + endpoint)  // Endpoint relativo
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
                    document.getElementById('resposta').innerHTML = data; // Substitui o conteúdo
                })
                .catch(error => console.error('Erro:', error));
              }
         </script>

    
    </head>
    <body>
        <h1> Teste de Requisição </h1>  
        <p id="resposta"> Aguardando Resposta...</p>
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

- **RESPOSTA NO SERVER** : Tudo ok, você já testou isso ao fazer a requisição direta da barra do navegador e obter a resposta;
- **NO index.html**: Tudo ok, checamos o status da resposta `response.ok` e retornamos ela no formato de texto de acordo com o que configuramos no server, após isso pegamos o elemento de bloco de texto pelo id e trocamos o seu conteúdo pela resposta `document.getElementById('resposta').innerText = data;`, tudo ok
- **NO NAVEGADOR**: Vamos analisar as mensagens de erro:

  
 <p align="center">
  <img src="https://github.com/user-attachments/assets/19baeb60-6031-442a-bd00-5d9a42a60c0b" width="80%" />
</p>

Conclusões:
1. Temos 4 tipos de mensagem
2. Cada uma das 3 requisições retorna duas mensagens de erro iguais: (1) verde e (3) roxo, as duas primeiras são iguais `/pasta`  e `/edit`, a última requisição parece igual as outras, mas não é, tem uma diferença em (4), `ERR_FAILED 404 (Not Found)`, definimos 200 para requisição ok e 404 nos demais casos, como é o caso do `/favcon.ico`.

O que podemos fazer é analisar a primeira mensagem de erro e já adianto que a solução dessa resolve as outras, você pode perquisar mais a fundo, mas adianto que esse erro é devido algo chamado CORS:

A primeira mensagem de erro recebida está relacionada ao **CORS**. Esse erro acontece porque o navegador aplica uma política de segurança chamada Cross-Origin Resource Sharing (CORS), que impede requisições de origens diferentes, a menos que o servidor permita explicitamente. Lembra que falei sobre a página carregar mesmo com o servidor desligado? Como a aplicação cliente está carregando localmente, fora do servidor, o navegador interpreta essa requisição como sendo de uma origem cruzada e bloqueia a resposta por motivos de segurança, causando erros de CORS. Esse bloqueio impede o cliente de receber dados do servidor e encadeia erros de requisição e `fetch`

### Solução para o Erro de CORS

Para corrigir esse problema, é necessário configurar o servidor para permitir requisições de origens específicas. Isso é feito adicionando cabeçalhos CORS na resposta do servidor, como:

```javascript

// Configuração básica de CORS no Node.js
res.setHeader('Access-Control-Allow-Origin', '*'); // Permite todas as origens (apenas para testes locais)
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Permite métodos específicos
res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Permite cabeçalhos específicos

```
Isso antes de qualquer resposta, você verá que apenas o botão do `/favcon.ico` não exibie resposta na tela, veremos o porquê na próxima aula...
Código completo na pasta!


[<< VOLTANDO](https://github.com/well1ngt0nso/serverjs/blob/main/teste_3_server/README.md#requisitando-valores)  [ANDAMENTO>>]()
