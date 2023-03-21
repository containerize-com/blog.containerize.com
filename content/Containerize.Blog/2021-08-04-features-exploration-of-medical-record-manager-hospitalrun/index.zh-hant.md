---
title: "功能探索醫療記錄經理Hospital Run" 
seoTitle: "功能探索醫療記錄經理Hospital Run" 
description: "請按照本指南開始醫療記錄經理Hospital Run。它是開源的，多語言，可以自動化許多重要的過程。" 
date: Wed, 04 Aug 2021 18:37:19 +0000
author: muhammadmustafa
summary: "醫院管理系統是醫療保健機構的重要組成部分。 HospitalRun提供數據控制，基於訪問的角色和收入管理。" 
url: /zh-hant/features-exploration-of-medical-record-manager-hospitalrun/
categories: ['Healthcare Software']
---

## 醫院管理系統是醫療機構的重要組成部分。 HospitalRun提供數據控制，基於訪問的角色和收入管理。

{{< figure align=center src="images/blog-banners-template-1.png" alt="病歷經理">}}


## 概述
開源[Healthcare Software][1]在最近的過去廣受歡迎。首先，這是由於技術的進步。其次，Covid-19以各種方式影響了醫療行業，並為開源社區帶來了新的機會。在整個世界經歷關鍵時期，為患者提供高質量的醫療服務非常重要。幸運的是，有幾種開源健康記錄管理​​解決方案可提供數據中心化，透明度，安全性，集成以及許多其他強大功能。這些免費的醫療保健服務提供了對醫生，患者，診所和其他工作人員等工作流程的平穩管理。最近，[Containerize.com][2]發表了一些有關開源醫院信息管理系統的文章，其中包括[前5名開源患者健康記錄軟件][3]，[特徵對醫療健康解決方案的探索openemr][4]， [在線醫療軟件如何賦予醫療保健行業的能力][5]。
過去，我們寫了一篇文章，描述了在Localhost上的[HospitalRun][6]的設置程序。在這篇博客文章中，我們將通過介紹以下幾點進一步探討[Hospital Run][6]。
  * **[為什麼要醫院？][7]**
  * **[患者和調度模塊][8]**
  * **[實驗室整合和藥物][9]**
  * **[成像和事件][10]**
  * **[結論][11]**

## 為什麼要醫院？   {#為什麼}
這位病歷經理的受歡迎程度背後有很多原因。 HospitalRun是一個完整的電子健康記錄和醫院信息系統。它支持離線和在線版本。它使您可以整合診所並提供數據同步。此外，它是多語言，跨平台，並具有自我託管功能。該患者記錄系統提供患者記錄管理，預約時間表，藥物和處方管理。還有一項規定生成包含完整診斷詳細信息的自定義報告。此外，醫務人員可以從患者出院模塊中獲得幫助。最重要的是，該醫院管理系統提供了意外和緊急情況的管理。它是安全，可靠且用戶友好的。但是，該病歷管理系統完全用JavaScript編寫，所有源代碼都可以在[Github][12]上提供，並提供有關開發和部署的文檔。

## 患者和調度模塊 {#modules}
在本節中，我們將瀏覽該醫院信息管理系統的儀表板。登錄後，您將登陸如下圖所示的醫院儀表板。

{{< figure align=center src="images/Screenshot-2021-08-02-at-17.40.46-1024x502.png" alt="病歷經理">}}

在右上方，有兩個選擇。首先，用戶可以選擇一種語言，例如英語，意大利語，土耳其語等。其次，可以選擇創建新的患者記錄，新約會，請求藥物，請求實驗室，新成像請求和報告事件。

{{< figure align=center src="images/Screenshot-2021-08-02-at-17.45.03-1024x576.png" alt="醫院管理系統">}}

左側有多種選擇，例如患者，日程安排，藥物，實驗室，成像和事件。在患者模塊中，您可以添加新的患者記錄，並查看已經添加的患者的列表。這位免費的病歷經理讓用戶可以記錄完整的患者記錄，例如名稱，地址，聯繫人，患者類型和其他基本細節。在患者列表中，還有一個搜索欄，用戶可以在其中搜索列表中的患者。此外，在調度模塊中，醫務人員可以安排約會。該模塊的接口如下圖所示。

