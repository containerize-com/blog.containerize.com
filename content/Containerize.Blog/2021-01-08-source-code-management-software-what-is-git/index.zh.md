---
title: "源代码管理软件|什么是git？" 
seoTitle: "源代码管理软件|什么是git？" 
description: "什么是git？ Git是一种免费的源代码管理软件，可让您记录，查看对源文件的更改并有效地管理项目。" 
date: Fri, 08 Jan 2021 14:11:16 +0000
author: Assad Mahmood
summary: "在本文中，我们将探讨什么是Git＆amp; git如何工作？ Git是一种版本控制系统，旨在管理源代码，Track＆amp;日志版本。" 
url: /zh/source-code-management-software-what-is-git/
categories: ['Version Control Software']
---

## 在本文中，我们将探讨什么是git以及git的工作方式？ Git是一种版本控制系统，旨在管理源代码，跟踪和日志版本。

{{< figure align=center src="images/version-control-banner.png" alt="源代码管理软件">}}


## 概述
想象一下，您是从事项目的软件开发人员。您有一个以上的人在研究它。而且，有一个包含源代码的文件。由于它们都对代码进行更改，因此每次更改文件时，它们都会具有不同的版本。那么，现在我们将如何管理同一文件的不同版本？这就是源代码管理软件启动的地方。它可以帮助您管理和合并同一文件的不同版本。甚至让您追踪变化历史记录。而且，您始终可以确定是谁对文件进行更改以及这些更改是什么。
在本文中，我们将了解GIT版本控制系统。如何使用它来管理软件开发源代码文件或任何其他文件。因此，让我们开始。
  *** [什么是版本控制系统] [1] **
  *** [什么是git] [2] **
  *** [GIT如何工作] [3] **
  *** [安装git] [4] **
  *** [设置存储库] [5] **
  *** [将更改保存到存储库] [6] **
  *** [检查存储库的状态] [7] **
  *** [恢复或撤消更改] [8] **
  *** [结论] [9] **

## 什么是版本控制系统{#版本控制}
版本控制是一个系统，随着时间的推移，记录更改为文件或文件集的系统，以便您以后可以召回特定版本。如果您是软件开发人员，并且想保留源代码文件的版本，则源代码管理软件对您来说非常有用。它使您可以将选定的文件恢复到以前的状态，将整个项目恢复到先前的状态，比较随着时间的变化，查看谁最后修改了可能引起问题的东西，谁引入了问题，何时何时以及更多。使用版本控制意味着您不必担心失去工作。

## 什么是git {#git}
GIT是一个免费的开源版本控制系统，旨在以速度和效率处理从小到非常大的项目。与较旧的集中版本控制系统（例如SVN和CVS）不同，GIT版本控制是分布式的。每个开发人员在本地都有其代码存储库的完整历史记录。但是，它使初始克隆有些慢。但是，此后，所有提交和其他操作都非常快。 git允许您拥有可以完全独立的多个本地分支。

## git如何工作{#wow}
使用git，您可以更改本地存储库，然后将其推到托管工具。或者，您可以将其他人从托管工具进行更改为本地机器。这是源代码管理软件（GIT）的工作方式的基本概述。
  1.使用git创建一个“存储库”，任何托管工具（例如github，gitlab或bitbucket）
  2.克隆存储库到您本地的机器
  3.将文件添加到您的本地存储库
  4.保存（提交）更改您本地存储库
  5.将您的更改“推”到遥控托管上的主分支
  6.使用git托管工具对文件进行更改并提交
  7.“拉”当地机器的更改
  8.创建一个“分支”（版本），进行更改，提交更改
  9.打开“拉请请求”（提出更改主分支）
 10.“合并”您的分支机构

## 安装git {#install}
有不同的方法可以在计算机上安装GIT。您可以将其作为软件包或其他安装程序安装，或下载源代码并自行编译。

### 在Linux上安装
如果您想通过二进制安装程序在Linux上安装基本的Git工具，通常可以通过您的分发带随附的软件包管理工具来完成。对于Fedora（或任何与RPM密切相关的分布，例如RHEL或CENTOS），您可以使用“ DNF”
```
$ sudo dnf install git-all
```
如果您正在使用基于Debian的发行版，例如Ubuntu，请尝试“ APT”
```
$ sudo apt install git-all
```

### 在MacOS上安装
有几种方法可以在Mac上安装GIT。最简单的可能是安装Xcode命令行工具。在Mavericks（10.9）或更高版本上，您只需第一次尝试从终端运行** git **即可完成此操作。
```
$ git --version
```
如果您还没有安装它，它将提示您安装它。

## 设置存储库{#init}
git存储库是代码文件的虚拟存储。它允许您存储代码的不同版本，您可以在需要时访问。
要创建一个新的存储库，您将使用** git Init **命令。 Git Init是您在新仓库初始设置中使用的一次性命令。执行此命令将在您当前的工作目录中创建一个新的.git子目录。这还将创建一个新的** Master **分支。

{{< figure align=center src="images/git-init-2.gif" alt="什么是git">}}


## 将更改保存到存储库{#commit}
现在您已经有了一个存储库初始化的，您可以提交文件版本更改。

{{< figure align=center src="images/git-add-commit-1.gif" alt="git提交">}}


## 检查存储库的状态{#status}
** git状态**命令显示工作目录和登台区域的状态。它使您可以查看哪些更改已经上演，尚未进行，以及源代码管理软件（GIT）未跟踪哪些文件。状态输出不会向您显示有关项目历史记录的任何信息。为此，您需要使用** git log **。

{{< figure align=center src="images/git-status-2.gif" alt="源代码管理软件">}}

git日志将向您显示以下输出
```
$ git log
commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500
```

## 还原您的更改{#revert}
您可以使用git恢复命令来撤消您在存储库中已经实施的更改。首先，使用“ git log”命令获取提交列表
```
$ git log
commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500

```
然后，确定要恢复哪个提交。并且，使用如下
```
$ git revert ce1c0a5fccd9e48631d85286cbf40feaae641d7e
[master df0fc7a] Revert "Second Commit"
 1 file changed, 1 deletion(-)

$ git log
commit df0fc7ae1ff722fb2ea50ba77fc3bd830195d668 (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:35:47 2021 +0500

    Revert "Second Commit"
    
    This reverts commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e.

commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500

    First Commit
```
如您所见，Git还原创建了一个新的提交，该提交撤消了“第二次提交”中所做的更改。

## 结论
现在，您已经阅读了整篇文章，我们讨论了什么是git以及git的工作原理，您应该知道源代码管理软件。它的目的是什么？为什么需要它。我们探索了GIT如何帮助您管理项目的源代码。而且，我们还了解了如何使用不同的git命令来初始化和存储库，保存更改以及如何消除更改。在即将到来的教程中，我们将更多地探索GIT，并分享如何使用不同的命令来更好地管理您的代码。

## 探索
您可能会发现以下链接相关：
  *[**使用github操作自动化软件开发工作流**] [10]
  *** [如何使用gitlab ci/cd设置连续部署管道[11] **
  *** [了解并学习分支机构并在git中提取请求] [12] **
  *** [2021年的前5个开源版本控制系统] [13] **
[1]: #version-control
[2]: #git
[3]: #how
[4]: #install
[5]: #init
[6]: #commit
[7]: #status
[8]: #revert
[9]: #conclusion
[10]: https://blog.containerize.com/version-control-software/github-actions-tutorial-automate-your-first-workflow/
[11]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[12]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[13]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
