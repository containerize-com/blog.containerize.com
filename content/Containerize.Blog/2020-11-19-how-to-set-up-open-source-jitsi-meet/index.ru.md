---
title: "Пошаговое руководство по настройке с открытым исходным кодом Jitsi Meet" 
seoTitle: "Пошаговое руководство по настройке с открытым исходным кодом Jitsi Meet" 
description: "Узнайте, как настроить Jitsi Meet. Это программное обеспечение для видеоконференций с открытым исходным кодом, предназначенное для удовлетворения потребностей в удаленной коммуникации и предлагает мощные функции" 
date: Thu, 19 Nov 2020 09:32:35 +0000
author: muhammadmustafa
summary: "Jitsi Meet объединяет отдаленных людей для проведения эффективных встреч. Давайте узнаем, как настроить это программное обеспечение для видеоконференций и изучить его функции" 
url: /ru/how-to-set-up-open-source-jitsi-meet/
categories: ['Video Conferencing Software']
---

## Jitsi Meet объединяет отдаленных людей для проведения эффективных встреч. Давайте узнаем, как настроить это программное обеспечение для видеоконференций и изучить его функции

{{< figure align=center src="images/jitsi-bannerF.png" alt="Программное обеспечение для видеоконференций">}}


## Обзор
Недавно мы опубликовали [сообщение в блоге][1], в котором рассказывается о влиянии [программного обеспечения для видеоконференций][2] на корпоративный сектор. Однако в этой статье мы рассмотрим следующие моменты.
  * [Краткое введение Jitsi Meet][3]
  * [Как настроить Jitsi Meet?][4]
  * [Jitsi Meet Explooral][5]
  * [Заключение][6]

## Краткое представление о встрече Jitsi {#intro}

[Jitsi Meet][7] - это совершенно бесплатное программное обеспечение с открытым исходным кодом, безопасное и масштабируемое программное обеспечение для совместной работы. Он предоставляет несколько популярных функций, таких как многопартийное видеоконференция с полным шифрованием, поддержка EtherPad и видео/аудиозапись. Это программное обеспечение, совместимое с WEBRTC, позволяет вам пригласить столько пользователей, сколько вы хотите на видео встречи.
Рост виртуальных встреч начался в последнее время, и люди считают, что общение с помощью видео/аудиопрограмм является более эффективным и совместным. Прежде всего, эта категория программного обеспечения работает не только на ноутбуках/настольных компьютерах, но и позволяет участникам присутствовать на лицевых заповедниках через их мобильный телефон.

## Как настроить Jitsi Meet? {#setup}

В этом разделе мы перейдем к процессу установки Jitsi Meet. Во-первых, убедитесь, что вы установили следующее предварительное условие.
  * [Docker][8]
После установки Docker загрузите zip -файл исходного кода из этой [ссылки][9].
Откройте терминал и запустите следующую команду
`CD Docker-Jitsi-Meet '
После этого запустите следующую команду, чтобы создать `.env`
`cp env.example .env`
Теперь запустите следующую команду для создания необходимых каталогов.
`mkdir -p ~/.jitsi-meet-cfg/{web/letsencrypt, транскрипты, просодия/конфигурация, просодия/просодия-плугинс-custom, jicofo, jvb, jigasi, jibri}`
Наконец, запустите эту команду, чтобы раскрутить изображение Docker и получить доступ к приложению в этом URL -адресе в браузере.
`Docker -Compose -D`

## Jitsi Meet Exploration Exploration {#features}

Это бесплатное программное обеспечение для видеочата предлагает много богатых функций. Это домашняя страница, которая будет показана первой.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.15.55_-1024x585.jpg" alt="видео-конференция">}}

Введите подпись встречи и нажмите «Go», и вы попадете в следующее окно потока видео.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.30.25_-1024x585.jpg" alt="программное обеспечение с открытым исходным кодом">}}

Вы можете пригласить людей на встречу, поделившись ссылкой, показанной во всплывающем окне. Более того, вы можете встроить видеопоток в любом месте, получив код.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.10_-1024x584.jpg" alt="программное обеспечение с открытым исходным кодом">}}

Это дает вам возможность поделиться экраном с другими участниками.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.28_.jpg" alt="Видеочат">}}

В правом верхнем углу вы можете увидеть детали вашего видео подключения.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.51_.jpg" alt="Бесплатный видеочат">}}

Jitsi Meet предлагает интегрированный чат с смайликами.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.57_.jpg" alt="Программное обеспечение для видео">}}


## Заключение {#con}

В этой статье мы прошли потрясающее программное обеспечение удаленного коммуникации и его процесс установки. Более того, пришло время выбрать лучшие решения для синхронизации потребностей бизнеса с развивающимися технологиями. В конце концов, [cantainerize.com][10] работает над расширением списка программного обеспечения для видеоконференций. Поэтому, пожалуйста, оставайтесь на связи с категорией [программного обеспечения для видеоконференций][2] для регулярных обновлений.

## соответствующие страницы продукта
Вы можете найти следующие ссылки актуальными:
  * [Jitsi Meet][7]
  * [Bigbluebutton][11]
  * [OpenVidu][12]
  * [Элемент][13]
  * [Провод][14]



[1]: https://blog.containerize.com/video-conferencing-software/video-conferencing-apps-how-it-benefits-your-business/
[2]: https://products.containerize.com/video-conferencing/
[3]: #intro
[4]: #setup
[5]: #features
[6]: #con
[7]: https://products.containerize.com/video-conferencing/jitsi
[8]: https://www.docker.com/products/docker-desktop
[9]: https://github.com/jitsi/docker-jitsi-meet/releases/tag/stable-5142
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/video-conferencing/bigbluebutton
[12]: https://products.containerize.com/video-conferencing/openvidu
[13]: https://products.containerize.com/video-conferencing/element
[14]: https://products.containerize.com/video-conferencing/wire
