---
title: How to Configure HTTP/2 Support in Nginx On Ubuntu/Debian
seoTitle: How to Configure HTTP/2 Support in Nginx On Ubuntu/Debian
description: HTTP2 or h2 is a binary protocol and improved version of the HTTP protocol that allows to increase the speed of the site pages after nginx enable http2 support
date: Fri, 28 May 2021 18:59:02 +0000
author: yasir saeed
summary: HTTP/2 is a robust multiplexed protocol for improving page load speed and security. In this tutorial, we will learn how to setup NGINX with HTTP/2 support.
url: /web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/

categories: ['Web Server Solution Stack']

---
## HTTP/2 is a robust multiplexed protocol for improving page load speed and security. In this tutorial, we will learn how to setup NGINX with HTTP/2 support.

{{< figure align=center src="images/nginx-enable-http2.png" alt="Nginx enable http2 support on Ubuntu and Debian">}}  

## **Overview**

Nginx is a open source fast and reliable web server. It gained popularity due to its low memory footprint, load balancing, high scalability, caching, support for the majority of protocols and reverse proxying. Now let’s talk about how nginx enable http2 protocol.

One of the protocols supported by Nginx is HTTP/2 which was published in May 2015. The main advantage of HTTP/2 is its high transfer speed for content-rich websites, reduces the load on the web server and it can initiate multiple parallel requests in a single TCP connection. Nginx enable http2 is an improved version of the HTTP protocol. Before we get started, we will need a few Ubuntu or Debian server with SSL certificate. In this tutorial, we’ll guide you step-by-step on how to nginx enable http2 on ubuntu.

  * Updating the packages and Installing Nginx
  * Enabling HTTP/2 Support
  * Adding the Server Name
  * Adding the SSL Certificates
  * Removing the Ciphers
  * Redirect all HTTP Requests to HTTPS
  * Restart Nginx
  * Conclusion

## Step 1: Updating the packages and Installing Nginx {#4597}

The first step is to update and upgrade the repositories in the apt packaging system. Using update will download the latest version packages and upgrading will install the latest version of the packages in the list. Run the below apt command to update and upgrade the packages.


```
sudo apt-get update && apt-get upgrade
```


The next step is to install the latest version of nginx package. Support for the HTTP/2 protocol was introduced in Nginx version 1.9.5 and above. Therefore, we will have to install the latest version of the Nginx package. Run the below use apt install command to install the Nginx packages:


```
sudo apt-get install nginx
```


You will be prompted to confirm the step by step installation process. Select YES option and finish the installation process. After the installation process finishes, the next step is to check the version of the package whether we have installed the right version or not. You can check the version of nginx web server by typing command:


```
sudo nginx -v
```


The output of above version check command should be similar to the following:


```
nginx version: nginx/1.10.0 (Ubuntu)
```


## Step 2: Enabling HTTP/2 Support {#f4d2}

After installing the nginx package, we need to enable http2 nginx. The user has to change the listening port from 80 to 443. Let’s open the nginx configuration file:


```
sudo nano /etc/nginx/sites-available/domain-name.com
```


You can see the by default value of Nginx is set to listen is port 80.

<pre class="wp-block-preformatted">listen 80 default_server; 
listen [::]:80 default_server;</pre>

As you can see that there two different listen variables. The first one listen variable is for all IPv4connections and the second one is for IPv6 connections. We will enable encryption for both variables. Change the listening port number to 443 and add SSL connection for HTTPS protocol as shown below:

<pre class="wp-block-preformatted">listen 443 ssl http2 default_server; 
listen [::]:443 ssl http2 default_server;</pre>

Notice that in addition to ssl, we also added http2. Nginx is now able to use browsers that supports HTTP/2 protocol.

## Step 3: Adding the Server Name {#a745}

Next step is to change the server\_name so that the server name is associated with the domain name. The user just needs to change the server name in the configuration file. Locate the server\_name entry in the configuration file and change _ to your actual domain, like this:


```
server_name example.com www.example.com;
```


Save the server configuration file by editing in the text editor. You can check the Nginx configuration for syntax errors with command:


```
sudo nginx -t
```


If the syntax is error free then you will see the below output:

<pre class="wp-block-preformatted">nginx: the configuration file /etc/nginx/nginx.conf syntax is ok 
nginx: configuration file /etc/nginx/nginx.conf test is successful</pre>

## Step 4: Adding the SSL Certificates {#37c0}

Next step is to enable nginx https configuration to use your SSL certificate. You can generate a self signed certificate or [install a free certificate from Let’s Encrypt][1]. If you don’t have an SSL certificate then please follow this tutorial. Add your SSL certificates inside the nginx configuration directory similar to:


```
sudo mkdir /etc/nginx/ssl
```


Copy your certificate and the private key to this location and also replace example.com with your actual domain name:

<pre class="wp-block-preformatted">sudo cp /path/to/your/certificate.crt /etc/nginx/ssl/example.com.crt 
sudo cp /path/to/your/private.key /etc/nginx/ssl/example.com.key</pre>

Now open nginx server configuration file once again. Add and configure new SSL lines inside the nginx server block with the location of your certificates to enable nginx ssl configuration:

<pre class="wp-block-preformatted">sudo nano /etc/nginx/sites-available/domain-name.com
ssl_certificate /etc/nginx/ssl/example.com.crt; 
ssl_certificate_key /etc/nginx/ssl/example.com.key;</pre>

Save the file nginx file and exit the text editor.

## Step 5: Removing the Ciphers {#d291}

Cipher is an algorithm used in cryptography for data encryption and decryption. Cipher suites are a bunch of cryptographic algorithms used to secure network connections. HTTP/2 has a huge blacklist of insecure ciphers which need to be removed. Here we will use a popular cipher set, approved by Internet giants CloudFlare. 

Open the following nginx configuration file /etc/nginx/nginx.conf and add the below lines just after **ssl\_prefer\_server_ciphers on.** These lines include the list of latest ciphers that HTTP2 browsers understand.


```
ssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+
AES256:EECDH+3DES:RSA+3DES:!MD5;
```




You may set gzip to off and add proxy\_max\_temp\_file\_size 0; to avoid err\_http2\_protocol_error nginx error.

## Step 6: Redirect all HTTP Requests to HTTPS {#b387}

Now we should tell nginx http2 proxy what it should serve the content through HTTPS only if the server receives an HTTP request. Finally, ignoring commented out lines, your nginx configuration file /etc/nginx/sites-available/domain-name.com should look similar to this:

<pre id="block-4729d98f-e94b-4b03-a80f-9f5ba7c1dd13" class="wp-block-preformatted">server {<br />        listen 443 ssl http2 default_server;<br />        listen [::]:443 ssl http2 default_server;<br />root /var/www/html;<br />index index.html index.htm index.nginx-debian.html;<br />server_name example.com;<br />location / {<br />                try_files $uri $uri/ =404;<br />        }<br />ssl_certificate /etc/nginx/ssl/example.com.crt;<br />ssl_certificate_key /etc/nginx/ssl/example.com.key;<br />ssl_dhparam /etc/nginx/ssl/dhparam.pem;<br />}<br />server {<br />       listen         80;<br />       listen    [::]:80;<br />       server_name    example.com;<br />       return         301 <a href="https://grigorkh.medium.com/$server_name$request_uri">https://$server_name$request_uri</a>;<br />}</pre>

Save the file /etc/nginx/sites-available/domain-name.com and then exit. Check the configurations for syntax errors:


```
sudo nginx -t
```


## Step 7: Restart Nginx {#e687}

To apply the all changes, restart the nginx http2 reverse proxy server and check configuration status.

<pre class="wp-block-preformatted">sudo systemctl restart nginx
sudo systemctl status nginx</pre>

## **Conclusion:** {#4a1a}

Congratulations, you have successfully learned how to set up nginx config http2 support on ubuntu server. Your nginx http2 settings is now serving HTTP/2 pages and it also cleared the difference between HTTP/1 and HTTP/2 protocols. If you still face any configuration issues, do let us know in the comment section.

Do you have any questions about HTTP2 multiplexed protocol?_, Please_ [get in touch][2].

## Explore

You may also like below articles:

  * [How To Configure Apache as a Reverse Proxy For Ubuntu/Debian][3]
  * [How to][3] [Install and Secure phpMyAdmin with Nginx on Ubuntu][4]
  * [How to Setup Nginx With Passenger on AWS Production Server][5]
  * [Secure and Encrypt Nginx with Let’s Encrypt on Ubuntu 20.04][1]
  * [How to Install and Configure ownCloud with Apache on Ubuntu][6]

 [1]: https://blog.containerize.com/2021/04/19/how-to-secure-and-encrypt-nginx-with-lets-encrypt-on-ubuntu-20.04/
 [2]: mailto:yasir.saeed@aspose.com
 [3]: https://blog.containerize.com/2021/05/21/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
 [4]: https://blog.containerize.com/2021/06/04/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
 [5]: https://blog.containerize.com/2021/05/07/how-to-setup-nginx-with-passenger-on-aws-production-server/
 [6]: https://blog.containerize.com/2021/06/11/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/