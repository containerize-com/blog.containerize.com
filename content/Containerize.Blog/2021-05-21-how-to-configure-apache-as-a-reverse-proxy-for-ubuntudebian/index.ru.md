---
title: "Как настроить Apache как обратный прокси для Ubuntu/Debian" 
seoTitle: "Как настроить Apache как обратный прокси для Ubuntu/Debian" 
description: "Apache Reverse Proxy Configuration Шаг за шагом позволяет запустить один или несколько задняя серверов за прокси -сервером с MOD_PROXY на Ubuntu/Debian Linux." 
date: Fri, 21 May 2021 18:58:46 +0000
author: yasir saeed
summary: "Apache Ready Proxy позволяет вам запускать один или несколько серверов за прокси-сервером. Вот как настроить Apache Reverse Proxy в системе Ubuntu/Debian." 
url: /ru/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## Apache Read Proxy позволяет запускать один или несколько серверов за прокси-сервером. Вот как настроить Apache Reverse Proxy в системе Ubuntu/Debian.

{{< figure align=center src="images/Install-and-Configure-Apache-as-a-Reverse-Proxy-1.png" alt="Установить и настроить Apache Reverse Proxy">}}


## **Обзор** 
Apache Read Ready Proxy позволяет весь трафик и направляет его запускать один или несколько бэкэнд -серверов или контейнеров за прокси -сервером, не разоблачая их публично. Защитный веб-сервер может быть другим HTTP-сервером APACHE2 или с открытым исходным кодом, таким как Nginx. HTTP Server Apache2 - один из самых популярных веб -сервера с открытым исходным кодом, который используется сегодня.
Есть много причин для установки и настройки прокси -сервера. Например, Reverse Proxy может помочь вам добавить безопасность, для балансировки нагрузки, ограничить доступ к определенным местам, чтобы предотвратить атаки и многое другое. В этой статье объясняется, как установить и настроить Apache Reverse Proxy Configuration Шаг за шагом для HTTPS Server на Ubuntu/Debian:
  * Установка Apache2
  * Настройка Apache2
  * Включить свои прокси -модули
  * Включить SSL
  * Перезагрузите Apache2
  * Заключение

## Шаг 1: Установите Apache2
Установка Apache2 очень проста и легко запускать. Для установки просто запустите приведенные ниже команды:
Sudo Apt-Get обновление
sudo apt-get установить apache2
{{_LINE_25_}}
После установки Apache2 в вашей системе используйте следующие команды SystemCtl на Debian Linux или Ubuntu Linux версии Ubuntu, чтобы остановиться, запустить, включить и перезапустить Apache2, чтобы всегда перезапустить, когда сервер загружается.
Sudo SystemCtl Stop Apache2.service
Sudo SystemCtl Start Apache2.service
Sudo SystemCtl включает apache2.service
Sudo SystemCtl перезапустить apache2.service
{{_LINE_31_}}
Вы можете просматривать статус веб -сервера, используя следующую команду:
Sudo SystemCtl Status apache2.service
{{_LINE_34_}}
Чтобы проверить настройку Apache2, откройте свой браузер и просмотрите на имя хоста сервера или свой системный IP -адрес, и вы должны увидеть тестовую страницу Apache2 по умолчанию, как показано ниже. Когда вы видите это, тогда Apache2 работает, как и ожидалось. http: // localhost

{{< figure align=center src="images/apache-reverse-proxy.png" alt="Установите и настройте Apache Reverse Proxy Proxy для Ubuntu">}}


