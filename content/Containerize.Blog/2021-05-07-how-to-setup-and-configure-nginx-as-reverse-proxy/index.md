---
title: How to Setup and Configure Nginx as Reverse Proxy
seoTitle: How to Setup and Configure Nginx as Reverse Proxy
description: This tutorial is about how to set up and configure Nginx as Reverse Proxy. NGINX is considered one of the most popular open-source reverse proxy web servers.
date: Fri, 07 May 2021 07:38:05 +0000
author: yasir saeed
summary: Nginx is an open-source web server that can also act as a reverse proxy. This tutorial will help you learn how to set up and configure Nginx as Reverse Proxy.
url: /web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/

categories: ['Web Server Solution Stack']

---
## Nginx is an open-source web server that can also act as a reverse proxy. This tutorial will help you learn how to set up and configure Nginx as Reverse Proxy.

{{< figure align=center src="images/nginx-as-reverse-proxy.png" alt="use nginx as reverse proxy server">}}  

## Overview:

Nginx and Apache are two most **popular open source web servers** often being used with PHP. A reverse proxy or gateway acts as a connection between the client and the server. The client and server exchange information with each other to work continuously and efficiently. Most common reverse proxies are **Nginx and Apache** and both can be configured on the same virtual machine when hosting multiple websites. A reverse proxy protects web servers from attacks and connection gateway appears to the client as like an ordinary web server where no special reverse proxy nginx configurations are needed. The client sends request while the reverse proxy decides where to pass on the requested information and then delivering the final output result to the client.

After a lot of appreciation for our series about Redis tutorials, we received a lot of requests to start a series on Nginx tutorials. So last week we started with a tutorial on how to use [nginx reverse proxy load balancer][1] for your applications. This simple nginx reverse proxy config example provides many reliability and nginx reverse proxy performance benefits. Nginx simple reverse proxy is the most actively used open source nginx proxy server on the internet. In this tutorial, we will **configure and explore how to use Nginx as Reverse Proxy** and how to set it up as Reverse Proxy on a single server. So, let’s get started!

  * What is a Proxy Server?
  * Forward vs Reverse Proxy
  * Configure reverse proxy
  * What Are The Advantages of Nginx Reverse Proxy?
  * Conclusion

## What is a Proxy Server?

**A proxy server** acts as a gateway between you and the internet. It’s an intermediary server separating end users from the websites they browse. Proxy servers provide different levels of functionality, security, and privacy as per your use case, or company policy.

With a proxy server, internet traffic flows through the proxy server on its way to the address you requested. The request then comes back through that same proxy server (mostly), and then the proxy server forwards the data received from the website to you.

## Forward vs Reverse Proxy:

{{< figure align=center src="images/forward-proxy-server-1024x482.png" alt="nginx as reverse proxy server">}}  

Generally when we speak of the proxy, most of the time we mean the forward proxy. **Forward Proxies** are great for avoiding country restrictions, like the great firewall of China. The client simply connects to blocked resources via the forward proxy. Forward Proxies can hide user’s identities by changing their IP address. So, basically nginx as forward proxy sits between the client and the internet, so the end server is not aware of the actual client.

{{< figure align=center src="images/reverse-proxy-server-1024x482.png" alt="nginx as reverse proxy">}}  

**Reverse Proxies** also act as intermediaries but they sit on the other side of the connection. Reverse proxies are excellent at **load balancing**, web optimization, and security. Reverse Proxying is typically used to distribute the load among several servers, seamlessly show content from different websites, or pass requests for processing to application servers over protocols other than HTTP.

## Configure Nginx as Reverse Proxy:

When NGINX proxies a request, it sends the request to a specified proxied server, fetches the response, and sends it back to the client. It is possible to proxy requests to an HTTP server or a non-HTTP server using a specified protocol. Supported protocols include **FastCGI, uwsgi, SCGI, and Memcached**.

To pass a request to an HTTP proxied server, the **proxy_pass** directive is specified inside a **location**. For example:


```
location /path/to/location/ {
    proxy_pass http://www.backendserver.com/link/;
}
```


This nginx reverse proxy example configuration results in passing all requests processed in this location to the proxied server at the specified address. This address can be specified as a domain name or an IP address. The address may also include a port:


```
location ~ \.php {
    proxy_pass http://127.0.0.1:8000;
}
```


You can even pass modified or custom headers to the proxied server in nginx **proxy\_set\_header** host below in the example.


```
location /path/to/location/ {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_pass http://localhost:8000;
}
```


Nginx also supports buffering which helps improve the performance. With buffering enabled Nginx will store the response it receives from the proxied server as long as the client needs it to download.

Instead of proxying all the requests to a single server, you can also **set up multiple backend servers** and let the Nginx balance load between those proxied servers. We’ve already covered this in our tutorial about [nginx load balancing][1].

## What Are The Advantages of Nginx Reverse Proxy?

Following are the benefits of setting up Nginx reverse proxy server:

  * Nginx is one of the most popular **open source web servers** that is also the most popular proxy tool. Nginx Reverse Proxy config is very simple to implement as it provides the user with high end security against DDoS and DoS web server attacks. 
  * It helps to create a balanced load among high traffic websites and backend servers like **Dropbox, Netflix, and Zynga**. 
  * It provides caching mechanism for a slower back-end server and high traffic sites to setup nginx reverse proxy virtual host. It does not require setting up a new process for each web request from the client side. 
  * It also acts as a reverse proxy server for multiple protocols such as HTTP, HTTPS, TCP, UDP, SMTP, IMAP, and POP3 etc. 
  * Nginx can **handle more than 10000 connections** with a low memory footprint and can operate multiple web servers on a single IP address. 
  * It also help to cache pages content and perform SSL encryption to lower the load from the web host server. Nginx is one of the best web servers for improving the performance of static content by compressing it and boosting the loading time. 
  * It’s an excellent tool for a multiple server environment and it can also be useful for different tasks like keeping a single server anonymous.

## Conclusion:

In this **nginx reverse proxy tutorial**, we explored what is a Nginx Proxy Server and setting up nginx reverse proxy. Difference between forward vs reverse proxy server nginx. We also learned by example how to setup nginx as reverse proxy. Now you full understand how to install **Nginx reverse proxy configuration step by step**. The above tutorial helps you get started with a reverse proxy set up. In our upcoming tutorials, we’ll discuss more interesting topics about Nginx.

_What is your most favorite _reverse proxy_ server that is easy, dynamic and full-featured?. Do you have any questions about leading_ _open source _reverse prox__y, **load balancer for HTTP and TCP** based applications_?, Please_ [get in touch][2].

## Explore

You may find the more related below articles

  * [How To Configure Apache as a Reverse Proxy For Ubuntu/Debian][3]
  * [Secure Nginx with Let’s Encrypt on Ubuntu 20.04][4]
  * [How to use Nginx as Load Balancer for your application][1]
  * [How To Install and Secure phpMyAdmin with Nginx on Ubuntu][5]
  * [Configure HTTP/2 Support in Nginx On Ubuntu/Debian][6]
  * [Install Multiple PHP Versions with Nginx on Ubuntu][7]
  * [Setup Nginx With Passenger on AWS Production Server][8]

 [1]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/

 [2]: mailto:yasir.saeed@aspose.com
 [3]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/

 [4]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/

 [5]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/

 [6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/

 [7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/

 [8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
