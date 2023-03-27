---
title: "Руководство для начинающих по созданию базового шаблона Joomla" 
seoTitle: "Руководство для начинающих по созданию базового шаблона Joomla" 
description: "Joomla-популярная система управления контентом с открытым исходным кодом. В этом уроке мы объясним шаг за шагом, как создать шаблон Joomla." 
date: Fri, 22 Jan 2021 08:30:26 +0000
author: Assad Mahmood
summary: "Joomla-одна из самых популярных систем управления контентом с открытым исходным кодом. Этот учебник проведет вас через необходимые шаги по созданию шаблона Joomla с нуля." 
url: /ru/beginners-guide-to-create-a-basic-joomla-template/
categories: ['Content Management']
---

## Joomla-одна из самых популярных систем управления контентом с открытым исходным кодом. Этот учебник проведет вас через необходимые шаги по созданию шаблона Joomla с нуля.

{{< figure align=center src="images/joomla-templates-2.png" alt="Базовый шаблон Joomla">}}

В эту эпоху цифровых технологий система управления контентом является основной необходимостью любого бизнеса для всех их потребностей в создании контента. И есть ряд открытых источников, а также платное программное обеспечение CMS, доступное на рынке. У нас также есть [перечислено][1] некоторые из ведущих программного обеспечения для управления контентом с открытым исходным кодом для предприятий. Joomla-одно из самых популярных программного обеспечения CMS с открытым исходным кодом, и в этом уроке мы проведем вас через шаг за шагом и объясним, как создать шаблон Joomla с нуля. Итак, давайте начнем!
 **Примечание: мы предполагаем, что у вас установлена ​​версия Joomla 2.5** 
*  **[Структура каталога настройки][2]**  
*  **[Создать базовый файл TemplateTails.xml][3]**  
*  **[Создать базовый файл index.php][4]**  
*  **[Откройте и установите шаблон][5]**  
*  **[Пакет шаблон][6]**  
*  **[Заключение][7]**  

## Структура каталога настройки {#setup}

Чтобы сначала создать очень простой шаблон Joomla, создайте новую папку в папке шаблонов. Назовите папку, что вы хотите назвать своему шаблону, например, «  **myNewTemplate**  ».
Использование вашего любимого текстового редактора Создайте файлы  **index.php** и  **templatedetails.xml**  . Чтобы управлять своими изображениями и листами в стиле, сделайте 2 новые папки, называемые  **изображениями**  и  **css**  . Внутри папки  **CSS**  Создайте файл с именем **Template.css**  .
Ваша структура каталогов будет выглядеть примерно так

{{< figure align=center src="images/Screenshot-2021-01-22-at-12.30.14-PM.png" alt="Структура каталога шаблонов Joomla">}}


## Создайте базовый файл TemplatedTails.xml {#xml}

Файл  **TemplateTails.xml**  содержит все метаданные о вашем шаблоне. И этот файл важен без него, ваш шаблон не будет виден Joomla!.
```
<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="template">
	<name>mynewtemplate</name>
	<creationDate>2008-05-01</creationDate>
	<author>Auther Name</author>
	<authorEmail>auther@example.com</authorEmail>
	<authorUrl>http://www.example.com</authorUrl>
	<copyright>Auther Name 2020</copyright>
	<license>GNU/GPL</license>
	<version>1.0.0</version>
	<description>My New Template</description>
	<files>
		<filename>index.php</filename>
		<filename>templateDetails.xml</filename>
		<folder>images</folder>
		<folder>css</folder>
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
Содержимое шаблона. Вы можете просто скопировать содержимое, изменить необходимые биты.
Оставьте позиции такими, какие они есть - это общий набор, поэтому вы сможете легко переключаться из стандартных шаблонов.

## Создать базовый файл index.php {#php}

Index.php становится основным файлом начальной загрузки на каждой странице, что Joomla! доставляет. На этой странице будет отображаться код, готовый для вас, чтобы вырезать и вставить в свой собственный дизайн.
```
<?php defined('_JEXEC') or die('Restricted access');?>
<!DOCTYPE html>
<html xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
<head>
<jdoc:include type="head" />
<link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
</head>
<body>
<jdoc:include type="modules" name="top" /> 
<jdoc:include type="component" />
<jdoc:include type="modules" name="footer" />
</body>
</html>
```

## Откройте и установите шаблон {#install}

Сначала вам нужно сказать Joomla! что вы создали новый шаблон. Эта функция называется расширениями обнаружения и может быть доступна через
```
Extensions -> Extension Manager -> Discover
```
Нажмите кнопку «Обнаружить», чтобы обнаружить свой шаблон, затем выберите его и нажмите «Установить», чтобы установить его. Теперь ваш шаблон должен отображаться в менеджере шаблонов (стили), доступный через
```
Extensions -> Template Manager
```

## Упаковать шаблон {#packge}

Рассказ из неопариваемого с несколькими файлами не является хорошим методом для распространения. Итак, ради распространения, мы должны создать пакет нашего шаблона. Пакет может быть в формате ZIP (с расширением .zip).
Если ваш шаблон находится в каталоге MyTemplate/ Затем, чтобы сделать пакет, вы можете подключиться к этому каталогу и использовать такие команды:
```
zip -r ..\mytemplate.zip .
```

## Заключение {#conclusion}

В этой статье мы узнали о шаблоне Joomla. Мы прошли шаг за шагом, как создать шаблон Joomla. Это всего лишь очень простой учебник, чтобы начать работу с созданием шаблонов. Конечно, вы можете построить очень индивидуальный и улучшенный шаблон на основе этой структуры с обнаженной костью.

## соответствующие страницы продукта
Вы можете найти следующие ссылки актуальными:
  * [Руководство по разработке шаблона Joomla для начинающих][8]



[1]: https://products.containerize.com/content-management
[2]: #setup
[3]: #xml
[4]: #php
[5]: #install
[6]: #package
[7]: #conclusion
[8]: https://blog.containerize.com/content-management/responsive-joomla-templates-tutorial/
