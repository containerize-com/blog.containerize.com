---
title: "Давайте разработаем плагин WordPress | Учебник плагина WordPress" 
seoTitle: "Давайте разработаем плагин WordPress | Учебник плагина WordPress" 
description: "Заинтересованы в разработке плагинов WordPress? Следите за этим учебником плагина WordPress, который описывает полные шаги для создания базового плагина WordPress." 
date: Fri, 13 Nov 2020 13:30:43 +0000
author: Assad Mahmood
summary: "WordPress Plugin - это модуль, который вы активируете на своем веб -сайте, чтобы предоставить серию функций или элементов. Эти плагины оптимизированы SEO и предлагают автоматизацию." 
url: /ru/lets-develop-a-wordpress-plugin-wordpress-plugin-tutorial/
categories: ['Blogging']
---

## плагин WordPress - это модуль, который вы активируете на своем веб -сайте, чтобы предоставить серию функций или элементов. Эти плагины оптимизированы SEO и предлагают автоматизацию.

{{< figure align=center src="images/Screenshot-2020-11-13-at-6.08.54-PM-1024x537.png" alt="Учебник плагина WordPress">}}


## Обзор
WordPress-это платформа блога с открытым исходным кодом на уровне предприятия. **плагин WordPress** - это отдельный набор кода, который улучшает и расширяет функциональность WordPress. Используя любую комбинацию PHP, HTML, CSS, JavaScript/jQuery. Плагин может добавить новые функции в любую часть вашего сайта.
Функциональность, которую вы можете добавить на свой веб -сайт, зависит от того, для чего был создан каждый конкретный плагин. Плагин WordPress может быть разработан, чтобы сделать что угодно. От небольшой задачи до полного приложения, которое выполняет ряд операций и имеет свои собственные интерфейсы. Плагины отличаются от вашей темы и работают независимо, используя крючки, фильтры, шорткоды, виджеты и пользовательский код для выполнения их функциональности.
В этом учебном пособии WordPress плагин мы узнаем, как создать наш первый плагин WordPress. Самая важная причина создания плагина - это то, что он позволяет вам отделить свой собственный код от кода WordPress Code.
* **[Требования][1]** 
* **[Основы разработки плагинов][2]** 
* **[Как создать плагин WP?][3]** 
* **[Заключение][4]** 

## Требования {#requirements}

  * Последняя версия WordPress
  * Понимание PHP / MySQL
  * Понимание HTML / CSS и JavaScript

## Основы разработки плагинов {#basics}

Давайте рассмотрим время, чтобы поговорить о некоторых ключевых аспектах разработки плагинов. Количество понимания того, как работают эти концепции, поможет вам создать простую в использовании и поддержание функциональности.

### действия
**Крюки действий **- очень полезный инструмент в** WordPress* ***плагин** , и они используются для выполнения функций (**Действия** ) в определенных местах темы или плагина. У WordPress есть десятки действий, определенных на протяжении всего ее основной функции, каждое действие, состоящее из уникального имени. Для получения более подробной информации [читать][5].

### Фильтры
Фильтр WordPress - это крючок, который принимает переменную (или серию переменных) и возвращает их обратно после того, как они были изменены. Эти фильтры часто используются так, чтобы у вас был способ манипулировать информацией по умолчанию. Для получения более подробной информации [читать][6].

### Шорткоды
Шорткоды - это макросы, которые можно использовать для выполнения динамических взаимодействий с контентом. то есть создание галереи из изображений, прикрепленных к сообщению или визуализации видео. В результате они являются ценным способом поддержания чистого и семантического контента, позволяя конечным пользователям некоторую способность программно изменять представление своего контента. Для получения более подробной информации [читать][7].

### виджеты
Виджеты важны, потому что они дают вам еще одно средство выполнения кода вашего плагина, обеспечивая простой в использовании интерфейс. Поскольку большинство тем будут поддерживать один или несколько боковых панелей; Добавление собственных виджетов даст вам быстрый доступ для отображения вашей информации внутри темы.

## **Как создать плагин WP?** {#create}

