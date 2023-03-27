---
title: "Как разработать плагин Osticket | Это помогает программное обеспечение" 
seoTitle: "Как разработать плагин Osticket | Это помогает программное обеспечение" 
description: "Следуйте этому уроку, чтобы узнать, как разработать плагин Osticket. Это помогает программное обеспечение управляет коммуникациями клиентов и автоматизирует решение проблем." 
date: Fri, 01 Jan 2021 07:11:49 +0000
author: bilalahmed
summary: "Создайте плагин Osticket, чтобы добавить функции в свою установку Osticket. Эта система билетов с открытым исходным кодом помогает компаниям эффективно справляться с клиентами." 
url: /ru/how-to-develop-osticket-plugin-it-helpdesk-software/
categories: ['Help Desk']
---

## Создайте плагин Osticket, чтобы добавить функции в вашу установку Osticket. Эта система билетов с открытым исходным кодом помогает компаниям эффективно справляться с клиентами.

{{< figure align=center src="images/A-beginners-guide-to-develop-osTickets-plugin.png" alt="Это помогает программное обеспечение">}}


## Обзор
Добро пожаловать в еще один интересный пост в блоге в серии программного обеспечения для билетов Helpdesk][1]. Мы опубликовали несколько сообщений в блоге по таким темам, как [популярная бесплатная система Helpdesk и Customer System][2], [автоматизировать систему продажи билетов с использованием WordPress и Osticket][3], а также немного. Тем не менее, Osticket-это система Helpdesk, основанная на билетах с открытым исходным кодом, предназначенную для клиентов, чтобы сообщить о своих запросах и жалобах на поддержку персонала. Эта бесплатная система поддержки обеспечивает простые в использовании модуль управления запросами, который преобразует запросы, исходящие из телефона, электронной почты и форм в веб-билеты. Он предлагает широкий спектр функций и опций, которые позволяют вспомогательному персоналу предоставлять невероятный опыт поддержки клиентов для клиентов.
Эта система билетов с открытым исходным кодом (Osticket) представляет собой совершенно гибкую структуру билетов поддержки, которая предлагает множество вариантов, которые помогут адаптировать все части опыта поддержки клиентов, такие как сообщения, отправляемые клиентам, страницам и уведомлениям. В его статье мы узнаем разработку плагинов Osticket, чтобы улучшить функциональность в соответствии с нашими потребностями. Для этого мы рассмотрим следующие темы:
  * [Зачем использовать плагины?][4]
  * [Требования][5]
  * [Как разработать плагин Osticket?][6]
  * [Заключение][7]

## Зачем использовать плагины? {#why}

В этой теме мы узнаем, как создать простой плагин для расширения основной функциональности этого  **It Helpdesk Software**  (Osticket). Плагин - это кусок программного обеспечения, который расширяет основную функциональность любого приложения/программного обеспечения. Кроме того, существует много программного обеспечения с открытым исходным кодом на уровне предприятия, в котором есть огромная стопка плагинов, которые расширяют функциональные возможности. Кроме того, это популярное программное обеспечение с открытым исходным кодом включает WordPress, Joomla и многие другие. Прежде всего, динамичные и живые сообщества поддерживают и разрабатывают плагины в соответствии с потребностями. Тем не менее, фреймворки предлагают комплексную документацию, касающуюся разработки плагинов. Ниже приведены некоторые причины для поддержки плагинов:
  * Это позволяет сторонним разработчикам создавать программные компоненты, которые расширяют функциональность приложения.
  * Плагины позволяют легко интегрировать новые функции.
  * Также это не увеличивает размер и сложность применения.
* , А также разработчики могут сохранять и управлять кодом плагинов отдельно от основного приложения.

## Требования {#requirements}

В этом разделе руководства по программному обеспечению  **IT Helpdesk**  описывается требования, необходимые для разработки плагина Osticket.
  * PHP версия 5.6 или выше
  * Установка Osticket
  * Основные знания PHP

## Как разработать плагин Osticket? {#how}

В этом разделе мы проведем шаги разработки плагинов этой системы продажи билетов с открытым исходным кодом (Osticket).
  * Создать папку плагина в каталоге /include /plugins. В этом уроке мы создадим демонстрационный плагин, который интегрирует  **систему Osticket**  с Redmine.
  * Он должен иметь следующие необходимые файлы: plugin.php и config.php.
  * Файл plugin.php содержит общее описание плагина. Используйте следующий пример кода в файле plugin.php:
```
<?php

return array(
    'id' =>             'dynabic:redmine', # notrans
    'version' =>        '0.1',
    'name' =>           /* trans */ 'Dynabic Redmine',
    'author' =>         'Bilal Kiani',
    'description' =>    /* trans */ 'Integration with Dynabic.Redmine',
    'url' =>            '',
    'plugin' =>         'redmine.php:DynabicRedminePlugin',
);

?>

```
  * Затем замените идентификатор, имя, имя автора и имена классов плагинов из вышеупомянутого кода.
  * После этого нам нужно отобразить параметры конфигурации плагина в бэкэнд Osticket. Добавьте следующий пример кода в файл config.php.
