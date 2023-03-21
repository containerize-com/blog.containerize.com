---
title: "GitLab連續部署|怎麼運行的？" 
seoTitle: "GitLab連續部署|怎麼運行的？" 
description: "在本教程中，我們將與GitLab建立連續的部署管道。 GitLab連續部署有助於DevOps執行自動部署。" 
date: Fri, 12 Feb 2021 12:51:28 +0000
author: Assad Mahmood
summary: "自動部署簡化您的工作流程＆amp;過程。該GitLab教程可幫助您學習使用GitLab CI/CD設置連續部署管道。" 
url: /zh-hant/gitlab-continuous-deployment-how-it-works/
categories: ['Version Control Software']
---

##自動部署簡化了您的工作流程和流程。該GitLab教程可幫助您學習使用GitLab CI/CD設置連續部署管道。

{{< figure align=center src="images/Continuous-Deployment-Pipeline.png" alt="GitLab連續部署">}}


## 概述
在最後幾篇文章中，我們了解了[版本控制的基礎知識][1]，然後通過了解不同的[分支模型][2]和工作流來增強我們的知識。版本控制系統在開發，部署和集成領域帶來了效率。開發人員發現在不擔心構建和測試的情況下提交源代碼非常容易。隨著這種方法啟動部署，軟件行業已經獲得了信心和競爭優勢。
**gitlab連續部署**和集成有助於輕鬆查找問題。此外，開發人員可以在較短的時間內跟踪錯誤和其他錯過處理。整個自動化過程賦予了經常發生的任務，並減少了錯誤的機會和機會。今天，在這篇博客文章中，我們將使用gitlab ci/cd進行有關連續部署管道的探討。因此，讓我們開始介紹以下幾點！
  * **[什麼是CI＆CD][3]**
  * **[什麼是Gitlab Runner][4]**
  * **[。gitlab-ci.yml文件][5]**
  * **[創建基本示例應用][6]**
  * **[結論][7]**

##什麼是ci＆cd   {#cicd}
連續集成（CI）是DevOps的最佳實踐之一，可以將代碼更改的集成從多個貢獻者變更為單個軟件項目。這使開發人員經常將代碼更改合併到中央存儲庫中，然後運行構建和測試。連續部署（CD）通過在每個代碼提交和構建後自動將代碼移動到目標環境（生產或分階段），從而進一步移動一步。
在開始之前，請確保在GitLab中有一個項目，您想使用CI/CD。而且，您應該具有維護者或所有者級別的訪問權限。

##什麼是gitlab runner   {#runner}
在理解 **gitlab連續部署** 之後，Gitlab Runner是一個用GO編寫的小型輕量級程序，在您的本地機器上運行連續集成（CI）相關的作業，並將結果發送給Gitlab以考慮更改。它是可以安裝在任何主要操作系統上的單個可執行二進製文件。
在我們繼續使用GitLab CI / CD之前，您需要確保擁有可以運行任務的跑步者。您可以遵循[install][8]的官方指南和[register][9] Gitlab Runner。

## .gitlab-ci.yml文件 {#yml}
**。gitlab-ci.yml **是一個文件，您可以在其中為gitlab ci/cd配置特定說明。它放在存儲庫的根部，並包含有關如何構建項目的定義。每當我們將提交推向GitLab實例時，GitLab都會調用跑步者來按照本文件中的指示來構建和測試該項目。

##創建一個示例應用 {#sample}
在此 **gitlab教程** 的部分中，我們將創建一個示例應用程序。假設您已經創建了一個GitLab存儲庫，讓我們創建一個示例應用程序，我們將為應用程序設置CI / CD流程。
首先，創建package.json文件。
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
現在在項目的根源上創建一個app.js
```
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(8080, 'localhost');
console.log('Running on http://localhost:8080');
```
在**gitlab連續部署的最後一步中，**創建一個 **dockerfile**  ，並在其中添加以下內容：
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
Dockerfile包含此應用程序的構建過程。它涉及創建節點容器並安裝依賴項。
現在，我們需要創建一個**。gitlab-ci.yml **文件。該文件將包含構建我們項目的說明。每次我們將訂單推向GitLab存儲庫時，Gitlab都會援引跑步者來構建項目。
```
image: node:latest
stages:
- build

install_dependencies:
stage: build
script:
- npm install
```
我們只有一個階段的構建，它只是 **npm安裝** 作為腳本。這是您每次更改項目都必須手動運行的命令。而且，這就是GitLab Runner進來的地方，每次您進行提交時都會自動為您做到這一點。
現在，假設您已經安裝了GitLab Runner並已將其註冊給您的GitLab實例，則可以通過對應用程序進行簡單提交並將其推向GitLab來測試Gitlab CI / CD。
然後，您可以在GitLab中打開項目，轉到My-Project→Pipeline，您會看到一個標籤，上面寫著您所做的提交的“通過”。隨後的提交也將具有標籤。

##結論 {#conclusion}
這將我們帶到了這個**gitlab教程的結尾**。在本文中，我們了解了Gitlab連續集成的基礎知識，**什麼是CI＆CD **，**什麼是Gitlab Runner **，並且連續部署。此外，我們研究了整個CI / CD工作流程中跑步者的用途。我們還創建了一個示例項目，該項目解釋瞭如何使用gitlab設置連續部署。如果您正在尋找**  gitlab連續部署**，則本gitlab教程確實會為您提供幫助。但是，下面的“探索”部分中提到了許多其他資源，您可能會查看。此外，這些文章是關於**版本控制系統**的，它們是開源的，自託管的，可擴展的。
最後，[Containerize.com][10]不斷地撰寫有關進一步開源產品和主題的博客文章。因此，請與[[11][11][版本控制軟件][12]類別保持聯繫，以進行常規更新。此外，您可以在我們的社交媒體帳戶上關注我們[Facebook][13]，[LinkedIn][14]和[Twitter][15]。

## 探索
您可能會發現以下鏈接相關：
  * [使用GitHub操作自動化軟件開發工作流程][16]
  * [了解並學習分支機構，並在git中提取請求][2]
  * [源代碼管理軟件|什麼是git？][17]
  * [2021年的前5個開源版本控制系統][18]
  * [使用免費和開源軟件自動化業務運營][19]

  
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
