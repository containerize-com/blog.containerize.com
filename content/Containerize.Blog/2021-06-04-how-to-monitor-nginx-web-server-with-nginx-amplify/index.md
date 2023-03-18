---
title: How To Monitor Nginx Web Server With Nginx Amplify
seoTitle: How To Monitor Nginx Web Server With Nginx Amplify
description: Nginx Amplify is a free monitoring agent for Nginx web server and PHP applications. This article is about How To Monitor Nginx Web Server With Nginx Amplify
date: Fri, 04 Jun 2021 19:08:47 +0000
author: Masood Anwer
summary: Monitor Nginx, PHP applications, operating system with Nginx Amplify and improve configuration. This article guides you to setup and configure Nginx Amplify.
url: /how-to-monitor-nginx-web-server-with-nginx-amplify/

categories: ['Web Server Solution Stack']

---
## Monitor Nginx, PHP applications, operating system with Nginx Amplify and improve configuration. This article guides you to setup and configure Nginx Amplify.

{{< figure align=center src="images/nginx-post.png" alt="Monitor Nginx Web Server With Nginx Amplify">}}  

## Overview {#Install}

**Web server monitoring** is very important for high-traffic websites. The **monitoring agent** will record essential metrics about the web server regularly. Those critical metrics can be used to optimize Nginx configuration. It will help you in improving the performance of your web server and application.

In this blog post, we will cover the following sections for **Nginx monitoring** open source tool.

  * [Nginx Web Server][1]
  * [Nginx Amplify][2]
  * [Install Nginx Amplify][3]
  * [Monitoring Metrics][4]

## Nginx Web Server {#Nginx}

[Nginx][5] is a free and open source web server. It is simple, lightweight, and easy to configure than Apache. Nginx web server also works as a reverse proxy, load balancer, mail proxy, and HTTP cache. It works for HTTP, HTTPS, SMTP, POP3, and IMAP protocols. Nginx is a high-speed, reliable, and memory-efficient web server that improves the performance of your applications. Further, it has grown in popularity and is now regarded as the most popular web server. Moreover, Nginx is suitable for any type of website including high-traffic sites and applications. It can be installed and configured on nearly all operating systems.

### Install Nginx

  * Run below commands to install Nginx web server.


```
sudo apt update
sudo apt install nginx
```


  * Once you are done with the installation, open your browser and type “http://IP\_Of\_Your_Server”. You will see the below welcome page.

{{< figure align=center src="images/nginx-home.png" alt="Welcome to Nginx!">}}  

## Nginx Amplify {#Amplify}

Nginx Amplify is a free monitoring tool for Nginx open source, Nginx Plus, and PHP-FPM. It’s a SaaS-based tool for nginx server monitoring and applications. Users can easily keep track of infrastructure assets, monitor performance, and adjust the configuration. It gives comprehensive information that users may utilize to optimize web server and application configuration. It acts as an agent on the server that hosts the Nginx and PHP applications. Nginx Amplify is a lightweight, push logs and monitoring data to Amplify servers without compromising on the performance. You can view metrics on the Amplify dashboard. The agent is available for all the primary operating systems such as RHEL, CentOS, Ubuntu, Debian, Fedora, and FreeBSD. Nginx Amplify has three main components such as Nginx Amplify Agent, Nginx Amplify Web UI, and Nginx Amplify Backend.

  * **Nginx Amplify Agent** – It operates on the system that is being monitored. All communication is encrypted using SSL/TLS.
  * **Nginx Amplify Web UI** – Web UI shows the metrics for web servers, applications, and operating systems.
  * **Nginx Amplify Backend** – It is a key component that is implemented as a SaaS and is responsible for collecting metrics, maintaining a database, running an analytics engine, and providing a core API.

## Install Nginx Amplify {#Install}

Follow below step by step guide for the installation of Nginx Amplify on Ubuntu.

  * First, you need to create an account at the Nginx [website][6].
  * After login, you will see below screen at Nginx Amplify website. Now, connect to your server via ssh and use commands given in the below steps.

{{< figure align=center src="images/amplify-1.png" alt="Install Nginx Amplify">}}  

  * Run the below command to download the agent.


