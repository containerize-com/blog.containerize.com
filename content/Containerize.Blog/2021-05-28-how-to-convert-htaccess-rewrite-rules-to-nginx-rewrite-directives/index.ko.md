---
title: "htaccess 재 작성 규칙을 nginx 재 작성 지시문으로 변환하는 방법" 
seoTitle: "htaccess 재 작성 규칙을 nginx 재 작성 지시문으로 변환하는 방법" 
description: "Nginx는 .htaccess rewrite 규칙을 지원하지 않으므로 개발자는 해당 규칙을 Nginx 재 작성 지시문으로 변환해야합니다. 이 변환을 수행하는 방법을 배우겠습니다." 
date: Fri, 28 May 2021 13:54:20 +0000
author: Assad Mahmood
summary: "Nginx는 htaccess 다시 쓰기 규칙을 지원하지 않으며 개발자는 해당 규칙을 Nginx 재 작성 지시문으로 변환해야합니다. 이 변환을 수행하는 방법을 배우겠습니다." 
url: /ko/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
categories: ['Web Server Solution Stack']
---

## nginx는 htaccess rewrite 규칙을 지원하지 않으며 개발자는 해당 규칙을 Nginx 재 작성 지시문으로 변환해야합니다. 이 변환을 수행하는 방법을 배우겠습니다.

{{< figure align=center src="images/htaccess-rewrite-rules-to-nginx-location-directives.png" alt=".htaccess를 Nginx 지시문으로 전환하십시오">}}

마지막 튜토리얼에서 우리는 [Ubuntu에서 Nginx를 사용하여 여러 PHP 버전을 설치하는 방법][1]을 배웠습니다. Apache는 가장 인기있는 웹 서버 중 하나이지만 최근 Nginx는 Apache의 경쟁자로 자리 매김했습니다. 그러나 Nginx는 htaccess rewrite 규칙을 지원하지 않습니다. 따라서이 기사에서는 htaccess rewrite 규칙을 Nginx 재 작성 지시문으로 변환하는 방법을 배웁니다. 시작하자!
  * **[nginx 재 작성 규칙][2]**
  *[**. HTACCESS 재 작성 규칙**][3]
  *[ **변환 .htaccess 재 작성 규칙을 nginx 재 작성 지시문으로 재 작성** ][4]
  *[ **결론** ][5]

## nginx 규칙을 다시 작성   {#nginx}
규칙을 다시 작성하면 클라이언트 요청의 URL의 일부 또는 모든 URL을 변경합니다. 일반적으로 고객에게 현재 요청하는 리소스가 다른 위치에 상주하거나 Nginx 내 처리 흐름을 제어하도록 고객에게 알리십시오. 예를 들어 컨텐츠를 동적으로 생성 해야하는 경우 애플리케이션 서버로 요청을 전달합니다. try_files 지시문은 종종이 목적으로 사용됩니다.
일반적인 Nginx 재 작성에 대한 두 가지 지침은 _return_ 및 _rewrite_이며 _Try_Files Directive_는 애플리케이션 서버에 요청을 지시하는 편리한 방법입니다.
반환 지시문은 두 가지 일반적인 지시문 중 더 간단합니다. 서버 또는 위치 컨텍스트에서 반환을 동봉합니다.
예를 들어 다음은 _return_ Directive를 사용하여 클라이언트를 새 도메인 이름으로 리디렉션하는 매우 간단한 예입니다.
```
server {
    listen 80;
    listen 443 ssl;
    server_name www.old-name.com;
    return 301 $scheme://www.new-name.com$request_uri;
}
```
그러나 URL 간의 복잡한 차이를 수행하거나 원래 URL의 요소를 캡처하거나 경로에서 요소를 변경하거나 추가 해야하는 경우 어떻게해야합니까? 이 경우 _rewrite_ 지시문을 사용할 수 있습니다.
다음은 다시 작성 지시문을 사용하는 샘플 NGINX 재 작성 규칙입니다. 문자열 /곡으로 시작하는 URL과 일치 한 다음 /미디어 /또는 오디오 /디렉토리가 나중에 경로의 어딘가에 포함됩니다. 해당 요소를 / mp3 /로 대체하고 적절한 파일 확장자 인 .mp3 또는 .ra를 추가합니다. $ 1 및 $ 2 변수는 변하지 않는 경로 요소를 포착합니다. 예를 들어,/download/cdn-west/media/file1은/download/cdn-west/mp3/file1.mp3가됩니다. 파일 이름 (예 : .flv)에 확장이있는 경우 표현식이 제거되어 .mp3로 대체합니다.
```
server {
    # ...
    rewrite ^(/songs/.*)/media/(\w+)\.?.*$ $1/mp3/$2.mp3 last;
    rewrite ^(/songs/.*)/audio/(\w+)\.?.*$ $1/mp3/$2.ra  last;
    return  403;
    # ...
}
```

