---
title: "如何在ubuntu/debian上配置nginx中的http/2支持" 
seoTitle: "如何在ubuntu/debian上配置nginx中的http/2支持" 
description: "HTTP2或H2是二进制协议，并改进了HTTP协议的版本，它允许在NGINX启用http2支持后提高站点页面的速度" 
date: Fri, 28 May 2021 18:59:02 +0000
author: yasir saeed
summary: "HTTP/2是一种可靠的多路复用协议，用于提高页面加载速度和安全性。在本教程中，我们将学习如何使用HTTP/2支持设置NGINX。" 
url: /zh/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## HTTP/2是一种可靠的多重协议，用于提高页面负载速度和安全性。在本教程中，我们将学习如何使用HTTP/2支持设置NGINX。

{{< figure align=center src="images/nginx-enable-http2.png" alt="nginx启用ubuntu和debian的HTTP2支持">}}


## **概述**
NGINX是一个快速可靠的Web服务器。由于其记忆范围较低，负载平衡，高可扩展性，缓存，对大多数协议的支持和反向代理，因此获得了受欢迎程度。现在，让我们谈谈NGINX如何启用HTTP2协议。
NGINX支持的协议之一是2015年5月发布的HTTP/2。HTTP/2的主要优点是其内容丰富的网站的高传输速度，减少Web服务器上的负载，并且可以启动多个并行请求。在单个TCP连接中。 nginx enable HTTP2是HTTP协议的改进版本。在开始之前，我们将需要一些带有SSL证书的Ubuntu或Debian服务器。在本教程中，我们将指导您介绍如何在Ubuntu上启用HTTP2的nginx。
  *更新软件包并安装nginx
  *启用HTTP/2支持
  *添加服务器名称
  *添加SSL证书
  *删除密码
  *将所有HTTP请求重定向到HTTPS
  *重新启动nginx
  * 结论

## 步骤1：更新软件包并安装nginx {#4597}
第一步是更新和升级APT包装系统中的存储库。使用更新将下载最新版本软件包，升级将在列表中安装最新版本的软件包。运行下面的APT命令以更新和升级软件包。
```
sudo apt-get update && apt-get upgrade
```
下一步是安装最新版本的NGINX软件包。在NGINX版本1.9.5及以上引入了对HTTP/2协议的支持。因此，我们将必须安装最新版本的NGINX软件包。运行以下使用APT安装命令来安装NGINX软件包：
```
sudo apt-get install nginx
```
将提示您确认逐步安装过程。选择“是”选项并完成安装过程。安装过程完成后，下一步是检查软件包的版本，无论我们是否安装了正确的版本。您可以通过键入命令来检查NGINX Web服务器的版本：
```
sudo nginx -v
```
上述版本检查命令的输出应类似于以下内容：
```
nginx version: nginx/1.10.0 (Ubuntu)
```

## 步骤2：启用http/2支持{#f4d2}
安装NGINX软件包后，我们需要启用HTTP2 NGINX。用户必须将收听端口从80更改为443。让我们打开Nginx配置文件：
```
sudo nano /etc/nginx/sites-available/domain-name.com
```
您可以看到默认情况下的nginx值设置为侦听是端口80。
听80 default_server;
听[::]：80 default_server;
如您所见，有两个不同的侦听变量。第一个侦听变量用于所有IPv4Connections，第二个是用于IPv6连接的。我们将启用两个变量的加密。将收听端口号更改为443，并为HTTPS协议添加SSL连接，如下所示：
收听443 SSL HTTP2 DEFAULT_SERVER;
听[::]：443 SSL HTTP2 DEFAULT_SERVER;
请注意，除SSL外，我们还添加了HTTP2。 NGINX现在能够使用支持HTTP/2协议的浏览器。

## 步骤3：添加服务器名称{#A745}
下一步是更改服务器\ _名称，以便服务器名称与域名关联。用户只需要更改配置文件中的服务器名称即可。在配置文件中找到服务器\ _name条目，然后将_更改为您的实际域，如下：
```
server_name example.com www.example.com;
```
通过在文本编辑器中编辑保存服务器配置文件。您可以使用命令检查nginx配置是否为语法错误：
```
sudo nginx -t
```
如果语法没有错误，则您将看到以下输出：
nginx：配置文件/ETC/NGINX/NGINX.CONF语法是可以的
nginx：configuration file /etc/nginx/nginx.conf测试成功