```
$ sudo wget https://github.com/nginxinc/nginx-amplify-agent/raw/master/packages/install.sh
```


  * Execute the following command to install Nginx Amplify on the server. Replace XXXXX with the actual API key. You can find it at Nginx Amplify dashboard.


```
$ API_KEY='XXXXXXXX' sh ./install.sh
```


  * Once you are done with the installation, you can check the status with the following command.


```
$ sudo service amplify-agent status
```


  * Now, you need to configure Nginx Amplify agent to view the metrics. 

{{< figure align=center src="images/amplify-2-1.png" alt="Nginx Monitoring Configuration">}}  

  * Create a new file with the stub_status configuration.


```
$ sudo nano /etc/nginx/conf.d/stub_status.conf
```


  * Copy the below code into it and save the file.


```
server {
  listen 127.0.0.1:80;
  server_name 127.0.0.1;
    location /nginx_status {
    stub_status on;
    allow 127.0.0.1;
    deny all;
  }
 }
```


  * Restart the Nginx web server to activate the stub_status module.


```
$ sudo service nginx restart
```


  * Now, open Nginx configuration file with the following command.


```
$ sudo nano /etc/nginx/nginx.conf
```


  * Add the below code into it and save it.


```
error_log /var/log/nginx/error.log warn;
access_log /var/log/nginx/access.log main_ext;
log_format main_ext '$remote_addr - $remote_user [$time_local] "$request" ' '$status $body_bytes_sent "$http_referer" ' '"$http_user_agent" "$http_x_forwarded_for" ' '"$host" sn="$server_name" ' 'rt=$request_time ' 'ua="$upstream_addr" us="$upstream_status" ' 'ut="$upstream_response_time" ul="$upstream_response_length" ' 'cs=$upstream_cache_status' ;
```


  * Restart Nginx service to apply all the changes.


```
$ sudo service nginx restart
```


  * Next, Navigate to Amplify Dashboard and click on the ‘Finish’ button. You should see the following page.

{{< figure align=center src="images/amplify-after-finish-1024x503.png" alt="Web Server Monitoring">}}  

  * You can see the stats in more easy and readable format by clicking on the **Overview** tab. It will looks like as shown below.

{{< figure align=center src="images/amplify-overview.png" alt="Nginx Monitoring Stats">}}  

## Monitoring Metrics {#Monitoring}

Nginx Amplify Agent collects the following types of data:

  * **Nginx Metrics** – It collects various Nginx-related metrics from stub_status, logs files, and from the process state.
  * **System Metrics** – Nginx Amplify monitors a variety of system metrics such as CPU usage, memory usage, network traffic, and many more.
  * **PHP-FPM Metrics** – If it identifies a running PHP-FPM master process, it gets metrics from the PHP-FPM pool status.
  * **MySQL Metrics** – The MySQL global status set of variables can be used by the agent to collect metrics.
  * **NGINX Metadata** – The agent gathers data about NGINX instances such as package data, build information, binary path, build configuration settings, and many more.
  * **System Metadata** – The agent collects data on the operating system, including hostname, uptime, OS flavor, and other details.

## Conclusion

We’ve gone over the Nginx web server and Nginx Amplify advanced monitoring agent in great detail. Nginx Amplify is quite simple to set up and configure. In addition, we’ve gone over which critical metrics Nginx Amplify can track to **monitor Nginx**. These important metrics can be used to improve the configuration of your Nginx web server and apps.

Finally, [containerize.com][7] is in a consistent process of writing blog posts on further latest open source products. Therefore, stay in touch with this [Web Server Solution Stack][8] category for the latest updates.

## Explore

You may find the following links relevant:

  * [How to use Nginx as Load Balancer for your application][9]
  * [How to Setup and Configure Nginx as Reverse Proxy][10]

 [1]: #Nginx
 [2]: #Amplify
 [3]: #Install
 [4]: #Monitoring
 [5]: https://products.containerize.com/solution-stack/nginx
 [6]: https://amplify.nginx.com/signup/
 [7]: https://containerize.com
 [8]: https://blog.containerize.com/category/web-server-solution-stack/
 [9]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/

 [10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
