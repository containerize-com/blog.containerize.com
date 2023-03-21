---
title: "Как настроить и процесс отскакивания в Phplist" 
seoTitle: "Как настроить и процесс отскакивания в Phplist" 
description: "Phplist-это мощный список рассылки и менеджер рассылки. Это помогает предприятиям легко отправлять кампании в области информационных бюллетеней и легко обрабатывать отскоки." 
date: Fri, 13 Nov 2020 17:50:16 +0000
author: Masood Anwer
summary: "Отправьте кампанию с информационным бюллетенем с открытым исходным кодом и программным обеспечением для маркетинга по электронной почте. Настройка Bounce Management в Phplist и автоматизируйте обработку отскока для списков здоровой рассылки." 
url: /ru/how-to-setup-and-process-bounces-in-phplist/
categories: ['Newsletters']
---

## Отправить кампанию с информационным бюллетенем с открытым исходным кодом и программным обеспечением для маркетинга по электронной почте. Настройка Bounce Management в Phplist и автоматизируйте обработку отскока для списков здоровой рассылки.

{{< figure align=center src="images/phplist-2.png" alt="Процесс отскакивает Phplist">}}

Мы написали статьи для реализации [многоцелевого уровня][1] и [отправка кампании по рассылке информационных бюллетеней][2] в Phplist. В этой статье мы подробно рассмотрим эти точки о перепрыгиваниях процесса в Phplist.
  * [Что такое Phplist?][3]
  * [Что такое отскок?][4]
  * [Настройка Bounce Management][5]
  * [Как обрабатывать отскоки?][6]
  * [Заключение][7]

## Что такое Phplist?   {#phplist}
Phplist - это наиболее популярная бесплатная и открытая новостная рассылка, отправляющая программное обеспечение. Phplist позволяет предприятиям отправлять маркетинговые электронные письма, обновления продуктов и объявления подписчикам. Это помогает предприятиям в управлении листингом, разработкой Beautiful Newsletter, кампании по расписанию и управлению Bounce. [Подробнее][8]

## Что такое отскок?   {#подпрыгивать}
Отказ - это электронное сообщение, которое не может быть доставлено по количеству причин и возвращена к отправителю. У нас могут быть такие причины, как почтовый ящик, заполнен, адрес электронной почты больше не является действительным или неправильным адресом электронной почты. Из -за этого вы должны обрабатывать отскоки, чтобы вы не отправляли электронные письма на недействительные адреса электронной почты.

## Настройка Bounce Management   {#Setup}
Чтобы настроить управление Bunce, вам нужно настроить следующие настройки в файле config.php.

{{< figure align=center src="images/bounce-handling-phplist.png" alt="Phplist - Управление обработкой отскок">}}

Мы объясним ниже шаги, подробнее об этих конфигурациях.
  * Во -первых, вам нужно добавить адрес электронной почты, где вы хотите получить сообщения о отказе. Вы можете найти **message_envelope**  переменную и добавить свой адрес электронной почты.
  *Phplist может извлекать электронные письма из почтового ящика Bounce через два протокола, **Mbox и Pop3 **. Итак, найдите  **bounce_protocol**   переменную и измените ее в соответствии с вашей средой.
  *Если вы установили **Mbox  **Prototcol, вам необходимо определить формат файла для него. Итак, найдите **  bounce_mailbox**  и установите путь как ‘/var/spool/mail/listbounces».
  *Если вы использовали протокол POP3 **, вам нужно настроить **хост, имя пользователя и пароль**  для почтового ящика. Вы можете увидеть эти настройки выше Sreenshot.
  *В дополнение к вышеуказанным настройкам для **POP3**  Протокол, вам может потребоваться добавить порт и шифрование.

## Как обрабатывать отскоки?   {#процесс}
Phplist поддерживает два метода для отскоков процесса: ручное и автоматизированное. Вам придется создать работу Cron для автоматизации обработки отказов. Вы также можете вручную обрабатывать отскоки, посетив **System> Process Bounces  **Page. Поэтому сначала вам нужно изменить **  вручную \ _process \ _bounces**  Настройки в соответствии с вашими требованиями. Вы можете посетить [Phplist Docs][9], чтобы настроить задание Cron для отскок процесса.

## Заключение   {#conclusion}
В этом посте мы узнали, как настроить адрес электронной почты Bounce и отскоки процесса. Вы можете легко обрабатывать отскоки с помощью ручного метода, если у вас меньше количества подписчиков. Тем не менее, вы должны использовать процесс обработки автоматизации для больших списков. Это сэкономит ваше время и поможет вам создать чистые и действительные списки подписчиков.

  
[1]: https://blog.containerize.com/newsletter/how-to-implement-multi-tenancy-in-phplist/
[2]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[3]: #phplist
[4]: #bounce
[5]: #setup
[6]: #process
[7]: #conclusion
[8]: https://products.containerize.com/newsletter/phplist
[9]: https://www.phplist.org/manual/books/phplist-manual/page/setting-up-your-cron