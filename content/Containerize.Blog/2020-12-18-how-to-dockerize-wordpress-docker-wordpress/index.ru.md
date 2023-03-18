---
title: "Как сделать Dockerize WordPress | Docker WordPress" 
seoTitle: "Как сделать Dockerize WordPress | Docker WordPress" 
description: "Что такое Docker & Docker Compose? В этой статье мы узнаем, как установить Docker, Docker Compose и как докеризировать WordPress в контейнер Docker." 
date: Fri, 18 Dec 2020 15:35:07 +0000
author: Assad Mahmood
summary: "Программное обеспечение для контейнера объединяет приложение, его зависимости и заставляет приложение работать в любой вычислительной среде. Давайте узнаем, как сделать так, чтобы WordPress." 
url: /ru/how-to-dockerize-wordpress-docker-wordpress/
categories: ['Blogging']
---

## Программное обеспечение для контейнеров объединяет приложение, его зависимости и заставляет приложение работать в любой вычислительной среде. Давайте узнаем, как сделать так, чтобы WordPress.

{{< figure align=center src="images/dockerwordpress.png" alt="Dockerize WordPress">}}


## Обзор
Добро пожаловать в другой пост в блоге в категории [1] [1] программного обеспечения с открытым исходным кодом. Мы опубликовали несколько статей по таким темам, как [повысить ваши лидеры с помощью бесплатной интеграции WordPress Civicrm] [2], [Как построить свой сайт с помощью WordPress и Gatsby] [3], а также немного. Тем не менее, эта статья принесет дальнейшие понимания и подробную информацию о платформах блога с открытым исходным кодом и ** контейнерным программным обеспечением **. Мы рассмотрим несколько горячих вопросов, таких как Docker & ** Как установить Docker Compose **, и мы узнаем, как докеризировать WordPress.
Контейнеризация стала основной тенденцией в разработке программного обеспечения в качестве альтернативы виртуализации. Он включает в себя инкапсуляцию или объединение программного кода и все его зависимости, чтобы он мог постоянно работать на любой инфраструктуре. Контейнеризация позволяет разработчикам создавать и развертывать приложения быстрее и надежно. Docker - самое популярное приложение для контейнеров, используемое в сообществе разработчиков. В этом уроке мы узнаем, как докеризировать WordPress с помощью Docker Compose. Итак, давайте начнем с следующих моментов.
  *[** Что такое Docker? **] [4]
  *[** Почему вам нужно сделать докеризацию WordPress **?] [5]
  *** [Как установить Docker Compose] [6] **
  *** [Dockerize WordPress] [7] **
  *** [Заключение] [8] **

## Что такое Docker? {#docker}
Проще говоря, Docker-это программное обеспечение с открытым исходным кодом ** контейнерное программное обеспечение **, которое делает виртуализацию быстрее и легче. Это настолько легкое, что контейнер Docker может быть запущен всего за несколько секунд. И вы можете легко запустить десятки контейнеров Docker на одном ПК. Разработчики используют Docker для создания, развертывания и запуска приложений с помощью контейнеров. Контейнеры позволяют разработчику упаковать приложение со всеми необходимыми частями, такими как библиотеки и другие зависимости, и развернуть его в качестве одного пакета. Таким образом, разработчик может быть уверен, что приложение будет работать на любой инфраструктуре. Кроме того, существует огромный разработчик и сообщество поддержки, которое всегда жива, чтобы оказать максимальную помощь в любой актуальности. Docker стал обязательным компонентом любого программного предприятия из-за его мощных функций и использования.

## Почему вам нужно сделать докеризацию WordPress? {#почему}
В этом разделе мы узнаем о необходимости Dockerizing WordPress. WordPress - это ведущее ведущее программное обеспечение для блога с открытым исходным кодом, которое высоко внедрено миром технологий. Однако, чтобы запустить WordPress локально, вам нужны Apache/Nginx, MySQL Server, PHP и тонны других зависимостей. А развертывание в постановке или производственной среде является кошмаром, когда речь идет о управлении этими зависимостями. Иногда для разработчиков и инженеров неоднократно повторяют развертывание неоднократно повторять развертывание, поскольку это требует времени и рабочей силы.
Таким образом, контейнеризация может помочь вам в этом. Все, что вам нужно, это Docker - сама установка занимает секунды, и дополнительная конфигурация не требуется
Независимо от того, является ли это Dev Machine, Stage или Live Server и какой это ОС, Docker работает одинаково везде. Это означает, что вам не нужно будет искать ошибки, которые, скажем, появляются в одной среде и не могут быть воспроизведены в другой.

## Как установить Docker Compose {#install}

### Пререквизиты
Вы можете использовать Docker Compose, чтобы легко запустить WordPress в изолированной среде, построенной с контейнерами Docker. Это руководство демонстрирует, как использовать Compose для настройки и запуска WordPress.
Docker Compose полагается на Docker Engine, поэтому убедитесь, что у вас установлен Docker Engine. На рабочем столе, таких как Docker Desktop для Mac и Windows, Docker Compose включен как часть этих установков настольных компьютеров. Однако сначала на Linux Systems установите двигатель Docker, следуя их [официальному руководству] [9].

