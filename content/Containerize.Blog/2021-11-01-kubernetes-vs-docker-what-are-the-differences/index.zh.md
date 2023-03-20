---
title: "Kubernetes vs Docker |有什么区别？" 
seoTitle: "Kubernetes vs Docker |有什么区别？" 
description: "Kubernetes是一种容器编排技术，而Docker是一种用于创建和运行容器的技术。让我们回顾一下Kubernetes vs Docker。" 
date: Mon, 01 Nov 2021 01:16:43 +0000
author: yasir saeed
summary: "Kubernetes是一种容器编排技术，而Docker使开发人员可以创建和运行容器。让我们回顾一下两个集装箱技术。" 
url: /zh/kubernetes-vs-docker-what-are-the-differences/
categories: ['DevOps', 'Software Development']
---

## Kubernetes是一种容器编排技术，而Docker使开发人员可以创建和运行容器。让我们回顾一下两个集装箱技术。

{{< figure align=center src="images/KubernetesVsDocker.png" alt="Kubernetes vs Docker">}}


## **概述**
在容器技术方面，Kubernetes和Docker的两个名称出现为开源负责人。许多人想知道云计算行业中哪种容器技术选项更好。 ** kubernetes vs docker ** **教程**辩论在容器化​​世界中很常见。尽管大多数人喜欢比较Kubernetes和Docker来更有效地管理集装箱应用程序。这两种强大的容器化技术无法交换，您不能选择一种。 ** Docker vs Kubernetes **本质上是离散的容器技术，可以在自动化，创建，交付，管理，管理和缩放容器化应用程序时可以完全相互补充。实际上，最好的比较主题是** kubernetes vs docker swarm **。
本文解释了Docker和Kubernetes Technologies之间的基本差异，并阐明了Docker和Kubernetes的差异，因此您可以对快速扩展的容器平台进行浏览。让我们熟悉很棒，最受欢迎的开源Kubernetes vs Docker Container Technologies。为此，从将它们联系在一起的基础技术开始很重要：容器。
  *什么是容器？
  *什么是Docker？
  *什么是Kubernetes？
  * Docker vs。 Kubernetes：您应该采用哪个？
  * 结论

## 1. **什么是容器？**
容器是一个标准的软件单元，该软件包含其依赖项的应用程序代码，使其能够在任何IT基础架构上运行。一个容器站立，可以使其在**操作系统虚拟化**之类的IT环境中移植。了解容器日益普及的一种最佳方法是将其与虚拟机（VM）进行比较。 **容器和虚拟机**都基于虚拟化技术。一个容器虚拟化操作系统和VM利用VM和计算机硬件之间的轻量级软件层，以虚拟化物理硬件。
一个容器由应用程序和所有库的整个运行时环境组成。虽然VM由主机操作系统的完整副本组成，但运行操作系统所需的硬件的虚拟副本以及应用程序及其相关的库和依赖项。没有来宾操作系统会减小容器的大小，使其轻巧，快速和便携。容器可帮助您解决可移植性问题，使您可以将代码与基础基础架构分开以提高安全性。开发人员可以将他们的应用程序（包括所有依赖项和库）包装成一个小的**容器图像**在**生产容器化平台上**。
** devops **使用容器快速开发跨平台和分布式环境始终运行的应用程序。更便携式和资源效率的容器解决了功能团队之间工具和软件差异的许多冲突。这些**轻巧的容器**非常适合通过松散耦合和较小的服务组成的微服务体系结构。

## 2. **什么是Docker？**
[Docker][1]是最受欢迎的容器平台，它可以易于开发，部署和运行应用程序作为独立的便携式容器。 **容器化**是一种创新的操作系统虚拟化形式，它允许您将代码和依赖项作为自给自足的单位打包。它确保应用程序在不同的隔离环境中持续运行。在发布Docker之前可以使用几种容器化技术。近年来，Docker已成为事实上的容器化平台。它简化了容器应用程序的运行，并且近年来已成为容器化平台Defacto。
** Docker，Inc。于2013年3月20日发布了Docker **，并分发为专有软件企业版，又是开源软件社区版。 Docker开源软件社区版在正确的时间出现在市场上，这可能导致了当前的市场统治。目前有30％的企业将Docker用于其AWS生产环境。
当大多数人谈论Docker时，他们实际上会谈论** Docker Engine **，这是您可以构建，管理和容器化应用程序的运行时。但是在运行Docker容器之前，必须使用Docker文件构建它们。 Docker文件定义并包含运行图像所需的所有命令，包括OS网络规格和文件位置。现在您有了一个** Docker文件**，您可以构建一个Docker映像，该图像是便携式，静态组件，其中包含一组指令，用于创建在Docker Engine上运行的容器。 Docker还拥有一项名为** Docker Hub **的服务，您可以在其中与团队，客户或Docker社区一起存储和共享容器图像。 ** Docker Compose **用于在YAML文件中定义和运行多容器应用程序。
当在几个服务器环境中部署几个容器时，就会出现许多问题。在容器化应用程序中缩放许多容器实例，交互，坐标和时间表变得非常困难。这就是Kubernetes来解决大多数复杂性的地方。打开源容器化平台** Docker源代码存储库**可通过[GitHub][2]获得。

