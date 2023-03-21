---
title: "來自源控制服務器的連續集成和連續部署" 
seoTitle: "來自源控制服務器的連續集成和連續部署" 
description: "免費部署工具可幫助開發團隊自動化軟件交付工作流程。快速構建，測試，使用Jenkins和Github存儲庫部署軟件。" 
date: Mon, 22 Feb 2021 06:11:17 +0000
author: Masood Anwer
summary: "使用免費部署工具自動化開發工作流程。我們將學習如何使用Jenkins Automation Server和GitHub進行軟件部署設置CI/CD。" 
url: /zh-hant/automate-software-deployment-process-with-jenkins-and-github/
categories: ['Deployment Tools']
---

## 使用免費部署工具自動開發工作流程。我們將學習如何使用Jenkins Automation Server和GitHub進行軟件部署設置CI/CD。

{{< figure align=center src="images/ci-cd-post.png" alt="連續集成和連續部署">}}

開發團隊使用不同的方法進行軟件部署，例如FTP，從存儲庫中提取代碼等等。所有這些方法都是手動執行的，需要大量精力。我們可以看到，更多的團隊遵循敏捷方法進行軟件開發。因此，他們會發布新功能並經常修復錯誤。因此，自動化軟件交付工作流程可幫助團隊快速啟動新版本，而無需錯誤。我們將學習如何與Jenkins **一起使用** CI/CD和GitHub來自動化軟件交付過程。我們將介紹本文中的以下各節。
  *[**什麼是詹金斯？**][1]
  *[**連續集成**][2]
  *[**連續部署**][3]
  *[**配置Jenkins **][4]
  *[**創建Jenkins Job **][5]

## 什麼是詹金斯？   {#Jenkins}
**Jenkins **是一種功能強大的**免費部署工具**用於自動化軟件交付過程。它是用於構建，測試和部署的開源自動化服務器。詹金斯使用主奴隸體系結構。這使軟件團隊可以同時運行多個構建和測試。此外，還有很多可用的插件，團隊可以根據需要使用它們。您可以訪問[ **Jenkins Page ** ][6]以獲取更多信息和安裝。此外，您可以在jenkins [ **github ** ][7]存儲庫中找到源代碼。

## 連續集成 {#ci}
**連續集成**是一種開發實踐，要求開發人員經常將代碼集成到共享的存儲庫中。可以通過自動構建和測試來驗證代碼的每個集成/推動代碼。它還允許開發人員輕鬆識別代碼中的問題。

## 連續部署 {#cd}
**連續部署**是連續集成後的下一步。它將允許團隊在服務器上連續部署代碼。此外，它可以幫助開發人員減少重複任務並提高敏捷性。

## 配置jenkins   {#configure}
遵循詹金斯（Jenkins）配置的逐步指南。
  *打開您的Jenkins網站並登錄。
  *安裝“在SSH上發布”插件。您可以通過導航到“管理Jenkins→管理插件→可用”來搜索它。
  *如下所示，將構建服務器上的SSH密鑰作為用戶“ jenkins”生成。
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
  *使用SSH連接到目標/部署服務器。在下面運行命令，然後將酒吧文件內容粘貼到目標服務器上。
```
$ cd .ssh
$ nano authorized_keys
```
  *導航到管理“ Jenkins→配置系統→通過SSH發布”。
  *通過找到文件路徑或粘貼與部署服務器相同的內容來添加SSH鍵。
  *通過單擊“ SSH服務器”旁邊的“添加”按鈕來添加SSH服務器。
  *為部署/目標服務器輸入名稱，主機名，用戶名和遠程目錄。
  *單擊“測試配置”按鈕，以確保Jenkins可以連接到部署服務器。
  *最後，單擊“保存”按鈕存儲信息。

## 創建Jenkins Job   {#Create}
您可以使用這些步驟來創建Jenkins作業。
  *打開Jenkins儀表板，然後單擊“新項目”按鈕。
  *輸入項目名稱，然後選擇“自由式工作”。
  *在“配置窗口”下輸入GitHub存儲庫URL。
  *在“構建環境”部分中，請檢查以下選項“在構建啟動之前刪除工作區”，然後在構建運行後通過SSH發送文件或執行命令”。
  *在構建環境下輸入名稱，源文件和遠程目錄。
  *保存工作並建立它。
  *連接到部署服務器，並確保該代碼在那裡。

## 結論
在本文中，我們已經討論了 **Jenkins Server ** ，**連續集成**和**連續部署**。我們還學習瞭如何配置**免費部署工具**並創建了使用GitHub部署的Jenkins作業。免費的CI/CD工具允許開發團隊自動化軟件交付工作流程並將關注重點放在重要的工作上。我們將在即將到來的帖子中介紹其他部署工具。
最後，[ **containerize.com ** ][8]將發布有關進一步開源部署工具的文章。因此，請與[**部署工具**][9]類別保持聯繫，以進行常規更新。

## 探索
您可能會發現以下鏈接相關：
  * **[Jenkins][6]**
  *[**無人機**][10]
  *[ **Deployer ** ][11]
  *[ **Capistrano ** ][12]
  *[**牧場主**][13]
  *[**大廳**][14]
  *[ **Ansible ** ][15]
  *[ **gocd ** ][16]
  *[ **2021年前5個開源部署工具** ][17]
  *[**與Deployer Automate PHP應用程序部署**][18]

  
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
