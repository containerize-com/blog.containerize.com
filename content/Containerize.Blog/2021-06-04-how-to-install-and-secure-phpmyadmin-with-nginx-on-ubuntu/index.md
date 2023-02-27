---
title: How To Install and Secure phpMyAdmin with Nginx on Ubuntu
seoTitle: How To Install and Secure phpMyAdmin with Nginx on Ubuntu
description: phpMyAdmin is open source database management software written in PHP. We’ll learn how to install phpMyAdmin with Nginx and administer MySQL through phpMyAdmin
date: Fri, 04 Jun 2021 13:25:15 +0000
author: yasir saeed
summary: phpMyAdmin is open source graphical web interface database management tool written in PHP. In this tutorial, we’ll learn how to install phpMyAdmin with Nginx.
url: /web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
aliases: 
    -  /2021/06/04/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']

---
## phpMyAdmin is open source graphical web interface database management tool written in PHP. In this tutorial, we’ll learn how to install phpMyAdmin with Nginx.

{{< figure align=center src="images/install_phpmyadmin_with_nginx_on_ubuntu.png" alt="How To Install and Secure phpMyAdmin with Nginx on Ubuntu">}}  

## **Overview**

PhpMyAdmin is a free and open source database management tool that offer users a web interface to manage MySQL or MariaDB servers through an intuitive interface. This is one of the widely supported software offered by most of the popular hosting providers to let web administrators for creating database in phpmyadmin and manage databases, execute SQL-statements, import and export data easily. You will be able to access your MySQL or MariaDB databases in phpMyAdmin with Nginx through a graphical web interface easily, running alongside a PHP development environment.

In this guide, we are going to describe steps how to install and secure PhpMyAdmin with Nginx on Ubuntu 20.04. You will need to install and configure PhpMyAdmin on Ubuntu server to let it work with MySQL databases and tables easily. So, let’s learn how to install and secure PhpMyAdmin with Nginx on Ubuntu 20.04 / 20.10:

  * Prerequisites
  * Install phpMyAdmin
  * Configure Database
  * Create Symbolic Link
  * Accessing phpMyAdmin
  * Create MySQL Superuser
  * Secure phpMyAdmin
  * Conclusion

## Step 1: Prerequisites {#id-prerequisites}

To follow this guide, you’ll need Ubuntu 20.04 server running on your local computer or on a remote server with prerequisites.

  * You should access to the server as a non-root user with sudo privileges and enabled ufw firewall.
  * It is assumed that you have already installed Nginx, MySQL and PHP on Ubuntu.
  * As phpMyAdmin uses MySQL credentials to authenticate so you should also install SSL/TLS certificates to enable encrypted traffic between server and client.

With that out of the way, let’s get started to install and secure phpMyAdmin to connect to MySQL server for accessing the database through web interface.

## Step 2: Install phpMyAdmin {#id-1-install-phpmyadmin}

Make sure you have successfully installed all prerequisites on your system before installing phpMyAdmin on ubuntu 20.04. Start by updating the packages list:


```
sudo apt update 
```


Now, run the following command for installing the phpMyAdmin package from the default Ubuntu repositories on Ubuntu 20.04 / 20.10:


```
sudo apt install phpmyadmin

```


Press **y** and **ENTER** when asked to continue. If you are prompted to choose a web server, as there is no option for **Nginx** like below, press **TAB** to select OK and then **ENTER** to continue without selecting a web server.

[{{< figure align=center src="images/mysql-setup.png" alt="Install and secure phpMyAdmin for Nginx on Ubuntu 20.04">}}][1] 

## Step 2: Configure Database {#id-1-install-phpmyadmin}

Next, select **Yes** and hit **ENTER** to install and set up the database by using dbconfig-common tool:

{{< figure align=center src="images/phpmyadmin-install2.png" alt="How To Configre MySQL with phpMyAdmin">}}  



The MySQL application password is used internally by phpMyAdmin to communicate with MySQL database. Enter a new password for phpMyAdmin dbms to register as the new database, select OK and press Enter to continue. 

{{< figure align=center src="images/phpmyadmin-install3.png" alt="How To Configre MySQL for phpMyAdmin">}}  

You will be prompted to confirm the password, enter the same password, select **OK** and press **Enter**. Congratulations! phpMyAdmin has been successfully installed on your system.

## Step 4: Create Symbolic Link {#id-2-create-symbolic-link}

There are several ways how to configure the Nginx to serve phpMyAdmin files. If your domain’s server block is already set up to serve the PHP requests then you must create a symbolic link from the phpMyAdmin nginx installation files /usr/share/phpmyadmin to your domain document root directory. The default location of the Nginx document root in Ubuntu 20.04 / 20.10 should be /var/www/html/ and it could be different depending on your ins setup. Your document root may be located for example in /var/www/example.com/public_html.

Next, we will create a symbolic link from the phpMyAdmin directory /usr/share/phpmyadmin to your document root. Here we will assume that our document root is /var/www/html/ and we will simply add phpmyadmin to the end of this. This will allow us to access phpMyAdmin at url example.com/phpmyadmin


```
sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
```


## Step 5: Accessing phpMyAdmin {#id-3-test-phpmyadmin}

