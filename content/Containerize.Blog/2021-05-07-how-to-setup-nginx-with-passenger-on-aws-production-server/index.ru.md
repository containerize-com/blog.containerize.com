---
title: "Как настроить Nginx с пассажиром на производственном сервере AWS" 
seoTitle: "Как настроить Nginx с пассажиром на производственном сервере AWS" 
description: "В этом блоге описываются шаги для установки NGINX с пассажиром через операционную систему Ubuntu 20.04 LTS по методу APT." 
date: Fri, 07 May 2021 15:19:29 +0000
author: yasir saeed
summary: "В этом блоге описываются шаги для установки Nginx с пассажиром через операционную систему Ubuntu 20.04 LTS по методу APT." 
url: /ru/how-to-setup-nginx-with-passenger-on-aws-production-server/
categories: ['Web Server Solution Stack']
---

## В этом блоге описывается шаги для установки Nginx с пассажиром через операционную систему Ubuntu 20.04 LTS по методу APT.

{{< figure align=center src="images/Nginx-With-Passenger-on-AWS-Production-Server.png" alt="Настройка Nginx с пассажиром на производственном сервере AWS">}}


## **Обзор** :
Вам необходимо установить и настроить **nginx с пассажиром на производстве AWS** сервер, прежде чем развернуть свое приложение на производственном сервере.
**Пассажир с открытым исходным кодом** предоставляет много вариантов настройки и функций. Пассажир. Некоторые функции используются для улучшения характеристик производительности приложения. Некоторые из настройки влияют на приложение или поведение обработки соединений и т. Д. Два параметра конфигурации для пассажира необходимы для установки в Nginx, называемых в качестве пассажира \ _ENALBED и Passenger \ _ROOT. Этот процесс установки будет автоматически настраивать обе эти параметры.
В этой статье в блоге мы рассмотрим некоторые из основных этапов конфигурации для установки сервера веб -приложений в операционную систему Ubunt Вы сможете развернуть и администрировать веб -приложения, написанные в Node.js, Python и Ruby после прочтения и следующего ниже.
* **Что такое nginx и пассажир?** 
* **Установить Nginx и пассажирские пакеты** 
* **Включите модуль пассажира nginx и перезагрузить nginx** 
* **подтвердить установки** 
* **Обновления системы и пассажиров** 
**Лучшие веб -серверы с открытым исходным кодом** 
  * **Заключение** 

## 1. Что такое nginx и пассажир? {#step-4:-update-regularly}

**[Что такое сервер nginx?][1] **Nginx-это бесплатное и с открытым исходным веб-сервером для веб-сайта, обслуживающего в качестве обратного прокси, http Load Balancer, потоковой передачи носителя, http-кэша и прокси-сервера электронной почты для IMAP, pop3 и SMTP. Он очень масштабируемый, предназначен для максимальной производительности и стабильности. Nginx-это высокопроизводительный асинхронный, непоторимый и управляемый событиями веб-сервер, который позволяет одновременно обрабатывать несколько запросов клиентов. Он был написан Игором Сисово, опубликованным в 2004 году в соответствии с условиями лицензии BSD 2 пункта.** Nginx работает в 2,5 раза быстрее**, чем Apache и потребляет меньше памяти в соответствии с тестом.
**[Что такое пассажир?][2] **Пассажир с мусором, также известный как mod \ _rails и mod \ _rack, представляет собой бесплатный веб -сервер и сервер веб -приложений с открытым исходным кодом. Он разработан, чтобы быть быстрым, надежным, богатым функциями и легкими, которые интегрируются с Apache и Nginx. Это также улучшает безопасность, надежность и масштабируемость для приложений. Это позволяет администраторам получить представление о операциях веб -приложений, производительности сервера. Сервер приложений пассажиров запускает и легко управляет вашим веб-приложениями. Это также может** обслуживать несколько приложений**в то же время, чтобы быть многояменным и автономным. Он может обрабатывать HTTP -запросы, управлять процессами и ресурсами, а также обеспечивает задачи администрирования, мониторинг и диагностику проблем. Phusion Passenger - это бесплатный сервер приложений с поддержкой для развертывания и администрирования Meteor, Ruby on Rails Nginx Passenger, JavaScript, Python и Node.js.

## 2. Установите пакеты Nginx и пассажир: {#step-1:-install-passenger-packages}

Теперь пришло время установить пассажир и Nginx. Вы сможете легко развернуть один из популярных веб -серверов после этого руководства. Ниже перечисленные команды установит пассажир и Nginx через репозиторий Phusion APT. Если у вас уже был установлен Nginx, то эти команды обновили бы Nginx до версии Phusion с пассажиром, скомпилированным в:
```
# Install Ubuntu PGP key and add HTTPS support for APT
sudo apt-get install -y dirmngr gnupg
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 561F9B9CAC40B2F7
sudo apt-get install -y apt-transport-https ca-certificates

# Add and update phusionpassenger APT repository
sudo sh -c 'echo deb https://oss-binaries.phusionpassenger.com/apt/passenger xenial main > /etc/apt/sources.list.d/passenger.list'
sudo apt-get update

# Install Passenger with Nginx
sudo apt-get install -y nginx-extras passenger
```

