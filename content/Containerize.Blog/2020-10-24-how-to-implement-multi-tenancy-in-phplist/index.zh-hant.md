---
title: "如何在phplist中配置多租戶應用程序" 
seoTitle: "如何在phplist中配置多租戶應用程序" 
description: "PHPLIST是一種免費的開源通訊軟件。配置多租戶應用程序，並在共享環境中運行多個應用程序。" 
date: Sat, 24 Oct 2020 03:25:27 +0000
author: Masood Anwer
summary: "在Phplist中開發多租戶應用的教程。多租戶功能使用單個安裝用於多個主機來降低託管成本。" 
url: /zh-hant/how-to-implement-multi-tenancy-in-phplist/
categories: ['Newsletters']
---

## 教程在Phplist中開發多租戶應用程序。多租戶功能使用單個安裝用於多個主機來降低託管成本。

{{< figure align=center src="images/Multi-tenancy-phplist.png" alt="多租戶應用程序phplist">}}

在本文中，我們將介紹**多租金**以及如何在phplist中配置**多租戶應用程序**。

## 什麼是phplist？
在決定營銷策略時，電子郵件營銷是每個在線數字公司的關鍵部分。 Phplist使企業能夠吸引大量受眾。 phplist被廣泛使用**開源通訊軟件**用於管理列表和發送新聞通訊。它可以幫助公司創建，安排，發送和分析新聞通訊廣告系列。 Phplist支持分析，分割，彈跳處理，插件，API等功能。

## 什麼是多租戶？
多租戶是一個體系結構，其中許多客戶/站點由軟件應用程序的單個實例表示。在多租戶中，該地點被認為是租戶。每個租戶都有特定的功能，例如配置，主題，SMTP。
雲計算的一個主要方面是多租賃。**多租戶架構**通過降低維護成本和快速的租戶更新來幫助企業實現更好的投資回報率。同樣，在多租戶架構上設計的應用程序可以輕鬆擴展。
我們可以使用以下方法來實現多租賃。
* 共享所有租戶的數據庫。
* 為每個租戶分開數據庫。
我們將為每種租戶方法使用單獨的數據庫來實現PHPLIST中的多租戶。
  * [處理請求流][1]
  * [房客的設置數據庫][2]
  * [租戶配置nginx][3]

## 處理請求流 {#request}
* 備份您的config.php文件，您可以在配置目錄下找到它。
* 創建一個新的config.php文件，並在其處理站點/租戶中添加以下代碼。
```
switch ($_SERVER['SERVER_NAME'])
{   
    case "example.com":
      include_once("config.example.com.php");
    break;
    
    default:
    die ("server not used to run phplist"); 
}
```
用您的域名替換example.com。您還需要為每個租戶創建一個配置文件。複製config.php的備份文件，並使用諸如config.example.com.php之類的新名稱保存。

## 房客的設置數據庫 {#database}
* 備份現有的phplist數據庫。使用它為新租戶創建數據庫。
* 打開config.example.com.php文件。根據您的環境更改數據庫憑據和任何其他設置。

## 為房客配置nginx   {#nginx}
* 轉到nginx目錄**cd/etc/nginx/sites-abailable**。
* 複製默認config.php文件，然後將其保存在您的站點名稱（例如example.com）中。
* 用**sudo nano example.com**打開example.com配置。
* 更改根路徑，server_name和任何其他設置。
* 使用**sudo nginx -t**測試配置
* 最後，通過執行**sudo ln -s/etc/nginx/sites-available/example.com/etc/etc/nginx/stites-enabled/**來創建符號鏈接。
* 通過運行**sudo systemctl restart nginx**重新啟動nginx Web服務器，因此它可以加載新創建的配置文件。

## 結論
與單租戶應用相比，多租戶軟件具有一些優勢，例如降低維護成本，有效的資源使用和易於安裝更新。如果要構建SaaS（軟件作為服務）軟件，則可以遵循多租賃體系結構並享受其真正的力量。

## 探索
您可能會發現以下鏈接相關：
  * [PHPLIST  - 開源通訊和電子郵件營銷軟件][4]
  * [如何使用phplist創建和發送新聞通訊][5]
  * [如何在phplist中設置和過程彈跳][6]
  * [開發Phplist插件的初學者指南][7]
  * [設置高級反彈管理和彈跳規則][8]

  
[1]: #request
[2]: #database
[3]: #nginx
[4]: https://products.containerize.com/newsletter/phplist
[5]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[6]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/
[7]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/
[8]: https://blog.containerize.com/newsletter/setup-advanced-bounce-management-and-bounce-rules-in-phplist/
