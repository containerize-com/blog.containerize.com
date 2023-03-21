---
title: "O que é promessa em JavaScript? | Tutorial JavaScript" 
seoTitle: "O que é promessa em JavaScript?" 
description: "O que é promessa em JavaScript? Uma promessa é um bloco de código que fornece o resultado final de uma operação assíncrona, como pendente, concluída ou rejeitada." 
date: 2023-03-03T00:00:00+00:00
author: muhammadmustafa
summary: "O que é promessa em JavaScript? Uma promessa é um bloco de código que fornece o resultado final de uma operação assíncrona, como concluída ou rejeitada." 
url: /pt/what-is-promise-in-javascript-javascript-tutorial/
categories: ['Programming']
---

## você está lutando para aprender o conceito de promessas de JavaScript? Este artigo explicará como criar uma promessa, por que usamos a promessa em JavaScript e muito mais.

{{< figure align=center src="images/What-is-Promise-in-JavaScript-Promises-Explained.png" alt="What is Promise in JavaScript? " >}}


## Visão geral
Esperamos que você tenha uma melhor compreensão dos [tipos de dados JavaScript][1]. Agora, esta é outra postagem no blog na categoria [programação][2]. Neste tutorial de JavaScript, passaremos por**o que é promessa em JavaScript**e, junto com isso, também veremos o que são operações assíncronas, o uso de promessas e como criar promessas em JavaScript. Primeiro, um processo/operação assíncrono é aquele que é executado de forma independente em relação a outros processos e não cria nenhum bloqueio. Portanto, você precisa lidar com operações assíncronas, caso contrário, poderá criar anormalidades no seu código JavaScript. Então, exploraremos como podemos lidar com operações assíncronas usando promessas.
Abordaremos os seguintes pontos neste tutorial de JavaScript:
* **[O que é promessa em JavaScript? Promessas explicadas][3]**
* **[Por que usamos a promessa em JavaScript?][4]**
* **[Como a promessa funciona em javascript?][5]**
* **[Como criar uma promessa?][6]**

## O que é promessa em JavaScript? Promessas explicadas   {#o que é-promete-in-javascript-promisse-explined}
Uma promessa é um objeto que representa um valor de um clima de operação assíncrono que é resolvido, rejeitado ou está em estado pendente. Em palavras mais simples, as promessas são usadas para retornar um valor que ainda não foi produzido por um bloco de código assíncrono. De fato, existem três**estados de promessa**e pode estar em qualquer um dos seguintes estados:
**pendente**: A promessa está em um estado pendente, o que significa que está na fase inicial e está atualmente em execução.
**cumprido**: A promessa é resolvida e o valor foi retornado.
**Rejeitado**: Este é o estado causado por qualquer erro, o que significa que a promessa foi rejeitada.
Uma coisa importante a considerar aqui é que o valor/estado retornado pela promessa é imutável e não pode ser alterado, o que significa que as promessas garantem que não haja comportamento incomum.

## Por que usamos promessa em javascript?   {#Why Why-use-promise-in-Javascript}
Se você não estiver ciente do inferno**de retorno de chamada**, deixe -me compartilhar o que é. Primeiro, um retorno de chamada é uma função dentro de outra função. Basicamente, uma função de retorno de chamada é passada como um segundo argumento em uma função que é executada após o recebimento de resultados. Portanto, em muitos cenários, você precisa aninhar uma função de retorno de chamada e, à medida que o ninho aumenta, torna -se quase impossível de manusear. Portanto, chamamos esse longo aninhamento de funções de retorno de chamada**Inferno de retorno de chamada**.
Então, uma promessa é uma maneira de evitar uma situação de retorno de chamada. O uso de promessas oferece melhor legibilidade e melhor manuseio de erros. Além disso, você pode lidar melhor com operações assíncronas recuperando o valor retornado e passando esse valor para a próxima função na cadeia.

## Como a promessa funciona no JavaScript?   {#Como promete-works-in-Javascript}
Agora, vamos entender o mecanismo de trabalho por trás das promessas. Por favor, dê uma olhada no diagrama mencionado abaixo.

{{< figure align=center src="images/what-is-a-promise.png" alt="Como a promessa funciona em JavaScript??" >}}

De acordo com o fluxo de trabalho mencionado acima, os detalhes da implementação são bastante claros. A promessa começa a executar sua criação e está no estado pendente que aguarda a resposta. Existem duas opções, haverá dados ou haverá um erro no final do processamento. Ao receber dados, ele entra no bloco .Then () e entra no bloco .catch () em caso de erro.

