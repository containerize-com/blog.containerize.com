---
title: "O que é assíncrono aguardando em JavaScript? | Um guia JavaScript" 
seoTitle: "O que é assíncrono aguardando em JavaScript?" 
description: "O que é assíncrono aguardando em JavaScript? As palavras -chave Async & Await são usadas para operar operações assíncronas melhor do que as promessas tradicionais no JavaScript." 
date: 2023-03-08T00:00:00+00:00
author: muhammadmustafa
summary: "O que é assíncrono aguardando em JavaScript? As palavras -chave Async & Await são usadas para operar operações assíncronas melhor do que as promessas tradicionais no JavaScript." 
url: /pt/what-is-async-await-in-javascript-a-javascript-guide/
tags: ["What is Async Await in JavaScript", "JavaScript Async Await, async await", " javascript async await tutorial", "async await syntax", "try catch async await javascript"]
categories: ['Programming']
---

## ES2017 Apresentou o JavaScript Async/Wait, que é um invólucro nas promessas. Async/Await é usado para consumir APIs baseadas em promessas da maneira moderna e mais simples.

{{< figure align=center src="images/what-is-async-await-in-javascript-a-javascript-guide.png" alt="O que é assíncrono aguardando em JavaScript??">}}


## Visão geral
Cobrimos [JavaScript Promises][1] em nossa postagem anterior do blog e você deve visitar se quiser obter uma compreensão clara do conceito por trás das promessas de JavaScript. Nesta série de [tutoriais de JavaScript][2], estamos aqui com outro guia de JavaScript que demonstrará os recursos modernos do javascript assíncrono/aguardar. Esta postagem do blog é para aqueles que têm conhecimento prévio das promessas de JavaScript. Além disso, tentaremos cobrir**o que é assíncrono/aguardar no JavaScript**e quando precisamos usar o Async/Aguard. Além disso, também abordaremos erros de manuseio com assíncrono/aguardando. Portanto, dê uma leitura completa para este tutorial**javascript assíncrono/aguardo**para marcar esse conceito verificado.
Passaremos pelas seções a seguir neste Javascript Async Wait Tutorial:
* **[O que é assíncrono/aguardar em javascript | ASYNC Aguarda sintaxe][3]**
* **[Quando usar async/aguardar?][4]**
* **[Manuseio de erros com assíncrono/aguardar][5]**

## O que é assíncrono/aguardo em javascript | ASYNC Aguarda Sintaxe   {#What-Is-Asyncawait-In-Javascript-Async-Await-Syntax}
O ECMAScript 2017 lançou novos recursos de JavaScript e Async/Wait é um dos mais amplamente utilizados entre esses recursos. O Async/Wait é construído sobre as promessas e é realmente uma maneira moderna de lidar com promessas de JavaScript.
Vamos ver como usar as palavras -chave Async/Aguarda no código JavaScript:
```
async function getValues() {

  let promise = new Promise(function(resolve, reject) {
   // processing.. 
  });

  let data = await promise; // waits until the promise fulfills
   
  return data;
 
}
getValues().then(function(){
  console.log(data); // results printed.
})
```
Bem, a palavra -chave assíncrona no início da função implica que essa função retornará uma promessa. Portanto, a palavra -chave aguarda é sempre usada dentro do corpo da função assíncrona para pausar a execução da função até que a promessa resolva. O importante a ser observado aqui é que você não pode usar a palavra -chave Aguardar dentro do corpo de uma função regular. No entanto, você pode usar aguardar apenas com funções assíncronas declaradas com a palavra -chave assíncrona.

## Quando usar async/aguardar?   {#
Até agora, você tem a resposta para**o que é assíncrono aguardando em javascript**. Como isso é apenas um invólucro em torno das promessas tradicionais de JavaScript, você usa melhor essa nova maneira de criar e lidar com promessas de uma maneira mais limpa e legível. Além disso, você pode se livrar de várias chamadas de promessas. A palavra -chave aguarda encapsula a instrução .hen () em uma única linha.

## Manuseio de erro com assíncrono/espera   {#Erro-handling-with-asyncawait}
O tratamento de erros é uma tarefa crítica quando se trata de desenvolvimento de software em nível corporativo. Existem várias maneiras de capturar erros na abordagem assíncrona/aguardando.

