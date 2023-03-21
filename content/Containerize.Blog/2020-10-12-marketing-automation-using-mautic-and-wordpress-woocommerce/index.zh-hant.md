---
title: "與Mautic和WooCommerce集成的營銷自動化" 
seoTitle: "與Mautic和WooCommerce集成的營銷自動化" 
description: "Mautic和WooCommerce集成允許將聯繫信息從WordPress站點發送到Mautic。這有助於通過Mautic App推銷產品。" 
date: Mon, 12 Oct 2020 06:09:14 +0000
author: bilalahmed
summary: "共同使用Mautic和WordPress WooCommerce擁有銷售。通過從WordPress到Mautic獲取客戶的數據來自動化營銷過程。" 
url: /zh-hant/marketing-automation-using-mautic-and-wordpress-woocommerce/
categories: ['Blogging', 'Marketing Automation']
---

##使用Mautic和WordPress WooCommerce共同擁有銷售。通過從WordPress到Mautic獲取客戶的數據來自動化營銷過程。

{{< figure align=center src="images/banner-mauticWP-1200x628-1-1024x536.png" alt="使用Mautic-WooCommerce集成的營銷自動化">}}


## 概述：
Mautic-WooCommerce集成提供了一種簡單的方法，可以在Mautic應用中獲取所有聯繫人。然後使用這些聯繫人，您可以根據自己的要求創建營銷活動。 Mautic是一種很棒的營銷工具，可為您提供全面控制營銷活動。
Mautic是一種開源和免費的營銷自動化解決方案。它用於創建營銷活動，細分市場，表格，報告等。
WooCommerce是WordPress的開源電子商務插件。目前，它是世界各地最多使用的電子商務解決方案。有數百種可用於WooCommerce的附加組件可根據您的需求使用。
有一個可用於Mautic和WordPress的插件，可提供營銷自動化解決方案。請按照以下步驟使用插件將WooCommerce與Mautic集成[與Mautic for WooCommerce  - 開源營銷自動化。][1]
該博客將介紹以下各節：
  * [WordPress插件配置][2]
  * [Mautic配置][3]
  * [最終想法][4]

## WordPress插件配置 {#WordPress}
  1.轉到插件。
  2.單擊“添加新”。
  3.搜索“**與Mautic集成以進行WooCommerce**”。
  4.找到插件後，單擊“立即安裝”。
  5.安裝後，單擊“激活”。
  6.然後轉到WooCommerce-> Mautic-> Connect Tab。
  7.用以下數據填寫表格：
* 基礎網址。
* 客戶端ID。
* 秘密ID。
  8.所有這些字段都將在配置Mautic應用程序上進行，這將在下一部分中進行解釋。

{{< figure align=center src="images/woocommerce-1024x665.png" alt="Mautic和WordPress集成">}}


## Mautic配置： {#mautic}
  1.在您的卑鄙站點中，轉到設置。
  2.轉到配置。
  3.從API設置啟用API。
  4.轉到API憑據。
  5.單擊“ new”，輸入您喜歡的任何名稱以及WordPress網站的完整URL，即[http://yourwordpresssite.com/wp-admin/admin/admin.php][5]
  6.點擊保存並關閉。
  7.它將創建公共和私鑰。
  8.轉到您的WordPress網站，找到您之前安裝的Mautic插件。
  9.輸入您從Mautic網站創建的公共和秘密密鑰。
 10.選擇oauth1或oauth2（與您在Mautic中選擇的相同），然後將註冊用戶發送給是。
 11.保存並發布插件。
 12.之後，您將能夠授權WordPress網站。
 13. WordPress將重新指導到Mautic實例授予授權。
 14.單擊“授權”，僅此而已。
 15.您將開始接觸到卑鄙的網站。

{{< figure align=center src="images/mautic-1024x622.png" alt="Mautic和WordPress集成步驟">}}


##最終想法： {#final}
Mautic-WooCommerce集成可以幫助您實現營銷目標。這種集成是電子商務營銷自動化的最佳解決方案之一。使用WordPress，您可以輕鬆獲得很多客戶，然後使用Mautic創建無限的廣告系列來定位這些客戶，並使其有關您的產品/服務的最新信息，這肯定會擁有銷售額。

## 探索：
您可能會發現以下鏈接相關：
  * [wodpress][6]
  * [Mautic][7]
  * [如何設置Mautic  -  Facebook集成][8]
  * [Drupal Mautic整合以自動化鉛培養][9]
  * [使用Mautic和WordPress WooCommerce的營銷自動化][10]
  * [如何在Mautic中設置營銷活動][11]

  
[1]: https://href.li/?https://wordpress.org/plugins/enhanced-woocommerce-mautic-integration/
[2]: #wordpress
[3]: #mautic
[4]: #final
[5]: https://href.li/?http://yourWordpressSite.com/wp-admin/admin.php
[6]: https://products.containerize.com/blogging/wordpress
[7]: https://products.containerize.com/marketing-automation/mautic
[8]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[9]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[10]: https://blog.containerize.com/blogging/zh-hant/marketing-automation-using-mautic-and-wordpress-woocommerce/
[11]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
