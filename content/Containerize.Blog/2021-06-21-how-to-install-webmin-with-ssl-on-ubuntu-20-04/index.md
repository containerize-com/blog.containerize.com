---
title: How To Install Webmin with SSL on Ubuntu 20.04
seoTitle: How To Install Webmin with SSL on Ubuntu 20.04
description: Webmin is a web-based system administration tool for Unix-like systems. In this article we will learn how to install webmin with ssl on ubuntu 20.04.
date: Mon, 21 Jun 2021 04:28:34 +0000
author: Assad Mahmood
summary: Webmin is a web-based system administration tool that is a simple alternative to command-line system administration. This article guides how to install Webmin
url: /web-hosting/how-to-install-webmin-with-ssl-on-ubuntu-20-04/

categories: ['Web Hosting']

---
{{< figure align=center src="images/how-to-install-webmin.png" alt="how to install webmin">}} 

## Webmin is a web-based system administration tool that is a simple alternative to command-line system administration. This article guides how to install Webmin

With this article “How to Install Webmin with SSL on Ubuntu 20.04” we are starting our new series of tutorials on web hosting software and tools. With Webmin you can set up user accounts, enable file sharing, configure Apache, and DNS settings, and perform many more tasks relating to web hosting. It allows you to manage the entire web hosting server. It eliminates the trouble of editing Linux configuration files manually. So let’s learn how to install Webmin with SSL. 

  * **[Introduction to Webmin][1]**
  * [**Highlighted Features**][2]
  * [**Supported Operating Systems**][3]
  * [**Install Webmin on Ubuntu**][4]
  * [**Install Apache using Webmin**][5]
  * [**Conclusion**][6]

## Introduction to Webmin {#intro}

Webmin is a web-based interface for system administration for Linux. It helps you manage your own hosting server remotely from any modern web browser. With Webmin, you can configure operating system internals such as user accounts, Apache, DNS, file sharing, and much more. Webmin also allows for controlling many machines through a single interface, or seamless login on other Webmin hosts on the same subnet or LAN. Webmin, based on Perl, runs as its own process and the webserver. And the best part about Webmin is its 100% free and open-source and has a very thriving developer community.

## Highlighted Features {#features}

  * Allows you to create and edit domains, DNS records, BIND options, and views.
  * Helps in configuring a firewall by creating and editing rules using IPFW.
  * Let’s you set up scripts to be run at boot time from /etc/init.d or /etc/rc.local
  * You can schedule the file transfer from the server to multiple servers
  * Allows you to install RPMs, Debian, and Solaris packages across multiple servers from one source
  * It provides access to reports like bandwidth usage, uploads, downloads, visitors, etc.
  * You can create scheduled Cron jobs that run on multiple servers simultaneously
  * Lets you run commands on multiple servers at once
  * Allows you to set up and edit user or group disk quotas for local filesystems
  * Includes backup and restore filesystems using the dump and restore the family of commands
  * Using a file manager similar to Windows, you can view, edit and change permissions on files and directories on your server
  * You can configure the service location protocol server
  * View, edit, and change permissions on files and directories on your system with a Windows-like file manager
  * It helps in setting up SSL tunnels to encrypt services like POP3 and IMAP, using stunnel run from inetd.

## Supported Operating Systems {#support}

