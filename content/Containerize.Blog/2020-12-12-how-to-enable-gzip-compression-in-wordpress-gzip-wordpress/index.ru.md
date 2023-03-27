---
title: "Как включить сжатие GZIP в WordPress | Gzip WordPress" 
seoTitle: "Как включить сжатие GZIP в WordPress | Gzip WordPress" 
description: "Вы хотите включить сжатие GZIP в WordPress, чтобы ускорить ваш сайт? В этом сообщении мы узнаем, как включить сжатие в WordPress." 
date: Sat, 12 Dec 2020 11:51:16 +0000
author: Assad Mahmood
summary: "Скорость страницы и время загрузки являются ключевыми факторами для лучшего ранжирования в поисковых системах. Сжатие GZIP может сделать это и обеспечить конкурентное преимущество." 
url: /ru/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
categories: ['Blogging']
---

## Скорость страницы и время загрузки являются ключевыми факторами для лучшего ранжирования в поисковых системах. Сжатие GZIP может сделать это и обеспечить конкурентное преимущество.

{{< figure align=center src="images/Asset-1.png" alt="Включить сжатие GZIP">}}


## Обзор
Поскольку Google и другие поисковые системы рассматривают возможность пользователя веб -сайта (UX) важным фактором в их алгоритмах ранжирования. Стало более важно улучшить и оптимизировать ваш сайт для лучших рейтингов. Среди наиболее важных факторов, на которые следует обратить внимание, скорость страницы и время загрузки. И самый быстрый и простой способ улучшить скорость и производительность сайта - это обеспечить сжатие GZIP на вашем сайте. Есть вероятность, что ваш веб -хост автоматически обеспечивает сжатие GZIP для вас. Если нет, вы должны выполнить эту важную задачу сами.
В этой статье мы точно покажем вам, как легко включить сжатие GZIP в WordPress. Давайте начнем!
* [ **Что такое сжатие GZIP** ?][1]
* [ **Как работает сжатие GZIP?** ][2]
* **[Как проверить, включена ли сжатие GZIP?][3]** 
* **[включить сжатие GZIP в WordPress][4]** 
* **[Заключение][5]** 

## Что такое сжатие GZIP? {#what}

GZIP - это **формат файла и программное приложение** , используемое для сжатия файлов и декомпрессии. Веб -серверы или другое программное обеспечение используют сжатие GZIP для сжатия файлов данных, прежде чем они будут отправлены в браузеры пользователей. Это сокращает время загрузки файла, которое делает ваш сайт быстрее. Все современные браузеры поддерживают сжатие GZIP.
Также важно отметить, что сжатие GZIP должно быть включено на вашем веб -сервере, прежде чем вы сможете включить сжатие файлов и папок. Вскоре мы посмотрим, как проверить, включен ли ваш веб -сервер.

## Как работает сжатие GZIP? {#work}

GZIP, самый популярный метод сжатия, используется веб -серверами и браузерами для сжатия и декомпрессии контента при его передаче через Интернет. Он используется в основном в коде и текстовых файлах, GZIP может уменьшить размер файлов JavaScript, CSS и HTML до 90%. По умолчанию сжатие GZIP не сжимает изображения или видео. Для этого вам нужно будет оптимизировать изображения для Интернета на вашем сайте WordPress. Вот почему большинство инструментов тестирования скорости на веб -сайте, таких как Google PageSpeed ​​Insights, настоятельно рекомендует обеспечить сжатие GZIP.
Когда веб -сервер получает запрос на веб -страницу, WebServer проверяет заголовок запроса, чтобы проверить, поддерживает ли браузер GZIP. Если это так, сервер генерирует разметку для страницы перед применением GZIP. GZIP преобразует разметку HTML в сжатые данные, которые затем доставляются конечному пользователю. Когда конечный пользователь получает сжатые данные, их браузер распаковывает их.

## **Как проверить, включена ли сжатие GZIP?** {#verify}

Ваш веб -хост может по умолчанию в WordPress. Однако это не всегда так. Вы можете определить, если у вас уже есть сжатие GZIP с использованием Chrome 'DevTools.
Откройте свой сайт в браузере Chrome, затем щелкните правой кнопкой мыши в любом месте на странице и выберите **Осмотрите**, чтобы**Откройте инструменты разработчика** .
Затем перейдите на вкладку **Network**и нажмите на основной URL -адрес веб -сайта в разделе «Имя». Выберите вкладку **Заголовки** , а затем прокрутите вниз, чтобы найти заголовки**ответа** Раздел:

{{< figure align=center src="images/gzip-determine.gif" alt="Проверьте кодирование контента">}}

Там вы увидите, включено ли сжатие GZIP.

## Включить сжатие GZIP в WordPress {#enable}

Если вы определили, что **WordPress GZIP сжатие еще не включено** , есть несколько методов, которые вы можете использовать для его запуска. Самый простой способ - использовать некоторые плагины WordPress, такие как [WP Rocket][6], [WP Super Cache][7] или [W3 Total Cache][8]. Тем не менее, вы можете вручную сделать это на уровне сервера с помощью файла .htaccess или обновления конфигурации Nginx.

