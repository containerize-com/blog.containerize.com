---
title: "Как установить Webmin с помощью SSL на Ubuntu 20.04" 
seoTitle: "Как установить Webmin с помощью SSL на Ubuntu 20.04" 
description: "Webmin-это веб-инструмент системного администрирования для систем Unix. В этой статье мы узнаем, как установить Webmin с помощью SSL на Ubuntu 20.04." 
date: Mon, 21 Jun 2021 04:28:34 +0000
author: Assad Mahmood
summary: "Webmin-это веб-инструмент системного администрирования, который является простой альтернативой системному администрированию командной строки. Эта статья направляет, как установить Webmin" 
url: /ru/how-to-install-webmin-with-ssl-on-ubuntu-20-04/
categories: ['Web Hosting']
---

{{< figure align=center src="images/how-to-install-webmin.png" alt="Как установить Webmin">}}


## Webmin-это веб-инструмент системного администрирования, который является простой альтернативой системному администрированию командной строки. Эта статья направляет, как установить Webmin
С этой статьей «Как установить Webmin с SSL на Ubuntu 20.04», мы начинаем нашу новую серию учебных пособий по программному обеспечению и инструментам веб -хостинга. С помощью Webmin вы можете настроить учетные записи пользователей, включить обмен файлами, настраивать настройки Apache и DNS, а также выполнить еще много задач, связанных с веб -хостингом. Это позволяет вам управлять всем сервером веб -хостинга. Это устраняет проблемы с редактированием файлов конфигурации Linux вручную. Итак, давайте узнаем, как установить Webmin с помощью SSL.
  ***[Введение в Webmin][1]** 
  *[**Выявленные функции** ][2]
  *[**Поддерживаемые операционные системы** ][3]
  *[**Установите Webmin на Ubuntu** ][4]
  *[**Установите Apache с помощью Webmin** ][5]
  *[**Заключение** ][6]

## Введение в Webmin   {#intro}
Webmin-это веб-интерфейс для системного администрирования для Linux. Это поможет вам удаленно управлять собственным хостингом из любого современного веб -браузера. С помощью Webmin вы можете настроить внутренние внутренности операционной системы, такие как учетные записи пользователей, Apache, DNS, обмен файлами и многое другое. Webmin также позволяет управлять многими машинами через один интерфейс или бесшовный вход на другие хосты Webmin на одной и той же подсети или локальной сети. Webmin, основанный на Perl, работает как свой собственный процесс и WebServer. И лучшая часть о Webmin-это 100% бесплатный и открытый источник и имеет очень процветающее сообщество разработчиков.

## выделенные функции   {#features}
  * Позволяет создавать и редактировать домены, записи DNS, параметры привязки и представления.
  * Помогает в настройке брандмауэра путем создания и редактирования правил с использованием IPFW.
  * Позвольте вам настроить сценарии для запуска во время загрузки от /etc/init.d или /etc/rc.local
  * Вы можете запланировать передачу файла с сервера на несколько серверов
  * Позволяет установить пакеты RPMS, Debian и Solaris на нескольких серверах из одного источника
  * Он предоставляет доступ к отчетам, таким как использование полосы пропускания, загрузки, загрузки, посетители и т. Д.
  * Вы можете создать запланированные задания Cron, которые одновременно работают на нескольких серверах
  * Позволяет запускать команды на нескольких серверах одновременно
  * Позволяет настроить и редактировать квоты пользователя или групповой диск для локальных файловых систем
  * Включает в себя резервные и восстановительные файловые системы, используя дамп и восстановить семейство команд
  * Используя файловый диспетчер, аналогичный Windows, вы можете просматривать, редактировать и изменять разрешения на файлы и каталоги на вашем сервере
  * Вы можете настроить сервер протоколов местоположения службы
  * Просмотреть, редактировать и изменить разрешения на файлы и каталоги в вашей системе с помощью файлового диспетчера, подобного Windows,
  * Это помогает в настройке туннелей SSL для шифрования таких услуг, как POP3 и IMAP, используя STUNNEL, работающие от INETD.

