---
title: "如何將Apache配置為Ubuntu/Debian的反向代理" 
seoTitle: "如何將Apache配置為Ubuntu/Debian的反向代理" 
description: "Apache反向代理配置逐步使您可以在Ubuntu/Debian Linux上使用MOD_PROXY在代理服務器後面運行一個或多個後端服務器。" 
date: Fri, 21 May 2021 18:58:46 +0000
author: yasir saeed
summary: "Apache反向代理允許您在代理服務器後面運行一個或多個後端服務器。這是在Ubuntu/Debian系統上配置Apache反向代理的方法。" 
url: /zh-hant/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## Apache反向代理允許您在代理服務器後面運行一個或多個後端服務器。這是在Ubuntu/Debian系統上配置Apache反向代理的方法。

{{< figure align=center src="images/Install-and-Configure-Apache-as-a-Reverse-Proxy-1.png" alt="安裝和配置Apache反向代理">}}


##**概述**
Apache反向代理允許所有流量並將其轉發到代理服務器後面的一個或多個後端服務器或容器，而無需公開公開。後端Web服務器可以是另一台Apache2或開源HTTP服務器，例如Nginx。 Apache2 HTTP服務器是當今正在使用的最流行的開源Web服務器之一。
安裝和配置代理服務器的原因很多。例如，反向代理可以幫助您添加安全性，用於負載平衡，限制對某些位置的訪問，以防止攻擊等等。本文說明瞭如何在Ubuntu/debian上逐步安裝和配置Apache反向代理配置：
  *安裝apache2
  *配置Apache2
  *啟用其代理模塊
  *啟用SSL
  *重新啟動apache2
  * 結論

##步驟1：安裝apache2
安裝Apache2非常簡單易於運行。要進行安裝，請簡單地運行以下命令：
sudo apt-get更新
sudo apt-get安裝apache2
{{_LINE_25_}}
在系統上安裝Apache2後，請使用Debian Linux或Ubuntu Linux版本上的以下SystemCTL命令Ubuntu停止，啟動，啟用，啟用和重新啟動Apache2在服務器啟動時始終重新啟動。
sudo systemctl stop apache2.Service
sudo systemctl啟動apache2.Service
sudo systemctl啟用apache2.Service
sudo systemctl restart apache2.Service
{{_LINE_31_}}
您可以使用以下命令查看Web服務器狀態：
sudo systemctl status apache2.Service
{{_LINE_34_}}
要檢查Apache2設置，請打開瀏覽器並瀏覽到服務器主機名或系統IP地址，您應該看到Apache2默認測試頁面，如下所示。當您看到這一點時，Apache2將按預期工作。 http：// localhost

{{< figure align=center src="images/apache-reverse-proxy.png" alt="安裝和配置Ubuntu的Apache反向代理代理">}}


##步驟2：將Apache2配置為反向代理
Apache2已成功安裝並準備使用。現在，您可以將Apache2配置為Apache2反向代理Ubuntu。 Apache2代理模塊的**ProxyPass **和 **ProxyPassReverse ** 功能提供了反向代理。要使用 **proxypass**  和 **ProxypassReverse** ，您必須首先知道要在哪裡引導網站流量。
Apache2反向代理服務器將收聽默認HTTP端口上的所有流量，該端口是簡單設置中的端口80。託管網站內容的後端服務器將在自定義端口上收聽，並且很可能是端口8080。
在此博客文章中，我們將設置Apache2以在端口80上收聽，然後將流量直接轉到端口服務器，該服務器在端口8080上傾聽。在下面命令下運行以創建一個名為apache2proxy.conf的代理virtualHost文件。
sudo nano /etc/apache2/sites-apache2proxy.conf
然後在apache2proxy.conf文件中添加以下代碼塊，然後保存。
{{_LINE_43_}}
        Servername示例..com
        Serveralias www.example.com
        serveradmin webmaster@example.com
        errorlog $ {apache_log_dir}/error.log
        CustomLog $ {apache_log_dir}/access.log合併
        proxyrequest off
{{_LINE_50_}}
          命令拒絕，允許
          從所有人那裡允許
{{_LINE_53_}}
        proxypass/http://127.0.0.1:8080/
        ProxypassReverse/http://127.0.0.1:8080/
{{_LINE_56_}}
          訂單允許，拒絕
          從所有人那裡允許
{{_LINE_59_}}
{{_LINE_60_}}
{{_LINE_61_}}
apache2proxy.conf文件包含您的服務器名稱以及proxy_pass，在HTTP代理服務器接收時將指示流量。

##步驟3：啟用Apache2代理
Apache2 Web服務器現在已成功安裝和設置。 Apache在其中包含許多與其中捆綁在一起的捆綁模塊。這些模塊未在Fresh Apache2安裝中啟用。首先，我們需要啟用所需的模塊，以啟用所需的apache mod_proxy模塊及其幾個附加模塊以支持不同的網絡協議。運行下面列出的命令以啟用其HTTP代理模塊。
sudo a2enmod代理
sudo a2enmod proxy_http
sudo a2enmod proxy_balancer
sudo a2enmod lbmethod_byrequests
{{_LINE_69_}}
現在，啟用VirtualHost網站並重新啟動Apache2啟用重新加載Apache2模塊配置。
sudo a2ensite apache2proxy.conf
sudo systemctl restart apache2.Service
啟動您選擇的Web瀏覽器，然後導航到您的服務器主機名（例如example.com）。現在，您將在默認端口（即8080）上代理您的Apache2服務器。

##步驟4：啟用SSL   {#Block-07B86D83-DCA0-4924-B991-206719C342EB}
如果要啟用Apache反向代理SSL模塊，請運行以下命令以啟用Apache反向代理https proxy Pass：
sudo a2enmod ssl
這將為HTTPS支持提供安全的Apache反向代理HTTP，以提供後端服務器。

##步驟5：RESTART APACHE2   {#BLOCK-836BB4FF-17AD-4317-8ECB-153104BD28A7}
為了實施這些更改，請通過運行以下命令重新啟動Apache：
sudo systemctl restart apache2.Service
恭喜！您已經在Linux系統上成功安裝和配置了Apache2反向代理。

##**結論：**   {#4a1a}
在本教程中，我們探索並討論了什麼是代理服務器和Apache反向代理示例配置逐步進行。我們還學會瞭如何在Linux系統上設置和配置Apache2作為反向代理。在即將到來的教程中，我們將討論有關Apache和其他Web服務器解決方案堆棧的更多有趣主題。

## 探索
您可能還喜歡以下更多相關文章：
  * [如何][1][安裝並在Ubuntu上使用nginx的phpmyadmin [2]
  * [如何在AWS生產服務器上使用乘客設置NGINX][3]
  * [在Ubuntu/debian上配置http/2支持nginx][4]
  * [安全和加密nginx與讓我們在Ubuntu上加密20.04][5]
  * [如何在Ubuntu上使用Apache安裝和配置OllCloud][6]

  
[1]: https://blog.containerize.com/web-server-solution-stack/zh-hant/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[2]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
