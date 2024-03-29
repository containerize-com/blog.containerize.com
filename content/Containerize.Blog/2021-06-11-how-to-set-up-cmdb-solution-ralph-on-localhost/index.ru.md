---
title: "Как настроить решение CMDB Ralph на Localhost" 
seoTitle: "Как настроить решение CMDB Ralph на Localhost" 
description: "Этот урок о настройке Ralph на Localhost. Ralph - это бесплатное решение CMDB, которое предоставляет функции для отслеживания активов и конфигураций." 
date: Fri, 11 Jun 2021 12:54:21 +0000
author: muhammadmustafa
summary: "Решение управления активами ИТ снижает эксплуатационные расходы и повышает эффективность. Эта статья о том, как настроить программное обеспечение CMDB Ralph на вашей локальной машине." 
url: /ru/how-to-set-up-cmdb-solution-ralph-on-localhost/
categories: ['CMDB Software']
---

## ИТ -решения по управлению активами снижает эксплуатационные затраты и повышает эффективность. Эта статья о том, как настроить программное обеспечение CMDB Ralph на вашей локальной машине.

{{< figure align=center src="images/ralph.png" alt="Решение CMDB">}}


##  **Обзор**  
В настоящее время организации процветают, чтобы соответствовать темпам технологий, используя огромную ИТ -инфраструктуру. Далее, это не меньше, чем проблема в управлении такими огромными условиями. Это требует рабочей силы и технической силы для выполнения таких критических задач. Время от времени становится хлопотом для разработки процессов и процедур для обработки сложных сетей систем, которые включают принтеры, настольные компьютеры, сканеры, телефоны и другие ИТ -аксессуары. Аналогичным образом, конфигурации этих узлов также важны, так как существуют высокие шансы на простоя любой машины в сети. Следовательно, должна быть последовательная проверка этих конфигураций.
Тем не менее, существует много открытого и бесплатного программного обеспечения, доступного для отслеживания и записи активов. Это программное обеспечение известно как программное обеспечение базы данных управления конфигурацией (CMDB). Недавно [cantainerize.com][1] опубликовал решение CMDB [Ralph][2], которое предоставляет много функций для лучших активов и управления конфигурацией. В этом сообщении мы рассмотрим Ральфа, освещая следующие моменты.
*  **[Краткое введение программного обеспечения CMDB Management Ralph][3]**  
*  **[Особенности Ральфа][4]**  
*  **[Как настроить Ральфа на Localhost?][5]**  
*  **[Заключение][6]**  

## Краткое введение программного обеспечения CMDB Management Ralph Ralph {#intro}

Ральф - это бесплатное решение для управления активами с открытым исходным кодом. Это кроссплатформенное и поставляется с возможностями самостоятельного управления. Существует полная экосистема отслеживания активов в реальном времени. Поэтому пользователи могут выполнять анализ для отчетности. Это позволяет пользователям записывать детали активов об их жизненном цикле. Кроме того, это программное обеспечение для управления цифровыми активами с открытым исходным кодом предоставляет пространство для хранения информации об активах центра обработки данных. С другой стороны, это решение CMDB также обеспечивает поддержку для управления программным обеспечением, лицензией, сертификатами и другими контрактами. Ральф не только поддерживает управление активами, но и предоставляет положения для выполнения действий в этих активах. Тем не менее, действия связаны с развертыванием хоста, созданием счетов, отслеживанием доменов или управлением запасами.
Это решение для управления ИТ -активами представляет собой спокойный интерфейс. Разработчики могут интегрировать многие сторонние приложения, используя конечные точки API, выявленные этим бесплатным инструментом с открытым исходным кодом. Кроме того, Ральф написан на Python вместе с вводом HTML, CSS и JavaScript. Таким образом, есть комплексная документация, имеющаяся в отношении разработки и развертывания. Исходный код этого решения для управления акциями доступен в [GitHub][7].

## Особенности Ральфа {#features}

Ральф предлагает много функций. Тем не менее, мы упомянем некоторые из следующих ключевых функций.
 **Расширение** : это программное обеспечение для управления цифровыми активами с открытым исходным кодом очень расширяется. Разработчики могут развернуть его в помещениях или в облаке в соответствии с их потребностями.
 **Поддержка центров обработки данных:**  Ральф также предлагает поддержку хранилищ данных, комнат центров обработки данных, серверов и стойки. Пользователи могут отслеживать все компоненты, их сеть и конфигурации.
 **REST API** : Это бесплатное программное обеспечение CMDB очень настраиваемо. Фактически, он обеспечивает API REST для сторонних интеграций. Разработчики могут расширить его в соответствии с их требованиями.
 **Интуитивный пользовательский интерфейс:**  В этом решении CMDB есть логический пользовательский интерфейс, где пользователи могут легко перемещаться. Кроме того, административная панель предоставляет различные виджеты, которые показывают данные, поступающие в режиме реального времени.
 **Интерфейс командной строки** : Ralph представляет интерфейс командной строки, который предоставляет объект для обнаружения MAC-адресов для развертывания хостов.
 **Поддержка нефизических активов** : Это решение по управлению оборудованием не только обеспечивает поддержку физических активов, но и управляет нефизическими ресурсами, такими как домены, программное обеспечение и лицензии.

