# VOLTANDO UM POUCO....
Como comentei anteriormente, comecei utilizando a versão anterior e por isso vou começar por ela

## ALGUMAS DIFERENÇAS: 
Do código anterior as diferenças são sutis:

```javascript
const {createServer} = require('node:http');  //versão anterior
import {createServer} from 'node:http';      //muito semelhante ao python
```

Outra altereação é na forma de como estruturar a resposta:

```javascript
//VERSÃO ANTERIOR
res.statusCode = 200;
res.setHeader('Contente-Type', 'text/plain');
res.end('Hello World');

//MAIS COMPACTA
res.writeHead(200, {'Contain-Type': 'text/plain'});
```
## DEIXANDO DE RODAR EM 127.0.0.1
O servidor estava rodadndo em *localhost*, só era possível acesar fora da rede, agora vamos liberar isso para quem estiver conectado no wi-fi em si:
1. Mudar o IP!
Apenas com essa alteração as solicitações já chegaraão ao nosso server, mas qual IP colocar? Resp: o do dispositivo onde o server roda, no meu caso o PC

1.Digite no **CMD**

```bash
ipconfig
```
Deve aparecer vários blocos, em suma as conexão dos adaptadores de rede  Wifi e ethernet (via cabo), caso queira permitir o acesso por ambas basta utilizar o IP `0.0.0.0`.  No caso de servidores, esse IP libera o acesso das interfaces....  

No meu caso é via cabo, então vou atrás do IP da conexão, nesse caso ele vai estar no bloco etherhet IPv4/IPv6, com isso basta rodar novamente o servidor e acessa-lo na mesma máquina ou fora (necessário estarem na mesma rede), fiz apenas algumas pequenas modificações:

```javascript
const { createServer } = require('node:http'); //Inporta o módulo

// 127.0.0.1   CONEXÃO NA PRÓPRIA MÁQUINA (localhost loopback local)
// 0.0.0.0   O MESMO QUE O IP DA MÁQUINA (CONEXÃO EM TODAS A INTERFACES DE REDE)
const hostname = '192.168.2.5';  //Seu IP (cmd >> ipconfig (endereço IPv4 onde está o server))
const port = 3000; //Porta de conexão

const server = createServer((req, res) => {
  res.statusCode = 200;  //Apenas uma númeração que identifica casos (tem várias) Ex. ERR0 404 (PÁGINA NÃO ENCONTRADA)
  res.setHeader('Content-Type', 'text/plain'); //cabeçalho tipo de resposta (tudo junto na nova versão writeHead(22, {'Content-Type':'text/plain'}))
  res.end('Hello Worlddddd'); //Resposta
});

server.listen(port, hostname, () => {   //Mantém o servidor ouvindo na porta 3000
  console.log(`Server Rodando em http://${hostname}:${port}/`);
});
```
Para testar basta apenas usar outro dispositivo e acessar o mesmo endereço, mas com o novo IP, deve aparecer a mesma mensagem quando o IP era `127.0.0.1`. 

## ENDPOINT's
Quando você digita no seu navegador `seu_ip:port` automaticamente a resposta é recebida, isso ocorre porque não estamos configurando de fato os chamados **endpoints**, vamos entender melhor.

Quando você criou o servidor, uma função **callback** foi passada como argumento:

```javascript
(req, res) => {
...
}
```
E logo após isso coloca o servidor para ouvir na porta 3000, o servidor estará verificando se tem requisição e quando tem, ele chama a função **callback**.
Por isso que independente do que seja digitado, o server vai retonar o mesmo texto. 

REQUISIÇÃO >> SERVER CHAMA CALLBACK >> CALLBACK NÃO TRATA NADA E JÁ RETORNA ALGO

### TRATANDO OS CAMINHOS
Quando estrututo o server posso estabelecer diferentes camihhos, cada um levando para uma parte da minha interface, por exemplo:
No momento que altero esse `README.md` a url é `https://github.com/well1ngt0nso/serverjs/edit/main/teste_2_server/README.md`
* `https://` : Protocolo
* `github.com` : Endereço da página no servidor
* `well1ngt0nso/serverjs/edit/main/teste_2_server/README.md` : Endpoints (as rotas, os caminhos) veri valida
  
  "O usuário `well1ngt0nso` está acessando  `serverjs` que pode acessar `edit` .... e chega em `README.md`. Server: quando a requisição fizer esse caminho libere uma página de edição de...."

Nesse caso cada /expressão/ é um endpoint.

### CRIANDO ENDPOINTS 
Primeiro precisamos entender que tanto `req` como `res` passadas como argumento na função callback recebem objetos, portanto serão objetos. 
Como objetos, uma quantidade de caracteríticas são possibilitadas, no caso `req` um atíbuto pode ser acessado `.url`

```javascript
const {createServer} = require('node:http');

const server = createServer((req, res) => {

res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
console.log('url: ' + req.url);
res.end();

});

server.listen(3000, '192.168.2.5', () =>{
  
    console.log('conectado');

});

```

Rodando esse código será possível observar os endpoints que o navegador requisita, inclusive mesmo que você digite `seu_ip:port` ou `seu_ip:port/`, no fim aparecerá `seu_ip:port` e em ambos os casos será enviado `/`. Para testar os outros basta adicionar caminhos, por exemplo: `seu_ip:port/usuario/senha/email`; `seu_ip:port/pasta`;

Pode ser que chegue mais de uma requisição, no meu caso aparece algo assim:
```bash
url: /pasta
url: /favicon.ico
```

Essa segunda url é a requisição do próprio navegador, nesse caso requisita o ícone da página (pode ser difernte no seu caso)...

### TRATANDO REQUISIÇÕES
Uma forma simples de fazer isso é usando `if(_){};` uma vez que req.url retorna uma string:

```javascript
const { createServer } = require('node:http');

const hostname = '192.168.1.4';  
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

```

## Conclusão 

Já sabemos como manipular os caminhos e como estabelecer comunicação em toda a rede, agora vamos ver outras coisas interessantes...

[LINK DO CÓDIGO](server/index.js)  [ANDAMENTO>>]()
