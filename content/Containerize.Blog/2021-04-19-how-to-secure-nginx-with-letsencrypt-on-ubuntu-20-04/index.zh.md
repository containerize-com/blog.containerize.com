---
title: "如何使用Let's Encrypt在Ubuntu 20.04上保护Nginx" 
seoTitle: "如何使用Let's Encrypt在Ubuntu 20.04上保护Nginx" 
description: "如何通过在Ubuntu上加密设置，加密和安全nginx。让我们加密客户端生成证书以自动配置nginx。" 
date: Mon, 19 Apr 2021 06:27:22 +0000
author: yasir saeed
summary: "网站包括SSL/TLS对其域吸引访问者的加密。本文解释了使用Certbot实用程序来获取NGINX的TLS/SSL证书。" 
url: /zh/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
categories: ['Web Server Solution Stack']
---

## 网站包括SSL/TLS加密，以吸引访问者。本文解释了使用Certbot实用程序来获取NGINX的TLS/SSL证书。

{{< figure align=center src="images/nginxletsencrypt.png" alt="通过在Ubuntu上加密固定nginx">}}


##  **概述**  
任何寻求吸引访问者的网站都需要包括TLS/SSL加密的域名。 SSL免费证书可确保您的Web服务器之间的安全连接，例如加密和安全的NGINX和应用程序浏览器。让我们加密是一个免费的，自动化和开放的证书授权机构，使您可以为Nginx SSL Letsencrypt设置此类保护。让我们加密免费的SSL证书均受到所有主要浏览器的信任，并且在发行日期以来的接下来的90天有效。
这篇博客文章说明了使用Nginx Certbot实用程序获得NGINX HTTPS LETSENCRYPT证书，以在Ubuntu 20.04 / 18.04上对运行Web Server的NGINX运行Web服务器进行加密的最简单方法，并设置您的证书自动续订IT证书。让我们开始并设置LETSENCRYPT UBUNTU NGINX配置。
* 依赖和先决条件
* 安装certbot实用程序
* 确认Nginx的配置
* 允许HTTP通过防火墙
* 获得SSL证书
  * 结论

## 首先：依赖和先决条件 {#prerequisites}

为了遵循本文，您需要以下依赖项和先决条件来安装letsencrypt ubuntu nginx实用程序：
* 在本地/远程计算机上启用了启用SUDO的非根或根用户。
* 运行Ubuntu 20.04或Ubuntu的系统18.04
* 访问命令行终端
* 本地/远程机器上的sudo或根特权
  * NGINX已安装并设置
* 指向公共IP的注册域名
* 为该域名配置的服务器块
* 防火墙配置为接受端口80和443上的连接。

## 步骤1  - 安装CERTBOT {#step-1-—-installing-certbot}

确保NGINX和使用Let's Encrypt加密NGINX的第一步是安装nginx certbot完整的且易于使用的软件包，以获取和续订服务器上的加密SSL证书。为此，首先要在Ubuntu上打开终端并更新本地存储库。输入y并输入（如果提示）。
```
sudo apt update
sudo apt install certbot python3-certbot-nginx

```
现在，让我们验证一些NGINX安全配置设置。

## 步骤2  - 确认Nginx的配置 {#step-2-—-confirming-nginx-39-s-configuration}

如依赖项和先决条件部分中所述，您应该已经有一个注册的域，Certbot需要能够找到该域的正确NGINX服务器块以自动配置SSL。例如，此博客文章使用domain blog.containerize.com和服务器块，用于您的域，at /etc/nginx/sites-available/blog.containerize.com，并使用已正确设置的server_name指令。
要确认，请使用Nano或您喜欢的文本编辑器打开域的配置文件：
```
sudo nano /etc/nginx/sites-available/blog.containerize.com

```
在file /etc/nginx/sites-available/blog.containerize.com中找到现有的server_name指令行。看起来应该这样：
```
...
server_name blog.containerize.com www.blog.containerize.com;
...
```
现在，验证您的nginx配置文件的语法和重新加载nginx服务器以加载新的配置设置：
```
sudo nginx -t
sudo systemctl reload nginx

```
Certbot实用程序现在可以找到正确的NGINX服务器块指令，以保护NGINX并自动更新它。在下一步中，让我们更新防火墙以允许HTTPS流量。

