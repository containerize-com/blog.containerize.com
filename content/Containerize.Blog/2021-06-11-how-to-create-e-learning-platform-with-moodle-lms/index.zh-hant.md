---
title: "如何使用Moodle LMS創建電子學習網站" 
seoTitle: "如何使用Moodle LMS創建電子學習網站" 
description: "Moodle LMS是一種用於創建在線學習平台的免費開源電子學習解決方案。查看指南以熟悉它。" 
date: Fri, 11 Jun 2021 22:35:00 +0000
author: Masood Anwer
summary: "使用開源電子學習平台構建在線學習平台。本文解釋瞭如何使用Moodle LMS創建遠程學習網站。" 
url: /zh-hant/how-to-create-e-learning-platform-with-moodle-lms/
categories: ['Learning Management System']
---

## 使用開源電子學習平台構建在線學習平台。本文解釋瞭如何使用Moodle LMS創建遠程學習網站。

{{< figure align=center src="images/moodle-banner.png" alt="Moodle LMS">}}

我們遭受了Covid 19的困擾一年多。世界的每個部分都被鎖定。它對世界各地的人們的生活和企業都有負面影響。更重要的是，它對我們的教育系統產生了重大影響。教育機構必須過渡到在線學習，以便學生可以在自己的家中繼續接受教育。沒有堅實且安全的電子學習平台，在線學習將是不可能的。在本文中，我們將研究 **Moodle開源** 項目，該項目使教師和學生能夠在任何地方進行交流和學習。
我們將在本文中介紹以下各節，以**使用Moodle創建電子學習網站**。
  * [先決條件][1]
  * [什麼是Moodle？][2]
  * [Moodle的功能][3]
  * [Moodle安裝][4]
  * [結論][5]

## 先決條件 {#prerequisites}
如果還沒有，則必須在服務器上安裝和配置LAMP環境。

## 什麼是情緒？   {#什麼}
[**moodle **][6]是一種免費的開源電子學習解決方案。 Moodle代表模塊化的面向對象的動態學習環境。它的創建是為了使教育者，管理員和學習者一個電子學習平台，以創建和提供個性化的學習環境。此外，Moodle是學校**，大學和公司專業培訓課程的合適 **LMS。它是創建LMS網站的流行** 遠程學習**解決方案之一。此外，Moodle為教師和學生提供豐富的工具和協作學習環境。 Moodle擁有一個用於iPhone，Android，Windows手機和平板電腦的移動應用程序。移動應用程序可從世界各地的任何位置使用。這個**自託的LMS **用PHP編寫，並將數據存儲在MySQL/PostgreSQL數據庫中。它帶有廣泛的用戶和開發人員文檔。所有源代碼均可在[**  github**][7]上獲得。此開源的許可證**電子學習解決方案**是GPLV3+。

## Moodle的功能 {#features}
Moodle具有許多功能。但是，在本文中，我們將介紹以下一些關鍵功能。
**協作工具和活動**：論壇，Wiki，詞彙表，數據庫活動和其他工具允許用戶一起協作和學習。情緒課程中的一組元素稱為一項活動。一項活動通常是學生與其他學生和/或老師互動的學生所做的事情。
**跟踪進度**：教育者和學生可以使用各種跟踪特定活動或材料以及課程級別的工具來跟踪他們的進度和完成。有幾種方法可以跟踪學生在Moodle中的進步，例如成績，能力，活動完成，課程完成，徽章，課程報告和分析。
**插件管理**：插件允許您通過添加新功能來擴展Moodle的基本功能。用戶可以為各種任務添加插件，例如其他活動，新的測驗問題類型，新報告，系統連接器等。管理接口可用於安裝和禁用插件。
**課程管理**：創建和管理滿足各種需求的課程。教師主導的課程，自定為課程，混合課程和完全在線課程都是選項。
**同行和自我評估**：研討會和調查是內置的活動，鼓勵學生查看，評分和審查自己和其他同學的工作。

## Moodle安裝 {#moodle}
請按照以下逐步指南在Ubuntu上安裝Moodle LMS 18.04。
  *首先，運行下面的命令以更改DirectLory下載並下載Moodle。
```
cd /var/www/
sudo git clone -b MOODLE_38_STABLE git://git.moodle.org/moodle.git moodle
```
  *運行以下命令創建數據目錄並設置權限。
