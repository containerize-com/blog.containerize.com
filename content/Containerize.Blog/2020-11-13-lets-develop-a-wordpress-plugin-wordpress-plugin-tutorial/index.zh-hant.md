---
title: "讓我們開發一個WordPress插件| WordPress插件教程" 
seoTitle: "讓我們開發一個WordPress插件| WordPress插件教程" 
description: "對WordPress插件開發感興趣嗎？遵循此WordPress插件教程，該教程描述了創建基本WordPress插件的完整步驟。" 
date: Fri, 13 Nov 2020 13:30:43 +0000
author: Assad Mahmood
summary: "WordPress插件是您在網站上激活的模塊，以提供一系列功能或元素。這些插件經過SEO優化並提供自動化。" 
url: /zh-hant/lets-develop-a-wordpress-plugin-wordpress-plugin-tutorial/
categories: ['Blogging']
---

## WordPress插件是您在網站上激活的模塊，以提供一系列功能或元素。這些插件經過SEO優化並提供自動化。

{{< figure align=center src="images/Screenshot-2020-11-13-at-6.08.54-PM-1024x537.png" alt="WordPress插件教程">}}


## 概述
WordPress是企業級開源博客平台。 A **WordPress插件** 是獨立的代碼集，可增強和擴展WordPress的功能。通過使用PHP，HTML，CSS，JavaScript/jQuery的任何組合。插件可以為您的網站的任何部分添加新功能。
您可以添加到網站的功能取決於每個特定的插件要執行的操作。可以開發WordPress插件來執行任何操作。從一個小任務到執行許多操作並具有自己的界面的全型應用程序。插件與您的主題不同，並使用掛鉤，過濾器，短代碼，小部件和自定義代碼獨立工作來執行其功能。
在此WordPress插件教程中，我們將學習如何創建第一個WordPress插件。創建插件的最重要原因是，它允許您將自己的代碼與WordPress核心代碼分開。
* **[要求][1]** 
* **[插件開發的基礎][2]** 
* **[如何創建WP插件？][3]** 
* **[結論][4]** 

## 要求 {#requirements}

* 最新版本的WordPress
* 了解PHP / MySQL
* 了解HTML / CSS和JavaScript

## 插件開發的基礎知識 {#basics}

讓我們花點時間談論插件開發的一些關鍵方面。對這些概念的工作方式有深入的了解將有助於您構建易於使用和可維護的功能。

###行動
**操作鉤 **是**WordPress****插件中非常有用的工具，它們用於在主題或插件的特定位置執行功能（** Action**）。 WordPress在整個核心功能中都定義了數十種動作，每個動作由唯一名稱組成。有關更多詳細信息[閱讀][5]。

###過濾器
WordPress過濾器是一個接受變量（或一系列變量）並在修改後將其返回的鉤子。這些過濾器經常使用，因此您可以操縱默認信息。有關更多詳細信息[閱讀][6]。

###短代碼
快速代碼是可用於與內容進行動態相互作用的宏。即，創建一個畫廊，從附加到帖子的圖像或渲染視頻。結果，它們是保持內容清潔和語義的一種寶貴方式，同時允許最終用戶進行某種編程性更改其內容呈現的能力。有關更多詳細信息[閱讀][7]。

###小部件
小部件很重要，因為它們在提供易於使用的界面時為您提供了執行插件代碼的另一種方法。由於大多數主題都會支持一個或多個側邊欄；添加自己的小部件將使您可以快速訪問主題中顯示信息。

## **如何創建WP插件？** {#create}

