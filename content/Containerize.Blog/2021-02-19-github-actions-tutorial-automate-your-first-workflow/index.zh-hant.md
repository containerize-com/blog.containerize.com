---
title: "github動作教程|自動化您的第一個工作流程" 
seoTitle: "github動作教程|自動化您的第一個工作流程" 
description: "遵循此GitHub操作教程，探討我們如何使用GitHub操作來自動化和執行我們的軟件開發工作流程。" 
date: Fri, 19 Feb 2021 10:21:38 +0000
author: Assad Mahmood
summary: "GitHub引入了GitHub動作，使您可以建立連續的集成＆amp;連續部署使用github存儲庫中的配置文件。" 
url: /zh-hant/github-actions-tutorial-automate-your-first-workflow/
categories: ['Version Control Software']
---

## GitHub引入了GitHub操作，使您可以使用GitHub存儲庫中的配置文件來設置連續集成和連續部署。

{{< figure align=center src="images/github-actions-workflows.png" alt="GitHub Action教程">}}


## 概述
提高軟件項目生產率的最佳方法之一是自動化任何手動或重複性。當您使用像 **github Action ** （例如 **github Actions ** ）時，您可能會驚訝於自動化的容易自動化。自從最後幾篇文章以來，我一直在寫有關[git][1]，[版本控制][1]和[軟件開發工作流程][2]和[連續集成和連續交付][3][3 ]。因此，希望到目前為止，您非常了解存儲庫以及如何使用它們。
在今天的 **github操作教程** 中，我們將探索GitHub操作，以及如何將其用於應用程序自動化，自定義，並在存儲庫中執行軟件開發工作流程。所以，讓我們開始
  * **[評論CI/CD工作流][4]**
  * **[什麼是github動作][5]**
  * **[了解YAML語法][6]**
  * **[創建您的第一個工作流程][7]**
  * **[結論][8]**

## CI/CD Workflows   {#CICD}
CI/CD是一種在自動化的幫助下，在不同階段將軟件開發項目經常部署到最終用戶的方法。 **連續集成和連續部署**更多是一種理念，也是DevOps團隊實施的最佳實踐之一，以更頻繁，可靠地交付代碼更改。
**連續集成**是一組實踐，可以鼓勵開發團隊經常檢查代碼以經常進行版本控制存儲庫。而且，對於每次推向存儲庫，您都可以創建一組腳本來自動構建和測試您的應用程序。這些腳本有助於減少您在應用程序中引入錯誤的機會。
**連續部署**是您的CI/CD工作流程中的一步。它不僅每次將代碼更改都推向代碼庫時構建並測試您的應用程序，而且還將應用程序連續部署到服務器。

## 什麼是github操作 {#github-actions}
在本github動作教程的部分中，我們將知道什麼是 **github動作** 。但是，GitHub動作是對GitHub的因果關係的API。現在使用CI/CD自動化所有軟件工作流程，它使其易於自動化。您可以根據任何事件（例如，推入分支，拉請請求等）設計任何工作流程，而GitHub管理執行。但是，您不需要自己寫動作。 Github擁有一個內置的市場，人們可以找到其他人創造的行動，並在適合他們的需求時重複使用。 GitHub動作支持Node.js，Python，Java，Ruby，Php，Go，Rust，.net等。以您選擇的語言構建，測試和部署應用程序。

## yaml語法 {#yaml}
首先，讓我們熟悉 **github動作** 的語法和術語。
  ***工作流程：**由於GitHub操作提供了構建端到端**連續集成和連續部署的設施**功能，因此該術語指的是何時流動通過CI工具開始執行。
  ***作業**：該術語是指單個工作流程中的所有任務。工作流包含多個工作，所有人都必須完成執行以防止失敗。
  ***步驟：**要完成其執行，必須完成嵌入其中的所有步驟。
  ***操作：**動作是步驟的主要子集，也是工作流程的最小子集。每個步驟都由多個必須成功執行的操作。
如您所見，工作流程，作業，步驟和行動是相互依存的，並且成功地執行一切對於成功完成CI/CD管道是必要的。

## 創建一個工作流 {#workFlow}
在一個軟件開發項目中，開發團隊面臨的問題之一是源代碼和最佳實踐執法的格式。對於較大的團隊來說，這個問題更為明顯。由於它們涉及更多的開發人員，並且每個人都有自己的寫作代碼風格。因此，在整個團隊中，使用Linter軟件包非常普遍。但是現在，使用 **github Action ** ，您實際上可以每當有人將代碼推到GitHub存儲庫時，實際上可以執行Linter。
在此GitHub操作教程中，您將添加一個工作流，該工作流使用[GitHub Super-Linter][9]操作來凸顯多個編碼語言。每當將新提交推到您的存儲庫時，工作流程使用超級限制來驗證您的源代碼。
從您在GitHub上的存儲庫中，在**。github/workflows **名為 **superlinter.yml ** 的目錄中創建一個新文件，然後將以下內容複製到其中
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
要運行工作流程，請提交並將更改推向GitHub存儲庫。此推動事件將觸發超級插圖工作流程。而且，現在您可以通過進入“動作”選項卡來查看工作流的結果

{{< figure align=center src="images/actions-tab.png" alt="GitHub Action教程">}}

在左側邊欄中，單擊要查看的工作流程。

{{< figure align=center src="images/superlinter-workflow-sidebar-1024x211.png" alt="github操作工作流程">}}

您剛剛添加的每次代碼都將代碼推到存儲庫中，以幫助您在代碼中找到問題。您的存儲庫可以具有多個工作流，這些工作流根據不同的事件觸發不同的作業。 GitHub操作可以幫助您自動化應用程序開發過程的幾乎每個方面。這只是GitHub動作的基本介紹。有很多[Resources][10]可用於對GitHub動作的深入了解，您可以使用。

## 結論 {#conclusion}
在此 **github動作教程** 中，我們了解了**連續集成和連續部署**和**什麼是github動作**。而且，我們還探索瞭如何使用 **github操作** 構建CI/CD工作流程。我們使用了GitHub Action Marketplace中簡單的超級脫機工作流程，以找出代碼庫中的任何不一致之處。在即將發表的文章中，我們將更深入地探索GitHub動作。此外，您可以找到與以下“探索”部分中提到的**版本控制系統**有關的其他博客文章。
最後，[Containerize.com][11]正在不斷撰寫有關進一步開源產品和主題的博客文章。因此，請與常規更新的[版本控制軟件][12]類別保持聯繫。此外，您可以在我們的社交媒體帳戶上關注我們[Facebook][13]，[LinkedIn][14]和[Twitter][15]。

## 探索
您可能會發現以下鏈接相關：
  * [GitLab連續部署|它是如何工作的？][16]
  * [了解並學習分支機構，並在git中提取請求][2]
  * [源代碼管理軟件|什麼是git？][17]
  * [2021年的前5個開源版本控制系統][18]

  
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
