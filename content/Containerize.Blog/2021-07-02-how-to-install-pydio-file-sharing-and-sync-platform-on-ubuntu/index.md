---
title: How to Install Pydio File Sharing and Sync Platform on Ubuntu
seoTitle: How to Install Pydio File Sharing and Sync Platform on Ubuntu
description: "Pydio is an open source file sharing and self hosted collaborative document sharing software. Let's review how to install Pydio File Sharing and Sync Tool."
date: Fri, 02 Jul 2021 22:46:01 +0000
author: yasir saeed
summary: Pydio is a cloud-based file sharing and sync platform to access all data anywhere and on any device. This tutorial is about how to install Pydio on Ubuntu.
url: /backup-and-sync-software/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/

categories: ['Backup and Sync Software', 'Web Server Solution Stack']

---
## Pydio is a cloud-based file sharing and sync platform to access all data anywhere and on any device. This tutorial is about how to install Pydio on Ubuntu.

{{< figure align=center src="images/How-to-Install-Pydio-File-Sharing-and-Sync-Platform-on-Ubuntu.png" alt="How to Install Pydio File Sharing and Sync Platform on Ubuntu">}}  

## **Overview**

Pydio Cells is an open source file sharing and synchronisation software. It provides a single point of access to all your data storage and it is an alternative to ownCloud and Nextcloud that provide storage services, file sharing and sync. Pydio is an enterprise open source file sharing platform similar to Dropbox and other storage platforms. It helps you to securely connect all your files and devices in one platform.

Pydio Cells is a cloud-based files syncing and collaboration platform. This open source software runs on your personal IT infrastructure and helps your staff to protect and monitor your business data. You can synchronize your data and access it from anywhere using a mobile app, desktop software, or a web browser using Pydio Cells. The Pydio Cells best file sharing app is based on a micro-service architecture and is written using Golang programming language.

This tutorial will help you to install and configure Pydio self hosted file sharing software and sync platform on Ubuntu LTS systems.

  * Getting Started
  * Install LAMP Server
  * Install Pydio on Ubuntu
  * Create Pydio Database and User
  * Access Pydio on your browser
  * Conclusion

## Step 1: Getting Started

Before installations, you need to ensure that your system is running the latest packages. Use the command below to update your Ubuntu 20.04 server.


```
sudo apt-get update -y
sudo apt-get upgrade -y
```


After update, it is always recommended to reboot your server for the new changes to take effect.


```
sudo reboot
```


## Step 2: Install LAMP Server

To setup Pydio secure enterprise file sharing server and how to create an open source private cloud, we first need to set up a running LAMP server. If you have already installed and running LAMP stack, skip this step else use the followings commands to set up the LAMP on your Ubuntu system.

### Install PHP

You can install PHP on your Ubuntu or Debian system by running commands:

<pre class="wp-block-preformatted">sudo apt-get install python-software-properties
sudo add-apt-repository ppa:ondrej/php
sudo apt-get install -y php php-gd php-curl php-zip php-dom php-xml php-simplexml php-mbstring
</pre>

### Install Apache2

Apache is the most widely used open-source web server software. Next, install the Apache Web Server on Ubuntu by running:

<pre class="wp-block-preformatted">sudo apt-get install -y apache2 libapache2-mod-php
</pre>

### Install MySQL

MySQL open-source relational database management system is a component of the LAMP web application software stack and others. Now installing MySQL on Ubuntu by running below:

<pre class="wp-block-preformatted">sudo apt-get install -y mysql-server php-mysql
</pre>

Once installation is complete, open **php.ini **configuration file to edit. Use your preferred file editor.

Make changes to the php.ini file as below. Open two files and make the changes as shown


```
sudo vim /etc/php/7.4/apache2/php.ini
```


Make the following changes


```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```


Save and close the file and proceed to edit the other php.ini file


```
sudo vim /etc/php/7.4/cli/php.ini
```



```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```


## Step 3: Install Pydio on Ubuntu

First you need to add Pydio best free file sharing software repository to your Ubuntu 20.04 server because it is not already available. Also add Pydio best file sharing system for business public key and go ahead to update your system repository.


```
echo "deb https://download.pydio.com/pub/linux/debian/ bionic main" | sudo tee /etc/apt/sources.list.d/pydio.list
wget -qO - https://download.pydio.com/pub/linux/debian/key/pubkey | sudo apt-key add -
sudo apt update

```


It is now time to install Pydio efss and document sharing software. Run the command as shown


```
sudo apt install -y pydio pydio-all
```


Enable apache rewrite module using the below shown commands and restart and enable Apache2


```
sudo a2enmod rewrite
sudo systemctl restart apache2
sudo systemctl enable apache2
```


