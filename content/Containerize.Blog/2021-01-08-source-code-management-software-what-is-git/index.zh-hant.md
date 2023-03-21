---
title: "源代碼管理軟件|什麼是git？" 
seoTitle: "源代碼管理軟件|什麼是git？" 
description: "什麼是git？ Git是一種免費的源代碼管理軟件，可讓您記錄，查看對源文件的更改並有效地管理項目。" 
date: Fri, 08 Jan 2021 14:11:16 +0000
author: Assad Mahmood
summary: "在本文中，我們將探討什麼是Git＆amp; git如何工作？ Git是一種版本控制系統，旨在管理源代碼，Track＆amp;日誌版本。" 
url: /zh-hant/source-code-management-software-what-is-git/
categories: ['Version Control Software']
---

## 在本文中，我們將探討什麼是git以及git的工作方式？ Git是一種版本控制系統，旨在管理源代碼，跟踪和日誌版本。

{{< figure align=center src="images/version-control-banner.png" alt="源代碼管理軟件">}}


## 概述
想像一下，您是從事項目的軟件開發人員。您有一個以上的人在研究它。而且，有一個包含源代碼的文件。由於它們都對代碼進行更改，因此每次更改文件時，它們都會具有不同的版本。那麼，現在我們將如何管理同一文件的不同版本？這就是源代碼管理軟件啟動的地方。它可以幫助您管理和合併同一文件的不同版本。甚至讓您追踪變化歷史記錄。而且，您始終可以確定是誰對文件進行更改以及這些更改是什麼。
在本文中，我們將了解GIT版本控制系統。如何使用它來管理軟件開發源代碼文件或任何其他文件。因此，讓我們開始。
  * **[什麼是版本控制系統][1]**
  * **[什麼是git][2]**
  * **[GIT如何工作][3]**
  * **[安裝git][4]**
  * **[設置存儲庫][5]**
  * **[將更改保存到存儲庫][6]**
  * **[檢查存儲庫的狀態][7]**
  * **[恢復或撤消更改][8]**
  * **[結論][9]**

## 什麼是版本控制系統 {#版本控制}
版本控制是一個系統，隨著時間的推移，記錄更改為文件或文件集的系統，以便您以後可以召回特定版本。如果您是軟件開發人員，並且想保留源代碼文件的版本，則源代碼管理軟件對您來說非常有用。它使您可以將選定的文件恢復到以前的狀態，將整個項目恢復到先前的狀態，比較隨著時間的變化，查看誰最後修改了可能引起問題的東西，誰引入了問題，何時何時以及更多。使用版本控制意味著您不必擔心失去工作。

## 什麼是git   {#git}
GIT是一個免費的開源版本控制系統，旨在以速度和效率處理從小到非常大的項目。與較舊的集中版本控制系統（例如SVN和CVS）不同，GIT版本控制是分佈式的。每個開發人員在本地都有其代碼存儲庫的完整歷史記錄。但是，它使初始克隆有些慢。但是，此後，所有提交和其他操作都非常快。 git允許您擁有可以完全獨立的多個本地分支。

## git如何工作 {#wow}
使用git，您可以更改本地存儲庫，然後將其推到託管工具。或者，您可以將其他人從託管工具進行更改為本地機器。這是源代碼管理軟件（GIT）的工作方式的基本概述。
  1.使用git創建一個“存儲庫”，任何託管工具（例如github，gitlab或bitbucket）
  2.克隆存儲庫到您本地的機器
  3.將文件添加到您的本地存儲庫
  4.保存（提交）更改您本地存儲庫
  5.將您的更改“推”到遙控託管上的主分支
  6.使用git託管工具對文件進行更改並提交
  7.“拉”當地機器的更改
  8.創建一個“分支”（版本），進行更改，提交更改
  9.打開“拉請請求”（提出更改主分支）
 10.“合併”您的分支機構

## 安裝git   {#install}
有不同的方法可以在計算機上安裝GIT。您可以將其作為軟件包或其他安裝程序安裝，或下載源代碼並自行編譯。

## #在Linux上安裝
如果您想通過二進制安裝程序在Linux上安裝基本的GIT工具，通常可以通過您的發行版隨附的軟件包管理工具來完成。對於Fedora（或任何與RPM密切相關的分佈，例如RHEL或CENTOS），您可以使用“ DNF”
```
$ sudo dnf install git-all
```
如果您正在使用基於Debian的發行版，例如Ubuntu，請嘗試“ APT”
```
$ sudo apt install git-all
```

## #在MacOS上安裝
有幾種方法可以在Mac上安裝GIT。最簡單的可能是安裝Xcode命令行工具。在Mavericks（10.9）或更高版本上，您只需第一次嘗試從終端運行 **git** 即可完成此操作。
```
$ git --version
```
如果您還沒有安裝它，它將提示您安裝它。

## 設置存儲庫 {#init}
git存儲庫是代碼文件的虛擬存儲。它允許您存儲代碼的不同版本，您可以在需要時訪問。
要創建一個新的存儲庫，您將使用**git Init **命令。 Git Init是您在新倉庫初始設置中使用的一次性命令。執行此命令將在您當前的工作目錄中創建一個新的.git子目錄。這還將創建一個新的**  Master**分支。

{{< figure align=center src="images/git-init-2.gif" alt="什麼是git">}}


## 將更改保存到存儲庫 {#commit}
現在您已經有了一個存儲庫初始化的，您可以提交文件版本更改。

{{< figure align=center src="images/git-add-commit-1.gif" alt="git提交">}}


## 檢查存儲庫的狀態 {#status}
**git狀態**命令顯示工作目錄和登台區域的狀態。它使您可以查看哪些更改已經上演，尚未進行，以及源代碼管理軟件（GIT）未跟踪哪些文件。狀態輸出不會向您顯示有關項目歷史記錄的任何信息。為此，您需要使用 **git log** 。

{{< figure align=center src="images/git-status-2.gif" alt="源代碼管理軟件">}}

git日誌將向您顯示以下輸出
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

## 還原您的更改 {#revert}
您可以使用git恢復命令來撤消您在存儲庫中已經實施的更改。首先，使用“ git log”命令獲取提交列表
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
然後，確定要恢復哪個提交。並且，使用如下
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
如您所見，Git還原創建了一個新的提交，該提交撤消了“第二次提交”中所做的更改。

## 結論
現在，您已經閱讀了整篇文章，我們討論了什麼是git以及git的工作原理，您應該知道源代碼管理軟件。它的目的是什麼？為什麼需要它。我們探索了GIT如何幫助您管理項目的源代碼。而且，我們還了解瞭如何使用不同的git命令來初始化和存儲庫，保存更改以及如何消除更改。在即將到來的教程中，我們將更多地探索GIT，並分享如何使用不同的命令來更好地管理您的代碼。

## 探索
您可能會發現以下鏈接相關：
  *[**使用github操作自動化軟件開發工作流**][10]
  * **[如何使用gitlab ci/cd設置連續部署管道[11]**
  * **[了解並學習分支機構並在git中提取請求][12]**
  * **[2021年的前5個開源版本控制系統][13]**

  
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
