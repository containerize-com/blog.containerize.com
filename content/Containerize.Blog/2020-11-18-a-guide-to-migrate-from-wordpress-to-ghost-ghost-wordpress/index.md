---
title: A Guide to Migrate From WordPress to Ghost | WordPress Ghost
seoTitle: A Guide to Migrate From WordPress to Ghost | WordPress Ghost
description: "This tutorial is about how to migrate from WordPress to Ghost. We'll learn how to migrate your posts and pages to the Ghost from the existing WordPress website."
date: Wed, 18 Nov 2020 10:07:06 +0000
author: Assad Mahmood
summary: Ghost and WordPress are two leading open-source content publishing platforms. In this tutorial, we will learn how to migrate content from WordPress to Ghost.
url: /blogging/a-guide-to-migrate-from-wordpress-to-ghost-ghost-wordpress/

categories: ['Blogging']

---
## Ghost and WordPress are two leading open-source content publishing platforms. In this tutorial, we will learn how to migrate content from WordPress to Ghost.

{{< figure align=center src="images/ghostToWordpress-1024x536.png" alt="Migrate From WordPress to Ghost ">}}  

## Overview

In the past, we published many articles on topics such as [Boost Your Leads with Free CiviCRM WordPress Integration][1], [How to Integrate Discourse Forum with WordPress][2], and many more. Ghost is an emerging open source blogging platform. It is a Node.js CMS for content publishing and comes with a simple and clean interface that makes it easy to use. It’s a wonderful platform for beginners as it focuses on Markdown instead of WYSIWYG editing. The power and speed of Node.js make Ghost very fast. Due to the simplicity of the platform, lots of users are switching from other platforms. Since WordPress is the number one platform for content management.

Hence, more users **migrate from WordPress to Ghost**. There is a lot of content that includes media files, comments, posts and etc. There are plugins available that help you migrate content from WordPress to Ghost. The major benefit of adopting Ghost is that it focuses on search engine optimization. In this WordPress Ghost tutorial, we’ll go through all the migration steps using Official WordPress Export Plugin.

  * **[A briedf intro of WordPress][3]** 
  * **[What is Ghost?][4]**
  * **[Requirements][5]**
  * **[Export contents from Wrodpress using Plugin][6]**
  * **[Import contents into Ghost][7]**
  * **[Conclusion][8]**

## **A briedf intro of WordPress** {#wp}

[WordPress][9] is a leading open source blogging platform that has powered a huge number of websites. This free blogging software is self-hosted, multilingual, and provides support for many languages. Moreover, the development community of WordPress is highly vibrant and has developed a gigantic pool of useful plugins that are available easily. These plugins address almost every use case of your business website. in addition, it is written in PHP and comes with comprehensive documentation regarding development and deployment. All the source code is available on Github. Further, this blogging platform is highly extensible, configurable, and provides integrations with third-party applications. There is a very logical and easy-to-understand dashboard where users can drag & drop elements to modify the look and feel of their websites. 

## **What is Ghost?** {#ghost}

[Ghost][10] is another popular open source blogging platform. This is one of the most widely used content publishing platforms that are highly adopted by developers and site owners. In addition, Ghost is highly SEO friendly and comes with built-in themes, forms, email newsletters, and subscriptions. This free blogging software is written in JavaScript and all the documentation is available regarding development and deployment. 

## Requirements {#requirements}

In the section of the WordPress Ghost tutorial, we will see the requirements needed to migrate from WordPress to Ghost. With the official WordPress Export Plugin, you can easily migrate your content from WordPress to Ghost. In this tutorial, we’ll guide you on how to export your content from WordPress to a Ghost site. So, you must have a working installation of WordPress and WordPress **Export Plugin** Installed.

## Export contents from WordPress {#export}

First of all, you’ll have to install the plugin. Follow the following steps to install the plugin

  * Click on **Plugins** from the sidebar menu
  * Click **Add New** and use the search field in the top right corner to search for **Ghost Export**
  * **Install** and **Activate** the plugin by “**Ghost Foundation**“

{{< figure align=center src="images/ghost-activate-plugin.png" alt="Install and Activate Ghost Plugin for WordPress">}}  

  * Once the plugin is activated navigate to **Tools** from side menu
  * Click **Export to Ghost** with the sidebar menu.
  * You’ll be provided with a guide on how to prepare your WordPress content for Ghost.
  * Since, Ghost uses tags instead of categories so plugin will help you convert Categories into Tags.

<blockquote class="wp-block-quote">
  <p>
    The following steps will permanently change the content structure of your WordPress site. If you are unsure of making this change please use the standard WordPress Export tool under <strong>Tools</strong> > <strong>Export</strong> to create a full backup of all your content.
  </p>
</blockquote>

  * Navigate to **Import** in the sidebar menu
  * Click **Run Importer** under the **Taxonomy Converter** import item.
  * Use the checkboxes to select the categories you want to import into your Tags and therefore into your Ghost site.
  * Then click **Convert Categories to Tags**.
  * Navigate back to **Export to Ghost** within **Tools** in the sidebar menu.
  * Click the **Download Ghost File** button. You’ll have downloaded a zip file containing all your content.

## Import contents into Ghost {#import}

In this section of the WordPress Ghost tutorial, we will implement the steps to import contents into Ghost.

  * Log into Ghost admin and navigate to **Labs** view.
  * Click the **Choose file** button within the **Import content** option and select your exported zip file
  * Click **Import**. All your content will then be imported into your Ghost site.

<pre class="wp-block-verse">At this time, Ghost does not have any built in commenting system. The most popular alternative is Disqus.</pre>

## Conclusion {#conclusion}

This brings us to the end of this blog post. In this WordPress Ghost tutorial, we learned how to prepare your WordPress content ready for migration to Ghost. We used the official Ghost Migration Plugin by the Ghost Foundation to perform migrations. In addition, this blog post will surely help you if you are looking to migrate from WordPress to Ghost as we have covered all the steps needed. Further, there are many open source content publishing platforms and tutorial articles mentioned in the “Explore” section below. However, both of these open source blogging platforms are the top leading software that offer enterprise-level features to meet your business websites needs. 

Finally, [containerize.com][11] has been writing new blog posts on further open source software. Therefore, please stay connected with [this][12] platform for regular updates.

## Explore

You may find the following links relevant:

  * [WordPress][9]
  * [Jekyll][13]
  * [Discourse][14]
  * [Ghost][10]
  * [How to Dockerize WordPress with Docker Compose][15]
  * [How to Enable GZIP Compression in WordPress for Better PagSpeed and SEO][16]
  * [Boost Your Leads with Free CiviCRM WordPress Integration][1]
  * [Automate ticketing system using WordPress and osTicket][17]
  * [How to Integrate Discourse Forum with WordPress][2]
  * [Increase Website Search Traffic by Following Top 7 SEO Blogs][18]
  * [How to Build Your Website with WordPress and Gatsby][19]

 [1]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
 [2]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/

 [3]: #wp
 [4]: #ghost
 [5]: #requirements
 [6]: #export
 [7]: #import
 [8]: #conclusion
 [9]: https://products.containerize.com/blogging/wordpress/
 [10]: https://products.containerize.com/blogging/ghost/
 [11]: https://www.containerize.com/
 [12]: https://blog.containerize.com/
 [13]: https://products.containerize.com/blogging/jekyll/
 [14]: https://products.containerize.com/discussion-forum/discourse/
 [15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
 [16]: https://blog.containerize.com/blogging/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
 [17]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/

 [18]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/

 [19]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/