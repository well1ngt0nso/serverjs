# </> INTERAGINDO COM PÁGINAS HTML 📂🌐

Serão várias aulas em sequência abordando diferentes casos e problemas que podem ocorrer, incluindo alguns que já enfrentei.

## REQUISITANDO VALORES

Até agora, requisitamos os valores enviados diretamente pelo campo de URL, que é uma prática comum ao acessar um site. No entanto, outra forma também muito utilizada é enviar uma requisição a partir de uma página HTML.

### DIRETÓRIOS📂

A estrutura do projeto é a seguinte:

```plaintext
projeto_request_html
│
├── README.md              # Documentação do projeto
├── index.js               # Arquivo JavaScript para o servidor
└── html
    └── index.html         # Arquivo HTML principal
```

⚠️ **OBS:** Não é uma prática ideal deixar arquivos com o mesmo nome em um único local, mesmo que com extensões diferentes. Neste caso, podemos relevar isso devido aos diretórios distintos. Entretanto, para facilitar a compreensão, iremos melhorar essa estrutura em projetos futuros.

⚠️ **OBS:** Estamos utilizando uma página web bem simples; nem mesmo um arquivo `.css` temos, como pode ver. Contudo, há um outro diretório dedicado a HTML e CSS: [HTML/CSS](https://github.com/well1ngt0nso/HTML-CSS#html-css). 

Irei abordar algumas questões relacionadas ao HTML e CSS, mas seria bom dar uma olhada lá no nosso outro repositório para que possamos fazer isso em paralelo, a intenção é garantir que você tenha um entendimento mais abrangente também nesses outros tópicos. O que for diretamente ligado ao servidor e JavaScript será aprofundado neste repositório.

### CIRANDO SERVER
Vamos utilizar um serve bem semelhante ao da aula anterior:

```javascript
//index.js
const { createServer } = require('node:http');
const port = 3000;
const localhost = '127.0.0.1';

server = createServer((req,  res) => {

    if(req.url === "/pasta"){
        res.statusCode = 200;
        res.setHeader('Contain-Type', 'text/plain');
        res.end(req.url);

    } else if(req.url === "/edit"){

        res.statusCode = 200;
        res.setHeader('Contain-Type', 'text/plain');
        res.end(req.url);

    }else{
        res.statusCode = 404;
        res.setHeader('Contain-Type', 'text/plain');
        res.end(`Não encontrado`);
    }
})
server.listen(port, localhost, ()=>{

    console.log("Server conectado");

});
```
Para testar basta acessar os *endpoints`* no navegador e a resposta será exibida, perceba que o server está rodando localmente, para alterar é só colocar o seu IP


Agora vamos para o html:

```html
<!-- index.html>
<!DOCTYPE html>
<html>
    <head>
        <meta charset = 'UTF8'>
        <title>Teste Requisição</title>
    </head>
    <body>
        <h1> Teste de Requisição </h1>  
        <button onclick =''> /pasta</button>
        <button onclick =' '> /edit </button>
        <button onclick =' '> /favicon.ico </button>
    </body>
</html>
```
Para testar basta abrir o arquivo no navegador

Você vai perceber que ao cliar nos botões nada acontece, vamos mudar o `index.js`:

```javascript
//index.js
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
        res.statusCode = 202;
        res.setHeader('Contain-Type', 'text/plain');
        res.end(`Não encontrado`);
        console.log(req.url)

    }
})
server.listen(port, localhost, ()=>{

    console.log("Server conectado");

});
```
Agora estamos printando o endpoint quando chega algo, tente requisitar algo pelo navegador `seu_ip:porta/endpoint`
Possívelmente aparece no terminal, agora tente pelos botões e verá que nada acontece! Pelo navegador a requisição chega e pelos botões não! 

Isso acontece porque nosso html não estabelece nenhuma comunicação com o servidor, é apenas una página estática, para estabelecer uma comunicação vamos estabelecer umas comunicação pelo lado do cliente e também com javascript, para isso vamos asicionar o seguinte bloco de código no html logo abaixo a tag`<title>`: 

```html
<html>
        <script>
            function requist(endpoint){
            fetch('http://127.0.0.1:3000' + endpoint);
        }
        </script>
```

Isso é um bloco de javascript dentro do html, não é a melhor abordagem, mais para frente vamos separar em arquivos...
basicamente a gente cria uma função que recebe como parâmetro o endpoint que queremos acessar, e dentro usamos uma função do javascript que faz requisições `fech(url);`.


> ⚠️ **OBS:** Dependendo de como você está fazendo, pode ocorrer erros sutís e que podem ser desafiador de início, recomendo só passar para próxima etapa qunado a etapa atual funcionar e utilize o código que disponibilizo para comparar caso algum erro ocorra e recomendo olhar o [Tteste_2_server](https://github.com/well1ngt0nso/serverjs/tree/main/teste_2_server#voltando-um-pouco), lá falo sobre os principais problemas e como resolver!

Agora temos que chamar a funçao que criamos ao clicar no botão, por sorte existe um atributo de evento em html que execuata algo ao clicar no botão: `onclick = ""`. Passamos nossa função e o endpoint que queremos acessar: 

html completo: 
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset = 'UTF8'>
        <title>Teste Requisição</title>
        <script>
            function requist(endpoint){
            fetch ('http://127.0.0.1:3000' + endpoint)
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

Até aqui apenas requisitamos, mas e a resposta da requisição?
Vemos na próxima aula, let's go!!!

[ANDAMENTO>>]()


