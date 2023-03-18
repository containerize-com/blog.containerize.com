---
title: "学习JavaScript基本概念以帮助您的职业" 
seoTitle: "JavaScript基本概念" 
description: "请按照本JavaScript教程学习JavaScript基本概念。示波器，提升和关闭是JavaScript中非常基本但强制性的概念。" 
date: 2023-03-17T00:00:00+00:00
author: muhammadmustafa
summary: "请按照本JavaScript教程学习JavaScript基本概念。示波器，提升和关闭是JavaScript中非常基本但强制性的概念。" 
url: /zh/learn-javascript-basic-concepts-to-help-your-career/
tags: ["JavaScript Basic Concepts", "what is hoisting in JavaScript", "JavaScript closures", "scopes in JavaScript", "JavaScript fundamental"]
categories: ['Programming']
---

## 让我们学习开发人员必须知道的一些核心JavaScript基本面。这种解释的编程语言被广泛用于开发企业级应用程序。

{{< figure align=center src="images/Learn-JavaScript-Basic-Concepts-to-Help-Your-Career.png" alt="JavaScript基本概念">}}


## 概述
JavaScript是一种脚本语言，用于开发基于Web的动态应用程序。我们使用HTML和CSS构建静态网站，而JavaScript则用于添加交互性。在我们以前的博客文章中，我们介绍了[文档对象模型] [1]，现在我们将介绍其他一些重要的**JavaScript基本概念**。由于其丰富的功能和框架，Web开发人员倾向于选择这种脚本语言。此外，您可以通过学习JavaScript在前端和后端进行开发。但是，您不仅可以开发网络应用程序，还可以开发移动应用程序。如果您准备接受面试会议，本JavaScript教程将为您提供帮助。但是，本指南值得阅读，以增加您的知识库。
我们将在本文中介绍以下几点：
***[JavaScript中的升起] [2]**
***[javaScript中的范围] [3]**
***[JavaScript关闭] [4]**

## JavaScript中有什么提升{#in-javaScript what-is-hoisting}
当前范围之上的功能或可变声明的现象称为提升。这是一个非常关键的概念，大多数JavaScript开发人员都不知道。但是，这里要注意的一个重要的事情是，只有功能/变量声明才能最高，而不是功能/变量初始化。
让我们举个例子，看看下面的代码段；
```
printResults();
function printResults(){
    console.log("hello programmers")
}
// output: hello programmers

```
在上面的代码示例中，我们在函数声明之前进行了函数调用，但即使代码成功执行，这是由于JavaScript吊装所致。基本上，在编译时间内，JavaScript解释器会扫描代码，收集所有功能/变量，并将其放入称为词汇环境的内存中。变量也会发生同样的事情。
```
name = "mustafa";
console.log(name);
var name;

```
同样，名称变量初始化是在声明之前完成的，并且代码可以正常运行而没有任何错误。同样，在编译时，JS解释器研究了词汇环境以查找变量声明，因此执行了代码。
因此，如果您用Let and Const关键字声明变量，JavaScript将它们的提升方式有所不同。
```
name = "mustafa";
console.log(name);
let name;
// Uncaught ReferenceError: Cannot access 'name' before initialization

```
上述代码段中的错误发生了。原因是在提起此变量时未完成初始化。长话短说，所有声明都是用“未定义”初始化的，而用“让”或“ const”声明的变量并未在吊装中初始化。

## scopes in JavaScript {#scopes in-javaScript}
范围是开发人员必须知道的JavaScript基本概念之一。但是，使用JavaScript范围并不直接，并且有些不同。因此，JavaScript中有三种类型的范围，它们如下：
* *块级别**：用“让”或“ const”声明的变量包含块级范围。
```
if(true){
  let a = 1;
}
// a is not accessible outside the curly braces.
```
由于它具有块级范围，因此在卷曲支架{}之外无法访问变量“ A”。
* *功能级别**：JavaScript函数内声明的变量具有本地范围。
```
function innerFunc(){
        let last_name = "ashraf";
        console.log("hello "+last_name);
    }
// last_name is not accessible outside the function.
```
这里要注意的一个重要的事情是，用“ LET”“ const”和“ var”声明的变量具有功能主体内部的函数范围。
* *全局级别**：在函数之外声明的变量变为全局变量。无论您是使用“ LET”，“ const”还是“ var”关键字来宣布他们。此外，如果声明不使用任何关键字，则变量成为一个全局变量，如下所示：
```
function innerFunc(){
        last_name = "ashraf";
        console.log("hello "+last_name);
    }
// last_name is accessible outside the function too and is of global scope
```

## JavaScript关闭{#JavaScript-Closures}
这是另一个重要的概念，可以增强您对范围和数据封装的JavaScript知识。以最简单的形式，函数内部的函数称为闭合。您可以将内部函数称为闭合。此内部功能具有三种类型的范围：
* 它具有自己的块级范围。
* 它可以访问父母的变量。
* 全局范围中的变量也可以在闭合内部访问。
 让我们看看如何创建关闭：
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
变量first_name可在名为innirFunc的函数中访问，但父函数无法访问last_name变量。这种行为使程序员可以在范围链中创建私人变量。

## 结论
我们在此处结束此JavaScript指南，希望您对**JavaScript基本概念**有更好的了解。此外，我们还经历了**JavaScript关闭，JavaScript**的示例和吊装。对于初学者来说，还有许多其他重要概念是必不可少的。因此，如果您兴旺改善或刷新JavaScript概念，则本文将为您提供帮助。此外，您可以浏览“另请参见”部分中提到的博客文章。

## 联系我们
最后，[containerize.com] [5]提供了有关各种令人兴奋的主题的持续JavaScript教程。您可以通过在我们的社交媒体平台上关注我们，包括[Facebook] [6]，[LinkedIn] [7]和[Twitter] [8]。

## 问一个问题
您可以在我们的[论坛] [9]上让我们知道您的问题或查询。

## 常见问题解答
* *在JavaScript中要学习的重要概念是什么？**
请按照此JavaScript初学者的[指南] [2]了解JavaScript基本概念。

## 也可以看看
  * [JavaScript中的DOM是什么？ |文档对象模型] [1]
  * [JavaScript中的承诺是什么？ | JavaScript教程] [10]
  * [什么是无服务器计算？ |无服务器体系结构] [11]
  * [什么是多差？ |为什么要采用多租户？] [12]
  * [什么是生成的ai |生成人工智能] [13]
  * [JavaScript中的异步等待什么？ | JavaScript指南] [14]
  * [如何在VSCODE中使用chatgpt | VSCODE扩展代码GPT] [15]
  * [什么是OpenAi ChatBot GPT-3 | Chatgpt AI革命] [16]
  * [人工智能简介|什么是AI？] [17]
  * [JavaScript中的异步等待什么？ | JavaScript指南] [18]

  
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
