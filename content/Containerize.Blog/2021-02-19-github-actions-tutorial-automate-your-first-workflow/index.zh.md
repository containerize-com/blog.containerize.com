---
title: "github动作教程|自动化您的第一个工作流程" 
seoTitle: "github动作教程|自动化您的第一个工作流程" 
description: "遵循此GitHub操作教程，探讨我们如何使用GitHub操作来自动化和执行我们的软件开发工作流程。" 
date: Fri, 19 Feb 2021 10:21:38 +0000
author: Assad Mahmood
summary: "GitHub引入了GitHub动作，使您可以建立连续的集成＆amp;连续部署使用github存储库中的配置文件。" 
url: /zh/github-actions-tutorial-automate-your-first-workflow/
categories: ['Version Control Software']
---

## GitHub引入了GitHub操作，使您可以使用GitHub存储库中的配置文件来设置连续集成和连续部署。

{{< figure align=center src="images/github-actions-workflows.png" alt="GitHub Action教程">}}


## 概述
提高软件项目生产率的最佳方法之一是自动化任何手动或重复性。当您使用像 **github Action**（例如**github Actions** ）时，您可能会惊讶于自动化的容易自动化。自从最后几篇文章以来，我一直在写有关[git][1]，[版本控制][1]和[软件开发工作流程的自动化][2]和[连续集成和连续交付][3][3 ]。因此，希望到目前为止，您非常了解存储库以及如何使用它们。
在今天的 **github操作教程** 中，我们将探索GitHub操作，以及如何将其用于应用程序自动化，自定义，并在存储库中执行软件开发工作流程。所以，让我们开始
* **[评论CI/CD工作流][4]** 
* **[什么是github动作][5]** 
* **[了解YAML语法][6]** 
* **[创建您的第一个工作流程][7]** 
* **[结论][8]** 

## CI/CD工作流程 {#cicd}

CI/CD是一种在自动化的帮助下，在不同阶段将软件开发项目经常部署到最终用户的方法。 **连续集成和连续部署** 更多是一种理念，也是DevOps团队实施的最佳实践之一，以更频繁，可靠地交付代码更改。
**连续集成**是一组实践，可以鼓励开发团队经常检查代码以经常进行版本控制存储库。而且，对于每次推向存储库，您都可以创建一组脚本来自动构建和测试您的应用程序。这些脚本有助于减少您在应用程序中引入错误的机会。
**连续部署**是您的CI/CD工作流程中的一步。它不仅每次将代码更改都推向代码库时构建并测试您的应用程序，而且还将应用程序连续部署到服务器。

## 什么是github动作 {#github-actions}

在本github动作教程的部分中，我们将知道什么是 **github动作** 。但是，GitHub动作是对GitHub的因果关系的API。现在使用CI/CD自动化所有软件工作流程，它使其易于自动化。您可以根据任何事件（例如，推入分支，拉请请求等）设计任何工作流程，而GitHub管理执行。但是，您不需要自己写动作。 Github拥有一个内置的市场，人们可以找到其他人创造的行动，并在适合他们的需求时重复使用。 GitHub动作支持Node.js，Python，Java，Ruby，Php，Go，Rust，.net等。以您选择的语言构建，测试和部署应用程序。

## YAML语法 {#yaml}

首先，让我们熟悉 **github动作** 的语法和术语。
* **工作流程:** 由于GitHub操作提供了构建端到端**连续集成和连续部署的设施** 功能，因此该术语指的是何时流动通过CI工具开始执行。
* **作业** ：该术语是指单个工作流程中的所有任务。工作流包含多个工作，所有人都必须完成执行以防止失败。
* **步骤:**  要完成其执行，必须完成嵌入其中的所有步骤。
* **操作:**  动作是步骤的主要子集，也是工作流程的最小子集。每个步骤都由多个必须成功执行的操作。
如您所见，工作流程，作业，步骤和行动是相互依存的，并且成功地执行一切对于成功完成CI/CD管道是必要的。

## 创建一个工作流程 {#workflow}

在一个软件开发项目中，开发团队面临的问题之一是源代码和最佳实践执法的格式。对于较大的团队来说，这个问题更为明显。由于它们涉及更多的开发人员，并且每个人都有自己的写作代码风格。因此，在整个团队中，使用Linter软件包非常普遍。但是现在，使用 **github Action** ，您实际上可以每当有人将代码推到GitHub存储库时，实际上可以执行Linter。
在此GitHub操作教程中，您将添加一个工作流，该工作流使用[GitHub Super-Linter][9]操作来凸显多个编码语言。每当将新提交推到您的存储库时，工作流程使用超级限制来验证您的源代码。
从您在GitHub上的存储库中，在 **。github/workflows**名为**superlinter.yml** 的目录中创建一个新文件，然后将以下内容复制到其中
```
name: Super-Linter

# Run this workflow every time a new commit pushed to your repository
on: push

jobs:
  # Set the job key. The key is displayed as the job name
  # when a job name is not provided
  super-lint:
    # Name the Job
    name: Lint code base
    # Set the type of machine to run on
    runs-on: ubuntu-latest

    steps:
      # Checks out a copy of your repository on the ubuntu-latest machine
      - name: Checkout code
        uses: actions/checkout@v2

      # Runs the Super-Linter action
      - name: Run Super-Linter
        uses: github/super-linter@v3
        env:
          DEFAULT_BRANCH: main
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
要运行工作流程，请提交并将更改推向GitHub存储库。此推动事件将触发超级插图工作流程。而且，现在您可以通过进入“动作”选项卡来查看工作流的结果

{{< figure align=center src="images/actions-tab.png" alt="GitHub Action教程">}}

在左侧边栏中，单击要查看的工作流程。

{{< figure align=center src="images/superlinter-workflow-sidebar-1024x211.png" alt="github操作工作流程">}}

您刚刚添加的每次代码都将代码推到存储库中，以帮助您在代码中找到问题。您的存储库可以具有多个工作流，这些工作流根据不同的事件触发不同的作业。 GitHub操作可以帮助您自动化应用程序开发过程的几乎每个方面。这只是GitHub动作的基本介绍。有很多[Resources][10]可用于对GitHub动作的深入了解，您可以使用。

## 结论 {#conclusion}

在此 **github动作教程**中，我们了解了 **连续集成和连续部署** 和 **什么是github动作** 。而且，我们还探索了如何使用 **github操作** 构建CI/CD工作流程。我们使用了GitHub Action Marketplace中简单的超级脱机工作流程，以找出代码库中的任何不一致之处。在即将发表的文章中，我们将更深入地探索GitHub动作。此外，您可以找到与以下“探索”部分中提到的**版本控制系统** 有关的其他博客文章。
最后，[Containerize.com][11]正在不断撰写有关进一步开源产品和主题的博客文章。因此，请与常规更新的[版本控制软件][12]类别保持联系。此外，您可以在我们的社交媒体帐户上关注我们[Facebook][13]，[LinkedIn][14]和[Twitter][15]。

## 探索
您可能会发现以下链接相关：
  * [GitLab连续部署|它是如何工作的？][16]
  * [了解并学习分支机构，并在git中提取请求][2]
  * [源代码管理软件|什么是git？][17]
  * [2021年的前5个开源版本控制系统][18]



[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[3]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[4]: #cicd
[5]: #github-actions
[6]: #yaml
[7]: #workflow
[8]: #conclusion
[9]: https://github.com/github/super-linter
[10]: https://docs.github.com/en/actions/learn-github-actions
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/version-control/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[17]: https://blog.containerize.com/version-control-software/source-code-management-software-what-is-git/
[18]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