```
<?php
require_once INCLUDE_DIR . 'class.plugin.php';
class DynabicRedminePluginConfig extends PluginConfig {

    // Provide compatibility function for versions of osTicket prior to
    // translation support (v1.9.4)
    function translate() {
        if (!method_exists('Plugin', 'translate')) {
            return array(
                function($x) { return $x; },
                function($x, $y, $n) { return $n != 1 ? $y : $x; },
            );
        }
        return Plugin::translate('dynabic-redmine');
    }

    function getOptions() {
        list($__, $_N) = self::translate();        
        return array(
            'dynabicRedmineCredentials' => new SectionBreakField(array(
                'label' => $__('Redmine Credentials')
            )),
            'dynabic-Redmine-username' => new TextboxField(array(
                'label' => $__('Username'),
                'configuration' => array('size'=>60, 'length'=>100),                
            )),
            'dynabic-Redmine-password' => new PasswordField(array(
                'label' => $__('Password'),
                'configuration' => array('size'=>60, 'length'=>100),                
            )),
        );
    }
}
```
  * В результате это создаст поля имени и пароля на странице конфигурации, как показано здесь:

{{< figure align=center src="images/A-Beginners-Guide-To-Develop-osTickets-Plugin-1024x368.png" alt="Руководство для начинающих по разработке плагина Osticket">}}

  * Ниже приведен список доступных классов полей, они определены в `[install_root]/include/class.forms.php`:
      * Textboxfield - текстовое поле
      * TextareEafield - текстовая область
      * ThreadEntryfield - богатая текстовая область, используемая для обсуждения потоков
      * DateTimefield - jQuery DatePicker
      * Phonefield - текстовое поле оптимизировано для номеров телефонных телефонов
      * Booleanfield - флажок
      * Choicefield-Поле раскрывающегося выбора
      * SectionBreakfield - горизонтальный разрыв секции
  * После этого нам нужно создать файл, в котором будут определены функциональность плагина.
  * Имя файла должно быть таким же, как определено в файле plugin.php. то есть Redmine.php.
  * Это должно держать класс Dynabicredmineplugin. Проверьте следующий пример кода:
```
class DynabicRedminePlugin extends Plugin {
    var $config_class = "DynabicRedminePluginConfig";
	 /**
     * The Redmine WSDL endpoint.
     */

    function bootstrap() {
        $config = $this->getConfig();
        # ----- Dynabic.Redmine credentials ---------------------
        $dynabicRedmine = json_decode($config->get('dynabicRedmine-enabled'));
		define('Redmine_USERNAME', $config->get('dynabic-Redmine-username'));
		define('Redmine_PASSWORD', $config->get('dynabic-Redmine-password'));
    }
```
  * Этот код принес значения конфигурации, и вы можете использовать эти значения в своих функциях. В этом файле вы можете добавить функциональность вашего плагина в качестве ваших требований.

## Заключение {#conclusion}

Это подводит нас к концу этого сообщения в блоге. Osticket - это программное обеспечение для управления билетами, которое предлагает структуру плагинов для разработчиков, чтобы они могли добавлять новые функции в соответствии с требованиями. Плагины - это компоненты, которые расширяют основную функциональность любого приложения/программного обеспечения. В его статье мы обсудили разработку плагинов этой  **системы поддержки клиентов** (Osticket), которая помогает разработчикам добавлять пользовательские функции и усовершенствования в соответствии с их требованиями. Поэтому этот пост в блоге действительно поможет вам, если вы хотите развернуть  **ИТ -программное обеспечение HelpDesk**  для вашего бизнеса. Более того, есть и другие **Helpdesk Bicketing Software**  и статьи, упомянутые в разделе «Исследовать» ниже.
Наконец, [cantainerize.com][8] постоянно пишет посты в блоге на дополнительные продукты и темы с открытым исходным кодом. Поэтому, пожалуйста, оставайтесь на связи с категорией [программное обеспечение для билетов Helpdesk][1] для регулярных обновлений. Более того, вы можете подписаться на нас в наших учетных записях в социальных сетях [Facebook][9], [LinkedIn][10] и [Twitter][11].

## Исследовать
Вы можете найти следующие ссылки актуальными:
  * [Uvdesk][12]
  * [Zammad][13]
  * [Freescout][14]
  * [Помощь][15]
  * [Лучший с открытым исходным кодом и бесплатно программное обеспечение для службы поддержки ИТ][16]
  * [Популярные бесплатные билеты на основе Helpdesk и системы обслуживания клиентов][2]
  * [Как настроить программное обеспечение для службы поддержки онлайн с помощью Osticket][17]
  * [Как внедрить многоцелевое место в Остикете][18]
  * [Автоматизируйте систему билетов с использованием WordPress и Osticket][3]
  * [Автоматизировать бизнес -операции с использованием бесплатного и открытого программного обеспечения][19]



[1]: https://products.containerize.com/video-editing-software
[2]: https://products.containerize.com/helpdesk/osticket
[3]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[4]: #why
[5]: #requirements
[6]: #how
[7]: #conclusion
[8]: https://www.containerize.com/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://products.containerize.com/helpdesk/uvdesk/
[13]: https://products.containerize.com/helpdesk/zammad/
[14]: https://products.containerize.com/helpdesk/freescout/
[15]: https://products.containerize.com/helpdesk/helpy/
[16]: https://products.containerize.com/helpdesk/
[17]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
[18]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
[19]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
