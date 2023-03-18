---
title: "GitLab连续部署|怎么运行的？" 
seoTitle: "GitLab连续部署|怎么运行的？" 
description: "在本教程中，我们将与GitLab建立连续的部署管道。 GitLab连续部署有助于DevOps执行自动部署。" 
date: Fri, 12 Feb 2021 12:51:28 +0000
author: Assad Mahmood
summary: "自动部署简化您的工作流程＆amp;过程。该GitLab教程可帮助您学习使用GitLab CI/CD设置连续部署管道。" 
url: /zh/gitlab-continuous-deployment-how-it-works/
categories: ['Version Control Software']
---

## 自动部署简化了您的工作流程和流程。该GitLab教程可帮助您学习使用GitLab CI/CD设置连续部署管道。

{{< figure align=center src="images/Continuous-Deployment-Pipeline.png" alt="GitLab连续部署">}}


## 概述
在最后几篇文章中，我们了解了[版本控制的基础知识] [1]，然后通过了解不同的[分支模型] [2]和工作流来增强我们的知识。版本控制系统在开发，部署和集成领域带来了效率。开发人员发现在不担心构建和测试的情况下提交源代码非常容易。随着这种方法启动部署，软件行业已经获得了信心和竞争优势。
** gitlab连续部署**和集成有助于轻松查找问题。此外，开发人员可以在较短的时间内跟踪错误和其他错过处理。整个自动化过程赋予了经常发生的任务，并减少了错误的机会和机会。今天，在这篇博客文章中，我们将使用gitlab ci/cd进行有关连续部署管道的探讨。因此，让我们开始介绍以下几点！
  *** [什么是CI＆CD] [3] **
  *** [什么是Gitlab Runner] [4] **
  *** [。gitlab-ci.yml文件] [5] **
  *** [创建基本示例应用] [6] **
  *** [结论] [7] **

## 什么是ci＆cd {#cicd}
连续集成（CI）是DevOps的最佳实践之一，可以将代码更改的集成从多个贡献者变更为单个软件项目。这使开发人员经常将代码更改合并到中央存储库中，然后运行构建和测试。连续部署（CD）通过在每个代码提交和构建后自动将代码移动到目标环境（生产或分阶段），从而进一步移动一步。
在开始之前，请确保在GitLab中有一个项目，您想使用CI/CD。而且，您应该具有维护者或所有者级别的访问权限。

## 什么是gitlab runner {#runner}
在理解** gitlab连续部署**之后，Gitlab Runner是一个用GO编写的小型轻量级程序，在您的本地机器上运行连续集成（CI）相关的作业，并将结果发送给Gitlab以考虑更改。它是可以安装在任何主要操作系统上的单个可执行二进制文件。
在我们继续使用GitLab CI / CD之前，您需要确保拥有可以运行任务的跑步者。您可以遵循[install] [8]的官方指南和[register] [9] Gitlab Runner。

## .gitlab-ci.yml文件{#yml}
**。gitlab-ci.yml **是一个文件，您可以在其中为gitlab ci/cd配置特定说明。它放在存储库的根部，并包含有关如何构建项目的定义。每当我们将提交推向GitLab实例时，GitLab都会调用跑步者来按照本文件中的指示来构建和测试该项目。

## 创建一个示例应用{#sample}
在此** gitlab教程**的部分中，我们将创建一个示例应用程序。假设您已经创建了一个GitLab存储库，让我们创建一个示例应用程序，我们将为应用程序设置CI / CD流程。
首先，创建package.json文件。
```
{
  "name": "sample_web_app",
  "version": "1.0.0",
  "description": "Sample Application",
  "author": "Assad",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.16.1"
  }
}
```
现在在项目的根源上创建一个app.js
```
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(8080, 'localhost');
console.log('Running on http://localhost:8080');
```
在** gitlab连续部署的最后一步中，**创建一个** dockerfile **，并在其中添加以下内容：
```
FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "app"]
```
Dockerfile包含此应用程序的构建过程。它涉及创建节点容器并安装依赖项。
现在，我们需要创建一个**。gitlab-ci.yml **文件。该文件将包含构建我们项目的说明。每次我们将订单推向GitLab存储库时，Gitlab都会援引跑步者来构建项目。
```
image: node:latest
stages:
- build

install_dependencies:
stage: build
script:
- npm install
```
我们只有一个阶段的构建，它只是** npm安装**作为脚本。这是您每次更改项目都必须手动运行的命令。而且，这就是GitLab Runner进来的地方，每次您进行提交时都会自动为您做到这一点。
现在，假设您已经安装了GitLab Runner并已将其注册给您的GitLab实例，则可以通过对应用程序进行简单提交并将其推向GitLab来测试Gitlab CI / CD。
然后，您可以在GitLab中打开项目，转到My-Project→Pipeline，您会看到一个标签，上面写着您所做的提交的“通过”。随后的提交也将具有标签。

## 结论{#conclusion}
这将我们带到了这个** gitlab教程的结尾**。在本文中，我们了解了Gitlab连续集成的基础知识，**什么是CI＆CD **，**什么是Gitlab Runner **，并且连续部署。此外，我们研究了整个CI / CD工作流程中跑步者的用途。我们还创建了一个示例项目，该项目解释了如何使用gitlab设置连续部署。如果您正在寻找** gitlab连续部署**，则本gitlab教程确实会为您提供帮助。但是，下面的“探索”部分中提到了许多其他资源，您可能会查看。此外，这些文章是关于**版本控制系统**的，它们是开源的，自托管的，可扩展的。
最后，[Containerize.com] [10]不断地撰写有关进一步开源产品和主题的博客文章。因此，请与[[11] [11] [版本控制软件] [12]类别保持联系，以进行常规更新。此外，您可以在我们的社交媒体帐户上关注我们[Facebook] [13]，[LinkedIn] [14]和[Twitter] [15]。

## 探索
您可能会发现以下链接相关：
  * [使用GitHub操作自动化软件开发工作流程] [16]
  * [了解并学习分支机构，并在git中提取请求] [2]
  * [源代码管理软件|什么是git？] [17]
  * [2021年的前5个开源版本控制系统] [18]
  * [使用免费和开源软件自动化业务运营] [19]
[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[3]: #cicd
[4]: #runner
[5]: #yml
[6]: #status
[7]: #conclusion
[8]: https://docs.gitlab.com/runner/install/
[9]: https://docs.gitlab.com/runner/register/
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/discussion-forum/
[12]: https://products.containerize.com/version-control/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://blog.containerize.com/version-control-software/github-actions-tutorial-automate-your-first-workflow/
[17]: https://blog.containerize.com/version-control-software/source-code-management-software-what-is-git/
[18]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
[19]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
