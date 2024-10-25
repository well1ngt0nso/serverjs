# Testando o Node.js

## Criando arquivos e rodando no Visual Studio Code

Para testar o Node.js, vamos utilizar o **Visual Studio Code**. Certifique-se de que ele esteja instalado no seu computador.

### Passos:

1. **Crie uma pasta** em qualquer diretório do seu sistema para organizar o projeto.
2. **Dentro dessa pasta**, crie um arquivo com extensão `.js` (geralmente o nome é `index.js` para arquivos principais).
3. **Abra a pasta** no **Visual Studio Code**:
   - Clique em `File` (Arquivo) > `Open Folder` (Abrir Pasta).
   - Selecione a pasta criada anteriormente.

Agora você pode começar a escrever seu código JavaScript e testá-lo com o Node.js!

### Executando o arquivo no terminal

1. No **Visual Studio Code**, vá até o terminal embutido. Para abrir o terminal, use o atalho:
   - **Windows/Linux**: `Ctrl + Shift + ~`
   - **Mac**: `Cmd + Shift + ~`
   
2. No terminal, digite o seguinte comando para executar o arquivo `.js`:
   ```bash
   node index.js

### ⚠️ **OBS**:

Como já estava rodando JavaScript no navegador antes de começar a trabalhar no servidor, acabei criando o arquivo com a extensão `.js`, seguindo as orientações anteriores. No entanto, o código não funcionou, então segui outra abordagem. Felizmente, identifiquei o problema, e vamos iniciar a explicação a partir disso.

No site do **Node.js**, há um exemplo básico de criação de um servidor. Ao tentar rodar esse código no Visual Studio Code, uma mensagem de erro apareceu, especificamente relacionada à forma de importar o módulo `createServer`. Sem perder tempo, encontrei outra maneira de resolver, que explicarei mais adiante, mas primeiro, vejamos como rodar o código diretamente do [site](https://nodejs.org/pt):

- **Simples**: Troque a extensão `.js` por `.mjs` no arquivo e cole o código lá.

1. Após isso, o código deverá rodar sem problemas, e uma mensagem aparecerá no terminal do VS Code indicando em qual porta o servidor está escutando.

2. Para testar, abra o navegador e digite o IP e a porta definidos, como: `127.0.0.1:3000` ou `http://127.0.0.1:3000`.

3. **⚠️ OBS**: É importante lembrar que o teste deve ser feito na **mesma máquina** onde o servidor está rodando, pois o IP `127.0.0.1` é destinado a **conexões locais** (*localhost de loopback interno*). Isso significa que qualquer tráfego enviado para esse IP será processado apenas na própria máquina que está executando o servidor. Se tentar acessar esse IP a partir de outro dispositivo na rede, o navegador do outro dispositivo tentará localizar o servidor localmente (no próprio dispositivo), e obviamente, não encontrará nada, a menos que haja um servidor rodando lá também.

4. Em resumo, se tentar acessar o servidor de outro dispositivo, não haverá retorno.

5. Quando tudo estiver funcionando corretamente, ao abrir o navegador, você verá uma mensagem "Hello World" (ou a resposta que você configurou no servidor).

ALGUNS PONTOS:
* Para derrubar o server baasta `ctrl + c` no terminal no VS
* Para "ver" o server basta digitar no CMD:
  
  ```bash
   netstat -ano
  
Enquanto estiver ativo ele estará la (*listening*), com outras informações. Deve estar no começo do protocolo TCP para comunicação local.



