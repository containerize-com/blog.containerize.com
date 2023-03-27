---
title: "如何安裝醫院|醫院管理系統" 
seoTitle: "如何安裝醫院|醫院管理系統" 
description: "本文可幫助您在Localhost上安裝醫院。使用功能豐富的開源，免費醫院管理系統自動化醫療流程。" 
date: Fri, 19 Feb 2021 09:24:09 +0000
author: muhammadmustafa
summary: "自我託管的醫療保健解決方案，以促進臨床醫生和患者。讓我們學習如何按下簡單步驟在Local主機上部署免費醫院。" 
url: /zh-hant/how-to-install-hospitalrun-hospital-management-system/
categories: ['Healthcare Software']
---

##自託管醫療保健解決方案，以促進臨床醫生和患者。讓我們學習如何按下簡單的步驟在本地主機上部署免費醫院。

{{< figure align=center src="images/hospitalrun.png" alt="醫院管理系統">}}


## 概述
我們最近發表了一篇博客文章，介紹了[在線醫療軟件如何增強醫療保健行業][1]，該文章描述了開源醫院管理系統對醫療保健行業的影響。隨著時間的流逝，全球醫療保健軟件行業正在獲得值得的價值。事實是，技術改變了生活的每個領域。患者和工作人員的數量太高了，以至於管理如此龐大的數據已成為麻煩。另一方面，每天都有許多耗時的任務，醫療保健實體反复執行這些任務。因此，開源源社區開發了開源醫療軟件，這些軟件帶有許多有用的模塊來滿足醫療保健需求。
開源醫療軟件是為了管理有關其病史的患者記錄以及醫院管理的規定。此外，開源醫療保健軟件正在利用人工智能提供高級服務。現在，大多數疾病治療方法都被該軟件處理，不僅可以診斷出問題，而且還提供了治療中的幫助。但是，有許多用於醫院的新興軟件。在此博客文章中，我們將介紹以下幾點。
* [ **什麼是醫院？** ][2]
* [ **醫院的特徵是什麼** ][3]
* [ **醫院的安裝步驟？** ][4]
* [ **結論** ][5]

## 什麼是醫院？ {#intro}

HospitalRun是一種免費的開源醫院信息管理系統。這種免費的醫療保健解決方案是環境友好的，因為用戶可以充分利用此免費軟件，即使沒有互聯網連接。它提供了許多功能，例如用戶管理，患者註冊，約會，計費系統，患者出院系統等。此開源EHealth系統的用戶界面是合乎邏輯的，用戶可以輕鬆地瀏覽不同的元素。此外，很容易設置並提供Docker映像，開發人員可以在其中使用Docker映像部署它。
這個 **醫院管理系統** 提供了整合實驗室的規定，以集中患者的病歷。此外，它還使用戶可以保持患者就診，藥物和評估的記錄。此EHealth Record System是安全，靈活的，並提供了與第三方應用程序的集成。有一個非常充滿活力的社區為醫院提供支持。此外，還有一個完整的患者出院系統。此開源醫療軟件完全用JavaScript編寫。此外，還有有關開發和部署的全面文件。實際上，該開源醫療軟件為支持部門，臨床部和行政部門等不同部門提供不同的儀表板。所有這些角色都具有不同級別的許可和訪問權限。

## 醫院的特徵是什麼？ {#features}

在本節中，我們將介紹此EHealth系統的以下一些關鍵功能。
* **自我託管** ：醫院帶有自我託管功能，需要更少的努力來部署服務器。
* **預約時間表** ：此衛生系統使用戶可以安排約會。儀表板上有一個完整的預約模塊。此外，用戶可以在過濾器的幫助下搜索約會。
* **患者出院系統** ：該醫院管理系統保持了出院患者的記錄。
* **藥物管理** ：此EHealth記錄系統使用戶能夠記錄特定患者藥物的完整數據。
* **患者記錄管理** ：患者記錄管理有一個完整的模塊。用戶可以記錄新患者的詳細信息，以醫學，報告和探訪等完整的病史錄取患者。
* **自定義計費系統** ：此開源醫療保健軟件中有一個豐富的計費系統。它允許用戶生成和管理髮票，並提供完整的詳細信息，例如實驗室價格，病房費用，成像價格等。
* **電子病歷** ：此開源醫療軟件提供了維護醫療和管理記錄的所有必要模塊。
* **靈活** ：醫院跑步且可擴展足夠的擴展，開發人員可以擴展其功能以滿足所需的功能。

