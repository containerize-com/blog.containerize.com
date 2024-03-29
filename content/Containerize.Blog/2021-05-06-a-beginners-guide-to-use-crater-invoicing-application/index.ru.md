---
title: "Руководство для начинающих по использованию приложения для счетов кратеров" 
seoTitle: "Руководство для начинающих по использованию приложения для счетов кратеров" 
description: "Учебник для начала работы с системой счетов с открытым исходным кодом. Это руководство кратера помогает вам познакомиться с основными понятиями и функциями." 
date: Thu, 06 May 2021 21:23:50 +0000
author: Masood Anwer
summary: "Этот учебник поможет вам узнать о приложениях с выставлением с выставлением кратеров. Это бесплатная система счетов с открытым исходным кодом для малого бизнеса." 
url: /ru/a-beginners-guide-to-use-crater-invoicing-application/
categories: ['Invoicing']
---

## Этот учебник поможет вам узнать о приложениях с выставлением с выставлением кратера. Это бесплатная система счетов с открытым исходным кодом для малого бизнеса.

{{< figure align=center src="images/blog-crater.png" alt="Система счетов с открытым исходным кодом">}}

Каждому бизнесу нужна какая -то система для управления счетами, расходами, платежами и многими другими. Программное обеспечение для выставления счетов поможет вам управлять им, чтобы вы могли легко выполнять платежные задачи и сосредоточиться на других важных вещах. В этом посте мы узнаем, как настроить кратер и использовать его для работы с бухгалтерским учетом для бизнеса.
  * [Введение о кратере][1]
  * [Процедура установки кратера][2]
  * [Исследование функций][3]
  * [Заключение][4]

## Введение о кратере {#Introduction}

[Crater][5] - это бесплатное и открытое счетное заявление. Это абсолютно бесплатно, и вы можете легко обновить его до самых последних версий. Это бесплатная система бухгалтерского учета для малых предприятий и фрилансеров. Это также полное решение для выставления счетов, позволяющее отслеживать расходы и платежи, рассчитывать налоги, а также составлять оценки и счета. Более того, это поставляется с мобильными приложениями для устройств iPhone и Android для iPhone и Android. Это позволит вам управлять им из любого места. Поскольку Crater является веб-программным обеспечением для выставления счетов, веб-приложение разработано с Laravel и Vuejs, а мобильные приложения созданы с помощью REACT Native. Вся документация, связанная с разработкой и развертыванием доступна. Полный исходный код можно найти в [GitHub][6].

## Процедура установки кратера {#Installation}

Мы обсудим, как установить кратер с помощью ручного метода и использовать Docker в этом разделе.

### Ручная установка
  * Скачать последнюю версию от.
  * Загрузите загруженный zip -файл на свой сервер и извлеките его.
  * Укажите свой домен на публичный каталог внутри папки Crater.
  * Перейдите к корню вашего проекта и выполните команду «Sudo CHMOD -R 775 ./», чтобы назначить соответствующие привилегии.
  * Откройте свой сайт в браузере и следуйте мастеру установки.

### Установка Docker
  * Установите Docker на ваш сервер :.
  * Установите Docker Compose, следуя этому руководству :.
  * Клон кратер репозиторий с помощью этой команды.
```
git clone https://github.com/bytefury/crater
```
  * Запустите ниже команды один за другим, чтобы установить кратер.
```
$ cd crater
$ cp .env.example .env
$ docker-compose up -d
$ ./docker-compose/setup.sh
```
  * Откройте сайт кратера в своем браузере и следуйте мастеру установки.

## Исследование функций {#Feature}

В этом разделе мы рассмотрим основные функции этого приложения с открытым исходным кодом. Как только вы закончите с установкой, откройте свой сайт http://example.com и войдите в приложение.
*  **Dashboard**  - После входа в систему вы попадете на приборную панель, которая отображает весь вид приложения.

{{< figure align=center src="images/crater-dashboard-1024x479.png" alt="">}}

*  **Настройки**  - Теперь перейдите на страницу настроек и добавьте различные настройки веб -приложений, такие как настройки учетной записи, информация о компании, предпочтения, настройки, уведомления, платежные модули и так далее.

{{< figure align=center src="images/crater-settings-1024x478.png" alt="">}}

*  **Предметы**  - Вкладка элементов доступна из меню боковой панели. На этой вкладке вы можете управлять своими предметами. Вы можете использовать элементы при создании оценок и счетов.
*  **Оценки**  - Создайте комплексную цитату, которая включает в себя ставки, скидки, запасы и многое другое. Один из трех встроенных шаблонов может использоваться для создания оценки. Дополнительные налоги могут быть добавлены в оценку, и они также могут быть добавлены в качестве совокупного налога.
*  **Счета**  - Сделайте профессиональные счета и отправьте их своим клиентам. Вы можете использовать доступные шаблоны для генерации счета. Вы можете добавить дополнительные налоги к счету, а также налог на состав. Кроме того, вы можете предоставить процентную или скидку с фиксированной стоимостью своим клиентам. Кроме того, вы можете применить скидки на отдельные элементы, а также общую сумму счета.
*  **Платежи**  - Этот модуль помогает вам продолжать отслеживать платежи, которые вы получили от своих клиентов.
*  **Расходы**  - Модуль расходов помогает вам отслеживать, сколько вы тратите на разные услуги.
*  **Налоги**  - Используя эту функцию, вы можете легко управлять своими налогами. Вы можете добавить несколько налогов на общую сумму счета или на отдельный пункт.
*  **Отчеты**  - Получите исчерпывающую информацию обо всех ваших счетах, будь то для одного или нескольких клиентов. Crater Supports поступает с четырьмя типами отчетов, такими как отчет о продажах, отчет о прибылях и убытках, отчет о расходах и отчет о налогах.

## Заключение {#Заключение}

Мы узнали о кратере и о том, как настроить его вручную и с Docker. Мы также рассмотрели некоторые функции, которые должно предоставить каждое бухгалтерское программное обеспечение. Надеемся, что это руководство может помочь вам быстро внедрить систему счетов с открытым исходным кодом для вашего бизнеса.
Наконец, [cantainerize.com][7] постоянно пишет посты в блоге на дополнительные продукты и темы с открытым исходным кодом. Поэтому, пожалуйста, оставайтесь на связи с категорией [8][8] для регулярных обновлений.

## Исследовать
Вы можете найти следующие ссылки актуальными:
  * [Кратер - бесплатная система бухгалтерского учета для малого бизнеса][5]
  * [5 лучших программного обеспечения с открытым исходным кодом в 2021 году][9]



 [1]: #Introduction
 [2]: #Installation
 [3]: #Feature
 [4]: #Conclusion
 [5]: https://products.containerize.com/invoicing/crater/
 [6]: https://github.com/bytefury/crater
 [7]: https://containerize.com
 [8]: https://blog.containerize.com/category/invoicing/
 [9]: https://blog.containerize.com/invoicing/top-5-open-source-accounting-software-in-the-year-2021/
