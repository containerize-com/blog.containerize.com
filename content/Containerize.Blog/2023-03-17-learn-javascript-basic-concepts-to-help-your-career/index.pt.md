---
title: "Aprenda conceitos básicos de JavaScript para ajudar sua carreira" 
seoTitle: "Conceitos básicos de JavaScript" 
description: "Siga este tutorial JavaScript para aprender conceitos básicos de JavaScript. Escopos, içar e fechamentos são conceitos muito básicos, mas obrigatórios em JavaScript." 
date: 2023-03-17T00:00:00+00:00
author: muhammadmustafa
summary: "Siga este tutorial JavaScript para aprender conceitos básicos de JavaScript. Escopos, içar e fechamentos são conceitos muito básicos, mas obrigatórios em JavaScript." 
url: /pt/learn-javascript-basic-concepts-to-help-your-career/
tags: ["JavaScript Basic Concepts", "what is hoisting in JavaScript", "JavaScript closures", "scopes in JavaScript", "JavaScript fundamental"]
categories: ['Programming']
---

## Vamos aprender alguns fundamentos principais do JavaScript que um desenvolvedor deve saber. Essa linguagem de programação interpretada é amplamente usada para desenvolver aplicativos de nível corporativo.

{{< figure align=center src="images/Learn-JavaScript-Basic-Concepts-to-Help-Your-Career.png" alt="Conceitos básicos de JavaScript">}}


## Visão geral
O JavaScript é uma linguagem de script usada para desenvolver aplicativos dinâmicos baseados na Web. Usamos HTML e CSS para criar sites estáticos, enquanto o JavaScript é usado para adicionar interatividade. Em nossa postagem anterior, abordamos [Modelo de Objeto de Documento][1] e agora abordaremos outros conceitos básicos importantes**JavaScript**. Os desenvolvedores da Web tendem a optar por essa linguagem de script devido a seus ricos recursos e estruturas. Além disso, você pode fazer o desenvolvimento no front -end e no final, aprendendo JavaScript. No entanto, você não pode apenas desenvolver aplicativos da Web, mas também aplicativos móveis. Este tutorial de JavaScript o ajudará se você estiver se preparando para uma sessão de entrevista. No entanto, vale a pena ler este guia para adicionar mais ao seu bucket de conhecimento.
Abordaremos os seguintes pontos deste artigo:
***[O que está iça em JavaScript][2]**
***[escopos em javascript][3]**
***[fechos de javascript][4]**

## O que está iça no JavaScript {#o que é-hoisting-in-Javascript}
O fenômeno de tomar função ou declaração variável no topo do escopo atual é conhecida como elevação. Este é um conceito muito crítico e a maioria dos desenvolvedores de JavaScript não está ciente disso. No entanto, uma coisa importante a ser observada aqui é que apenas declarações de função/variável são levadas para o topo, não a inicialização da função/variável.
Vamos dar um exemplo e ver o trecho de código abaixo;
```
printResults();
function printResults(){
    console.log("hello programmers")
}
// output: hello programmers

```
No exemplo do código acima, fizemos a chamada de função antes da declaração da função, mas mesmo que o código seja executado com sucesso e isso seja devido ao iCHiCT JavaScript. Basicamente, durante o tempo de compilação, o intérprete JavaScript digitaliza o código, reúne todas as funções/variáveis ​​e as coloca na memória chamada ambiente lexical. O mesmo acontece com as variáveis.
```
name = "mustafa";
console.log(name);
var name;

```
Da mesma forma, a inicialização da variável de nome foi realizada antes de sua declaração e o código funciona sem nenhum erro. Novamente, durante o tempo de compilação, o intérprete JS procurou o ambiente lexical para encontrar a declaração variável e, portanto, executou o código.
Portanto, se você declarar variáveis ​​com palavras -chave LET e const, o JavaScript as içará de maneira um pouco diferente.
```
name = "mustafa";
console.log(name);
let name;
// Uncaught ReferenceError: Cannot access 'name' before initialization

```
O erro no snippet de código acima ocorreu. O motivo é que a inicialização não foi feita ao içar essa variável. Para encurtar a história, todas as declarações são inicializadas com "indefinidas", enquanto as variáveis ​​declaradas com "Let" ou "const" não são inicializadas em içar.

