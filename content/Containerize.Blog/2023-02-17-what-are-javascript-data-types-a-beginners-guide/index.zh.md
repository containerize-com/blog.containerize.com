---
title: "什么是JavaScript数据类型？ |初学者指南" 
seoTitle: "什么是JavaScript数据类型？ |初学者指南" 
description: "什么是JavaScript数据类型？请遵循本初学者指南，以学习JavaScript号码，字符串，布尔值，空，未定义等的7种数据类型。" 
date: Fri, 17 Feb 2023 08:57:43 +0000
author: muhammadmustafa
summary: "JavaScript的受欢迎程度由于其适应性而无法阻挡。遵循此JavaScript初学者指南，并开始培养您在JS堆栈中的专业知识。" 
url: /zh/what-are-javascript-data-types-a-beginners-guide/
categories: ['Programming']
---

## JavaScript的受欢迎程度由于其适应性而无法阻挡。遵循此JavaScript初学者指南，并开始培养您在JS堆栈中的专业知识。

{{< figure align=center src="images/What-are-JavaScript-Data-Types-A-Beginners-Guide-1.png" alt="What are JavaScript Data Types? |什么是JavaScript数据类型？ |初学者指南">}}


## 概述
无论您是平庸的水平还是经验丰富的开发人员，您都会为开发工作中的问题提供解决方案。 [Containerize.com][1]已经开始在编程类别中编写教程博客文章，我们从**JavaScript初学者指南**开始。由于我们是开始的，因此本文是关于JavaScript数据类型的。让我们探索**什么是JavaScript数据类型**，并查看如何有效地在源代码中使用它们的示例。因此，彻底详细介绍本初学者指南，以便您可以很好地了解**JavaScript数据类型**。
我们正在介绍以下几点：
  * [什么是数据类型？][2]
  * [什么是JavaScript数据类型？][3]

## 解释的数据类型|什么是数据类型？   {#什么is-a-data-type}
数据类型就是要告诉编译器如何解释或编译数据。数据类型的使用至关重要，必须明智地使用。简而言之，它是关于数据的格式，例如数字，字符串，布尔值等。但是，有两类数据类型原始数据类型和非主要数据类型。我们将在下一节中进行八种原始数据类型。

## 什么是JavaScript数据类型？   {#What-are-javascript-data-types}
实际上，JavaScript是一种松散的类型语言，这意味着您不必明确定义变量类型。您可以为变量分配任何值，该变量将存储该值，例如字符串，BigInt，Boolean或更多。

{{< figure align=center src="images/web-development.png" alt="JavaScript初学者指南">}}


#### 原始数据类型
原始数据类型是不变的，在创建和初始化之后无法更改。但是，您可以重新分配一个新值，但不能突变现有值。
例如：
```
var name = "my name is mustafa";
name = "my name is changed";
console.log(name) // output:  my name is changed
name[0] = "M";
console.log(name) // output: my name is changed
```
在上面的示例中，字符串是一种原始数据类型，旧值被新值替换，但是现有值的变化并未反映。因此，我们可以看到它仍然是“我的名字已更改”而不是“我的名字已更改”；

#### 非主要数据类型
非主要数据类型是可变的，简单的单词与原始数据类型相反。
例如：
```
var arr = [1,2,3];
arr[0] = 11;
console.log(arr) // output: [11,2,3]
```
另外，按值比较原始数据类型，并始终通过参考比较非促进数据类型。
例如：
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
现在，让我们一一浏览数据类型。有6种原始数据类型和1种非主要数据类型。
**原始数据类型包括：**
***字符串**：此数据类型代表文本数据，该数据由引号包围的字符序列组成。
***数字**：它表示十进制/非确定数据，尤其是整数或浮点。
***布尔值**：逻辑值的表示为或错误。
***符号**：符号用于保持独特的值。
***未定义**：一个没有任何值或非初始化变量的变量。
***null**：没有任何值被视为null。
**非主要数据类型包括：**
**对象**：它用于存储由键值对组成的数据集合。

## 结论
这是该**JavaScript初学者指南的终结**。我们已经经历了**什么是JavaScript数据类型**？此外，我们还探索了什么是简而言之的数据类型。您应该更好地理解JavaScript中的非主要和**原始数据类型**。如果您想为求职面试做准备，这篇博客文章确实会为您提供帮助。
最后，[Containerize.com][1]是不断地撰写有关进一步开源产品和主题的博客文章。此外，您可以在我们的社交媒体帐户[Facebook][4]，[LinkedIn][5]和[Twitter][6]上关注我们。

## 问一个问题
您可以在我们的[论坛][7]上让我们知道您的问题或查询。

## 常见问题解答
**8种JavaScript数据类型是什么？**
请访问此[链接][3]以了解8种JavaScript数据类型。

## 也可以看看
  * [免费和开源流行的JavaScript框架][8]
  * [使用免费和开源软件自动化业务运营][9]
  * [2022年学习的十大开源技术][10]

  
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
