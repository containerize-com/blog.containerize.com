---
title: "Как настроить программное обеспечение для службы поддержки онлайн с помощью Osticket" 
seoTitle: "Как настроить программное обеспечение для службы поддержки онлайн с помощью Osticket" 
description: "Управляйте всеми вашими запросами поддержки в одном месте, используя службу поддержки Osticket. Конвертировать запросы, созданные по электронной почте, телефону и формам в веб-билеты." 
date: Fri, 25 Dec 2020 05:46:51 +0000
author: bilalahmed
summary: "Управляйте всеми вашими запросами поддержки в одном месте, используя Osticket. Конвертируйте запросы, созданные по электронной почте, телефону и формам в простые веб-билеты." 
url: /ru/how-to-set-up-help-desk-system-using-osticket/
categories: ['Help Desk']
---

## Управляйте всеми вашими запросами поддержки в одном месте, используя Osticket. Конвертируйте запросы, созданные по электронной почте, телефону и формам в простые веб-билеты.

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket.png" alt="Как настроить программное обеспечение для службы поддержки онлайн с помощью Osticket">}}

Osticket - это программное решение для службы поддержки с открытым исходным кодом. Osticket Helpdesk - это бесплатная альтернатива высокой и сложной поддержке клиентов. Это простой, легкий, надежный, веб-сайт и прост в настройке и использовании. Самое приятное, что это совершенно бесплатно. Мы рассмотрим следующие разделы в этом уроке:
  * [Что такое остикет?][1]
  * [Плюсы и минусы Остикета][2]
  * [Как настроить Osticket?][3]
  * [Заключение][4]

## Что такое Osticket?   {#osticket}
Osticket предоставляет удобную панель управления и компонент отчетности в реальном времени. Пользователи могут просто войти в систему и создавать билеты в несколько простых шагов. Они могут создавать билеты через ваш сайт, электронную почту или телефон. Входящие билеты будут сохранены и назначены агентам. Агенты получат уведомления по электронной почте и будут отвечать на запросы, чтобы помочь решить их проблемы. Клиенты и агенты могут обсудить детали и прогресс в разделе комментариев. Клиенты могут отслеживать свои запросы и прогресс с помощью встроенного портала клиентов, предоставленного этим программным обеспечением для службы поддержки онлайн.

## плюсы и минусы Osticket   {#pros}

## ## Pros
  * Osticket очень удобен для пользователей как для конечных пользователей, так и для агентов поддержки.
  * В комплекте с богатыми функциями, у Osticket есть все необходимое, не будучи слишком сложным.
  * Osticket является полностью бесплатным и программным обеспечением для управления билетами с открытым исходным кодом.
  * Он легкий, надежный, надежный и простой в установке программного обеспечения для управления службой поддержки.
  * Гибко работать на всех популярных веб -серверах, включая Apache, Nginx, Lighttpd и IIS и т. Д.

## ## минусы
  * Osticket не предоставляет подробную информацию о аналитике билетов и статистике, как и другие платные системы службы поддержки.
  * Пользовательский интерфейс очень прост и базовый по сравнению с другими системами поддержки.

## Как установить Osticket?   {#как}
Следуйте этим шагам, чтобы установить Osticket с Nginx на Ubuntu 18.04 LTS.
  * Создайте новый каталог для Osticket.
```
sudo mkdir -p /var/www/osticket/
cd /var/www/osticket/
```
  * Загрузите последнюю настройку Osticket, используя следующие команды.
```
sudo apt-get install wget unzip
sudo wget https://github.com/osTicket/osTicket/releases/download/v1.14.1/osTicket-v1.14.1.zip
sudo unzip osTicket-v1.14.1.zip
```
  * После этого создайте файл конфигурации из образца файла, используя эти команды.
```
sudo su -
cd upload/
cp ost-sampleconfig.php ost-config.php
```
  * Затем измените право собственности на веб-каталог Osticket на пользователь и группу «www-data».