{{< figure align=center src="images/Screenshot-2021-08-02-at-18.23.42-1024x576.png" alt="醫院信息管理系統">}}

界面顯示計劃的約會。此外，用戶可以使用過濾器查看每天，每周和每月的約會數量。右上角有一個選擇，醫療官員可以預訂新的任命。醫務官員可以插入約會詳細信息，例如開始日期，結束日期，原因等。

## 實驗室集成和藥物 {#lab}
本節介紹了此免費醫療保健軟件的兩個突出模塊的功能。藥物模塊使用戶可以針對藥物添加數據，在其中可以將藥物優先級設置為常規，緊急或ASAP等藥物優先級。同樣，還有一個用藥請求列表，官員可以在其中搜索過濾器。

{{< figure align=center src="images/Screenshot-2021-08-02-at-18.54.03-1024x576.png" alt="病歷管理系統">}}

在實驗室模塊中，醫療人員可以通過插入患者信息，訪問和類型來請求實驗室。除此之外，醫療保健工人可以添加其他註釋。同樣，實驗請求選項中有一些過濾器，用戶可以在其中執行搜索功能。

## 成像和事件 {#imaging}
成像是通過用電磁場掃描來創建事物的視覺表示。 HospitalRun提供成像記錄的管理。此外，它允許用戶創建新的成像請求，並且該模塊與患者的模塊鏈接，因為其他模塊相互關聯。同樣，用戶可以看到成像請求列表。接下來，在事件模塊中，官員可以通過插入詳細信息來報告事件。因此，用戶可以看到已經報告的事件的列表。在下圖中所示，在最後一個中也可用的事件圖形表示。

{{< figure align=center src="images/Screenshot-2021-08-02-at-19.59.11-1024x577.png" alt="健康記錄管理">}}


## 結論 {#conclusion}
這是此博客文章的結尾。實際上，大多數衛生機構都取決於手動操作。就數據安全性和完整性而言，它可能很容易受到攻擊。但是，自動化系統確保了常規醫療保健操作的基本和最關鍵的方面。因此，安裝良好的開源醫療記錄經理可以保護您的資產免受未經授權的資源的影響，並幫助您輕鬆和自信地執行常規任務。這些開源軟件同步了多個實體，例如醫生，患者，診所，實驗室，並使工作流程更容易。最重要的是，現在是時候採用開源軟件為您的醫院或診所採用最新挑戰了。您可以節省時間和精力，並專注於重要的，關鍵的任務。
最後，[Containerize.com][2]正在撰寫有關進一步開源產品的文章。因此，請與常規新聞和更新的[1]類別保持聯繫。

## 探索
您可能會發現以下鏈接相關：
  * [OpenEmr][13]
  * [OpenMrs][14]
  * [醫院][15]
  * [開放醫院][16]
  * [孤獨][17]
  * [前5名開源患者健康記錄軟件][3]
  * [功能探索醫療保健解決方案OpenEMR][4]
  * [如何在local主機上建立eHealth System醫院][18]
  * [在線醫療保健軟件如何賦予醫療保健行業][5]

  
[1]: https://products.containerize.com/healthcare-technologies/
[2]: https://www.containerize.com/
[3]: https://blog.containerize.com/2021/03/05/top-5-open-source-patient-record-management-software/
[4]: https://blog.containerize.com/healthcare-software/open-source-medical-software-openemr-features/
[5]: https://blog.containerize.com/2021/02/12/how-online-healthcare-software-empowers-healthcare-industry/
[6]: https://products.containerize.com/healthcare-technologies/hospitalrun/
[7]: #why
[8]: #modules
[9]: #lab
[10]: #imaging
[11]: #Conclusion
[12]: https://github.com/HospitalRun/hospitalrun
[13]: https://products.containerize.com/health-care-technologies/openemr
[14]: https://products.containerize.com/health-care-technologies/openmrs
[15]: https://products.containerize.com/healthcare-technologies/hospitalrun
[16]: https://products.containerize.com/healthcare-technologies/open-hospital
[17]: https://products.containerize.com/healthcare-technologies/solismed
[18]: https://blog.containerize.com/healthcare-software/how-to-install-hospitalrun-hospital-management-system/