{{< figure align=center src="images/async-await.png" alt="tente pegar assíncrono aguardar javascript">}}

**Experimente a captura assíncrona aguarda javascript**: Nada de novo com esta abordagem de manuseio de erros. No entanto, você pode usar um bloco de tentativa/captura dentro de uma função assíncrona, como mostrado no trecho de código abaixo:
```
async function getValues() {
  try{
    let promise = new Promise(function(resolve, reject) {
     // processing.. 
    });

    let data = await promise; // waits until the promise fulfills
   
    return data;
  } catch(err){
    // you may handle errors the way you want..
  }
 
}
```
Usando o bloco Try/Catch, você pode capturar as exceções dentro do corpo de uma função assíncrona.
Considerando que há outra abordagem para lidar com erros nos quais você pode anexar o bloco .catch () no final da chamada de função. Como o Async/Wait retorna uma promessa, você captura os erros no bloco .catch ().
```
async function getValues() {

  let promise = new Promise(function(resolve, reject) {
   // processing.. 
  });

  let data = await promise; // waits until the promise fulfills
   
  return data;
 
}
getValues().catch(err){
 // catch the errors 
}
```

## Conclusão
Estamos encerrando este**javascript assíncrono tutorial**. Espero que você entenda melhor**o que é assíncrono aguardando em JavaScript**. Além disso, passamos pelo JavaScript Async Wait Agud Sintaxe que torna o código -fonte menos complexo. Esse recurso JavaScript está sendo amplamente utilizado devido ao seu rico uso e desempenho. Nos próximos dias, escreveremos mais sobre os recursos e conceitos do JavaScript, para que você possa ganhar um forte comando sobre os conceitos JS. Além disso, existem outros artigos interessantes mencionados na seção "Veja também".

## Conecte-se conosco
Por fim, [contémize.com][6] oferece tutoriais em JavaScript em andamento sobre vários tópicos interessantes. Você pode se manter atualizado seguindo -nos em nossas plataformas de mídia social, incluindo [Facebook][7], [LinkedIn][8] e [Twitter][9].

## Faça uma pergunta
Você pode nos informar sobre suas perguntas ou consultas em nosso [fórum][10].

## Perguntas frequentes
**O que é assíncrono aguardado em javascript com exemplo?**
Você pode visitar este [link][3] para entender o conceito de assíncrono.
**O que é assíncrono aguardar vs promessa?**
 * Async/Await torna o código -fonte mais claro e legível em comparação com as promessas nas quais o encadeamento da promessa pode tornar o código -fonte uma bagunça.
 * O tratamento de erros é bastante semelhante em ambas as abordagens.
 * A depuração é menos difícil no assíncrono aguardando.
 * As promessas mantêm os estados como pendentes, resolvidos ou rejeitados. Considerando que async/aguardam é resolvido ou rejeitado.

## Veja também
  * [O que é promessa em JavaScript? | Javascript Tutorial][1]
  * [O que é computação sem servidor? | Arquitetura sem servidor][11]
  * [O que é multitenância? | Por que uma abordagem de vários inquilinos?][12]
  * [O que é AI generativo | Inteligência artificial generativa][13]
  * [Como integrar ChatGPT com o Google Sheets][14]
  * [Como usar o ChatGPT no vscode | O código de extensão do VSCODE GPT][15]
  * [O que é o Openai Chatbot GPT-3 | Chatgpt Uma revolução da IA][16]
  * [Uma introdução à inteligência artificial | O que é ai?][17]

  
[1]: https://blog.containerize.com/what-is-promise-in-javascript-javascript-tutorial/
[2]: https://blog.containerize.com/categories/programming/
[3]: #What-is-AsyncAwait-in-JavaScript-Async-Await-Syntax
[4]: #When-to-use-AsyncAwait
[5]: #Error-handling-with-AsyncAwait
[6]: https://www.containerize.com/
[7]: https://web.facebook.com/containerize
[8]: https://www.linkedin.com/company/containerize/
[9]: https://twitter.com/containerize_co
[10]: https://forum.containerize.com/
[11]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[12]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[13]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[14]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