## 醫院跑步的安裝步驟？ {#steps}

博客文章的這一部分描述了醫院跑步的安裝步驟。
在開始之前，首先安裝以下先決條件：
  * [Docker][6]
  * [Docker-Compose][7]
安裝先決條件後，從此[鏈接][8]下載源代碼。
之後，打開終端並運行以下命令：
CD通用
CD服務器
現在，更改\'conf/initCouch.sh \ s的第8,9行上的密碼，並在_config-demo.js_的第7行上更改密碼。
然後，運行以下命令來製作構建並運行應用程序：
_docker-compose build && docker-compose _
之後，它將旋轉Docker容器，如下圖所示：

{{< figure align=center src="images/Screenshot-2021-02-16-at-23.45.48-1024x554.png" alt="醫院管理系統">}}

最後，您可以在http：// localhost/＃/login的瀏覽器中訪問此醫療解決方案。它將顯示以下登錄屏幕。

{{< figure align=center src="images/Screenshot-2021-02-16-at-23.46.35-1024x676.png" alt="醫院管理系統">}}


## 結論 {#結論}

這是本教程文章的結尾。該患者記錄系統確實有助於自動化 **醫療服務** 。現代開源醫院管理系統配備了數據分析工具，可幫助醫療保健工人採取必要的措施以提供更好的醫療機構。如果您正在認真尋求為您的醫院/診所部署eHealth系統，那麼這篇博客文章將真正為您提供幫助。這些開源解決方案具有成本效益，因為它們與實驗室和其他診所集成在一起，並通過計算機化每個過程來最大程度地減少文書工作。開源醫療保健解決方案允許用戶對所有醫療保健操作的視覺效果，例如患者的藥物，出院，報告和計費管理。此外，您可以專注於其他重要任務，例如資源計劃和風險評估。但是，下面的“探索”部分中提到了許多其他針對醫院的企業級軟件。
最後，* ***[Containerize.com][9]****旨在在其他開源產品上寫入。因此，與此[10]類別保持聯繫以獲取最新更新。

## 探索
您可能會發現以下鏈接相關：
  * [OpenEmr][11]
  * [OpenMRS][12]
  * [Hospital Run][13]
  * [開放醫院][14]
  * [孤獨][15]
  * [在2021年選擇開源軟件之前需要審查的內容][16]
  * [功能探索醫療記錄經理醫院Run][17]
  * [前5名開源患者健康記錄軟件][18]
  * [對醫療健康解決方案的特徵探索openemr][19]
  * [如何在local主機上建立eHealth System醫院][20]
  * [在線醫療保健軟件如何賦予醫療保健行業][1]



[1]: https://blog.containerize.com/2021/02/12/how-online-healthcare-software-empowers-healthcare-industry/
[2]: #intro
[3]: #features
[4]: #steps
[5]: #Conclusion
[6]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fdocs.docker.com%2Finstall%2F&h=b220f083ceda72a13e4e77091860b9761ee26229422b3c2590128582d7227f81&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[7]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fdocs.docker.com%2Fcompose%2Finstall%2F&h=58cfa40eb1b8827698a31cbe9ac3661def22ae2b5c28eb832c19da2e3b5a5b0d&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[8]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fhospitalrun.fra1.cdn.digitaloceanspaces.com%2Fdeployments%2Fhr-1.0.0-beta-generic.zip&h=3e79da04f5c6cd968d616537e74f30eef38c16590dc0cbc1945ec8ad214de9c0&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/health-care-technologies
[11]: https://products.containerize.com/health-care-technologies/openemr
[12]: https://products.containerize.com/health-care-technologies/openmrs
[13]: https://products.containerize.com/healthcare-technologies/hospitalrun
[14]: https://products.containerize.com/healthcare-technologies/open-hospital
[15]: https://products.containerize.com/healthcare-technologies/solismed
[16]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
[17]: https://blog.containerize.com/healthcare-software/features-exploration-of-medical-record-manager-hospitalrun/
[18]: https://blog.containerize.com/2021/03/05/top-5-open-source-patient-record-management-software/
[19]: https://blog.containerize.com/healthcare-software/open-source-medical-software-openemr-features/
[20]: https://blog.containerize.com/healthcare-software/zh-hant/how-to-install-hospitalrun-hospital-management-system/
