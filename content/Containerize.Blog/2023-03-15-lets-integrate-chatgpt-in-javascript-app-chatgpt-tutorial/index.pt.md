---
title: "Vamos integrar o ChatGPT no aplicativo JavaScript | Tutorial de chatgpt" 
seoTitle: "Integrar chatgpt no aplicativo JavaScript" 
description: "Simplesmente execute \"npm i chatgpt\" e comece a usar o OpenAi chatbot no seu aplicativo Node.js. Siga este guia para aprender a integrar o ChatGPT no aplicativo JavaScript." 
date: 2023-03-15T00:00:00+00:00
author: Muhammad Mustafa
summary: "Simplesmente execute \"npm i chatgpt\" e comece a usar o OpenAi chatbot no seu aplicativo Node.js. Siga este guia para aprender a integrar o ChatGPT no aplicativo JavaScript." 
url: /pt/lets-integrate-chatgpt-in-javascript-app-chatgpt-tutorial/
tags: ["Integrate ChatGPT in JavaScript App", "ChatGPT tutorial", "ChatGPT JavaScript", "ChatGPT integration", "OpenAI Chatbot"]
categories: [ 'Artificial intelligence']
---

## simplifique seu software de negócios integrando um chatbot viral baseado em GPT-3. Este tutorial do ChatGPT demonstra as etapas de integração e o trecho de código.

{{< figure align=center src="images/lets-integrate-chatgpt-in-javascript-app-chatgpt-tutorial.png" alt="Integrar chatgpt no aplicativo JavaScript">}}


## Visão geral
Olá leitores! Muito obrigado por sua resposta esmagadora às postagens do blog que publicamos nas integrações [chatgpt][1]. Estamos aqui com outro tutorial útil**chatgpt**seguindo seu interesse. Além disso, estaremos em um loop para publicar artigos benéficos para seus acadêmicos e carreira. No entanto, iniciamos uma [série][20] dos tutoriais do JavaScript, por isso é o melhor momento para escrever um guia que demonstra como**integrar o ChatGPT no JavaScript AQPP**programaticamente. Além disso, escreveremos o snippet de código para fazer essa funcionalidade do chatbot**viral baseada no GPT-3. Para esse fim, ativaremos a funcionalidade ChatGPT em um aplicativo Node.js. Portanto, um nível básico de conhecimento prévio do Node.js é uma vantagem ao passar por este guia.
As seções a seguir serão abordadas neste tutorial do ChatGPT:
* **[Pré -requisitos - Chatgpt JavaScript Wrapper][2]**
* **[Integração ChatGPT com Node.js Application][3]**

## pré-requisitos-Chatgpt javaScript wrapper   {#pré-requisitos --- chatgpt-javascript-wrapper-}
Esta seção demonstra os requisitos necessários para ativar a integração do ChatGPT em um aplicativo baseado em Node.js. Os requisitos são simples e fáceis de instalar no seu sistema.
A seguir, estão os pré-requisitos para praticar esta integração do ChatGPT JavaScript:

 * [NodeJS4](>= 18)

 * [NPM5](>=9)
Depois que os pré -requisitos acima forem instalados, a próxima etapa é obter uma chave de API do OpenAI. Essa chave é usada para fazer solicitações de API para o ChatGPT programaticamente. Portanto, visite este [link][6] para aprender como obter a chave da API do OpenAI, caso não conheça o procedimento.
Por favor, mantenha sua chave da API em um local seguro e isso é tudo para a fase de requisitos.

## ChatGPT Integration com Node.js Aplicativo   {#ChatGPT-Integration-with-node.js-application}
Agora, estamos todos definidos como**integrar o ChatGPT no aplicativo JavaScript programaticamente.**Primeiro, abra o terminal e execute o seguinte comando:
```
npm i chatgpt
```
Após a execução bem-sucedida, siga as etapas a seguir e o snippet de código para fazer uma solicitação ao modelo GPT-3 para interagir com o ChatGPT programaticamente:
 * Importar o chatgptapi.
 * Inicialize o construtor com sua chave de API do OpenAI.
 * Invoque o método SendMessage para enviar uma mensagem ao modelo GPT-3 e receber a resposta.
 * Exibir a resposta.
{{< gist mustafabutt-dev 772dc075f44561ff923e9b0fb761ed38 >}}
Copie e cole o snippet de código acima no seu arquivo de servidor principal e execute o seguinte comando em seu terminal:
```
node index.js
```
**Nota**: Adicionar ("Tipo": "Módulo",) no seu arquivo package.json, caso você receba um erro "não pode usar a instrução Importar fora de um módulo".
Você pode ver a saída na imagem abaixo:

{{< figure align=center src="images/chatgpt_tutorial.png" alt="tutorial de chatgpt">}}

Além disso, este invólucro de JavaScript ChatGPT permite rastrear conversas e enviar mensagens de acompanhamento. A única coisa que você precisa fazer é passar "ParentMessageId" no órgão de solicitação, como mostrado no trecho de código abaixo:
```
response = await api.sendMessage('How are you?', {
  parentMessageId: res.id
})
console.log(res.text);
```
Da mesma forma, você pode explorar muitos outros métodos oferecidos [aqui][7]. Essa integração de chatbot do OpenAI pode fornecer uma vantagem competitiva ao seu aplicativo de nível corporativo.

## Conclusão
Este ponto nos leva ao final deste tutorial**chatgpt**. Esperamos que você tenha aprendido a**integrar o ChatGPT no aplicativo JavaScript**programaticamente. Além disso, você tem o trecho de código de trabalho que pode testar em sua máquina local. Esta postagem do blog é um ativo se você estiver prosperando para aprender**Integração Chatgpt**no seu aplicativo Node.js.

## Conecte-se conosco
Finalmente, [contémize.com][8] escreve continuamente postagens no blog sobre tópicos diferentes. Além disso, você pode nos seguir em nossas contas de mídia social [Facebook][9], [LinkedIn][10] e [Twitter][11].

## Faça uma pergunta
Você pode nos informar sobre suas perguntas ou consultas em nosso [fórum][12].

## Perguntas frequentes
**Como integrar ChatGPT com JavaScript?**
Siga este chatgpt [tutorial][2] para aprender as etapas e o snippet de código para integrar o ChatGPT no aplicativo JavaScript programaticamente.

## Veja também
  * [Uma introdução à inteligência artificial | O que é ai?][13]
  * [Como integrar ChatGPT com o Google Sheets][14]
  * [Como usar o ChatGPT no vscode | O código de extensão do VSCODE GPT][15]
  * [O que é o Openai Chatbot GPT-3 | Chatgpt Uma revolução da IA][16]
  * [Google Docs Integration com ChatGPT | Openai GPT-3][17]
  * [Quais são as 5 principais estruturas de IA de código aberto][18]
  * [O que é AI generativo | Inteligência artificial generativa][19]

  
[1]: https://blog.containerize.com/categories/artificial-intelligence/
[2]: #Pre-requisites---ChatGPT-JavaScript-wrapper-
[3]: #ChatGPT-integration-with-Node.js-application
[4]: https://nodejs.org/en/download/
[5]: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
[6]: https://blog.containerize.com/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/#Retrieve-OpenAI-API-Key-configure-CodeGPT-
[7]: https://www.npmjs.com/package/chatgpt#intro
[8]: https://www.containerize.com/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://forum.containerize.com/
[13]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
[14]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/google-docs-integration-with-chatgpt/
[18]: https://blog.containerize.com/artificial-intelligence/top-5-open-source-ai-frameworks/
[19]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[20]: https://blog.containerize.com/categories/programming/
