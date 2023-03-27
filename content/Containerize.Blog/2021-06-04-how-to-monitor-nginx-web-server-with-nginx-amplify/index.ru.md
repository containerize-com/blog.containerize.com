---
title: "Как контролировать веб -сервер Nginx с помощью nginx amplify" 
seoTitle: "Как контролировать веб -сервер Nginx с помощью nginx amplify" 
description: "Nginx Amplify - это бесплатный агент мониторинга для веб -сервера Nginx и PHP. Эта статья о том, как контролировать веб -сервер Nginx с помощью nginx amplify" 
date: Fri, 04 Jun 2021 19:08:47 +0000
author: Masood Anwer
summary: "Мониторинг NGINX, PHP -приложений, операционная система с NGINX Amplify и улучшение конфигурации. Эта статья направляет вас на настройку и настройку nginx amplify." 
url: /ru/how-to-monitor-nginx-web-server-with-nginx-amplify/
categories: ['Web Server Solution Stack']
---

## Monitor Nginx, PHP -приложения, операционная система с Nginx Amplify и улучшение конфигурации. Эта статья направляет вас на настройку и настройку nginx amplify.

{{< figure align=center src="images/nginx-post.png" alt="Мониторинг веб -сервера nginx с помощью nginx amplify">}}


## Обзор {#Install}

**Мониторинг веб-сервера**очень важен для веб-сайтов с высоким трафиком.** Мониторинг -агент**будет регулярно записывать необходимые метрики о веб -сервере. Эти критические метрики могут быть использованы для оптимизации конфигурации NGINX. Это поможет вам в улучшении производительности вашего веб -сервера и приложения.
В этом сообщении мы рассмотрим следующие разделы для **Nginx Monitoring** Инструмент с открытым исходным кодом.
  * [Nginx Web Server][1]
  * [Nginx amplify][2]
  * [Установить nginx amplify][3]
  * [Метрики мониторинга][4]

## Nginx Web Server {#Nginx}

[Nginx][5] - это бесплатный и веб -сервер с открытым исходным кодом. Это просто, легкий и прост в настройке, чем Apache. Веб -сервер Nginx также работает как обратный прокси, балансировщик нагрузки, почтовый прокси и HTTP -кэш. Он работает для протоколов HTTP, HTTPS, SMTP, POP3 и IMAP. Nginx-это высокоскоростный, надежный и эффективный веб-сервер, который повышает производительность ваших приложений. Кроме того, он вырос в популярности и теперь считается самым популярным веб -сервером. Кроме того, Nginx подходит для любого типа веб-сайта, включая сайты с высоким трафиком и приложения. Он может быть установлен и настроен практически на всех операционных системах.

### Установить nginx
  * Запустите ниже команды для установки веб -сервера Nginx.
```
sudo apt update
sudo apt install nginx
```
  * Как только вы закончите с установкой, откройте свой браузер и введите «http: // ip \ _of \ _your_server». Вы увидите приведенную ниже страницу приветствия.

{{< figure align=center src="images/nginx-home.png" alt="Добро пожаловать в Nginx!">}}


## Nginx amplify {#Amplify}

Nginx Amplify-это бесплатный инструмент мониторинга для Nginx Open Source, Nginx Plus и PHP-FPM. Это инструмент на основе SaaS для мониторинга и приложений сервера NGINX. Пользователи могут легко отслеживать инфраструктурные активы, мониторировать производительность и регулировать конфигурацию. Он дает комплексную информацию, которую пользователи могут использовать для оптимизации конфигурации веб -сервера и приложений. Он действует как агент на сервере, который размещает приложения Nginx и PHP. Nginx Amplify - это легкий, толкание журналов и данные мониторинга для усиления серверов без ущерба для производительности. Вы можете просмотреть метрики на панели Dashboard Amplify. Агент доступен для всех основных операционных систем, таких как RHEL, CentOS, Ubuntu, Debian, Fedora и FreeBSD. Nginx amplify имеет три основных компонента, таких как агент nginx amplify, Nginx Amplify Web UI и Nginx Amplify Backend.
* **nginx Amplify Agent** - он работает на системе, которая контролируется. Вся связь зашифрована с помощью SSL/TLS.
* **nginx Amplify Web UI** - Web UI показывает метрики для веб -серверов, приложений и операционных систем.
* **nginx Amplify Backend** - это ключевой компонент, который реализован в качестве SaaS и отвечает за сбор метрик, поддержание базы данных, запуск аналитического двигателя и обеспечение основного API.

## Установите nginx amplify {#Install}

Следуйте ниже пошаговым руководством для установки Nginx Amplify на Ubuntu.
  * Во -первых, вам нужно создать учетную запись на Nginx [веб -сайт][6].
  * После входа в систему вы увидите экран ниже на веб -сайте Nginx Amplify. Теперь подключитесь к вашему серверу через SSH и используйте команды, приведенные в следующих шагах.

