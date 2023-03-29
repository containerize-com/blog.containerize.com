---
title: "O que são padrões de design de JavaScript? | Guia do iniciante" 
seoTitle: "Javascript Design Patterns" 
description: "Este guia para iniciantes do JavaScript explica os padrões de design de javascript. Leve seu desenvolvimento ao próximo nível adotando os melhores padrões de código." 
date: 2023-03-24T00:00:00+00:00
author: muhammadmustafa
summary: "Este guia para iniciantes do JavaScript explica os padrões de design de javascript. Leve seu desenvolvimento ao próximo nível adotando os melhores padrões de código." 
url: /pl/what-are-javascript-design-patterns-beginners-guide/
tags: ["JavaScript Design Patterns", "learning JavaScript design patterns", "factory pattern JavaScript", "observer pattern JavaScript", "singleton pattern javascript", "module design pattern"]
categories: ['Programming']
---

Os desenvolvedores mostram intenção positiva no aprendizado de padrões de design de javascript. Os padrões de design do JS fornecem ao seu código -fonte um design para torná -lo eficiente e sustentável.

{{< figure align=center src="images/what-are-javascript-design-patterns-beginners-guide.png" alt="Javascript Design Patterns">}}


## Visão geral
Um grande número de programadores de JavaScript não está claro sobre os padrões de design **JavaScript** e essa lacuna deve ser preenchida. Nesta série de [tutoriais de JavaScript][1], estamos escrevendo esta postagem do blog que abrangerá os padrões de design JavaScript mais amplamente utilizados, como o padrão de design do módulo, o padrão de observador e muito mais. Além disso, tentaremos demonstrar o uso de exemplos de código para que não haja ambiguidade em sua mente. Este tópico é muito importante se você estiver seguindo uma carreira em JavaScript. Portanto, mantenha -se conectado ao longo deste artigo e, no final desta postagem do blog, você deve ter um forte entendimento dos padrões de design do JS.
Os seguintes pontos devem ser abordados neste guia do JavaScript para iniciantes:
* **[O que são padrões de design de javascript?][2]** 
* **[padrão de design do módulo][3]** 
* **[Javascript de padrão de fábrica][4]** 
* **[Padrão Singleton JavaScript][5]** 
* **[Padrão de observador JavaScript][6]** 

## O que são padrões de design de JavaScript? {#What-are-JavaScript-design-patterns}

Os padrões de design de JavaScript são soluções na forma de modelos que fornecem soluções eficientes para os problemas comuns que ocorrem repetidamente na escrita do código -fonte. Em palavras mais simples, os padrões de design são estilos/ordens predefinidos para escrever um código JavaSciprt manutenção e gerenciável.
Em pequenas organizações, a maioria dos desenvolvedores não presta atenção aos padrões de design, mas isso se torna um assunto crítico quando você está construindo software de negócios em larga escala. Basicamente, existem vários desenvolvedores trabalhando para software de nível corporativo que têm seu próprio estilo de código de redação. Portanto, você opta por um padrão de design para evitar problemas de repetição, criar blocos de código reutilizáveis ​​e acelerar o desenvolvimento de aplicativos.

## Padrão de design do módulo {#Module-design-pattern}

Este é o padrão de design mais comum e preferido que os desenvolvedores optam por. De acordo com esse padrão de design, os blocos de código do aplicativo são colocados separadamente um do outro na forma de módulos. Esse padrão de design de JavaScript fornece isolamento e encapsulamento. Além disso, você pode fazer funções e atributos públicos/privados que você não pode acessar de fora do módulo. Acima de tudo, os módulos no padrão de design modular sempre retornam um objeto.
Você pode usar esse padrão de design, caso esteja criando um aplicativo comercial rico em nível corporativo. Portanto, você pode criar um módulo separado para cada recurso para trazer independência.
O snippet de código a seguir demonstra o padrão de design modular:
```
const student = (function () {
  // Private
  let name = "mustafa";
  let program = "computer science";
  const getStudentName = () => name;
  const getStudentProgram = () => program;

  // Public
  return {
    name,
    program,
    getName: () => getStudentName(),
    getStudentProgram: () => getStudentProgram(),
  };
})();

student.name;
student.program;
student.getStudentProgram();
```

## JavaScript de padrão de fábrica {#Factory-pattern-JavaScript}

