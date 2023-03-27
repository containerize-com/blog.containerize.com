---
title: "Osticket自定義 - 在Osticket中實現多租賃" 
seoTitle: "Osticket自定義 - 在Osticket中實現多租賃" 
description: "實施多租金可以節省成本和資源利用率。在本文中，我們將進行Osticket自定義以實現多租賃。" 
date: Mon, 02 Nov 2020 13:33:19 +0000
author: bilalahmed
summary: "多租戶式托運服務台可讓您從單個安裝中創建多個租戶。這使得最佳使用Web服務器資源。" 
url: /zh-hant/how-to-implement-multi-tenancy-in-osticket/
categories: ['Help Desk']
---

## Multi-Tenant Osticket Helpdesk使您可以通過單個安裝創建多個租戶。這使得最佳使用Web服務器資源。

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket.png" alt="Osticket自定義 - 在Osticket中實現多租賃">}}

在本文中，我們將討論如何製作Osticket自定義以實施多租戶。這篇文章將涵蓋以下主題：
  * [osticket概述][1]
  * [多租期概述][2]
  * [多租期的好處][3]
  * [實施][3]
  * [結論][4]

## Osticket概述： {#osticket}

[Osticket][5]是開源在線客戶支持網絡的服務台軟件。它提供了直觀的控制面板和一個實時報告組件。它易於使用查詢管理模塊。這使您可以通過手機，電子郵件和基於Web的表單創建查詢。它提供了許多選項，以幫助定制客戶支持經驗的所有部分，例如評論和電子郵件通知。

## 多租戶概述： {#multitenancy}

多租賃是指實施，其中應用程序的多個獨立實例在共享環境中運行。實例（租戶）在邏輯上是孤立的，但物理整合。組織可能有多個部門。因此他們可以創建同一應用程序的多個租戶/實例。例如，在我們的情況下，可以為同一組織的不同域配置服務台系統。可能有數百個租戶，但他們都將使用相同的文件，因此將使用相同的存儲空間。這將降低存儲成本，並更容易升級。開發人員只需要從一個地方更新文件，而不是分別為每個站點進行更改。

## 多租戶有什麼好處？ {#benefits}

這是多租戶的一些關鍵好處
*  **資源優化:**   一台為一個租戶保留的機器並不有效。因為一個租戶不太可能使用機器的所有計算能力。共享機器將最大化資源可用性。
*  **較低的成本:**   擁有共享相同資源的多個租戶的成本將比每個租戶需要自己的專用基礎設施低得多。
*  **有效的託管:**   同樣，多租戶的托運將在共享環境中將託管成本降低到最低。
*  **安全性:**   與外界的互動較少，降低了惡意軟件的暴露。
*  **輕鬆升級**  ：僅在一個地方升級文件，而不是單獨更新它們。這將節省大量的時間和精力。

## 實施多租戶Osticket： {#implementation}

* 創建一個新的空數據庫名稱為“ main_db”。
* 然後創建名為“租戶”的表格，該表將擁有有關所有租戶的詳細信息。
* 它將有以下字段：
  1. site_name
  2. URL
  3. db_name

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket-database.png-1024x131.jpg" alt="Osticket自定義 - 在Osticket中實現多租賃">}}

* 站點\ _name字段將保留租戶的名稱。 URL字段將保存租戶的完整URL。 db \ _name字段將保留將為新租戶創建的數據庫的名稱。
* 之後，打開 /include/ost-config.php文件並添加以下代碼
```
$url = $_SERVER['SERVER_NAME'];
$conn = new mysqli(DBHOST,DBUSER,DBPASS,DBSITES);
$sql = "select * from ost_sites where url = '$url'";
$res = $conn->query($sql);
$row = $res->fetch_array();


if ($url == $row['url']) {
	define('DBNAME',$row['db_name']);
} else {
	define('DBNAME','dynabic_osticket');
}

```
* 此代碼將更新默認數據庫連接。它將首先獲得當前租戶的URL。然後，它將根據該URL獲取數據庫的名稱。這就是該應用程序將知道要連接到哪個數據庫的方式。每個租戶都會有一個單獨的數據庫。數據庫將根據租戶URL選擇。
* 為了創建新的房客，只需在Nginx服務器上設置新的房客域即可。之後，只需複制當前的Osticket數據庫並將其重命名。最後將條目添加到“ main_db”數據庫的“租戶”表中。

## 結論： {#conclusion}

Osticket是一個免費的開源IT幫助辦公桌管理軟件。我們已經了解瞭如何製作Osticket自定義以在osticket中實現多租賃，以節省成本，優化應用程序並降低資源需求。這將使開發人員的生活更輕鬆，可以通過幾個簡單的步驟創建新的租戶。因此，從同一安裝中創建多個托運租戶。

## 探索：
請查看以下頁面以了解有關Osticket的更多信息：
  * [osticket  - 免費的開源服務台軟件][5]
  * [開發Osticket插件的初學者指南][6]
  * [如何使用Osticket設置在線幫助台軟件][7]
  * [使用WordPress和Osticket自動票務系統][8]



 [1]: #osticket
 [2]: #multitenancy
 [3]: #benefits
 [4]: #conclusion
 [5]: https://products.containerize.com/helpdesk/osticket
 [6]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
 [7]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
 [8]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