### Установить Compose на Linux
Запустите эту команду, чтобы загрузить текущий стабильный выпуск Docker Compose:
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
Применить исполняемые разрешения на бинар:
```
sudo chmod +x /usr/local/bin/docker-compose
```
Установка тестирования с помощью команды версии:
```
docker-compose --version
```

### определить Dockerfile для WordPress
Первое, что нам нужно сделать, это определить, как будет выглядеть наше изображение в ** _ Dockerfile _ **. Это текстовый файл, который добавляется в каталог с источниками вашего приложения.
```
FROM wordpress:php7.1-apache
COPY . /var/www/html/wordpress
```
«**/var/www/html/wordpress **» будет содержать полное содержимое WordPress вместе с темами, плагинами и содержимым. Если ваш репозиторий содержит только тему или плагин, просто добавьте соответствующую папку.
Создайте файл docker-compose.yml, который запускает ваш блог WordPress и отдельный экземпляр MySQL с монтированием тома для постоянства данных:
```
version: '3.3'

services:
   db:
     image: mysql:5.7
     volumes:
       - db_data:/var/lib/mysql
     restart: always
     environment:
       MYSQL_ROOT_PASSWORD: somewordpress
       MYSQL_DATABASE: wordpress
       MYSQL_USER: wordpress
       MYSQL_PASSWORD: wordpress

   wordpress:
     depends_on:
       - db
     build: .
     ports:
       - "8000:80"
     restart: always
     environment:
       WORDPRESS_DB_HOST: db:3306
       WORDPRESS_DB_USER: wordpress
       WORDPRESS_DB_PASSWORD: wordpress
       WORDPRESS_DB_NAME: wordpress
volumes:
    db_data: {}
```
Теперь запустите команду в каталоге проекта
```
docker-compose up -d
```
Это работает ** _ Docker-Complose _ ** в отдельном режиме, вытаскивает необходимые изображения Docker и запускает контейнеры WordPress и базы данных.
После начала контейнеров вы можете открыть URL-адрес в веб-браузере и начать использовать свое приложение:
```
http://localhost:8000
```

## Заключение {#conclusion}
Это подводит нас к концу этого сообщения в блоге. В этой статье мы узнали о том, что такое Docker, ** Как установить Docker Compose **. Мы также узнали, как заставить WordPress, используя Docker-Compose. Кроме того, мы познакомили вас с концепцией Docker и тем, как вы можете определить простые мультизандерные приложения. Тем не менее, это программное обеспечение с открытым исходным кодом ** контейнер ** является ведущим вариантом для всех программных организаций. Поэтому эта статья действительно поможет вам, если вы хотите выбрать Docker для ваших приложений. Есть много других соответствующих статей и программного обеспечения для ведения блога, указанных в разделе «Исследовать» ниже.
Наконец, [Containerize.com] [10] пишет статьи на дополнительных продуктах с открытым исходным кодом. Поэтому, пожалуйста, оставайтесь на связи с категорией [1] [1] для регулярных новостей и обновлений. Более того, вы можете подписаться на нас в наших учетных записях в социальных сетях [Facebook] [11], [LinkedIn] [12] и [Twitter] [13].

## Исследовать
Вы можете найти следующие ссылки актуальными:
  * [WordPress] [14]
  * [Jekyll] [15]
  * [Дискурс] [16]
  * [Призрак] [17]
  * [Как рассказать WordPress с Docker Compose] [18]
  * [Увеличьте свои лидеры бесплатной интеграцией WordPress WordPress] [2]
  * [Автоматизируйте систему билетов с использованием WordPress и Osticket] [19]
  * [Как интегрировать форум дискурса с WordPress] [20]
  * [Увеличьте трафик поиска веб -сайтов, следуя 7 лучшим 7 SEO блогом] [21]
  * [Как построить свой сайт с помощью WordPress и Gatsby] [3]
  * [Как включить сжатие GZIP в WordPress для лучшего PAGSPEED и SEO] [22]
[1]: https://products.containerize.com/blogging/
[2]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[3]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
[4]: #docker
[5]: #why
[6]: #install
[7]: #dockerize
[8]: #conclusion
[9]: https://docs.docker.com/engine/install/#server
[10]: https://www.containerize.com/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/blogging/wordpress/
[15]: https://products.containerize.com/blogging/jekyll/
[16]: https://products.containerize.com/discussion-forum/discourse/
[17]: https://products.containerize.com/blogging/ghost/
[18]: https://blog.containerize.com/blogging/ru/how-to-dockerize-wordpress-docker-wordpress/
[19]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[20]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[21]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/
[22]: https://blog.containerize.com/2020/12/12/how-to-enable-gzip-compression-in-wordpress-for-better-speed/