在WordPress插件教程的這一部分中，您需要做的就是創建一個文件夾，然後創建一個帶有一行內容的單個文件。導航到 **wp-content/插件**文件夾，並創建一個名為 **mytestplugin** 的新文件夾。在此新文件夾中，創建一個名為**mytestplugin.php** 的文件。在文本編輯器中打開文件，並粘貼其中的以下信息：
```
<?php
   /*
   Plugin Name: My Test Plugin
   Plugin URI: http://my-test-plugin.com
   description: >-
  a plugin to create test plugin development
   Version: 1.2
   Author: Mr. Test
   Author URI: http://my-test-plugin.com
   License: GPL2
   */
?>
```
現在，您可以進入後端激活插件。僅此而已，儘管此插件無濟於事。但是，它是一個活躍的，功能齊全的插件。開發插件時的最佳實踐是將代碼整齊地將您的代碼分離為適當的文件和文件夾。
為了證明，讓我們在測試插件中添加功能，該功能通過存儲每個帖子的次數來跟踪文章的普及。

###存儲頁面視圖
```
function add_page_views() {
   if(is_single()) {
      global $post;
      $current_views = get_post_meta($post->ID, "page_views", true);
      if(!isset($current_views) OR empty($current_views) OR !is_numeric($current_views) ) {
         $current_views = 0;
      }
      $new_views = $current_views + 1;
      update_post_meta($post->ID, "page_views", $new_views);
      return $new_views;
   }
}
```
到目前為止，在此WordPress插件教程中都很好。但是此功能從未被調用，因此實際上不會使用它。這是鉤子進來的地方。您可以進入主題文件並從那里手動調用該功能。但是，如果您更改了主題，那麼您將失去該功能，從而擊敗整個目的。一個名為 **wp_head**的掛鉤，該掛鉤在大多數主題中都存在之前運行，因此我們可以將功能設置為在**wp_head** 運行時運行，就像這樣：
```
add_action("wp_head", "add_page_views");
```

###顯示頁面視圖
現在，我們將創建另一個函數，該功能返回我們已經存儲在上述功能中的頁面視圖。讓我們看一下代碼：
```
function get_page_views() {
   global $post;
   $current_views = get_post_meta($post->ID, "page_views", true);
   if(!isset($current_views) OR empty($current_views) OR !is_numeric($current_views) ) {
      $current_views = 0;
   }

   return $current_views;
}
```
到目前為止，我們剛剛檢索了觀點數量。現在，讓我們展示。您可能會認為它必須很複雜。但是，這很簡單：
```
echo get_page_views() . “view(s)”
```

## 結論 {#conclusion}

這是該WordPress插件教程的結尾。通過遵循本文並僅使用少數功能，我們創建了一個基本插件來跟踪我們最受歡迎的帖子。我們可以進行很多改進，但目的只是使您對基礎知識感到滿意。此外，通過學習WordPress開發的一些模式（插件，掛鉤等），您還可以獲得在非媒介環境中為您服務的技能。還有許多與開源博客平台和開源CMS相關的博客文章。您可以在下面的探索部分中找到。如果您希望為您的業務部署開源博客平台，那麼這篇博客文章確實可以為您提供幫助。
最後，[Containerize.com][8]正在撰寫有關進一步開源產品的文章。因此，請與[Blogging][9]和[商業智能軟件][10]類別保持聯繫，以進行常規新聞和更新

## 探索
  * [如何為WordPress安裝MATOMO | WordPress教程][11]
  * [通過免費的civicrm wordpress集成增強潛在客戶][12]
  * [如何在WordPress中安裝插件|香草論壇][13]
  * [Joomla vs drupal | CMS比較在2021年][14]
  * [在2021年選擇開源軟件之前需要審查的內容][15]



[1]: #requirements
[2]: #basics
[3]: #create
[4]: #conclusion
[5]: https://developer.wordpress.org/plugins/hooks/
[6]: https://developer.wordpress.org/plugins/hooks/filters/
[7]: https://developer.wordpress.org/plugins/shortcodes/
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/blogging/
[10]: https://products.containerize.com/business-intelligence/
[11]: https://blog.containerize.com/blogging/how-to-install-matomo-for-wordpress-wordpress-tutorial/
[12]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[13]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[14]: https://blog.containerize.com/content-management/joomla-vs-drupal-cms-comparison-in-2021/
[15]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
