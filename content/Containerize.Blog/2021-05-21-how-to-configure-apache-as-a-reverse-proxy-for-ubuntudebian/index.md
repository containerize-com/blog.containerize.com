---
title: How To Configure Apache as a Reverse Proxy For Ubuntu/Debian
seoTitle: How To Configure Apache as a Reverse Proxy For Ubuntu/Debian
description: Apache Reverse Proxy configuration step by step allows you to run one or more back end servers behind a proxy server with mod_proxy on ubuntu/debian Linux.
date: Fri, 21 May 2021 18:58:46 +0000
author: yasir saeed
summary: Apache Reverse Proxy allows you to run one or more back-end servers behind a proxy server. Here’s how to configure Apache Reverse Proxy on Ubuntu/Debian system.
url: /web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/

categories: ['Web Server Solution Stack']

---
## Apache Reverse Proxy allows you to run one or more back-end servers behind a proxy server. Here’s how to configure Apache Reverse Proxy on Ubuntu/Debian system.

{{< figure align=center src="images/Install-and-Configure-Apache-as-a-Reverse-Proxy-1.png" alt="Install and configure Apache Reverse Proxy">}}  

## **Overview**

Apache Reverse Proxy allows all traffic and forwards it to run one or more backend servers or containers behind a proxy server, without exposing them publicly. The back-end web server can be either another Apache2 or open source HTTP server like Nginx. Apache2 HTTP server is one of the most popular open source web server that is being used today.

There are many reasons to install and configure a proxy server. For Example, reverse proxy can help you to add security, for load balancing, restrict access to certain locations in order to prevent attacks and many more. This article explains how to install and configure apache reverse proxy configuration step by step for HTTPS Server on Ubuntu/Debian:

  * Installing Apache2
  * Configure Apache2
  * Enable its proxy modules
  * Enable the SSL
  * Restart Apache2
  * Conclusion

## Step 1: Install Apache2

Installing Apache2 is very simple and easy to run. To do Installations, run the below commands simply:

<pre class="wp-block-preformatted">sudo apt-get update
sudo apt-get install apache2
</pre>

After installing Apache2 on your system, use the following systemctl commands on Debian Linux or Ubuntu Linux version Ubuntu to stop, start, enable and restart Apache2 to always restart when the server boots up.

<pre class="wp-block-preformatted">sudo systemctl stop apache2.service
sudo systemctl start apache2.service
sudo systemctl enable apache2.service
sudo systemctl restart apache2.service
</pre>

You can view web server status using the following command:

<pre class="wp-block-preformatted">sudo systemctl status apache2.service
</pre>

To check Apache2 setup, open your browser and browse to the server hostname or your system IP address and you should see Apache2 default test page as shown below. When you see that, then Apache2 is working as expected. http://localhost

{{< figure align=center src="images/apache-reverse-proxy.png" alt="Install and Configure apache reverse proxy Proxy For Ubuntu">}}  

## Step 2: Configure Apache2 as Reverse Proxy

Apache2 is successfully installed and ready to use. You can now configure Apache2 to work as a apache2 reverse proxy ubuntu. Apache2 proxy module’s **ProxyPass** and **ProxyPassReverse** function provide a reverse proxy. To use **ProxyPass** and **ProxyPassReverse**, you must first know that where you want to direct site traffic.

The apache2 reverse proxy server will listen for all traffic on the default HTTP port, which is port 80 in a simple setup. The back-end server which host the website content will listen on a custom port and it is most likely port 8080.

In this blog article, we are going set up Apache2 to listen on port 80 and then direct traffic to the back-end server which listens on port 8080. Run below command to create a proxy VirtualHost file called Apache2Proxy.conf.

<pre id="block-ab7e7efb-6aa0-4e4d-9b50-e80fbf205715" class="wp-block-preformatted">sudo nano /etc/apache2/sites-available/Apache2Proxy.conf</pre>

Then add the following block of codes in the Apache2Proxy.conf file and then save it.

<pre class="wp-block-preformatted"><VirtualHost *:80>
        ServerName example.com
        ServerAlias www.example.com
        ServerAdmin webmaster@example.com
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined

        ProxyRequests Off
        <Proxy *>
          Order deny,allow
          Allow from all
        </Proxy>
        
        ProxyPass / http://127.0.0.1:8080/
        ProxyPassReverse / http://127.0.0.1:8080/

        <Location />
          Order allow,deny
          Allow from all
        </Location>

   </VirtualHost>
</pre>

Apache2Proxy.conf file contains your server name as well as the proxy_pass where traffic will be directed when received by the http proxy server.

## Step 3: Enable Apache2 Proxy

Apache2 web server is now installed and setup successfully. Apache has many available bundled modules bundled with in it. These modules are not enabled in fresh apache2 installation. First we’ll need to enable the modules we need to enable required apache mod_proxy module and several of its add-on modules to support different network protocols. Run the below listed commands to enable its http proxy modules.

<pre class="wp-block-preformatted">sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod proxy_balancer
sudo a2enmod lbmethod_byrequests
</pre>

Now enable the VirtualHost site and restart Apache2 to enable reload the Apache2 modules configuration.

<pre class="wp-block-preformatted">sudo a2ensite Apache2Proxy.conf 
sudo systemctl restart apache2.service</pre>

Launch a web browser of your choice and navigate to your server hostname like example.com. You will now be proxied to your Apache2 server on default port i.e 8080.

## Step 4: Enable the SSL {#block-07b86d83-dca0-4924-b991-206719c342eb}

If you want to enable the apache reverse proxy ssl module then run the below command to enable apache reverse proxy https proxy pass:

<pre id="block-ab7e7efb-6aa0-4e4d-9b50-e80fbf205715" class="wp-block-preformatted">sudo a2enmod ssl</pre>

This will provide secure apache reverse proxy http to https support to backend servers.

## Step 5: Restart Apache2 {#block-836bb4ff-17ad-4317-8ecb-153104bd28a7}

To make these changes into effect, restart Apache by running the below command:

<pre id="block-ab7e7efb-6aa0-4e4d-9b50-e80fbf205715" class="wp-block-preformatted">sudo systemctl restart apache2.service</pre>

Congratulations! You have successfully installed and configured Apache2 reverse proxy on your Linux system.

## **Conclusion:** {#4a1a}

In this tutorial, we explored and discussed what is a Proxy Server and apache reverse proxy example configuration step by step. We also learned how to set up and configure apache2 as a reverse proxy on a linux system. In our upcoming tutorials, we’ll discuss more interesting topics about apache and other web server solution stacks.

## Explore

You may also like the below more related articles:

  * [How to][1] [Install and Secure phpMyAdmin with Nginx on Ubuntu][2]
  * [How to Setup Nginx With Passenger on AWS Production Server][3]
  * [Configure HTTP/2 Support in Nginx On Ubuntu/Debian][4]
  * [Secure and Encrypt Nginx with Let’s Encrypt on Ubuntu 20.04][5]
  * [How to Install and Configure ownCloud with Apache on Ubuntu][6]

 [1]: https://blog.containerize.com/2021/05/21/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
 [2]: https://blog.containerize.com/2021/06/04/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
 [3]: https://blog.containerize.com/2021/05/07/how-to-setup-nginx-with-passenger-on-aws-production-server/
 [4]: https://blog.containerize.com/2021/05/28/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
 [5]: https://blog.containerize.com/2021/04/19/how-to-secure-and-encrypt-nginx-with-lets-encrypt-on-ubuntu-20.04/
 [6]: https://blog.containerize.com/2021/06/11/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/