## .htaccess 규칙   {#apache} 재 작성
.htaccess 파일은 웹 사이트에 액세스, 차단 및 리디렉션 할 수있는 여러 가지 방법을 제어합니다. 일련의 하나 이상의 .htaccess rewrite 규칙을 사용하여이를 수행합니다. 이 다시 쓰기는 Apache의 mod_rewrite 모듈에 의해 실행됩니다.
mod_rewrite는 정규 표현 규칙에 따라 들어오는 URL 요청을 동적으로 수정하는 방법을 제공합니다. 이를 통해 원하는 방식으로 모든 URL을 내부 URL 구조에 매핑 할 수 있습니다. 이것은 또한 외부 URL을 깨끗하게 만들고 추악한 내부 URL에 매핑하는 데 사용됩니다.
예를 들어, .htaccess rewrite 규칙에 따라 www URL이 아닌 www URL을 Redricts합니다.
```
RewriteEngine On
RewriteCond %{HTTP_HOST} ^yourdomain.com [NC]
RewriteRule ^(.*)$ http://www.yourdomain.com/$1 [L,R=301]
```

## 변환 .htaccess Recrite Rules Rewrite Nginx Rewrite 지시문   {#convert}
위의 예에서 비 WWW URL을 www URL로 리디렉션하기 위해 보여 주듯이, 동일한 .htaccess rewrite 규칙을 Nginx Rewrite Directive로 변환하겠습니다.
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
그래서 여기서 우리는 _yourdomain.com_ 용으로, 다른 하나는 _www.yourdomain.com_에 대해 두 개의 별도 _server_ 블록을 만들었습니다. 그리고 _yourdomain.com_의 _server_ 블록에서 _return_ 지시문을 사용하여 비 www URL을 www url로 리디렉션합니다.
우리가 반환 지시문으로 수행 한 것과 동일한 리디렉션은 다시 쓰기 지시문으로 수행 할 수 있지만 권장되지 않습니다.
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
보다 명확성을 위해 WordPress HTAccess 규칙을 Nginx Try_Files 지시문으로 변환하겠습니다.
[WordPress.org는 배포][6] 기본 기본값 **. htaccess** 파일이 다음과 같습니다. htaccess regrest permalinks를 가능하게하는 규칙을 다시 작성하십시오.
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
변환 된 nginx try_files 지시문은 다음과 같습니다
```
location / {
    try_files $uri $uri/ /index.php?$args;
}
```

## 결론   {#conclusion}
이 튜토리얼에서는 Apache의 .htaccess rewrite 규칙과 .htaccess rewrite 규칙을 nginx rewrite 지시문으로 변환하는 방법을 탐색했습니다. 또한 URL을 다시 작성하는 데 사용할 수있는 다양한 NGINX 지시문을 자세히 살펴 보았습니다. 또한 Nginx와 Apache 모두에 대한 예제 재 작성 규칙을 제시했습니다. 튜토리얼이 도움이되기를 바랍니다.

## 탐구하다
  * [우분투에서 Nginx를 사용하여 여러 PHP 버전을 설치하는 방법][1]
  * [Nginx를 리버스 프록시로 설정하고 구성하는 방법][7]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[2]: #nginx
[3]: #apache
[4]: #convert
[5]: #conclusion
[6]: https://codex.wordpress.org/htaccess
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
