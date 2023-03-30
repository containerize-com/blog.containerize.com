---
title: "Как обеспечить Nginx с помощью Let's Encrypt на Ubuntu 20.04" 
seoTitle: "Как обеспечить Nginx с помощью Let's Encrypt на Ubuntu 20.04" 
description: "Как настроить, шифровать и защитить Nginx с помощью Let's Encrypt на Ubuntu. Давайте зашифруем клиент, чтобы генерировать сертификаты для автоматической настройки NGINX." 
date: Mon, 19 Apr 2021 06:27:22 +0000
author: yasir saeed
summary: "Веб -сайты включают шифрование SSL/TLS для его домена, чтобы привлечь посетителей. В этой статье объясняется использование утилиты CERTBOT для получения сертификатов TLS/SSL для NGINX." 
url: /ru/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
categories: ['Web Server Solution Stack']
---

Веб -сайты ## включают шифрование SSL/TLS для его домена, чтобы привлечь посетителей. В этой статье объясняется использование утилиты CERTBOT для получения сертификатов TLS/SSL для NGINX.

{{< figure align=center src="images/nginxletsencrypt.png" alt="Закрепите Nginx с помощью Ellic's Encrypt на Ubuntu">}}


##  **Обзор**  
Любой веб -сайт, который стремится привлечь посетителей, должен включить шифрование TLS/SSL для своего домена. Бесплатные сертификаты SSL Обеспечивают безопасное соединение между вашим веб -сервером, которое нравится шифровать и защищать Nginx и браузеры приложений. Let's Encrypt - это бесплатный, автоматизированный и открытый авторитет сертификатов, который позволяет вам настроить такую ​​защиту для Nginx SSL LetsEncrypt. Давайте зашифруем бесплатные сертификаты SSL -SSL доверяют всем основным браузерам и действительны в течение следующих 90 дней с даты выпуска.
В этом сообщении объясняется самый простой способ шифрования и защиты Nginx, запущенного веб -сервера на Ubuntu 20.04 / 18.04, получая сертификаты Nginx https letsEncrypt, используя утилиту Nginx Certbot и настроив свои сертификаты для его автоматического обновления. Давайте запустим и настроем конфигурации letsEncrypt ubuntu nginx.
  * Зависимости и предпосылки
  * Установка утилиты Certbot
  * Подтверждение конфигурации Nginx
  * Разрешение https через брандмауэр
  * Получение сертификата SSL
  * Заключение

## Перво -на первый взгляд: зависимости и предпосылки {#prerequisites}

Чтобы следовать этой статье, вам понадобятся следующие зависимости и предпосылки для установки утилит letsEncrypt ubuntu nginx:
  * Пользователь без корректа или root с поддержкой SUDO на локальных/удаленных машинах.
  * Система, управляющая Ubuntu 20.04 или Ubuntu 18.04
  * Доступ к терминалу командной строки
  * Привилегии SUDO или ROOT на локальных/удаленных машинах
  * Nginx установлен и настроен
  * Зарегистрированное доменное имя, указывающее на публичный IP
  * Блок сервера настроен для этого доменного имени
  * Брандмауэр настроен на принятие соединений на портах 80 и 443.

## Шаг 1 - Установка сертификата {#step-1-—-installing-certbot}

Первым шагом для защиты NGINX и для шифрования NGINX с помощью Let's Encrypt является установка ANGINX CERTBOT, полнофункциональный и простой в использовании пакет для получения и обновления Let's Encrypt SSL-сертификаты на вашем сервере. Для этого начните с открытия терминала на Ubuntu и обновления локального репозитория. Введите Y и введите, если его запрошен.
```
sudo apt update
sudo apt install certbot python3-certbot-nginx

```
Теперь давайте подтвердим некоторые настройки NGINX Secure Configuration.

## Шаг 2 - подтверждение конфигурации Nginx {#step-2-—-confirming-nginx-39-s-configuration}

Как объяснено в разделе «Зависимости и предпосылки», у вас уже должен быть зарегистрированный домен, и сертификат должен иметь возможность найти правильный блок сервера Nginx для этого домена для автоматической настройки SSL. В качестве примера, в этом блоге используется Blog Domain.containerize.com и блок сервера для вашего домена по адресу/etc/nginx/sites-available/blog.containerize.com с директивой server_name уже правильно установлена.
Чтобы подтвердить, откройте файл конфигурации для вашего домена, используя NANO или ваш любимый текстовый редактор:
```
sudo nano /etc/nginx/sites-available/blog.containerize.com

```
Найдите существующую строку директивы Server_name в файле /etc/nginx/sites-available/blog.containerize.com. Это должно выглядеть так:
```
...
server_name blog.containerize.com www.blog.containerize.com;
...
```
Теперь проверьте синтаксис ваших файлов конфигурации NGINX и перезагрузить NGINX Server для загрузки новых настроек конфигурации:
```
sudo nginx -t
sudo systemctl reload nginx

```
Утилита Certbot теперь может найти правильную директиву блока Nginx Server для обеспечения NGINX и автоматически обновлять ее. На следующем шаге давайте обновим брандмауэр, чтобы разрешить трафик HTTPS.

