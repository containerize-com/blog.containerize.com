---
title: How to Install and Configure ownCloud with Apache on Ubuntu
seoTitle: How to Install and Configure ownCloud with Apache on Ubuntu
description: "ownCloud is open source client-server software for creating file hosting services. In this tutorial, we'll learn how to install and configure ownCloud on Ubuntu"
date: Fri, 11 Jun 2021 18:59:44 +0000
author: yasir saeed
summary: ownCloud is an open-source collection of client-server software for creating file hosting servers. This tutorial is about how to configure OwnCloud on Ubuntu.
url: /how-to-install-and-configure-owncloud-with-apache-on-ubuntu/

categories: ['Backup and Sync Software', 'Web Server Solution Stack']

---
## ownCloud is an open-source collection of client-server software for creating file hosting servers. This tutorial is about how to configure OwnCloud on Ubuntu.

{{< figure align=center src="images/Install-and-Configure-ownCloud-with-Apache-on-Ubuntu.png" alt="">}}  

## **Overview**

OwnCloud is free and popular robust open source enterprise web application written in PHP that’s used for data synchronization and file sharing. It also allows you to easily manage data files, contacts, calendars, to do lists and many more. It is a great alternative to the most popular cloud platforms such as Google Drive, Dropbox, iCloud, and other cloud storage services out there. But unlike the other cloud storage services, OwnCloud self hosted is free to create own host cloud.

ownCloud is an open source private cloud software that provides data access using web interface to create a private cloud. It enables you to create your own file sharing server where you can easily view and sync calendar events, archives, pictures, recordings, tasks, address books with bookmarks, similar to Dropbox and Google Drive. It also provides options to sync and share data across devices all under your control. Install and configure ownCloud supports your data synced for desktop clients as well as mobile app devices. Moreover, You can easily implement user and group access restrictions on files per user using ownCloud on Ubuntu. OwnCloud open source personal storage server is a cross platform application and can be installed on all popular operating systems.

This tutorial will help you to setup owncloud and configure ownCloud on Ubuntu LTS systems.

  * Install LAMP Server
  * Download ownCloud
  * Create MySQL Database and User
  * Install ownCloud
  * What Are The Best Alternatives to OwnCloud?
  * Conclusion

## Step 1: Install LAMP Server

To setup own cloud server and how to create a private cloud, we first need to set up a running LAMP server. If you have already installed and running LAMP stack, skip this step else use the followings commands to set up the LAMP on your Ubuntu system.

### Install PHP

You can install PHP 5.6 or higher version on your Ubuntu or Debian system by running commands:

<pre class="wp-block-preformatted">sudo apt-get install python-software-properties
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install -y php php-gd php-curl php-zip php-dom php-xml php-simplexml php-mbstring
</pre>

### Install Apache2

Apache is the most widely used open-source web server software. Next, install the Apache Web Server on Ubuntu for setting up your own cloud server by running:

<pre class="wp-block-preformatted">sudo apt-get install -y apache2 libapache2-mod-php
</pre>

### Install MySQL

MySQL open-source relational database management system is a component of the LAMP web application software stack and others. Now installing MySQL on Ubuntu by running below:

<pre class="wp-block-preformatted">sudo apt-get install -y mysql-server php-mysql
</pre>

## Step 2: Download ownCloud on Ubuntu

After successfully configuring lamp server on your Ubuntu system, Let’s download latest ownCloud private cloud storage solution from its [official website][1].

<pre class="wp-block-preformatted">cd /tmp
wget https://download.owncloud.org/community/owncloud-10.4.0.tar.bz2
</pre>

After download owncloud server software has completed, now extract the downloaded archive under website document root and setup appropriate permissions on files and directories by running for installing owncloud on ubuntu.

<pre class="wp-block-preformatted">cd /var/www/html
sudo tar xjf /tmp/owncloud-10.4.0.tar.bz2
sudo chown -R www-data:www-data owncloud
sudo chmod -R 755 owncloud
</pre>

Now, remove the archive file and restart apache server.