You should now be able to access the phpMyAdmin web interface by visiting your server’s host/domain name or public IP address followed by domain.com/phpmyadmin in your favorite web browser. For example http://example.com/phpmyadmin or http://192.168.1.10/phpmyadmin

<img src="https://devanswers.co/wp-content/uploads/2017/08/phpmyadmin-login.png" alt="How To Install and Secure phpMyAdmin with Nginx on Ubuntu 20.04
">  

On ubuntu servers running with MySQL 5.7 and later, you will not be able to log into free phpMyAdmin database using the MySQL default root account and will get an error like _“Access denied for user ‘root’@’localhost’”_. Instead, you should create a new superuser account just for phpMyAdmin. Next, we will create MySQL root account to log into phpMyAdmin.

## Step 6: Create MySQL Superuser {#id-4-create-mysql-superuser}

In terminal, start by log into MySQL using your MySQL root password that you may have created a root password when you installed phpmyadmin mysql database for the very first time.


```
sudo mysql -u root -p
```


After login to MySQL, add a new MySQL superuser with the username of your choice. In this example we are calling it yasiradmin. [Click here to generate a strong password][2] and replace new\_password\_here below with it.


```
CREATE USER 'yasiradmin'@'localhost' IDENTIFIED BY 'new_password_here';
```


Now grant superuser privileges to our new user yasiradmin.


```
GRANT ALL PRIVILEGES ON *.* TO 'yasiradmin'@'localhost';
```


Now exit MySQL session. You should now be able to access phpMyAdmin using this new superuser credentials.

{{< figure align=center src="images/image.png" alt="How To Login phpMyadmin on Ubuntu 20.04">}}  

It is highly recommended that you set up some additional security for phpMyAdmin to secure phpmyadmin nginx. You should be able to change and access phpMyAdmin URL to something like obscure URL.

## Step 7: Secure phpMyAdmin {#id-6-secure-phpmyadmin-recommended}

Next, we want to set up authentication in Nginx to provide an additional layer of security. We will now install apache2-utils, which can generate the .htpasswd file that works with both Nginx and Apache2 servers.


```
sudo apt install apache2-utils
```


Once installed, we can generate the .htpasswd file. Change the username of your choice. [Generate a password][3] and keep it safe.


```
sudo htpasswd -c /etc/nginx/.htpasswd username
```


There will now be a .htpasswd file containing your username and encrypted password. You can check this with below command:


```
cat /etc/nginx/.htpasswd
```


You should see something like username:$apr1sdfsdf4435sdtskLfWmmg1sfdsdgg4

We now need to add 2 directives to our Nginx configuration file. The location of the config file may vary depending on your installations, though the default file path is usually at /etc/nginx/sites-available/default. If you set up multiple domains then your config file may be located in somewhere like /etc/nginx/sites-available/example.com

In this example, we will assume the nginx config file is at /etc/nginx/sites-available/default. Open the file to edit it.


```
sudo nano /etc/nginx/sites-available/default
```


Scroll down and look for the location blocks and paste in a new block underneath them with the name of your obscured phpMyAdmin folder, in this example aspose_hidden.


```
location /aspose_hidden {
        auth_basic "Restricted Access";
        auth_basic_user_file /etc/nginx/.htpasswd;
}
```


Save file and exit (press CTRL + X, press Y and then press ENTER). Check that the Nginx config file is valid, otherwise the server could crash on restart by running command.


```
sudo nginx -t
```


If valid, reload Nginx config.


```
sudo service nginx reload
```


Now when visiting example.com/aspose_hidden, you should be presented with an authentication window.

{{< figure align=center src="images/auth3.png" alt="How To Secure phpMyAdmin">}}  

You’re all done with phpMyAdmin installations on Ubuntu server.

## Conclusion: {#id-what-next}

Congratulations, you have successfully installed phpMyAdmin with Nginx for Ubuntu 20.04 / 20.10 server and now can administer MySQL through phpMyAdmin. Now, you can start creating MySQL databases, users, tables, perform MySQL queries and various other operations.

If you have questions, feel free to tell me below in comment section.

## Explore

You may also like the below more related articles:

  * [How To Configure Apache as a Reverse Proxy For Ubuntu/Debian][4]
  * [How To Secure and Encrypt Nginx with Let’s Encrypt on Ubuntu 20.04][5]
  * [How to Configure HTTP/2 Support in Nginx On Ubuntu/Debian][6]
  * [How to Setup Nginx With Passenger on AWS Production Server][7]
  * [How to Install and Configure ownCloud with Apache on Ubuntu][8]

 [1]: https://devanswers.co/installing-phpmyadmin-nginx-ubuntu-16-04-17-04/mysql-setup/
 [2]: https://passgen.co/
 [3]: https://passgen.co/?pw=10&a=1
 [4]: https://blog.containerize.com/2021/05/21/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
 [5]: https://blog.containerize.com/2021/04/19/how-to-secure-and-encrypt-nginx-with-lets-encrypt-on-ubuntu-20.04/
 [6]: https://blog.containerize.com/2021/05/28/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
 [7]: https://blog.containerize.com/2021/05/07/how-to-setup-nginx-with-passenger-on-aws-production-server/
 [8]: https://blog.containerize.com/2021/06/11/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/