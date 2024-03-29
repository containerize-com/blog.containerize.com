---
title: "Интегрируйте Mautic & Joomla для автоматизации цифрового маркетинга '" 
seoTitle: "Интегрировать Mautic & Joomla для автоматизации цифрового маркетинга" 
description: "Mautic и Joomla Integration может помочь вашему бизнесу с автоматизацией цифрового маркетинга. Это помогает продавать продукты через магические кампании." 
date: Fri, 09 Oct 2020 15:16:25 +0000
author: bilalahmed
summary: "Mautic и Joomla Integration может помочь вашему бизнесу с автоматизацией цифрового маркетинга. Это помогает продавать продукты через онлайн -маутические кампании." 
url: /ru/integrate-mautic-with-joomla-for-marketing-automation/
categories: ['Content Management', 'Marketing Automation']
---

## Mautic и Joomla Integration могут помочь вашему бизнесу с автоматизацией цифрового маркетинга. Это помогает продавать продукты через онлайн -маутические кампании.

{{< figure align=center src="images/banner-mautic-1200x628-1-1024x536.png" alt="Интеграция Mautic и Joomla">}}


## Как эта интеграция может помочь вашему бизнесу:
Интеграция Mautic и Joomla позволит вам продавать ваши продукты/услуги очень простым, но эффективным способом. Mautic Бесплатное маркетинговое решение с открытым исходным кодом дает вам отличный контроль над маркетинговыми кампаниями, и очень просто продолжать капельную кампанию в соответствии с ситуацией. Например: это дает вам информацию о том, что если клиент прочитал электронное письмо или посетил страницы вашего продукта. Используя эту информацию, вы можете настроить кампании, чтобы решить, следует ли продолжать отправлять следующие электронные письма для этого клиента или нет. Эта интеграция поможет в автоматизации цифрового маркетинга. Этот пост в блоге поможет вам в следующих разделах:
  * [Обзор][1]
  * [Установка плагина joomla][2]
  * [Mautic Configuration][3]
  * [Заключение][4]

## Обзор: {#overview}

Mautic-это система автоматизации маркетинга с открытым исходным кодом. Это бесплатное маркетинговое программное обеспечение. Вы можете использовать его для создания неограниченных кампаний для отправки маркетинговых электронных писем целевым клиентам.
Joomla также является бесплатной системой управления контентом с открытым исходным кодом для разработки веб-сайтов. Очень легко настроить ваши бизнес -сайты на Joomla. Он имеет тысячи расширений, которые можно использовать в соответствии с вашими требованиями.

## Установка плагина Joomla: {#plugin}

  * Загрузите [плагин][5].
  * Затем перейдите к расширениям -> Manage -> Установить.
  * Введите Mautic URL.
  * Он вставит 1 PX GIF -изображение, загруженное из вашего маутического экземпляра.
  * Встроенные формы в контент Joomla с использованием следующего фрагмента кода: {mautic type = ”form” id}
  * Затем вы можете создать форму в своем приложении Mautic и получить идентификатор от URL.
  * Динамическое содержание также может быть добавлено с помощью следующего кода Snippt: {mautic type = ”content” slot = ”slot_name”} Содержание по умолчанию здесь. {/Mautic}
  * SLOT_NAME - это идентификатор слота, который вы указали при добавлении решения «Запрос динамического контента» в вашу кампанию.
После установки вам нужно создавать и внедрять формы на вашем сайте Joomla. Эти формы отправят информацию о контактах в Маутику. После того, как вы закончите настройку плагина на Joomla, следующим шагом будет настройка его на Mautic.

## Маутическая конфигурация: {#mautic}

  * Перейдите на свой сайт Mautic, перейдите к настройкам.
  * Нажмите на конфигурацию.
  * Из настройки API, включите API.
  * Чтобы подключить Mautic с Joomla, вы должны иметь SSL -сертификат на ваших сайтах.
  * Затем вам нужно перейти к учетным данным API.
* Если на вашем веб -сайте нет SSL (так что вы заходите на **http**: //yourjoomlasite.com), выберите OAuth1. Если у вас есть SSL на вашем сайте (так что вы переходите к**https** : //yourjoomlasite.com), выберите OAuth2.
  * Нажмите «Новое», предоставьте имя (может быть все, что вы хотите) и полный URL вашего Joomla! Сайт ([https://yourjoomlasite.com][6])
  * Нажмите Сохранить и закрыть.
  * Здесь вы можете получить публичные и частные ключи.
  * Зайдите на свой сайт Joomla и найдите плагин Mautic, который вы установили ранее.
  * Введите публичные и секретные ключи, которые вы создали на своем маутическом сайте.
  * Выберите OAUTH1 или OAUTH2 (так же, как вы выбрали в Mautic) и установите отправить зарегистрированных пользователей на да.
  * Сохраните и опубликуйте плагин.
  * После этого вы сможете разрешить свой сайт Joomla.
  * Joomla переиграет на магический экземпляр на авторизацию.
  * Нажмите «Авторизировать», и это все.
  * Вы начнете получать контакты на свой сайт Mautic.

{{< figure align=center src="images/Mautic-and-Joomla-integration-1024x591.png" alt="Интеграция Mautic и Joomla">}}


## Заключение: {#conclusion}

В этой статье мы обсудили, как Mautic и Joomla вместе могут помочь в автоматизации цифрового маркетинга. Это бесплатное маркетинговое решение с открытым исходным кодом позволит вам группировать все контакты с сайта Joomla и создавать маркетинговые кампании, используя их. Mautic позволяет вам создавать сегменты, чтобы вы могли проводить разные кампании в разных сегментах в соответствии с вашими потребностями. Пожалуйста, проверьте [Joomla][7] и [Mautic][8] блоги для подробного обзора.

## Исследовать:
Вы можете найти следующие ссылки актуальными:
  * [Joomla][7]
  * [Mautic][8]
  * [Как настроить Mautic - интеграция Facebook][9]
  * [Drupal Mautic Integration для автоматизации воспитания свинца][10]
  * [Автоматизация маркетинга с использованием Mautic и WordPress WooCommerce][11]
  * [Как настроить маркетинговые кампании в Маутике][12]



[1]: #overview
[2]: #plugin
[3]: #mautic
[4]: #conclusion
[5]: https://href.li/?https://extensions.joomla.org/extension/mautic/
[6]: https://href.li/?https://yourjoomlasite.com
[7]: https://products.containerize.com/content-management/joomla
[8]: https://products.containerize.com/marketing-automation/mautic
[9]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[10]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[11]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[12]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
