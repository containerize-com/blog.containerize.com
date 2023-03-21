---
title: "Civicrm WordPress Integration | Учебник WordPress" 
seoTitle: "Civicrm WordPress Integration | Учебник WordPress" 
description: "Civicrm WordPress Integration позволяет управлять управлением данными и рабочими процессами. Лучшее руководство об эффективном использовании Civicrm с открытым исходным кодом с WordPress." 
date: Tue, 13 Oct 2020 08:23:40 +0000
author: muhammadmustafa
summary: "В этом учебном пособии WordPress плагин мы узнаем, как интегрировать бесплатный CivicRM с WordPress, чтобы получить конкурентные преимущества с точки зрения управления контактами." 
url: /ru/civicrm-wordpress-integration-wordpress-tutorial/
categories: ['Blogging', 'Marketing Automation']
---

## В этом учебном пособии плагина WordPress мы узнаем, как интегрировать бесплатный CivicRM с WordPress, чтобы получить конкурентные преимущества с точки зрения управления контактами.

{{< figure align=center src="images/integrate-civicrm-with-wordpress-banner-1024x536.png" alt="Civicrm WordPress">}}


## Обзор:
Добро пожаловать в эту учебную статью, посвященную **Civicrm WordPress Integration** . Дело в том, что мы живем в эпоху информации и данных. Некоторые вещи дают отличительные функции вашему бизнесу, такие как автоматизация сбора данных, последовательное общение, маркетинговые кампании и другие бизнес -процессы. В эту современную эпоху объем данных увеличивается день ото дня. Организации получают эти данные из различных источников данных. В результате, становится трудно управлять и составлять такой огромный объем данных. Тем не менее, очень важно убедиться, что целостность данных и подлинность являются основой эффективной маркетинговой кампании. Кроме того, появление данных в нескольких местах порождает хлопот и неумелое управление, а операционным командам трудно прийти на одну и ту же страницу и работать в едином направлении.
С другой стороны, существует несколько систем управления контентом, которые приобрели мощную поддержку сообществ пользователей и разработчиков из-за надежного управления контентом и систем Echo, удобных для SEO. Эти системы управления контентом с открытым исходным кодом предлагают простые и быстрые разработки и развертывания для достижения целей, связанных с контентом. Он предлагает экономическую эффективность, расширяемую функциональность и возможности самостоятельного управления. Этот **Учебник плагина WordPress**  посвящен интеграции [CivicRM][2] с [WordPress][3], и мы рассмотрим следующие пулевые точки
  * [Преимущества этой комбинации для бизнеса?][4]
  * [Как настроить структуру каталога?][5]
  * [Как активировать и установить CivicRM в WordPress?][6]

## Преимущества этой комбинации для бизнеса?   {#преимущества}
В разделе этого **Учебного пособия WordPress  **мы рассмотрим основные преимущества **  Civicrm WordPress**  интеграции. Популярность [WordPress][3] растет по мере роста конкуренции на рынке. Сообщество WordPress разрабатывает новые плагины для улучшения ведра плагина. Таким образом, добавление CivicRM в пул WordPress плагина привлекли огромное внимание организаций, которые процветают для автоматизации и централизования своих бизнес -процессов.
Эта интеграция важна из -за определенных аспектов. Во -первых, [CivicRM][2] удаляет хлопот управления контактными источниками пользователя, находящихся в разных местах. Во -вторых, он обеспечивает полную безопасность, принимая регулярные резервные копии ваших данных. В-третьих, это веб-и открытый исходный код, который означает, что вы можете получить доступ к своим данным из любого места. Этот инструмент автоматизации маркетинга с открытым исходным кодом разработан для гражданского сектора. Это удалило необходимость экспорта данных в различные листы и базы данных, предоставив универсальное решение. Это программное обеспечение CRM с открытым исходным кодом хранит все данные в базе данных из различных источников, таких как информационные бюллетени, сайты управления событиями, управление вкладами, управление делами и т. Д. Неограниченные пользовательские наборы данных, управление задачами, управление пользователями, отслеживание открытых обещаний и членов, и многие другие.

## Как настроить структуру каталогов?   {#directory}
Перед началом этого **Учебного пособия плагина WordPress** , мы предполагаем, что вы настроили WordPress и имеете базовое понимание для установки и активации плагинов. Кроме того, вы можете найти информацию [здесь][7] о настройке WordPress и ее функциях.
Во -первых, загрузите Civicrm с этого [сайта][8]. Выберите вариант, такой как «Скачать civicrmx.x.x для WordPress».
После загрузки поместите файл ZIP в это местоположение /WP-конент /плагины и извлеките его. Убедитесь, что этот каталог имеет доступ «написать».
Вы можете использовать эту команду, чтобы дать разрешение «записать» доступа. `sudo chmod 777 server_path/wp-content/plugins/civicrm`
Во-вторых, создайте пустую папку с именем «CivICRM» в это местоположение /WP-content /загрузки и дайте доступ «записать», используя следующую команду.
`sudo chmod 777 server_path/wp-content/uploads/civicrm`
**ПРИМЕЧАНИЕ** : Не забудьте изменить эти каталоги обратно на по умолчанию. Вы можете запустить следующие команды, чтобы восстановить статус по умолчанию этих каталогов:
{{_LINE_29_}}
{{_LINE_30_}}
{{_LINE_31_}}
      sudo chown -r username server_path/wp -content/uploads/civicrmsudo chown -r username server_path/wp -content/plugins/civicrm
{{_LINE_33_}}
{{_LINE_34_}}
{{_LINE_35_}}
Этот раздел интеграции WordPress CivicRM завершен. Давайте перейдем к следующему разделу.

