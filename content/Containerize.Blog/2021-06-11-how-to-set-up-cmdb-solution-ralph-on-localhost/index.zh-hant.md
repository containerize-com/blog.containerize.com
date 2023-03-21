---
title: "如何在Local主機上設置CMDB解決方案" 
seoTitle: "如何在Local主機上設置CMDB解決方案" 
description: "本教程是關於在Localhost上設置Ralph。 Ralph是一種免費的CMDB解決方案，可為跟踪資產和配置提供功能。" 
date: Fri, 11 Jun 2021 12:54:21 +0000
author: muhammadmustafa
summary: "IT資產管理解決方案降低了運營成本並提高效率。本文介紹瞭如何在本地計算機上設置CMDB軟件Ralph。" 
url: /zh-hant/how-to-set-up-cmdb-solution-ralph-on-localhost/
categories: ['CMDB Software']
---

## IT資產管理解決方案降低了運營成本並提高效率。本文介紹瞭如何在本地計算機上設置CMDB軟件Ralph。

{{< figure align=center src="images/ralph.png" alt="CMDB解決方案">}}


## **概述**
在當前的時間點，組織正在蓬勃發展，通過採用龐大的IT基礎架構來滿足技術的步伐。接下來，管理如此巨大的環境不僅僅是一個挑戰。它需要人力和技術力量才能完成此類關鍵任務。有時，制定過程和過程來處理包括打印機，台式計算機，掃描儀，手機和其他IT配件的系統網絡的過程和過程變得麻煩。同樣，這些節點的配置也很重要，因為網絡中任何機器的停機時間很高。因此，應該對這些配置進行一致的檢查。
但是，有許多開源和免費軟件可保留資產跟踪和記錄。該軟件稱為配置管理數據庫軟件（CMDB）。最近，[Containerize.com][1]發布了CMDB解決方案[Ralph][2]，該解決方案為更好的資產和配置管理提供了許多功能。在這篇博客文章中，我們將通過介紹以下幾點來探索拉爾夫。
  * **[簡要介紹CMDB軟件資產管理Ralph][3]**
  * **[Ralph的功能][4]**
  * **[如何在local主機上設置ralph？][5]**
  * **[結論][6]**

## 簡要介紹CMDB軟件資產管理Ralph   {#intro}
拉爾夫是一種免費的開源IT資產管理解決方案。它是跨平台，具有自託管功能。有一個完整的實時資產跟踪生態系統。因此，用戶可以執行報告分析。它使用戶能夠記錄有關其生命週期的資產細節。此外，此開源數字資產管理軟件為存儲有關數據中心資產的信息提供了空間。另一方面，該CMDB解決方案還為管理軟件，許可證，證書和其他合同提供了支持。拉爾夫不僅支持資產管理，而且還提供了對這些資產採取行動的規定。但是，這些動作與部署主機，生成發票，域跟踪或庫存管理有關。
此IT資產管理解決方案提出了一個安息的接口。開發人員可以使用此開源免費工具所示的API端點來集成許多第三方應用程序。此外，拉爾夫（Ralph）與HTML，CSS和JavaScript的輸入一起編寫。因此，有有關開發和部署的全面文件。該股票管理解決方案的源代碼可在[GitHub][7]上獲得。

## ralph的功能 {#features}
拉爾夫提供了許多功能。但是，我們將提及以下一些關鍵功能。
**可擴展**：此開源數字資產管理軟件非常可擴展。開發人員可以根據需求將其部署在場所或云上。
**支持數據中心：**拉爾夫還為數據倉庫，數據中心房間，服務器和機架提供支持。用戶可以跟踪所有組件，其網絡和配置。
**REST API**：此免費的CMDB軟件非常可自定義。實際上，它為第三方集成提供了REST API。開發人員可以根據他們的要求將其擴展。
**直觀的用戶界面：**此CMDB解決方案中有一個邏輯用戶界面，用戶可以輕鬆導航。此外，管理儀表板提供了各種小部件，這些小部件可實時顯示數據。
**命令行界面**：Ralph提出了一個命令行接口，該接口提供了一個設施，可以發現用於部署主機的MAC地址。
**支持非物理資產**：本設備管理解決方案不僅為物理資產提供支持，還可以管理域，軟件和許可等非物理資源。

