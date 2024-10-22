# serverjs

Este repositório destina-se a demonstrar como estabelecer comunicação entre dispositivos em uma rede, seja via Wi-Fi ou Ethernet, utilizando uma API ("servidor") desenvolvida em Node.js (JavaScript). O foco é em uma comunicação local que, após a conclusão deste projeto, poderá ser facilmente portável. Serão abordados tópicos como: como funciona a comunicação, como visualizar dados, como enviar dados e como acessá-los. O objetivo inicial é explorar a manipulação e visualização desses dados.

BREVE INTRODUÇÃO

Utilizamos computadores, telefones e tablets, e, como por mágica, todos esses dispositivos conseguem se comunicar, seja dentro de uma rede ou a partir de redes diferentes. Aplicativos de mensagens, videoconferências e muitos outros serviços dependem do que chamamos de internet. Quando abrimos um aplicativo de vídeo, uma quantidade limitada de dados é exposta, mas, ao realizarmos uma pesquisa, uma quantidade muito maior aparece. Como isso é possível? Esses dados não caberiam em um telefone, por exemplo. Quando a internet cai, o acesso é interrompido; em alguns casos, o vídeo continua sendo reproduzido e logo para. E quando falamos sobre a enorme quantidade de dados presentes no Google? Esses dados são imensos. Já pensou em como uma mensagem chega ao seu dispositivo em um aplicativo de conversa? Como a mensagem "sabe" que é para você? Muitas perguntas surgem, e é isso que tentaremos exemplificar.

Objetivos: 

O objetivo deste projeto é estabelecer as bases para um entendimento fundamental da comunicação em rede. Não vamos criar um aplicativo de vídeos, um aplicativo de mensagens ou enviar dados complexos pela rede. Em vez disso, iremos manipular dados simples em uma rede local, focando em comunicação entre dispositivos comuns, como telefones e PCs, mas com ênfase em dispositivos como ESP, Arduino e outros.


Objetivos específicos: 

*Enviar as principais estruturas de dados: int, float, char, string, etc.
*Receber e manipular dados: Aprender como receber e manipular dados (sem utilizar banco de dados).
*Implementar via hardware: Aplicar isso utilizando as placas mencionadas.
*Comunicar todos os dispositivos na rede: Estabelecer comunicação entre todos os dispositivos conectados.


Como funciona a comunicação básica: 
A comunicação em uma rede básica pode ser descrita pelos seguintes passos:

Cliente >> Roteador >> Servidor: Este é o fluxo de envio de uma solicitação ou dado do cliente para o servidor, passando pelo roteador.

Cliente << Roteador << Servidor: Este é o fluxo de recepção de uma resposta ou dado do servidor para o cliente, novamente passando pelo roteador.

Os clientes são os dispositivos na rede, também chamados de hosts. O roteador tem a função de estabelecer a comunicação entre os dispositivos internos (hosts) e outros dispositivos, que podem estar dentro da rede (comunicação local) ou fora dela (comunicação com a internet). Nesse caso, o roteador estabelece a comunicação com servidores externos.
