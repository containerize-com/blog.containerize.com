---
title: "如何停止WordPress | Docker WordPress" 
seoTitle: "如何停止WordPress | Docker WordPress" 
description: "什麼是Docker＆Docker組成？在本文中，我們將學習如何安裝Docker，Docker組成，以及如何將WordPress Dockerize將其置於Docker容器中。" 
date: Fri, 18 Dec 2020 15:35:07 +0000
author: Assad Mahmood
summary: "容器軟件捆綁了應用程序，其依賴項，並使應用程序在任何計算環境上運行。讓我們學習如何停止WordPress。" 
url: /zh-hant/how-to-dockerize-wordpress-docker-wordpress/
categories: ['Blogging']
---

##一個容器軟件捆綁了一個應用程序，其依賴關係，並使應用程序在任何計算環境上運行。讓我們學習如何停止WordPress。

{{< figure align=center src="images/dockerwordpress.png" alt="dockerize wordpress">}}


## 概述
歡迎使用開源軟件的[Blogging][1]類別中的另一篇博客文章。我們已經發表了一些有關主題的文章，例如[通過免費的civicrm wordpress集成增強潛在客戶][2]，[如何使用WordPress和Gatsby和Gatsby][3]等。但是，本文將提供有關開源博客平台和**容器軟件**的進一步見解和詳細信息。我們將討論一些熱門問題，例如什麼是Docker＆**如何安裝Docker組成**，我們將學習如何停泊WordPress。
容器化已成為軟件開發的主要趨勢，以替代虛擬化。它涉及封裝或捆綁軟件代碼及其所有依賴性，以便它可以始終如一地在任何基礎架構上運行。容器化允許開發人員更快，更安全地創建和部署應用程序。 Docker是在開發人員社區中使用的最受歡迎的集裝箱應用程序。在本教程中，我們將學習如何使用Docker撰寫來模擬WordPress。因此，讓我們從以下幾點開始。
* [**什麼是Docker？**][4]
* [**為什麼您需要停靠WordPress**？][5]
* **[如何安裝Docker組成][6]**
* **[dockerize wordpress][7]**
* **[結論][8]**

##什麼是Docker？   {#docker}
簡而言之，Docker是開源**容器軟件**，可以更快，更輕。它是如此輕，以至於可以在短短幾秒鐘內啟動一個碼頭容器。而且，您可以在一台PC上輕鬆運行數十個Docker容器。開發人員使用Docker使用容器來創建，部署和運行應用程序。容器允許開發人員將應用程序包裝在應用程序所需的所有零件（例如庫和其他依賴項）中，並將其部署為一個軟件包。通過這樣做，開發人員可以放心，該應用程序將在任何基礎架構上運行。此外，還有一個龐大的開發人員和支持社區，它始終活著，可以在任何相關性上提供最大的幫助。由於其強大的功能和用法，Docker已成為任何軟件企業的必備部分。

##為什麼您需要停靠WordPress？   {#為什麼}
在本節中，我們將了解Dockerizing WordPress背後的需求。 WordPress是領先的開源博客軟件，該軟件被技術界高度採用。但是，要在本地運行WordPress，您需要Apache/nginx，MySQL Server，PHP和其他許多依賴關係。在管理這些依賴性方面，部署到分期或生產環境是一場噩夢。有時，這會成為開發人員和支持工程師的麻煩，以便在需要時間和人力的情況下反復重复部署。
因此，容器化可以為您提供幫助。您需要的是Docker  - 安裝本身需要幾秒鐘，不需要其他配置
無論它是開發機，舞台還是實時服務器，以及它是什麼操作系統，Docker到處都可以工作。這意味著您不必尋找出現在一個環境中並且不能在另一個環境中復制的錯誤。

##如何安裝Docker組成 {#install}

###先決條件
您可以使用Docker組合在使用Docker容器構建的孤立環境中輕鬆運行WordPress。本指南演示瞭如何使用組合來設置和運行WordPress。
Docker撰寫的依賴於Docker Engine，因此請確保您安裝了Docker Engine。在台式機系統（例如用於Mac和Windows的Docker Desktop）上，將包括Docker Compose作為這些台式機安裝的一部分。但是，首先，在Linux系統上，按照其[官方指南][9]安裝Docker引擎。

