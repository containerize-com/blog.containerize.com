---
title: "什么是JavaScript设计模式？ |初学者指南" 
seoTitle: "JavaScript设计模式" 
description: "该JavaScript初学者指南解释了JavaScript设计模式。通过采用最佳代码模式将您的开发提升到一个新的水平。" 
date: 2023-03-24T00:00:00+00:00
author: muhammadmustafa
summary: "该JavaScript初学者指南解释了JavaScript设计模式。通过采用最佳代码模式将您的开发提升到一个新的水平。" 
url: /zh/what-are-javascript-design-patterns-beginners-guide/
tags: ["JavaScript Design Patterns", "learning JavaScript design patterns", "factory pattern JavaScript", "observer pattern JavaScript", "singleton pattern javascript", "module design pattern"]
categories: ['Programming']
---

## 开发人员在学习JavaScript设计模式方面表现出积极的意图。 JS设计模式为您的源代码提供了设计，以使其有效且可维护。

{{< figure align=center src="images/what-are-javascript-design-patterns-beginners-guide.png" alt="JavaScript设计模式">}}


## 概述

许多JavaScript程序员尚不清楚 **JavaScript设计模式** ，应填补此差距。在这一系列的[JavaScript教程][1]中，我们正在撰写此博客文章，该文章将涵盖最广泛使用的JavaScript设计模式，例如模块设计模式，观察者模式等。此外，我们将尝试使用代码示例演示，以便您的脑海中没有歧义。如果您从事JavaScript的职业，这个话题非常重要。因此，在本文中保持联系，到本博客文章的结尾，您应该对JS设计模式有深刻的了解。
本JavaScript初学者指南应介绍以下几点：
* **[什么是JavaScript设计模式？][2]** 
* **[模块设计模式][3]** 
* **[工厂模式JavaScript][4]** 
* **[Singleton Pattern JavaScript][5]** 
* **[观察者模式JavaScript][6]** 

## 什么是JavaScript设计模式？ {#What-are-JavaScript-design-patterns}

JavaScript设计模式是模板的形式的解决方案，可为编写源代码反复发生的常见问题提供有效的解决方案。用更简单的词来说，设计模式是预定义的样式/订单，可以写入可维护和可管理的Javasciprt代码。
在小型组织中，大多数开发人员不关注设计模式，但是当您构建大型业务软件时，它将成为关键主题。基本上，有许多用于企业级软件的开发人员具有自己的写作代码风格。因此，您选择了一种设计模式来防止重复问题，构建可重复使用的代码块并加快应用程序开发。

## 模块设计模式 {#Module-design-pattern}

这是开发人员选择的最常见和最佳设计模式。根据此设计模式，应用程序代码块以模块的形式彼此分开。这种JavaScript设计模式提供了隔离和封装。此外，您可以制作无法从模块外部访问的公共/私人功能和属性。最重要的是，模块化设计模式中的模块始终返回对象。
您可以使用此设计模式，以防您正在构建企业级丰富的特色业务应用程序。因此，您可以为每个功能构建一个单独的模块，以带来独立性。
以下代码片段演示了模块化设计模式：
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

## 工厂模式JavaScript {#Factory-pattern-JavaScript}

根据此设计模式，您可以使用接口创建对象，而不是使用 **New** 操作员调用构造函数。实际上，我们指定了一种对象，工厂创建了一个实例并将我们发送回供使用。此外，这种JavaScript设计模式可以完全控制对象创建。此外，您可以选择此设计模式来处理简单且复杂的对象，并且明智的方法是使用工厂模式进行解耦。
让我们写一个代码片段以进行进一步探索。
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

## Singleton模式JavaScript {#Singleton-pattern-JavaScript}

这种设计模式非常受欢迎，可以将类的实例化限制为单个对象。 JavaScript框架中的服务Angular遵循此模式，它仅创建了服务的一个实例，并且所有模块都可以访问该对象。此外，所有连接到单个对象的客户端都共享相同的资源和访问级别。
** singleton模式**的演示如下：
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

## 观察者模式JavaScript {#Observer-pattern-JavaScript}

观察者模式在构建可扩展业务应用程序方面非常有帮助。此代码模式涉及通知机制。每当发生更改时，它都会触发通知其他依赖订阅的事件。因此，这种模式将最新状态广播到整个模块的其他对象。实际上，这全都是要自动将更改告知订阅者。
以下代码示例遵循观察者模式：
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

## 结论
这就是 **JavaScript设计模式** 的全部。我们希望您喜欢这个 **JavaScript教程** ，并了解了设计模式的概念。我们涵盖了最常用的代码模式，例如模块设计模式，单例，观察者和工厂设计模式。本文将在代码段的帮助下为您提供清晰的图片。此外，您可能会在下面的“参见”部分中找到其他非常相关的博客文章。

## 联系我们
最后，[Containerize.com][7]正处于编写有关新主题的JavaScript帖子的一致过程中。您可以通过在我们的社交媒体平台上关注我们，包括[Facebook][8]，[LinkedIn][9]和[Twitter][10]。

## 问一个问题
您可以在我们的[论坛][11]上让我们知道您的问题或查询。

## 常见问题解答
**JavaScript中最受欢迎的设计模式是什么？**
模块模式，观察者，工厂和单例模式在JavaScript编程中广泛使用。请按照此[链接][2]进行进一步探索。

## 也可以看看
 * [学习JavaScript基本概念以帮助您的职业生涯][12]
 * [人工智能简介|什么是AI？][13]
 * [如何将Chatgpt与Google床单整合][14]
 * [如何在VSCODE中使用chatgpt | VSCODE扩展代码GPT][15]
 * [什么是OpenAi ChatBot GPT-3 | Chatgpt AI革命][16]
 * [Google文档与Chatgpt集成| Openai GPT-3][17]
 * [什么是前5个开源AI框架][18]
 * [什么是生成的ai |生成人工智能][19]



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
