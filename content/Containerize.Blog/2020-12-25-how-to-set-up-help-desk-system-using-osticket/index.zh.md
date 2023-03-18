---
title: "如何使用osticket设置在线帮助台软件" 
seoTitle: "如何使用osticket设置在线帮助台软件" 
description: "使用Osticket帮助台在一个地方管理您的所有支持请求。将通过电子邮件，电话和表格创建的查询转换为基于Web的门票。" 
date: Fri, 25 Dec 2020 05:46:51 +0000
author: bilalahmed
summary: "使用Osticket在一个地方管理所有支持请求。将通过电子邮件，电话和表单创建的查询转换为基于Web的简单门票。" 
url: /zh/how-to-set-up-help-desk-system-using-osticket/
categories: ['Help Desk']
---

## 使用Osticket在一个地方管理您的所有支持请求。将通过电子邮件，电话和表单创建的查询转换为基于Web的简单门票。

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket.png" alt="如何使用osticket设置在线帮助台软件">}}

Osticket是开源在线帮助台软件解决方案。 Osticket Helpdesk是高成本和复杂客户支持系统的免费替代品。它是简单，轻巧，可靠，基于网络且易于设置和使用。最好的部分是，它是完全免费的。我们将在本教程中介绍以下各节：
  * [什么是osticket？] [1]
  * [osticket的优缺点] [2]
  * [如何设置Osticket？] [3]
  * [结论] [4]

## 什么是osticket？ {#osticket}
Osticket提供了用户友好的控制面板和实时报告组件。用户可以只需几个简单的步骤即可登录并创建门票。他们可以通过您的网站，电子邮件或电话创建门票。然后，即将到来的门票将保存并分配给代理商。代理商将收到电子邮件通知，并会响应查询以帮助解决他们的问题。客户和代理商可以讨论评论部分的详细信息和进度。客户可以通过此在线帮助台软件提供的内置客户门户网站跟踪他们的要求和进度。

## osticket {#pros}的优点和缺点

#### 专业人士
  * Osticket对最终用户和支持代理人都非常友好。
  *与丰富的功能捆绑在一起，Osticket拥有您所需的一切，而不会过于复杂。
  * Osticket是完全免费的开源票务管理软件。
  *它轻巧，安全，可靠且易于安装帮助办公桌管理软件。
  *可以在所有流行的Web服务器上运行，包括Apache，Nginx，LightTPD和IIS等。

#### cons
  * Osticket不如其他付费服务台系统提供详细信息的门票分析和统计信息。
  *与其他支持系统相比，它的用户界面非常简单且基本。

## 如何安装Osticket？ {#如何}
请按照以下步骤在Ubuntu 18.04 LTS上安装Nginx。
  *为Osticket创建一个新目录。
```
sudo mkdir -p /var/www/osticket/
cd /var/www/osticket/
```
  *使用以下命令下载最新的Osticket设置。
```
sudo apt-get install wget unzip
sudo wget https://github.com/osTicket/osTicket/releases/download/v1.14.1/osTicket-v1.14.1.zip
sudo unzip osTicket-v1.14.1.zip
```
  *之后，使用这些命令从示例文件中创建配置文件。
```
sudo su -
cd upload/
cp ost-sampleconfig.php ost-config.php
```
  *然后将Osticket Web目录的所有权更改为“ www-data”用户和组。
```
sudo chown -R www-data:www-data /var/www/osticket/

```
  *之后，创建新的虚拟主机配置文件。
```
sudo vim /etc/nginx/sites-available/osticket.conf

```
  *然后将配置代码粘贴到其中。
```
server {
listen 80;
server_name 13.52.217.10;   ## change server_name as per your domain name.
root /var/www/osticket/upload;

access_log /var/log/nginx/access.log;
error_log /var/log/nginx/error.log;
index index.php index.html index.htm;


# Enable gzip
gzip on;
gzip_min_length 1000;
gzip_types text/plain application/x-javascript text/xml text/css application/xml;

set $path_info "";

location ~ /include {
deny all;
return 403;
}

if ($request_uri ~ "^/api(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/api/(?:tickets|tasks).*$ {
try_files $uri $uri/ /api/http.php?$query_string;
}

if ($request_uri ~ "^/scp/.*\.php(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/scp/ajax.php/.*$ {
try_files $uri $uri/ /scp/ajax.php?$query_string;
}

location / {
try_files $uri $uri/ index.php;
}

location ~ \.php$ {
fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
include fastcgi_params;
include snippets/fastcgi-php.conf;
fastcgi_pass unix:/run/php/php7.2-fpm.sock;
}
}
```
  *根据您的域名更改服务器名称。保存文件并退出。
  *现在使用以下命令将此虚拟主机文件链接到启用站点的文件夹
```
ln -s /etc/nginx/sites-available/osticket.conf /etc/nginx/sites-enabled/

```
  *使用以下命令测试任何配置错误
```
nginx -t
```
  *现在使用以下命令重新启动NGINX服务
```
sudo systemctl restart nginx

```
  *现在在任何Web浏览器中输入您的域名以开始安装向导，如下图所示

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-2.png" alt="如何使用osticket设置在线帮助台软件">}}

  *从php.ini启用所需的扩展名，然后单击“继续”。
  *填写所有必需的信息，然后单击“现在安装” **按钮。

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-3.png" alt="如何使用osticket设置在线帮助台软件">}}

  *在数据库设置中，输入dbname，用户名和密码。
  *最后单击“立即安装”按钮
  *安装完成后，它将显示带有成功消息的页面。
  *接下来，通过运行以下命令来更改ost-config.php的许可以删除写入访问：
```
cd /var/www/osticket/upload/
chmod 0644 include/ost-config.php
```

## 结论{#conclusion}
Osticket最适合预算低的公司或那些想要一个简单的服务台系统而不是复杂的公司。它是简单，轻巧，可靠，开源和完全免费的在线帮助台软件。这使Osticket成为更高成本客户支持系统的绝佳选择。要了解有关Osticket功能和安装指南的更多信息，请在教程之后查看。

## 探索
[最佳开源和免费IT帮助台软件] [5]
[流行的基于免费售票员的服务台和客户服务系统] [6]
[开发Osticket插件的初学者指南] [7]
[如何在Osticket中实施多租赁] [8]
[使用WordPress和Osticket自动票务系统] [9]
[1]: #osticket
[2]: #pros
[3]: #how
[4]: #conclusion
[5]: https://products.containerize.com/helpdesk/
[6]: https://products.containerize.com/helpdesk/osticket
[7]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
[8]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
[9]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
