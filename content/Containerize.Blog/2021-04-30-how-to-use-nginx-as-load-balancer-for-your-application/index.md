---
title: How to use Nginx as Load Balancer for your application
seoTitle: How to use Nginx as Load Balancer for your application
description: "Nginx is a popular open-source web server. It is well known for high performance and scalability. In this tutorial, we'll learn to use Nginx as a load balancer"
date: Fri, 30 Apr 2021 07:31:14 +0000
author: Assad Mahmood
summary: 'Nginx is popular for its high performance and scalability. It’s the #1 open source web server. In this tutorial, we’ll learn to use Nginx as a load balancer.'
url: /web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/

categories: ['Web Server Solution Stack']

---
## Nginx is popular for its high performance and scalability. It’s the #1 open source web server. In this tutorial, we’ll learn to use Nginx as a load balancer.

{{< figure align=center src="images/nginx-as-load-balancer.png" alt="How to use nginx as load balancer">}}  

Modern high traffic websites serve hundreds of thousands, and in some cases millions of concurrent requests from users or clients and return the correct text, images, video, or application data, all in a fast and reliable manner. To meet the needs of these high volumes, and computing power you need more servers. With more servers, you need a way to load balance the traffic between these servers. In this blog tutorial, we’ll explore what a load balancer is and how we can use Nginx as a load balancer.

To configure nginx load balancing as a prerequisite, you will need to have at least two hosts with a web server software installed and configured to see the advantages of load balancing with nginx. If you already have one running web host set up then duplicate it by creating a custom image and deploy it onto a new web server. So, let’s learn how to set up nginx load balancing configuration step by step for your cloud servers.!

  * **[Nginx Web Server][1]**
  * **[Load Balancer][2]**
  * **[Setup Nginx as Load Balancer (Round Robin)][3]**
  * **[About Different Upstream Directives][4]**
  * **[Conclusion][5]**

## Nginx Web Server {#webserver}

Nginx is a high-performance, open-source web server. In addition to its HTTP server capabilities, NGINX can also function as a proxy server for email (IMAP, POP3, and SMTP) and a reverse proxy and to load balance nginx for HTTP, TCP, and UDP servers. It Improves the Performance, Reliability, and Security of Your Applications. It’s popular for its rich feature set, simple configuration, and low resource consumption. 

How does Nginx work? Nginx is commonly used as a nginx reverse proxy load balancer as a single entry point to a distributed web application working on multiple separate servers. It uses an asynchronous, event-driven approach to offer low memory usage and high concurrency. You can read more about Nginx [here][6].

## Load Balancer {#loadbalancer}

Load balancing is the process of distributing network traffic across multiple servers. And the “Software” or “Hardware” that performs this distribution process is called Load Balancer. A load balancer is like a “traffic cop” standing in front of your servers and routing client requests across all servers. It assures that your application remains operational even if one of the servers goes down.

{{< figure align=center src="images/223F67DC-2518-4CDD-883A-7DAF3C78A7CC.png" alt="nginx as load balancer">}}  

Main functions of a load balancer are following:

  * Distributes client requests or network load efficiently across multiple servers
  * Ensures high availability and reliability by sending requests only to servers that are online
  * Provides the flexibility to add or subtract servers as demand dictates

## Setup Nginx as Load Balancer {#setup}

Before setting up Nginx round robin load balancing, you should have Nginx installed on your server. You can install it quickly with apt-get:


```
sudo apt-get install nginx
```


In order to set up a round-robin load balancer, we will need to use the Nginx upstream module. We will update the nginx load balancer configuration into the Nginx settings. Let’s open your website’s configuration. For the sake of this example, I’m using the default configuration file


```
sudo vi /etc/nginx/sites-available/default
```


We need to add the load balancing configuration to the file to configure load balancer with nginx.

First we need to include the upstream module for nginx upstream load balancing which looks like this:


```
upstream backend  {
  server backend1.example.com;
  server backend2.example.com;
  server backend3.example.com;
}
```


