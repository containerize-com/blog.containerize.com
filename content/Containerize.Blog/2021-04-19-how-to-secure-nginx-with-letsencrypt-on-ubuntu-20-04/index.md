---
title: How To Secure Nginx with Let’s Encrypt on Ubuntu 20.04
seoTitle: How To Secure Nginx with Let’s Encrypt on Ubuntu 20.04
description: "How To Setup, Encrypt and Secure Nginx with Let's Encrypt on Ubuntu. Let's Encrypt client to generate certificates to automatically configure Nginx."
date: Mon, 19 Apr 2021 06:27:22 +0000
author: yasir saeed
summary: Websites include SSL/TLS encryption for its domain to attract visitors. This article explains use of Certbot utility to obtain TLS/SSL certificates for Nginx.
url: /web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
categories: ['Web Server Solution Stack']

---
## Websites include SSL/TLS encryption for its domain to attract visitors. This article explains use of Certbot utility to obtain TLS/SSL certificates for Nginx.

{{< figure align=center src="images/nginxletsencrypt.png" alt="Secure Nginx with Let's Encrypt on Ubuntu">}}  

## **Overview**

Any website that seeks to attract visitors needs to include TLS/SSL encryption for its domain. SSL free certificates ensure a safe connection between your web server like to encrypt and secure nginx and application browsers. Let’s Encrypt is a free, automated and open certificate authority that allows you to set up such protection for Nginx ssl letsencrypt. Let’s Encrypt free SSL certificates are trusted by all major browsers and valid for next 90 days from the issue date.

This blog post explains simplest way to encrypt and secure Nginx running web server on Ubuntu 20.04 / 18.04 by obtaining nginx https letsencrypt certificates using the nginx Certbot utility and set up your certificates to renew it automatically. Let’s start and setup letsencrypt ubuntu nginx configurations.

  * Dependencies and Prerequisites
  * Installing Certbot Utility
  * Confirming Nginx’s Configuration
  * Allowing HTTPS Through the Firewall
  * Obtaining an SSL Certificate
  * Conclusion

## First things first: Dependencies and Prerequisites {#prerequisites}

In order to follow this article, you’ll need following dependencies and prerequisites to install letsencrypt ubuntu nginx utilities:

  * A sudo-enabled non-root or root user on local/remote machines.
  * A system running Ubuntu 20.04 or Ubuntu 18.04
  * Access to a command line terminal
  * Sudo or root privileges on local/remote machines
  * Nginx installed and set up
  * A registered domain name pointing to public IP
  * A server block configured for that domain name
  * Firewall is configured to accept connections on ports 80 and 443.

## Step 1 — Installing Certbot {#step-1-—-installing-certbot}

First step for securing nginx and to encrypt Nginx with Let’s Encrypt is to install nginx certbot fully-featured and easy to use package for obtaining and renewing Let’s Encrypt SSL certificates on your server. To do so, start by opening a terminal on ubuntu and updating the local repository. Type y and ENTER if prompted.


```
sudo apt update
sudo apt install certbot python3-certbot-nginx

```


Now let’s verify some of Nginx secure configuration settings.

## Step 2 — Confirming Nginx’s Configuration {#step-2-—-confirming-nginx-39-s-configuration}

As explained in the dependencies and prerequisites section, you should already have a registered domain and certbot needs to be able to find the correct Nginx server block for that domain to automatically configure SSL. As an example, this blog post uses the domain blog.containerize.com and server block for your domain at /etc/nginx/sites-available/blog.containerize.com with the server_name directive already set correctly.

To confirm, open the configuration file for your domain using nano or your favorite text editor:


```
sudo nano /etc/nginx/sites-available/blog.containerize.com

```


Find the existing server_name directive line in file /etc/nginx/sites-available/blog.containerize.com . It should look like this:


```
...
server_name blog.containerize.com www.blog.containerize.com;
...
```


Now verify the syntax of your Nginx configuration files and reload Nginx server to load the new configuration settings:


```
sudo nginx -t
sudo systemctl reload nginx

```


Certbot utility now can find the correct Nginx server block directive to secure nginx and updates it automatically. In next step, let’s update the firewall to allow HTTPS traffic.

## Step 3 — Allowing HTTPS Through the Firewall {#step-3-—-allowing-https-through-the-firewall}

