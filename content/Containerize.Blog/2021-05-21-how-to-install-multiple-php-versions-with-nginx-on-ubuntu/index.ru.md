---
title: "Как установить несколько версий PHP с Nginx на Ubuntu" 
seoTitle: "Как установить несколько версий PHP с Nginx на Ubuntu" 
description: "В статье объясняется, как установить несколько версий PHP с Nginx на Ubuntu. Мы рассмотрим пошаговые инструкции о том, как установить PHP с Nginx." 
date: Fri, 21 May 2021 09:49:12 +0000
author: Assad Mahmood
summary: "Если вы хотите использовать несколько версий PHP с NGINX, то в этой статье мы направим вас пошаговать на том, как установить PHP с NGINX на Ubuntu." 
url: /ru/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

{{< figure align=center src="images/php-with-nginx-multiple-versions.png" alt="PHP с NGINX Multy PHP -версиями">}}


## Если вы хотите использовать несколько версий PHP с nginx, то в этой статье мы направим вас пошаговым по шагам о том, как установить PHP с Nginx на Ubuntu.
Эта статья находится в продолжении нашей серии по учебным пособиям о Nginx. До сих пор мы рассмотрели, как использовать Nginx в качестве балансировщика нагрузки, как использовать Nginx в качестве обратного прокси. И теперь этот урок охватывает еще один требовательный вопрос «Как использовать несколько версий PHP с Nginx». В этом уроке мы направим вас пошаговым пошаговым образом, как установить PHP на Ubuntu, как настроить PHP с помощью Nginx, и, наконец, как вы можете установить несколько версий PHP с Nginx. Итак, начнем!
  * [Установите nginx][1]
  * [Установите несколько версий PHP][2]
  * [Создать несколько веб -сайтов с PHP][3]
  * [Настроить Nginx для запуска разных версий для веб -сайтов][4]
  * [Заключение][5]

## установить nginx   {#nginx}
Nginx (произносится как «Engine-X»)-это веб-сервер с открытым исходным кодом, который часто используется в качестве обратного прокси или кэша HTTP. Он доступен для Linux бесплатно.
Чтобы установить Nginx, используйте следующую команду:
```
sudo apt update
sudo apt install nginx
```
После выполнения установки вы можете открыть «http: // localhost» в вашем браузере, и у вас есть настройка.

{{< figure align=center src="images/php-with-nginx-install.png" alt="Установите PHP с nginx">}}


## Установить несколько версий PHP   {#PHP}
**PHP  **(рекурсивная аббревиатура для **  PHP: гипертекстовый препроцессор** )-это популярный язык сценариев с открытым исходным кодом, который широко используется и лучше всего подходит для разработки веб-сайтов и веб-приложений. Это язык сценариев на стороне сервера, который может быть встроен в HTML.
В настоящее время существует три поддерживаемые версии **Php **, то есть  **Php 5,6 ** ,  **7.0, **  и  **8.0 ** . Значение  **Php 5.3 ** ,  **5.4, **  и  **5.5**   все достигли конца жизни; Они больше не поддерживаются обновлениями безопасности. Итак, давайте сначала установим PHP 7.0 и PHP 7.2 с PHP-FPM.
На самом деле перед тем, как мы перейдем к установке, давайте сначала не подчиняются тому, что является PHP-FPM. **PHP-FPM  **(аббревиатура **  FASTCGI Process Manager** ) является чрезвычайно популярной альтернативной реализацией FASTCGI. PHP-FPM включает в себя множество функций, которые могут оказаться полезными для веб-сайтов, получающих трафик в больших объемах.
Сначала для установки PHP 7.0 и 7.2 вам необходимо добавить репозиторий PHP на ваш сервер для установки нескольких версий PHP. Вы можете добавить репозиторий PHP Ondrej со следующей командой:
```
sudo apt-get install software-properties-common -y
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update -y
```
После того, как репозиторий обновлен, установите PHP 7.0, PHP 7.2 и PHP-FPM со следующей командой:
```
apt-get install php7.0 php7.0-fpm php7.2 php7.2-fpm -y
```
Как только установка будет завершена, проверьте состояние PHP-FPM со следующей командой:
```
systemctl status php7.0-fpm
systemctl status php7.2-fpm
```