## 步骤4：添加SSL证书{#37C0}
下一步是启用NGINX HTTPS配置使用您的SSL证书。您可以生成自签名证书或[从Let's Encrypt中安装免费证书] [1]。如果您没有SSL证书，请遵循本教程。在NGINX配置目录中添加您的SSL证书类似：
```
sudo mkdir /etc/nginx/ssl
```
将您的证书和私钥复制到此位置，还将example.com替换为您的实际域名：
sudo cp/path/to/your/certificate.crt /etc/nginx/ssl/example.com.crt
sudo cp/path/to/your/private.key /etc/nginx/ssl/example.com.key
现在，再次打开Nginx服务器配置文件。使用证书的位置添加并配置NGINX服务器块内部的新SSL线路，以启用NGINX SSL配置：
sudo nano /etc/nginx/sites-available/domain-name.com
ssl_certificate /etc/nginx/ssl/example.com.crt;
ssl_certificate_key /etc/nginx/ssl/example.com.key;
保存文件nginx文件并退出文本编辑器。

## 步骤5：删除密码{#D291}
密码是一种用于数据加密和解密的加密术中的算法。密码套件是用于保护网络连接的一堆密码算法。 HTTP/2具有巨大的不安全密码黑名单，需要删除。在这里，我们将使用由Internet Giants Cloudflare批准的流行密码集。
打开以下nginx配置文件/etc/nginx/nginx.conf，然后在** ssl \ _prefer \ _server_ciphers上添加以下行。
```
ssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+
AES256:EECDH+3DES:RSA+3DES:!MD5;
```
您可以将GZIP设置为OFF并添加代理\ _max \ _temp \ _file \ _size 0;为了避免err \ _http2 \ _protocol_error nginx错误。

## 步骤6：将所有http请求重定向到https {#b387}
现在，我们应该告诉NGINX HTTP2代理，仅当服务器收到HTTP请求时，它应该通过HTTPS提供内容。最后，忽略评论的行，您的nginx配置文件/etc/nginx/sites-available/domain-name.com应该看起来与此相似：
服务器{收听443 SSL HTTP2 DEFAULT_SERVER;听[::]：443 SSL HTTP2 default_server; root/var/var/www/html; index index index.html index.htm index.htm index.nginx-debian.html; server_name example.com; locaty/location/locess/{ ; } ssl_certificate /etc/nginx/ssl/example.com.crt; sssl_certificate_key /etc/nginx/nginx/ssl/ssl/example.com.ykey；听[::]：80; server_name example.com;返回301 https：// $ server_name $ request_uri;}
保存文件/etc/nginx/sites-available/domain-name.com，然后退出。检查语法错误的配置：
```
sudo nginx -t
```

## 步骤7：RESTART NGINX {#E687}
要应用所有更改，请重新启动NGINX HTTP2反向代理服务器并检查配置状态。
sudo systemctl restart nginx
sudo systemctl状态nginx

## **结论：** {#4a1a}
恭喜，您已经成功地学习了如何在Ubuntu Server上设置Nginx Config Http2支持。您的NGINX HTTP2设置现在为HTTP/2页提供，并且还清除了HTTP/1和HTTP/2协议之间的差异。如果您仍然遇到任何配置问题，请在评论部分中告诉我们。
您对HTTP2多路复用协议有任何疑问吗？_，请_ [获得联系] [2]。

## 探索
您也可能喜欢以下文章：
  * [如何将Apache配置为Ubuntu/Debian的反向代理] [3]
  * [如何] [3] [在Ubuntu上使用Nginx安装并固定PhpMyAdmin] [4]
  * [如何在AWS生产服务器上使用乘客设置NGINX] [5]
  * [安全和加密nginx与让我们在Ubuntu上加密20.04] [1]
  * [如何在Ubuntu上使用Apache安装和配置OllCloud] [6]
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[2]: mailto:yasir.saeed@aspose.com
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
