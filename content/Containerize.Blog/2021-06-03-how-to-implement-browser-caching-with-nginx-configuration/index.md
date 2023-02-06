---
title: How To Implement Browser Caching with Nginx Configuration
seoTitle: How To Implement Browser Caching with Nginx Configuration
description: The faster a website loads, the more likely a visitor is to stay. In this tutorial, we will Implement Browser Caching with Nginx Configuration.
date: Thu, 03 Jun 2021 11:46:56 +0000
author: Assad Mahmood
summary: The faster a website loads, the more likely a visitor is to stay. This article guides you on how to implement Browser Caching with Nginx Configurations.
url: /uncategorized/how-to-implement-browser-caching-with-nginx-configuration/
categories: ['Uncategorized', 'Web Server Solution Stack']

---
## The faster a website loads, the more likely a visitor is to stay. This article guides you on how to implement Browser Caching with Nginx Configurations.

{{< figure align=center src="images/how-to-implement-browser-caching-with-nginx-configuration-1.png" alt="How to Implement Browsr Caching with Nginx Configuration">}}  

In our Nginx’s Tutorial Series, we have covered [How to use Nginx as Load Balancer][1], [Configure Nginx as Reverse Proxy][2], [Use Multiple PHP Versions with Nginx][3], and [Convert htaccess Rewrite Rules to Nginx Rewrite Directives][4]. In Today’s article, we are covering a very important topic that helps businesses to improve their user’s experience by leveraging browser caching. In this tutorial, we will guide you on how to implement browser caching with Nginx Configuration using Nginx’s Header Module. Let’s get started!

  * **[Leverage Browser Caching][5]**
  * [**Nginx Header Module**][6]
  * [**E-Tage and If-None-Match**][7]
  * [**Leverage Browser Caching with Nginx Configuration**][8]
  * [**Conclusion**][9]

## Leverage Browser Caching {#browser-caching}

The faster a website loads, the more likely a visitor is to stay on the website. Websites with lots of images and interactive content are loaded in the background make the website opening a complex task. It consists of requesting many different files from the server one by one. Minimizing the quantity of these requests is one way to speed up your website.

One method for improving website performance is _Leveraging browser caching_. Browser Caching plays a huge role in the cache mechanism for increasing page speed. Static files like CSS, JS, Jpeg, Png, etc that are used for the website can be saved on the visitor’s computer for future access. Whenever the visitor encounters a new page on your website, the above files can be accessed from the visitor’s computer instead of your provided server, which will tremendously increase the page load speed. 

## Nginx’s Header Module {#header-module}

The _ngx\_http\_headers_module_ module allows adding the “_Expires_” and “_Cache-Control_” header fields, and arbitrary fields, to a response header. We can use the header module to set these HTTP headers. The header module is a core Nginx module, which means it doesn’t need to be installed separately to be used. 

Example configuration looks like this:


```
expires    24h;
expires    modified +24h;
expires    @24h;
expires    0;
expires    -1;
expires    epoch;
expires    $expires;
add_header Cache-Control private;
```


## E-Tag and If-None-Match {#etage}

Let’s assume we have some test files with different extensions e.g test.html, test.jpg, test.css, and test.js. By default, all files will have the same default caching behavior. To check the Response Headers of a file using the following command to requests a file from our local Nginx server and shows the response headers:


```
curl -I http://localhost/test.html
```



```
Output: Nginx response headers
HTTP/1.1 200 OK
Server: nginx/1.14.1
Date: Fri, 03 March 2021 18:23:09 GMT
Content-Type: text/html
Content-Length: 1024
Last-Modified: Fri, 03 March 2021 18:23:09 GMT
Connection: keep-alive
<strong>ETag: "501c3b6f-401"</strong>
Accept-Ranges: bytes
```


In the second to last line, you will find the _ETag_ header, which contains a unique identifier for this particular revision of the requested file. If you execute the last _curl_ command repeatedly, you will find the exact same ETag value.

When using a web browser, the _ETag_ value is stored and sent back to the server with the _If-None-Match_ request header when the user refreshes the page or the same file is required by the browser for any reason.

We can simulate this on the command line with the following command.


```
curl -I -H 'If-None-Match: "501c3b6f-401"' http://localhost/test.html
```


Note the unique identifier, it must match with the response value we got from our previous _curl_ call. Response will be different this time:


```
Output: Nginx response headers
<strong>HTTP/1.1 304 Not Modified</strong>
Server: nginx/1.14.1
Date: Thu, 04 Feb 2021 18:24:05 GMT
Last-Modified: Thu, 04 Feb 2021 18:22:39 GMT
Connection: keep-alive
<strong>ETag: "501c3b6f-401"</strong>
```


This time, Nginx will respond with **304 Not Modified**. It won’t send the file over the network again; instead, it will tell the browser that it can reuse the file it already has downloaded locally. This is useful as it reduces network traffic. But the browser still has to make an HTTP call to get a response from the server, which still takes some time.

## Leverage Browser Caching with Nginx Configuration {#nginx-configuration}

In our previous example we explained how the E-Tag and If-None-Match helps you reduce network traffic. But problem with `ETag` is that the browser always sends a request to the server asking if it can reuse its cached file. And this still takes time to make the request and receive the response.

Now with the help of Nginx’s Header Module  we will make the browser to cache some files locally without explicitly asking the server.

Add the following 3 lines in your NGINX configuration file to cache static content in NGINX


```
expires 30d;
add_header Pragma "public";
add_header Cache-Control "public";
```


The first line instructs NGINX to cache content in the client browser for 30 days (30d). After this period, any new request from the user will result in cache re-validation and update from the client browser.

You can place the above lines in _location_, _server_ or _http_ blocks.


```
location /static/ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}
```


When you place them in location block, only the content served by that location will be cached. In the above case, only requests to /static/ will be cached.

If you want to cache specific file types, you can do so using location block.


```
location ~* \.(js|jpg|gif|png|css)$ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}

```


In the above example, we are caching various file types such as js, jpg, css, etc.

Similarly, you can place cache configuration in _server_ block before any location block. In this case, all responses from this server will be cached. Or you may place it in the _HTTP_ block, in this case, all server requests supported by the Nginx configuration file will be cached.

## Conclusion {#conclusion}

The Nginx’s headers module can be used to add any arbitrary headers to the response, but properly setting Cache-Control headers is one of its most useful applications. It helps you improve the performance of the website, especially for the users on networks with higher latency, like mobile carrier networks. In this tutorial, we learned how to leverage browser caching with Nginx Configuration. Hope this will help you improve your user’s experience on your website.

## Explore

  * [How to Install Multiple PHP Versions with Nginx on Ubuntu][3]
  * [How to Setup and Configure Nginx as Reverse Proxy][2]

 [1]: https://blog.containerize.com/2021/04/30/how-to-use-nginx-as-load-balancer-for-your-application/
 [2]: https://blog.containerize.com/2021/05/07/how-to-setup-and-configure-nginx-as-reverse-proxy/
 [3]: https://blog.containerize.com/2021/05/21/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
 [4]: https://blog.containerize.com/2021/05/28/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
 [5]: #browser-caching
 [6]: #header-module
 [7]: #etag
 [8]: #nginx-configuration
 [9]: #conclusion