В этом разделе учебника плагина WordPress все, что вам нужно сделать, это создать папку, а затем создать один файл с одной строкой контента. Перейдите в папку **WP-Content/Plugins**и создайте новую папку с именем **mytestplugin** . В этой новой папке создайте файл с именем**mytestplugin.php** . Откройте файл в текстовом редакторе и вставьте в него следующую информацию:
```
<?php
   /*
   Plugin Name: My Test Plugin
   Plugin URI: http://my-test-plugin.com
   description: >-
  a plugin to create test plugin development
   Version: 1.2
   Author: Mr. Test
   Author URI: http://my-test-plugin.com
   License: GPL2
   */
?>
```
Теперь вы можете перейти в задний план, чтобы активировать свой плагин. Вот и все, хотя этот плагин ничего не делает. Но это активный, функционирующий плагин. Лучшая практика при разработке плагина - это аккуратно разделить ваш код на соответствующие файлы и папки.
Чтобы продемонстрировать, давайте добавим функциональность в наш тестовый плагин, который отслеживает популярность наших статей, сохраняя, сколько раз просматривали каждый пост.

### Views страницы
```
function add_page_views() {
   if(is_single()) {
      global $post;
      $current_views = get_post_meta($post->ID, "page_views", true);
      if(!isset($current_views) OR empty($current_views) OR !is_numeric($current_views) ) {
         $current_views = 0;
      }
      $new_views = $current_views + 1;
      update_post_meta($post->ID, "page_views", $new_views);
      return $new_views;
   }
}
```
До сих пор так хорошо в этом учебнике плагина WordPress. Но эта функция никогда не называется, поэтому она на самом деле не будет использоваться. Здесь появляются крючки. Вы можете перейти в файлы своей темы и вызвать функцию вручную оттуда. Но тогда вы потеряете эту функциональность, если когда -нибудь изменили тему, победив всю цель. Крюк с именем **wp_head**, который работает непосредственно перед тем, как тег присутствует в большинстве тем, поэтому мы можем просто установить нашу функцию для работы, когда**wp_head** работает, как так:
```
add_action("wp_head", "add_page_views");
```

### Показание просмотров страницы
Теперь мы создадим еще одну функцию, которая возвращает представления страницы, которые мы уже сохранили в вышеуказанной функции. Давайте посмотрим на код:
```
function get_page_views() {
   global $post;
   $current_views = get_post_meta($post->ID, "page_views", true);
   if(!isset($current_views) OR empty($current_views) OR !is_numeric($current_views) ) {
      $current_views = 0;
   }

   return $current_views;
}
```
До сих пор мы только что взяли количество взглядов. Теперь давайте покажем это. Вы можете думать, что это должно быть сложно. Но это очень просто так же, как это:
```
echo get_page_views() . “view(s)”
```

## Заключение {#conclusion}

Это конец этого учебника плагина WordPress. Следуя этой статье и используя только несколько функций, мы создали базовый плагин для отслеживания наших самых популярных постов. Мы можем значительно улучшить это, но цель состояла в том, чтобы вам комфортно с основами. Более того, изучая некоторые модели разработки WordPress (плагины, крючки и т. Д.), Вы приобретаете навыки, которые также будут служить вам в условиях, не являющихся усерденами. Есть много других сообщений в блоге, связанных с платформами блога с открытым исходным кодом и CMS с открытым исходным кодом. что вы можете найти в разделе «Исследование» ниже. Этот пост в блоге действительно может помочь вам, если вы хотите развернуть платформу для блога с открытым исходным кодом для своего бизнеса.
Наконец, [Containerize.com][8] пишет статьи на дополнительных продуктах с открытым исходным кодом. Поэтому, пожалуйста, оставайтесь на связи с категориями [9][9] и [программного обеспечения для бизнес -разведки][10] для регулярных новостей и обновлений

## Исследовать
  * [Как установить Matomo для WordPress | Учебник WordPress][11]
  * [Увеличьте свои лидеры бесплатной интеграцией WordPress WordPress][12]
  * [Как установить плагин в WordPress | Ванильный форум][13]
  * [Joomla vs Drupal | Сравнение CMS в 2021 году][14]
  * [Вещи, которые нужно просмотреть, прежде чем выбрать программное обеспечение с открытым исходным кодом в 2021 году][15]



[1]: #requirements
[2]: #basics
[3]: #create
[4]: #conclusion
[5]: https://developer.wordpress.org/plugins/hooks/
[6]: https://developer.wordpress.org/plugins/hooks/filters/
[7]: https://developer.wordpress.org/plugins/shortcodes/
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/blogging/
[10]: https://products.containerize.com/business-intelligence/
[11]: https://blog.containerize.com/blogging/how-to-install-matomo-for-wordpress-wordpress-tutorial/
[12]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[13]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[14]: https://blog.containerize.com/content-management/joomla-vs-drupal-cms-comparison-in-2021/
[15]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