## поддерживаемые операционные системы   {#Support}
Поскольку различные операционные системы Unix и дистрибутивы Linux используют разные местоположения для своих различных файлов конфигурации, Webmin может поддерживать только системы, для которых он был настроен. Следующие операционные системы поддерживаются версией 1.979 Webmin:
  * Almalinux Linux
  * Alphacore Linux
  * Amazon Linux
  * Aplinux
  * Asianus
  * Asianux Server
  * Bigblock
  * BSDI
  * Caixa Magica
  * Caldera OpenLinux
  * Caldera openlinux eserver
  * CAOS Linux
  * Cendio LBS Linux
  * Centos Linux
  * Citrix Hypervisor
  * Cloudlinux
  * Cloudrouter Linux
  * Cobalt Linux
  * Когерентная технология Linux
  * Conectiva Linux
  * Corel Linux
  * Corvus latinux
  * Cygwin
  * Дарвин
  * Debian Linux
  * Dec/Compaq OSF/1
  * Devuan Linux
  * Dragonfly BSD
  * Эндский брандмауэр Linux
  * Fedora Linux
  * FreeBSD
  * Generic Linux
  * Gentoo Linux
  * Gralinux
  * Haansoft Linux
  * HP/UX
  * IBM AIX
  * Immunix Linux
  * Лантан Линукс
  * Linux Mint
  * Linuxppc
  * Lycoris Desktop/LX
  * Mac OS X
  * macos Catalina
  * MacOS High Sierra
  * macos Mojave
  * macos Sierra
  * Mageia Linux
  * Мандрейк Linux
  * Корпоративный сервер MandRake Linux
  * Mandriva Linux
  * Mandriva Linux Enterprise Server
  * MEPIS Linux
  * В основном
  * MSC Linux
  * Neoshine Linux
  * Netbsd
  * OpenBSD
  * Opendarwin
  * OpenMamba Linux
  * OpenNa Linux
  * OpenSuse Linux Tumbleweed
  * Oracle Enterprise Linux
  * Oracle Linux
  * Oracle VM
  * OS X.
  * Pardus Linux
  * Pclinuxos Linux
  * PlayStation Linux
  * Raspbian Linux
  * Redhat Enterprise Linux
  * Redhat Linux
  * Redhat Linux Desktop
  * Rocky Linux
  * Sangoma Linux
  * Sci Linux
  * Scientific Linux
  * SCO Openserver
  * SCO Unixware
  * Secure Linux
  * SGI IRIX
  * Slackware Linux
  * Slamd64 Linux
  * Smartos
  * Sol Linux
  * Springdale Linux
  * Startcom Linux
  * Sun Java Desktop System
  * Sun Solaris
  * SUSE Linux
  * Suse openexchange linux
  * Suse sles linux
  * Synology DSM
  * Дао Линокс
  * Tawie Server Linux
  * Thizlinux Desktop
  * Thizserver
  * Tinesofa linux
  * Trustix
  * Trustix SE
  * Turbolinux
  * Ubuntu Linux
  * United Linux
  * Ute linux
  * Virtuozzo Linux
  * Белый карлинг Linux
  * Whitebox Linux
  * Wind River Linux
  * Windows
  * X/OS Linux
  * Xandros Linux
  * Xcp-ng linux
  * Xenserver Linux
  * Желтая собака Linux
  * Yoper linux
На данный момент наиболее поддерживаемые системы-Solaris, Linux (в частности, RedHat) и FreeBSD.

## Установить Webmin на Ubuntu   {#install}
Чтобы установить Webmin, вам потребуется доступ к пользователю с **root  **привилегиями. Рекомендуется настроить пользователя без корня с **  Sudo**  Access.
Сначала SSH на ваш сервер, используя следующую команду
```
ssh user@server_IP_address
```
Чтобы установить Webmin через _apt-get_, сначала необходимо добавить репозиторий Webmin в свой файл _sources.list_. На вашем сервере откройте файл _sources.list_ в вашем любимом текстовом редакторе. Мы будем использовать VIM в этом уроке:
```
sudo vi /etc/apt/sources.list
```
После открытия файла добавьте следующие строки в конце файла.
```
deb http://download.webmin.com/download/repository sarge contrib
deb http://webmin.mirror.somersettechsolutions.co.uk/repository sarge contrib
```
Теперь добавьте ключ Webmin GPG к APT, поэтому добавленное вами хранилище источника будет доверять. Эта команда сделает это:
```
wget -q http://www.webmin.com/jcameron-key.asc -O- | sudo apt-key add -
```
Перед установкой Webmin вы должны обновить списки пакетов Apt-Get:
```
sudo apt-get update
```
Теперь запустите эту команду apt-get для установки Webmin:
```
sudo apt-get install webmin 
```
Введите Y, чтобы подтвердить установку. После завершения установки служба Webmin начнется автоматически. И веб -интерфейс будет работать на порту 10000. Вы можете получить доступ к интерфейсу, используя следующий URL.
```
https://server_IP_address:10000
```
Вам будет предложено предупреждение, в котором говорится, что сертификат вашего сервера не доверяет. Это связано с тем, что Webmin автоматически генерирует и устанавливает сертификат SSL после установки, и сертификат не был выдан сертификатом, которому доверяют ваш компьютер. Это нормально. Поручите вашему веб -браузеру доверять сертификату.
На этом этапе вы увидите экран входа в Webmin:

{{< figure align=center src="images/webmin-login-screen.png" alt="Установите Webmin">}}

Когда вы впервые войдете в Webmin, вы попадете на страницу **системы** . Это дает вам обзор ресурсов вашей системы и другой разнообразной информации.

{{< figure align=center src="images/install-webmin-system-info.png" alt="Установите информацию о системе Webmin">}}


## Установить Apache с помощью Webmin   {#install-apache}
Webmin поставляется с большим разнообразием модулей, которые управляют различными программными пакетами. Чтобы установить Apache с помощью Webmin. Следуйте инструкциям ниже
**Шаг 1 **: В меню навигации нажмите  **Неиспользуемые модули ** , чтобы расширить категорию, а затем нажмите  **Apache Webserver**  .
Если на вашем сервере нет Apache, модуль уведомит вас и предоставит вам способ установить Apache.
**Шаг 2 **: Используйте ссылку  **здесь**   (в последнем предложении), чтобы установить Apache через apt-get через Webmin.
После завершения установки Apache ваш сервер будет запущен сервер Apache по умолчанию.

## Заключение   {#conclusion}
В этой статье кратко обсуждаются множество вещей, которые может сделать Webmin, Webmin является одним из лучших инструментов для управления вашими серверами Linux/Unix. В этом уроке мы также узнали, как установить Webmin на Ubuntu, а также обсуждали, как установить Apache на вашем сервере с помощью Webmin.

## Исследовать
  * [Как установить несколько версий PHP с Nginx на Ubuntu][7]
  * [Как настроить и настроить nginx как обратный прокси][8]

  
[1]: #intro
[2]: #features
[3]: #support
[4]: #install
[5]: #install-apache
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