## Como criar uma promessa?   {#Como criar-se-promete}
Até agora, cobrimos o conceito básico de promessa. Agora, vamos explorar como podemos criar uma promessa em JavaScript. Vamos usar o seguinte construtor de promessas para criar uma promessa.
```
let promise = new Promise(function(resolve, reject) {
  // do some processing.. 
});
```
O Promise Constructor assume uma função como um argumento que novamente leva dois argumentos, resolve e o outro rejeitar. Ele chama o método resolve () em caso de sucesso e entra no bloco rejeit () em caso de erro ou rejeição.
Vamos um pouco profundos e explorar a criação da promessa um pouco mais.
```
let data = "";

let dataValue = new Promise(function (resolve, reject) {
    if (data) {
        resolve("There is some data.");
    } else {
        reject("There is no data");
    }
});

console.log(dataValue);
```
No trecho de código acima, você pode fazer as chamadas de API ainda mais no bloco resolve ().
Agora, vamos ver o padrão de execução de uma promessa de JavaScript.
```
let promiseExecution = new Promise((res, rej) => {
  console.log('synchronous execution');
  if (true) {
    res('Success');
  } else {
    rej('Error');
  }
})

promiseExecution.then((data) => {
  console.log('It is executing asynchronously: ' + data);
}).catch((err) => {
  console.log('It is executing asynchronously: ' + err);
}).finally(() => {
  console.log('promise is completed');
});

console.log('Hello Word');
```
A seguir, a saída do snippet de código acima:
```
synchronous execution
Hello Word
It is executing asynchronously: Success
promise is completed
```
Portanto, o código dentro do corpo da promessa funciona de forma síncrona para que a "execução síncrona" seja impressa. Em seguida, .Then () Block funciona de forma assíncrona e espera até que o resultado seja gerado, mas a execução do programa não interrompe é por isso que "Hello Word" é impressa e a execução da promessa foi adiada. Depois disso, o bloco .hen () executa e retorna os valores que prometeu. Essa é a história das promessas de JavaScript. Novamente, como o JavaScript é um único rosqueado, as promessas são usadas para lidar com operações assíncronas de maneira não bloqueadora.

## Conclusão
Este é o fim deste tutorial**JavaScript**. Espero que você tenha uma boa idéia de promessas de JavaScript. Cobrimos**o que é prometido em JavaScript**, por que usamos promessa em javascript,**Como a promessa funciona em javascript**e como criar uma promessa. Além disso, abordaremos esse tópico mais sobre seu uso e provisões avançadas. Portanto, siga este artigo, caso você esteja se preparando para uma sessão de entrevista.

## Conecte-se conosco
Finalmente, [contenderize.com][7] oferece tutoriais em JavaScript em andamento sobre vários tópicos interessantes. Você pode permanecer no loop, seguindo -nos em nossas plataformas de mídia social, incluindo [Facebook][8], [LinkedIn][9] e [Twitter][10].

## Faça uma pergunta
Você pode nos informar sobre suas perguntas ou consultas em nosso [fórum][11].

## Perguntas frequentes
**O que são promessas em JavaScript com exemplo?**
Siga este [link][3] para saber o que são promessas no JavaScript.

## Veja também
  * [O que são tipos de dados JavaScript? | Um guia para iniciantes][1]
  * [Arquitetura baseada em contêineres de Kubernetes Kubernetes e contêineres][12]
  * [O que é computação sem servidor? | Arquitetura sem servidor][13]
  * [O que é multitenância? | Por que uma abordagem de vários inquilinos?][14]
  * [O que são tipos de dados JavaScript? | Um guia para iniciantes][15]

  
[1]: https://blog.containerize.com/programming/what-are-javascript-data-types-a-beginners-guide/
[2]: https://blog.containerize.com/categories/programming/
[3]: #What-is-promise-in-JavaScript-Promises-Explained
[4]: #Why-we-use-promise-in-JavaScript
[5]: #How-promise-works-in-JavaScript
[6]: #How-to-create-a-promise
[7]: https://www.containerize.com/
[8]: https://web.facebook.com/containerize
[9]: https://www.linkedin.com/company/containerize/
[10]: https://twitter.com/containerize_co
[11]: https://forum.containerize.com/
[12]: https://blog.containerize.com/kubernetes-multi-tenancy-container-based-architecture/
[13]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[14]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[15]: https://blog.containerize.com/programming/what-are-javascript-data-types-a-beginners-guide/