Confirm that Apache service is running using the below command:


```
sudo systemctl status apache2
```


The output should be as shown if installation was done properly, showing that apache2 service is running.

## Step 4: Create Pydio Database and User

After extracting code, now let’s create a MySQL database and user account for configuring Pydio. Use following set of commands to login to MySQL server to create Ajaxplorer sharesync or Pydio database and user.

<pre class="wp-block-preformatted">mysql -u root -p
Enter password:

mysql> CREATE DATABASE Pydio;
mysql> GRANT ALL ON Pydio.* to 'Pydio'@'localhost' IDENTIFIED BY '_password_';
mysql> FLUSH PRIVILEGES;
mysql> quit
</pre>

Next, we need to install Pydio on ubuntu from the web interface to create a private cloud.

## Step 5: Access Pydio on your browser

Open your browser and type the url _http://<your-server-IP>/pydio_. You should see a page as shown

Pydio private cloud file sharing and business file sharing software is now installed and configured, it is time to access their web interface.

Open your browser and type URL http: // your-server -IP / pydio. You will be redirected to the following page:

{{< figure align=center src="images/Pydio-Installer.png" alt="Pydio Installer">}}  

Confirm all controls and click the **CONTINUE TO PYDIO INSTALLATION **button. You should see the following page:

{{< figure align=center src="images/Pydio-setup-wizard.png" alt="Pydio setup wizard">}}  

Select your language and click **START WIZARD **. You should see the following page:

{{< figure align=center src="images/Starting-the-setting.png" alt="start the pydio settings">}}  

Enter the program name and welcome message. Then click the button **Next **. You should see the following page:

{{< figure align=center src="images/Enter-the-application-name.png" alt="Enter the pydio application">}}  

Next, enter your administrator account and click the **Next **button. You should see the following page:

{{< figure align=center src="images/MySQL-database-settings.png" alt="MySQL database settings">}}  

Then enter your database details, such as database name, username and password. Then click the **TEST DB CONNECTION **button. You should see the following page:

{{< figure align=center src="images/Pydio-Advanced-Options.png" alt="Pydio Advanced Options">}}  

Next, click the **INSTALL PYDIO **button. Once the installation has been completed successfully. You will be redirected to the following page:

{{< figure align=center src="images/Pydio-Login.png" alt="Pydio Login">}}  

Then enter your user name and password for the administrator. Then click the [ENTER] button . You should see the following page:

{{< figure align=center src="images/Welcome-to-Pydio.png" alt="Welcome to Pydio">}}  {{< figure align=center src="images/Pydio-dashboard.png" alt="Pydio dashboard">}} 

Yeah! It’s done. You now know how to completely install Pydio self hosted file sync and open source file sharing software on Ubuntu for building a private cloud step by step similar to Dropbox or Google Drive.

## **Conclusion:** {#4a1a}

In this tutorial, you’ve successfully installed the Pydio Cells open source secure file sharing on your Ubuntu system. You can use this article to create a cloud infrastructure for storing, securing and sharing your files in the self-hosted cloud. Use the Pydio collaborative document sharing and best free file sharing app to get more control of your data and ensure efficient collaboration in your business organization. In our upcoming tutorials, we’ll discuss more interesting topics of open source cloud storage solutions and file sharing collaboration tools.

_Your can join us on [Twitter][1], [LinkedIn][2] and our [Facebook][3] page. What cloud-based_ open source _file share platform do you use online?. If you have any questions, please_ [get in touch][4].

## Explore:

We also have several other articles relating to the day-to-day management of your server.

  * [How To Configure Apache as a Reverse Proxy For Ubuntu/Debian][5]
  * [How To Install and Secure phpMyAdmin with Nginx on Ubuntu][6]
  * [Secure and Encrypt Nginx with Let’s Encrypt on Ubuntu 20.04][7]
  * [Configure HTTP/2 Support in Nginx On Ubuntu/Debian][8]
  * [Setup Nginx With Passenger on AWS Production Server][9]

 [1]: https://twitter.com/containerize_co
 [2]: https://www.linkedin.com/company/containerize/
 [3]: http://facebook.com/containerize
 [4]: mailto:yasir.saeed@aspose.com
 [5]: https://blog.containerize.com/2021/05/21/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
 [6]: https://blog.containerize.com/2021/06/04/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
 [7]: https://blog.containerize.com/2021/04/19/how-to-secure-and-encrypt-nginx-with-lets-encrypt-on-ubuntu-20.04/
 [8]: https://blog.containerize.com/2021/05/28/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
 [9]: https://blog.containerize.com/2021/05/07/how-to-setup-nginx-with-passenger-on-aws-production-server/