## Как активировать и установить CivicRM в WordPress?   {#установить}
В этом разделе урока WordPress показаны этапы установки и активации **веб-маркетингового инструмента  **CivicRM. После настройки структуры каталога перейдите в **  плагины **->  **Установленные плагины**  , и вы увидите CivicRM в списке.

{{< figure align=center src="images/Screenshot-2020-10-10-at-02.18.07-1024x544.png" alt="Civicrm WordPress">}}

Нажмите «**Активировать** ».

{{< figure align=center src="images/civi-1024x581.jpeg" alt="Руководство по автоматизации маркетинга">}}

После активации CivicRM вы найдете вариант CivICRM в правом правом правом правом правом правом правом. Просто нажмите на эту опцию, и вы приземлитесь на экране  **** .
На следующей странице будет показана сведения о требованиях вместе с конфигурациями базы данных.

{{< figure align=center src="images/Screenshot-2020-10-10-at-02.56.14-1024x632.png" alt="Руководство по автоматизации маркетинга">}}

Нажмите кнопку «Проверка требований и установите Civicrm». CivicRM будет успешно установлен, и появится сообщение о успехе, если вышеупомянутые инструкции будут выполнены правильно.

{{< figure align=center src="images/Screenshot-2020-10-10-at-03.06.05-1024x630.png" alt="Civicrm WordPress Integration">}}

Наконец, вкладка «Интеграция WordPress» CivicRM ** появится в верхней части панели администратора.

{{< figure align=center src="images/Screenshot-2020-10-09-at-23.22.03-1024x586.png" alt="Учебное пособие по разработке плагинов WordPress">}}


## Заключение
**Civicrm WordPress Integration **-это действительно полезное дополнение, когда дело доходит до управления огромным хранилищем информации пользователя. Это делает сложные рабочие процессы простыми, предлагая интуитивно понятную панель. Дуэт этих двух программ с открытым исходным кодом предоставляет удобный интерфейс, а также другие утилиты, где пользователи могут легко перемещаться. К счастью, сообщество с открытым исходным кодом разработало так много инструментов автоматизации маркетинга, таких как [Mautic][9], [SiteCrm][10], [Espocrm][11] и многое другое. Все эти решения бесплатны и легко развернуть либо в облаке, либо на Localhost. Прежде всего, эти решения поставляются с комплексной документацией относительно разработки и развертывания. Тем не менее, это  **Учебное пособие по плагина WordPress**   будет очень полезно, если вы хотите интегрировать программное обеспечение для автоматизации маркетинга с помощью программного обеспечения для управления контентом.
Наконец, [cantainerize.com][12] находится в процессе написания дополнительных учебных пособий об интеграции какого -либо другого программного обеспечения с открытым исходным кодом. Для регулярных обновлений оставайтесь на связи с [маркетинговой автоматизацией][1] и [блогами][13] категорий.

## Исследовать
Вы можете найти следующие ссылки актуальными:
  * [Руководство для начинающих по интеграции WordPress WordPress WordPress][14][14]
  * [Как докеризировать WordPress с Docker Compose][15]
  * [Миграция от WordPress в Jekyll][16]
  * [Как построить свой сайт с помощью WordPress и Gatsby][17]
  * [Руководство для начинающих, чтобы мигрировать на призрак из WordPress][18]
  * [Как реализовать многоцелевое место в маутике][19]
  * [Как настроить Mautic - интеграция Facebook][20]
  * [Установка Mautic Campaigns с использованием Builder кампании][21]
  * [Drupal Mautic Integration для автоматизации воспитания свинца][22]
  * [WordPress Instant Messaging с использованием Rocket.chat][23]
  * [Как интегрировать форум дискурса с WordPress][24]
  * [Автоматизировать систему билетов с использованием WordPress и Osticket][25]
  * [Автоматизация маркетинга с помощью интеграции Mautic и Woocommerce][26]
  * [5 лучших блогов с открытым исходным кодом в 2020 году][27]
  * [Автоматизировать бизнес -операции с использованием бесплатного и открытого программного обеспечения][28]

  
[1]: https://products.containerize.com/marketing-automation
[2]: https://products.containerize.com/marketing-automation/civicrm
[3]: https://products.containerize.com/blogging/wordpress
[4]: #benefits
[5]: #directory
[6]: #install
[7]: https://products.containerize.com/blogging/wordpress/
[8]: https://civicrm.org/download
[9]: https://products.containerize.com/marketing-automation/mautic/
[10]: https://products.containerize.com/marketing-automation/suitecrm/
[11]: https://products.containerize.com/marketing-automation/espocrm/
[12]: https://href.li/?https://www.containerize.com/
[13]: https://products.containerize.com/blogging
[14]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/blogging/quick-guide-on-how-to-migrate-from-wordpress-to-jekyll/
[17]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
[18]:https://blog.containerize.com/blogging/a-guide-to-migrate-from-wordpress-to-ghost-ghost-wordpress/
[19]: https://blog.containerize.com/marketing-automation/how-to-implement-multi-tenancy-in-mautic/
[20]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[21]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[22]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[23]: https://blog.containerize.com/blogging/instantly-communicate-with-customers-using-wordpress-and-rocket-chat/
[24]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[25]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[26]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[27]: https://blog.containerize.com/2020/10/07/top-5-open-source-blogging-platform-in-2020/
[28]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
