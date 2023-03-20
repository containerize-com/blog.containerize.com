---
title: "Как установить и защитить phpmyadmin с nginx на Ubuntu" 
seoTitle: "Как установить и защитить phpmyadmin с nginx на Ubuntu" 
description: "PhpMyAdmin - это программное обеспечение для управления базами данных с открытым исходным кодом, написанное на PHP. Мы узнаем, как установить PhpMyAdmin с Nginx и администрировать MySQL через PhpMyAdmin" 
date: Fri, 04 Jun 2021 13:25:15 +0000
author: yasir saeed
summary: "PhpMyAdmin - это инструмент управления базами данных с открытым исходным кодом, написанный в PHP. В этом уроке мы узнаем, как установить phpmyadmin с Nginx." 
url: /ru/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

## PhpmyAdmin - это инструмент управления база данных с открытым исходным кодом, написанный в PHP. В этом уроке мы узнаем, как установить phpmyadmin с Nginx.

{{< figure align=center src="images/install_phpmyadmin_with_nginx_on_ubuntu.png" alt="Как установить и защитить phpmyadmin с nginx на Ubuntu">}}


## ** Обзор **
PhpMyAdmin - это бесплатный инструмент управления базами данных с открытым исходным кодом, который предлагает пользователям веб -интерфейс для управления серверами MySQL или MariaDB через интуитивно понятный интерфейс. Это одно из широко поддерживаемого программного обеспечения, предлагаемого большинством популярных хостинговых поставщиков, позволяющих веб-администраторам для создания базы данных в PhpMyAdmin и управления базами данных, легко выполнять данные SQL, импорт и экспорт. Вы сможете легко получить доступ к вашим базам данных MySQL или MariaDB в PhpMyAdmin с Nginx через графический веб -интерфейс, работая вместе с средой разработки PHP.
В этом руководстве мы собираемся описать шаги, как установить и защитить PhpMyAdmin с Nginx на Ubuntu 20.04. Вам нужно будет установить и настроить PhpMyAdmin на сервере Ubuntu, чтобы легко позволить ему работать с базами данных и таблицами MySQL. Итак, давайте узнаем, как установить и защитить PhpMyAdmin с Nginx на Ubuntu 20.04 / 20.10:
  * Предпосылки
  * Установите PhpMyAdmin
  * Настройка базы данных
  * Создать символическую ссылку
  * Доступ к PhpMyAdmin
  * Создание суперпользователя MySQL
  * Безопасный phpmyadmin
  * Заключение

## Шаг 1: Предварительные условия {#id-prerequisesites}
Чтобы следовать этому руководству, вам понадобится сервер Ubuntu 20.04, работающий на вашем локальном компьютере или на удаленном сервере с предпосылками.
  * Вы должны получить доступ к серверу в качестве пользователя, не являющегося корнями с привилегиями SUDO и включены брандмауэра UFW.
  * Предполагается, что вы уже установили Nginx, MySQL и PHP на Ubuntu.
  * Поскольку PhpMyAdmin использует учетные данные MySQL для аутентификации, поэтому вам также следует установить сертификаты SSL/TLS, чтобы включить зашифрованный трафик между сервером и клиентом.
Благодаря этому, давайте начнем устанавливать и защищать PhpMyAdmin для подключения к MySQL Server для доступа к базе данных через веб -интерфейс.

## Шаг 2: Установите phpmyadmin {#id-1-install-phpmyadmin}
Убедитесь, что вы успешно установили все предпосылки на вашу систему перед установкой PhpMyAdmin на Ubuntu 20.04. Начните с обновления списка пакетов:
```
sudo apt update 
```
Теперь запустите следующую команду для установки пакета PhpMyAdmin из репозиториев Ubuntu по умолчанию на Ubuntu 20.04 / 20.10:
```
sudo apt install phpmyadmin

```
Нажмите ** y ** и ** Введите **, когда попросили продолжить. Если вам предложено выбрать веб -сервер, так как нет опции для ** nginx **, как ниже, нажмите ** вкладку **, чтобы выбрать OK, а затем ** Введите **, чтобы продолжить, не выбрав веб -сервер.

