---
title: "如何在localhost上设置bootstrap表单创建器form.io" 
seoTitle: "如何在localhost上设置bootstrap表单创建器form.io" 
description: "浏览本文，并了解如何在Localhost上设置Formio。该引导形式创建者是免费的，可扩展的，并提供了第三方集成。" 
date: Fri, 25 Jun 2021 10:30:28 +0000
author: muhammadmustafa
summary: "使用拖放html表单构建器构建特定于任务和可自定义的表单。 Formio是自托管的，API驱动的，提供表格和数据管理。" 
url: /zh/how-to-setup-bootstrap-form-creator-formio-on-localhost/
categories: ['Form']
---

## 使用拖放html表单构建器构建特定于任务和可自定义的表单。 Formio是自托管的，API驱动的，提供表格和数据管理。

{{< figure align=center src="images/formio-1.png" alt="Bootstrap表单创建者">}}


## **概述**
在快速增长的业务需求下，有很多直接属于公众交易和参与的业务。这种参与可以是物理的或虚拟的。有时，这是关于提供服务，有时是关于收集数据或反馈。另一方面，企业组织倾向于收集有关其产品和服务的客户数据。因此，数据量取决于与相关受众的影响力。接下来，数据管理是另一个关键任务，它需要引起极大的关注。
但是，公司行业使用在线表格来满足与数据收集相关的需求。有许多网站可能包含许多表格，例如联系表，投诉表格，客户反馈表，入学表格等。现在，它成为构建，管理这些表格和提交数据的麻烦。来了[form.io] [1]。 Form.io是一个开源Bootstrap表单创建者，可提供形式的建筑物和数据管理功能。在最近的过去，我们发表了一篇文章，其中涵盖了[2020年的前5名开源在线形式建筑商] [2]。在这篇博客文章中，我们将通过涵盖以下几点来探索此Bootstrap表单创建者以及在Localhost上的设置过程。
  *** [什么是form.io？io？3]
  *** [如何在localhost上设置form.io？] [4] **
  *** [form.io如何工作？] [5] **
  *** [结论] [6] **

## 什么是form.io？ {#什么}
form.io是一个免费的开源形式构建器。它是自托管，多语言和多租户软件。这个** html表单创建者**为用户和表格提供了基于角色的权限。 Form.io提供OAuth身份验证，并允许用户使用流行的身份提供商（例如Google和Facebook）登录。此外，此HTML表单构建器基于无服务器体系结构，用户可以通过仅放置单个代码来生成和嵌入表单。就用户界面而言，它提供了带有拖放功能的逻辑用户界面。一侧有各种HTML元素，用户可以拖放以构建所需的表单。用户可以注入自定义JavaScript以获得增强功能。此外，用户可以使用CSS修改表格的外观。有一些规定可以控制表格的提交和访问。但是，此免费的HTML表单制造商用JavaScript编写，所有源代码均可在[Github] [7]上获得。
form.io提供了广泛的功能。关键功能在下面列出。
  *电子邮件表格提交
  * 数据管理
  * OAuth提供商
  *可嵌入形式
  *布局友好

## 如何在localhost上设置form.io？ {#localhost}
在** form Builder教程**的这一部分中，我们将看到如何在Localhost上设置Form.io。它很容易设置，因为它提供了有关部署和开发的全面文档。
在进一步之前，请确保您已经安装了以下先决条件。
  * git
  * nodejs
  * mongodb
一旦安装上述先决条件，打开终端运行以下命令：
```
mkdir formio<br>cd formio
```
现在，运行以下命令以克隆本应用程序的源代码：
```
git clone https://github.com/formio/formio.git
```
成功克隆时，运行以下命令安装依赖项：
```
cd formio <br>npm install
```
之后，使用以下命令运行应用程序：
```
npm start 
```
此命令将在某些用户提示中显示以下输出：

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.09.46-1024x472.png" alt="Form Builder教程">}}

您可以在以下地址中访问浏览器中的应用程序。
```
http://localhost:3001 
```
它将打开登录页面。您可以使用在安装过程中输入的凭据登录。

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.29.11-1024x576.png" alt="Bootstrap表单创建者">}}


## form.io如何工作？ {#工作}
该部分描述了[form.io] [1]的工作机制。该表格设计师的整个生态系统基于组件和开发人员友好。它是可扩展的，并为第三方应用程序提供了一个安息的接口。因此，让我们看看如何在此**形式构建器**中创建形式。
登录后，您将降落在下一页上。

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.57.18-1024x487.png" alt="拖放HTML形成构建器">}}

现在，单击“新表单”按钮，然后创建第一个表单。将显示以下页面。您可以看到左侧有一个面板，其中包含表单的HTML元素。它包含四个部分，例如“基本组件”，“特殊组件”等。

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.01.32-1024x527.png" alt="HTML形式创建者">}}

您可以将表单名称与其他属性一起设置。现在，如果您从左侧选择一个表单元素并将其放入中间，则会看到以下对话框。

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.01.55-1024x574.png" alt="Bootstrap表单创建者">}}

您可以看到它使您可以修改表单主题，验证和其他修改。构建表格后，点击“创建”按钮，您将降落在生成的表单上。

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.12.48-1024x519.png" alt="拖放HTML形成构建器">}}

生成的表单带有各种选项，您可以在其中编辑表单并查看提交的数据。在“表单操作”选项卡中，您可以设置诸如电子邮件，webhook等的前或发布表单提交挂钩。最重要的是，每个生成的表单都带有API，用户可以通过表单ID访问它。

## 结论{#conclusion}
这是此形式构建器教程的终结。希望您已经了解了此引导表格创建者的功能，部署和用法。此外，还有许多提供广泛功能的开源形式建筑商。但是，选择满足您业务需求的最佳产品非常重要。因此，在这篇博客文章中，我们观察到Form.io提供了有关功能，布局和样式的自定义化。它使您可以生成可以在实时网站上托管的多功能表格。实际上，您可以在自己的数据库或任何其他存储选项中以良好的方式收集数据。
最后，[** containerize.com **] [8]正处于撰写有关进一步开源主题和产品的文章的一致过程中。因此，请与此[表格] [9]类别保持联系以进行常规更新。

## 探索
  *** [form.io] [1] **
  *** [ORBEON] [10] **
  *** [ohmyform] [11] **
  *** [Webiny] [12] **
  *** [formtools] [13] **
  *** [formBuilder] [14] **
  *** [羊驼表格] [15] **
  *[**使用免费和开源软件自动化业务操作**] [16]
  *[** 2020年的前5名开源在线形式建筑商**] [2]
[1]: https://products.containerize.com/form/formio/
[2]: https://blog.containerize.com/form/top-5-open-source-online-form-builders-in-year-2020/
[3]: #what
[4]: #localhost
[5]: #work
[6]: #Conclusion
[7]: https://github.com/formio/formio
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/form/
[10]: https://products.containerize.com/form/orbeon/
[11]: https://products.containerize.com/form/ohmyform/
[12]: https://products.containerize.com/form/webiny/
[13]: https://products.containerize.com/form/formtools/
[14]: https://products.containerize.com/form/formbuilder/
[15]: https://products.containerize.com/form/alpaca/
[16]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
