---
title: How To Do Web Applications Monitoring With Statping
seoTitle: How To Do Web Applications Monitoring With Statping
description: Statping is one of the best website monitoring tools that enables you to monitor all services. Render beautiful status page for showcase services uptime.
date: Fri, 16 Apr 2021 18:12:12 +0000
author: Masood Anwer
summary: Automatically monitor your websites, web applications, APIs with free monitoring tools and showcase services uptime with an open source status page system.
url: /status-page/how-to-do-web-applications-monitoring-with-statping/
categories: ['Status Page']

---
## Automatically monitor your websites, web applications, APIs with free monitoring tools and showcase services uptime with an open source status page system.

{{< figure align=center src="images/How-to-monitor-websites-with-statping.png" alt="Web Applications Monitoring">}}  

Statping is an **open source status page software** and one of the **best website monitoring tool**. It also use for monitoring of services such as HTTP, TCP, UDP, ICMP and gRPC services. Statping automatically fetches the services, monitor them, and render beautiful status page. It is cross-platform and you can install it on Liunx, Mac and Windows operating systems. Further, it allows to use MySQL, Postgres or SQLite database system for storing information. Moreover, it comes with out of the box mobile applications for iPhone and Android devices.

Let’s take a look on the core features of Statping.

  * **Services Monitoring** – Statping allows you to easily track all of your HTTP, TCP, UDP, gRPC, and ICMP services.
  * **Notifications** – Statping supports most of the major third-party applications for receiving notifications.
  * **Mobile App** – Use free app for iPhone & Android devices and manage everything on the go.
  * **oAuth Authenticatio**n – Supports oAuth authentication for popular services such as Github, Google, Slack, and custom OpenID provider. Use this feature and increase security.

We will cover the following topics in this tutorial.

  * [Installing on Linux][1]
  * [Configure Systemd Service][2]
  * [Create Service For Monitoring][3]
  * [Conclusion][4]

## Installing on Linux {#Installing}

Run below command for Statping installation.


```
curl -o- -L https://statping.com/install.sh | bash
```


## Configure Systemd Service {#Configure}

Setting up a systemd service is an excellent way to ensure that your Statping server can reboot automatically when necessary. To create a systemd service, follow the steps below.

  * First, run below command to create new file.


```
sudo nano /etc/systemd/system/statping.service
```


  * Copy below code and paste in it.


```
[Unit]
Description=Statping Server
After=network.target
After=systemd-user-sessions.service
After=network-online.target

[Service]
Type=simple
Restart=always
ExecStart=/usr/local/bin/statping
WorkingDirectory=/usr/local/bin

[Install]
WantedBy=multi-user.target
```


  * Finally, use below commands to enable and start systemd service.


```
systemctl daemon-reload
systemctl enable statping
systemctl start statping
```


## Create Service For Monitoring {#Create}

  * Open your browser, enter URL for login to your Statping installation.
  * Click on the Services link in top navigation. It will show you the services page that looks like below one.

{{< figure align=center src="images/statping-dashboard.png" alt="List of Web Service Monitoring">}}  

  * Click on the Create button to add new service for monitoring. Fill the required fields such as Service Name, Service Type, Check Interval, Service Endpoint (URL) etc.

## Conclusion {#Conclusion}

We learned about Statping, how to install it on Linux, and how to create a systemd service in this tutorial. Further, we have created a new service to monitor and introduce you about different features. We hope that this guide will assist you in beginning to use Statping for performing **web service monitoring** and **web applications monitoring**.

Finally, [**containerize.com**][5] is in a consistent process of writing blog posts on further latest open source products. Therefore, stay in touch with this [**Status Page**][6] category for the latest updates.

## Explore

You may find the following links relevant:

  * [**Top 5 Open Source Status Page Software for 2020**][7]
  * [**Statping**][8]
  * [**Cachet**][9]
  * [**Monitoror**][10]
  * [**Staytus**][11]
  * [**Upptime**][12]
  * [**Statusfy**][13]

 [1]: #Installing
 [2]: #Configure
 [3]: #Create
 [4]: #Conclusion
 [5]: https://containerize.com
 [6]: https://blog.containerize.com/category/status-page/
 [7]: https://blog.containerize.com/2020/11/20/top-5-open-source-status-page-software-for-2020/
 [8]: https://products.containerize.com/status/statping
 [9]: https://products.containerize.com/status/cachet/
 [10]: https://products.containerize.com/status/monitoror/
 [11]: https://products.containerize.com/status/staytus/
 [12]: https://products.containerize.com/status/upptime/
 [13]: https://products.containerize.com/status/statusfy/