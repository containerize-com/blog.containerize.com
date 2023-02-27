---
title: Let’s Develop A WordPress Plugin | WordPress Plugin Tutorial
seoTitle: Let’s Develop A WordPress Plugin | WordPress Plugin Tutorial
description: Interested in WordPress plugins Development? Follow this WordPress plugin tutorial that describes complete steps to create a basic WordPress plugin.
date: Fri, 13 Nov 2020 13:30:43 +0000
author: Assad Mahmood
summary: WordPress Plugin is a module you activate on your website to provide a series of features or elements. These plugins are SEO optimized and offer automation.
url: /blogging/lets-develop-a-wordpress-plugin-wordpress-plugin-tutorial/
aliases: 
    -  /2020/11/13/lets-develop-a-wordpress-plugin-wordpress-plugin-tutorial/
categories: ['Blogging']

---
## WordPress Plugin is a module you activate on your website to provide a series of features or elements. These plugins are SEO optimized and offer automation.

{{< figure align=center src="images/Screenshot-2020-11-13-at-6.08.54-PM-1024x537.png" alt="wordpress plugin tutorial">}}  

## Overview

WordPress is an enterprise-level open source blogging platform. A **WordPress plugin** is a standalone set of code that enhances and extends the functionality of WordPress. By using any combination of PHP, HTML, CSS, JavaScript/jQuery. A plugin can add new features to any part of your website.

The functionality you can add to your website depends on what each specific plugin has been created to do. A WordPress plugin can be developed to do anything. From a small task to a full-fledge application that performs a number of operations and has its own interfaces. Plugins are different from your theme and work independently, using hooks, filters, shortcodes, widgets, and custom code to perform their functionality.

In this WordPress plugin tutorial, we’ll learn how to create our first WordPress plugin. The most important reason to create a plugin is that it allows you to separate your own code from the WordPress core code.

  * **[Requirements][1]**
  * **[Basics of Plugin Development][2]**
  * **[How to Create WP Plugin?][3]**
  * **[Conclusion][4]**

## Requirements {#requirements}

  * Latest version of WordPress
  * Understanding of PHP / MySQL 
  * Understanding of HTML / CSS and JavaScript

## Basics of Plugin Development {#basics}

Let’s take a moment to talk about some key aspects of plugin development. A solid understanding of how these concepts work will help you build easy-to-use and maintainable functionality.

### Actions

**Action Hooks** are a very useful tool in **WordPress** **Plugin** and they are used to perform functions (**actions**) in specific places of a theme or plugin. WordPress has dozens of actions defined throughout its core functionality, each action consisting of a unique name. For more details [read][5].

### Filters

A WordPress filter is a hook that accepts a variable (or series of variables) and returns them back after they have been modified. These filters are often used so that you have a way to manipulate default information. For more details [read][6].

### Shortcodes

Shortcodes are macros that can be used to perform dynamic interactions with the content. i.e creating a gallery from images attached to the post or rendering a video. As a result, they are a valuable way of keeping content clean and semantic while allowing end-users some ability to programmatically alter the presentation of their content. For more details [read][7].

### Widgets

Widgets are important because they give you another means of executing your plugin’s code while providing an easy-to-use interface. Since most themes will support one or more sidebars; adding your own widgets will give you quick access to display your information inside the theme.

## **How to Create WP Plugin?** {#create}

In this section of the WordPress plugin tutorial, all you need to do is create a folder and then create a single file with one line of content. Navigate to the **wp-content/plugins** folder, and create a new folder named **mytestplugin**. Inside this new folder, create a file named **mytestplugin.php**. Open the file in a text editor, and paste the following information in it:


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


Now, you can go into the back end to activate your plugin. That’s all, though this plugin doesn’t do anything. But, it is an active, functioning plugin. The best practice when developing a plugin is to neatly separate your code into appropriate files and folders. 

To demonstrate, let’s add functionality to our test plugin that tracks the popularity of our articles by storing how many times each post has been viewed.

### Storing Page Views


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


So far, so good in this WordPress plugin tutorial. But this function is never called, so it won’t actually be used. This is where hooks come in. You could go into your theme’s files and call the function manually from there. But then you would lose that functionality if you ever changed the theme, thus defeating the entire purpose. A hook, named **wp_head**, that runs just before the tag is present in most themes, so we can just set our function to run whenever **wp_head** runs, like so:


```
add_action("wp_head", "add_page_views");
```


### Showing the Page Views

Now we’ll create another function that returns the page views we already stored in the above function. Let’s have a look at the code:


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


So far, we have just retrieved the view count. Now, let’s show it. You might be thinking it must be complex. But, it’s very simple just like this:


```
echo get_page_views() . “view(s)”
```


## Conclusion {#conclusion}

This is the end of this WordPress plugin tutorial. By following this article and using only a handful of functions, we have created a basic plugin to track our most popular posts. We can improve it a lot, but the purpose was just to make you comfortable with the basics. Moreover, by learning some patterns of WordPress development (plugins, hooks, etc.), you are gaining skills that will serve you in non-WordPress environments as well. There are many other blog posts related to open source blogging platforms and open source CMS. that you can find in the explore section below. This blog post can really help you if you are looking to deploy an open source blogging platform for your business.

Finally, [containerize.com][8] is writing articles on further open source products. Therefore, please stay in touch with the [Blogging][9] and [Business Intelligence Software][10] categories for regular news and updates

## Explore

  * [How to Install Matomo For WordPress | WordPress Tutorial][11]
  * [Boost Your Leads with Free CiviCRM WordPress Integration][12]
  * [How To Install Plugin In WordPress | Vanilla Forum][13]
  * [Joomla vs Drupal | CMS Comparison in 2021][14]
  * [Things To Review Before Opting Open Source Software In 2021][15]

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
 [11]: https://blog.containerize.com/2021/10/26/how-to-install-matomo-for-wordpress-wordpress-tutorial/
 [12]: https://blog.containerize.com/2020/10/13/boost-your-leads-with-civicrm-wordpress-integration/
 [13]: https://blog.containerize.com/2021/01/13/how-to-a-install-plugin-in-wordpress-vanilla-forum/
 [14]: https://blog.containerize.com/2021/11/03/joomla-vs-drupal-cms-comparison-in-2021/
 [15]: https://blog.containerize.com/2021/09/29/things-to-review-before-opting-open-source-software-in-2021/