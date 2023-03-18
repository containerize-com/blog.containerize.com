---
title: "Руководство по разработке шаблона Joomla для начинающих" 
seoTitle: "Руководство по разработке шаблона Joomla для начинающих" 
description: "Изучите разработку шаблона Joomla, как настроить отзывчивые макеты для различных вариантов использования. Набор файлов, которые определяют дизайн -уровень бизнес -сайта." 
date: Tue, 29 Sep 2020 07:25:12 +0000
author: muhammadmustafa
summary: "Создайте высокопрофессиональные и настраиваемые шаблоны Joomla, которые предлагают кучу функций, таких как многоязычные, SEO / удобные для пользователя и богатые цветовые схемы." 
url: /ru/responsive-joomla-templates-tutorial/
categories: ['Content Management']
---

## Создайте очень профессиональные и настраиваемые шаблоны Joomla, которые предлагают кучу функций, таких как многоязычные, удобные для пользователя и богатые цветовые схемы. {.has-text-align-left}

{{< figure align=center src="images/banner_1200x628.png" alt="Joomla Semplate Development">}}


## Обзор
Хорошо разработанный бизнес-сайт играет жизненно важную роль, чтобы привлечь и удержать посетителей, давая им простоту навигации. ** Полный показан Joomla ** облегчает своим пользователям ряд отзывчивых макетов и разработки шаблонов Joomla, которые контролируют эстетику бизнес -сайта.
На этапе разработки размещение элементов дизайна очень важно для получения:
  * Последовательность
  * Легкая навигация
  * Простота
  * Мобильная совместимость
  * Читаемость
Здесь наступают шаблоны Joomla **. Это программное обеспечение с открытым исходным кодом дает положение о разработке или использовании предопределенных адаптивных макетов для всех веб -страниц, а не для написания кода для каждой страницы отдельно.
В этом сообщении мы узнаем следующие вещи о том, как создать и настроить ** удобный для пользователя шаблон ** в Joomla.
  *[** Что такое макеты Joomla? **] [2]
  *[** Как создать простой отзывчивый шаблон в Joomla? **] [3]
  *[** Как установить шаблон Joomla? **] [4]
  *[** Заключение **] [5]

## Что такое макеты Joomla? {#что}
Joomla предоставляет шаблоны для передней части, а также для задней части. Он поставляется со многими готовыми шаблонами и предлагает разработчикам создавать ** бесплатные адаптивные темы начальной загрузки ** в соответствии с их вариантами использования. В Joomla есть два типа шаблонов.
** Фронтовые шаблоны: ** Связаны с пользователем, с которой сталкиваются часть бизнес-сайта.
** Шаблоны заднего хода: ** Эти шаблоны связаны с бизнес-логикой сайта.

## Как создать простой отзывчивый шаблон в Joomla? {#как}
В этом разделе мы рассмотрим шаги этого учебника по шаблону Joomla.
Прежде чем прыгнуть в этот раздел, убедитесь, что у вас есть понимание следующего:
  * Html
  * CSS
  * JavaScript
  * Php
Таким образом, создание пользовательских шаблонов в Joomla никогда не было таким сложным и сложным. Тем не менее, давайте начнем создавать наш первый шаблон Joomla.

## ** Структура каталога настройки **
Прежде всего, создайте папку с именем «** MyTemplate **» внутри папки «** шаблоны **».
Создайте следующие файлы внутри папки «** myTemplate **»:
  *** index.php **: это файл ядра, который содержит код HTML и PHP для всех страниц шаблонов.
  *** TemplatedEtails.xml **: Этот файл содержит метаданные шаблона и обязательно замечен Joomla.
Теперь создайте три папки в папке «** mytemplate **» со следующими именами:
  *** JS **: Эта папка будет содержать все файлы JavaScript, необходимые для шаблона
  *** CSS **: все файлы CSS для стиля будут входить в эту папку
  *** Изображения **: изображения, используемые шаблоном
Создайте файл CSS с именем «** Template.css **» внутри папки «** css **».
```
* mytemplate/
** css/
*** template.css
** images/
** js/
** index.php
** templateDetails.xml
```
В конце концов, так будет выглядеть структура каталогов.