## 第3步 - 允许HTTP通过防火墙 {#step-3-—-allowing-https-through-the-firewall}

根据本文的建议，您需要调整设置以允许HTTPS流量。为了确保启用防火墙并活跃，请运行以下命令：
```
sudo ufw status

```
输出应告诉您UFW处于活动状态，并为您提供设置规则的列表。它仅显示允许HTTP流量到Web服务器。为了允许加密的流量，您可以添加nginx https配置文件或使用nginx Full并删除现有的Nginx HTTP规则。通过键入命令允许NGINX HTTPS流量：
```
sudo ufw allow 'Nginx Full'
sudo ufw delete allow 'Nginx HTTP'

```
验证通过键入UFW状态命令来允许HTTPS流量的HTTPS规则：
```
sudo ufw status

```
接下来，让我们运行certbot并获取我们的证书。

## 步骤4  - 获得SSL证书 {#step-4-—-obtaining-an-ssl-certificate}

NGINX的certbot插件将在必要时重新配置NGINX并重新加载其配置。因此，只有您需要通过执行以下命令来生成使用NGINX插件的证书：
```
sudo certbot --nginx -d blog.containerize.com -d www.blog.containerize.com

```
如果这是您第一次运行certbot实用程序，则certbot要求您配置您的HTTPS设置。将提示您输入电子邮件地址并同意服务条款。命中输入后，将更新配置，Nginx将重新加载以拾取新设置。最后，Certbot将显示一条消息，告诉您证书已成功生成以及您的证书存储何处。
您的证书已下载，安装和加载Nginx SSL证书LetSencrypt配置。尝试使用https：//重新加载您的网站，并注意浏览器的安全指标。它应该表明该站点通常使用锁图标正确固定。如果您使用SSL Labs服务器测试测试服务器，则它将获得Nginx和Letsencrypt的A等级。
让我们通过测试续订过程来完成。

## 步骤5  - 验证Certbot自动续订 {#step-5-—-verifying-certbot-auto-renewal}

因为让我们加密证书每90（90）天到期，并且NGINX SSL LETSENCRYPT鼓励用户设置和自动更新Cron Job。首先，为当前用户打开crontab配置文件：
```
sudo crontab -e
```
添加一个运行certbot命令的CRON作业，如果检测证书将在30天内续签，则续签nginx续签证书。安排它在指定的时间每天运行，例如上午5:00
```
sudo certbot renew --dry-run

```
如上所述，cron作业还应包括–quiet属性。这指示NGINX续订SSL证书在执行任务后不包括任何输出。启用自动证书更新。添加Cron作业后，保存更改并退出文件。

## 结论 {#conclusion}

在本文中，我们学会了如何nginx安装letsencrypt SSL证书。我们为您的域下载了SSL证书，并配置了NGINX使用这些证书。此外，您应该启用Certbot自动续订SSL NGINX LETSENCRYPT的证书。在即将到来的教程中，我们将讨论有关如何使用标准安全技术保护Web服务器的更多有趣主题，该技术可以在Web浏览器和Web服务器之间进行加密通信。
_您可以加入我们的[Twitter][1]，[LinkedIn][2]和我们的[Facebook][3]页面。您使用哪种加密协议在计算机网络上提供通信安全性？如果您有任何疑问，请_ [联系][4]。

## 探索
您可能会找到以下相关链接来监视服务器性能并确保其可靠性和安全性：
  * [如何将Apache配置为Ubuntu/Debian的反向代理][5]
  * [如何在Ubuntu上使用nginx安装和保护PhpMyAdmin][6]
  * [在Ubuntu/debian上配置http/2支持nginx][7]
  * [在AWS生产服务器上使用乘客的设置Nginx][8]
  * [如何在Ubuntu上使用Apache安装和配置OllCloud][9]



 [1]: https://twitter.com/containerize_co
 [2]: https://www.linkedin.com/company/containerize/
 [3]: http://facebook.com/containerize
 [4]: mailto:yasir.saeed@aspose.com
 [5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
 [6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
 [7]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
 [8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
 [9]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