## Шаг 2: Настройте Apache2 как обратный прокси
Apache2 успешно установлен и готов к использованию. Теперь вы можете настроить Apache2 для работы в качестве обратного прокси -прокси -сервера apache2. Прокси -модуль Apache2 Proxypass **и  **ProxyPassReverse **  Функция обеспечивает обратный прокси. Чтобы использовать  **Proxypass **  и  **proxypassreverse**  , вы должны сначала знать, где вы хотите направить трафик сайта.
Apache2 Reverse Proxy Server будет прослушать весь трафик в порте HTTP по умолчанию, который является портом 80 в простой настройке. Благодарный сервер, который размещает контент веб-сайта, будет прослушиваться на пользовательском порту, и это, скорее всего, порт 8080.
В этой статье в блоге мы собираемся настроить Apache2 для прослушивания на порту 80, а затем прямой трафик на сервер на заднем плане, который слушает на порт 8080. Запустите команду ниже, чтобы создать файл Proxy Virtualhost с именем apache2proxy.conf.
sudo nano /etc/apache2/sites-available/apache2proxy.conf
Затем добавьте следующий блок кодов в файле apache2proxy.conf, а затем сохраните его.
{{_LINE_43_}}
        ServerName example.com
        Serveralias www.example.com
        ServerAdmin webmaster@example.com
        Errorlog $ {apache_log_dir}/error.log
        CustomLog $ {apache_log_dir}/access.log вместе
        Проксиреваты отключены
{{_LINE_50_}}
          Заказ отрицания, разрешить
          Разрешить от всех
{{_LINE_53_}}
        Proxypass/http://127.0.0.1:8080/
        ProxyPassReverse/http://127.0.0.1:8080/
{{_LINE_56_}}
          Порядок разрешить, отрицать
          Разрешить от всех
{{_LINE_59_}}
{{_LINE_60_}}
{{_LINE_61_}}
Файл apache2proxy.conf содержит имя вашего сервера, а также Proxy_Pass, где трафик будет направлен при получении HTTP Proxy Server.

## Шаг 3: включить прокси -сервер Apache2
Веб -сервер Apache2 теперь установлен и успешно установлен. У Apache много доступных в комплекте модулей, с которыми сталкиваются в нем. Эти модули не включены в свежем установке Apache2. Сначала нам нужно будет включить модули, которые нам необходимы для включения необходимого модуля Apache MOD_PROXY и нескольких его дополнительных модулей для поддержки различных сетевых протоколов. Запустите приведенные ниже команды, чтобы включить его прокси -модули HTTP.
Sudo A2enmod Proxy
sudo a2enmod proxy_http
sudo a2enmod proxy_balancer
sudo a2enmod lbmethod_byrequests
{{_LINE_69_}}
Теперь включите сайт VirtualHost и перезапустите Apache2, чтобы включить конфигурацию модулей Apache2.
Sudo a2ensite apache2proxy.conf
Sudo SystemCtl перезапустить apache2.service
Запустите веб -браузер по вашему выбору и перейдите на имя хоста вашего сервера, как example.com. Теперь вы будете предварительно прокси на своем сервере Apache2 на порту по умолчанию, т. Е. 8080.

## Шаг 4: Включите SSL   {#Block-07B86D83-DCA0-4924-B991-206719C342EB}
Если вы хотите включить модуль SSL Apache React Proxy, запустите приведенную ниже команду, чтобы включить Apache React Proxy Proxy Pass:
Sudo A2enmod Ssl
Это обеспечит безопасную поддержку Apache обратного прокси HTTP для HTTPS для бэкэнд -серверов.

## Шаг 5: перезапуск apache2   {#block-836BB4FF-17AD-4317-8ECB-153104BD28A7}
Чтобы внести эти изменения в силу, перезапустите Apache, выполнив команду ниже:
Sudo SystemCtl перезапустить apache2.service
Поздравляю! Вы успешно установили и настроили Apache2 Reverse Proxy в вашей системе Linux.

## **Заключение:** {#4A1A}
В этом уроке мы исследовали и обсудили, что является прокси -сервером и Apache React Proxy примера настройки шага. Мы также узнали, как настроить и настраивать Apache2 как обратный прокси в системе Linux. В наших будущих учебных пособиях мы обсудим более интересные темы об Apache и других стеках решений веб -сервера.

## Исследовать
Вам также может понравиться более приведенные более связанные статьи:
  * [Как][1][Установить и защищать phpmyadmin с nginx на Ubuntu][2]
  * [Как настроить Nginx с пассажиром на производственном сервере AWS][3]
  * [Настройка поддержки HTTP/2 в Nginx на Ubuntu/Debian][4]
  * [Безопасно и шифровать Nginx с Let's Encrypt на Ubuntu 20.04][5]
  * [Как установить и настроить OwnCloud с Apache на Ubuntu][6]

  
[1]: https://blog.containerize.com/web-server-solution-stack/ru/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[2]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
