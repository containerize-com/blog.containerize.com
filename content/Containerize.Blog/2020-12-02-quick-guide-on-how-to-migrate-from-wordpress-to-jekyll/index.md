---
title: How to Migrate from WordPress to Jekyll
seoTitle: How to Migrate from WordPress to Jekyll
description: In this tutorial we will learn how to migrate your site from WordPress to Jekyll in quick and easy steps. Lets get started!
date: Wed, 02 Dec 2020 13:37:14 +0000
author: Assad Mahmood
summary: "In this tutorial we'll learn how to migrate your website from Wordpress to Jekyll and host it with Github free of cost"
url: /quick-guide-on-how-to-migrate-from-wordpress-to-jekyll/

categories: ['Blogging']

---
## In this tutorial we’ll learn how to migrate your website from WordPress to Jekyll and host it with Github free of cost

{{< figure align=center src="images/wordpress-to-jeykll.png" alt="wordpress to jekyll">}}  

Jeykll is an open source static site generator. It transform your plain text into static websites and blogs. It takes text written in your favorite markup (Markdown, Liquid, HTML / CSS) language and uses layouts to create a static website. Jekyll is blog aware and permalinks, categories, pages, posts, and custom layouts are all first-class citizens. One of the biggest benefits of Jekyll is that you can host your static website on Github pages and run your website or blog free of cost. So, WordPress to Jekyll migration can help you improve your website’s performance and speed.

In this blog post we’ll go through how to migrate your existing website or blog from WordPress to Jekyll for better speed and performance. So, Let’s get started!

  * **[Why to migrate?][1]**
  * **[Installation][2]**
  * **[Import WordPress posts and pages into][3]** 
  * **[Deployment with Github Pages][4]**
  * **[Conclusion][5]**

## Why to migrate? {#why}

In Jekyll, you can get a 100/100 [lighthouse score][6] because there are no database interactions. And, all the content is preprocessed and saved as HTML files. And, Jekyll will only make a minimal amount of HTTP requests. Hence, it’s super fast.

## Installation and Setting up Jekyll {#install}

Jekyll is written in Ruby. So, you have to install it first on your computer. This guide assumes that you already have Ruby installed on your computer. If not you can follow the [official guide][7].

First, we will “**jekyl**” and “**bundler**” Gems using the “**gem**” command which will be available after installing Ruby. Open the command line and run the following code.


```
gem install jekyll bundler
```


Then, run the following command to create a fresh site. This will create a **myblog** folder.


```
jekyll new myblog
```


Once installed, you can build the site and make it available on a local server.


```
bundle exec jekyll serve
```


Site will be available on http://localhost:4000. It also generates a “**_site**” folder in your folder thats what the final output of the site is.

## Import WordPress Pages and Posts {#import}

A non-official plugin for the WordPress is also available but we’ll follow the official method in this tutorial. If you want to give Wordpess Exporter Plugin a try you can [go here][8].

To import your posts from a self hosted wordpress website run the following command on your terminal.


```
ruby -r rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::WordPress.run({
      "dbname"         => "",
      "user"           => "",
      "password"       => "",
      "host"           => "localhost",
      "port"           => "3306",
      "socket"         => "",
      "table_prefix"   => "wp_",
      "site_prefix"    => "",
      "clean_entities" => true,
      "comments"       => true,
      "categories"     => true,
      "tags"           => true,
      "more_excerpt"   => true,
      "more_anchor"    => true,
      "extension"      => "html",
      "status"         => ["publish"]
    })'
```


This only imports post & page data & content. This importer only converts your posts and creates YAML front-matter. It does not import any layouts, styling, or external files (images, CSS, etc.).

## **Deployment with Github Pages** {#deploy}

So far, we created our Jekyll blog locally. Now we are going to deploy it on Github. First of all, we have to version control our site using [Git][9]. Run the following commands in the folder of the site.


```
git init
git add .
git commit -m "Initial Commit"
```


When installing Jekyll, it should automatically create a “**.gitignore**” file in the root with at least the following content.

Then, log in to Github and create a new repository yourname.github.io

Next, copy the HTTPS URL of the repository.

{{< figure align=center src="images/github-img.png" alt="github https url">}}  

Then, add the remote repository and push the code.


```
git remote add origin https://github.com/{yourname}/{yourname}.github.io.git
git push origin master
```


Done! Your site must now be available on yourname.github.io

## Conclusion {#conclusion}

In this article, we learned how to build a static blog with Jekyll sites. Then, we learned how to export your posts and pages from wordpress to jekyll. And finally, we deployed the final site to the github pages.

 [1]: #why
 [2]: #install
 [3]: #import
 [4]: #deploy
 [5]: #conclusion
 [6]: https://web.dev/performance-scoring/
 [7]: https://www.ruby-lang.org/en/documentation/installation/
 [8]: https://wordpress.org/plugins/jekyll-exporter/
 [9]: https://git-scm.com/