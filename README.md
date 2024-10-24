# serverjs

Este repositório destina-se a demonstrar como estabelecer comunicação entre dispositivos em uma rede, seja via Wi-Fi ou Ethernet, utilizando uma API ("servidor") desenvolvida em Node.js (JavaScript). O foco é em uma comunicação local que, após a conclusão deste projeto, poderá ser facilmente portável. Serão abordados tópicos como: como funciona a comunicação, como visualizar dados, como enviar dados e como acessá-los. O objetivo inicial é explorar a manipulação e visualização desses dados.

# BREVE INTRODUÇÃO

Utilizamos computadores, telefones e tablets, e, como por mágica, todos esses dispositivos conseguem se comunicar, seja dentro de uma rede ou a partir de redes diferentes. Aplicativos de mensagens, videoconferências e muitos outros serviços dependem do que chamamos de internet. Quando abrimos um aplicativo de vídeo, uma quantidade limitada de dados é exposta, mas, ao realizarmos uma pesquisa, uma quantidade muito maior aparece. Como isso é possível? Esses dados não caberiam em um telefone, por exemplo. Quando a internet cai, o acesso é interrompido; em alguns casos, o vídeo continua sendo reproduzido e logo para. E quando falamos sobre a enorme quantidade de dados presentes no Google? Esses dados são imensos. Já pensou em como uma mensagem chega ao seu dispositivo em um aplicativo de conversa? Como a mensagem "sabe" que é para você? Muitas perguntas surgem, e é isso que tentaremos exemplificar.

### Objetivos: 

O objetivo deste projeto é estabelecer as bases para um entendimento fundamental da comunicação em rede. Não vamos criar um aplicativo de vídeos, um aplicativo de mensagens ou enviar dados complexos pela rede. Em vez disso, iremos manipular dados simples em uma rede local, focando em comunicação entre dispositivos comuns, como telefones e PCs, mas com ênfase em dispositivos como ESP, Arduino e outros.


### Objetivos específicos: 

* Enviar as principais estruturas de dados: int, float, char, string, etc.
* Receber e manipular dados: Aprender como receber e manipular dados (sem utilizar banco de dados).
* Implementar via hardware: Aplicar isso utilizando as placas mencionadas.
* Comunicar todos os dispositivos na rede: Estabelecer comunicação entre todos os dispositivos conectados.


### Como funciona a comunicação básica: 
A comunicação em uma rede básica pode ser descrita pelos seguintes passos:

* Cliente >> Roteador >> Servidor: Este é o fluxo de envio de uma solicitação ou dado do cliente para o servidor, passando pelo roteador.

* Cliente << Roteador << Servidor: Este é o fluxo de recepção de uma resposta ou dado do servidor para o cliente, novamente passando pelo roteador.

Os clientes são os dispositivos na rede, também chamados de hosts. O roteador tem a função de estabelecer a comunicação entre os dispositivos internos (hosts) e outros dispositivos, que podem estar dentro da rede (comunicação local) ou fora dela (comunicação com a internet). Nesse caso, o roteador estabelece a comunicação com servidores externos.

## COMO FUNCIONA A COMUNICAÇÃO?

Os dispositivos conectados na rede comunicam-se através do protocolo http://, imaginem um protocolo como o idioma que eles se comunicam na rade. Existem diferentes protocolos, alguns para comunucação na internet e outros para comunicação via hardware, outro exemolo de protocolo utilizado na internet é o MQTT(Message Queuing Telemetry Transport), muito utilizado em ambientes IOT. Também temos alguns outros tipos de protocolos, por exemplo o I2C e o Serial, ambos utilizados em sistemas embarcados, placas como esp e Arduino.


## COMO SABEMOS QUEM É QUEM NA REDE?
No caso dos dispositivos em uma rede, cada um não tem um "nome", mas sim um endereço IP, usado para identificar e diferenciar os dispositivos conectados. Cada dispositivo na mesma rede possui um endereço IP único.

O endereço IP segue o formato: xxx.xxx.xxx.xxx, onde cada conjunto de números, separados por pontos, é conhecido como octeto. Vamos entender melhor o porquê disso:

Por exemplo: 192.168.0.4, 192.168.0.8 e 192.168.0.30. Podemos observar que os três primeiros octetos permanecem os mesmos, enquanto o último muda. Isso ocorre porque os primeiros octetos representam a rede, e o último octeto indica o dispositivo (ou host) dentro dessa rede.

A máscara de sub-rede define essa separação entre a parte do endereço que representa a rede e a que representa os dispositivos. Um exemplo comum de máscara de sub-rede é 255.255.255.0, onde os octetos configurados como 255 indicam a parte da rede, e o octeto 0 indica os dispositivos dentro dessa rede. Isso é usado em redes locais padrão, mas existem outras configurações dependendo da necessidade da rede. Por exemplo, em redes maiores ou mais segmentadas, máscaras como 255.255.0.0 ou 255.0.0.0 podem ser usadas, onde mais octetos são dedicados para identificar os dispositivos.

Em suma, cada octeto pode variar de 0 a 255. Entretanto, há regras, como:

O octeto que representa o dispositivo (por exemplo, em 255.255.255.xxx) não pode ser 0 ou 255.
* O 0 é reservado para identificar a rede.
* O 255 é usado para broadcast, que envia uma mensagem a todos os dispositivos de uma rede.
Essas regras podem variar conforme a versão do protocolo IP (IPv4 ou IPv6) e a máscara de sub-rede aplicada. O termo octeto vem do fato de que cada octeto é composto por 8 bits, o que permite 256 combinações possíveis (de 0 a 255).

Caso queira visualizar essas informações no seu computador, basta digitar o comando 

  ```bash
     node -v
   ````
   
no **CMD (Prompt de Comando)** do Windows, e várias informações sobre a rede serão exibidas.


<p align="center">
  <img src="https://github.com/user-attachments/assets/c61163cb-7664-402a-827d-3d3bc2d7f103" alt="Descrição da imagem" width="50%" />
</p>

## COMO INSTALAR O NODE.JS 

O JavaScript roda nativamente no navegador, mas para executá-lo fora dele, precisamos de uma ferramenta que ofereça os módulos e o ambiente necessários. Utilizamos o **Node.js** para isso.

## Como instalar o Node.js

1. Acesse o site oficial do [Node.js](https://nodejs.org/en) e baixe a versão recomendada para o seu sistema operacional.
2. Siga as etapas da instalação (próximo, aceitar termos, etc.).

Após a instalação, você não verá um aplicativo do Node.js na área de trabalho, pois ele é um ambiente de execução, e não uma aplicação visual.

## Verificando a instalação

1. Abra o **Prompt de Comando (CMD)** ou o terminal.
3. Digite o comando abaixo para verificar se a instalação foi bem-sucedida:
   
     ```bash
     node -v

## Testando o Node.js

### Criando arquivos e rodando no Visual Studio Code

Para testar o Node.js, vamos utilizar o **Visual Studio Code**. Certifique-se de que ele esteja instalado no seu computador.

#### Passos:

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
   
## E AGORA?

