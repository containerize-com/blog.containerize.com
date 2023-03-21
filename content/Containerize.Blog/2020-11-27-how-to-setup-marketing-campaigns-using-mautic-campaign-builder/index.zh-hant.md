---
title: "如何使用廣告系列製造商設置MAUTIC廣告系列" 
seoTitle: "如何使用廣告系列製造商設置MAUTIC廣告系列" 
description: "逐步逐步配置Mautic中的廣告系列，並完全控制營銷電子郵件，登陸頁面和營銷活動的工作流程。" 
date: Fri, 27 Nov 2020 09:46:58 +0000
author: bilalahmed
summary: "使用Mautic Apainty Builder輕鬆創建廣告系列。吸引目標受眾，使他們有關您的產品的最新信息，然後將其轉換為客戶。" 
url: /zh-hant/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
categories: ['Marketing Automation']
---

##使用Mautic Apaintion Builder輕鬆創建廣告系列。吸引目標受眾，使他們有關您的產品的最新信息，然後將其轉換為客戶。

{{< figure align=center src="images/mautic.png" alt="如何為數字營銷設置卑鄙的活動">}}

在本文中，我們將學習如何在Mautic中設置廣告系列。我們將介紹以下各節：
  * [什麼是Mautic？][1]
  * [如何在Mautic中創建形式？][2]
  * [如何在Mautic中創建廣告系列？][3]
  * [結論][4]

##什麼是Mautic？   {#mautic}
Mautic是一種開源營銷自動化軟件。它可以完全控制營銷電子郵件，著陸頁和營銷活動的工作流程。它自動化了從登陸頁面，表單上創建潛在客戶並將其轉換為潛在客戶的方式。所有這些都可以通過創建智能滴灌廣告系列來實現，這將使潛在客戶有關產品/服務的最新信息。

##如何在Mautic中創建形式？   {#形式}
* 登錄您的MAUITC安裝。
* 轉到“組件”選項卡，然後單擊“表單”。
* 從右上角點擊“新”。
* 選擇“新廣告表格”選項。如本屏幕截圖所示，它將打開表單配置頁面。

{{< figure align=center src="images/Mautic-Campaign-Create-Form-1024x424.png" alt="如何為數字營銷設置卑鄙的活動">}}

* 在“詳細信息”選項卡下輸入表單名稱。其他字段是可選的。
* 移動到下一個標籤“字段”。
* 在這裡，您可以創建希望訪問者進入的數據字段。
* 創建一個字段，如下所示：

{{< figure align=center src="images/Mautic-Campaign-Forms-Form-fields-1024x525.png" alt="如何為數字營銷設置卑鄙的活動">}}

* 選擇字段類型並輸入字段名稱。
* 之後，單擊“添加”，然後點擊“保存並關閉”。
* 這很容易創造出卑鄙的形式。

##如何創建Mautic的廣告系列？   {#CampAigns}
* 參加競選活動。從右上單擊“新”。
* 輸入名稱並將“發布”設置為“是”。

{{< figure align=center src="images/Create-new-campaign-1024x437.png" alt="如何為數字營銷設置卑鄙的活動">}}

* 接下來，單擊“啟動活動構建器”。
* 選擇“廣告表格”作為源，然後選擇表單。

{{< figure align=center src="images/Mautic-Select-campaign-source.png" alt="如何為數字營銷設置卑鄙的活動">}}

* 現在創建和“操作”，每當用戶填寫我們在上一節中創建的表格時，它將被觸發。

{{< figure align=center src="images/Mautic-Campaign-Choose-action.png" alt="如何為數字營銷設置卑鄙的活動">}}

* 您可以通過選擇“發送電子郵件”事件的“發送電子郵件”事件來向他們發送後續電子郵件：

{{< figure align=center src="images/Send-email-to-user-when-form-is-filled.png" alt="如何為數字營銷設置卑鄙的活動">}}

* 配置後續電子郵件，輸入電子郵件名稱並創建“新電子郵件”，如果沒有。最後，單擊“添加”。

{{< figure align=center src="images/Mautic-Campaign-Configure-follow-up-email.png" alt="如何為數字營銷設置卑鄙的活動">}}


##結論： {#conclusion}
我們已經學會了按照三個非常簡單的步驟來設置滴灌營銷活動。其中包括創建作為廣告系列所需的表格，創建廣告系列並配置電子郵件。我們在本教程中創建了非常基本的活動。但是，您可以使用Mautic廣告系列製造商創建複雜的廣告系列。如果您是Mautic的新手，請查看如何使用以下指南來安裝它：
[Mautic概述和安裝][5]

## 探索：
如果您想將Mautic與WordPress或Joomla整合在一起，並且可以幫助您開始實施Mautic的多租戶，那麼這些文章可能會非常有幫助。
[使用Mautic和WordPress WooCommerce的營銷自動化][6]
[將Mautic與Joomla整合以進行營銷自動化][7]
[如何在Mautic中實施多租戶][8]

  
[1]: #mautic
[2]: #forms
[3]: #campaigns
[4]: #conclusion
[5]: https://products.containerize.com/marketing-automation/mautic
[6]: https://blog.containerize.com/wp-admin/post.php?post=388&action=edit
[7]: https://blog.containerize.com/wp-admin/post.php?post=233&action=edit
[8]: https://blog.containerize.com/marketing-automation/how-to-implement-multi-tenancy-in-mautic/