```
sudo chown -R www-data:www-data /var/www/osticket/

```
  * После этого создайте новый файл конфигурации виртуального хоста.
```
sudo vim /etc/nginx/sites-available/osticket.conf

```
  * Затем вставьте в него код конфигурации.
```
server {
listen 80;
server_name 13.52.217.10;   ## change server_name as per your domain name.
root /var/www/osticket/upload;

access_log /var/log/nginx/access.log;
error_log /var/log/nginx/error.log;
index index.php index.html index.htm;


# Enable gzip
gzip on;
gzip_min_length 1000;
gzip_types text/plain application/x-javascript text/xml text/css application/xml;

set $path_info "";

location ~ /include {
deny all;
return 403;
}

if ($request_uri ~ "^/api(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/api/(?:tickets|tasks).*$ {
try_files $uri $uri/ /api/http.php?$query_string;
}

if ($request_uri ~ "^/scp/.*\.php(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/scp/ajax.php/.*$ {
try_files $uri $uri/ /scp/ajax.php?$query_string;
}

location / {
try_files $uri $uri/ index.php;
}

location ~ \.php$ {
fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
include fastcgi_params;
include snippets/fastcgi-php.conf;
fastcgi_pass unix:/run/php/php7.2-fpm.sock;
}
}
```
  * Измените имя сервера в соответствии с вашим доменным именем. Сохраните файл и выйдите.
  * Теперь свяжите этот виртуальный файл хоста с папкой с поддержкой сайтов, используя следующую команду
```
ln -s /etc/nginx/sites-available/osticket.conf /etc/nginx/sites-enabled/

```
  * Тест на любые ошибки конфигурации с использованием следующей команды
```
nginx -t
```
  * Теперь перезапустите службу Nginx с помощью следующей команды
```
sudo systemctl restart nginx

```
  * Теперь введите свое доменное имя в любом веб -браузере, чтобы запустить мастер установки, как показано на следующем рисунке

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-2.png" alt="Как настроить программное обеспечение для службы поддержки онлайн с помощью Osticket">}}

  * Включите необходимые расширения от php.ini и нажмите «Продолжить».
  *Заполните всю необходимую информацию и нажмите кнопку «**Установить сейчас»** .

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-3.png" alt="Как настроить программное обеспечение для службы поддержки онлайн с помощью Osticket">}}

  * В настройках базы данных введите dbname, имя пользователя и пароль.
  * Наконец, нажмите кнопку «Установить сейчас»
  * После завершения установки он покажет страницу с сообщением успеха.
  * Затем измените разрешение ost-config.php для удаления доступа к записи, выполнив следующую команду:
```
cd /var/www/osticket/upload/
chmod 0644 include/ost-config.php
```

## Заключение   {#conclusion}
Osticket лучше всего подходит для компаний с низким бюджетом или тем, кто хочет простую систему службы поддержки, а не сложная. Это простое, легкое, надежное, с открытым исходным кодом и совершенно бесплатное программное обеспечение для службы поддержки онлайн. Что делает Osticket отличной альтернативой для более дорогих систем поддержки клиентов. Чтобы узнать больше о функциях Osticket и Руководстве по установке, пожалуйста, ознакомьтесь с следующим учебником.

## Исследовать
[Лучший с открытым исходным кодом и бесплатно программное обеспечение для службы поддержки ИТ][5]
[Популярные бесплатные билеты на основе Helpdesk и системы обслуживания клиентов][6]
[Руководство для начинающих по разработке плагина Osticket][7]
[Как внедрить многоцелевое место в Остикете][8]
[Автоматизируйте систему продажи билетов с использованием WordPress и Osticket][9]

  
[1]: #osticket
[2]: #pros
[3]: #how
[4]: #conclusion
[5]: https://products.containerize.com/helpdesk/
[6]: https://products.containerize.com/helpdesk/osticket
[7]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
[8]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
[9]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