```
sudo mkdir -p /var/www/moodledata
sudo chown -R www-data:www-data /var/www/
sudo chmod -R 755 /var/www/
sudo chown www-data:www-data /var/www/moodledata
```
  *為Moodle網站創建Nginx配置文件。
```
sudo nano /etc/nginx/sites-available/moodle
```
  *將以下代碼添加到其中並保存文件。
```
server {
   listen 80;
   listen [::]:80;
   root /var/www/moodle;
   index  index.php index.html index.htm;
   server_name  example.com;

   client_max_body_size 100M;
   autoindex off;
   location / {
       try_files $uri $uri/ =404;
   }

   location /dataroot/ {
     internal;
     alias /var/www/moodledata/;
   }

   location ~ [^/].php(/|$) {
       include snippets/fastcgi-php.conf;
       fastcgi_pass unix:/run/php/php7.4-fpm.sock;
       fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
       include fastcgi_params;
   }
}
```
  *創建符號鏈接以啟用新創建的網站。
```
sudo ln -s /etc/nginx/sites-available/moodle /etc/nginx/sites-enabled/
```
  *重新啟動NGINX Web服務器。
```
sudo systemctl restart nginx
```
  *接下來，打開瀏覽器並鍵入http://example.com。將“ example.com”替換為服務器的實際域名或IP。
  *現在，您可以看到安裝嚮導。選擇一種語言，然後單擊下一個按鈕。

{{< figure align=center src="images/moodle-install-1-1024x408.png" alt="Moodle-選擇一種語言">}}

  *您需要查看並確保網站URL，MOODLE根目錄和數據目錄路徑正確。您還可以更改“數據目錄”路徑，並且它應該超出Moodle代碼目錄以進行安全性。單擊下一個按鈕。

{{< figure align=center src="images/moodle-install-2-1024x529.png" alt="Moodle-設置數據目錄路徑">}}

  *在此步驟中選擇數據庫驅動程序。但是，您可以使用已選擇的一個，然後單擊下一個按鈕。

{{< figure align=center src="images/moodle-install-3-1024x413.png" alt="Moodle-選擇數據庫驅動程序">}}

  *提供數據庫設置，例如數據庫主機，數據庫名稱，數據庫用戶，數據庫密碼和表格前綴。單擊下一個按鈕。

{{< figure align=center src="images/moodle-install-4.png" alt="Moodle-數據庫設置">}}

  *單擊確認按鈕以同意條款和條件。
  *您可以看到所需的PHP擴展名列表。但是，您將必須安裝任何缺少的附加組件。單擊繼續按鈕以移動下一步。
  *此時，您需要填寫管理員數據以創建一個帳戶。單擊“更新配置文件”按鈕。
  *提供網站的信息，例如完整的站點名稱，網站的簡短名稱，前頁面摘要，默認時區和無需發送電子郵件。單擊“保存更改”按鈕。
  *通過提供網站名稱，語言，區域，電子郵件地址等信息來完成您的網站註冊。

## 結論 {#conclusion}
我們了解了Moodle及其在本文中的主要特徵。我們還逐步介紹了設置 **Moodle lms** 的分步方法，以**創建電子學習網站**。您可以回顧Moodle的[**官方文檔**][8]，以更加滿意各種功能，例如課程，學生註冊，跟踪進度等。希望您發現這篇文章在創建LMS網站上很有用。
最後，[ **containerize.com** ][9]正處於撰寫有關更多最新開源產品的博客文章的一致過程。因此，與此[**學習管理系統**][10]類別保持聯繫，以進行最新更新。

## 探索
您可能會發現以下鏈接相關：
  *[**開源LMS工具**][11]
  *[ **Moodle  - 電子學習系統** ][12]

  
[1]: #Prerequisites
[2]: #What
[3]: #Features
[4]: #Moodle
[5]: #Conclusion
[6]: https://moodle.org/
[7]: https://github.com/moodle/moodle
[8]: https://docs.moodle.org/
[9]: https://containerize.com
[10]: https://blog.containerize.com/category/learning-management-system/
[11]: https://products.containerize.com/lms/
[12]: https://products.containerize.com/lms/moodle/
