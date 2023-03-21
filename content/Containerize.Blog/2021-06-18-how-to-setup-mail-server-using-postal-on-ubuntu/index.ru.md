---
title: "Как настроить почтовый сервер, используя почту на Ubuntu" 
seoTitle: "Как настроить почтовый сервер, используя почту на Ubuntu" 
description: "Отправьте электронные письма из ваших веб -приложений с помощью почтового сервера с открытым исходным кодом. Postal позволяет отправлять электронные письма с помощью SMTP и HTTP API, а также отслеживать трафик электронной почты." 
date: Fri, 18 Jun 2021 12:00:53 +0000
author: Masood Anwer
summary: "Отправить и получать электронные письма с почтовым сервером с открытым исходным кодом. Эта статья поможет вам в установке и настройке почтового почтового сервера для вашей компании." 
url: /ru/how-to-setup-mail-server-using-postal-on-ubuntu/
categories: ['Transactional Email']
---

## Отправить и получать электронные письма с почтовым сервером с открытым исходным кодом. Эта статья поможет вам в установке и настройке почтового почтового сервера для вашей компании.

{{< figure align=center src="images/postal-banner.png" alt="Почтовый сервер с открытым исходным кодом">}}

Отправка электронных писем по различным типам событий необходима для современных приложений. Каждому бизнесу нужен надежный **почтовый сервер  **для исходящих электронных писем. Кроме того, компаниям нужен почтовый сервер для отправки объемных электронных писем для маркетинговых кампаний, информационных бюллетеней и многих других задач. Для этого есть несколько **  почтового сервера с открытым исходным кодом **. Тем не менее, мы подробно рассмотрим  **почтовый сервер**   в этом посте и рассмотрим следующие темы.
  * [Что такое почтовый почтовый сервер?][1]
  * [Особенности почты][2]
  * [Почтовая установка][3]
  * [Заключение][4]

## Что такое почтовый почтовый сервер?   {#Postal}
[**postal **][5] - это бесплатный и  **почтовый сервер с открытым исходным кодом ** . Это полнофункциональный почтовый сервер для веб-сайтов и веб-приложений. Почтовый почтовый сервер является альтернативой существующему популярному  **почтовому серверу ** , например, SendGrid и Mailgun.  **Postal **  - это надежная, безопасная и масштабируемая платформа доставки электронной почты с открытым исходным кодом. Весь исходный код и документация доступны по адресу [ **github ** ][6]. Вы можете скачать, установить его на своем частном сервере и сохранить полный контроль над ним. Вы также можете улучшить и улучшить его в соответствии с потребностями бизнеса. Кроме того,  **почтовый почтовый сервер**   поддерживает несколько организаций.
Пользователи могут просматривать графики и статистику, показывающие объем входящих и исходящих почты. Кроме того, вы можете получить доступ к полной исходящей и входящей очереди сообщения. Почтовый почтовый сервер обеспечивает функциональность для веб -крючков. Вы можете настроить WebHooks для получения живой информации о информации о доставке в режиме реального времени. Он также предлагает удержание сообщений, которое позволяет вам хранить и проверять все отправки и полученные сообщения. Доставка электронной почты очень важна в бизнесе, чтобы убедиться, что пользователи получают электронную почту. Однако иногда электронная почта доставляет пользователю, и вы должны расследовать проблему. **Входящий и исходящий почтовый сервер**  также предоставляет полные журналы и инструменты для проведения расследования.

## Особенности почты   {#features}
Почтовый почтовый сервер предлагает много функций. Тем не менее, мы обсудим следующие ключевые функции в этой статье.
**Отправка электронных писем** : почтовый почтовый сервер предоставляет две методы для исходящих электронных писем, включая HTTP API и SMTP. Вы можете легко использовать HTTP API для интеграции с веб -приложениями. Вы также можете использовать SMTP -сервер для интеграции с существующими приложениями и системами.
**Входящие электронные письма **:  **Входящая почта **  может быть перенаправлена ​​в HTTP Endpoint,  **SMTP Server**   и другие адреса электронной почты с использованием почтового почтового сервера.
**Проверка спама и вирусов** : Спамассасин и Clamav могут быть интегрированы с почтовыми сообщениями для автоматического сканирования входящих и исходящих сообщений, когда они проходят через почтовые серверы. Эта функция также отключается по умолчанию.
**Нажмите и откройте отслеживание** : открытия электронной почты и клики можно отслеживать с помощью почты. Postal сканирует ваши исходящие сообщения и заменит любые ссылки на новую ссылку, которая проходит через ваш почтовый веб -сервер. Когда пользователь нажимает на ссылку, почтовая запись записывает действие и мгновенно перенаправляет их на исходный URL. Однако это не активируется по умолчанию.
**IP Pools** : Postal позволяет отправлять сообщения с различных IP -адресов. Это позволяет вам назначать несколько IP -адресов на разные почтовые серверы или отправлять из разных IPS в зависимости от адресов отправителя или получателя.