## 如何在Localhost上設置Ralph？   {#設置}
在本節中，我們將在本地計算機上介紹Ralph資源管理軟件的安裝過程。設置和使用非常容易。
移至下一節之前，請確保您已經安裝了以下先決條件。
  * [Docker-Compose][8]
  * [Docker][9]
大多數開源軟件都為各種平台上的部署提供碼頭圖像。它使開發人員輕鬆並加快開發和部署過程。
安裝先決條件後，打開Docker。現在，打開終端並運行以下命令以製作一個空目錄：
```
mkdir ralph<br>cd ralph
```
之後，製作一個名為“ Docker-compose.yml”的新文件，並使用以下數據填充它。
```
version: '3'
services:
  web:
    image: allegro/ralph:latest
    restart: always
    ports:
      - "8000"
    volumes:
      - ralph_media:/var/local/ralph/media
      - ralph_static:/usr/share/ralph/static
    links:
      - db
      - redis
      - nginx
    environment:
        DATABASE_NAME: ralph_ng
        DATABASE_USER: ralph_ng
        DATABASE_PASSWORD: ralph_ng
        DATABASE_HOST: db
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

  nginx:
    image: allegro/ralph-static-nginx:latest
    restart: always
    ports:
      - "80:80"
    volumes:
      - ralph_media:/opt/media

  db:
    image: mysql:5.7
    environment:
      MYSQL_DATABASE: ralph_ng
      MYSQL_ROOT_PASSWORD: ralph_ng
      MYSQL_USER: ralph_ng
      MYSQL_PASSWORD: ralph_ng
    volumes:
      - ralph_dbdata:/var/lib/mysql
    command: mysqld --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

  redis:
    image: redis:3.0
    restart: always
    ports:
      - "6379"

  inkpy:
    image: allegro/inkpy:latest
    restart: always
    links:
      - redis:redis
    environment:
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

volumes:
  ralph_dbdata:
  ralph_media:
  ralph_static:
```
現在，保存文件並運行以下命令以進行構建：
```
docker-compose build

```
成功構建後，運行數據庫的以下命令：
```
docker-compose run –rm web /root/init.sh

```
如果一切順利，請運行以下命令來旋轉Docker的容器：
```
docker-compose up -d
```
運行該命令後，Docker容器將按照下圖所示啟動並運行：

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.25.20-1024x509.png" alt="CMDB解決方案">}}

最後，打開瀏覽器並在此地址訪問應用程序http://127.0.0.1。
它將顯示登錄頁面，如下圖所示：

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.20.58-1024x577.png" alt="CMDB解決方案">}}


## 結論 {#conclusion}
經過此CMDB教程博客文章後，很明顯，如果沒有良好的CMDB解決方案，資產管理幾乎是不可能的。資源管理軟件在管理和跟踪資產，配置及其關係中具有特定的作用。有一些規定跟踪幾乎沒有在數字或物理資產上進行的更改。這些免費工具易於設置，使用，並提供詳細的文檔和指導。最後，[**containerize.com **][1]旨在撰寫有關進一步開源產品的文章。因此，請與此[][10]**  [CMDB軟件][11]**類別保持聯繫。

## 探索
  * **[CMDB軟件][11]**
  * **[Ralph][2]**
  *[**使用免費和開源軟件自動化業務操作**][12]
  * **[在2021年要注意的軟件開發趨勢][13]**

  
[1]: https://www.containerize.com/
[2]: https://products.containerize.com/cmdb-software/ralph/
[3]: #intro
[4]: #features
[5]: #setup
[6]: #Conclusion
[7]: https://github.com/allegro/ralph
[8]: http://docs.docker.com/compose/install/
[9]: https://docs.docker.com/docker-for-mac/install/
[10]: https://products.containerize.com/healthcare-technologies/
[11]: https://products.containerize.com/cmdb-software/
[12]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[13]: https://blog.containerize.com/blockchain-platforms/software-development-trends-to-look-out-for-in-2021/
