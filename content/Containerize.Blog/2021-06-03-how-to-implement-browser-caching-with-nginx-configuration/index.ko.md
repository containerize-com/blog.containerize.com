---
title: "Nginx 구성으로 브라우저 캐싱을 구현하는 방법" 
seoTitle: "Nginx 구성으로 브라우저 캐싱을 구현하는 방법" 
description: "웹 사이트로드가 빨라질수록 방문자가 머무를 가능성이 높아집니다. 이 자습서에서는 Nginx 구성으로 브라우저 캐싱을 구현합니다." 
date: Thu, 03 Jun 2021 11:46:56 +0000
author: Assad Mahmood
summary: "웹 사이트로드가 빨라질수록 방문자가 머무를 가능성이 높아집니다. 이 기사는 Nginx 구성으로 브라우저 캐싱을 구현하는 방법을 안내합니다." 
url: /ko/how-to-implement-browser-caching-with-nginx-configuration/
categories: ['Uncategorized', 'Web Server Solution Stack']
---

## 웹 사이트로드가 빨라질수록 방문자가 머무를 가능성이 높습니다. 이 기사는 Nginx 구성으로 브라우저 캐싱을 구현하는 방법을 안내합니다.

{{< figure align=center src="images/how-to-implement-browser-caching-with-nginx-configuration-1.png" alt="Nginx 구성으로 Browsr 캐싱을 구현하는 방법">}}

Nginx의 튜토리얼 시리즈에서 [Nginx를로드 밸런서로 사용하는 방법][1], [Nginx를 리버스 프록시로 구성][2], [[nginx와 함께 여러 PHP 버전 사용][3], [변환 htaccess rewrite를 사용합니다. Nginx의 규칙 지침을 다시 작성하는 규칙][4]. 오늘의 기사에서는 브라우저 캐싱을 활용하여 비즈니스가 사용자의 경험을 향상시키는 데 도움이되는 매우 중요한 주제를 다루고 있습니다. 이 튜토리얼에서는 Nginx 헤더 모듈을 사용하여 Nginx 구성으로 브라우저 캐싱을 구현하는 방법에 대해 안내합니다. 시작하자!
* **[레버리지 브라우저 캐싱][5]** 
* [ **nginx 헤더 모듈** ][6]
* [ **e-tage and none-match** ][7]
* [ **Nginx 구성으로 브라우저 캐싱** ][8]
* [ **결론** ][9]

## 브라우저 캐싱 레버리지 {#browser-caching}

웹 사이트로드가 빨라질수록 방문자가 웹 사이트에 머무를 가능성이 높습니다. 많은 이미지와 대화 형 콘텐츠가있는 웹 사이트는 백그라운드에로드되어 웹 사이트를 복잡한 작업으로 만들 수 있습니다. 서버에서 여러 파일을 하나씩 요청하는 것으로 구성됩니다. 이러한 요청의 수량을 최소화하는 것은 웹 사이트 속도를 높이는 한 가지 방법입니다.
웹 사이트 성능을 향상시키는 한 가지 방법은 _leveraging Browser Caching_입니다. 브라우저 캐싱은 캐시 메커니즘에서 페이지 속도를 높이기위한 큰 역할을합니다. 웹 사이트에 사용되는 CSS, JS, JPEG, PNG 등과 같은 정적 파일은 향후 액세스를 위해 방문자의 컴퓨터에 저장할 수 있습니다. 방문자가 웹 사이트에서 새 페이지를 만나면 제공된 서버 대신 방문자의 컴퓨터에서 위 파일에 액세스 할 수 있으므로 페이지로드 속도가 엄청나게 증가합니다.

## Nginx의 헤더 모듈 {#header-module}

_ngx \ _http \ _headers_module_ 모듈을 사용하면 "_expires_"및 "_cache-control_"헤더 필드 및 임의의 필드를 응답 헤더에 추가 할 수 있습니다. 헤더 모듈을 사용하여 이러한 HTTP 헤더를 설정할 수 있습니다. 헤더 모듈은 코어 NGINX 모듈이므로 사용하려면 별도로 설치할 필요가 없습니다.
예제 구성은 다음과 같습니다.
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

## e- 태그 및 if-none-match {#etage}

Test.html, test.jpg, test.css 및 test.js. 기본적으로 모든 파일은 동일한 기본 캐싱 동작을 갖습니다. 다음 명령을 사용하여 파일의 응답 헤더를 확인하려면 로컬 nginx 서버에서 파일을 요청하고 응답 헤더를 표시합니다.
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
두 번째 ~ 마지막 줄에는 요청 된 파일 의이 특정 개정에 대한 고유 식별자가 포함 된 _etag_ 헤더가 있습니다. 마지막 _curl_ 명령을 반복적으로 실행하면 동일한 ETAG 값을 찾을 수 있습니다.
웹 브라우저를 사용하는 경우 _etag_ 값이 저장되어 사용자가 페이지를 새로 고침 할 때 _if-none-match_ 요청 헤더를 사용하여 서버로 전송되거나 어떤 이유로 든 브라우저에서 동일한 파일이 필요합니다.
다음 명령으로 명령 줄에서 이것을 시뮬레이션 할 수 있습니다.
```
curl -I -H 'If-None-Match: "501c3b6f-401"' http://localhost/test.html
```
고유 식별자는 이전 _curl_ 호출에서 얻은 응답 값과 일치해야합니다. 이번에는 응답이 다를 것입니다.
```
Output: Nginx response headers
<strong>HTTP/1.1 304 Not Modified</strong>
Server: nginx/1.14.1
Date: Thu, 04 Feb 2021 18:24:05 GMT
Last-Modified: Thu, 04 Feb 2021 18:22:39 GMT
Connection: keep-alive
<strong>ETag: "501c3b6f-401"</strong>
```
이번에는 Nginx가 **304로 수정되지 않은** 에 응답합니다. 네트워크를 통해 파일을 다시 보내지 않습니다. 대신 브라우저에 이미 로컬로 다운로드 한 파일을 재사용 할 수 있다고 알려줍니다. 네트워크 트래픽을 줄이기 때문에 유용합니다. 그러나 브라우저는 여전히 서버로부터 응답을 얻으려면 여전히 HTTP 호출을해야하지만 여전히 시간이 걸립니다.

## Nginx 구성으로 브라우저 캐싱을 활용합니다 {#nginx-configuration}

이전 예에서는 E-TAG 및 IF-NONE MATCH가 네트워크 트래픽을 줄이는 데 어떻게 도움이되는지 설명했습니다. 그러나`etag '의 문제는 브라우저가 항상 캐시 된 파일을 재사용 할 수 있는지 묻는 서버에 요청을 보내는 것입니다. 그리고 이것은 여전히 ​​요청을하고 응답을받는 데 시간이 걸립니다.
이제 Nginx의 헤더 모듈을 사용하면 서버를 명시 적으로 요청하지 않고 브라우저를 로컬로 캐시 할 수 있습니다.
nginx 구성 파일에 다음 3 줄을 추가하여 nginx의 정적 컨텐츠를 캐시합니다.
```
expires 30d;
add_header Pragma "public";
add_header Cache-Control "public";
```
첫 번째 줄은 Nginx에게 30 일 동안 클라이언트 브라우저의 컨텐츠를 캐시하도록 지시합니다 (30d). 이 기간이 지나면 사용자의 새 요청은 캐시 재 검색 및 클라이언트 브라우저에서 업데이트됩니다.
위의 줄을 _location_, _server_ 또는 _http_ 블록에 배치 할 수 있습니다.
```
location /static/ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}
```
위치 블록에 배치하면 해당 위치에서 제공되는 컨텐츠 만 캐시됩니다. 위의 경우 / static /에 대한 요청 만 캐시됩니다.
특정 파일 유형을 캐시하려면 위치 블록을 사용하여 수행 할 수 있습니다.
```
location ~* \.(js|jpg|gif|png|css)$ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}

