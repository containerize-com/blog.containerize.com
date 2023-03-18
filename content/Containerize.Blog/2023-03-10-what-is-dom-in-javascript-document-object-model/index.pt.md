---
title: "O que é Dom em JavaScript? | Modelo de objeto de documento" 
seoTitle: "O que é Dom em JavaScript?" 
description: "O que é Dom em JavaScript? Este guia demonstrará o modelo de objeto de documento, propriedades do DOM, níveis de DOM e como acessar os elementos DOM." 
date: 2023-03-10T00:00:00+00:00
author: muhammadmustafa
summary: "O que é Dom em JavaScript? Este guia demonstrará o modelo de objeto de documento, propriedades do DOM, níveis de DOM e como acessar os elementos DOM." 
url: /pt/what-is-dom-in-javascript-document-object-model/
tags: ["what is DOM", "what is document object model", " DOM levels", "HTML DOM tree", "DOM properties"]
categories: ['Programming']
---

## A representação de um documento HTML dentro de um navegador da web é tratada como uma árvore html dom. É uma série de objetos e define a estrutura de uma página da web.

{{< figure align=center src="images/What-is-DOM-in-JavaScript-Document-Object-Model.png" alt="O que é Dom em JavaScript??">}}


## Visão geral
Bem -vindo a outra postagem emocionante do blog da série de [JavaScript Programming] [1]. Neste artigo, abordaremos um conceito muito básico, mas essencial de desenvolvimento da Web. Sim, abordaremos o modelo de objeto de documentos em JavaScript. No passado, publicamos tutoriais JavaScript que são obrigatórios para iniciar o desenvolvimento usando o idioma JavaScript. Portanto, sugerimos que você leia este post no blog completamente para que você não perca nada relacionado a esse importante conceito. Vamos iniciar este guia e descobrir**O que é DOM em JavaScript**, DOM Properties e como você pode interagir com ele programaticamente.
Abordaremos os seguintes tópicos neste guia JavaScript:
***[O que é modelo de objeto de documento (DOM)?] [2]**
***[níveis de DOM] [3]**
***[O que são propriedades DOM e como acessá -las?] [4]**

## O que é o Modelo de Objeto do Document (DOM)? {#What-IS-Document-Object-Model}
Dom significa?**Modelo de objeto de documento (DOM)**é a representação de uma página da web dentro de um navegador da web. Simplesmente, a representação hierárquica dos elementos de um documento HTML em um navegador é conhecida como modelo de objeto de documento. É formado em forma de árvore que é realmente gerada pelo navegador da web. Consiste em vários nós que estão conectados um ao outro formando uma forma de árvore. Além disso, os elementos DOM têm atributos e eventos anexados a eles.
De fato, o DOM é uma interface de programação que formula a estrutura lógica de uma página da web e determina a maneira de acessar elementos da página. Basicamente, o JavaScript não reconhece tags HTML como título, H1 e etc. Portanto, uma vez que um documento HTML é carregado em um navegador da Web, o DOM é criado, o que possibilita o JavaScript para entender os elementos do documento.

## DOM Níveis {#Dom-Levels}
Esta seção demonstrará os vários níveis de DOM. Primeiro, há um objeto de janela em um navegador que está sempre no topo e depois há um nó de documento. Vamos dar uma olhada na imagem abaixo:

{{< figure align=center src="images/DOM.png" alt="Níveis de DOM">}}

Bem, você pode ver os elementos DOM na figura acima. Janela e documento são os objetos do navegador de nível superior e, em seguida, temos o elemento HTML como raiz. Seguindo em frente, temos os nós da cabeça e do corpo, o nó do título pertence ao nó da cabeça e o nó do corpo contém todos os nós que são tornados e visíveis no navegador da web. Além disso, os elementos do corpo contêm atributos que podemos ver na imagem como a tag de âncora contendo atributo "href". Da mesma forma, outros nós DOM contêm vários atributos, como IMG, Meta e muito mais.