{{< figure align=center src="images/amplify-1.png" alt="Установите nginx amplify">}}

  * Запустите ниже команду, чтобы загрузить агент.
```
$ sudo wget https://github.com/nginxinc/nginx-amplify-agent/raw/master/packages/install.sh
```
  * Выполните следующую команду для установки nginx amplify на сервере. Замените XXXXX на фактическую клавишу API. Вы можете найти его на приборной панели NGINX Amplify.
```
$ API_KEY='XXXXXXXX' sh ./install.sh
```
  * Как только вы закончите с установкой, вы можете проверить статус со следующей командой.
```
$ sudo service amplify-agent status
```
  * Теперь вам необходимо настроить агент nginx amplify для просмотра метрик.

{{< figure align=center src="images/amplify-2-1.png" alt="Конфигурация мониторинга NGINX">}}

  * Создайте новый файл с конфигурацией Stub_status.
```
$ sudo nano /etc/nginx/conf.d/stub_status.conf
```
  * Скопируйте в него приведенный ниже код и сохраните файл.
```
server {
  listen 127.0.0.1:80;
  server_name 127.0.0.1;
    location /nginx_status {
    stub_status on;
    allow 127.0.0.1;
    deny all;
  }
 }
```
  * Перезагрузите веб -сервер Nginx, чтобы активировать модуль Stub_status.
```
$ sudo service nginx restart
```
  * Теперь откройте файл конфигурации Nginx со следующей командой.
```
$ sudo nano /etc/nginx/nginx.conf
```
  * Добавьте в него приведенный ниже код и сохраните его.
```
error_log /var/log/nginx/error.log warn;
access_log /var/log/nginx/access.log main_ext;
log_format main_ext '$remote_addr - $remote_user [$time_local] "$request" ' '$status $body_bytes_sent "$http_referer" ' '"$http_user_agent" "$http_x_forwarded_for" ' '"$host" sn="$server_name" ' 'rt=$request_time ' 'ua="$upstream_addr" us="$upstream_status" ' 'ut="$upstream_response_time" ul="$upstream_response_length" ' 'cs=$upstream_cache_status' ;
```
  * Перезапустите службу NGINX, чтобы применить все изменения.
```
$ sudo service nginx restart
```
  * Затем перейдите к Amplify Dashboard и нажмите кнопку «Отдел». Вы должны увидеть следующую страницу.

{{< figure align=center src="images/amplify-after-finish-1024x503.png" alt="Мониторинг веб -сервера">}}

* Вы можете увидеть статистику в более простом и читаемом формате, нажав на вкладку **Обзор** . Это будет выглядеть как показано ниже.

{{< figure align=center src="images/amplify-overview.png" alt="NGINX Мониторинг статистики">}}


## Метрики мониторинга {#Monitoring}

Nginx amplify агент собирает следующие типы данных:
* **Nginx Metrics** -он собирает различные связанные с NGINES метрики из Stub_status, журналы файлов и из состояния процесса.
* **Метрики системы** - Nginx Amplify мониторирует различные метрики системы, такие как использование ЦП, использование памяти, сетевой трафик и многие другие.
* **Метрики PHP-FPM** -Если он определяет работающий мастер-процесс PHP-FPM, он получает метрики от статуса пула PHP-FPM.
* **Метрики MySQL** - Глобальный набор статуса MySQL может использоваться агентом для сбора метрик.
* **Nginx Metadata** - Агент собирает данные об экземплярах Nginx, таких как данные пакета, информация о создании, двоичный путь, настройки конфигурации сборки и многое другое.
* **Системные метаданные** - Агент собирает данные о операционной системе, включая имя хоста, время безотказной работы, аромат ОС и другие детали.

## Заключение
Мы подробно рассказали о веб -сервере Nginx и NGINX Amplify Advanced Monitoring Agent. Nginx Amplify довольно прост в настройке и настройке. Кроме того, мы рассказали о том, какие критические метрики Nginx Amplify может отслеживать до **монитора Nginx** . Эти важные показатели могут быть использованы для улучшения конфигурации вашего веб -сервера и приложений NGINX.
Наконец, [cantainerize.com][7] находится в постоянном процессе написания постов в блоге на дальнейших последних продуктах с открытым исходным кодом. Следовательно, оставайтесь на связи с этой категорией [8][8][8] для последних обновлений.

## Исследовать
Вы можете найти следующие ссылки актуальными:
  * [Как использовать Nginx в качестве балансировщика нагрузки для вашего приложения][9]
  * [Как настроить и настроить Nginx как обратный прокси][10]



[1]: #Nginx
[2]: #Amplify
[3]: #Install
[4]: #Monitoring
[5]: https://products.containerize.com/solution-stack/nginx
[6]: https://amplify.nginx.com/signup/
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/web-server-solution-stack/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
