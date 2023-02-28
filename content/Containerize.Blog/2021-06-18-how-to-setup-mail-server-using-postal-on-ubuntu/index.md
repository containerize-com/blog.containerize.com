---
title: How To Setup Mail Server Using Postal On Ubuntu
seoTitle: How To Setup Mail Server Using Postal On Ubuntu
description: 'Send emails from your web apps with the open source mail server. Postal enables you to send emails using SMTP & HTTP API, and monitor email traffic as well.'
date: Fri, 18 Jun 2021 12:00:53 +0000
author: Masood Anwer
summary: Send and receive emails with an open source mail server. This article will assist you in installing and configuring the Postal mail server for your company.
url: /transactional-email/how-to-setup-mail-server-using-postal-on-ubuntu/

categories: ['Transactional Email']

---
## Send and receive emails with an open source mail server. This article will assist you in installing and configuring the Postal mail server for your company.

{{< figure align=center src="images/postal-banner.png" alt="Open Source Mail Server">}}  

Sending emails on different types of events is necessary for modern applications. Every business needs a reliable **mail server** for outgoing emails. Further, companies need a mail server for sending bulk emails for marketing campaigns, newsletters, and many other tasks. There is several **open source mail server** available for this. However, we will discuss the **Postal server** in detail in this post and cover the following topics.

  * [What is Postal Mail Server?][1]
  * [Features of Postal][2]
  * [Postal Installation][3]
  * [Conclusion][4]

## What is Postal Mail Server? {#Postal}

[**Postal**][5] is a free and **open source mail server**. It is a full-featured mail server for websites and web applications. Postal mail server is an alternative to the existing popular **mail server** such as Sendgrid, and Mailgun. **Postal** is a robust, secure, and scalable open source email delivery platform. All the source code and documentation are available at [**GitHub**][6]. You can download, install it on your private server and keep full control over it. You can also improve and enhance it as per business needs. In addition, **Postal mail server** supports multiple organizations. 

Users can view graphs and stats showing the volume of incoming & outgoing mails. In addition, you can access the full outgoing & incoming message queue. Postal mail server provides functionality for webhooks. You can set up webhooks to receive live information about delivery information in real-time. It also offers message retention that allows you to store and examine all send and received messages. Email delivery is very important in the business to ensure that users get the email. However, sometimes email does deliver to the user and you have to investigate the issue. The **incoming and outgoing mail server** also provides complete logging and tools to do the investigation.

## Features of Postal {#Features}

Postal mail server offers a lot of features. However, we will discuss the following key features in this article.

**Sending Emails**: Postal mail server provides two techniques for outgoing emails including HTTP API and SMTP. You can easily use HTTP API for integration with web apps. You can also use an SMTP server for integration with existing applications and systems.

**Incoming Emails**: **Incoming mail** can be forwarded to HTTP endpoint, **SMTP server**, and other email addresses using the postal mail server.

**Spam and Virus Checking**: SpamAssassin and ClamAV can be integrated with Postal to automatically scan incoming and outgoing messages as they pass through mail servers. This feature is also turned off by default.

**Click and Open Tracking**: Email openings and clicks can be tracked with Postal. Postal will scan your outgoing messages and replace any links with a new link that travels through your Postal web server. When the user clicks the link, Postal records the action and instantly redirects them to the original URL. However, this is not activated by default.

**IP Pools**: Postal allows you to send messages from a variety of IP addresses. This allows you to assign multiple IP addresses to different mail servers or send from different IPs depending on the sender or recipient addresses.

## Postal Installation {#Installation}

Follow the below step-by-step guide to install the Postal **mail server software** on Ubuntu 18.04.

  * First, you need to connect your server vis SSH. Run the following command to update system with the latest available packages.


```
sudo apt-get update
```


### Install MariaDB Database Server

  * Run the command to install MariaDB.


```
sudo apt install mariadb-server libmysqlclient-dev
```


  * Once you done with the installation. Now, you need to secure it by running the below command.


```
mysql_secure_installation
```


  * Next, it will ask you couple of questions as shown below. You need to answer all the questions.


