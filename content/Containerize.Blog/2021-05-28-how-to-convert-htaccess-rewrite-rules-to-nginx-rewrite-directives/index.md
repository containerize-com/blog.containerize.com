---
title: How to Convert htaccess Rewrite Rules to Nginx Rewrite Directives
seoTitle: How to Convert htaccess Rewrite Rules to Nginx Rewrite Directives
description: "Nginx does not support .htaccess rewrite rules, so developers must convert those rules to Nginx Rewrite directives. Let's learn how to perform this conversion."
date: Fri, 28 May 2021 13:54:20 +0000
author: Assad Mahmood
summary: "Nginx does not support htaccess rewrite rules, and developers require to convert those rules to Nginx Rewrite directives. Let's learn how to do this conversion."
url: /web-server-solution-stack/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
categories: ['Web Server Solution Stack']

---
## Nginx does not support htaccess rewrite rules, and developers require to convert those rules to Nginx Rewrite directives. Let’s learn how to do this conversion.

{{< figure align=center src="images/htaccess-rewrite-rules-to-nginx-location-directives.png" alt="Convert .htaccess Rewrite Rules to Nginx Directives">}}  

In our last tutorial, we learned [How to Install Multiple PHP Versions with Nginx on Ubuntu][1]. Apache is one of the most popular webservers but lately, Nginx has established itself as a competitor to Apache. But Nginx doesn’t support htaccess rewrite rules. So, in this article, we will learn how to convert htaccess rewrite rules to Nginx rewrite directives. Let’s get started!

  * **[Nginx Rewrite Rules][2]**
  * [**.htaccess Rewrite Rules**][3]
  * [**Convert .htaccess Rewrite Rules to Nginx Rewrite Directives**][4]
  * [**Conclusion**][5]

## Nginx Rewrite Rules {#nginx}

Rewrite rules change part or all of the URL in a client request, usually to inform clients that the resource they’re requesting now resides at a different location, or to control the flow of processing within NGINX. For example to forward requests to an application server when content needs to be generated dynamically. The try_files directive is often used for this purpose.

The two directives for general‑purpose NGINX rewrite are _return_ and _rewrite_, and the _try_files directive_ is a handy way to direct requests to application servers.

The return directive is the simpler of the two general‑purpose directives. You enclose the return in a server or location context. 

For example, here’s a very simple example that redirects clients to a new domain name using the _return_ directive


```
server {
    listen 80;
    listen 443 ssl;
    server_name www.old-name.com;
    return 301 $scheme://www.new-name.com$request_uri;
}
```


But what if you need to perform complicated distinctions between URLs, capture elements in the original URL, or change or add elements in the path? You can use the _rewrite_ directive in such cases. 

Here’s a sample NGINX rewrite rule that uses the rewrite directive. It matches URLs that begin with the string /songs and then includes the /media/ or /audio/ directory somewhere later in the path. It replaces those elements with /mp3/ and adds the appropriate file extension, .mp3 or .ra. The $1 and $2 variables capture the path elements that aren’t changing. As an example, /download/cdn-west/media/file1 becomes /download/cdn-west/mp3/file1.mp3. If there is an extension on the filename (such as .flv), the expression strips it off and replaces it with .mp3.


```
server {
    # ...
    rewrite ^(/songs/.*)/media/(\w+)\.?.*$ $1/mp3/$2.mp3 last;
    rewrite ^(/songs/.*)/audio/(\w+)\.?.*$ $1/mp3/$2.ra  last;
    return  403;
    # ...
}
```


## .htaccess Rewrite Rules {#apache}

The .htaccess file controls a number of ways that a website can be accessed, blocked, and redirected. It does this using a series of one or more .htaccess rewrite rules. These rewrites are executed by Apache’s mod_rewrite module.

mod_rewrite provides a way to modify incoming URL requests, dynamically, based on regular expression rules. This allows you to map any URLs onto your internal URL structure in any way you like. This is also used to make your external URLs clean and then map them onto ugly-looking internal URLs.

For example, following .htaccess rewrite rule redricts a non www url to a www url. 


```
RewriteEngine On
RewriteCond %{HTTP_HOST} ^yourdomain.com [NC]
RewriteRule ^(.*)$ http://www.yourdomain.com/$1 [L,R=301]
```


## Convert .htaccess Rewrite Rules to Nginx Rewrite Directives {#convert}

As we showed in our example above for redirecting a non-www URL to a www URL, let’s convert the very same .htaccess rewrite rule into Nginx rewrite directive.


```
server {
    listen      80;
    server_name yourdomain.com;
    return      301 http://www.yourdomain.com$request_uri;
}
 
server {
    listen      80;
    server_name www.yourdomain.com;
    # ...
}
```


So here we created two separate _server_ blocks, one for _yourdomain.com_ and the other for _www.yourdomain.com_. And in the _server_ block for _yourdomain.com_ we using the _return_ directive to redirect non-www URL to www URL.

The same redirection we performed with the return directive, can also be done with the rewrite directive but is not recommended.


```
server {
    listen      80;
    server_name www.yourdomain.com yourdomain.com;
    if ($http_host = yourdomain.com) {
        rewrite (.*) http://www.yourdomain.com$1;
    }
    # ...
}
```


For the sake of more clarity let’s convert WordPress htaccess rules into Nginx try_files directive.

[WordPress.org distributes][6] a basic default **.htaccess** file with the following. htaccess rewrite rules that enable pretty permalinks:


```
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
```


Here’s the converted Nginx try_files directive


```
location / {
    try_files $uri $uri/ /index.php?$args;
}
```


## Conclusion {#conclusion}

In this tutorial, we explored Apache’s .htaccess rewrite rules and how we can convert those .htaccess rewrite rules into Nginx rewrite directives. We further explored different Nginx directives which can be used to rewrite URLs. We also gave example rewrite rules for both Nginx and Apache. Hope the tutorial is helpful for you.

## Explore

  * [How to Install Multiple PHP Versions with Nginx on Ubuntu][1]
  * [How to Setup and Configure Nginx as Reverse Proxy][7]

 [1]: https://blog.containerize.com/2021/05/21/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
 [2]: #nginx
 [3]: #apache
 [4]: #convert
 [5]: #conclusion
 [6]: https://codex.wordpress.org/htaccess
 [7]: https://blog.containerize.com/2021/05/07/how-to-setup-and-configure-nginx-as-reverse-proxy/