## O que são propriedades dom e como acessá -las? {#O que é-dom-properties-e-how-to-access-them}
Até agora, apresentamos uma resposta para o que é DOM em JavaScript e níveis de DOM, e também passamos pelos nós DOM. Nesta seção, passaremos pelas propriedades da DOM e veremos como podemos interagir com eles. Todo elemento DOM tem um valor vinculado a ele, como a tag "P" possui propriedade de texto, a tag IMG possui a imagem e assim por diante. Os métodos JavaScript são usados ​​para acessar os valores dos nós. Além disso, você pode adicionar/remover os ouvintes do evento aos elementos DOM.
Você pode encontrar as seguintes propriedades**DOM**:
* * INNERHTML**: Esta propriedade é usada para definir ou buscar o conteúdo HTML de um nó DOM.
```
let htmlContent = document.getElementById("customID").innerHTML;
```
* * InnerText**: Use esta propriedade DOM para acessar ou definir o conteúdo textual de um elemento HTML.
```
let textualContent = document.getElementById("customID").innerText;
```
* * ParentElement**: Você pode usar esta propriedade para acessar o nó pai do elemento.
```
let parentNode = document.getElementById("customID").parentElement.nodeName;
```
* * estilo**: Atualize o atributo de estilo de um elemento.
```
let styleAttr = document.getElementById("customID").style.color = "red";
```
* * Título**: Use esta propriedade para atualizar o elemento de título do DOM.
```
document.getElementById("customID").title= "this is a web page";
```
 A seguir, alguns dos métodos que podemos usar para interagir com JavaScript DOM:
* * addEventListener ()**: Este método DOM é usado para anexar um manipulador de eventos a um elemento.
```
document.getElementById("customID").addEventListener("click", customFunction);
```
* * getAttribute ()**: Este método DOM é usado para anexar um manipulador de eventos a um elemento.
```
document.getElementById("customID").addEventListener("click", customFunction);
```
* * getElementById ()**: Método para obter um elemento específico com o "id" fornecido.
```
let element = document.getElementById("myID");
```
* * QuerySelector ()**: Use este método para obter o primeiro elemento filho que está sendo correspondido com um seletor CSS.
```
document.getElementById("myID").querySelector(".first").innerHTML = "change the value";
```
* * ToString ()**: Você pode usar esse método para converter um elemento em uma string.
Da mesma forma, existem muitos outros métodos e propriedades que você pode explorar.

## Conclusão
Estamos encerrando este tutorial do JavaSxcript aqui com a esperança de que você tenha um bom entendimento de**O que é DOM em JavaScript**. Também passamos por**DOM, níveis de DOM, HTML Dom Tree e Dom Properties**. Esta postagem do blog é altamente essencial para iniciantes que desejam ter um forte controle sobre os conceitos de JavaScrit. Além disso, existem outros artigos relevantes que você pode encontrar na seção "Veja também".

## Conecte-se conosco
Finalmente, [contenderize.com] [5] oferece tutoriais em JavaScript em andamento sobre vários tópicos interessantes. Você pode permanecer no loop, seguindo -nos em nossas plataformas de mídia social, incluindo [Facebook] [6], [LinkedIn] [7] e [Twitter] [8].

## Faça uma pergunta
Você pode nos informar sobre suas perguntas ou consultas em nosso [fórum] [9].

## Perguntas frequentes
* * O que o DOM é usado em JavaScript?**
Você pode visitar este [link] [2] para obter uma resposta detalhada a esta pergunta.

## Veja também
  * [O que é promessa em JavaScript? | Javascript Tutorial] [10]
  * [O que é computação sem servidor? | Arquitetura sem servidor] [11]
  * [O que é multitenância? | Por que uma abordagem de vários inquilinos?] [12]
  * [O que é AI generativo | Inteligência artificial generativa] [13]
  * [O que é assíncrono aguardando em JavaScript? | Um guia JavaScript] [14]
  * [Como usar o ChatGPT no vscode | O código de extensão do VSCODE GPT] [15]
  * [O que é o Openai Chatbot GPT-3 | Chatgpt Uma revolução da IA] [16]
  * [Uma introdução à inteligência artificial | O que é ai?] [17]
[1]: https://blog.containerize.com/categories/programming/
[2]: #What-is-Document-Object-Model
[3]: #DOM-levels
[4]: #What-are-DOM-properties-and-how-to-access-them
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
