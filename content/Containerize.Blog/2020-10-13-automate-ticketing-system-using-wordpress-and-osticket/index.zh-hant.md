---
title: "使用WordPress和Osticket自動票務系統" 
seoTitle: "使用WordPress和Osticket自動票務系統" 
description: "Osticket-wordPress集成為客戶提供了一種從WordPress網站生成支持票並從Osticket儀表板進行管理的方法。" 
date: Tue, 13 Oct 2020 07:58:41 +0000
author: bilalahmed
summary: "使用無縫的WordPress和Osticket集成來自動使用HelpDesk流程。通過基於Web的表格將客戶的查詢轉換為支持門票。" 
url: /zh-hant/automate-ticketing-system-using-wordpress-and-osticket/
categories: ['Blogging', 'Help Desk']
---

##使用無縫的WordPress和Osticket集成自動化HelpDesk進程。通過基於Web的表格將客戶的查詢轉換為支持門票。

{{< figure align=center src="images/integrate-osticket-with-wordpress-banner-1024x536.png" alt="Osticket-wordpress集成到自動化票務系統">}}

您的客戶可以對您的產品/服務有疑問。他們將通過您的WordPress網站上的不同形式發送查詢。 Osticket-WordPress集成有助於將這些查詢轉換為門票。它通過API將數據發送到Osticket Helpdesk系統。
Osticket是一種開源和免費的HelpDesk票務系統。客戶可以在Osticket上創建有關其查詢的門票。這個幫助台系統使任何組織都可以輕鬆管理來自客戶的查詢。管理員可以創建部門和團隊，並根據創建的門票的性質為不同代理商分配門票。這種免費的開源系統將跟踪問題。它允許客戶和代理商在門票上發表評論以討論進度。我們將在此博客文章中介紹以下各節：
  * [集成過程][1]
  * [WordPress插件安裝][2]
  * [身份驗證過程][3]
  * [結論][4]

## 集成過程： {#integration}

Osticket和WordPress集成需要WordPress網站上的聯繫表，並具有以下字段
  1.幫助主題
  2.電子郵件
  3.全名
  4.主題
  5.消息
聯繫表必鬚髮送電子郵件，因為此插件將WP_Mail功能掛鉤以獲取表單的數據。

## WordPress插件安裝： {#wordpress}

  1.轉到WordPress網站的管理儀表板。
  2.接下來轉到插件部分。
  3.然後安裝此[插件][5]。
  4.之後激活插件。
  5.然後轉到“設置”  - >“ osticket Connector”。
  6.然後輸入osticket網站的URL，即[http：//your.domain/api/tickets.json][6]
  7.輸入從Osticket Admin面板創建的API密鑰（在下一節中說明）。
  8.最終填寫所有字段，將數據從您的聯繫表格映射到Osticket的門票字段。

{{< figure align=center src="images/wordpress-osticket-1024x776.png" alt="Osticket-wordpress集成到自動化票務系統">}}


## 身份驗證程序： {#auth}

API身份驗證是通過在Osticket管理面板中配置的API鍵執行的。生成API鍵並鏈接到源IP地址，該源IP地址已根據HTTP API請求的源IP進行了驗證。創建API密鑰
  1.轉到Osticket的管理面板。
  2.單擊“管理”。
  3.轉到子菜單“ API密鑰”。
  4.單擊“添加新的API密鑰”。
  5.將“狀態”設置為活動。
  6.檢查復選框“可以創建票證”。
  7.輸入WordPress網站的IP地址並點擊“添加鍵”。

{{< figure align=center src="images/osticket-1024x729.png" alt="Osticket-wordpress集成到自動化票務系統">}}


## 結論： {#conclusion}

Osticket-WordPress集成將自動化票務過程。因此，這將使支持團隊的生活更輕鬆。 WordPress網站上的查詢將自動轉換為Osticket上的支持門票。因此，支持團隊可以更輕鬆有效地管理所有客戶的查詢。支持代理將通過電子郵件通知通知。因此，代理可以按時解決客戶的查詢。 Osticket上的評論部分可以幫助客戶和支持代理進行有效和及時的溝通。這也使管理人員更容易跟踪每張票的進度。

## 探索：
要了解有關Osticket和WordPress的更多信息，請查看以下頁面：
  * [osticket  - 免費的開源服務台票系統][7]
  * [WordPress  - 免費開源，最廣泛使用的CMS和博客工具][8]
  * [如何使用Osticket設置在線幫助台軟件][9]



[1]: #integration
[2]: #wordpress
[3]: #auth
[4]: #conclusion
[5]: https://href.li/?https://wordpress.org/plugins/scand-osticket-connector/
[6]: https://href.li/?http://your.domain/api/tickets.json
[7]: https://href.li/?https://products.containerize.com/helpdesk/osticket
[8]: https://href.li/?https://products.containerize.com/blogging/wordpress
[9]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
