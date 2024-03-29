---
title: "Настройка Xampp и PhpmyAdmin в качестве Localhost в Windows" 
seoTitle: "Настройка Xampp и PhpmyAdmin в качестве Localhost в Windows" 
description: "Установите Xampp и PhpmyAdmin как Localhost в Windows. Создайте свою собственную бесплатную среду локального тестирования с открытым исходным кодом для тестирования и создания веб-приложений." 
date: Mon, 26 Oct 2020 07:29:24 +0000
author: bilalahmed
summary: "Настройка среды разработки с бесплатным и программным обеспечением для управления базами данных (PHPMYADMIN) и программным обеспечением для управления базами данных (PHPMYADMIN)" 
url: /ru/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
categories: ['Database Management Software', 'Web Server Solution Stack']
---

## Настройка среды разработки с помощью бесплатного и программного обеспечения для управления базами данных с бесплатным и открытым исходным кодом (XAMPP) и баз данных (PHPMYADMIN)

{{< figure align=center src="images/xampp-phpmyadmin-blog-1024x536.png" alt="Xampp и phpmyadmin как localhost">}}

Xampp и PhpmyAdmin в качестве LocalHost предоставляют локальному серверу для разработчиков для тестирования и создания веб -приложений. Xampp - это локальный сервер, который установлен на персональных компьютерах/ноутбуках. Он предоставляет локальную среду для создания, запуска и тестирования PHP -приложений, прежде чем развернуть их на живых серверах.
Мы рассмотрим следующие разделы в этом блоге:
  * [Описание][1]
  * [XAMPP установка][2]
  * [Phpmyadmin Dashboard][3]
  * [Последние мысли][4]

## Описание: {#description}

XAMPP - это бесплатный стек решений веб -сервера с открытым исходным кодом. Он содержит Apache, MySQL, MariaDB, PHP и Perl. Xampp доступен для операционных систем Windows. Это очень легко установить и использовать. Вот почему это самая популярная среда разработки PHP. Xampp и PhpmyAdmin в качестве LocalHost предоставляют полную среду для разработки и тестирования веб -приложений.
Алфавиты в XAMPP выступают за:
* **x** -кроссплатформенная (поддерживает несколько операционных систем, включая Linux, Windows и Mac OS)
* **A** - Apache HTTP -сервер
* **M** - MariaDB (база данных)
* **P** - PHP
* **p** - perl

## Установка XAMPP {#xampp}

  * Скачать Xampp от [здесь][5].

{{< figure align=center src="images/xampp1.png" alt="Xampp как Localhost">}}

  * Установите исполняемый файл.
  * Затем нажмите «Далее».
  * Выберите компоненты, которые вы хотите установить.

{{< figure align=center src="images/xampp2.png" alt="Xampp as localhost Шаг 2">}}

  * Для большинства веб -приложений вам нужно только _apache_, _mysql_, _php_ и _phpmyadmin_.
  * Выберите каталог установки, где вы хотите установить XAMPP.
  * Вам будет показано оповещение о безопасности Windows. Вы должны проверить следующую опцию: «_private Networks, такие как мой дом или рабочая сеть» _.
  * Наконец, нажмите «Финиш», чтобы завершить установку.

{{< figure align=center src="images/xampp4.png" alt="Xampp as localhost Шаг 3">}}

  * После успешной установки откройте панель управления XAMPP.
  * Начните службы «Apache» и «MySQL».

{{< figure align=center src="images/xampp5.png" alt="Xampp as localhost Шаг 4">}}


## PhpmyAdmin Dashboard: {#phpmyadmin}

Чтобы получить доступ к панели панели PhpMyAdmin, нажмите кнопку «Администратор» рядом с службой MySQL. Вы также можете получить доступ к PhpMyAdmin, посетив http: // localhost/phpmyadmin из вашего браузера. Здесь вы можете создавать базы данных. Следуйте этим шагам, чтобы создать новую базу данных.
  * На приборной панели нажмите на вкладку «Базы данных».

{{< figure align=center src="images/db1.png" alt="PhpMyAdmin на местном хосте. Шаг 1">}}

  * Введите имя базы данных и нажмите кнопку «Создать». Это просто создаст новую пустую базу данных.

{{< figure align=center src="images/db2.png" alt="PhpMyAdmin на местном хосте. Шаг 2">}}

  * Далее вы можете создать таблицы, выбрав недавно созданную базу данных.
  * Введите имя таблицы в разделе «Создание таблицы».

{{< figure align=center src="images/db3-1024x234.png" alt="PhpMyAdmin на местном хосте. Шаг 3">}}

  * Выберите номер столбцов.
  * Затем нажмите кнопку «Go».
  * После этого вам нужно заполнить форму на следующей странице, чтобы закончить создание таблицы.

{{< figure align=center src="images/db4-1024x564.png" alt="PhpMyAdmin на местном хосте. Шаг 4">}}


## Последние мысли: {#final}

Установка XAMPP проста и проста. Это займет не более 15 минут на настройку сервера XAMPP. После того, как он будет установлен, разработчики могут создавать и проверять свои веб -приложения на основе PHP даже без подключения к Интернету. Вместо того, чтобы тестировать проекты непосредственно на живом веб-сервере, это просто и экономно тестировать их локально. Это отличная платформа для начинающих, чтобы изучать, тестировать и полировать свои навыки PHP, PERL и базы данных.

## Исследовать:
[Стек решений для веб -сервера с открытым исходным кодом для разработчиков PHP & Perl][6]
[Лучшие параметры стека решений веб -сервера с открытым исходным кодом][7]



[1]: #description
[2]: #xampp
[3]: #phpmyadmin
[4]: #final
[5]: https://www.apachefriends.org/de/download.html
[6]: https://products.containerize.com/solution-stack/xampp
[7]: https://products.containerize.com/solution-stack/