## Создать несколько веб -сайтов с php   {#web}
Страница по умолчанию размещена в/var/www/html/dociation. Вы можете разместить здесь свои статические страницы или использовать виртуальный хост и поместить его в другое место
```
mkdir /var/www/html/site1.containerize.com
mkdir /var/www/html/site2.containerize.com
```
Затем создайте образец файла index.php для сайта1:
```
vi /var/www/html/site1.containerize.com/index.php
```
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hello, Nginx! Site1</title>
</head>
<body>
    <h1>Hello, Nginx! Site1</h1>
    <p>We have just configured our Nginx web server on Ubuntu Server!</p>
<?php
phpinfo();
?>
</body>
</html>
```
Теперь создайте образец файла index.php для сайта2:
```
vi /var/www/html/site2.containerize.com/index.php
```
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hello, Nginx! Site2</title>
</head>
<body>
    <h1>Hello, Nginx! Site2</h1>
    <p>We have just configured our Nginx web server on Ubuntu Server!</p>
<?php
phpinfo();
?>
</body>
</html>
```
Затем измените право собственности на обоих веб-сайтов на www-data:
```
chown -R www-data:www-data /var/www/html/site1.containerize.com
chown -R www-data:www-data /var/www/html/site2.containerize.com
```

## configure nginx   {#configure}
Затем вам нужно будет создать файл виртуального хоста Nginx для домена Site1.containerize.com, который использует PHP 7.0. И другой для сайта2.containerize.com, который использует PHP 7.2.
```
vi /etc/nginx/sites-available/site1.containerize.com.conf
```
Добавьте следующие строки:
```
server {
   listen 80;
   root /var/www/html/site1.containerize.com/;
   index index.php;
   server_name site1.containerize.com;
   location / {
      try_files $uri $uri/ =404;
   }
   location ~ \.php$ {
      try_files $uri =404;
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
      fastcgi_pass unix:/var/run/php/php7.0-fpm.sock;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include fastcgi_params;
   }
}
```
Теперь создайте второй файл для site2.containerize.com
```
vi /etc/nginx/sites-available/site2.containerize.com.conf
```
```
server {
   listen 80;

   root /var/www/html/site2.containerize.com/;
   index index.php;

   server_name site2.containerize.com;

   location / {
      try_files $uri $uri/ =404;
   }

   location ~ \.php$ {
      try_files $uri =404;
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
      fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include fastcgi_params;
   }
}
```
Затем включите оба файла виртуального хоста со следующей командой:
```
ln -s /etc/nginx/sites-available/site1.containerize.com.conf /etc/nginx/sites-enabled/
ln -s /etc/nginx/sites-available/site2.containerize.com.conf /etc/nginx/sites-enabled/
```
Наконец, перезапустите NGINX и Service PHP-FPM для применения всех изменений конфигурации:
```
systemctl restart nginx
systemctl restart php7.0-fpm
systemctl restart php7.2-fpm
```

## Заключение   {#conclusion}
В этом уроке мы исследовали, как несколько версий PHP на Ubuntu. Мы научились установить Nginx. Затем мы исследовали, как настроить два разных веб -сайта в Nginx. И, наконец, мы узнали, как настроить два разных веб -сайта с разными версиями PHP с Nginx. Надеюсь, учебник помог вам.

## Исследовать
  * [Как настроить и настроить Nginx как обратный прокси][6]
  * [Как использовать Nginx в качестве балансировщика нагрузки для вашего приложения][7]

  
[1]: #nginx
[2]: #php
[3]: #web
[4]: #configure
[5]: #conclusion
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
