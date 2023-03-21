---
title: "Как установить NextCloud с Apache на сервере Ubuntu" 
seoTitle: "Как установить NextCloud с Apache на сервере Ubuntu" 
description: "NextCloud-это решение для собственного хранилища с открытым исходным кодом, написанное в PHP. Эта статья покажет, как установить NextCloud с Apache на Ubuntu." 
date: Fri, 18 Jun 2021 13:53:31 +0000
author: yasir saeed
summary: "NextCloud является самостоятельным программным обеспечением для синхронизации и совместной работы с открытым исходным кодом. Этот урок покажет, как установить NextCloud с Apache на Ubuntu." 
url: /ru/how-to-install-nextcloud-with-apache-on-ubuntu-server/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## NextCloud-это программное обеспечение для синхронизации и совместной работы с открытым исходным кодом. Этот урок покажет, как установить NextCloud с Apache на Ubuntu.

{{< figure align=center src="images/install-nextcloud-ubuntu.png" alt="Как установить NextCloud с Apache на Ubuntn">}}


## **Обзор** 
**[nextcloud][1] **-это бесплатное и безопасное  **самостоятельное облачное решение для хранения**  , написанное на языке программирования PHP. Он обеспечивает доступ к данным с использованием веб -интерфейса и функционально аналогично Dropbox. Собственные решения облачного хранения, такие как Dropbox и Google Drive, удобны, но их можно использовать для сбора личных данных, поскольку ваши файлы хранятся в их системах. Если вам нужно безопасное, безопасное и совместное решение для синхронизации и обмена файлами, вы можете переключиться на сервер NextCloud с открытым исходным кодом. Настройка NextCloud может быть установлена ​​на ваших частных домашних серверах или на виртуальном частном сервере.
NextCloud Open Source предоставляет **сквозное шифрование** , означает, что файлы могут быть зашифрованы на клиентском устройстве, прежде чем загружать на сервер. Он также может быть интегрирован с онлайн -набором Office, такой как Collobora, OnlyOffice NextCloud, чтобы вы могли создавать и редактировать свои файлы DOC, PPT, XLS непосредственно от клиента NextCloud. Вы можете поделиться и синхронизировать один или несколько файлов и папок на вашем компьютере с помощью вашего сервера NextCloud после загрузки клиента NextCloud. Скачать Desktop NextCloud и мобильные клиенты предоставляют варианты синхронизации и обмена на всех устройствах под вашим контролем. Поместите файлы данных в ваши локальные общие каталоги, и эти файлы немедленно синхронизируются с сервером и другим устройствам, используя клиент Sync Sync Desktop NextCloud, приложение для iOS или устройства Android.
Этот урок поможет вам установить NextCloud на Ubuntu 20.04 LTS Linux Opering System с Apache.
  ***Установить предпосылки (стек лампы)** 
  ***Скачать nextcloud Archive на Ubuntu** 
  **Создать базу данных MySQL** 
  **запустить веб -установщик NextCloud** 
  ***Завертывание** 

## Шаг 1: Установите условия (стек лампы)
Первое, что для установки NextCloud на Ubuntu - это то, что вы должны иметь запуск **Lamp Server  **в вашей системе Ubuntu LTS. Войдите в свою систему и получите доступ к окну терминала. Если у вас уже есть запуск **  Стек лампы** , пропустите этот шаг, иначе используйте следующие команды для установки необходимых зависимостей.

### Установить PHP
Давайте начнем с установки PHP версии 5.6 или более высокой версии на вашем сервере Ubuntu:
Sudo Apt-Get обновление
Sudo apt-get install -y php-gd php-curl php-zip php-xml php-mbsstring
Вы можете проверить версию PHP, используя следующую команду:
php -v
{{_LINE_29_}}

### Установить Apache2
Далее установите Apache с помощью команды:
sudo apt-get install -y apache2 libapache2-mod-php
Sudo SystemCtl перезапустить apache2
{{_LINE_34_}}

### Установить MySQL
С зависимостью от пути, следующим шагом, о котором следует позаботиться, является защита сервера базы данных MySQL. Установите сервер базы данных MySQL, работая:
sudo apt-get install -y mysql-server php-mysql
{{_LINE_38_}}