<pre class="wp-block-preformatted">sudo rm -f /tmp/owncloud-10.4.0.tar.bz2
sudo systemctl restart apache2</pre>

## Step 3: Create Owncloud Database and User

After extracting code, now let’s create a MySQL database and user account for configuring ownCloud personal cloud storage server. Use following set of commands to login to MySQL server to create ownCloud database and user.

<pre class="wp-block-preformatted">mysql -u root -p
Enter password:

mysql> CREATE DATABASE owncloud;
mysql> GRANT ALL ON owncloud.* to 'owncloud'@'localhost' IDENTIFIED BY '_password_';
mysql> FLUSH PRIVILEGES;
mysql> quit
</pre>

Next, we need to install ownCloud on ubuntu from the web interface to create a private cloud.

## Step 4: Install ownCloud on Ubuntu

Now access the ownCloud best personal cloud server web panel directory on a web browser. Change localhost to your server IP address or domain name.

<pre class="wp-block-preformatted">http://localhost/owncloud/
</pre>

You should see the open source owncloud login page. Enter new admin username and password credentials to create an admin account and provide the location of the data folder. If everything okay So then you should get the web page like this.

<div class="wp-block-image">
  {{< figure align=center src="images/owncloud-setup-1.png" alt="Install ownCloud with Apache on Ubuntu">}}
</div>

Now slide your page down. In the below form you need to input username and password to manager best personal cloud server OwnCloud panel. Also provide the database along with username and password to connect OwnCloud server with database server, the location of the data folder and click on **Finish Setup**.

<div class="wp-block-image">
  {{< figure align=center src="images/owncloud-setup-2.png" alt="configure owncloud on ubuntu">}}
</div>

After completing the setup you will get the admin dashboard. Where you can create users, groups and assigned them permissions, etc.

<div class="wp-block-image">
  {{< figure align=center src="images/owncloud-after-login.png" alt="install owncloud Dashboard">}}
</div>

Yeah! we are done with owncloud installation guide to build personal cloud storage . You now know how to completely install OwnCloud on Ubuntu for building a private cloud step by step similar to Dropbox or Google Drive.

## **What Are The Best Alternatives to OwnCloud?** {#4a1a}

Following are the self hosted ownCloud alternatives and competitors file hosting software.

  * **Seafile** is open source cross-platform file hosting software system
  * **Nextcloud** is free and open source cloud storage platform
  * **Resilio Sync** is open source peer to peer file synchronization application
  * **Pydio Cells** is open source file sharing and synchronisation software
  * **Syncthing** is free and open source peer-to-peer file synchronization application

## **Conclusion:** {#block-dd1258f4-e0c5-4ac9-be18-7dd2a700f09e}

Congratulations! You have successfully installed and configured OwnCloud to build your own private cloud with Apache on Ubuntu machine. Now your data is never in the hands of third parties and can be managed privately in virtual private cloud owncloud ubuntu server storage. Many companies are choosing to create their ownCloud servers with a lot of vital information due to many problems with the privacy of data. In our upcoming tutorials, we’ll discuss more interesting topics of web server solution stacks.

_Your can join us on [Twitter][2], [LinkedIn][3] and our [Facebook][4] page. What cloud-based storage solution do you use online?. If you have any questions, please_ [get in touch][5].

## Explore:

We also have several other articles relating to the day-to-day management of your server.

  * [How To Configure Apache as a Reverse Proxy For Ubuntu/Debian][6]
  * [How To Install and Secure phpMyAdmin with Nginx on Ubuntu][7]
  * [Secure and Encrypt Nginx with Let’s Encrypt on Ubuntu 20.04][8]
  * [Configure HTTP/2 Support in Nginx On Ubuntu/Debian][9]
  * [Setup Nginx With Passenger on AWS Production Server][10]

 [1]: https://owncloud.org/install/
 [2]: https://twitter.com/containerize_co
 [3]: https://www.linkedin.com/company/containerize/
 [4]: http://facebook.com/containerize
 [5]: mailto:yasir.saeed@aspose.com
 [6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/

 [7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/

 [8]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
 [9]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/

 [10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
