---
title: "Как установить и настроить WAMP Server на Windows" 
seoTitle: "Как установить и настроить WAMP Server на Windows" 
description: "Установите WampServer в Windows и быстро начните разработку веб-приложений на основе PHP. WAMP Server доступен как для Windows 32, так и для 64 бит." 
date: Fri, 28 May 2021 15:30:40 +0000
author: Masood Anwer
summary: "Настройка среды веб -разработки для создания веб -приложений с помощью Apache2, PHP и MySQL. Эта статья помогает вам установить WAMP Server на Windows." 
url: /ru/how-to-install-and-configure-wamp-server-on-windows/
categories: ['Web Server Solution Stack']
---

## Настройка среды веб -разработки для создания веб -приложений с помощью Apache2, PHP и MySQL. Эта статья помогает вам установить WAMP Server на Windows.

{{< figure align=center src="images/wamp-server-blog-post-banner.png" alt="WAMP Server">}}

Каждый разработчик должен иметь необходимое программное обеспечение, установленное на его/ее компьютере перед написанием программы. В первые дни разработчики должны были устанавливать каждое программное обеспечение отдельно, а затем настроить их для работы вместе.  **Wampserver**  и другие веб -программные программные решения Stack теперь доступны, что объединяет все необходимое программное обеспечение в один пакет. Вам нужно только установить один пакет, чтобы запустить и запустить среду разработки.
В этом сообщении мы рассмотрим следующие разделы.
* [  **Что такое Wampserver?**  ][1]
* [  **Установка WAMP**  ][2]
* [  **Конфигурация WAMP**  ][3]
* [  **Access phpmyAdmin**  ][4]

## Что такое Wampserver? {#What}

Wampserver-это бесплатный стек решений для настройки среды веб-разработки для PHP-приложений. WAMP означает (W - Windows, A - Apache, M - MySQL и P - PHP). Кроме того, он также поставляется с PhpMyAdmin и Adminer для управления базой данных. WAMP - один из популярных инструментов, и вы можете быстро его настроить. Кроме того, вы можете настроить сервер WAMP с панели управления. Он обеспечивает полную среду веб -разработки для создания и тестирования приложений. Wampserver состоит из нескольких компонентов, которые вы можете выбрать во время установки в соответствии с вашими потребностями. Wampserver поставляется с несколькими версиями PHP. Вы можете легко изменить версию PHP в соответствии с требованиями проекта. Кроме того, вы можете изменить СУБД (система управления базами данных) с панели управления Wampserver.

## Установка WAMP {#Installation}

Следуйте указанному пошаговому руководству по установке WAMP Server в Windows.
*  **Скачать Wampserver**  с официального сайта

{{< figure align=center src="images/wamp-download.png" alt="">}}

* Выберите  **Wampserver 32 бит** или **Wampserver 64 бит**  Версия установщика в соответствии с вашей операционной системой.
* Найдите файл  **WAMP**  и дважды щелкните его, чтобы запустить процесс установки.
  * Выберите язык, а затем нажмите кнопку ОК.
  * Выберите флажок «Принять соглашение», а затем нажмите кнопку «Следующая».
  * Прочитайте важную информацию об установке Wampserver и нажмите кнопку «Следующая», чтобы продолжить.
  * Выберите папку, где вы хотите установить сервер WAMP, и нажмите кнопку «Далее».
  * Вы должны выбрать компоненты, которые вы хотите установить, как показано на рисунке ниже. Вы можете выбрать все версии PHP и переключаться во время разработки. Кроме того, вы можете установить MySQL и MariaDB.

{{< figure align=center src="images/wamp-select-components.png" alt="">}}

  * Выберите ярлык для WampServer и нажмите кнопку «Далее».
  * Нажмите кнопку «Установка», чтобы установить WampServer.
  * Теперь выберите браузер по умолчанию и текстовый редактор по умолчанию для сервера WAMP.
  * Ваша установка завершена. Нажмите кнопку «Закончить», чтобы выйти из мастера установки WAMP Server.
  * Откройте свой браузер и введите Localhost для доступа к нему. Вы увидите ниже страницы.

{{< figure align=center src="images/wamp-localhost-1024x520.png" alt="">}}


## Конфигурация WAMP {#Configuration}