{{< figure align=center src="images/mysql-setup.png" alt="Установите и защищайте PhpMyAdmin для Nginx на Ubuntu 20.04">}}


## Шаг 2: Настройка базы данных {#id-1-install-phpmyadmin}
Далее, выберите ** Да ** и нажмите ** Введите **, чтобы установить и настроить базу данных, используя инструмент DBConfig-Common:

{{< figure align=center src="images/phpmyadmin-install2.png" alt="Как конфигурировать MySQL с PhpMyAdmin">}}

Пароль приложения MySQL используется внутри PhpMyAdmin для связи с базой данных MySQL. Введите новый пароль для СУБД PhpMyAdmin, чтобы зарегистрироваться в качестве новой базы данных, выберите OK и нажмите Enter, чтобы продолжить.

{{< figure align=center src="images/phpmyadmin-install3.png" alt="Как конфигурировать mysql для phpmyadmin">}}

Вам будет предложено подтвердить пароль, введите один и тот же пароль, выберите ** OK ** и нажмите ** Enter **. Поздравляю! PhpMyAdmin был успешно установлен в вашей системе.

## Шаг 4: Создать символическую ссылку {#id-2-create-symbolic-link}
Есть несколько способов, как настроить NGINX для обслуживания файлов phpMyAdmin. Если блок сервера вашего домена уже настроен для обслуживания запросов PHP, вы должны создать символическую ссылку из файлов установки PhpMyAdmin Nginx/usr/share/phpmyadmin в корневой каталог документа домена. Расположение по умолчанию корня документа NGINX в Ubuntu 20.04/20.10 должно быть/var/www/html/, и это может быть различным в зависимости от вашей настройки INS. Ваш корень документа может быть расположен, например, в /var/www/example.com/public_html.
Далее мы создадим символическую ссылку из каталога PhpMyAdmin/usr/share/phpmyAdmin с вашим корнем документа. Здесь мы предположим, что наш корень документа IS/var/www/html/, и мы просто добавим PhpmyAdmin в конце этого. Это позволит нам получить доступ к PhpMyAdmin на url example.com/phpmyadmin
```
sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
```

## Шаг 5: Доступ к PhpMyAdmin {#id-3-test-phpmyadmin}
Теперь вы должны иметь возможность получить доступ к веб -интерфейсу PhpMyAdmin, посетив хост/доменное имя вашего сервера или общедоступный IP -адрес, за которым следует Domain.com/phpmyadmin в вашем любимом веб -браузере. Например, http://example.com/phpmyadmin или http://192.168.1.10/phpmyadmin
{{_LINE_48_}}
На серверах Ubuntu, работающих с MySQL 5.7, а затем вы не сможете войти в бесплатную базу данных PhpMyAdmin, используя корневую учетную запись MySQL по умолчанию и получите такую ​​ошибку, такую ​​как _ «Доступ, отказанный для пользователя root@’ LocalHost »’ _. Вместо этого вы должны создать новую учетную запись Superuser только для PhpmyAdmin. Далее мы создадим корневую учетную запись MySQL для входа в PhpMyAdmin.

## Шаг 6: Создать MySQL Superuser {#id-4-create-mysql-superuser}
В терминале начните с войны в MySQL, используя свой пароль MySQL ROOT, который, возможно, создал корневой пароль, когда вы установили базу данных MySQL PhpMyAdmin в первый раз.
```
sudo mysql -u root -p
```
После входа в MySQL добавьте новый суперпонент MySQL с именем пользователя по вашему выбору. В этом примере мы называем это Yasiradmin. [Нажмите здесь, чтобы сгенерировать сильный пароль][2] и замените новый \ _Password \ _Here ниже.
```
CREATE USER 'yasiradmin'@'localhost' IDENTIFIED BY 'new_password_here';
```
Теперь дайте привилегии суперпользователя нашему новому пользователю Yasiradmin.
```
GRANT ALL PRIVILEGES ON *.* TO 'yasiradmin'@'localhost';
```
Теперь выйдите из MySQL Session. Теперь вы должны иметь возможность получить доступ к PhpMyAdmin, используя эти новые учетные данные суперпользователя.

