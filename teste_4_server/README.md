# Tratando as respostas no html 
Vimos que já conseguimos receber e tratar as respostas no prório server quando as requisições vem de uma página html, agora vamos tratalas 

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

[ANDAMENTO>>]()