Use this backend upstream as your proxy endpoint in your server block:


```
server {
  location / {
    proxy_pass  http://backend;
  }
}
```


Restart Nginx


```
sudo service nginx restart
```


As long as you have all of the servers in place you should now find that the nginx open source load balancer will begin to distribute the visitors to the servers equally. This equal distribution is called the round-robin load balancing.

## Upstream Directives {#upstream}

In our last example, we used a simple upstream module to do round-robin load balancing to distribute the traffic equally among the servers. However, there are many reasons why this may not be the most efficient way to work with traffic. There are several directives that we can use to direct site visitors more effectively.

### Weight

One way to begin to allocate users to servers with more precision is to allocate specific weight to certain machines. Nginx allows us to assign a number specifying the proportion of traffic that should be directed to each server.

A load balanced setup that included server weight could look like this:


```
upstream backend  {
  server backend1.example.com weight=1;
  server backend2.example.com weight=2;
  server backend3.example.com weight=4;
}
```


The default weight is 1. With a weight of 2, backend2.example will be sent twice as much traffic as backend1, and backend3, with a weight of 4, will deal with twice as much traffic as backend2 and four times as much as backend 1.

### Hash

IP hash allows servers to respond to clients according to their IP address, sending visitors back to the same VPS each time they visit (unless that server is down). If a server is known to be inactive, it should be marked as down. All IPs that were supposed to route to the down server are then directed to an alternate one.

The configuration below provides an example:


```
upstream backend {
  ip_hash;
  server   backend1.example.com;
  server   backend2.example.com;
  server   backend3.example.com  down;
 }
```


### Max Fails

According to the default round-robin settings, Nginx application load balancer will continue to send data to the virtual private servers, even if the servers are not responding. Max fails can automatically prevent this by rendering unresponsive servers inoperative for a set amount of time.

There are two factors associated with the max fails: max\_fails and fall\_timeout. Max fails refers to the maximum number of failed attempts to connect to a server that should occur before it is considered inactive. Fall_timeout specifies the length of that the server is considered inoperative. Once the time expires, new attempts to reach the server will start up again. The default timeout value is 10 seconds.

A sample configuration might look like this:


```
upstream backend  {
  server backend1.example.com max_fails=3  fail_timeout=15s;
  server backend2.example.com weight=2;
  server backend3.example.com weight=4;
}
```


## Conclusion: {#conclusion}

In this nginx load balancing tutorial, we learned about Ngnix, Load Balancing, and how to setup nginx load balancer to distribute your traffic to multiple servers. We also explored different load balancing algorithms like round-robin, Hash, and Max Fails. If you are running an application with high volume and you need to distribute load across different servers then Nginx is one of the best choices for you. And most importantly it’s 100% free and open-source web server.

_Your can join us on [Twitter][7], [LinkedIn][8] and our [Facebook][9] page. What other powerful load balancer to improve your servers resource availability and efficiency __do you__ use? . If you have any questions or feedback, please_ [get in touch][10].

## Explore

You may find the more related below articles

  * [How To Secure and Encrypt Nginx with Let’s Encrypt on Ubuntu 20.04][11]
  * [Apache vs Nginx – Detailed Comparison in 2021][12]

 [1]: #webserver
 [2]: #loadbalancer
 [3]: #setup
 [4]: #upstream
 [5]: #conclusion
 [6]: https://products.containerize.com/solution-stack/nginx
 [7]: https://twitter.com/containerize_co
 [8]: https://www.linkedin.com/company/containerize/
 [9]: http://facebook.com/containerize
 [10]: mailto:yasir.saeed@aspose.com
 [11]: https://blog.containerize.com/2021/04/19/how-to-secure-and-encrypt-nginx-with-lets-encrypt-on-ubuntu-20.04/
 [12]: https://blog.containerize.com/2021/02/26/apache-vs-nginx-detailed-comparison-in-2021/