## почтовая установка   {#installation}
Следуйте ниже пошаговому руководству для установки программного обеспечения почтового сервера ** на Ubuntu 18.04.
  * Во -первых, вам нужно подключить свой сервер VIS SSH. Запустите следующую команду для обновления системы с последними доступными пакетами.
```
sudo apt-get update
```

### Установить сервер баз данных Mariadb
  * Запустите команду для установки Mariadb.
```
sudo apt install mariadb-server libmysqlclient-dev
```
  * Как только вы закончите с установкой. Теперь вам нужно закрепить его, выполнив приведенную ниже команду.
```
mysql_secure_installation
```
  * Затем он задаст вам пару вопросов, как показано ниже. Вам нужно ответить на все вопросы.
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  * Подключитесь к серверу MariaDB со следующей командой.
```
mysql -u root -p
```
  * Создайте базу данных для почты.
```
CREATE DATABASE postal CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
  * Затем создайте пользователя базы данных под названием «Postaluser» с новым паролем.
```
CREATE USER 'postaluser'@'localhost' IDENTIFIED BY 'new_password_here';
```
  * После этого предоставьте пользователю полный доступ к базе данных «почтовой».
```
GRANT ALL ON postal.* TO 'postaluser'@'localhost' WITH GRANT OPTION;
```
  * Затем проведите привилегии и выйдите из оболочки MariaDB со следующей командой.
```
FLUSH PRIVILEGES;
EXIT;
```

### Установите Ruby
  * Во-первых, добавьте стороннее PPA для установки Ruby. Запустите следующие команды.
```
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:brightbox/ruby-ng
```
  * Обновите пакеты Ubuntu.
```
sudo apt update
```
  * Установите Ruby, выполнив команду ниже.
```
sudo apt install ruby2.3 ruby2.3-dev build-essential
```

### Установить Rabbitmq
  * Erlang должен установить Rabbitmq, поэтому вам также нужно установить его. Добавьте ключ репозитория Erlang в Ubuntu с помощью команды ниже.
```
wget -O- https://packages.erlang-solutions.com/ubuntu/erlang_solutions.asc | sudo apt-key add -
```
  * Затем добавьте репозиторий Erlang со следующей командой.
```
echo "deb https://packages.erlang-solutions.com/ubuntu bionic contrib" | sudo tee /etc/apt/sources.list.d/erlang.list
```
  * Запустите следующие команды для установки Erlang.
```
sudo apt-get update
sudo apt-get install erlang
```
  * Как только вы закончите с установкой Erlang, вы можете продолжить установить Rabbitmq. Добавьте репозиторий Rabbitmq в Ubuntu.
```
sudo sh -c 'echo "deb https://dl.bintray.com/rabbitmq/debian $(lsb_release -sc) main" >> /etc/apt/sources.list.d/rabbitmq.list'
```
  * Добавьте клавишу GPG RabbitMQ со следующей командой.
```
wget -O- https://dl.bintray.com/rabbitmq/Keys/rabbitmq-release-signing-key.asc | sudo apt-key add -
wget -O- https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | sudo apt-key add -
```
  * Запустите команды ниже, чтобы установить пакет RabbitMQ.
```
sudo apt update
sudo apt install rabbitmq-server
```
  * Запустите команду ниже, чтобы включить RabbitMQ, поэтому она всегда начинается при загрузке системы.
```
sudo systemctl enable rabbitmq-server
```
  * Далее вам нужно будет создать Rabbitmq Vhost и пользователя для почты. Запустите следующую команду.
```
sudo rabbitmqctl add_vhost /postal
sudo rabbitmqctl add_user postal type_password_here
sudo rabbitmqctl set_permissions -p /postal postal ".*" ".*" ".*"
```

### Установить Nodejs
  * Добавить репозиторий Nodejs со следующей командой.
```
curl -sL https://deb.nodesource.com/setup_10.x | bash
```
  * Затем запустите команду ниже, чтобы установить Nodejs.
```
sudo apt-get install nodejs
```

### Установить почтовый почтовый сервер
  * Во -первых, вам нужно создать пользователя для почтового почтового сервера. Создайте его со следующей командой.
```
sudo useradd -r -m -d /opt/postal -s /bin/bash postal
```
  * Затем позвольте Руби слушать в веб -портах.
```
sudo setcap 'cap_net_bind_service=+ep' /usr/bin/ruby2.3
```
  * Установите все необходимые драгоценные камни со следующими командами.
```
sudo gem install bundler
sudo gem install procodile
sudo gem install nokogiri -v '1.7.2'
```
  * Создать структуру каталогов для почты.
```
sudo mkdir -p /opt/postal/app
```
  * Далее скачать последнюю версию почты.
```
sudo wget https://postal.atech.media/packages/stable/latest.tgz
```
  * Извлеките загруженный файл со следующей командой.
```
sudo tar xvf latest.tgz -C /opt/postal/app
```
  * Далее измените право собственности на почтовый каталог.
```
sudo chown -R postal:postal /opt/postal
```
  * Создайте символическую ссылку для почтового двоичного файла, выполнив команду ниже.
```
sudo ln -s /opt/postal/app/bin/postal /usr/bin/postal
```
  * Установите все необходимые зависимости.
```
sudo postal bundle /opt/postal/vendor/bundle
```
  * Запустите команду ниже для инициализации почтовых конфигураций.
```
sudo postal initialize-config
```
  * Затем запустите следующую команду, чтобы открыть файл почтовой конфигурации.
```
sudo nano /opt/postal/config/postal.yml
```
  * Внесите изменения, указанные жирным шрифтом и сохраните файл.
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
  * Запустите команду для инициализации базы данных.
```
sudo postal initialize
```
  * Создайте пользователя администратора для почты.
```
sudo postal make-user
```
  * Далее вам нужно будет предоставить детали учетной записи пользователя, как показано ниже.
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
  * Наконец, запустите следующую команду, чтобы запустить и проверить статус почтового приложения.
```
sudo -u postal postal start
sudo -u postal postal status
```

### Установить nginx
  * Запустите команду ниже, чтобы установить веб -сервер Nginx.
```
sudo apt install nginx
```
  * Затем скопируйте почту Nginx Config, чтобы использовать его в качестве виртуального хоста.
```
sudo cp /opt/postal/app/resource/nginx.cfg /etc/nginx/sites-available/default
```
  * Создайте самореагированный сертификат SSL.
```
sudo mkdir /etc/nginx/ssl/
sudo openssl req -x509 -newkey rsa:4096 -keyout /etc/nginx/ssl/postal.key -out /etc/nginx/ssl/postal.cert -days 365 -node
```
  * После этого вам нужно будет ответить на вопросы.
  * Откройте файл виртуального хоста Nginx по умолчанию.
  * Измените значение Server_name и сохраните файл.
  * Наконец, перезапустите веб -сервер Nginx, запустив приведенную ниже команду.
```
sudo systemctl restart nginx
```
  * Наконец, откройте свой браузер и введите URL https://postal.example.com. Вы будете перенаправлены на страницу входа в систему.

## Заключение   {#conclusion}
Мы глубоко рассмотрели введение и основные функции почтового почтового сервера. Мы также включили пошаговые инструкции по настройке этого **агента по передаче почты** . Кроме того, мы дали некоторое представление о настройке. Настройка почтового почтового сервера - это простой процесс. Я надеюсь, что эта статья действительно полезна при настройке и настройке почтового почтового сервера для вашего бизнеса.
Наконец, [**Containerize.com **][7] находится в постоянном процессе написания постов в блоге на дальнейших последних продуктах с открытым исходным кодом. Поэтому оставайтесь на связи с этой [ **транзакционной электронной почтой**  ][8] для последних обновлений.

## Исследовать
Вы можете найти следующие ссылки актуальными:
  *[**Top Transactional Email Software** ][9]
  *[**Потал - почтовый сервер с открытым исходным кодом** ][5]
  *[**5 Лучшего программного обеспечения для почтового сервера с открытым исходным кодом для предприятий в 2020 году** ][10]

  
[1]: #Postal
[2]: #Features
[3]: #Installation
[4]: #Conclusion
[5]: https://products.containerize.com/transactional-email/postal/
[6]: https://github.com/postalhq/postal
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/transactional-email/
[9]: https://products.containerize.com/transactional-email/
[10]: https://blog.containerize.com/transactional-email/top-5-open-source-mail-transfer-agents-for-linux-in-2020/
