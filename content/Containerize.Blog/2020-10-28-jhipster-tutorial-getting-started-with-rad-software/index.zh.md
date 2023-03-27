---
title: "Jhipster教程| RAD软件入门" 
seoTitle: "Jhipster教程| RAD软件入门" 
description: "逐步的Jhipster教程，用于初学者的入门。遵循本文，使用开源Jhipster Rad软件设置第一个应用程序。" 
date: Wed, 28 Oct 2020 10:42:37 +0000
author: muhammadmustafa
summary: "让我们研究源代码生成器。它提供开箱即用的功能，以生成具有据可查的REST API的基于Web的响应应用程序。" 
url: /zh/jhipster-tutorial-getting-started-with-rad-software/
categories: ['Rapid Application Development']
---

## 让我们深入研究源代码生成器。它提供开箱即用的功能，以生成具有据可查的REST API的基于Web的响应应用程序。

{{< figure align=center src="images/How-to-set-up-and-create-a-basic-application-with-Jhipster.png" alt="Jhipster教程">}}


## 概述：
我们最近发表了一份关于[RAD软件][2]的重要性的[博客文章][1]。技术的发展速度很高。业务需求和需求正在一天变化。在较短的时间范围内开发解决方案的竞赛。另一方面，每个企业都希望尽快推出产品来捕捉市场。因此，开源社区开发了许多基于  **敏捷软件开发**  的软件。这些免费的快速应用程序开发软件可以促进用户具有快速原型开发功能的用户。它使您可以构建和启动产品的初始版本，因此可以通过用户反馈的输入来开发更多版本。此外，这些软件旨在在项目的任何阶段吸收任何更改。
同时，软件开发团队加快了他们的开发流程并确保早期交付。实际上，它是具有成本效益的，节省时间的，并使开发人员和用户满意。快速的应用程序开发足够灵活，您不需要计划和严格的截止日期。您可以建立最终消费者所需的东西。在本Jhipster教程中，我们将研究如何设置[Jhipster][3]并通过涵盖以下几点来创建我们的第一个应用程序：
  * [什么是JHipster，如何安装它？][4]
  * [如何生成并运行基本应用程序？][5]
  * [探索生成应用程序的管理仪表板][6]
  * [结论][7]

## 什么是杂物，如何安装它？ {#install}

[Jhipster][3]是一种开源RAD软件，用于生成企业Web应用程序。该开源应用程序构建器在服务器端和流行的前端技术（例如Angular，vue.js和react.js）上提供了基于Java的弹簧启动框架。此源代码生成器包括具有多种用户身份验证机制（例如OAuth.20，JWTS和HTTP Session Authentication）的强大微服务体系结构。此外，它提供了一个在线版本，用户可以在其中探索所有功能。此  **开源原型制作工具**  用JavaScript编写，并少量输入打字稿。因此，有关开发和部署的综合文档。开发人员可以在[Github][8] repo中找到源代码。使用流行的测试框架（例如盖林和量角器）进行运行测试的完全支持。此外，它是强大的，安全的，跨平台的，并支持第三方集成。
在此  **Jhipster教程中，**  我们将探索Jhipster的设置和用法。 [JHIPSTER][3]是免费的，并在快速应用开发模型的顶部建立。它提供了一个非常有前途的开发人员友好的生态系统，并提供了强大的快速Web应用程序开发工具。
让我们看看如何安装此开源应用程序构建器。首先，我们将安装以下先决条件。
  * [Java 11 JDK][9]
  * [node.js 10.20.1+][10]
安装完成后，打开终端并运行以下命令。
`npm install -g generator -jhipster`
此命令可能需要几分钟，并且成功完成后，将在您的计算机上安装Jhipster。
您可以检查以下命令以检查安装。
`jhipster -version`

{{< figure align=center src="images/install-1024x564.png" alt="JHIPSTER安装">}}


## 如何生成和运行基本应用程序？ {#run}