As recommended in this article prerequisites you’ll need to adjust the settings to allow for HTTPS traffic. To ensure that your firewall is enabled and active , run the below command:


```
sudo ufw status

```


The output should tell you UFW is active and give you a list of set rules. It only shows HTTP traffic is allowed to the web server. To allow encrypted traffic, you can either add the Nginx HTTPS profile or use Nginx Full and delete the existing Nginx HTTP rule. Allow Nginx HTTPS traffic by typing the command:


```
sudo ufw allow 'Nginx Full'
sudo ufw delete allow 'Nginx HTTP'

```


Verify https rule that allows HTTPS traffic by by typing the ufw status command:


```
sudo ufw status

```


Next, let’s run Certbot and fetch our certificates.

## Step 4 — Obtaining an SSL Certificate {#step-4-—-obtaining-an-ssl-certificate}

The Nginx’s plugin for Certbot will take care of reconfiguring Nginx and reloads its configuration when necessary. Therefore, only you need to generate certificates with the NGINX plug‑in by executing the following command:


```
sudo certbot --nginx -d blog.containerize.com -d www.blog.containerize.com

```


 If this is your first time running certbot utility then certbot asks you to configure your HTTPS settings. You will be prompted to enter an email address and agree to the terms of service. After hit ENTER, the configuration will be updated, and Nginx will reload to pick up the new settings. Finally, certbot will display with a message telling you that a certificate was successfully generated and where your certificates are stored.

Your certificates are downloaded, installed, and loaded with nginx ssl certificate letsencrypt configurations. Try reloading your website using https:// and notice your browser’s security indicator. It should indicate that the site is properly secured, usually with a lock icon. If you test your server using the SSL Labs Server Test, it will get an A grade for nginx and letsencrypt.

Let’s finish by testing the renewal process.

## Step 5 — Verifying Certbot Auto-Renewal {#step-5-—-verifying-certbot-auto-renewal}

Since Let’s Encrypt certificates expire every ninety(90) days and nginx ssl letsencrypt encourage users setting up and automatic renewal cron job. First, open the crontab configuration file for the current user:


```
sudo crontab -e
```


Add a cron job that runs the certbot command, certbot renew nginx renews the certificate if it detects the certificate will expire within 30 days. Schedule it to run daily at a specified time e.g 05:00 a.m.


```
sudo certbot renew --dry-run

```


The cron job should also include the –quiet attribute, as in the command above. This instructs nginx renew ssl certificate not to include any output after performing the task. Enable automatic certificate renewal. Once you added the cron job, save the changes, and exit the file.

## Conclusion {#conclusion}

In this article, we learned how to nginx install letsencrypt ssl certificate. We downloaded SSL certificates for your domain and configured Nginx to use these certificates. In addition, you should have enabled certbot to renew certificates automatically for ssl nginx letsencrypt. In our upcoming tutorials, we’ll discuss about more interesting topics about how to secure a web server with standard security technology that enables encrypted communication between a web browser and a web server.

_Your can join us on [Twitter][1], [LinkedIn][2] and our [Facebook][3] page. What cryptographic protocol do you use to provide communications security over a computer network?. If you have any questions, please_ [get in touch][4].

## Explore

You may find the following relevant links to monitor the server performance and ensuring its reliability and security:

  * [How To Configure Apache as a Reverse Proxy For Ubuntu/Debian][5]
  * [How To Install and Secure phpMyAdmin with Nginx on Ubuntu][6]
  * [Configure HTTP/2 Support in Nginx On Ubuntu/Debian][7]
  * [Setup Nginx With Passenger on AWS Production Server][8]
  * [How to Install and Configure ownCloud with Apache on Ubuntu][9]

 [1]: https://twitter.com/containerize_co
 [2]: https://www.linkedin.com/company/containerize/
 [3]: http://facebook.com/containerize
 [4]: mailto:yasir.saeed@aspose.com
 [5]: https://blog.containerize.com/2021/05/21/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
 [6]: https://blog.containerize.com/2021/06/04/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
 [7]: https://blog.containerize.com/2021/05/28/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
 [8]: https://blog.containerize.com/2021/05/07/how-to-setup-nginx-with-passenger-on-aws-production-server/
 [9]: https://blog.containerize.com/2021/06/11/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/