## Шаг 2: Загрузите Archive NextCloud на Ubuntu
На момент написания этой статьи последняя версия NextCloud - 22.0.0beta5. После успешной настройки LAMP Server в вашей системе, давайте загрузим NextCloud с его [официального веб -сайта][2].
CD /TMP
wget https://download.nextcloud.com/server/releases/nextcloud-22.0.0beta5.zip
{{_LINE_43_}}
После завершения загрузки сервера NextCloud извлеките загруженный архив в соответствии с документом веб-сайта root и установите владение каталогом NextCloud в www-data на файлах и каталогах.
CD/var/www/html
sudo unzip /tmp/nextcloud-22.0.0beta5.zip
Sudo Chown -r www-data: www-data nextcloud
sudo chmod -r 755 nextcloud
{{_LINE_49_}}
Теперь удалите загруженный файл архива.
sudo rm -f /tmp/nextcloud-22.0.0beta5.zip
{{_LINE_52_}}

## Шаг 3: Создать базу данных MySQL
После извлечения исходного кода давайте создадим базу данных MySQL NextCloud и учетную запись пользователя для настройки NextCloud. Используйте следующий набор команды для входа в MySQL Server, создайте базу данных NextCloud, пользователь и выход из консоли MySQL.
mysql -u root -p
Введите пароль:
MySQL> Создать базу данных NextCloud;
mysql> предоставить все на следующем т. Д.
Mysql> привилегии промывки;
mysql> уйти
{{_LINE_61_}}

## Шаг 4: Запустите веб -установщик NextCloud
На данный момент, NextCloud установите Ubuntu 20.04 успешно и настроен. Теперь откройте каталог конфигурации NextCloud в веб-браузере, как ниже, и введите URL http://your-domain.com. Измените LocalHost на IP -адрес вашего сервера или доменное имя. Вы увидите следующий экран:
http: // localhost/nextcloud/или http: // your_domain_name/nextcloud/
{{_LINE_65_}}
Введите новые учетные данные администратора, чтобы создать учетную запись администратора и предоставить местоположение папки данных.
{{_LINE_67_}}

{{< figure align=center src="images/install-nextcloud-2.png" alt="Как установить NextCloud с Apache на Ubuntu Linux Server">}}

{{_LINE_69_}}
Теперь сдвиньте свою страницу вниз и введите имя базы данных, имя пользователя базы данных, пароль и нажмите кнопку «Закончить настройку **».
{{_LINE_71_}}

{{< figure align=center src="images/nextcloud-server.png" alt="Как установить NextCloud Ubuntu 20.04 с Apache">}}

{{_LINE_73_}}
После того, как установка будет завершена, вы должны увидеть приборную панель Admin Admine NextCloud на следующем экране. Здесь вы можете создать пользователя, группы, назначить им разрешения и т. Д.
{{_LINE_75_}}

{{< figure align=center src="images/create_cloud_nextcloud.png" alt="Установка NextCloud на Ubuntu с Apache">}}

{{_LINE_77_}}
Поздравляем, у вас есть работающее облачное решение NextCloud в вашей системе Ubuntu LTS. Теперь вы можете начать настройку своего облачного сервера, чтобы идеально соответствовать вашим потребностям.

## **Обертывание:**    {#4A1A}
Поздравляю! Вы успешно настроили и установили NextCloud на сервере Ubuntu с Apache **. Вы узнали, как создать частное облако. NextCloud Ubuntu Server - это удивительная платформа для совместной работы облачного хранилища, которая может удовлетворить чьи -либо частные или гибридные потребности в облачном хранилище. Теперь вы знаете, как установить NextCloud на Ubuntu, и ваши данные безопасны и безопасны в вашем облаке самостоятельно. В наших будущих учебных пособиях мы обсудим более интересные темы, связанные со стеками решений веб -сервера.
_ Какое облачное решение для самостоятельного хранения вы предпочитаете?. Если у вас есть какие -либо вопросы, пожалуйста [свяжитесь с нами][3] ._

## Исследовать:
Вам может нравится следить за статьями, касающимися повседневного управления вашим сервером.
  * [Как установить и настроить OwnCloud с Apache на Ubuntu][4]
  * [Как настроить Apache как обратный прокси для Ubuntu или Debian][5]
  * [Установите и защищает PhpMyAdmin с Nginx на Ubuntu][6]
  * [Безопасно и шифровать Nginx с Let's Encrypt на Ubuntu 20.04][7]
  * [Настройка поддержки HTTP/2 в Nginx на Ubuntu/Debian][8]
  * [Настройка nginx с пассажиром на производственном сервере AWS][9]

  
[1]: https://nextcloud.com/
[2]: https://nextcloud.com/install/
[3]: mailto:yasir.saeed@aspose.com
[4]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