## Как настроить Ralph на Localhost? {#setup}

В этом разделе мы проведем процесс установки программного обеспечения для управления ресурсами Ralph на локальной машине. Это довольно легко настроить и использовать.
Прежде чем перейти к следующему разделу, убедитесь, что вы установили следующие предпосылки.
  * [Docker-Compose][8]
  * [Docker][9]
Большая часть программного обеспечения с открытым исходным кодом предлагает изображения Docker для развертывания на различных платформах. Это дает легкость разработчикам и ускоряет процесс разработки и развертывания.
После того, как предварительные условия будут установлены, включите Docker. Теперь откройте терминал и запустите следующую команду, чтобы сделать пустой каталог:
```
mkdir ralph<br>cd ralph
```
После этого сделайте новый файл с именем «docker-compose.yml» и заполните его следующими данными.
```
version: '3'
services:
  web:
    image: allegro/ralph:latest
    restart: always
    ports:
      - "8000"
    volumes:
      - ralph_media:/var/local/ralph/media
      - ralph_static:/usr/share/ralph/static
    links:
      - db
      - redis
      - nginx
    environment:
        DATABASE_NAME: ralph_ng
        DATABASE_USER: ralph_ng
        DATABASE_PASSWORD: ralph_ng
        DATABASE_HOST: db
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

  nginx:
    image: allegro/ralph-static-nginx:latest
    restart: always
    ports:
      - "80:80"
    volumes:
      - ralph_media:/opt/media

  db:
    image: mysql:5.7
    environment:
      MYSQL_DATABASE: ralph_ng
      MYSQL_ROOT_PASSWORD: ralph_ng
      MYSQL_USER: ralph_ng
      MYSQL_PASSWORD: ralph_ng
    volumes:
      - ralph_dbdata:/var/lib/mysql
    command: mysqld --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

  redis:
    image: redis:3.0
    restart: always
    ports:
      - "6379"

  inkpy:
    image: allegro/inkpy:latest
    restart: always
    links:
      - redis:redis
    environment:
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

volumes:
  ralph_dbdata:
  ralph_media:
  ralph_static:
```
Теперь сохраните файл и запустите следующую команду, чтобы сделать сборку:
```
docker-compose build

```
При успешной сборке запустите следующую команду для базы данных:
```
docker-compose run –rm web /root/init.sh

```
Если все идет хорошо, запустите следующую команду, чтобы раскрутить контейнер Docker:
```
docker-compose up -d
```
После запуска этой команды контейнеры Docker будут запущены, как показано на изображении ниже:

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.25.20-1024x509.png" alt="Решение CMDB">}}

Наконец, откройте браузер и обратитесь к приложению по этому адресу http://127.0.0.1.
Он покажет страницу входа в систему, как показано на изображении ниже:

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.20.58-1024x577.png" alt="Решение CMDB">}}


## Заключение {#Заключение}

После прохождения этого сообщения в блоге CMDB одна вещь ясно, что управление активами почти невозможно без хорошего решения CMDB. Программное обеспечение для управления ресурсами играет конкретную роль в управлении и отслеживании активов, конфигураций и их отношений. Существуют положения для отслеживания тех изменений, которые едва внесены на цифровые или физические активы. Эти бесплатные инструменты легко настроить, использовать и поставляются с подробной документацией и руководством. Наконец, [  **Containerize.com** ][1] предназначен для написания статьи о дополнительных продуктах с открытым исходным кодом. Поэтому, пожалуйста, оставайтесь на связи с этим [][10] **[Программное обеспечение CMDB][11]**  Категория для последних обновлений.

## Исследовать
*  **[Программное обеспечение CMDB][11]**  
*  **[Ральф][2]**  
* [  **Автоматизируйте бизнес -операции с использованием бесплатного и открытого программного обеспечения**  ][12]
*  **[Тенденции разработки программного обеспечения, на которые нужно обратить внимание в 2021 году][13]**  



[1]: https://www.containerize.com/
[2]: https://products.containerize.com/cmdb-software/ralph/
[3]: #intro
[4]: #features
[5]: #setup
[6]: #Conclusion
[7]: https://github.com/allegro/ralph
[8]: http://docs.docker.com/compose/install/
[9]: https://docs.docker.com/docker-for-mac/install/
[10]: https://products.containerize.com/healthcare-technologies/
[11]: https://products.containerize.com/cmdb-software/
[12]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[13]: https://blog.containerize.com/blockchain-platforms/software-development-trends-to-look-out-for-in-2021/
