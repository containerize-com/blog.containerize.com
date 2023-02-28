---
title: How to Setup Nginx With Passenger on AWS Production Server
seoTitle: How to Setup Nginx With Passenger on AWS Production Server
description: This blog post describe steps for the installation of Nginx with Passenger through the Ubuntu 20.04 LTS operating system following APT method.
date: Fri, 07 May 2021 15:19:29 +0000
author: yasir saeed
summary: This blog post describes the steps for the installation of NGINX with Passenger through the Ubuntu 20.04 LTS operating system following APT method.
url: /web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/

categories: ['Web Server Solution Stack']

---
## This blog post describes the steps for the installation of NGINX with Passenger through the Ubuntu 20.04 LTS operating system following APT method.

{{< figure align=center src="images/Nginx-With-Passenger-on-AWS-Production-Server.png" alt="Setup Nginx With Passenger on AWS Production Server">}}  

## **Overview**:

You need to install and configure **NGINX with Passenger on AWS production** server before you deploy your application on the production server. 

**Open source Phusion Passenger** provides a lot of customization and features options. Passenger some features are used for improving the application’s performance characteristics. Some of customization influence application or connection handling behavior etc. Two configuration options for Passenger are needed to be setup in Nginx, named as passenger\_enabled and passenger\_root. This installation process will setup both of these options automatically.

In this blog article, we are going to cover some of the essential configuration steps for the installation of web application server on the Ubuntu operating system following **APT method**. You will be able to deploy and administer web applications written in Node.js, Python, and Ruby after reading and following below guide.

  * **What Is NGINX and Passenger?**
  * **Install NGINX and Passenger Packages**
  * **Enable the Passenger NGINX Module and Restart NGINX**
  * **Validate Installations**
  * **System and Passenger Updates**
  * **The Best Open Source Web Servers**
  * **Conclusion**

## 1. What Is NGINX and Passenger? {#step-4:-update-regularly}

**[What is NGINX Server?][1]** NGINX is a free and open-source web server software for web serving as a reverse proxy, HTTP load balancer, media streaming, HTTP cache, and email proxy for IMAP, POP3, and SMTP. It is highly scalable, designed for maximum performance and stability. NGINX is high-performance asynchronous, non-threaded and event-driven web server which enables the processing of multiple client requests at the same time. It was written by Igor Sysoev, released in 2004 under the terms of the 2-clause BSD license. **NGINX performs 2.5 times faster** than Apache and consumed less memory according to a benchmark test.

**[What is Passenger?][2]** Phusion Passenger also known as mod\_rails and mod\_rack, is a free web server and open source web application server. It is designed to be fast, robust, feature-rich and lightweight that integrates with Apache and Nginx. It also improves security, reliability and scalability for applications. It allows administrators to gain insight into web application operations, server performance. Passenger app server runs and auto-manages your web applications easily. It can also **serve multiple applications** at the same time being multi-tenant and standalone. It can handle HTTP requests, manages processes and resources, and enables administration tasks, monitoring and problems diagnosis. Phusion Passenger is a free application server with support to deploy and administer Meteor, Ruby on Rails nginx passenger, JavaScript, Python, and Node.js applications.

## 2. Install NGINX and Passenger Packages: {#step-1:-install-passenger-packages}

Now it is time to install Passenger and Nginx. You will be able to easily deploy one of the popular web servers following this guide. Below listed commands will install Passenger and Nginx through Phusion’s APT repository. If you already had Nginx installed then these commands will upgrade Nginx to Phusion’s version with Passenger compiled in:


```
# Install Ubuntu PGP key and add HTTPS support for APT
sudo apt-get install -y dirmngr gnupg
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 561F9B9CAC40B2F7
sudo apt-get install -y apt-transport-https ca-certificates

# Add and update phusionpassenger APT repository
sudo sh -c 'echo deb https://oss-binaries.phusionpassenger.com/apt/passenger xenial main > /etc/apt/sources.list.d/passenger.list'
sudo apt-get update

# Install Passenger with Nginx
sudo apt-get install -y nginx-extras passenger
```


## 3. Enable the Passenger Nginx Module and Restart Nginx: {#step-2:-enable-the-passenger-nginx-module-and-restart-nginx}