De acordo com esse padrão de design, você cria objetos usando uma interface em vez de chamar o construtor com o **novo** . De fato, especificamos um tipo de objeto e a fábrica cria uma instância e nos envia de volta para uso. Além disso, esse padrão de design do JavaScript fornece controle completo sobre a criação de objetos. Além disso, você pode escolher esse padrão de design para lidar com objetos simples e complexos e também é aconselhável usar o padrão de fábrica para desacoplar.
Vamos escrever um trecho de código para uma exploração adicional.
```
// sandwich.js
const Sandwich = function({name }) {
  this.name = name || "";
};
module.exports = Sandwich;
```
```
// burger.js
const Burger = function({name }) {
    this.name = name || "";
};
module.exports = Burger;
```
```
// gadFoodFactory.js
const Sandwich = require("./sandwich");
const Burger = require("./burger");
const food = { Burger, Sandwich };
module.exports = {
    createFood(type, attributes) {
        const GadFoodType = food[type];
        return new GadFoodType(attributes);
    }
};
```
```
// index.js
const gadFoodFactory = require("./gadFoodFactory");
const mySandwich = gadFoodFactory.createFood("Sandwich", {
    name: "Chicken"
});
const myBurger = gadFoodFactory.createFood("Burger", {
    name: "Grilled",
});
console.log(mySandwich);
console.log(myBurger);
```

## JavaScript de padrão de singleton {#Singleton-pattern-JavaScript}

Esse padrão de design é muito popular que restringe a instanciação de uma classe a um único objeto. O serviço na estrutura JavaScript Angular segue esse padrão, onde cria apenas uma instância do serviço e esse objeto é acessível a todos os módulos. Além disso, todo o cliente conectado ao objeto único compartilha os mesmos recursos e níveis de acesso.
A demonstração do padrão **Singleton** é a seguinte:
```
let singletonPattern = new (function () {

  let name = "mustafa";

  this.printName = function() {
      console.log(name);
  }
})();

singletonPattern.printName();

// output: mustafa
```

## Padrão de observador JavaScript {#Observer-pattern-JavaScript}

O padrão de observador é bastante útil na construção de aplicativos de negócios escaláveis. Um mecanismo de notificação está envolvido nesse padrão de código. Sempre que há uma alteração, ela aciona um evento que notifica outras assinaturas dependentes. Portanto, esse padrão transmite o estado mais recente para outros objetos nos módulos. De fato, trata -se de informar a alteração para os assinantes automaticamente.
Os seguintes exemplos de código seguem o padrão de observador:
```
function ObserverFunc() {
this.observerArray = [];
}

ObserverFunc.prototype.subscribe = function (ele) {
this.observerArray.push(ele);
}

ObserverFunc.prototype.unsubscribe = function (element) {
const elementIndex = this.observerArray.indexOf(element);
if (elementIndex &gt; -1) {
this.observerArray.splice(elementIndex, 1);
}
}

ObserverFunc.prototype.notifyAll = function (element) {
this.observerArray.forEach(function (observerElement) {
observerElement(element);
});
}
```

## Conclusão
Isso é tudo para os padrões de design **javascript** . Esperamos que você tenha gostado deste tutorial **JavaScript** e aprendido os conceitos de padrões de design. Cobrimos os padrões de código mais usados, como padrões de design de módulos, padrões de design de singleton, observador e design de fábrica. Este artigo fornecerá uma imagem clara com a ajuda de trechos de código. Além disso, existem outras postagens de blog muito relevantes que você pode descobrir na seção "Veja também" abaixo.

## Conecte-se conosco
Finalmente, [contendeRize.com][7] está em um processo consistente de escrever postagens JavaScript sobre novos tópicos. Você pode permanecer no loop, seguindo -nos em nossas plataformas de mídia social, incluindo [Facebook][8], [LinkedIn][9] e [Twitter][10].

## Faça uma pergunta
Você pode nos informar sobre suas perguntas ou consultas em nosso [fórum][11].

## Perguntas frequentes
**Quais são os padrões de design mais populares em JavaScript?**
Os padrões de padrão de módulo, observador, fábrica e singleton são amplamente utilizados na programação JavaScript. Siga este [link][2] para explorar ainda mais.

## Veja também
 * [Aprenda conceitos básicos do JavaScript para ajudar sua carreira][12]
 * [Uma introdução à inteligência artificial | O que é ai?][13]
 * [Como integrar ChatGPT com o Google Sheets][14]
 * [Como usar o ChatGPT no vscode | O Código de Extensão do Vscode GPT][15]
 * [O que é o Openai Chatbot GPT-3 | Chatgpt Uma revolução da IA][16]
 * [Google Docs Integration com ChatGPT | Openai GPT-3][17]
 * [Quais são as 5 principais estruturas de IA de código aberto][18]
 * [O que é AI generativo | Inteligência artificial generativa][19]



[1]: https://blog.containerize.com/categories/programming/
[2]: #What-are-JavaScript-design-patterns
[3]: #Module-design-pattern
[4]: #Factory-pattern-JavaScript
[5]: #Singleton-pattern-JavaScript
[6]: #Observer-pattern-JavaScript
[7]: https://www.containerize.com/
[8]: https://web.facebook.com/containerize
[9]: https://www.linkedin.com/company/containerize/
[10]: https://twitter.com/containerize_co
[11]: https://forum.containerize.com/
[12]: https://blog.containerize.com/learn-javascript-basic-concepts-to-help-your-career/
[13]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
[14]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/google-docs-integration-with-chatgpt/
[18]: https://blog.containerize.com/artificial-intelligence/top-5-open-source-ai-frameworks/
[19]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
