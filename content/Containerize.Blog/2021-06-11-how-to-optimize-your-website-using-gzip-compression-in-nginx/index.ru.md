---
title: "Как оптимизировать ваш сайт, используя сжатие GZIP в Nginx" 
seoTitle: "Как оптимизировать ваш сайт, используя сжатие GZIP в Nginx" 
description: "В этой статье мы обсудим метод оптимизации скорости передачи вашего веб -сайта, уменьшая размеры файлов за счет сжатия GZIP в Nginx." 
date: Fri, 11 Jun 2021 12:46:52 +0000
author: Assad Mahmood
summary: "Этот учебник направляет вас о том, как оптимизировать производительность вашего веб -сайта и быстро сделать его, уменьшив размеры файлов, используя сжатие GZIP в Nginx." 
url: /ru/how-to-optimize-your-website-using-gzip-compression-in-nginx/
categories: ['Web Server Solution Stack']
---

## Этот учебник направляет вас о том, как оптимизировать производительность вашего веб -сайта и быстро сделать его, уменьшив размеры файлов, используя сжатие GZIP в Nginx.

{{< figure align=center src="images/enable-gzip-compression-in-nginx.png" alt="Как включить сжатие gzip в nginx">}}

Эта статья находится в продолжении нашей серии учебных пособий о Nginx. До сих пор мы рассмотрели, как использовать Nginx в качестве балансировщика нагрузки, как использовать Nginx в качестве обратного прокси. И теперь этот урок охватывает еще один требовательный вопрос «Как оптимизировать ваш сайт, используя сжатие GZIP в Nginx». В этом уроке мы будем направлять вас пошаговым за шагом в том, как включить сжатие GZIP в NGINX. Итак, начнем!
  * [Оптимизация веб -сайта с помощью сжатия][1]
  * [Что такое сжатие GZIP?][2]
  * [Как работает сжатие GZIP?][3]
  * [Включить сжатие GZIP в nginx][4]
  * [Проверьте сжатие GZIP][5]
  * [Заключение][6]

## Оптимизация веб -сайта с помощью сжатия {#optimize}

Производительность веб -сайта зависит от ряда факторов. Одним из факторов, от которых это зависит от частично, является размер всех файлов, которые браузер пользователя должен загрузить с вашего сервера. Сокращение или сжатие размера этих передаваемых файлов может сделать ваш сайт быстрее загружаться для пользователя. Это также может сократить счет за ваш веб -сайт, если вы заплатите за использование полосы пропускания при измеренных соединениях. Таким образом, сжатие может сыграть очень важную роль в оптимизации вашего сайта.
Поскольку Google и другие поисковые системы рассматривают возможность пользователя веб -сайта (UX) важным фактором в их алгоритмах ранжирования. Стало более важно улучшить и оптимизировать ваш сайт для лучших рейтингов. Среди наиболее важных факторов, на которые следует обратить внимание, скорость страницы и время загрузки. И самый быстрый и самый простой способ улучшить скорость и производительность вашего веб -сайта - это обеспечить сжатие GZIP на вашем сайте.

## Что такое сжатие GZIP? {#what-gzip}

GZIP - это **формат файла и программное приложение** , используемое для сжатия и декомпрессии файлов. Веб -серверы или другое программное обеспечение используют сжатие GZIP для сжатия файлов данных, прежде чем они будут отправлены в браузеры пользователей. Это сокращает время загрузки файла, которое делает ваш сайт быстрее. Все современные браузеры поддерживают сжатие GZIP.
Также важно отметить, что сжатие GZIP должно быть включено на вашем веб -сервере, прежде чем вы сможете включить сжатие файлов и папок. Вскоре мы увидим, как включить сжатие GZIP в Nginx.

## Как работает сжатие GZIP? {#how-gzip}

GZIP, самый популярный метод сжатия, используется веб -серверами и браузерами для сжатия и декомпрессии контента при его передаче через Интернет. Он используется в основном в коде и текстовых файлах, GZIP может уменьшить размер файлов JavaScript, CSS и HTML до 90%.
По умолчанию сжатие GZIP не сжимает изображения или видео. Вот почему большинство инструментов тестирования скорости на веб -сайте, таких как Google PageSpeed ​​Insights, настоятельно рекомендует обеспечить сжатие GZIP.
Когда веб -сервер получает запрос на веб -страницу, WebServer проверяет заголовок запроса, чтобы проверить, поддерживает ли браузер GZIP. Если это так, сервер генерирует разметку для страницы перед применением GZIP. GZIP преобразует разметку HTML в сжатые данные, которые затем доставляются конечному пользователю. Когда конечный пользователь получает сжатые данные, их браузер распаковывает их.

## Включить сжатие GZIP в nginx {#enable-gzip}

Чтобы изменить конфигурацию NGINX GZIP, откройте основной файл конфигурации NGINX в «_VI_» или ваш любимый текстовый редактор:
```
sudo vi /etc/nginx/nginx.conf
```
Найдите раздел настроек _gzip_, который выглядит следующим образом:
```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

# gzip_vary on;
# gzip_proxied any;
# gzip_comp_level 6;
# gzip_buffers 16 8k;
# gzip_http_version 1.1;
# gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
. . .
```
Как вы можете видеть, Gzip включен по умолчанию с _gzip On; _ Но есть и другие прокомментированные настройки GZIP.
Мы можем включить настройку _gzip_types_ для включения сжатия на типах файлов, которые мы хотим сжать. Например
```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_buffers 16 8k;
gzip_http_version 1.1;
gzip_min_length 256;
gzip_types
  application/atom+xml
  application/geo+json
  application/javascript
  application/x-javascript
  application/json
  application/ld+json
  application/manifest+json
  application/rdf+xml
  application/rss+xml
  application/xhtml+xml
  application/xml
  font/eot
  font/otf
  font/ttf
  image/svg+xml
  text/css
  text/javascript
  text/plain
  text/xml;
. . .
```
Теперь перезапустите Nginx, чтобы принять новые настройки.

## Проверьте сжатие GZIP {#verify}

Теперь, когда мы включили сжатие GZIP, давайте подтвердим это.
```
curl -H "Accept-Encoding: gzip" -I http://localhost/test.html

```
Ответ останется прежним, так как сжатие уже включено для этого филетипа:
```
Output
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Mon, 08 Feb 2021 11:03:41 GMT
Content-Type: text/html
Last-Modified: Mon, 08 Feb 2021 11:03:41 GMT
Connection: keep-alive
ETag: W/"6222dc8d-500"
<strong>Content-Encoding: gzip</strong>
```

## Заключение {#conclusion}

В этой статье мы узнали, что вы можете использовать модуль Nginx GZIP для ускорения передачи файлов. Мы показали вам шаг за шагом, как включить GZIP сжатие в Nginx с помощью модуля GZIP. В официальной документации для [GZIP Module][7] перечислены другие директивы на конфигурацию, на которые вы можете посмотреть. Надеюсь, этот урок поможет вам оптимизировать производительность и скорость вашего сайта.

## Исследовать
  * [Как установить несколько версий PHP с Nginx на Ubuntu][8]
  * [Как настроить и настроить nginx как обратный прокси][9]



[1]: #optimize
[2]: #what-gzip
[3]: #how-gzip
[4]: #enable-gzip
[5]: #verify-gzip
[6]: #conclusion
[7]: https://nginx.org/en/docs/http/ngx_http_gzip_module.html
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
