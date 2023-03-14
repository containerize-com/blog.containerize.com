---
title: How To Optimize Your Website using gzip compression in Nginx
seoTitle: How To Optimize Your Website using gzip compression in Nginx
description: In this article, we will discuss a method to optimize your website transfer speeds by reducing the file sizes through gzip compression in Nginx.
date: Fri, 11 Jun 2021 12:46:52 +0000
author: Assad Mahmood
summary: This tutorial guides you on how to optimize your website performance and make it fast by reducing the file sizes using gzip compression in Nginx.
url: /how-to-optimize-your-website-using-gzip-compression-in-nginx/

categories: ['Web Server Solution Stack']

---
## This tutorial guides you on how to optimize your website performance and make it fast by reducing the file sizes using gzip compression in Nginx.

{{< figure align=center src="images/enable-gzip-compression-in-nginx.png" alt="How to Enable Gzip Compression in Nginx">}}  

This article is in continuation of our series of tutorials about Nginx. So far we have covered how to use Nginx as Load Balancer, How to use Nginx as Reverse Proxy. And now this tutorial covers another demanding question “How To Optimize Your Website using gzip compression in Nginx”. In this tutorial, we’ll guide you step-by-step on how to enable gzip compression in Nginx. So, let’s get started!

  * [Website Optimization with Compression][1]
  * [What is gzip Compression?][2]
  * [How does gzip Compression Work?][3]
  * [Enable gzip compression in Nginx][4]
  * [Verify gzip compression][5] 
  * [Conclusion][6]

## Website Optimization with Compression {#optimize}

A website’s performance depends on a number of factors. One of the factors it depends on partially is the size of all the files that a user’s browser must download from your server. Reducing or compressing the size of those transmitted files can make your website load faster for the user. It can also reduce the bill for your website in case if you pay for the bandwidth usage on metered connections. So compression can play a very vital role in your website optimization.

As Google and other search engines are considering a website’s User Experience (UX) a critical factor in their ranking algorithms. It has become more important to improve and optimize your website for top ratings. Among the most important factors to pay attention to are, page speed and loading times. And, the fastest and easiest way to improve your website speed and performance is to enable gzip compression on your website.

## What is gzip compression? {#what-gzip}

GZIP is a **file format and software application** used for file compression and decompression. Web servers or other software use GZIP compression to compress data files before it is sent to users’ browsers. This reduces the file download time which makes your website faster. All modern browsers support GZIP compression.

It’s also important to note that GZIP compression must be enabled on your web server before you can enable file and folder compression. Shortly, we’ll see how to enable gzip compression in nginx.

## How does gzip compression work? {#how-gzip}

Gzip, the most popular compression method, is used by web servers and browsers to compress and decompress content as it’s transmitted over the Internet. It is used mostly on code and text files, gzip can reduce the size of JavaScript, CSS, and HTML files by up to 90%. 

By default, Gzip compression does not compress images or videos. This is why most website speed test tools like Google Pagespeed Insights highly recommend enabling gzip compression.

When a web server receives a request for a web page, the webserver checks the header of the request to check if the browser supports Gzip. If so, the server generates the markup for the page before applying gzip. Gzip converts the HTML markup into a compressed data which is then delivered to the end-user. When the end-user receives the compressed data, their browser decompresses it.

## Enable gzip compression in Nginx {#enable-gzip}

To change the Nginx gzip configuration, open the main Nginx configuration file in “_vi_” or your favorite text editor:


```
sudo vi /etc/nginx/nginx.conf
```


Find the _gzip_ settings section, which looks like this:


```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

# gzip_vary on;
# gzip_proxied any;
# gzip_comp_level 6;
# gzip_buffers 16 8k;
# gzip_http_version 1.1;
# gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
. . .
```


As you can see gzip is enabled by default with _gzip on;_ But there are other commented out gzip settings. 

We can enable _gzip_types_ setting to enable compression on file types we want to compress. For example


```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_buffers 16 8k;
gzip_http_version 1.1;
gzip_min_length 256;
gzip_types
  application/atom+xml
  application/geo+json
  application/javascript
  application/x-javascript
  application/json
  application/ld+json
  application/manifest+json
  application/rdf+xml
  application/rss+xml
  application/xhtml+xml
  application/xml
  font/eot
  font/otf
  font/ttf
  image/svg+xml
  text/css
  text/javascript
  text/plain
  text/xml;
. . .
```


Now restart nginx to take new settings in effect.

## Verify gzip compression {#verify}

Now that we have enabled gzip compression let’s verify it.


```
curl -H "Accept-Encoding: gzip" -I http://localhost/test.html

```


The response will stay the same since compression has already been enabled for that filetype:


```
Output
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Mon, 08 Feb 2021 11:03:41 GMT
Content-Type: text/html
Last-Modified: Mon, 08 Feb 2021 11:03:41 GMT
Connection: keep-alive
ETag: W/"6222dc8d-500"
<strong>Content-Encoding: gzip</strong>
```


## Conclusion {#conclusion}

In this article we have learned that you can use the Nginx gzip module to speed up file transfers. We showed you step by step how to enable gzip compression in Nginx using gzip module. The official documentation for [gzip module][7] lists other configuration directives that you may want to take a look at. Hope this tutorial help you optimize your website performance and speed.

## Explore

  * [How to Install Multiple PHP Versions with Nginx on Ubuntu][8]
  * [How to Setup and Configure Nginx as Reverse Proxy][9]

 [1]: #optimize
 [2]: #what-gzip
 [3]: #how-gzip
 [4]: #enable-gzip
 [5]: #verify-gzip
 [6]: #conclusion
 [7]: https://nginx.org/en/docs/http/ngx_http_gzip_module.html
 [8]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/

 [9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
