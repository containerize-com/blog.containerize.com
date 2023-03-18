---
title: "Как настроить Mautic - интеграция Facebook" 
seoTitle: "Как настроить Mautic - интеграция Facebook" 
description: "MAUTIC - Интеграция Facebook может помочь синхронизировать ваши лиды Facebook в систему Mautic без каких -либо трудностей, а затем использовать их в маркетинговых кампаниях." 
date: Fri, 04 Dec 2020 09:51:26 +0000
author: bilalahmed
summary: "Fetch Facebook ведет к Mautic, добавьте контакты в сегмент и запустите электронные кампании. Также используйте эти контакты, чтобы создать пользовательскую аудиторию для рекламы Facebook." 
url: /ru/how-to-setup-mautic-facebook-integration/
categories: ['Marketing Automation']
---

## Fetch Facebook ведет к Mautic, добавьте контакты в сегмент и запустите кампании по электронной почте. Также используйте эти контакты, чтобы создать пользовательскую аудиторию для рекламы Facebook.

{{< figure align=center src="images/How-to-set-up-Mautic-Facebook-Integration.png" alt="Как настроить Mautic - интеграция Facebook">}}

Mautic - это программное обеспечение для автоматизации маркетинга и обеспечивает полный контроль над маркетинговыми электронными письмами, целевыми страницами и рабочими процессами для маркетинговой деятельности. Кампании Drip Mautic помогают привлекать целевую аудиторию и держать их в курсе ваших продуктов. Mautic Facebook Integration предоставляет возможность добавить новые лидеры в Mautic. С этой интеграцией Mautic - Facebook, лидирующие из вашей кампании Facebook будут автоматически добавлены в Mautic.
Мы рассмотрим следующие разделы в этом уроке:
  * [Настройка учетной записи разработчика Facebook] [1]
  * [Настроить приложение разработчика Facebook] [2]
  * [Конфигурация плагина Mautic] [3]
  * [Заключение] [4]

## Настроить учетную запись разработчика Facebook {#Account}
  * Зайдите в [Facebook для разработчиков] [5]
  * Зарегистрируйте свою учетную запись, если у вас ее нет.
  * Чтобы зарегистрировать новую учетную запись, перейдите и нажмите «Начни» в правом верхнем углу.
  * После этого выберите свою учетную запись Facebook и нажмите «Продолжить».
  * Затем из всплывающего окна нажмите кнопку «Разработчик».

{{< figure align=center src="images/Mautic-Facebook-Integration-Register-Developer-Account-1024x582.png" alt="MAUTIC - Интеграция Facebook - учетная запись разработчика регистрации">}}


## Настроить приложение разработчика Facebook {#App}
  * Нажмите на «Создать первое приложение»

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Create-First-APP.png" alt="Mautic - интеграция Facebook - создать первое приложение">}}

  * Нажмите «Управление бизнес -интеграциями» и нажмите «Продолжить».

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Choose-Purpose.png" alt="Маутик - интеграция в Facebook - выберите цель">}}

  * В следующем окне введите имя приложения и выберите «Цель приложения». Нажмите кнопку «Создать приложение».

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Fill-Form-to-Create-App.png" alt="Mautic - интеграция Facebook - заполнить форму для создания приложения">}}

  * Следующим шагом является настройка входа в Facebook. На странице продуктов нажмите кнопку «Настройка» в поле «Facebook Login».

{{< figure align=center src="images/Mautic-–-Facebook-Integration-SetUp-FB-Login-1024x563.png" alt="Mautic - интеграция Facebook - настройка FB Login">}}

  * Слева меню нажмите «Настройки» в соответствии с продуктами -> Facebook. Вход.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Configure-FB-Login-1024x621.png" alt="Mautic - Integration - настройка FB Login">}}

  * Введите URL своего веб -сайта Mautic. Установите «клиент OAuth Login» и «Web Oauth Login» на «Да».
  * Теперь перейдите к настройкам -> Основные настройки. С нижней части страницы нажмите кнопку «+ Добавить платформу». После этого откроется всплывающее окно. Введите URL своего сайта и сохраните изменения.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Add-Website-as-Platform-1024x179.png" alt="Маутик - интеграция на Facebook - добавить веб -сайт в качестве платформы">}}


## Mautic Plugin Configuration {#Configuration}
  * Перейти к монтажной панели Маутика.
  * Затем перейдите в «Настройки» в правом верхнем углу.
  * Нажмите на «Плагины».
  * После этого откройте настройки плагина «Facebook».
  * Затем введите идентификатор клиента и секрет клиента. Получите эти ключи от приложения разработчиков Facebook, которые вы только что создали следующие шаги.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Configure-FB-Plugin-on-Mautic.png" alt="Mautic - Integration - настроить плагин FB на Mautic">}}

  * Нажмите кнопку «Authorize App».
  * После этого откроется новое окно авторизации Facebook. Следуйте подсказкам для завершения авторизации приложения.
  * После успешного авторизации перейдите на вкладку «Связаться с картированием» из плагина Mautic в Facebook.
  * Здесь вы можете сопоставить свои контактные поля на поля Facebook.
  * Наконец, опубликуйте настройки, и вы готовы идти.

## Заключение {#conclusion}
MAUTIC - Интеграция Facebook может помочь синхронизировать ваши лидеры в Facebook в систему Mautic без каких -либо трудностей. В приложении Mautic вы можете добавить все эти отведения в сегмент. Вы можете запустить по электронной почте кампании по маркетингу. Это действительно может помочь вашему бизнесу развивать, продавать и продавать продукты/услуги гораздо большей целевой аудитории.

## Исследовать
Чтобы узнать больше о Mautic и Facebook, посетите:
  * [Mautic | Платформа технологии контента с открытым исходным кодом] [6]
  * [Как настроить маутические кампании с использованием кампании] [7]
  * [Drupal Mautic Integration для автоматизации воспитания свинца] [8]
  * [Автоматизация маркетинга с помощью интеграции Mautic и Woocommerce] [9]
  * [Интеграция Mautic & Joomla для автоматизации цифрового маркетинга] [10]
[1]: #account
[2]: #app
[3]: #configuration
[4]: #conclusion
[5]: https://developers.facebook.com/docs/apps#register
[6]: https://products.containerize.com/marketing-automation/mautic
[7]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[8]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[9]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[10]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
