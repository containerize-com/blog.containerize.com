---
title: "什么是多重？ |为什么要采用多租户方法？" 
seoTitle: "什么是多重？ |为什么要采用多租户方法？" 
description: "什么是多重？请关注此博客文章以了解多租户背后的实际概念，并开始构建可扩展的多租户应用程序。" 
date: Tue, 21 Feb 2023 20:10:22 +0000
author: muhammadmustafa
summary: "设计多租户应用程序体系结构，并有效地满足用户的要求。让我们探讨如何允许您构建可扩展软件。" 
url: /zh/what-is-multitenancy-why-a-multi-tenant-approach-2/
categories: ['Programming']
---

## 设计多租户应用程序体系结构，并有效地满足用户的要求。让我们探讨如何允许您构建可扩展软件。

{{< figure align=center src="images/What-is-Multitenancy-Why-a-multi-tenant-Approach.png" alt="What is Multitenancy? ">}}


## 概述
欢迎来到[编程][1]类别中的另一篇博客文章。我们将讨论多租户的应用程序体系结构。实际上，[Containerize.com][2]在其开源产品堆栈中具有广泛的多租户应用程序。开源多租户应用程序包括[Form.io][3]，[Botpress][4]等。此外，关于这些开源软件的架构，部署，开发和使用，还有完整的[文档][5]。撰写本文的原因是要了解软件开发中多租赁背后的概念。因此，让我们找出**什么是多种态度？
以下几点将在本文中讨论：
  * [什么是多差？多租户与单租户][6]
  * [多租户应用架构的类型][7]
  * [多租户应用程序的业务益处][8]
  * [多租期中的缺点][9]

## 什么是多重？多租户与单租户 {#What-is-Multitenancy-Multi-Tenant-vs-Single-Tenant}

多义是指为多个前端服务的单个服务器实例，特别是已知的租户。每当您遇到多租户软件时，只需告诉您的大脑，该软件正在运行共享服务器的单个实例，并且多个租户（客户端）都通过不同的品牌连接到此实例。
例如，为大学构建的软件服务于具有不同前端品牌和计划数据的不同部门。基本上，有一个服务器运行和服务所有租户的实例。此外，所有租户之间都有数据分离和数据隐私。此外，每个租户都有自己的业务逻辑，并获取并将其数据存储在一个但私人/孤立的位置。

{{< figure align=center src="images/multi-tenant-1.png" alt="多租户建筑">}}

现在，让我们快速看一下单租户建筑。在单租户体系结构中，每个租户有一个服务器实例。同样，让我们​​以大学软件为例。单租户方法是指每个部门的一个服务器实例，实例的数量取决于部门的数量（租户）。

{{< figure align=center src="images/single-tenant-2.png" alt="单租户建筑">}}


## 多租户应用程序体系结构的类型 {#Types-of-Multi-Tenant-Application-Architecture}

到目前为止，您对多种租赁有所了解，现在我们将经历各种类型。
 **一个数据库 - 一个应用程序实例** ：这种方法非常受欢迎，并且已被广泛用于构建多租户应用程序。根据这种方法，有一个带有单个数据库的应用程序实例。此外，还有一个共享的模式，租户的数据与其独特的ID一起存储在一个位置中。
 **多个数据库 - 一个应用程序实例:**  在此多租户应用程序体系结构中，只有一个实例使用多个数据库运行。每个租户都有自己的数据库架构，每个租户分别为每个租户保存所有信息。
 **多个数据库 - 多个应用程序实例** ：第三种方法是指运行多个服务器实例以及多个数据库。没有共享，每个租户都完全隔离，租户之间没有依赖性。

## 多租户应用程序的业务利益 {#Business-Benefits-of-Multi-Tenant-App}

在本节中，我们将获得选择多种挑战的一些显着好处。虽然，我们可以长期讨论特权，但让我们看看以下几点：
 **可伸缩性** ：缩放多租户体系结构很容易。无论您选择哪种类型，您都可以水平或垂直扩展。
 **成本效益** ：选择多种义务可节省您的运营成本。有共享的资源，因此扩大资源始终具有成本效益。
 **效率和灵活性** ：在多端环境中，您可以在开发和部署中实现效率。例如，您可以在共享数据库架构上运行脚本以更新所有租户。
 **更好的资源管理** ：添加和删除资源很简单。此外，该架构提供了改进且管理良好的基础设施。此外，每个租户都是私人且安全的，并且可以访问共享/非共享数据库。

## 多租户的缺点 {#Drawbacks-in-Multi-Tenancy}

这篇博客文章的目的是给予“多租户”架构的公平感。
 **复杂的身份验证机制** ：由于多种资源分配的共同性质，数据访问点有严格的协议。
 **服务器故障:**  选择多租户应用程序体系结构是要考虑的主要点。由于任何原因，每当服务器下降时，所有租户都会变得无功能。
 **隐私风险** ：在多租户架构中，有高风险的安全漏洞。实际上，所有租户的数据都存储在共享数据库中，因此任何第三方入侵都可能导致数据损坏或盗窃。

## 结论
我们在这里结束这篇博客文章。这篇文章是否对您的问题有答案，例如  **什么是多重** ？此外，我们还探索了 **多租户与单租户**  基础架构。此外，本指南将在选择多租户应用程序体系结构或单个租户时为您提供帮助。最重要的是，如果您要建造SaaS，则是第一选择。您可能会在“另见”部分中找到其他有趣的博客文章，这将为您提供有关技术界的最新见解。
最后，[Containerize.com][2]不断地撰写有关进一步开源产品和主题的博客文章。此外，您可以在我们的社交媒体帐户[Facebook][10]，[LinkedIn][11]和[Twitter][12]上关注我们。

## 问一个问题
您可以在我们的[论坛][13]上让我们知道您的问题或查询。

## 常见问题解答
 **示例有什么多租户？** 
请访问此[链接][6]，以了解什么是多重。有细节以及示例。
 **多租户建筑的含义是什么？** 
 **多租户应用程序体系结构** 是指服务器的一个实例为多个租户（客户端）服务。有关更多详细信息，请导航到此[链接][7]。

## 也可以看看
  * [什么是生成的ai |生成人工智能][14]
  * [如何与Google床单整合Chatgpt][15]
  * [如何在VSCODE中使用chatgpt | VSCODE扩展代码GPT][16]
  * [什么是OpenAi ChatBot GPT-3 | Chatgpt AI革命][17]
  * [人工智能简介|什么是AI？][18]



 [1]: https://blog.containerize.com/category/programming/
 [2]: https://www.containerize.com/
 [3]: https://products.containerize.com/form/formio/
 [4]: https://products.containerize.com/live-chat/botpress/
 [5]: https://products.containerize.com/
 [6]: #What-is-Multitenancy-Multi-Tenant-vs-Single-Tenant
 [7]: #Types-of-Multi-Tenant-Application-Architecture
 [8]: #Business-Benefits-of-Multi-Tenant-App
 [9]: #Drawbacks-in-Multi-Tenancy
 [10]: https://web.facebook.com/containerize
 [11]: https://www.linkedin.com/company/containerize/
 [12]: https://twitter.com/containerize_co
 [13]: https://forum.containerize.com/
 [14]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
 [15]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
 [16]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
 [17]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
 [18]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
