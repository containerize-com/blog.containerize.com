---
title: "JavaScript中有什么希望？ | JavaScript教程" 
seoTitle: "JavaScript中有什么希望？" 
description: "JavaScript中有什么希望？承诺是代码块，它给出了异步操作（例如待处理，完成或拒绝）的最终结果。" 
date: 2023-03-03T00:00:00+00:00
author: muhammadmustafa
summary: "JavaScript中有什么希望？承诺是代码块，它给出了异步操作（例如已完成或拒绝）的最终结果。" 
url: /zh/what-is-promise-in-javascript-javascript-tutorial/
categories: ['Programming']
---

## 您是否在努力学习JavaScript承诺的概念？本文将解释如何创造承诺，为什么我们在JavaScript中使用Promise等等。

{{< figure align=center src="images/What-is-Promise-in-JavaScript-Promises-Explained.png" alt="What is Promise in JavaScript? " >}}


## 概述
我们希望您对[JavaScript数据类型][1]有更好的了解。现在，这是[编程][2]类别中的另一篇博客文章。在本JavaScript教程中，我们将通过JavaScript**的承诺进行**，随之而来的是，我们还将看到什么是异步操作，承诺的使用以及如何在JavaScript中创造承诺。首先，异步过程/操作是相对于其他过程独立执行的，并且不会造成任何阻塞。因此，您需要处理异步操作，否则可能会在JavaScript代码中造成异常。因此，我们将探索如何使用承诺处理异步操作。
我们将在本JavaScript教程中介绍以下几点：
* **[JavaScript中的承诺是什么？解释的承诺][3]**
* **[为什么我们在JavaScript中使用Promise？][4]**
* **[Promise如何在JavaScript中起作用？][5]**
* **[如何创造诺言？][6]**

## JavaScript中有什么希望？承诺解释了 {#in-is-promise in-javascript-promises-supplated}
承诺是代表异步操作天气值的对象，其解决，拒绝或处于待处理状态。用更简单的话来说，承诺用于返回一个尚未由异步代码块产生的值。实际上，有三种**的诺言状态**，可以在以下任何状态下：
**待处理**：承诺处于待处理状态，这意味着它处于起始阶段，并且目前处于执行状态。
**满足**：已解决承诺并返回价值。
**拒绝**：这是由任何错误引起的状态，这意味着承诺已被拒绝。
这里要考虑的重要一件事是，承诺返回的价值/状态是不可变的，不能改变，这意味着诺言确保没有异常行为。

## 为什么我们在JavaScript中使用Promise？   {#为什么WE-使用promise-in-javaScript}
如果您不知道**回调地狱**，那么让我分享它的本质。首先，回调是另一个功能中的功能。基本上，在接收结果后执行的函数中将回调函数作为第二个参数传递。因此，在许多情况下，您需要嵌套回调功能，并且随着嵌套的增加，它几乎无法处理。因此，我们称这是回调功能的长嵌套**回调地狱**。
因此，诺言是避免回调地狱情况的一种方式。承诺的使用可提供更好的可读性和改善的错误处理。此外，您可以通过检索返回的值并将该值传递给链中的下一个功能来更好地处理异步操作。

## Promise如何在JavaScript中起作用？   {#promise-works-in-javaScript}
现在，让我们了解承诺背后的工作机制。请查看下面提到的图。

{{< figure align=center src="images/what-is-a-promise.png" alt="承诺如何在JavaScript中起作用？?" >}}

根据上述工作流程，实现细节非常明确。承诺在其创建时开始执行，并处于等待响应的等待状态。有两个选项要么会有数据，要么在处理结束时会出现错误。接收到数据后，它进入.CACT（）块，并在错误时进入.catch（）块。

## 如何创造诺言？   {#操作方法create-a-promise}
到目前为止，我们已经涵盖了承诺的基本概念。现在，我们将探索如何在JavaScript中创建诺言。让我们使用以下承诺构造函数来创造诺言。
```
let promise = new Promise(function(resolve, reject) {
  // do some processing.. 
});
```
Promise构造函数将函数作为一个参数，该论点再次首先采用两个参数，解决方案，另一个拒绝。在成功的情况下，它调用resolve（）方法，并在错误或拒绝时进入拒绝（）块。
让我们深入研究，探索诺言的创造。
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
在上面的代码段中，您可以在Resolve（）块中进一步拨打API调用。
现在，让我们看看JavaScript承诺的执行模式。
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
以下是上述代码段的输出：
```
synchronous execution
Hello Word
It is executing asynchronously: Success
promise is completed
```
因此，承诺主体内部的代码同步工作，因此打印了“同步执行”。接下来，.then（）block的工作异步并等待直到生成结果，但是程序执行并不能停止，这就是为什么打印“ Hello Word”并将承诺执行推迟。之后，。然后。然后块执行并返回其承诺的值。这就是JavaScript承诺的故事。同样，由于JavaScript是单线螺纹，因此承诺用于以非阻滞方式处理异步操作。

## 结论
这是此**JavaScript教程**的结尾。希望您对JavaScript承诺有一个好主意。我们已经介绍了**JavaScript**的承诺，为什么我们在JavaScript中使用Promise，**Promise如何在JavaScript**中起作用，以及如何创造诺言。此外，我们将更多地介绍有关其高级用法和规定的主题。因此，请仔细阅读本文，以防您为面试做准备。

## 联系我们
最后，[containerize.com][7]提供了有关各种令人兴奋的主题的持续JavaScript教程。您可以通过在我们的社交媒体平台上关注我们，包括[Facebook][8]，[LinkedIn][9]和[Twitter][10]。

## 问一个问题
您可以在我们的[论坛][11]上让我们知道您的问题或查询。

## 常见问题解答
**JavaScript中有什么承诺？**
请按照此[链接][3]知道JavaScript中的承诺。

## 也可以看看
  * [什么是JavaScript数据类型？ |初学者指南][1]
  * [Kubernetes多租赁和基于容器的体系结构][12]
  * [什么是无服务器计算？ |无服务器体系结构][13]
  * [什么是多差？ |为什么要采用多租户？][14]
  * [什么是JavaScript数据类型？ |初学者指南][15]

  
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