Because different Unix-like operating systems and Linux distributions use different locations for their various config files, Webmin can only support systems for which it has been configured. The following operating systems are supported by version 1.979 of Webmin :

  * AlmaLinux Linux
  * AlphaCore Linux
  * Amazon Linux
  * APLINUX
  * Asianux
  * Asianux Server
  * BigBlock
  * BSDI
  * Caixa Magica
  * Caldera OpenLinux
  * Caldera OpenLinux eServer
  * cAos Linux
  * Cendio LBS Linux
  * CentOS Linux
  * Citrix Hypervisor
  * CloudLinux
  * Cloudrouter Linux
  * Cobalt Linux
  * Coherent Technology Linux
  * Conectiva Linux
  * Corel Linux
  * Corvus Latinux
  * Cygwin
  * Darwin
  * Debian Linux
  * DEC/Compaq OSF/1
  * Devuan Linux
  * DragonFly BSD
  * Endian Firewall Linux
  * Fedora Linux
  * FreeBSD
  * Generic Linux
  * Gentoo Linux
  * Gralinux
  * Haansoft Linux
  * HP/UX
  * IBM AIX
  * Immunix Linux
  * Lanthan Linux
  * Linux Mint
  * LinuxPPC
  * Lycoris Desktop/LX
  * Mac OS X
  * macOS Catalina
  * macOS High Sierra
  * macOS Mojave
  * macOS Sierra
  * Mageia Linux
  * Mandrake Linux
  * Mandrake Linux Corporate Server
  * Mandriva Linux
  * Mandriva Linux Enterprise Server
  * Mepis Linux
  * MostlyLinux
  * MSC Linux
  * NeoShine Linux
  * NetBSD
  * OpenBSD
  * OpenDarwin
  * openmamba Linux
  * OpenNA Linux
  * openSUSE Linux Tumbleweed
  * Oracle Enterprise Linux
  * Oracle Linux
  * Oracle VM
  * OS X
  * Pardus Linux
  * pclinuxos Linux
  * Playstation Linux
  * Raspbian Linux
  * Redhat Enterprise Linux
  * Redhat Linux
  * Redhat Linux Desktop
  * Rocky Linux
  * Sangoma Linux
  * SCI Linux
  * Scientific Linux
  * SCO OpenServer
  * SCO UnixWare
  * Secure Linux
  * SGI Irix
  * Slackware Linux
  * Slamd64 Linux
  * SmartOS
  * SoL Linux
  * Springdale Linux
  * StartCom Linux
  * Sun Java Desktop System
  * Sun Solaris
  * SuSE Linux
  * SuSE OpenExchange Linux
  * SuSE SLES Linux
  * Synology DSM
  * Tao Linux
  * Tawie Server Linux
  * ThizLinux Desktop
  * ThizServer
  * TinySofa Linux
  * Trustix
  * Trustix SE
  * TurboLinux
  * Ubuntu Linux
  * United Linux
  * Ute Linux
  * Virtuozzo Linux
  * White Dwarf Linux
  * Whitebox Linux
  * Wind River Linux
  * Windows
  * X/OS Linux
  * Xandros Linux
  * XCP-ng Linux
  * XenServer Linux
  * Yellow Dog Linux
  * Yoper Linux

The best-supported systems at the moment are Solaris, Linux (Redhat in particular), and FreeBSD.

## Install Webmin on Ubuntu {#install}

To install Webmin, you will need to have access to a user with **root** privileges. It is recommended that you set up a non-root user with **sudo** access. 

First SSH into your server using following command


```
ssh user@server_IP_address
```


To install Webmin via _apt-get_, you must first add the Webmin repository to your _sources.list_ file. On your server, open the _sources.list_ file in your favorite text editor. We will use vim in this tutorial:


```
sudo vi /etc/apt/sources.list
```


Once the file is opened add the following lines at the end of file.


```
deb http://download.webmin.com/download/repository sarge contrib
deb http://webmin.mirror.somersettechsolutions.co.uk/repository sarge contrib
```


Now add the Webmin GPG key to apt, so the source repository you added will be trusted. This command will do that:


```
wget -q http://www.webmin.com/jcameron-key.asc -O- | sudo apt-key add -
```


Before installing Webmin, you must update apt-get’s package lists: 


```
sudo apt-get update
```


Now run this apt-get command to install Webmin: 


```
sudo apt-get install webmin 
```


Enter y to confirm the installation. After the installation is complete, the Webmin service will start automatically. And the web interface will run on the port 10000. You can access the interface using the following url.


```
https://server_IP_address:10000
```


You will be prompted with a warning that says your server’s SSL certificate is not trusted. This is because Webmin automatically generates and installs an SSL certificate after installation, and the certificate was not issued by a certificate authority that is trusted by your computer. It is fine to proceed. Instruct your web browser to trust the certificate. 

At this point, you will see the Webmin login screen:

{{< figure align=center src="images/webmin-login-screen.png" alt="install webmin">}}  

When you first log into Webmin, you will be taken to the **System Information** page. It gives you an overview of your system’s resources and other miscellaneous information.

{{< figure align=center src="images/install-webmin-system-info.png" alt="install webmin system information">}}  

## Install Apache using Webmin {#install-apache}

Webmin comes with a large variety of modules that manage different software packages. to install Apache using Webmin follow the instructions below

**Step 1**: In the navigation menu, click **Un-used Modules** to expand the category, and then click **Apache Webserver**.

If you do not have Apache installed on your server, the module will notify you and provide you with a way to install Apache.

**Step 2**: Use the **Click here** link (in the last sentence) to install Apache via apt-get through Webmin.

After the Apache installation is complete, your server will be running the default Apache server.

## Conclusion {#conclusion}

This article discusses briefly numerous things that Webmin can do, Webmin is one of the best tools for managing your Linux/Unix servers. In this tutorial we also learned how to install Webmin on Ubuntu, as well we discussed how to install apache on your server using Webmin. 

## Explore

  * [How to Install Multiple PHP Versions with Nginx on Ubuntu][7]
  * [How to Setup and Configure Nginx as Reverse Proxy][8]

 [1]: #intro
 [2]: #features
 [3]: #support
 [4]: #install
 [5]: #install-apache
 [6]: #conclusion
 [7]: https://blog.containerize.com/2021/05/21/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
 [8]: https://blog.containerize.com/2021/05/07/how-to-setup-and-configure-nginx-as-reverse-proxy/