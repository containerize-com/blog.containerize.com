---
title: "如何使用NGINX配置实现浏览器缓存" 
seoTitle: "如何使用NGINX配置实现浏览器缓存" 
description: "网站加载的速度越快，访客越可能留下来。在本教程中，我们将通过NGINX配置实现浏览器缓存。" 
date: Thu, 03 Jun 2021 11:46:56 +0000
author: Assad Mahmood
summary: "网站加载的速度越快，访客越可能留下来。本文指导您如何使用NGINX配置实现浏览器缓存。" 
url: /zh/how-to-implement-browser-caching-with-nginx-configuration/
categories: ['Uncategorized', 'Web Server Solution Stack']
---

## 网站加载的速度越快，访问者留下的可能性就越大。本文指导您如何使用NGINX配置实现浏览器缓存。

{{< figure align=center src="images/how-to-implement-browser-caching-with-nginx-configuration-1.png" alt="如何使用Nginx配置实现Browsr缓存">}}

在我们的NGINX的教程系列中，我们介绍了[如何将NGINX用作负载平衡器][1][1]，[将nginx作为反向代理][2][2]，[使用多个PHP版本与Nginx][3]和[转换HTACCESS重新写入NGINX重写指令的规则][4]。在今天的文章中，我们介绍了一个非常重要的主题，该主题可以通过利用浏览器缓存来帮助企业改善用户的体验。在本教程中，我们将指导您如何使用NGINX的标头模块实现Nginx配置的浏览器缓存。让我们开始吧！
  *** [杠杆浏览器缓存][5] **
  *[** nginx标头模块**][6]
  *[** e-tage and if-none-Match **][7]
  *[**使用nginx配置杠杆浏览器缓存**][8]
  *[**结论**][9]

## 利用浏览器缓存{#浏览器 -  caching}
网站加载的速度越快，访问者越有可能留在网站上。具有大量图像和交互式内容的网站在后台加载使网站打开一个复杂的任务。它包括从服务器一一请求许多不同的文件。最小化这些请求的数量是加快网站的一种方法。
提高网站性能的一种方法是_LEVERALE浏览器缓存_。浏览器缓存在提高页面速度的缓存机制中起着巨大的作用。用于网站的静态文件，例如CSS，JS，JPEG，PNG等，可以保存在访问者的计算机上以供将来访问。每当访问者在您的网站上遇到新页面时，可以从访问者的计算机而不是提供的服务器访问上述文件，这将大大提高页面负载速度。

## nginx的标头模块{#header-module}
_ngx \ _http \ _headers_module_模块允许添加“ _expires_”和“ _cache-control_”标头字段和任意字段，并将其添加到响应标题中。我们可以使用标头模块设置这些HTTP标头。标题模块是核心NGINX模块，这意味着不需要单独安装即可使用。
示例配置看起来像这样：
```
expires    24h;
expires    modified +24h;
expires    @24h;
expires    0;
expires    -1;
expires    epoch;
expires    $expires;
add_header Cache-Control private;
```

## e-tag和if-none-match {#etage}
假设我们有一些带有不同扩展的测试文件，例如test.html，test.jpg，test.css和test.js。默认情况下，所有文件都具有相同的默认缓存行为。要使用以下命令检查文件的响应标头，以从我们的本地NGINX服务器请求文件，并显示响应标头：
```
curl -I http://localhost/test.html
```
```
Output: Nginx response headers
HTTP/1.1 200 OK
Server: nginx/1.14.1
Date: Fri, 03 March 2021 18:23:09 GMT
Content-Type: text/html
Content-Length: 1024
Last-Modified: Fri, 03 March 2021 18:23:09 GMT
Connection: keep-alive
<strong>ETag: "501c3b6f-401"</strong>
Accept-Ranges: bytes
```
在第二到最后一行中，您会找到_etag_头，其中包含了该请求文件的此特定修订版的唯一标识符。如果您重复执行最后一个_curl_命令，则会找到完全相同的ETAG值。
使用Web浏览器时，当用户出于任何原因而需要浏览页面或相同的文件时，将存储_etag_值并使用_if-none-match_请求标头发送回服务器。
我们可以使用以下命令在命令行上模拟这一点。
```
curl -I -H 'If-None-Match: "501c3b6f-401"' http://localhost/test.html
```
注意唯一标识符，它必须与我们从上一个_curl_调用中获得的响应值匹配。这次的响应将有所不同：
```
Output: Nginx response headers
<strong>HTTP/1.1 304 Not Modified</strong>
Server: nginx/1.14.1
Date: Thu, 04 Feb 2021 18:24:05 GMT
Last-Modified: Thu, 04 Feb 2021 18:22:39 GMT
Connection: keep-alive
<strong>ETag: "501c3b6f-401"</strong>
```
这次，nginx将以** 304的响应未修改**。它不会再次通过网络发送文件；相反，它将告诉浏览器，它可以重复使用已在本地下载的文件。这很有用，因为它减少了网络流量。但是浏览器仍然必须进行HTTP调用以从服务器中获取响应，这仍然需要一些时间。

## 使用nginx配置杠杆浏览器缓存{#nginx-configuration}
在我们的上一个示例中，我们解释了电子标签和无需匹配如何帮助您减少网络流量。但是``eTag''的问题是浏览器总是向服务器发送请求，询问它是否可以重复使用其缓存文件。而且这仍然需要时间来提出请求并接收回复。
现在，借助Nginx的标头模块，我们将使浏览器在本地缓存某些文件而无需明确询问服务器。
在您的nginx配置文件中添加以下3行到nginx中的缓存静态内容
```
expires 30d;
add_header Pragma "public";
add_header Cache-Control "public";
```
第一行指示NGINX在客户端浏览器中缓存30天（30d）。在此期间之后，用户的任何新请求都将导致缓存重新验证并从客户端浏览器进行更新。
您可以将上述行放在_location_，_server_或_http_块中。
```
location /static/ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}
```
当您将它们放置在位置块中时，只有该位置提供的内容将被缓存。在上述情况下，只有对 /静态 /的请求将被缓存。
如果要缓存特定的文件类型，则可以使用位置块进行操作。
```
location ~* \.(js|jpg|gif|png|css)$ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}

```
在上面的示例中，我们正在缓存各种文件类型，例如JS，JPG，CSS等。
同样，您可以将缓存配置放在_server_块中，然后在任何位置块之前。在这种情况下，该服务器的所有响应都将被缓存。或者，您可以将其放在_http_块中，在这种情况下，Nginx配置文件支持的所有服务器请求将被缓存。

## 结论{#conclusion}
NGINX的标头模块可用于将任何任意标头添加到响应中，但是正确设置高速缓存控制标头是其最有用的应用程序之一。它可以帮助您提高网站的性能，尤其是对于具有较高延迟的网络的用户，例如移动运营商网络。在本教程中，我们学会了如何利用NGINX配置来利用浏览器缓存。希望这将帮助您改善用户在网站上的体验。

## 探索
  * [如何在Ubuntu上使用NGINX安装多个PHP版本][3]
  * [如何设置和配置为反向代理][2]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[2]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
[5]: #browser-caching
[6]: #header-module
[7]: #etag
[8]: #nginx-configuration
[9]: #conclusion
