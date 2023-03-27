---
title: "如何使用statping進行Web應用程序監視" 
seoTitle: "如何使用statping進行Web應用程序監視" 
description: "Statping是最佳的網站監視工具之一，使您能夠監視所有服務。渲染優美的狀態頁面，用於展示服務正常運行時間。" 
date: Fri, 16 Apr 2021 18:12:12 +0000
author: Masood Anwer
summary: "自動監視您的網站，Web應用程序，使用免費監視工具的API，並使用開源狀態頁面系統顯示正常運行時間。" 
url: /zh-hant/how-to-do-web-applications-monitoring-with-statping/
categories: ['Status Page']
---

##自動監視您的網站，Web應用程序，帶有免費監視工具的API，並使用開源狀態頁面系統顯示正常運行時間。

{{< figure align=center src="images/How-to-monitor-websites-with-statping.png" alt="Web應用程序監視">}}

Statping是 **開源狀態頁軟件**，也是**最佳網站監視工具之一** 。它還用於監視HTTP，TCP，UDP，ICMP和GRPC服務等服務。 Statping會自動獲取服務，監視它們並渲染美麗的狀態頁面。它是跨平台，您可以將其安裝在Liunx，Mac和Windows操作系統上。此外，它允許使用MySQL，Postgres或SQLite數據庫系統來存儲信息。此外，它隨身攜帶了iPhone和Android設備的移動應用程序。
讓我們來看看Statping的核心功能。
* **服務監視**  -  Statping使您可以輕鬆跟踪所有HTTP，TCP，UDP，GRPC和ICMP服務。
* **通知**  -  Statping支持接收通知的大多數主要第三方申請。
* **移動應用程序**  - 用於iPhone和Android設備的免費應用程序，並在旅途中管理所有內容。
* **oauth authenticatio** n  - 支持諸如GitHub，Google，Slack，Slack和Custom OpenID提供商等流行服務的OAuth身份驗證。使用此功能並提高安全性。
我們將在本教程中介紹以下主題。
  * [在Linux上安裝][1]
  * [配置SystemD服務][2]
  * [創建用於監視的服務][3]
  * [結論][4]

## 在Linux上安裝 {#Installing}

在下面的命令下運行符號安裝。
```
curl -o- -L https://statping.com/install.sh | bash
```

## 配置SystemD服務 {#Configure}

設置SystemD服務是確保您的Statping服務器可以在必要時自動重新啟動的絕佳方法。要創建SystemD服務，請按照以下步驟操作。
* 首先，在命令下運行以創建新文件。
```
sudo nano /etc/systemd/system/statping.service
```
* 複製下面的代碼並粘貼其中。
```
[Unit]
Description=Statping Server
After=network.target
After=systemd-user-sessions.service
After=network-online.target

[Service]
Type=simple
Restart=always
ExecStart=/usr/local/bin/statping
WorkingDirectory=/usr/local/bin

[Install]
WantedBy=multi-user.target
```
* 最後，使用以下命令啟用並啟動SystemD服務。
```
systemctl daemon-reload
systemctl enable statping
systemctl start statping
```

## 創建用於監視的服務 {#Create}

* 打開瀏覽器，輸入URL以登錄到您的Stats安裝。
* 單擊頂部導航中的服務鏈接。它將向您顯示在一個下方的服務頁面。

{{< figure align=center src="images/statping-dashboard.png" alt="Web服務監視列表">}}

* 單擊創建按鈕以添加新的服務以進行監視。填寫所需字段，例如服務名稱，服務類型，檢查間隔，服務端點（URL）等。

## 結論 {#結論}

我們了解了statping，如何在Linux上安裝它以及如何在本教程中創建SystemD服務。此外，我們創建了一項新服務，以監視和向您介紹不同的功能。我們希望本指南將幫助您開始使用stating來執行 **Web服務監視**和**Web應用程序監視** 。
最後，[ **containerize.com**][5]正在始終如一地編寫有關更多最新開源產品的博客文章。因此，與此[**狀態頁面** ][6]類別保持聯繫以獲取最新更新。

## 探索
您可能會發現以下鏈接相關：
* [ **2020年的前5個開源狀態頁面軟件** ][7]
* [ **statping** ][8]
* [ **cachet** ][9]
* [ **監視器** ][10]
* [ **Staytus** ][11]
* [ **upptime** ][12]
* [ **statusfy** ][13]



[1]: #Installing
[2]: #Configure
[3]: #Create
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/status-page/
[7]: https://blog.containerize.com/status-page/top-5-open-source-status-page-software-for-2020/
[8]: https://products.containerize.com/status/statping
[9]: https://products.containerize.com/status/cachet/
[10]: https://products.containerize.com/status/monitoror/
[11]: https://products.containerize.com/status/staytus/
[12]: https://products.containerize.com/status/upptime/
[13]: https://products.containerize.com/status/statusfy/
