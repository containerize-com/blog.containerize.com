---
title: "Учебное пособие по настройке для LEMP Stack на Ubuntu 18.04" 
seoTitle: "Учебное пособие по настройке для LEMP Stack на Ubuntu 18.04" 
description: "Stack LEMP - это программный стек, который используется для разработки и развертывания веб -приложений. Узнайте, как установить Nginx, MySQL и PHP на Ubuntu 18.04." 
date: Sat, 26 Jun 2021 00:05:53 +0000
author: Masood Anwer
summary: "Установить & amp; Настройте стек LEMP для разработки и развертывания веб -приложений. Это руководство поможет вам установить Nginx, MySQL и PHP на Ubuntu 18.04." 
url: /ru/setup-tutorial-for-lemp-stack-on-ubuntu-18-04/
categories: ['Web Server Solution Stack']
---

## Установить и настроить стек LEMP для разработки и развертывания веб -приложений. Это руководство поможет вам установить Nginx, MySQL и PHP на Ubuntu 18.04.

{{< figure align=center src="images/lemp-banner.png" alt="Установите стек LEMP на Ubuntu">}}


## Обзор {#Prerequisites}

В этом руководстве мы установим Nginx, MySQL и PHP (стек LEMP) для разработки и развертывания веб -приложений. Мы также настроим веб -сервер на PHP -приложение Server на сервере Ubuntu 18.04. Мы рассмотрим следующие разделы в этом уроке.
* [  **Пререквизиты**  ][1]
* [  **Что такое стек LEMP?**  ][2]
* [  **LEMP Инсталляция**  ][3]
* [  **Заключение**  ][4]

## Предварительные условия {#Предварительные условия}

Перед установкой программного обеспечения вы должны удовлетворить следующие требования.
  * Сервер с операционной системой Ubuntu
* Пользователь, не являющийся корнями с  **sudo**  привилегии

## Что такое стек LEMP? {#What}

 **LEMP Stack** -это коллекция программного обеспечения, которое можно использовать для запуска веб-приложений на основе PHP. LEMP означает Linux, Nginx, MySQL и PHP. Стек LEMP - это вариант стека лампы. Как LAMP, так и LEMP являются популярными программными стеками для разработки и развертывания веб -приложений. Существует одно отличие между этими двумя программными стеками. LAMP использует веб -сервер Apache, тогда как LEMP Server использует веб -сервер NGINX.

## Установка LEMP {#Installation}

В этом разделе мы сосредоточимся на том, как установить Nginx, MySQL и PHP на Ubuntu 18.04. Прежде всего, нам нужно обновить пакеты серверов, выполнив команду ниже.
```
$ sudo apt update
```

### Установка веб -сервера Nginx
* Запустите команду ниже, чтобы  **Установить nginx на Ubuntu**  .
```
$ sudo apt install nginx
```
  * Как только вы закончите с установкой NGINX, откройте свой веб -браузер и введите IP -адрес вашего сервера. Он покажет вам страницу приветствия Nginx Web Server по умолчанию.

{{< figure align=center src="images/nginx-home-1.png" alt="Страница по умолчанию Nginx Web Server">}}


### Установка MySQL
Теперь вам нужно установить сервер базы данных MySQL для управления данными приложения.
* Запустите команду ниже, чтобы  **Установить MySQL на Ubuntu**  .
```
$ sudo apt install mysql-server
```
  * Чтобы получить установку MySQL, запустите следующую команду.
```
$ sudo mysql_secure_installation
```
* Вам будет спросить либо вы хотите включить  **Плагин пароля**  или нет. Лучше не включить это, так что введите n и нажмите Enter, чтобы двигаться на следующем шаге.
  * Затем он задаст вам пару вопросов, как показано ниже. Вам нужно ответить на все вопросы.
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  * Теперь MySQL Server работает и работает. Вы можете проверить его со следующей командой. Введите пароль учетной записи корневой учетной записи Ubunt
```
$ sudo mysql
```
  * Введите команду ниже, чтобы выйти из MySQL.
```
mysql> exit
```

### Установка PHP
Мы рассмотрим установку PHP-FPM для обработки PHP. PHP-FPM означает FastCGI Process Manager. Nginx Web Server не имеет никакой встроенной функциональности для обработки PHP, поэтому мы будем использовать для него PHP-FPM. Кроме того, мы установим PHP-MySQL для передачи PHP с MySQL для управления данными.
* Запустите команду ниже, чтобы  **Установить PHP на Ubuntu**  .
```
$ sudo apt install php-fpm php-mysql
```
  * Теперь вы закончили с установкой PHP и всем необходимым программным обеспечением LEMP Stack для запуска веб -приложения.
  * На этом этапе мы создадим файл конфигурации NGINX, чтобы сообщить Nginx использовать процессор PHP для динамического содержания. Запустите команду ниже, чтобы создать файл конфигурации Nginx.
