---
title: How To Install And Configure WAMP Server On Windows
seoTitle: How To Install And Configure WAMP Server On Windows
description: Install WampServer on windows and quickly start developing PHP-based web applications. Wamp Server is available for both Windows 32 and 64 bits.
date: Fri, 28 May 2021 15:30:40 +0000
author: Masood Anwer
summary: Setup a web development environment for creating web applications with Apache2, PHP, and MySQL. This article helps you to install WAMP Server on windows.
url: /web-server-solution-stack/how-to-install-and-configure-wamp-server-on-windows/
aliases: 
    -  /2021/05/28/how-to-install-and-configure-wamp-server-on-windows/
categories: ['Web Server Solution Stack']

---
## Setup a web development environment for creating web applications with Apache2, PHP, and MySQL. This article helps you to install WAMP Server on windows.

{{< figure align=center src="images/wamp-server-blog-post-banner.png" alt="WAMP Server">}}  

Every developer must have the required software installed on his/her computer before writing the program. In the early days, developers had to install every software separately and then configure them to work together. **WampServer** and other web solution stack software are now available, which bundles all of the necessary software into one package. You only need to install one package to get your development environment up and running.

In this blog post, we will cover the following sections.

  * [**What is WampServer?**][1]
  * [**WAMP Installation**][2]
  * [**WAMP Configuration**][3]
  * [**Access phpMyAdmin**][4]

## What is WampServer? {#What}

WampServer is a free solution stack for setting up the web development environment for PHP-based applications. WAMP stands for (W – Windows, A – Apache, M – MySQL, and P – PHP). In addition, it also comes with phpMyAdmin and Adminer for the management of the database. WAMP is one of the popular tools and you can quickly set up it. Further, you can configure the wamp server from the control panel. It provides a complete web development environment for creating and testing applications. WampServer consists of several components that you can select during installation according to your needs. WampServer comes with multiple versions of PHP. You can easily change PHP version as per your project requirements. Also, you can change DBMS (Database Management System) from Wampserver control panel.

## WAMP Installation {#Installation}

Follow the below step-by-step guide to install WAMP Server on Windows.

  * **Download Wampserver** from the official website <https://www.wampserver.com>

{{< figure align=center src="images/wamp-download.png" alt="">}}  

  * Choose a **WampServer 32 bits** or **WampServer 64 bits** version of the installer according to your operating system.
  * Locate the **wamp download** file and double-click on it to run the installation process.
  * Select the language and then press the OK button.
  * Choose the I accept the agreement checkbox and then click the Next button.
  * Read the important information about WampServer installation and click the Next button to proceed.
  * Select a folder where you want to install the WAMP server and click the Next button.
  * You have to select the components that you want to install as shown in the below screenshot. You can select all PHP versions and switch during development. Also, you can install both MySQL and MariaDB.

{{< figure align=center src="images/wamp-select-components.png" alt="">}}  

  * Select the shortcut for WampServer and click the Next button.
  * Click on the Install button to install WampServer.
  * Now, select the default browser and default text editor for the wamp server.
  * Your installation is complete. Click the Finish button to exit the Wamp Server installation wizard.
  * Open your browser and type localhost for accessing it. You will see below page.

{{< figure align=center src="images/wamp-localhost-1024x520.png" alt="">}}  

## WAMP Configuration {#Configuration}

Now, we will look into few configurations that help you during the development and testing of the web applications. You can now start the WampServer by double-clicking on the shortcut WampServer icon on your desktop.

  * **Services** – You can see the options to start, stop and restart all services by left-clicking on the WampServer icon.
  * **Change Database** – Right-click on the WAMP icon to open the tools dialog box. Select Tools and click on “Invert default DBMS MariaDB <-> MySQL”. Wamp Server will restart automatically and you can see the default database by opening localhost in your browser.
  * **Change PHP Version** – Right-click on the WAMP icon to open the tools dialog box. Select Tools and Change PHP CLI version and click on the PHP version you want.
  * **Virtual Host** – You can easily add a virtual host via the web interface of WampServer. Open localhost in your browser and click on the “Add a Virtual Host” under the Tools section. Enter “Name of the virtual host like dev.example.com” and enter the absolute path of the project. Click on the “Start the creation of VirtualHost” button. Restart the Apache server to load the newly created virtual host.
  * **Change Apache Port** – By default, the Apache web server runs on port 80. If you want to use a different port for Apache, you can do it from the WampServer control Panel. Right-click on the WAMP icon to open the tools dialog box. Select Tools and click on “Use a port other than 80”. Enter a new port number in the dialog box and click on the Ok button.
  * **Change DBMS Port** – By default, the database server runs on port 3306. If you want to use a different port for the database server, you can do it from the WampServer control Panel. Right-click on the WAMP icon to open the tools dialog box. Select Tools and click on “Use a port other than 3306”. Enter the new port number in the dialog box and click on the Ok button.
  * **Empty Logs** – WamServer provides functionality to clear logs from the control panel. You can empty logs such as PHP error log, Apache error log, Apache access log, MySQL log, and MariaDB log. Even you can clear all logs at once. Right-click on the WAMP icon to open the tools dialog box. Select Tools and select Empty logs, you will find all options for removing logs.
  * **Change Language** – You can language for WampServer control panel. Right-click on the WAMP icon to open the tools dialog box. Select Language and click on the required language. You will see control panel in the newly selected language.

## Access phpMyAdmin {#phpMyAdmin}

You can access **phpMyAdmin** for the management of your databases by opening localhost in your browser and then click on the phpMyAdmin link on the WampServer welcome page. Also, you can access it by visiting http://localhost/phpmyadmin URL.

## Conclusion

We have discussed the WampServer and covered complete step-by-step guide to **install WampServer** it on Windows. You can easily install and configure **WampServer** by following this tutorial and start coding right away. You can visit the links under Explore section for more options on solution stack software.

Finally, [**containerize.com**][5] is in a consistent process of writing blog posts on further latest open source products. Therefore, stay in touch with this [**Web Server Solution Stack**][6] category for the latest updates.

## Explore

You may find the following links relevant:

  * [**Best Open Source Web Server Solution Stack Options**][7]
  * [**Setup XAMPP and phpMyAdmin as localhost on Windows**][8]

 [1]: #What
 [2]: #Installation
 [3]: #Configuration
 [4]: #phpMyAdmin
 [5]: https://containerize.com
 [6]: https://blog.containerize.com/category/web-server-solution-stack/
 [7]: https://products.containerize.com/solution-stack/
 [8]: https://blog.containerize.com/2020/10/26/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/