在此  **Jhipster教程**  的部分中，我们将学习如何使用此开源RAD软件生成第一个应用程序。
返回到终端窗口，运行以下命令：
`mkdir 1StAppCD 1Stapp/`
制作目录后，运行下面提到的以下命令：
'
此命令将启动该过程。回答有关应用程序技术偏好的所有问题，例如前端和后端技术，数据库，测试框架等，如下图所示。

{{< figure align=center src="images/qst-1024x474.png" alt="Jhipster教程">}}

回答所有问题后，此源代码生成器将将代码文件生成您的文件夹。
现在，使用以下命令运行生成的应用程序：
`。/mvnw`
注意：如果您选择了Maven作为后端的构建自动化，则此命令将起作用。

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.02.31-1024x196.png" alt="Jhipster教程">}}

通过http：// localhost：8080/访问您的应用程序中的应用程序。

## 探索生成应用的管理仪表板 {#dashboard}

击中http：// localhost：8080/在浏览器中，您将看到以下屏幕。

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.56.41-1024x488.png" alt="代码生成器">}}

您可以使用上述凭据登录为管理员。 Jhipster提供两个默认用户角色。成功登录后，您将在图像中显示以下规定。

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.12-1024x532.png" alt="开源RAD软件">}}

Jhipster提供完整的用户管理，您可以在下面的图像中看到您的用户。

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.25-1024x451.png" alt="JHipster用户管理">}}

健康选项为您提供有关磁盘空间和数据库的信息。

{{< figure align=center src="images/Screenshot-2020-10-27-at-16.10.54-1024x344.png" alt="Jhipster教程">}}

JHIPSTER Admin仪表板中有一个完整的记录系统。

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.38-1024x583.png" alt="开源RAD软件">}}

此开源应用程序构建器的管理仪表板还提供内置和自定义功能的休息端点。

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.48-1024x582.png" alt="开源杂物">}}


## 结论 {#con}

这是本Jhipster教程的终结。有许多开源RAD平台提供  **即时应用程序开发** 。有一个非常充满活力的社区，始终活着回应问题及其解决方案。由于许多因素，RAD方法正在名声。首先，无需完全了解要求。其次，在整个软件开发生命周期中，最终消费者都参与其中。第三，由于所有利益相关者都在船上，危险因素的速度非常小。但是，RAD软件具有适应性的，对开发人员的友好型，并且可以灵活地进行更改。随着代码生成器节省重写重复脚本的巨大时间，它节省了很多时间。这个 **[jhipster][3]教程**  文章强调了一些重要的见解。使用一些简单的外壳命令可以轻巧且易于设置。
如果您正在认真寻找开源快速应用程序开发平台，请立即随时安装此开源应用程序构建器。最后，[Containerize.com][11]都将通过一些更有趣的教程来增强其教程基础。请与此[快速应用程序开发][2]类别保持联系，以进行常规更新。

## 探索
您可能会发现以下链接相关：
  * [古巴平台][12]
  * [QuickApp][13]
  * [jhipster][3]
  * [li3][14]
  * [Apache ISIS][15]
  * [2021年的前5名免费快速应用程序开发软件][16]
  * [企业快速应用程序开发软件| RAD][17]
  * [在2021年选择开源软件之前需要审查的内容][18]



 [1]: https://blog.containerize.com/2020/10/23/how-rad-software-can-help-you-to-grow-business-to-next-level/
 [2]: https://products.containerize.com/rad
 [3]: https://products.containerize.com/rad/jhipster
 [4]: #install
 [5]: #run
 [6]: #dashboard
 [7]: #con
 [8]: https://github.com/jhipster/generator-jhipster
 [9]: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html
 [10]: https://nodejs.org/en/
 [11]: https://www.containerize.com/
 [12]: https://products.containerize.com/rad/cuba
 [13]: https://products.containerize.com/rad/quickapp
 [14]: https://products.containerize.com/rad/li3
 [15]: https://products.containerize.com/rad/apache-isis
 [16]: https://blog.containerize.com/rapid-application-development/top-5-free-rapid-application-development-software-in-2021/
 [17]: https://blog.containerize.com/rapid-application-development/rapid-application-development-software-for-business-rad/
 [18]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
