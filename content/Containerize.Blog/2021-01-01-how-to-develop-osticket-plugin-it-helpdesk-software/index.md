---
title: How To Develop osTicket Plugin | IT HelpDesk software
seoTitle: How To Develop osTicket Plugin | IT HelpDesk software
description: Follow this tutorial to learn how to develop the osTicket plugin. This IT helpdesk software manages customer communications and automates issue resolution.
date: Fri, 01 Jan 2021 07:11:49 +0000
author: bilalahmed
summary: Create an osTicket plugin to add features into your osTicket installation. This open-source ticketing system helps businesses to handle customers efficiently.
url: /helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
aliases: 
    -  /2021/01/01/how-to-develop-osticket-plugin-it-helpdesk-software/
categories: ['Help Desk']

---
## Create an osTicket plugin to add features into your osTicket installation. This open-source ticketing system helps businesses to handle customers efficiently.

{{< figure align=center src="images/A-beginners-guide-to-develop-osTickets-plugin.png" alt="it helpdesk software">}}  

## Overview

Welcome to another interesting blog post in the series of [Helpdesk Ticketing Software][1]. We have published some blog posts on topics such as [Popular Free Ticketing Based Helpdesk and Customer Care System][2], [Automate ticketing system using WordPress and osTicket][3], and some more. However, osTicket is an open source ticketing-based helpdesk system designed for customers to report their queries and complaints to support staff. This free support system provides easy to use inquires management module that converts inquiries coming from phone, email, and forms into web-based tickets. It offers a wide range of features and options that enables support staff to provide an incredible client support experience for customers. 

This open source ticketing system(osTicket) is an entirely flexible support ticket framework that offers numerous options to help tailor all parts of the client support experience like messages sent to clients, pages, and notifications. In his article, we will learn osTicket plugin development to enhance functionality according to our needs. To do that, we will cover the following topics:

  * [Why to Use Plugins?][4]
  * [Requirements][5]
  * [How to Develop osTicket’s Plugin?][6]
  * [Conclusion][7]

## Why to Use Plugins? {#why}

In this topic, we will learn how to create a simple plugin to extend the core functionality of this **IT helpdesk software**(osTicket). A plugin is a piece of software, that extends the core functionality of any app/software. In addition, there are many enterprise-level open source software that has a huge stack of plugins that extend the functionalities. Further, these popular open source software include WordPress, Joomla, and many more. Above all, Vibrant and alive communities support and develop plugins as per needs. However, frameworks offer comprehensive documentation regarding the development of the plugins. Following are some reasons for apps to support plugins:

  * It allows third party developers to create software components which extend the functionality of an application.
  * Plugins allow to easily integrate new features.
  * Also it doesn’t increase the size and complexity of an application.
  * As well as developers can keep and manage plugins’ code separately from core application.

## Requirements {#requirements}

This section of the **IT helpdesk software** guide describes the requirements needed to develop the osTicket plugin.

  * PHP version 5.6 or above
  * osTicket installation
  * Basic PHP Knowledge

## How to Develop osTicket’s Plugin? {#how}

In this section, we will go through the steps of the plugin development of this open source ticketing system(osTicket).

  * Create plugin’s folder in <ROOT>/include/plugins directory. In this tutorial we will create a demo plugin which integrates **osTicket system** with Redmine.
  * It should have following necessary files: plugin.php and config.php.
  * plugin.php file contains general description of the plugin. Use following sample code in plugin.php file:


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


  * Then replace id, name, author name and plugin class names from above code.

  * After that, we need to display plugin configuration options into osTicket’s backend. Add following sample code into config.php file.


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


  * As a result, this will create username and password fields on config page as shown here:

{{< figure align=center src="images/A-Beginners-Guide-To-Develop-osTickets-Plugin-1024x368.png" alt="A Beginner’s Guide To Develop osTicket Plugin">}}  

  * The following is a list of class fields that are available, they are defined in `[INSTALL_ROOT]/include/class.forms.php`:
      * TextboxField – text box
      * TextareaField – text area
      * ThreadEntryField – rich text area, used for discussion threads
      * DatetimeField – JQuery datepicker
      * PhoneField – text box optimized for phone numbers
      * BooleanField – checkbox
      * ChoiceField – drop-down select field
      * SectionBreakField – horizontal section break

  * After that, we need to create the file where plugin’s functionality will be defined.
  * File name should be same as defined in plugin.php file. i.e redmine.php.
  * This will must hold the class DynabicRedminePlugin. Check out following sample code:


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


  * This code fetched the configuration values and you can use these values in your functions. In this file you can add your plugin’s functionality as your requirements.

## Conclusion {#conclusion}

This brings us to the end of this blog post. OsTicket is a ticketing management software that offers plugins structure for developers so they can add new functionality as per requirements. Plugins are the components that extend the core functionality of any app/software. In his article, we have discussed plugin development of this **customer support system**(osTicket), which helps developers to add custom features and enhancements according to their requirements. Therefore, this blog post will really help you if you are looking to deploy an **IT helpdesk software** for your business. Moreover, there are other **helpdesk ticketing software** and articles mentioned in the “Explore” section below. 

Finally, [containerize.com][8] is continuously writing blog posts on further open source products and topics. Therefore, please stay in touch with the [HelpDesk ticketing software][1] category for regular updates. Moreover, you can follow us on our social media accounts [Facebook][9], [LinkedIn][10], and [Twitter][11].

## Explore

You may find the following links relevant:

  * [UVdesk][12]

  * [Zammad][13]

  * [FreeScout][14]

  * [Helpy][15]

  * [Best Open Source and Free IT Help Desk Software][16]

  * [Popular Free Ticketing Based Helpdesk and Customer Care System][2]

  * [How To Set Up Online Help Desk Software Using osTicket][17]

  * [How to Implement Multi-tenancy in osTicket][18]

  * [Automate ticketing system using WordPress and osTicket][3]

  * [Automate Business Operations Using Free and Open Source Software][19]

 [1]: https://products.containerize.com/video-editing-software
 [2]: https://products.containerize.com/helpdesk/osticket
 [3]: https://blog.containerize.com/2020/10/13/automate-ticketing-system-using-wordpress-and-osticket/
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
 [17]: https://blog.containerize.com/2020/12/25/how-to-set-up-help-desk-system-using-osticket/
 [18]: https://blog.containerize.com/2020/11/02/how-to-implement-multi-tenancy-in-osticket/
 [19]: https://blog.containerize.com/2020/08/27/automate-business-operations-using-open-source-software/