```
위의 예에서는 JS, JPG, CSS 등과 같은 다양한 파일 유형을 캐싱하고 있습니다.
마찬가지로 위치 블록 앞에 _Server_ 블록에 캐시 구성을 배치 할 수 있습니다. 이 경우이 서버의 모든 응답이 캐시됩니다. 또는 _http_ 블록에 배치 할 수 있습니다.이 경우 Nginx 구성 파일에서 지원하는 모든 서버 요청이 캐시됩니다.

## 결론 {#conclusion}

Nginx 헤더 모듈은 응답에 임의의 헤더를 추가하는 데 사용될 수 있지만 캐시 제어 헤더를 올바르게 설정하는 것이 가장 유용한 응용 프로그램 중 하나입니다. 웹 사이트의 성능, 특히 모바일 캐리어 네트워크와 같은 대기 시간이 높은 네트워크 사용자의 성능을 향상시킵니다. 이 튜토리얼에서는 Nginx 구성으로 브라우저 캐싱을 활용하는 방법을 배웠습니다. 이것이 웹 사이트에서 사용자의 경험을 향상시키는 데 도움이되기를 바랍니다.

## 탐구하다
  * [우분투에서 Nginx를 사용하여 여러 PHP 버전을 설치하는 방법][3]
  * [Nginx를 리버스 프록시로 설정하고 구성하는 방법][2]



[1]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[2]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
[5]: #browser-caching
[6]: #header-module
[7]: #etag
[8]: #nginx-configuration
[9]: #conclusion