## 3. **什么是kubernetes？**
[kubernetes][3]也称为** k8s **，是**编排容器**的开源平台，并于2014年在Google启动。这是一个全面的系统，可自动使用部署，扩展，日程安排和管理集装箱应用程序。它支持许多容器化工具，例如Docker。 Kubernetes现在捐赠给云本机计算基础（** cncf **）。它已成为策划容器和部署分布式应用程序的市场领导者。
在部署，缩放和管理**多个服务器的应用程序**时，Kubernetes可以处理一些操作困难。它在一个物理或虚拟机群体上分发和时间表的容器化应用程序，而不是在单个主机上运行它们。这样，在Kubernetes中运行的应用程序像单个实体一样起作用，尽管它们实际上可能包含各种松散耦合的容器。 **聚类**是一个至关重要的容器化概念，使管理员能够建立一个具有冗余的凝聚力和合作的系统组。
Kubernetes可以在具有基于Docker的应用程序的客户的公共云服务上运行，并且具有充满活力的社区。许多公司正在投资它，许多云提供商都提供Kubernetes作为服务。您可以根据可用资源自动缩放容器应用程序，在Kubernetes的帮助下执行水平缩放和负载平衡。打开源容器编排工具** kubernetes源代码存储库**可通过[github][4]获得。

## 4. Docker vs。 Kubernetes：您应该采用哪个？
容器很棒。即使** docker和k8s kubernetes **是独特的技术，但它们实际上相互补充并可以共同努力。在设置Kubernetes时，Docker的安装很容易快速，而且很耗时。 Docker已针对一个**单个大集群**进行了优化，Kubernetes可以与**多个较小的群集**一起使用。 Docker是容器化技术的核心，它允许您构建，共享，运行和部署应用程序容器。如果您的应用程序很小且简单，Docker容器具有管理其生命周期的基础架构。
**何时使用kubernetes vs docker？**。如果您的容器化应用程序变得更大，更复杂，可能需要多个较小的群集，并且更复杂的管理，那么Kubernetes就会成为一种方便的工具。 Kubernetes为您的Docker容器提供了一个**编排平台**。它不仅创建容器，而且需要一个容器工具才能运行，其中哪个Docker容器是最受欢迎的选项。与Docker一起使用Kubernetes可以增强基础设施的鲁棒性。您的应用程序高度可用，还可以提高应用程序的可扩展性。

## **结论：** {#4a1a}
**那么，Kubernetes或Docker的最佳选择是什么？答案是显而易见的：两者。上述Kubernetes和Docker是开发人员最受欢迎的免费和最佳开源软件。他们允许以全新的数字方式考虑基础架构最需要的服务和系统。最重要的是，Kubernetes和Docker都提供了一个完善的平台**，以更有效地自动化容器管理，扩展，破坏和部署系统容器。为以容器为中心的平台设计较新的软件**，不仅可以使您的应用程序更具扩展性，而且还可以使您的应用程序更具范围。
_什么开源容器Technolog_y您更喜欢_？您对kubernetes和docker_之间的_差异有任何疑问？

## 探索：
我们还有其他几篇相关文章来处理IT管理员的日常任务管理：
  *** [DevOps 2021的前5个开源容器编排工具][6] **
  *** [最佳开源云存储和文件共享软件][7] **
  *** [2021年的前5个开源消息队列（MQ）软件][8] **
  *** [最受欢迎的开源数字法医工具][9] **
  *** [最受欢迎的OSI批准的开源许可][10] **

  
[1]: https://www.docker.com/
[2]: https://github.com/docker
[3]: https://kubernetes.io/
[4]: https://github.com/kubernetes/kubernetes
[5]: mailto:yasir.saeed@aspose.com
[6]: https://blog.containerize.com/devops/top-5-open-source-container-orchestration-tools-for-devops-in-2021/
[7]: https://products.containerize.com/backup-and-sync/
[8]: https://blog.containerize.com/message-queue-software/top-5-open-source-message-queue-software-in-2021/
[9]: https://blog.containerize.com/digital-forensic-tools/top-5-open-source-digital-forensic-tools-in-2021/
[10]: https://blog.containerize.com/licenses-standards/top-5-most-popular-osi-approved-open-source-licenses-of-2021/