```
$ sudo nano /etc/nginx/sites-available/example.com
```
  * Скопируйте код в файл конфигурации Nginx и сохраните его.
```
server {
        listen 80;
        root /var/www/html;
        index index.php index.html index.htm index.nginx-debian.html;
        server_name example.com;

        location / {
                try_files $uri $uri/ =404;
        }

        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
        }

        location ~ /\.ht {
                deny all;
        }
}
```
  * Давайте кратко рассмотрим эти директивы и блок местоположения, чтобы вы могли иметь базовую информацию.
*  **Слушайте**  : Вы можете определить порт для Nginx. Используйте порт 80 для HTTP и 443 для протоколов HTTPS.
*  **root**  : Определите корневой каталог для вашего проекта. Nginx будет использовать его для обслуживания веб -сайта или веб -приложения.
*  **ИНДЕКС**  : Определите порядок, в котором файлы должны служить. Когда файл индекса вызван, Nginx будет доставлен файл index.php.
*  **server_name**  : определить доменное имя или публичный IP на вашем сервере.
*  **Местоположение /** : Этот блок местоположения имеет **try_block**  директива и соответствует запрошенной URI. Nginx возвращает 404 ошибку, если он не найдет запрошенный файл.
*  **Место ~ .php $**  : этот блок расположения обрабатывает обработку PHP.
*  **Место ~ /.ht*: nginx не обрабатывает** . Htaccess **файл и это блоки местоположения имеют дело с ним. Nginx не обслуживает файл .htaccess, определяя**  отрицание всех**Директивы.
  * Создайте Symlink для недавно созданного файла конфигурации Nginx, чтобы включить его.
```
$ sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
```
  * Запустите следующую команду, чтобы проверить файл конфигурации Nginx для синтаксических ошибок.
```
$ sudo nginx -t
```
  * Перезагрузите веб -сервер Nginx.
```
$ sudo systemctl restart nginx
```

### Тест PHP
  * Чтобы гарантировать, что Nginx правильно обслуживает страницы PHP, мы создадим PHP -файл для тестирования конфигураций.
  * Создать файл info.php в каталоге ROOT Nginx Web Server, выполнив команду ниже.
```
$ sudo nano /var/www/html/info.php
```
  * Добавьте в него приведенный ниже код и сохраните файл.
```
<?php
phpinfo();
```
  * Откройте свой веб -браузер и введите имя доменного домена или общедоступный IP -адрес сервера, а затем имя PHP, например, http: // server \ _ip \ _or_domain/info.php. Вы увидите на странице ниже.

{{< figure align=center src="images/info-php.png" alt="PHP информационная страница">}}


## Заключение {#Заключение}

В этом уроке мы обсудили, как установить и настраивать стек  **LEMP**  . Как вы можете видеть, настройка компонентов программного стека действительно проста. Кроме того, вы можете начать создавать и обслуживать веб -приложения за считанные минуты.
Наконец, [  **cantainerize.com** ][5] находится в постоянном процессе написания постов в блоге на дальнейших последних продуктах с открытым исходным кодом. Поэтому оставайтесь на связи с этой категорией [ **Stack Secred Server Progless**  ][6] для последних обновлений.

## Исследовать
Вы можете найти следующие ссылки актуальными:
* [  **Лучший стек решений веб -сервера с открытым исходным кодом**  ][7]
*  **[Самые популярные цифровые криминалистические инструменты с открытым исходным кодом][8]**  
*  **[ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ СООБЩЕНИЯ СООБЩЕНИЯ СООБЩЕНИЯ (MQ) в 2021 году][9]**  
*  **[Лучшее программное обеспечение для общего хранения и обмена файлами с открытым исходным кодом][10]**  
* [  **Как установить и защитить phpmyadmin с nginx на Ubuntu**  ][11]
* [  **Как установить несколько версий PHP с Nginx на Ubuntu**  ][12]
* [  **5 самых популярных лицензий с открытым исходным кодом в 2021 году**  ][13][13][13]



 [1]: #Prerequisites
 [2]: #What
 [3]: #Installation
 [4]: #Conclusion
 [5]: https://containerize.com
 [6]: https://blog.containerize.com/category/web-server-solution-stack/
 [7]: https://products.containerize.com/solution-stack/
 [8]: https://blog.containerize.com/digital-forensic-tools/top-5-open-source-digital-forensic-tools-in-2021/
 [9]: https://blog.containerize.com/message-queue-software/top-5-open-source-message-queue-software-in-2021/
 [10]: https://products.containerize.com/backup-and-sync/
 [11]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
 [12]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
 [13]: https://blog.containerize.com/licenses-standards/top-5-most-popular-osi-approved-open-source-licenses-of-2021/
