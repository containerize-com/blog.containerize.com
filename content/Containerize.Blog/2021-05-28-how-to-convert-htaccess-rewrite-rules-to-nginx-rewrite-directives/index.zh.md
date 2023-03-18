---
title: "如何将HTACCESS重写规则转换为NGINX重写指令" 
seoTitle: "如何将HTACCESS重写规则转换为NGINX重写指令" 
description: "NGINX不支持.htaccess重写规则，因此开发人员必须将这些规则转换为NGINX重写指令。让我们学习如何执行此转换。" 
date: Fri, 28 May 2021 13:54:20 +0000
author: Assad Mahmood
summary: "NGINX不支持HTACCESS重写规则，而开发人员需要将这些规则转换为NGINX重写指令。让我们学习如何进行此转换。" 
url: /zh/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
categories: ['Web Server Solution Stack']
---

## nginx不支持HTACCESS重写规则，开发人员需要将这些规则转换为NGINX重写指令。让我们学习如何进行此转换。

{{< figure align=center src="images/htaccess-rewrite-rules-to-nginx-location-directives.png" alt="将.htaccess重写规则转换为nginx指令">}}

在上一个教程中，我们了解了[如何在Ubuntu上使用Nginx安装多个PHP版本[1]。 Apache是​​最受欢迎的Web服务器之一，但最近，Nginx已成为Apache的竞争对手。但是NGINX不支持HTACCESS重写规则。因此，在本文中，我们将学习如何将HTACCESS重写规则转换为NGINX重写指令。让我们开始吧！
  *** [nginx重写规则] [2] **
  *[**。htaccess重写规则**] [3]
  *[**将.htaccess重写规则转换为nginx重写指令**] [4]
  *[**结论**] [5]

## nginx重写规则{#nginx}
重写规则在客户端请求中更改部分或所有URL，通常是为了通知客户，他们要求的资源现在位于其他位置，或控制NGINX内的处理流。例如，当需要动态生成内容时，将请求转发到应用程序服务器。 Try_files指令通常用于此目的。
通用nginx重写的两个指令是_return_和_rewrite_，_try_files Directive_是一种将请求直接引向应用程序服务器的方便方法。
返回指令是两个通用指令的简单。您将返回包装在服务器或位置上下文中。
例如，这是一个非常简单的示例，它使用_return_指令将客户端重定向到新的域名
```
server {
    listen 80;
    listen 443 ssl;
    server_name www.old-name.com;
    return 301 $scheme://www.new-name.com$request_uri;
}
```
但是，如果您需要在URL之间执行复杂的区别，在原始URL中捕获元素，或在路径中更改或添加元素怎么办？在这种情况下，您可以使用_rewrite_指令。
这是使用重写指令的示例NGINX重写规则。它匹配以字符串 /歌曲开头的URL，然后在路径后面的某个地方包含 /媒体 /或 /音频 /目录。它用 / mp3 /替换这些元素，并添加适当的文件扩展名，.mp3或.ra。 $ 1和2美元的变量捕获了没有改变的路径元素。例如，/download/download/cdn-west/media/file1 sust/download/cdn-west/mp3/file1.mp3。如果文件名（例如.flv）上有一个扩展名，则表达式将其剥离并用.mp3替换。
```
server {
    # ...
    rewrite ^(/songs/.*)/media/(\w+)\.?.*$ $1/mp3/$2.mp3 last;
    rewrite ^(/songs/.*)/audio/(\w+)\.?.*$ $1/mp3/$2.ra  last;
    return  403;
    # ...
}
```

## .htaccess重写规则{#apache}
.htaccess文件控制可以访问，阻止和重定向网站的多种方式。它使用一系列或多个.htaccess重写规则来执行此操作。这些重写由Apache的Mod_rewrite模块执行。
mod_rewrite提供了一种基于正则表达式规则动态修改传入URL请求的方法。这使您可以以任何喜欢的方式将所有URL映射到您的内部URL结构上。这也用于使您的外部URL清洁，然后将其映射到外观丑陋的内部URL上。
例如，以下内容.htaccess重写规则将非www url列为www url。
```
RewriteEngine On
RewriteCond %{HTTP_HOST} ^yourdomain.com [NC]
RewriteRule ^(.*)$ http://www.yourdomain.com/$1 [L,R=301]
```

## 转换.htaccess重写规则到nginx重写指令{#convert}
正如我们在上面的示例中显示的那样，将非www URL重定向到www url，让我们将相同的.htaccess重写规则转换为nginx重写指令。
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
因此，在这里，我们创建了两个单独的_server_块，一个用于_yourdomain.com_，另一个用于_www.yourdomain.com_。在_server_ block中，_yourdomain.com_我们使用_return_指令将非www url重定向到www url。
我们使用返回指令执行的重定向也可以使用重写指令进行，但不建议进行。
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
为了更加清晰，让我们将WordPress HTACCESS规则转换为nginx try_files指令。
[WordPress.org分发] [6]基本默认**。htaccess **文件，带有以下内容。 HTACCESS重写规则可以实现漂亮的永久链接：
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
这是转换后的nginx try_files指令
```
location / {
    try_files $uri $uri/ /index.php?$args;
}
```

## 结论{#conclusion}
在本教程中，我们探索了Apache的.htaccess重写规则，以及如何将这些.htaccess重写规则转换为NGINX重写指令。我们进一步探索了可用于重写URL的不同NGINX指令。我们还给出了nginx和apache的示例重写规则。希望该教程对您有帮助。

## 探索
  * [如何在Ubuntu上使用nginx安装多个PHP版本] [1]
  * [如何设置和配置为反向代理] [7]
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[2]: #nginx
[3]: #apache
[4]: #convert
[5]: #conclusion
[6]: https://codex.wordpress.org/htaccess
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