## Шаг 3 - разрешение https через брандмауэр {#step-3-—-allowing-https-through-the-firewall}

Как рекомендовано в этой статье, необходимо настраивать настройки, чтобы обеспечить трафик HTTPS. Чтобы убедиться, что ваш брандмауэр включен и активен, запустите ниже команду:
```
sudo ufw status

```
Вывод должен сказать, что UFW активен и предоставит вам список установленных правил. Это показывает, что HTTP -трафик разрешен на веб -сервер. Чтобы разрешить зашифрованный трафик, вы можете добавить профиль NGINX HTTPS, либо использовать NGINX Full и удалить существующее правило Nginx HTTP. Разрешить nginx https трафик путем ввода команды:
```
sudo ufw allow 'Nginx Full'
sudo ufw delete allow 'Nginx HTTP'

```
Проверьте правило https, которое позволяет HTTPS трафик путем ввода команды Status UFW:
```
sudo ufw status

```
Затем давайте запустим Certbot и получим наши сертификаты.

## Шаг 4 - получение сертификата SSL {#step-4-—-obtaining-an-ssl-certificate}

Плагин NGINX для CertBot позаботится о реконфигурировании NGINX и при необходимости перезагружает его конфигурацию. Поэтому только вам нужно генерировать сертификаты с помощью плагина Nginx, выполнив следующую команду:
```
sudo certbot --nginx -d blog.containerize.com -d www.blog.containerize.com

```
Если это ваш первый раз, когда вы используете утилиту Certbot, то Certbot просит вас настроить настройки HTTPS. Вам будет предложено ввести адрес электронной почты и согласиться с условиями обслуживания. После Hit Enter конфигурация будет обновлена, и Nginx будет перезагружаться, чтобы забрать новые настройки. Наконец, Certbot отобразит с сообщением, сообщающим вам, что сертификат был успешно сгенерирован и где хранятся ваши сертификаты.
Ваши сертификаты загружаются, устанавливаются и загружаются с помощью конфигураций Nginx SSL -сертификата. Попробуйте перезагрузить свой сайт, используя https: // и обратите внимание на индикатор безопасности вашего браузера. Это должно указывать на то, что сайт правильно защищен, обычно с значкой блокировки. Если вы тестируете свой сервер, используя SSL Labs Server Test, он получит оценку A для Nginx и LetsEncrypt.
Давайте закончим, проверив процесс обновления.

## Шаг 5-Проверка автопроизводства Certbot {#step-5-—-verifying-certbot-auto-renewal}

Поскольку давайте зашифруем сертификаты с истечением срок действия каждых девяносто (90) дней, а Nginx SSL LetsEncrypt поощряет пользователей настройку и автоматическое обновление Cron. Сначала откройте файл конфигурации Crontab для текущего пользователя:
```
sudo crontab -e
```
Добавьте задание Cron, которая запускает команду Certbot, Certbot Renew Nginx продлевает сертификат, если он обнаружит, что сертификат истекает в течение 30 дней. Запланируйте его ежедневно в указанное время, например, 05:00 утра.
```
sudo certbot renew --dry-run

```
Работа Cron также должна включать атрибут –quiet, как в приведенной выше команде. Это инструктирует Nginx Ared SSL -сертификат, чтобы не включать вывод после выполнения задачи. Включить автоматическое обновление сертификата. После того, как вы добавите задание Cron, сохраните изменения и выйдите из файла.

## Заключение {#conclusion}

В этой статье мы узнали, как установить сертификат letsencrypt SSL. Мы загрузили сертификаты SSL для вашего домена и настроили Nginx для использования этих сертификатов. Кроме того, вы должны включить CertBot автоматически обновлять сертификаты для SSL Nginx LetsEncrypt. В наших будущих учебных пособиях мы обсудим более интересные темы о том, как обеспечить веб -сервер стандартной технологией безопасности, которая позволяет зашифровать общение между веб -браузером и веб -сервером.
_ YYOUR может присоединиться к нам на [Twitter][1], [LinkedIn][2] и нашей странице [Facebook][3]. Какой криптографический протокол вы используете для обеспечения безопасности связи через компьютерную сеть? Если у вас есть какие -либо вопросы, пожалуйста, свяжитесь с нами][4].

## Исследовать
Вы можете найти следующие соответствующие ссылки для мониторинга производительности сервера и обеспечения его надежности и безопасности:
  * [Как настроить Apache как обратный прокси для Ubuntu/Debian][5]
  * [Как установить и защитить PhpMyAdmin с nginx на Ubuntu][6]
  * [Настройка поддержки HTTP/2 в Nginx на Ubuntu/Debian][7]
  * [Настройка Nginx с пассажиром на производственном сервере AWS][8]
  * [Как установить и настроить OwnCloud с Apache на Ubuntu][9]



 [1]: https://twitter.com/containerize_co
 [2]: https://www.linkedin.com/company/containerize/
 [3]: http://facebook.com/containerize
 [4]: mailto:yasir.saeed@aspose.com
 [5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
 [6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
 [7]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
 [8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
 [9]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/