```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```


  * Connect to the MariaDB server with the following command.


```
mysql -u root -p
```


  * Create a database for the Postal.


```
CREATE DATABASE postal CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci;
```


  * Next, create a database user called <kbd>"postaluser" </kbd>with new password.


```
CREATE USER 'postaluser'@'localhost' IDENTIFIED BY 'new_password_here';
```


  * After that, grant the user full access to the “<kbd>postaluser"</kbd> database.


```
GRANT ALL ON postal.* TO 'postaluser'@'localhost' WITH GRANT OPTION;
```


  * Next, flush the privileges and exit from the MariaDB shell with the following command.


```
FLUSH PRIVILEGES;
EXIT;
```


### Install Ruby

  * First, add third-party PPA to install Ruby. Run the following commands.


```
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:brightbox/ruby-ng
```


  * Update Ubuntu packages.


```
sudo apt update
```


  * Install Ruby by running the below command.


```
sudo apt install ruby2.3 ruby2.3-dev build-essential
```


### Install RabbitMQ

  * Erlang is required to install RabbitMQ so, you need to install it as well. Add Erlang repository key to Ubuntu with the below command.


```
wget -O- https://packages.erlang-solutions.com/ubuntu/erlang_solutions.asc | sudo apt-key add -
```


  * Next, add the Erlang repository with the following command.


```
echo "deb https://packages.erlang-solutions.com/ubuntu bionic contrib" | sudo tee /etc/apt/sources.list.d/erlang.list
```


  * Run the following commands to install Erlang.


```
sudo apt-get update
sudo apt-get install erlang
```


  * Once you are done with the Erlang installation, you can proceed to install RabbitMQ. Add RabbitMQ repository to the Ubuntu.


```
sudo sh -c 'echo "deb https://dl.bintray.com/rabbitmq/debian $(lsb_release -sc) main" >> /etc/apt/sources.list.d/rabbitmq.list'
```


  * Add the RabbitMQ GPG key with the following command.


```
wget -O- https://dl.bintray.com/rabbitmq/Keys/rabbitmq-release-signing-key.asc | sudo apt-key add -
wget -O- https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | sudo apt-key add -
```


  * Run the commands below to install RabbitMQ package.


```
sudo apt update
sudo apt install rabbitmq-server
```


  * Run below command to enable RabbitMQ, so it always start when the system boot.


```
sudo systemctl enable rabbitmq-server
```


  * Next, you will need to create RabbitMQ vhost and user for postal. Run the following command to it.


```
sudo rabbitmqctl add_vhost /postal
sudo rabbitmqctl add_user postal type_password_here
sudo rabbitmqctl set_permissions -p /postal postal ".*" ".*" ".*"
```


### Install Nodejs

  * Add Nodejs repository with the following command.


```
curl -sL https://deb.nodesource.com/setup_10.x | bash
```


  * Next, run the command below to install Nodejs.


```
sudo apt-get install nodejs
```


### Install Postal Mail Server

  * First, you need to create a user for postal mail server. Create it with the following command.


```
sudo useradd -r -m -d /opt/postal -s /bin/bash postal
```


  * Next, allow ruby to listen on web ports.


```
sudo setcap 'cap_net_bind_service=+ep' /usr/bin/ruby2.3
```


  * Install all the required gems with the following commands.


```
sudo gem install bundler
sudo gem install procodile
sudo gem install nokogiri -v '1.7.2'
```


  * Create a directory structure for the Postal.


```
sudo mkdir -p /opt/postal/app
```


  * Next, download the latest version of Postal.


```
sudo wget https://postal.atech.media/packages/stable/latest.tgz
```


  * Extract the downloaded file with the following command.


```
sudo tar xvf latest.tgz -C /opt/postal/app
```


  * Next, change ownership of postal directory.


```
sudo chown -R postal:postal /opt/postal
```


  * Create a symlink for Postal binary by running the below command.


```
sudo ln -s /opt/postal/app/bin/postal /usr/bin/postal
```


  * Install all the required dependencies.


```
sudo postal bundle /opt/postal/vendor/bundle
```


  * Run the command below to initialize Postal configurations.


