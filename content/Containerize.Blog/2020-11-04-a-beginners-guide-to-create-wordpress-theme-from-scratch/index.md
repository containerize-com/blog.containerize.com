---
title: A Beginners Guide to Create WordPress Theme from Scratch
seoTitle: A Beginners Guide to Create WordPress Theme from Scratch
description: Learn how to create wordpress theme from scratch painlessly. In this tutorial we have explained the process in easy steps .
date: Wed, 04 Nov 2020 02:18:25 +0000
author: Assad Mahmood
summary: 'Step 5: styles.css File'
url: /blogging/a-beginners-guide-to-create-wordpress-theme-from-scratch/
aliases: 
    -  /2020/11/04/a-beginners-guide-to-create-wordpress-theme-from-scratch/
categories: ['Blogging']

---
{{< figure align=center src="images/Beginners-Guide-To-Create-WordPress-Theme-From-Scratch-1024x536.png" alt="A Beginners Guide to Create WordPress Theme from Scratch">}} 

How to Create WordPress Theme is amongst the top queries in google search. Creating a WordPress theme can be simple if you know basic HTML, CSS and JavaScript. However, if you are new to WordPress then this tutorial is for you. All you have to do is follow the steps mentioned. So, let’s read this guide and learn how to create WordPress theme from scratch.

  * [Requirements][1]
  * [Step by Step Guide][2]

### Requirements {#requirements}

First and most important thing you need to do is, install WordPress. WordPress is well-known for its ease of installation. It’s a simple process and can be done easily by yourself by following the [guide][3].

### How to Create WordPress Theme; Step by Step Guide {#guide}

For WordPress theme, everything will be done in the **wp_content** directory only. Just make a new theme subfolder in the **wp_content → Themes folder.** Let’s assume you name it** “CustomTheme”**.

The second thing is to decide the layout of the theme. Here, the tutorial is showing the basic layout consisting of **Header, Main Area, Footer, Sidebar**.

Basically, WordPress needs only 2 files i.e. style.css and index.php. But, for this layout, you need **5 files**, as follows;

  * **header.php – **contains the code for the header section of the theme.
  * **index.php – **contains the code for the Main Area and will specify where the other files will be included. This is the main file of the theme.
  * **sidebar.php – **contains the information about the sidebar.
  * **footer.php – **handles the footer section.
  * **style.css – **responsible for the styling of your theme.
  * **bootstrap.css – **no separate CSS code is required; highly responsive.
  * **bootstrap.js – **provides its own js for the navigation bar, or tabs, etc.

**bootstrap.js** and **bootstrap.css** needs to be downloaded from bootstrap package and copied into the **theme** folder.

Here are the steps to follow to setup theme

### Step 1: header.php File

Put the following code in header.php file.


```
<html>
<head>
<title>Custom Theme</title>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri().'/js/jquery.js'; ?>">
</script>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri().'/js/jquery-ui.min.js'; ?>">
</script>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri().'/js/bootstrap.js'; ?>">
</script>
<link  href="<?php echo get_stylesheet_directory_uri().'/css/bootstrap.css'; ?>">
<link  href="<?php bloginfo('stylesheet_url'); ?>">
</head>

<body>

<div id="ttr_header" class="jumbotron">
<h1>HEADER</h1>
</div>
<div class="container">
```


This file Header.php contains the code for the header part in which the js and style file is linked. It displays the header of the page.

### Step 2: index.php File

Put the following code in the main file index.php


```
<?php get_header(); ?>
<div id="ttr_main" class="row">
<div id="ttr_content" class="col-lg-8 col-sm-8 col-md-8 col-xs-12">

<div class="row">
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
<div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
<h1><?php the_title(); ?></h1>
<h4>Posted on <?php the_time('F jS, Y') ?></h4>
<p><?php the_content(__('(more...)')); ?></p>
</div>
<?php endwhile; else: ?>
<p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
<?php endif; ?>
</div>
</div>
<?php get_sidebar(); ?>
</div>

<?php get_footer(); ?>
```


The above code displays the main content of the Post, Sidebar and Footer.

### Step 3: sidebar.php File

Add the following code in sidebar.php


```
<div id="ttr_sidebar" class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
<h2 ><?php _e('Categories'); ?></h2>
<ul > <?php wp_list_cats('sort_column=namonthly'); ?> </ul>
<h2 ><?php _e('Archives'); ?></h2>
<ul > <?php wp_get_archives(); ?> </ul>
</div>
```


In the above code, internal WordPress functions are called to display different Categories, Archives of Posts.

### Step 4: footer.php File

Add the below code lines to the footer.php file:


```
<div id= "ttr_footer">
<h1>FOOTER</h1>
</div>
</div>
</body>
</html>
```


## Step 5: styles.css File

Add the following lines to the style.css file


```
body
{
text-align: left;
}
#ttr_sidebar
{
border-left: 1px solid black;
}
#ttr_footer
{
width: 100%;
border-top: 1px #a2a2a2 solid;
text-align: center;
}
.title
{
font-size: 11pt;
font-family: verdana;
font-weight: bold;
}
```


After following all the steps above, you’ll have a basic working WordPress theme. You can further modify it to make it more beautiful and fit for your requirements. 

### Conclusion

In this tutorial we have explained how to create wordpress theme in simple and easy steps. After reading and following the steps creating a WordPress theme is no more difficult task now. But, obviously this tutorial stick to very basic setup and to enhance on top of it you’ll have to learn more about HTML, CSS, JS and PHP.

 [1]: #requirements
 [2]: #guide
 [3]: https://products.containerize.com/blogging/wordpress