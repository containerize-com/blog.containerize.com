---
title: "来自源控制服务器的连续集成和连续部署" 
seoTitle: "来自源控制服务器的连续集成和连续部署" 
description: "免费部署工具可帮助开发团队自动化软件交付工作流程。快速构建，测试，使用Jenkins和Github存储库部署软件。" 
date: Mon, 22 Feb 2021 06:11:17 +0000
author: Masood Anwer
summary: "使用免费部署工具自动化开发工作流程。我们将学习如何使用Jenkins Automation Server和GitHub进行软件部署设置CI/CD。" 
url: /zh/automate-software-deployment-process-with-jenkins-and-github/
categories: ['Deployment Tools']
---

## 使用免费部署工具自动开发工作流程。我们将学习如何使用Jenkins Automation Server和GitHub进行软件部署设置CI/CD。

{{< figure align=center src="images/ci-cd-post.png" alt="连续集成和连续部署">}}

开发团队使用不同的方法进行软件部署，例如FTP，从存储库中提取代码等等。所有这些方法都是手动执行的，需要大量精力。我们可以看到，更多的团队遵循敏捷方法进行软件开发。因此，他们会发布新功能并经常修复错误。因此，自动化软件交付工作流程可帮助团队快速启动新版本，而无需错误。我们将学习如何与Jenkins **一起使用** CI/CD和GitHub来自动化软件交付过程。我们将介绍本文中的以下各节。
  *[**什么是詹金斯？**][1]
  *[**连续集成**][2]
  *[**连续部署**][3]
  *[**配置Jenkins **][4]
  *[**创建Jenkins Job **][5]

## 什么是詹金斯？ {#Jenkins}
** Jenkins **是一种功能强大的**免费部署工具**用于自动化软件交付过程。它是用于构建，测试和部署的开源自动化服务器。詹金斯使用主奴隶体系结构。这使软件团队可以同时运行多个构建和测试。此外，还有很多可用的插件，团队可以根据需要使用它们。您可以访问[** Jenkins Page **][6]以获取更多信息和安装。此外，您可以在jenkins [** github **][7]存储库中找到源代码。

## 连续集成{#ci}
**连续集成**是一种开发实践，要求开发人员经常将代码集成到共享的存储库中。可以通过自动构建和测试来验证代码的每个集成/推动代码。它还允许开发人员轻松识别代码中的问题。

## 连续部署{#cd}
**连续部署**是连续集成后的下一步。它将允许团队在服务器上连续部署代码。此外，它可以帮助开发人员减少重复任务并提高敏捷性。

## 配置jenkins {#configure}
遵循詹金斯（Jenkins）配置的逐步指南。
  *打开您的Jenkins网站并登录。
  *安装“在SSH上发布”插件。您可以通过导航到“管理Jenkins→管理插件→可用”来搜索它。
  *如下所示，将构建服务器上的SSH密钥生成用户“ jenkins”。
```
$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/var/lib/jenkins/.ssh/id_rsa):
Created directory '/var/lib/jenkins/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /var/lib/jenkins/.ssh/id_rsa.
Your public key has been saved in /var/lib/jenkins/.ssh/id_rsa.pub.
The key fingerprint is:
```
  *使用SSH连接到目标/部署服务器。在下面运行命令，然后将酒吧文件内容粘贴到目标服务器上。
```
$ cd .ssh
$ nano authorized_keys
```
  *导航到管理“ Jenkins→配置系统→通过SSH发布”。
  *通过找到文件路径或粘贴与部署服务器相同的内容来添加SSH键。
  *通过单击“ SSH服务器”旁边的“添加”按钮来添加SSH服务器。
  *为部署/目标服务器输入名称，主机名，用户名和远程目录。
  *单击“测试配置”按钮，以确保Jenkins可以连接到部署服务器。
  *最后，单击“保存”按钮存储信息。

## 创建Jenkins Job {#Create}
您可以使用这些步骤来创建Jenkins作业。
  *打开Jenkins仪表板，然后单击“新项目”按钮。
  *输入项目名称，然后选择“自由式工作”。
  *在“配置窗口”下输入GitHub存储库URL。
  *在“构建环境”部分中，请检查以下选项“在构建启动之前删除工作区”，然后在构建运行后通过SSH发送文件或执行命令”。
  *在构建环境下输入名称，源文件和远程目录。
  *保存工作并建立它。
  *连接到部署服务器，并确保该代码在那里。

## 结论
在本文中，我们已经讨论了** Jenkins Server **，**连续集成**和**连续部署**。我们还学习了如何配置**免费部署工具**并创建了使用GitHub部署的Jenkins作业。免费的CI/CD工具允许开发团队自动化软件交付工作流程并将关注重点放在重要的工作上。我们将在即将到来的帖子中介绍其他部署工具。
最后，[** containerize.com **][8]将发布有关进一步开源部署工具的文章。因此，请与[**部署工具**][9]类别保持联系，以进行常规更新。

## 探索
您可能会发现以下链接相关：
  *** [Jenkins][6] **
  *[**无人机**][10]
  *[** Deployer **][11]
  *[** Capistrano **][12]
  *[**牧场主**][13]
  *[**大厅**][14]
  *[** Ansible **][15]
  *[** gocd **][16]
  *[** 2021年前5个开源部署工具**][17]
  *[**与Deployer Automate PHP应用程序部署**][18]

  
[1]: #Jenkins
[2]: #CI
[3]: #CD
[4]: #Configure
[5]: #Create
[6]: https://products.containerize.com/deployment-tools/jenkins
[7]: https://github.com/jenkinsci/jenkins
[8]: https://containerize.com
[9]: https://blog.containerize.com/category/deployment-tools/
[10]: https://products.containerize.com/deployment-tools/drone/
[11]: https://products.containerize.com/deployment-tools/deployer/
[12]: https://products.containerize.com/deployment-tools/capistrano/
[13]: https://products.containerize.com/deployment-tools/rancher/
[14]: https://products.containerize.com/deployment-tools/concourse/
[15]: https://products.containerize.com/deployment-tools/ansible/
[16]: https://products.containerize.com/deployment-tools/gocd/
[17]: https://blog.containerize.com/deployment-tools/top-5-open-source-deployment-tools-in-the-year-2021/
[18]: https://blog.containerize.com/deployment-tools/automate-php-application-deployment-with-deployer/
