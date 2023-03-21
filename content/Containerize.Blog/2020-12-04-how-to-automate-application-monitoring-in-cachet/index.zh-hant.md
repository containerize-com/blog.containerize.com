---
title: "如何在Cachet中自動化Web應用程序監視" 
seoTitle: "如何在Cachet中自動化Web應用程序監視" 
description: "Cachet有助於監視您的所有服務並立即通知訂戶。本文是關於集成第三方插件以自動監視的。" 
date: Fri, 04 Dec 2020 19:42:42 +0000
author: Masood Anwer
summary: "CACHET狀態頁面使企業能夠即時通知服務停機時間。我們將學習如何在Cachet中自動化Web應用程序監視。" 
url: /zh-hant/how-to-automate-application-monitoring-in-cachet/
categories: ['Status Page']
---

## Cachet狀態頁面使企業能夠即時通知服務停機時間。我們將學習如何在Cachet中自動化Web應用程序監視。

{{< figure align=center src="images/cachet-monitor.png" alt="Web應用程序監視">}}

監視應用程序和服務是在線業務中非常重要的一部分。您的網站運行24x7，您隨時都可以弄錯它。在訪問它之前，您不知道任何一個網站都在工作。此外，客戶將沒有有關此問題的信息。他們可能會聯繫您的支持團隊以進行停機時間。此外，這可能會導致您的客戶感到失望。但是，您可以通過配置狀態頁面系統來減少服務停機時間。狀態頁系統將全天監視您的所有服務，並立即向您的團隊和客戶發送通知。這將使您能夠快速解決問題，並且客戶將繼續最新進展。在此博客文章中，您將學習如何將第三方庫與**cachet**整合在一起，以供**自動監視**。
  * [要求][1]
  * [設置監視插件][2]
  * [創建Linux服務][3]
  * [結論][4]

##要求 {#requirements}
* 安裝最新版本的Cachet。
* 熟悉Linux服務。

##設置監視插件 {#plugin}
以下步驟是在Ubuntu上安裝和配置用於監視的插件。
* 從[發行頁][5]下載二進製文件。
* 將文件重命名為cachet-monitor。
* 通過命令使文件可執行。
```
sudo chmod +x cachet-monitor
```
* 將可執行文件放在路徑目錄中，以便您可以通過終端直接訪問它。因此，我建議您在**/usr/local/bin**下移動。
* 通過運行以下命令創建一個config.json文件。
```
sudo nano config.json
```
* 將以下代碼複製到其中並保存文件。
```
{
  "api": {
    "url": "https://demo.cachethq.io/api/v1",
    "token": "9yMHsdioQosnyVK4iCVR",
    "insecure": false
  },
  "date_format": "02/01/2006 15:04:05 MST",
  "monitors": [
    {
      "name": "google",
      "target": "https://google.com",
      "strict": true,
      "method": "POST",
      "component_id": 1,
      "metric_id": 4,
      "template": {
        "investigating": {
          "subject": "{{ .Monitor.Name }} - {{ .SystemName }}",
          "message": "{{ .Monitor.Name }} check**failed** (server time: {{ .now }})\n\n{{ .FailReason }}"
        },
        "fixed": {
          "subject": "I HAVE BEEN FIXED"
        }
      },
      "interval": 1,
      "timeout": 1,
      "threshold": 80,
      "expected_status_code": 200
    }
  ]
}
```
* 現在，使用此命令測試您的配置。
```
cachet-monitor -c config.json
```
* 如果一切正常，請移至下一節並創建Linux服務。

##創建Linux服務 {#Service}
以下步驟是創建和啟動Linux服務以自動化監視過程。
* 創建服務**cachet-monitor.service**文件。
```
sudo nano cachet-monitor.service
```
* 將以下代碼複製到其中並保存文件。
```
[Unit]
Description=Cachet Monitor
After=syslog.target
After=network.target

[Service]
Type=simple
User=root
Group=root
WorkingDirectory=/usr/local/sbin
ExecStart=cachet-monitor -c /root/config.json
Restart=always
Environment=USER=root HOME=/root

[Install]
WantedBy=multi-user.target
```
* 通過運行命令更新SystemD配置。
```
sudo systemctl daemon-reload
```
* 通過運行命令啟用cachet-monitor服務，以便它可以在系統啟動上加載。
```
sudo systemctl enable cachet-monitor.service
```

##結論 {#conclusion}
Cachet A是免費的，並且**開源狀態頁**系統。但是，它沒有為**Web應用程序監視**提供開箱即用的功能。取而代之的是，它具有強大的REST API，可用於執行諸如事件，組件，組等之類的動作。在本文中，我們使用第三方插件來自動化CACHET的應用程序監視。最重要的是，您可以開發自己的插件或使用任何其他現有插件來完成這項工作。
此外，[Containerize.com][6]正在以多種語言和框架來增強開源產品的堆棧。有關定期更新，請繼續關注[狀態頁][7]類別，以獲取更多有趣的文章。

## 探索
您可能會發現以下鏈接相關：
  * [最佳開源狀態頁面系統][8]
  * [Cachet  - 免費和開源狀態頁面軟件][9]
  * [2020年的前5個開源狀態頁面軟件][10]

  
[1]: #Requirements
[2]: #Plugin
[3]: #Service
[4]: #Conclusion
[5]: https://github.com/CastawayLabs/cachet-monitor/releases
[6]: https://www.containerize.com/
[7]: https://blog.containerize.com/category/status-page
[8]: https://products.containerize.com/status
[9]: https://products.containerize.com/status/cachet
[10]: https://blog.containerize.com/status-page/top-5-open-source-status-page-software-for-2020/