### Редактирование .htaccess файл
Одним из наиболее распространенных способов включения сжатия WordPress GZIP является **Редактировать ваш _.htaccess_ file** . Тем не менее, это предполагает риск что -то нарушать. Это конфиденциальный серверный файл, и один неправильный ход может вызвать множество проблем.
Чтобы снизить риск, обязательно **Сохраните копию исходного файла**, прежде чем вносить какие -либо изменения. Файл _.htaccess_ должен находиться в папке**корневой папки вашего сайта** . После того, как вы откроете _.htaccess_, добавьте следующий код под разделами, отмеченные ``# Begin WordPress` и `# End WordPress` Теги
```
# Compress HTML, CSS, JavaScript, Text, XML and fonts
AddOutputFilterByType DEFLATE application/javascript
AddOutputFilterByType DEFLATE application/rss+xml
AddOutputFilterByType DEFLATE application/vnd.ms-fontobject
AddOutputFilterByType DEFLATE application/x-font
AddOutputFilterByType DEFLATE application/x-font-opentype
AddOutputFilterByType DEFLATE application/x-font-otf
AddOutputFilterByType DEFLATE application/x-font-truetype
AddOutputFilterByType DEFLATE application/x-font-ttf
AddOutputFilterByType DEFLATE application/x-javascript
AddOutputFilterByType DEFLATE application/xhtml+xml
AddOutputFilterByType DEFLATE application/xml
AddOutputFilterByType DEFLATE font/opentype
AddOutputFilterByType DEFLATE font/otf
AddOutputFilterByType DEFLATE font/ttf
AddOutputFilterByType DEFLATE image/svg+xml
AddOutputFilterByType DEFLATE image/x-icon
AddOutputFilterByType DEFLATE text/css
AddOutputFilterByType DEFLATE text/html
AddOutputFilterByType DEFLATE text/javascript
AddOutputFilterByType DEFLATE text/plain
AddOutputFilterByType DEFLATE text/xml

# Remove browser bugs (only needed for really old browsers)
BrowserMatch ^Mozilla/4 gzip-only-text/html
BrowserMatch ^Mozilla/4.0[678] no-gzip
BrowserMatch bMSIE !no-gzip !gzip-only-text/html
Header append Vary User-Agent
```
**Сохраните файл** и загрузите его на сервер вашего сайта. Когда вы закончите, проверьте, включен ли GZIP с использованием DevTools Chrome, как объяснено выше.

## включить сжатие gzip в nginx
К **Включить сжатие**, включите директиву **Gzip** с параметром ON. **gzip** на; По умолчанию**nginx** сжимает ответы только с помощью типа MIME/HTML. Чтобы сжать ответы с другими типами MIME, включите директиву GZIP_TYPES и перечислите дополнительные типы.
Вы можете включить сжатие GZIP в WordPress, **Открыв свой _nginx.conf_ file** и добавив следующий код:
```
gzip on;
gzip_disable "MSIE [1-6].(?!.*SV1)";
gzip_vary on;
gzip_types text/plain text/css text/javascript image/svg+xml image/x-icon application/javascript application/x-javascript;
```

## Заключение {#conclusion}

Это конец этого учебника Gzip WordPress. Есть много способов оптимизировать ваш сайт для скорости и производительности. В этом учебном пособии Gzip WordPress мы прошли через сжатие GZIP, важность сжатия GZIP и его шаги установки. Кроме того, есть много соответствующих ссылок, упомянутых в разделе «Исследовать» ниже.
Наконец, [cantainerize.com][9] пишет статьи на дополнительных продуктах с открытым исходным кодом. Поэтому, пожалуйста, оставайтесь на связи с категорией [10][10] для регулярных новостей и обновлений.

## Исследовать
  * [Matomo][11]
  * [Правдоподобно][12]
  * [WordPress][13]
  * [Jekyll][14]
  * [Как докеризировать WordPress с Docker Compose][15]
  * [Как бесплатные инструменты бизнес -аналитики помогают вашему бизнесу][16]
  * [5 лучших инструментов бизнес -аналитики с открытым исходным кодом 2021 года][17]
  * [Как установить плагин в WordPress | Ванильный форум][18]
  * [Увеличьте свои лидеры бесплатной интеграцией WordPress WordPress][19][19]



[1]: #what
[2]: #work
[3]: #verify
[4]: #enable
[5]: #conclusion
[6]: https://wp-rocket.me/
[7]: https://wordpress.org/plugins/wp-super-cache/
[8]: https://wordpress.org/plugins/w3-total-cache/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/blogging/
[11]: https://products.containerize.com/business-intelligence/matomo
[12]: https://products.containerize.com/business-intelligence/plausible
[13]: https://products.containerize.com/blogging/wordpress/
[14]: https://products.containerize.com/blogging/jekyll/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/2021/03/12/how-free-business-analytics-tools-assist-your-business/
[17]: https://blog.containerize.com/business-intelligence-software/top-5-open-source-business-intelligence-solutions-of-2021/
[18]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[19]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