```
sudo postal initialize-config
```


  * Next, run the following command to open Postal configuration file.


```
sudo nano /opt/postal/config/postal.yml
```


  * Make the changes indicated in bold and save the file.


```
web:
  host: <strong>postal.example.com</strong>
  # The protocol that requests to the management interface should happen on
  protocol: https

main_db:
  # Specify the connection details for your MySQL database
  host: localhost
  username: postal
  password: <strong>password</strong>
  database: postal

message_db:
  # Specify the connection details for your MySQL server that will be house the
  # message databases for mail servers.
  host: localhost
  username: postal
  password: <strong>password</strong>
  prefix: postal

rabbitmq:
  # Specify the connection details for your RabbitMQ server.
  host: 127.0.0.1
  username: postal
  password: <strong>password</strong>
  vhost: /postal
  
dns:
  # Specifies the DNS record that you have configured. Refer to the documentation at
  # https://github.com/atech/postal/wiki/Domains-&-DNS-Configuration for further
  # information about these.
  mx_records:
    - <strong>mx.postal.example.com</strong>
  smtp_server_hostname: <strong>postal.example.com</strong>
  spf_include: <strong>spf.postal.example.com</strong>
  return_path: <strong>rp.postal.example.com</strong>
  route_domain: <strong>routes.postal.example.com</strong>
  track_domain: <strong>track.postal.example.com</strong>
```


  * Run command to initialize database.


```
sudo postal initialize
```


  * Create a admin user for Postal.


```
sudo postal make-user
```


  * Next, you will need to provide user account detail as show below.


```
Postal User Creator
Enter the information required to create a new Postal user.
This tool is usually only used to create your initial admin user.

E-Mail Address      : admin@example.com
First Name          : Admin
Last Name           : Postal
Initial Password:   : *********

User has been created with e-mail address admin@example.com
```


  * Finally, run the following command to start and check status of the Postal application.


```
sudo -u postal postal start
sudo -u postal postal status
```


### Install Nginx

  * Run the command below to install Nginx web server.


```
sudo apt install nginx
```


  * Next, copy Postal Nginx config to use it as Virtual-host.


```
sudo cp /opt/postal/app/resource/nginx.cfg /etc/nginx/sites-available/default
```


  * Create a self-signed SSL certificate.


```
sudo mkdir /etc/nginx/ssl/
sudo openssl req -x509 -newkey rsa:4096 -keyout /etc/nginx/ssl/postal.key -out /etc/nginx/ssl/postal.cert -days 365 -node
```


  * After that, you will need to answer the questions.
  * Open the Nginx default virtual host file.
  * Change the value of server_name and save the file.
  * Finally, restart Nginx web server by running the below command.


```
sudo systemctl restart nginx
```


  * Finally, open your browser and type the URL https://postal.example.com. You will be redirected to the login page.

## Conclusion {#Conclusion}

We’ve gone over the introduction and primary features of the Postal Mail Server in great depth. We’ve also included step-by-step instructions for setting up this **mail transfer agent**. Furthermore, we have given some insight into the setup. Setting up a postal mail server is a simple process. I hope that this article is indeed helpful in setting up and configuring a postal mail server for your business.

Finally, [**containerize.com**][7] is in a consistent process of writing blog posts on further latest open source products. Therefore, stay in touch with this [**Transactional Email**][8] category for the latest updates.

## Explore

You may find the following links relevant:

  * [**Top Transactional Email Software**][9]
  * [**Potal – Open Source Mail Server**][5]
  * [**5 Best Open Source Mail Server Software for Businesses in 2020**][10]

 [1]: #Postal
 [2]: #Features
 [3]: #Installation
 [4]: #Conclusion
 [5]: https://products.containerize.com/transactional-email/postal/
 [6]: https://github.com/postalhq/postal
 [7]: https://containerize.com
 [8]: https://blog.containerize.com/category/transactional-email/
 [9]: https://products.containerize.com/transactional-email/
 [10]: https://blog.containerize.com/2020/10/02/top-5-open-source-mail-transfer-agents-for-linux-in-2020/