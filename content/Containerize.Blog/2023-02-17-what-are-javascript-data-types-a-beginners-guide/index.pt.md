---
title: "O que são tipos de dados JavaScript? | Um guia para iniciantes" 
seoTitle: "O que são tipos de dados JavaScript? | Um guia para iniciantes" 
description: "O que são tipos de dados JavaScript? Siga este guia para iniciantes para aprender 7 tipos de dados usados ​​no número JavaScript, String, Boolean, Null, Undefined e muito mais." 
date: Fri, 17 Feb 2023 08:57:43 +0000
author: muhammadmustafa
summary: "A popularidade do JavaScript é imparável devido à sua adaptabilidade. Siga este guia para iniciantes do JavaScript e comece a nutrir sua experiência no JS Stack." 
url: /pt/what-are-javascript-data-types-a-beginners-guide/
categories: ['Programming']
---

## A popularidade do JavaScript é imparável devido à sua adaptabilidade. Siga este guia para iniciantes do JavaScript e comece a nutrir sua experiência no JS Stack.

{{< figure align=center src="images/What-are-JavaScript-Data-Types-A-Beginners-Guide-1.png" alt="What are JavaScript Data Types? |O que são tipos de dados JavaScript? | Guia para iniciantes">}}


## Visão geral
Não importa se você é um nível medíocre ou um desenvolvedor experiente, você obterá as soluções para seus problemas que chegam durante os trabalhos de desenvolvimento. [CONTERIZE.COM][1] Começou a escrever postagens no blog do tutorial na categoria de programação e estamos começando com um  **Javascript Beginner's Guide** . Como estamos começando, este artigo é sobre tipos de dados JavaScript. Vamos explorar  **O que são tipos de dados JavaScript**  e ver exemplos de como você pode usá -los no código -fonte com eficiência. Portanto, analise bem o guia para iniciantes para que você possa ter um bom entendimento dos tipos de dados **JavaScript**  .
Estamos cobrindo o seguinte ponto:
  * [O que é um tipo de dados?][2]
  * [O que são tipos de dados JavaScript?][3]

## Tipos de dados explicados | O que é um tipo de dados? {#What-is-a-data-type}

Um tipo de dados é dizer ao compilador como interpretar ou compilar os dados. O uso dos tipos de dados é crítico e deve ser usado com sabedoria. Em palavras simples, trata -se do formato dos dados como número, string, booleano e muito mais. No entanto, existem duas categorias de tipos de dados dos tipos de dados primitivos e tipos de dados não primitivos. Existem oito tipos de dados primitivos pelos quais passaremos na próxima seção.

## O que são tipos de dados JavaScript? {#What-are-JavaScript-Data-Types}

De fato, o JavaScript é um idioma pouco digitado, o que significa que você não precisa definir explicitamente o tipo de variável. Você pode atribuir qualquer valor a uma variável e essa variável armazenará esse valor como string, bigint, booleano ou mais.

{{< figure align=center src="images/web-development.png" alt="Guia para iniciantes JavaScript">}}


Tipos de dados primitivos
Os tipos de dados primitivos são aqueles que são imutáveis ​​e não podem ser alterados após a criação e a inicialização. No entanto, você pode assinar novamente um novo valor, mas não pode muta o valor existente.
Por exemplo:
```
var name = "my name is mustafa";
name = "my name is changed";
console.log(name) // output:  my name is changed
name[0] = "M";
console.log(name) // output: my name is changed
```
No exemplo acima, a string é um tipo de dados primitivo e o valor antigo está sendo substituído pelo novo valor, mas a alteração no valor existente não está sendo refletida. Então, podemos ver que ainda é "meu nome foi alterado" e não "meu nome foi alterado";

#### Tipos de dados não primitivos
Os tipos de dados não primitivos são mutáveis, em palavras simples opostas dos tipos de dados primitivos.
Por exemplo:
```
var arr = [1,2,3];
arr[0] = 11;
console.log(arr) // output: [11,2,3]
```
Além disso, os tipos de dados primitivos são comparados pelo valor e os tipos de dados não primitivos são sempre comparados por referência.
Por exemplo:
```
// Primitive Data Type

var first_name = "mustafa";
var last_name = "mustafa";
first_name === last_name  // true

// Non-Primitive Data Type

var arr = [1,2];
var arr2 = [1,2];
arr === arr2 // false
// BUT
var arr = [1,2];
var arr2 = [1,2];
arr = arr2;
arr === arr2 // true
```
Agora, vamos passar pelos tipos de dados um por um. Existem 6 tipos de dados primitivos e 1 tipo de dados não primitivo.
 **Os tipos de dados primitivos incluem:**  
*  **String**  : Esse tipo de dados representa dados textuais que consistem em uma sequência de caracteres cercados por cotações.
*  **Número**  : Representa dados decimais/não decimais, particularmente inteiro ou flutuador.
*  **booleano**  : Representação de valores lógicos verdadeiros ou falsos.
*  **Símbolo**  : O símbolo é usado para manter valores exclusivos.
*  **indefinido**  : Uma variável sem qualquer valor ou uma variável não inicializada.
*  **NULL**  : A ausência de qualquer valor é considerada nula.
 **Tipo de dados não primitivo inclui:**  
 **Objeto** : É usado para armazenar a coleta de dados que consistem em pares de valor-chave.

## Conclusão
Este é o fim deste  **Javascript Beginner's Guide** . Passamos por **O que são tipos de dados JavaScript**  ? Além disso, exploramos o que é um tipo de dados em poucas palavras. Você deve ter uma melhor compreensão dos tipos de dados não primitivos e****em JavaScript. Esta postagem do blog realmente o ajudará se você deseja se preparar para uma entrevista de emprego.
Finalmente, [contendeRize.com][1] está escrevendo continuamente postagens de blog sobre produtos e tópicos de código aberto. Além disso, você pode nos seguir em nossas contas de mídia social [Facebook][4], [LinkedIn][5] e [Twitter][6].

## Faça uma pergunta
Você pode nos informar sobre suas perguntas ou consultas em nosso [fórum][7].

## Perguntas frequentes
 **Quais são os 8 tipos de dados JavaScript?** 
Visite este [link][3] para conhecer os 8 tipos de dados JavaScript.

## Veja também
  * [Livre e Open Source Popular JavaScript Frameworks][8]
  * [Automatize operações comerciais usando software de código aberto e gratuito][9]
  * [Top 10 Tecnologias de código aberto para aprender em 2022][10]



 [1]: https://www.containerize.com/
 [2]: #What-is-a-data-type
 [3]: #What-are-JavaScript-Data-Types
 [4]: https://web.facebook.com/containerize
 [5]: https://www.linkedin.com/company/containerize/
 [6]: https://twitter.com/containerize_co
 [7]: https://forum.containerize.com/
 [8]: //blog.containerize.com/2022/02/02/free-open-source-popular-javascript-frameworks/
 [9]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
 [10]: //blog.containerize.com/2022/01/31/top-10-open-source-trending-technologies-of-2022/