###在Linux上安裝撰寫
運行此命令以下載Docker當前穩定版本組成：
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
將可執行的權限應用於二進製文件：
```
sudo chmod +x /usr/local/bin/docker-compose
```
通過運行版本命令進行測試安裝：
```
docker-compose --version
```

###定義WordPress的Dockerfile
我們需要做的第一件事是定義在**_ dockerfile _**中的圖像的樣子。這是一個文本文件，並添加到了您的應用程序源中的目錄中。
```
FROM wordpress:php7.1-apache
COPY . /var/www/html/wordpress
```
“**/var/www/html/wordpress**”將包含WordPress的完整內容以及主題，插件和內容。如果您的存儲庫僅包含主題或插件，則只需添加相關文件夾即可。
創建一個啟動您的WordPress博客的Docker-compose.yml文件，並具有一個單獨的MySQL實例，其中具有用於數據持久性的音量安裝：
```
version: '3.3'

services:
   db:
     image: mysql:5.7
     volumes:
       - db_data:/var/lib/mysql
     restart: always
     environment:
       MYSQL_ROOT_PASSWORD: somewordpress
       MYSQL_DATABASE: wordpress
       MYSQL_USER: wordpress
       MYSQL_PASSWORD: wordpress

   wordpress:
     depends_on:
       - db
     build: .
     ports:
       - "8000:80"
     restart: always
     environment:
       WORDPRESS_DB_HOST: db:3306
       WORDPRESS_DB_USER: wordpress
       WORDPRESS_DB_PASSWORD: wordpress
       WORDPRESS_DB_NAME: wordpress
volumes:
    db_data: {}
```
現在，在項目目錄中運行命令
```
docker-compose up -d
```
這將在分離模式下運行**_ docker-compose _**，拉動所需的docker映像，然後啟動WordPress和數據庫容器。
容器啟動後，您可以在Web瀏覽器中打開URL並開始使用您的應用程序：
```
http://localhost:8000
```

##結論 {#conclusion}
這使我們進入了此博客文章的結尾。在本文中，我們了解了什麼是Docker，**如何安裝Docker組成**。我們還學會瞭如何使用Docker-Compose對WordPress進行擴展。此外，我們向您介紹了Docker背後的概念，以及如何定義簡單的多容器應用程序。但是，此開源**容器軟件**是所有軟件組織的領先選擇。因此，如果您希望選擇用於應用程序的Docker，那麼本文將為您提供幫助。下面的“探索”部分中列出了許多其他相關文章和博客軟件。
最後，[Containerize.com][10]正在撰寫有關進一步開源產品的文章。因此，請與[Blogging][1]類別保持聯繫以進行常規新聞和更新。此外，您可以在我們的社交媒體帳戶上關注我們[Facebook][11]，[LinkedIn][12]和[Twitter][13]。

## 探索
您可能會發現以下鏈接相關：
  * [WordPress][14]
  * [Jekyll][15]
  * [話語][16]
  * [鬼][17]
  * [如何用Docker組成WordPress][18]
  * [通過免費的civicrm wordpress集成增強潛在客戶][2]
  * [使用WordPress和Osticket自動票務系統][19]
  * [如何將話語論壇與WordPress整合][20]
  * [通過關注前7個SEO博客來增加網站搜索流量][21]
  * [如何使用WordPress和Gatsby構建網站][3]
  * [如何在WordPress中啟用GZIP壓縮以獲得更好的PAGSPEED和SEO][22]

  
[1]: https://products.containerize.com/blogging/
[2]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[3]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
[4]: #docker
[5]: #why
[6]: #install
[7]: #dockerize
[8]: #conclusion
[9]: https://docs.docker.com/engine/install/#server
[10]: https://www.containerize.com/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/blogging/wordpress/
[15]: https://products.containerize.com/blogging/jekyll/
[16]: https://products.containerize.com/discussion-forum/discourse/
[17]: https://products.containerize.com/blogging/ghost/
[18]: https://blog.containerize.com/blogging/zh-hant/how-to-dockerize-wordpress-docker-wordpress/
[19]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[20]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[21]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/
[22]: https://blog.containerize.com/2020/12/12/how-to-enable-gzip-compression-in-wordpress-for-better-speed/