## давайте положим код
Поместите этот код в файл ** TemplatedTails.xml **.
```

<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="template">
	<name>mytemplate</name>
	<creationDate>2020-08-26</creationDate>
	<author>Mustafa</author>
	<authorEmail>Mustafa@example.com</authorEmail>
	<authorUrl>http://www.example.com</authorUrl>
	<copyright>Mustafa 2020</copyright>
	<license>GNU/GPL</license>
	<version>1.0.2</version>
	<description>My New Template</description>
	<files>
		<filename>index.php</filename>
		<filename>templateDetails.xml</filename>
		<folder>images</folder>
		<folder>css</folder>
                <folder>js</folder>
	</files>
	<positions>
		<position>breadcrumb</position>
		<position>left</position>
		<position>right</position>
		<position>top</position>
		<position>user1</position>
		<position>user2</position>
		<position>user3</position>
		<position>user4</position>
		<position>footer</position>
	</positions>
</extension>
```
Как упоминалось ранее, этот файл содержит метаданные о адаптивных макетах, которые определяются между тегами разметки. Тем не менее, вы можете изменить общую информацию, такую ​​как имя, автор и описание.
Этот файл также содержит информацию о других файлах и папках, которые используются шаблоном.
Теперь откройте файл ** index.php ** и начните размещать следующий код:
```
<?php defined( '_JEXEC' ) or die( 'Restricted access' );?>
```
Этот файл начнется с этой строки, которая мешает другим читать ваш PHP -код.
```
<!DOCTYPE html>
```
Это должно сообщить о браузере о типе документа.
```
<html xmlns="http://www.w3.org/1999/xhtml" 
   xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
```
Документы HTML начинаются с этой строки, а атрибут ** XMLNS ** рассказывает о пространстве имен XML для документа.
```
<head>
    <jdoc:include type="head" />
    <link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
    ?php%20echo%20$this-baseurl%20?/templates/?php%20echo%20$this-template%20?/js/index.js

    <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" type="text/css" />

    https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
    https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js
</head>
```
Первая строка после того, как тег говорит Joomla, чтобы поместить информацию о заголовке, такую ​​как информация о метаданных и заголовок страницы.
Во второй строке есть ссылка на лист внешнего стиля, а третья строка ссылается на внешний файл JavaScript.
Остальные файлы включают начальную загрузку в шаблон.
```
<body>

    <!-- main container -->
    <div class='main_container'>
    
        <!-- header -->
        <div class='header'>Header</div>
    
        <!-- mid container - includes main content area and right sidebar -->
        <div class='mid_container'>
    
            <!-- main content area -->
            <div class='main_content_area'>
    
            </div>
    
            <!-- right sidebar -->
            <div class='right_sidebar'>
                <jdoc:include type="modules" name="position-7" style="well" />
            </div>
    
            <div style='clear:both;'></div>
    
        </div>
    
        <!-- footer -->
        <div class='footer'>
            Footer
        </div>
    
    </div>
</body>
```
Секция тела начинается после того, как раздел головки содержит все данные, которые будут отражены в шаблоне для просмотра и навигации.
```
<jdoc:include type="modules" name="position-7" style="well" />
```
Это утверждение называется JDOC, который используется для обучения Joomla добавить модуль с именем «Position-7». Есть несколько операторов JDOC, которые часто используются в разработке шаблона Joomla **.
Это окончательный полный файл ** index.php ** со всем кодом, необходимым для базового шаблона Joomla.
```
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
    <head>
        <jdoc:include type="head" />
        <link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
        ?php%20echo%20$this-baseurl%20?/templates/?php%20echo%20$this-template%20?/js/index.js
    
        <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" type="text/css" />
    
        https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
        https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js
    </head>

    <body>
    
        <!-- main container -->
        <div class='main_container'>
        
            <div class='header'>Header</div>
        
            <!-- mid container - includes main content area and right sidebar -->
            <div class='mid_container'>
        
                <!-- main content area -->
                <div class='main_content_area'>
        
                </div>
        
                <!-- right sidebar -->
                <div class='right_sidebar'>
                    <jdoc:include type="modules" name="position-7" style="well" />
                </div>
        
                <div style='clear:both;'></div>
        
            </div>
        
            <!-- footer -->
            <div class='footer'>
                Footer
            </div>
        
        </div>
    </body>
</html>
```
Все на месте для очень простого шаблона. Теперь пришло время установить его на сервер Joomla и посмотреть, как это происходит.

## Как установить шаблон Joomla? {#установить}
Процесс установки шаблона Joomla довольно прост и прост. Есть следующие шаги для установки:
Перейдите на «Extensions -> Manage -> Установить

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.38.29-PM-1024x324.png" alt="Joomla установка изображение установки">}}

Здесь вы можете увидеть свой недавно разработанный шаблон Joomla в списке, как показано на изображении ниже.

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.39.49-PM-1024x322.png" alt="Список шаблонов Joomla">}}

Теперь выберите шаблон, нажмите «Установка», и о успешной установке появится сообщение о успешной установке.
После установки шаблона вы можете получить доступ и изменить файлы шаблонов на панели управления Joomla и предварительно просмотреть изменения из опции «Предварительный просмотр шаблона».

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.46.35-PM-1024x580.png" alt="Joomla">}}

Теперь вы можете просмотреть свой первый шаблон Joomla в браузере!

## Заключение {#conclusion}
Хороший и отзывчивый шаблон является основой для общего моделирования сайтов. ** Отзывчивые макеты ** в Joomla являются многофункциональными и могут использоваться для различных проектов. От написания кода до разработки шаблона Joomla становится очень простым с помощью интуитивно понятной административной панели. Joomla обеспечивает полный контроль над разработкой шаблона, чтобы удовлетворить желания пользователя.
Поскольку ** CMS Software ** Категория находится в постоянных улучшениях, и в список будет добавлено больше учебных пособий о других системах управления контентом, оставайтесь на связи с разделом [Система управления контентом] [6] для регулярных обновлений.

## соответствующие страницы продукта
Вы можете найти следующие ссылки актуальными:
  * [Joomla] [1]
  * [Drupal] [7]
  * [Пиро] [8]
  * [Django cms] [9]
  * [Umbraco CMS] [10]
  * [Concrete5] [11]
  * [GRAVE] [12]
  * [Craft] [13]
  * [Contao] [14]
  * [Fork] [15]
  * [Нефтеперерабатывающий завод CMS] [16]
  * [Locomotivecms] [17]
[1]: https://products.containerize.com/content-management/joomla
[2]: #what
[3]: #how
[4]: #install
[5]: #Conclusion
[6]: https://href.li/?https://products.containerize.com/content-management
[7]: https://products.containerize.com/content-management/drupal
[8]: https://products.containerize.com/content-management/pyro
[9]: https://products.containerize.com/content-management/django
[10]: https://products.containerize.com/content-management/umbraco
[11]: https://products.containerize.com/content-management/concrete5
[12]: https://products.containerize.com/content-management/grav
[13]: https://products.containerize.com/content-management/craft
[14]: https://products.containerize.com/content-management/contao
[15]: https://products.containerize.com/content-management/fork
[16]: https://products.containerize.com/content-management/refinery-cms
[17]: https://products.containerize.com/content-management/locomotive-cms
