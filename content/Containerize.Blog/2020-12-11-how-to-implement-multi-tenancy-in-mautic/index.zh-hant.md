---
title: "如何實施多重租賃" 
seoTitle: "如何實施多重租賃" 
description: "Mautic是一種開源營銷自動化解決方案。實施多重租賃可降低成本，提高效率和安全性。" 
date: Fri, 11 Dec 2020 11:34:25 +0000
author: bilalahmed
summary: "通過在Mautic中實施多租戶來節省成本並最大化資源使用情況。多租賃有助於代碼自定義，應用程序更新，提高生產率和易於維護。" 
url: /zh-hant/how-to-implement-multi-tenancy-in-mautic/
categories: ['Marketing Automation']
---

##通過在Mautic中實施多租戶來節省成本並最大化資源使用情況。多租賃有助於代碼自定義，應用程序更新，提高生產率和易於維護。

{{< figure align=center src="images/Mautic-multitenancy.png" alt="如何實施多重租賃">}}

Mautic是一種免費的開源營銷自動化解決方案，可讓您完全控制營銷電子郵件，著陸頁，工作流以及營銷活動的措施。我們將在本教程中介紹以下各節：
  * [什麼是多租戶][1]
  * [什麼是Mautic][2]
  * [在Mautic中實施多租戶][3]
  * [結論][4]

## 什麼是多租戶 {#multi-tenancy}

在多租戶軟件體系結構中，軟件應用程序的一個實例為多個租戶提供服務。每個租戶數據都與共享同一應用程序實例的其他租戶隔離。這些租戶在邏輯上是孤立的，但物理整合。這樣可以確保所有租戶的數據安全和隱私。從單個應用程序實例中創建多個租戶需要更少的內存。租戶共享資源並降低軟件維護，基礎架構和數據中心操作的成本。成本往往低於單租戶基礎設施的成本。

## 什麼是糟糕的 {#mautic}

[Mautic][5]是一種免費的開源營銷軟件。使用Mautic自動化重複的營銷任務，例如營銷活動，潛在客戶生成，聯繫細分等。它具有令人震驚的功能，包括潛在客戶生成，競選活動，聯繫細分，電子郵件構建器，A/B測試，頁面構建器，潛在客戶培養等等。 Mautic還支持與所有流行的社交平台的集成，例如Facebook，Twitter，LinkedIn。所有這些令人難以置信的功能都可以幫助您提高整體客戶體驗並改善業務營銷自動化。

## 實施多重租賃 {#implement}

* 創建一個名為“ main_db”的新的空數據庫。
* 然後創建名為“租戶”的表格，該表將擁有有關所有租戶的詳細信息。
* 它將有3個字段，包括站點\ _name，url和db \ _name，如圖所示

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-mautic-database.png-1024x131.jpg" alt="如何實施多重租賃">}}

* 之後，打開Mautic/app/paths.php文件並添加此代碼：
```
$host = $_SERVER["HTTP_HOST"];
$dbName = "main_db";
$conn =  mysqli_connect($servername , $username , $password, $dbName);
$sql = "SELECT * from `tenant` where url = {$host}";
$result = mysqli_query($conn, $sql);
$Arr = mysqli_fetch_array($result,MYSQLI_ASSOC);
$tenant = $Arr["site_name"];
$local_config = "%kernel.root_dir%/config/local_".$siteName.".php";
```
* 這將根據URL路徑選擇相應的配置文件。
* 然後復制當前Mautic安裝的數據庫，並將其用於新租戶。
* 之後，創建Mautic/app/config/local.php的副本，然後將其重命名為[site_name] .php。
* 最終根據新數據庫更新數據庫名稱，主機，密碼和用戶。

## 結論 {#conclusion}

Mautic是一種免費，功能豐富且面向質量的營銷自動化解決方案。它使您可以創建營銷活動，細分市場，表格，報告等。實施多重租賃可降低成本，提高效率，可擴展性和安全性。輕鬆地從一個安裝中創建數百個租戶。

## 探索
要了解有關Mautic和Facebook的更多信息，請訪問：
  * [Mautic |開源內容營銷技術平台][5]
  * [如何使用廣告系列製造商設置MAUTIC廣告系列][6]
  * [Drupal Mautic整合以自動化鉛培養][7]
  * [與Mautic和WooCommerce集成的營銷自動化][8]
  * [將Mautic＆Joomla整合進行數字營銷自動化][9]



 [1]: #multi-tenancy
 [2]: #mautic
 [3]: #implement
 [4]: #conclusion
 [5]: https://products.containerize.com/marketing-automation/mautic
 [6]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
 [7]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
 [8]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
 [9]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
