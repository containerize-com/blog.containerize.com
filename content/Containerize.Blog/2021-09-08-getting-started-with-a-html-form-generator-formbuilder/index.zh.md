---
title: "使用HTML表单生成器入门|形式构建器" 
seoTitle: "使用HTML表单生成器入门|形式构建器" 
description: "FormBuilder是具有拖放用户界面的免费且多语言的HTML Form Generator。请按照本教程了解如何在Localhost上进行设置。" 
date: Wed, 08 Sep 2021 18:01:02 +0000
author: muhammadmustafa
summary: "JavaScript供电的开源形式编辑器，具有多种配置，可配置的表单模板和自定义控件。让我们学习如何设置FormBuilder。" 
url: /zh/getting-started-with-a-html-form-generator-formbuilder/
categories: ['Form']
---

## JavaScript动力开源表格编辑器，具有多个配置，可配置的表单模板和自定义控件。让我们学习如何设置FormBuilder。

{{< figure align=center src="images/formbuilder.png" alt="HTML表单生成器">}}


## **概述**
我们最近发表了一些有关主题的文章，例如[如何设置Bootstrap表单创建者表单。第一篇博客文章是一篇教程文章，该文章演示了Bootstrap Form Builder [Form.io][3]的设置过程和功能。第二篇文章谈到了广泛使用的开源形式的建筑商。在当前时间点，双向互动是服务提供商和服务消费者之间最重要的事情。组织倾向于收到有关其服务的一致反馈，然后制定未来的业务策略。但是，表格是从客户那里收集和存储信息。企业生产多种表格来收集有关各种正在进行的操作的数据，其中有很多类型的形式是单页，其中一些是多页面的形式。一些企业在其在线门户网站上嵌入了表格，或者有些企业使用电子邮件或其他类型的媒介来揭示其表格以收集数据。
因此，有许多具有丰富形式构建器功能的开源表格和数据管理软件。在本文中，我们将通过介绍以下几点来探讨免费的HTML表单生成器**[formBuilder][4]** 。
  ***[什么是FormBuilder？][5]** 
  *[**如何设置？**][6]
  *[**如何使用FormBuilder创建表单？**][7]
  ***[结论][8]** 

## 什么是FormBuilder？   {#什么}
[FormBuilder][4]是一个开源表单设计器，可让用户创建交互式表单。它是安全的，可扩展的，并且具有自托管功能。此HTML表单生成器是多语言的，并为多种语言提供了支持。有一个用户友好的用户界面，用户可以在其中拖放表单元素以制定所需的表单模板。此外，它提供了丰富的控件和可配置的表单模板。此外，用户可以在用户界面上创建多个选项卡以构建多页面表单。最重要的是，用户可以通过开发其插件来倾向于此免费形式构建器。它具有有关开发和部署的所有文档。它是用node.js编写的，所有源代码都可以在[github][9]上找到。
这是form.io的顶级亮点
  * I18N集成
  *多页面
  *可扩展
  *支持流行的JavaScript前端框架
  *拖动UI

## 如何设置？   {#设置}
Form Builder教程的这一部分将向您展示如何在本地计算机上设置FormBuilder。
在进一步之前，请确保您已经安装了以下先决条件。
  * node.js> = 10.9.0
  * npm
  * git
安装先决条件后，运行以下命令以克隆此应用程序的源代码：
```
git clone https://github.com/kevinchappell/formBuilder
```
接下来，运行以下命令安装依赖项：
```
cd form-builder<br>npm install 
```
之后，您可以通过运行以下命令来启动应用程序：
```
npm start
```
最后，上述命令将在以下地址打开浏览器中的应用程序：
```
http://localhost:8080/
```

## 如何使用FormBuilder创建表单？   {#如何}
在本节中，我们将探讨此HTML表单生成器的功能，并将学习如何创建表单。
启动服务器后，将出现以下用户界面。

{{< figure align=center src="images/Screenshot-2021-09-08-at-18.43.50-1024x574.png" alt="HTML表单生成器">}}

向前迈进，您可以在右侧看到菜单栏。它包含表单元素，例如按钮，复选框，文本字段，数据字段，标题，段落等。但是，您可以拖动这些元素，并掉入屏幕的中间区域（可丢弃）。在左上角，有一个选项可以启用该应用程序的引导版本。在左上角，有一个下拉列表，用户可以选择任何可用的语言。

{{< figure align=center src="images/Screenshot-2021-09-08-at-21.29.20-1024x578.png" alt="形式编辑器">}}

接下来，我们可以将任何形式元素拖到可辍学的区域。此外，我们可以编辑任何元素的配置，如上图中所示。可以选择创建现有元素的副本。我们可以彼此更改元素的位置。

{{< figure align=center src="images/Screenshot-2021-09-08-at-23.02.50-1024x575.png" alt="HTML表单生成器">}}

完成表单建筑物后，您可以通过按下顶部中间的“渲染”按钮来渲染表单。此外，在各种表单选项中，用户可以在表格后面生成HTML。还有其他选项，例如加载用户表单，显示用户数据，渲染用户表单和清除用户表单。除这些功能外，还有许多表单操作，例如“ getFieldTypes”，它们返回表单的注册字段类型。同样，还有许多其他动作，例如显示数据，获取XML，设置数据，切换编辑等等。但是，您可以检查自己的其他许多事情。由于它是开源，您可以根据自己的要求对其进行修改。

## 结论 {#conclusion}
这是博客文章的结尾。我们希望，如果您希望部署开源HTML表单生成器，本教程将真正为您提供帮助。本文介绍了FormBuilder的许多方面，因此您可以轻松地考虑您的业务需求。这些免费的开源形式建筑商具有成本效益且节省时间。这些免费工具不仅提供形式构建功能，还提供表格和数据管理。您可以使用第三方Web应用程序配置表单。此外，它消除了为不同业务应用程序创建不同形式的麻烦，而是企业主可以使用这些开源形式的建造者制作任何形式的表单。此外，这些表单编辑器还有一些可根据需求修改的插件。因此，现在是时候通过使用良好的免费HTML表单生成器来自动化此类重复任务了。
最后，[Containerize.com][10]正在撰写有关进一步开源产品的文章。因此，请与[表格][11]类别保持联系以进行常规新闻和更新。

## 探索
  ***[form.io][3]** 
  ***[orbeon][12]** 
  ***[ohmyform][13]** 
  ***[Webiny][14]** 
  ***[formtools][15]** 
  ***[formBuilder][4]** 
  ***[羊驼表格][16]** 
  *[**如何在localhost上设置Bootstrap Form creator form.io **][1]
  *[**使用免费和开源软件自动化业务操作**][17]
  *[ **2020年的前5名开源在线形式建筑商** ][2]

  
[1]: https://blog.containerize.com/form/how-to-setup-bootstrap-form-creator-formio-on-localhost/
[2]: https://blog.containerize.com/form/top-5-open-source-online-form-builders-in-year-2020/
[3]: https://products.containerize.com/form/formio/
[4]: https://products.containerize.com/form/formbuilder/
[5]: #what
[6]: #setup
[7]: #how
[8]: #Conclusion
[9]: https://github.com/kevinchappell/formBuilder
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/healthcare-technologies/
[12]: https://products.containerize.com/form/orbeon/
[13]: https://products.containerize.com/form/ohmyform/
[14]: https://products.containerize.com/form/webiny/
[15]: https://products.containerize.com/form/formtools/
[16]: https://products.containerize.com/form/alpaca/
[17]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