## 3. Включите модуль пассажира Nginx и перезапустите Nginx: {#step-2:-enable-the-passenger-nginx-module-and-restart-nginx}

Edit /etc/nginx/nginx.conf и неуместный включите/etc/nginx/passenger.conf;. Например, вы можете увидеть это:
```
# include /etc/nginx/passenger.conf;
```
Удалите символы «#», например:
```
include /etc/nginx/passenger.conf;
```
Если вы не видите закомментированную версию include /etc/nginx/passenger.conf; Внутри nginx.conf, тогда вам нужно вставить его самостоятельно. Вставьте его в /etc/nginx/nginx.conf внутри блока http.
http {
    Включите/etc/nginx/passenger.conf;
    ...
}
Когда вы закончите с этим шагом, **перезапустить nginx** :
```
$ sudo service nginx restart
```

## 4. Подтвердите установки: {#step-3:-check-installation}

После установки, пожалуйста, проверьте установку в терминале, выполнив команду `sudo/usr/bin/passenger-config validate-install`:
```
sudo /usr/bin/passenger-config validate-install
```
Все чеки должны пройти. Если какой -либо из чеков не пройдет, пожалуйста, следуйте предложениям на экране.
Наконец, проверьте, запустил ли Nginx основные процессы пассажира. Запустите `sudo/usr/sbin/passenger-memory-stats '. Вы должны увидеть процессы NGINX, а также пассажирские процессы. Например, как ниже:
```
sudo /usr/sbin/passenger-memory-stats
```
Если вы не видите никаких процессов Nginx или пассажирских процессов, то у вас, вероятно, есть какая -то проблема установки или задачи конфигурации. Пожалуйста, обратитесь к [Руководству по устранению неполадок][3].

## 5. Обновления системы и пассажиров: {#step-4:-update-regularly}

Обновления NGINX, обновления пассажиров и обновления систем доставляются через **APT Package Manager** регулярно. Вы должны регулярно запускать следующую команду, чтобы держать их в курсе:
Sudo Apt-Get обновление
Sudo Apt-Get Upgrade
Вам не нужно перезагружать веб -сайт или приложение после обновления, и вам также не нужно изменять какие -либо файлы конфигурации после обновления. Это все позаботится о вас автоматически.

## 6. **Лучшие веб -серверы с открытым исходным кодом** : {#step-4:-update-regularly}

** Что такое веб-сервер с открытым исходным кодом? В основном он обрабатывает запросы с помощью сетевого протокола HTTP для распространения информации во всемирной паутине.
Более 80% веб -приложений и веб -сайтов работают на веб -серверах с открытым исходным кодом. Здесь я перечислил некоторые из самых популярных веб -серверов с открытым исходным кодом**, и вы можете легко развернуть один из этих популярных веб -серверов самостоятельно.
**apache http server** 
* **Lighttpd Web Server** 
**Веб -сервер OpenLitSpeed ​​** 
**Apache Tomcat Web Server** 
* **Caddy Web Server** 

## [][4. Вывод: {#next-step}

Поздравляем, вы успешно установили и настроили Nginx с пассажиром на **AWS Production Server**для вашего веб -приложения. Пожалуйста, посмотрите на различные руководства в [пассажирской библиотеке][5] для полного освоения пассажирских приложений. Вы можете быть особенно заинтересованы в руководстве [автоматизации развертывания][6] вашего приложения Ruby через**Capistrano** , которое учит вас, как автоматически развертывать будущие обновления приложений без такой большой ручной работы. Теперь вы готовы развернуть свое веб -приложение в экземплярах AWS.
_ Какого бесплатного веб -сервера и веб -приложений с открытым исходным кодом. Есть ли у вас какие -либо вопросы о бесплатном веб -сервере и сервере веб -приложений с открытым исходным кодом?

## Исследовать
Вы можете найти следующие соответствующие сообщения в блоге:
  * [Как настроить Apache как обратный прокси для Ubuntu/Debian][8]
  * [Установите и защищает PhpMyAdmin с Nginx на Ubuntu][9]
  * [Настройка поддержки HTTP/2 в Nginx на Ubuntu/Debian][10]
  * [Безопасно и шифровать Nginx с Let's Encrypt на Ubuntu 20.04][11]
  * [Как установить и настроить OwnCloud с Apache на Ubuntu][12]



[1]: http://nginx.com/
[2]: https://www.phusionpassenger.com/
[3]: https://www.phusionpassenger.com/library/admin/nginx/troubleshooting/
[4]: https://www.phusionpassenger.com/library/walkthroughs/deploy/ruby/aws/nginx/oss/xenial/install_passenger.html#next-step
[5]: https://www.phusionpassenger.com/library/#guides
[6]: https://www.phusionpassenger.com/library/deploy/nginx/automating_app_updates/ruby/
[7]: mailto:yasir.saeed@aspose.com
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[12]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