Теперь мы рассмотрим несколько конфигураций, которые помогают вам во время разработки и тестирования веб -приложений. Теперь вы можете запустить Wampserver, дважды щелкнув значком Wampserver на своем рабочем столе.
*  **Сервисы**  -Вы можете увидеть варианты запуска, остановить и перезапустить все услуги, щелкнув левой кнопкой мыши по значке Wampserver.
*  **Изменить базу данных**  -щелкните правой кнопкой мыши на значке WAMP, чтобы открыть диалоговое окно «Инструменты». Выберите «Инструменты» и нажмите «Инверт DBMS по умолчанию MariaDB MySQL». WAMP Server будет перезагружаться автоматически, и вы можете увидеть базу данных по умолчанию, открыв LocalHost в вашем браузере.
*  **Измените версию PHP**  -щелкните правой кнопкой мыши на значок WAMP, чтобы открыть диалоговое окно «Инструменты». Выберите инструменты и измените версию PHP CLI и нажмите на версию PHP, которую вы хотите.
*  **Виртуальный хост**  - Вы можете легко добавить виртуальный хост через веб -интерфейс Wampserver. Откройте Localhost в своем браузере и нажмите «Добавить виртуальный хост» в разделе «Инструменты». Введите «Имя виртуального хоста, как dev.example.com» и введите абсолютный путь проекта. Нажмите кнопку «Запустить создание VirtualHost». Перезагрузите сервер Apache, чтобы загрузить недавно созданный виртуальный хост.
*  **Изменить порт Apache**  - По умолчанию веб -сервер Apache работает на порту 80. Если вы хотите использовать другой порт для Apache, вы можете сделать это на панели управления Wampserver. Щелкните правой кнопкой мыши значок WAMP, чтобы открыть диалоговое окно «Инструменты». Выберите инструменты и нажмите «Используйте порт, кроме 80». Введите новый номер порта в диалоговом окне и нажмите кнопку OK.
*  **Изменить порт DBMS**  - По умолчанию сервер базы данных работает на порту 3306. Если вы хотите использовать другой порт для сервера базы данных, вы можете сделать это на панели управления WampServer. Щелкните правой кнопкой мыши значок WAMP, чтобы открыть диалоговое окно «Инструменты». Выберите инструменты и нажмите «Используйте порт, отличный от 3306». Введите новый номер порта в диалоговом окне и нажмите кнопку OK.
*  **Пустые журналы**  - Wamserver предоставляет функциональность для очистки журналов с панели управления. Вы можете опустошать журналы, такие как журнал ошибок PHP, журнал ошибок Apache, журнал Apache Access, журнал MySQL и журнал MariaDB. Даже вы можете очистить все журналы одновременно. Щелкните правой кнопкой мыши значок WAMP, чтобы открыть диалоговое окно «Инструменты». Выберите инструменты и выберите пустые журналы, вы найдете все параметры для удаления журналов.
*  **Изменение языка**  - Вы можете язык для управления Wampserver. Щелкните правой кнопкой мыши значок WAMP, чтобы открыть диалоговое окно «Инструменты». Выберите язык и нажмите на требуемый язык. Вы увидите панель управления на недавно выбранном языке.

## Доступ PhpmyAdmin {#phpMyAdmin}

Вы можете получить доступ к  **PhpmyAdmin**  для управления вашим базам данных, открыв LocalHost в вашем браузере, а затем нажмите на ссылку PhpMyAdmin на странице приветствия WampServer. Кроме того, вы можете получить к нему доступ, посетив URL http: // localhost/phpmyadmin.

## Заключение
Мы обсудили Wampserver и покрыли полное пошаговое руководство по установке Wampserver  **на Windows. Вы можете легко установить и настроить**  Wampserver**, следуя этому учебному пособию и сразу же начать кодирование. Вы можете посетить ссылки в разделе «Исследование» для получения дополнительных опций на программном обеспечении стека решений.
Наконец, [  **cantainerize.com** ][5] находится в постоянном процессе написания постов в блоге на дальнейших последних продуктах с открытым исходным кодом. Поэтому оставайтесь на связи с этой категорией [ **Stack Secred Server Progless**  ][6] для последних обновлений.

## Исследовать
Вы можете найти следующие ссылки актуальными:
* [  **Лучшие параметры стека решений веб -сервера с открытым исходным кодом**  ][7]
* [  **Настройка Xampp и PhpmyAdmin как Localhost в Windows**  ][8]



 [1]: #What
 [2]: #Installation
 [3]: #Configuration
 [4]: #phpMyAdmin
 [5]: https://containerize.com
 [6]: https://blog.containerize.com/category/web-server-solution-stack/
 [7]: https://products.containerize.com/solution-stack/
 [8]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