{{< figure align=center src="images/image.png" alt="Как войти в PhpmyAdmin на Ubuntu 20.04">}}

Настоятельно рекомендуется создать дополнительную безопасность для PhpMyAdmin для обеспечения PhpMyAdmin Nginx. Вы должны быть в состоянии изменить и получить доступ к URL PhpMyAdmin на что -то вроде неясного URL.

## Шаг 7: Secure PhpmyAdmin {#id-6-secure-phpmyadmin-резокричение}
Затем мы хотим настроить аутентификацию в Nginx, чтобы обеспечить дополнительный уровень безопасности. Теперь мы установим Apache2-UTIL, который может генерировать файл .htpasswd, который работает с серверами Nginx и Apache2.
```
sudo apt install apache2-utils
```
После установки мы можем сгенерировать файл .htpasswd. Измените имя пользователя по вашему выбору. [Создайте пароль][3] и сохраните его в безопасности.
```
sudo htpasswd -c /etc/nginx/.htpasswd username
```
Теперь будет файл .htpasswd, содержащий ваше имя пользователя и зашифрованный пароль. Вы можете проверить это с помощью команды ниже:
```
cat /etc/nginx/.htpasswd
```
Вы должны увидеть что -то вроде имени пользователя: $ APR1SDFSDF4435SDTSKLFWMMG1SFDSDGG4
Теперь нам нужно добавить 2 директивы в наш файл конфигурации NGINX. Местоположение файла конфигурации может варьироваться в зависимости от ваших установок, хотя путь к файлу по умолчанию обычно находится AT/etc/nginx/sites-vailable/default. Если вы настраиваете несколько доменов, то ваш файл конфигурации может быть расположен где-то вроде /etc/nginx/sites-available/example.com
В этом примере мы предположим, что файл конфигурации Nginx находится AT/etc/nginx/sites-vailable/default. Откройте файл, чтобы отредактировать его.
```
sudo nano /etc/nginx/sites-available/default
```
Прокрутите вниз и ищите блоки местоположения и вставьте в новый блок под ними с именем вашей скрытой папки PhpmyAdmin, в этом примере Aspose_hidden.
```
location /aspose_hidden {
        auth_basic "Restricted Access";
        auth_basic_user_file /etc/nginx/.htpasswd;
}
```
Сохраните файл и выйти (нажмите Ctrl + X, нажмите Y, а затем нажмите Enter). Убедитесь, что файл конфигурации NGINX действителен, иначе сервер может ударить при перезапуске, выполняя команду.
```
sudo nginx -t
```
Если действителен, перезагрузите Nginx config.
```
sudo service nginx reload
```
Теперь при посещении примера.

{{< figure align=center src="images/auth3.png" alt="Как обеспечить phpmyadmin">}}

Вы все закончили с установками PhpMyAdmin на сервере Ubuntu.

## Заключение: {#id-what-next}
Поздравляем, вы успешно установили PhpmyAdmin с Nginx для сервера Ubuntu 20.04 / 20.10 и теперь можете администрировать MySQL через PhpMyAdmin. Теперь вы можете начать создавать базы данных MySQL, пользователей, таблицы, выполнять запросы MySQL и различные другие операции.
Если у вас есть вопросы, не стесняйтесь сообщать мне ниже в разделе комментариев.

## Исследовать
Вам также может понравиться более приведенные более связанные статьи:
  * [Как настроить Apache как обратный прокси для Ubuntu/Debian][4]
  * [Как обеспечить и шифровать Nginx с помощью Let's Encrypt на Ubuntu 20.04][5]
  * [Как настроить поддержку HTTP/2 в Nginx на Ubuntu/Debian][6]
  * [Как настроить nginx с пассажиром на производственном сервере AWS][7]
  * [Как установить и настроить OwnCloud с Apache на Ubuntu][8]

  
[1]: https://devanswers.co/installing-phpmyadmin-nginx-ubuntu-16-04-17-04/mysql-setup/
[2]: https://passgen.co/
[3]: https://passgen.co/?pw=10&a=1
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[8]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