## escopos em javascript {#scopes-in-javascript}
O escopo é um dos conceitos básicos de JavaScript que um desenvolvedor deve conhecer. No entanto, trabalhar com escopos de JavaScript não é direto e é um pouco diferente. Portanto, existem três tipos de escopos no JavaScript e são os seguintes:
**Nível de bloco**: Variáveis ​​declaradas com "Let" ou "const" contém o escopo no nível do bloco.
```
if(true){
  let a = 1;
}
// a is not accessible outside the curly braces.
```
A variável "A" não é acessível fora dos aparelhos encaracolados {} porque possui escopo no nível do bloco.
**Nível de função**: As variáveis ​​declaradas dentro da função JavaScript têm o escopo local.
```
function innerFunc(){
        let last_name = "ashraf";
        console.log("hello "+last_name);
    }
// last_name is not accessible outside the function.
```
Uma coisa importante a ser observada aqui é que as variáveis ​​declaradas com "let" "const" e "var" têm o escopo da função dentro do corpo da função.
**Nível global**: As variáveis ​​declaradas fora da função se tornam variáveis ​​globais. Não importa se você os declarou usando "Let", "Const" ou "VAR" palavras -chave. Além disso, uma variável se torna uma variável global se declarada sem usar nenhuma palavra -chave, como mostrado no snippet de código abaixo:
```
function innerFunc(){
        last_name = "ashraf";
        console.log("hello "+last_name);
    }
// last_name is accessible outside the function too and is of global scope
```

## fechos de javascript {#javascript-closures}
Esse é outro conceito importante que fortalece seu conhecimento de JavaScript sobre escopos e encapsulamento de dados. Na forma mais simples, uma função dentro de uma função é conhecida como fechamento. Você pode chamar a função interna de fechamento. Esta função interna tem três tipos de escopo:
 * Tem seu próprio escopo em nível de bloco.
 * Tem acesso às variáveis ​​dos pais.
 * As variáveis ​​no escopo global também são acessíveis dentro do fechamento.
 Vamos ver como criar um fechamento:
```
 function myFunction(){
    let first_name = "mustafa";
    function innerFunc(){
        let last_name = "ashraf";
        console.log("hello "+first_name+" "+last_name);
    }
    return innerFunc()
}
myFunction()
// output: hello mustafa ashraf
```
A variável First_Name é acessível dentro da função chamada Innerfunc, mas a função pai não pode ter acesso à variável Last_Name. Esse comportamento permite que os programadores criem variáveis ​​privadas na cadeia de escopo.

## Conclusão
Estamos encerrando este guia JavaScript aqui e esperamos que você tenha uma melhor compreensão dos conceitos básicos**javascript**. Além disso, também passamos por**fechos de JavaScript, escopos em JavaScript**e içar. Existem muitos outros conceitos importantes que são obrigatórios para iniciantes. Portanto, este artigo o ajudará se você estiver prosperando para melhorar ou atualizar seus conceitos de JavaScript. Além disso, você pode passar pelas postagens do blog mencionadas na seção "Veja também".

## Conecte-se conosco
Finalmente, [contenderize.com][5] oferece tutoriais em JavaScript em andamento sobre vários tópicos interessantes. Você pode permanecer no loop, seguindo -nos em nossas plataformas de mídia social, incluindo [Facebook][6], [LinkedIn][7] e [Twitter][8].

## Faça uma pergunta
Você pode nos informar sobre suas perguntas ou consultas em nosso [fórum][9].

## Perguntas frequentes
**Quais são os conceitos importantes para aprender em JavaScript?**
Siga este Javascript Beginner's [Guide][2] para conhecer conceitos básicos de JavaScript.

## Veja também
  * [O que é Dom em JavaScript? | Modelo de objeto de documento][1]
  * [O que é promessa em JavaScript? | Javascript Tutorial][10]
  * [O que é computação sem servidor? | Arquitetura sem servidor][11]
  * [O que é multitenância? | Por que uma abordagem de vários inquilinos?][12]
  * [O que é AI generativo | Inteligência artificial generativa][13]
  * [O que é assíncrono aguardando em JavaScript? | Um guia JavaScript][14]
  * [Como usar o ChatGPT no vscode | O código de extensão do VSCODE GPT][15]
  * [O que é o Openai Chatbot GPT-3 | Chatgpt Uma revolução da IA][16]
  * [Uma introdução à inteligência artificial | O que é ai?][17]
  * [O que é assíncrono aguardando em JavaScript? | Um guia JavaScript][18]

  
[1]: https://blog.containerize.com/what-is-dom-in-javascript-document-object-model/
[2]: #What-is-hoisting-in-JavaScript
[3]: #Scopes-in-JavaScript
[4]: #JavaScript-Closures
[5]: https://www.containerize.com/
[6]: https://web.facebook.com/containerize
[7]: https://www.linkedin.com/company/containerize/
[8]: https://twitter.com/containerize_co
[9]: https://forum.containerize.com/
[10]: https://blog.containerize.com/what-is-promise-in-javascript-javascript-tutorial/
[11]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[12]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[13]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[14]: https://blog.containerize.com/what-is-async-await-in-javascript-a-javascript-guide/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
[18]: https://blog.containerize.com/what-is-async-await-in-javascript-a-javascript-guide/
