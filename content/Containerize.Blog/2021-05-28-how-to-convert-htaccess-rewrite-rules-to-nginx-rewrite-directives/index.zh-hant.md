---
title: "如何將HTACCESS重寫規則轉換為NGINX重寫指令" 
seoTitle: "如何將HTACCESS重寫規則轉換為NGINX重寫指令" 
description: "NGINX不支持.htaccess重寫規則，因此開發人員必須將這些規則轉換為NGINX重寫指令。讓我們學習如何執行此轉換。" 
date: Fri, 28 May 2021 13:54:20 +0000
author: Assad Mahmood
summary: "NGINX不支持HTACCESS重寫規則，而開發人員需要將這些規則轉換為NGINX重寫指令。讓我們學習如何進行此轉換。" 
url: /zh-hant/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
categories: ['Web Server Solution Stack']
---

## nginx不支持HTACCESS重寫規則，開發人員需要將這些規則轉換為NGINX重寫指令。讓我們學習如何進行此轉換。

{{< figure align=center src="images/htaccess-rewrite-rules-to-nginx-location-directives.png" alt="將.htaccess重寫規則轉換為nginx指令">}}

在上一個教程中，我們了解了[如何在Ubuntu上使用Nginx安裝多個PHP版本[1]。 Apache是​​最受歡迎的Web服務器之一，但最近，Nginx已成為Apache的競爭對手。但是NGINX不支持HTACCESS重寫規則。因此，在本文中，我們將學習如何將HTACCESS重寫規則轉換為NGINX重寫指令。讓我們開始吧！
*  **[nginx重寫規則][2]**  
* [  **。htaccess重寫規則**  ][3]
* [  **將.htaccess重寫規則轉換為nginx重寫指令**  ][4]
* [  **結論**  ][5]

## NGINX重寫規則 {#nginx}

重寫規則在客戶端請求中更改部分或所有URL，通常是為了通知客戶，他們要求的資源現在位於其他位置，或控制NGINX內的處理流。例如，當需要動態生成內容時，將請求轉發到應用程序服務器。 Try_files指令通常用於此目的。
通用nginx重寫的兩個指令是_return_和_rewrite_，_try_files Directive_是一種將請求直接引向應用程序服務器的方便方法。
返回指令是兩個通用指令的簡單。您將返回包裝在服務器或位置上下文中。
例如，這是一個非常簡單的示例，它使用_return_指令將客戶端重定向到新的域名
```
server {
    listen 80;
    listen 443 ssl;
    server_name www.old-name.com;
    return 301 $scheme://www.new-name.com$request_uri;
}
```
但是，如果您需要在URL之間執行複雜的區別，在原始URL中捕獲元素，或在路徑中更改或添加元素怎麼辦？在這種情況下，您可以使用_REWRITE_指令。
這是使用重寫指令的示例NGINX重寫規則。它匹配以字符串 /歌曲開頭的URL，然後在路徑後面的某個地方包含 /媒體 /或 /音頻 /目錄。它用 / mp3 /替換這些元素，並添加適當的文件擴展名，.mp3或.ra。 $ 1和2美元的變量捕獲了沒有改變的路徑元素。例如，/download/download/cdn-west/media/file1 sust/download/cdn-west/mp3/file1.mp3。如果文件名（例如.flv）上有一個擴展名，則表達式將其剝離並用.mp3替換。
```
server {
    # ...
    rewrite ^(/songs/.*)/media/(\w+)\.?.*$ $1/mp3/$2.mp3 last;
    rewrite ^(/songs/.*)/audio/(\w+)\.?.*$ $1/mp3/$2.ra  last;
    return  403;
    # ...
}
```

## .htaccess重寫規則 {#apache}

.htaccess文件控制可以訪問，阻止和重定向網站的多種方式。它使用一系列或多個.htaccess重寫規則來執行此操作。這些重寫由Apache的Mod_rewrite模塊執行。
mod_rewrite提供了一種基於正則表達式規則動態修改傳入URL請求的方法。這使您可以以任何喜歡的方式將所有URL映射到您的內部URL結構上。這也用於使您的外部URL清潔，然後將其映射到外觀醜陋的內部URL上。
例如，以下內容.htaccess重寫規則將非www url列為www url。
```
RewriteEngine On
RewriteCond %{HTTP_HOST} ^yourdomain.com [NC]
RewriteRule ^(.*)$ http://www.yourdomain.com/$1 [L,R=301]
```

## 將.htaccess重寫規則轉換為nginx重寫指令 {#convert}

正如我們在上面的示例中顯示的那樣，將非www URL重定向到www url，讓我們將相同的.htaccess重寫規則轉換為nginx重寫指令。
```
server {
    listen      80;
    server_name yourdomain.com;
    return      301 http://www.yourdomain.com$request_uri;
}
 
server {
    listen      80;
    server_name www.yourdomain.com;
    # ...
}
```
因此，在這裡，我們創建了兩個單獨的_server_塊，一個用於_yourdomain.com_，另一個用於_www.yourdomain.com_。在_server_ block中，_yourdomain.com_我們使用_return_指令將非www url重定向到www url。
我們使用返回指令執行的重定向也可以使用重寫指令進行，但不建議進行。
```
server {
    listen      80;
    server_name www.yourdomain.com yourdomain.com;
    if ($http_host = yourdomain.com) {
        rewrite (.*) http://www.yourdomain.com$1;
    }
    # ...
}
```
為了更加清晰，讓我們將WordPress HTACCESS規則轉換為nginx try_files指令。
[WordPress.org分發][6]基本默認  **。htaccess**  文件，帶有以下內容。 HTACCESS重寫規則可以實現漂亮的永久鏈接：
```
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
```
這是轉換後的nginx try_files指令
```
location / {
    try_files $uri $uri/ /index.php?$args;
}
```

## 結論 {#conclusion}

在本教程中，我們探索了Apache的.htaccess重寫規則，以及如何將這些.htaccess重寫規則轉換為NGINX重寫指令。我們進一步探索了可用於重寫URL的不同NGINX指令。我們還給出了nginx和apache的示例重寫規則。希望該教程對您有幫助。

## 探索
  * [如何在Ubuntu上使用nginx安裝多個PHP版本][1]
  * [如何設置和配置為反向代理][7]



 [1]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
 [2]: #nginx
 [3]: #apache
 [4]: #convert
 [5]: #conclusion
 [6]: https://codex.wordpress.org/htaccess
 [7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
