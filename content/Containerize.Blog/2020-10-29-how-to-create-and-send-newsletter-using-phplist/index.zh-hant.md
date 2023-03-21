---
title: "如何使用phplist創建和發送新聞通訊" 
seoTitle: "如何使用phplist創建和發送新聞通訊" 
description: "Phplist是用於電子郵件營銷的領先的開源通訊軟件。這是創建和發送新聞通訊活動的初學者指南。" 
date: Thu, 29 Oct 2020 18:30:18 +0000
author: Masood Anwer
summary: "使用開源phplist創建和發送新聞通訊，並觸及數百萬訂戶。通過產品更新，促銷和新功能來增強客戶的參與度。" 
url: /zh-hant/how-to-create-and-send-newsletter-using-phplist/
categories: ['Newsletters']
---

##使用開源phplist創建和發送新聞通訊，並觸及數百萬訂戶。通過產品更新，促銷和新功能來增強客戶的參與度。

{{< figure align=center src="images/How-to-send-newsletter-in-phpList.png" alt="使用phplist創建並發送新聞通訊">}}

營銷是任何在線或離線業務的重要組成部分。電子郵件營銷是最簡單的營銷工具之一，並向大量受眾傳達信息。您可以手動向幾百個訂戶發送電子郵件，但很難向數千甚至數百萬的電子郵件發送電子郵件。因此，有很多開源電子郵件營銷工具可以自動化它。
Phplist是用於管理列表和新聞通訊的最受歡迎的開源軟件。該廣告系列是Phplist的核心組成部分，使您可以將消息傳遞到一個或多個列表中。您可以輕鬆地將其用於設計和發送廣告系列，向數百萬訂戶進行廣告系列。 Phplist提出了令人印象深刻的功能集，例如廣告系列和列表經理，插件，REST API等。
在這篇博客文章中，我們將專注於phplist設計和發送電子郵件活動。我們將介紹以下主題。
  * [創建新聞通訊/廣告系列][2]
  * [調度活動][3]
  * [分配列表到廣告系列][4]
  * [終結運動][5]
  * [進程隊列][6]
  * [結論][7]

##**創建廣告系列/新聞** {#create}
* 登錄到您的phplist安裝的管理接口。單擊**啟動或繼續活動**儀表板上的按鈕，或在左側導航中的廣告系列下發送活動鏈接。
* 單擊“開始新的廣告系列”按鈕。
* 如下圖所示，將字段填充諸如主題，線，內容和頁腳等選項。

{{< figure align=center src="images/create-campaign.png" alt="phplist的設計新聞通訊">}}


##**調度活動** {#schedule}
* 調度允許您在要啟動廣告系列時選擇日期。廣告系列將不會在選定日期之前/之後發送。
* 如果您想立即發送廣告系列，則無需更改日期。

{{< figure align=center src="images/scheduling.png" alt="安排phplist的新聞通訊">}}


##**將列表分配給廣告系列** {#list}
所有列表將在列表選項卡下顯示，選擇適當的列表。廣告系列將僅分配列表。但是，在創建/更新列表時，您可以將列表公開或私有。

{{< figure align=center src="images/lists.png" alt="將列表分配給Phplist的新聞通訊">}}


##**完成活動** {#finish}
完成是廣告系列創建過程的最後一步。您可以添加電子郵件以進行通知，添加Google Analytics（分析）跟踪代碼。單擊**發送活動**按鈕以開始向訂戶發送消息。現在，您已經完成了新聞通訊設計和廣告系列過程。但是，您需要處理隊列，並且可以在下一節中閱讀有關它的更多信息。

##**處理隊列** {#queue}
流程隊列是開始發送活動的過程。您可以使用命令行腳本手動啟動進程或創建CRON作業。對於幾個獵人的訂戶，手動處理隊列很容易。但是，如果您有成千上萬/數百萬的訂閱者，則最好將Cron Job進行排隊。您可以訪問Phplist官方[網站][8]以獲取信息以創建Cron作業。

##**結論** {#conclusion}
Phplist是想要使用開源新聞通訊軟件進行電子郵件營銷的企業的理想工具。我們已經詳細描述了設計和發送廣告系列的過程。您可以為下一個新聞通訊遵循它，並享受phplist的真正力量。
最後，有了一些更引人入勝的教程，[Containerize.com][9]都可以增強其教程基礎。有關定期更新，請與[新聞通訊][10]類別保持聯繫。

  
[1]: https://products.containerize.com/newsletter/phplist
[2]: #create
[3]: #schedule
[4]: #list
[5]: #finish
[6]: #queue
[7]: #conclusion
[8]: https://www.phplist.org/manual/books/phplist-manual/page/setting-up-your-cron
[9]: https://containerize.com
[10]: https://blog.containerize.com/category/newsletter/