Edit /etc/nginx/nginx.conf and uncomment include /etc/nginx/passenger.conf;. For example, you may see this:


```
# include /etc/nginx/passenger.conf;
```


Remove the ‘#’ characters, like this:


```
include /etc/nginx/passenger.conf;
```


If you don’t see a commented version of include /etc/nginx/passenger.conf; inside nginx.conf, then you need to insert it yourself. Insert it into /etc/nginx/nginx.conf inside the http block.

<pre class="wp-block-preformatted">http {
    include /etc/nginx/passenger.conf;
    ...
}</pre>

When you are finished with this step, **restart Nginx**:


```
$ sudo service nginx restart
```


## 4. Validate Installations: {#step-3:-check-installation}

After installation, please validate the install in terminal by running command `sudo /usr/bin/passenger-config validate-install`:


```
sudo /usr/bin/passenger-config validate-install
```


All checks should pass. If any of the checks do not pass, please follow the suggestions on screen.

Finally, check whether Nginx has started the Passenger core processes. Run `sudo /usr/sbin/passenger-memory-stats`. You should see Nginx processes as well as Passenger processes. For example like below:


```
sudo /usr/sbin/passenger-memory-stats
```


If you do not see any Nginx processes or Passenger processes, then you probably have some kind of installation problem or configuration problem. Please refer to the [troubleshooting guide][3].

## 5. System and Passenger Updates: {#step-4:-update-regularly}

Nginx updates, Passenger updates and system updates are delivered through the **APT package manager** regularly. You should run the following command regularly to keep them up to date:

<pre class="wp-block-preformatted">sudo apt-get update
sudo apt-get upgrade</pre>

You do not need to restart web or application after an update, and you also do not need to modify any configuration files after an update. That is all taken care of automatically for you by APT.

## 6. **The Best Open Source Web Servers**: {#step-4:-update-regularly}

**What is an open source web server?** An open source web server software is a public-domain software designed to deliver web pages over internet World Wide Web. Basically it processes requests via HTTP network protocol to distribute information on the World Wide Web.

More than 80% of web applications and websites are powered by open source web servers. Here i have listed some of **the most popular open source web servers** and you can easily deploy one of these popular web servers yourself.

  * **Apache HTTP Server**
  * **Lighttpd Web Server**
  * **OpenLiteSpeed Web Server**
  * **Apache Tomcat Web Server**
  * **Caddy Web Server**

## [][4]Conclusion: {#next-step}

Congratulations, you have successfully installed and configured nginx With passenger on **AWS production server** for your web application. Please take a look at the various guides in the [passenger library][5] for fully mastering passenger application server. You may be particularly interested in the [automating deployment][6] guide of your ruby application through **Capistrano**, which teaches you how to automatically deploy future application updates without so much manual work. Now you are ready to deploy your web application on the AWS production instances.

_What free web server and open source web application server_ do you prefer for **web development or hosting** needs_?. Do you have any questions about free web server and open source web application server?, Please_ [get in touch][7].

## Explore

You may find the following relevant blog posts:

  * [How To Configure Apache as a Reverse Proxy For Ubuntu/Debian][8]
  * [Install and Secure phpMyAdmin with Nginx on Ubuntu][9]
  * [Configure HTTP/2 Support in Nginx On Ubuntu/Debian][10]
  * [Secure and Encrypt Nginx with Let’s Encrypt on Ubuntu 20.04][11]
  * [How to Install and Configure ownCloud with Apache on Ubuntu][12]

 [1]: http://nginx.com/
 [2]: https://www.phusionpassenger.com/
 [3]: https://www.phusionpassenger.com/library/admin/nginx/troubleshooting/
 [4]: https://www.phusionpassenger.com/library/walkthroughs/deploy/ruby/aws/nginx/oss/xenial/install_passenger.html#next-step
 [5]: https://www.phusionpassenger.com/library/#guides
 [6]: https://www.phusionpassenger.com/library/deploy/nginx/automating_app_updates/ruby/
 [7]: mailto:yasir.saeed@aspose.com
 [8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/

 [9]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/

 [10]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/

 [11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
 [12]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
