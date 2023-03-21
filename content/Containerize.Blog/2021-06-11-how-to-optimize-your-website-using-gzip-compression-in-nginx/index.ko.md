---
title: "nginx에서 gzip 압축을 사용하여 웹 사이트 최적화 방법" 
seoTitle: "nginx에서 gzip 압축을 사용하여 웹 사이트 최적화 방법" 
description: "이 기사에서는 NGINX의 GZIP 압축을 통해 파일 크기를 줄임으로써 웹 사이트 전송 속도를 최적화하는 방법에 대해 설명합니다." 
date: Fri, 11 Jun 2021 12:46:52 +0000
author: Assad Mahmood
summary: "이 튜토리얼은 Nginx에서 GZIP 압축을 사용하여 파일 크기를 줄임으로써 웹 사이트 성능을 최적화하고 빠르게 만드는 방법을 안내합니다." 
url: /ko/how-to-optimize-your-website-using-gzip-compression-in-nginx/
categories: ['Web Server Solution Stack']
---

## 이 튜토리얼은 Nginx에서 GZIP 압축을 사용하여 파일 크기를 줄여 웹 사이트 성능을 최적화하고 빠르게 만드는 방법을 안내합니다.

{{< figure align=center src="images/enable-gzip-compression-in-nginx.png" alt="Nginx에서 GZIP 압축을 활성화하는 방법">}}

이 기사는 Nginx에 관한 일련의 튜토리얼을 계속 진행하고 있습니다. 지금까지 우리는 nginx를로드 밸런서로 사용하는 방법, nginx를 리버스 프록시로 사용하는 방법을 다루었습니다. 이제이 튜토리얼은“Nginx에서 GZIP 압축을 사용하여 웹 사이트를 최적화하는 방법”을 다루고 있습니다. 이 튜토리얼에서는 Nginx에서 GZIP 압축을 활성화하는 방법에 대한 단계별로 안내합니다. 그래서 시작합시다!
  * [압축으로 웹 사이트 최적화][1]
  * [GZIP 압축 란 무엇입니까?][2]
  * [GZIP 압축은 어떻게 작동합니까?][3]
  * [nginx에서 GZIP 압축 활성화][4]
  * [GZIP 압축 확인][5]
  * [결론][6]

## 압축   {#optimize}를 사용한 웹 사이트 최적화
웹 사이트의 성능은 여러 가지 요인에 따라 다릅니다. 그것이 부분적으로 의존하는 요소 중 하나는 사용자의 브라우저가 서버에서 다운로드 해야하는 모든 파일의 크기입니다. 전송 된 파일의 크기를 줄이거 나 압축하면 사용자가 웹 사이트를 더 빨리로드 할 수 있습니다. 또한 계량 된 연결에서 대역폭 사용 비용을 지불하는 경우 웹 사이트의 청구서를 줄일 수 있습니다. 따라서 압축은 웹 사이트 최적화에서 매우 중요한 역할을 할 수 있습니다.
Google 및 기타 검색 엔진이 웹 사이트의 사용자 경험 (UX)을 순위 알고리즘의 중요한 요소로 고려하고 있습니다. 최고 등급을 위해 웹 사이트를 개선하고 최적화하는 것이 더욱 중요해졌습니다. 주의를 기울여야 할 가장 중요한 요소 중 하나는 페이지 속도 및로드 시간입니다. 또한 웹 사이트 속도와 성능을 향상시키는 가장 빠르고 쉬운 방법은 웹 사이트에서 GZIP 압축을 가능하게하는 것입니다.

## GZIP 압축이란 무엇입니까?   {#What-gzip}
GZIP는 **파일 형식 및 소프트웨어 응용 프로그램**  파일 압축 및 감압에 사용됩니다. 웹 서버 또는 기타 소프트웨어는 GZIP 압축을 사용하여 데이터 파일을 사용자의 브라우저로 전송하기 전에 압축합니다. 이렇게하면 파일 다운로드 시간이 줄어들어 웹 사이트가 더 빨라집니다. 모든 최신 브라우저는 GZIP 압축을 지원합니다.
파일 및 폴더 압축을 활성화하려면 웹 서버에서 GZIP 압축을 활성화해야합니다. 곧 Nginx에서 GZIP 압축을 활성화하는 방법을 볼 수 있습니다.

## GZIP 압축은 어떻게 작동합니까?   {#how-gzip}
가장 인기있는 압축 방법 인 GZIP는 웹 서버와 브라우저에서 인터넷을 통해 전송 될 때 콘텐츠를 압축하고 압축하는 데 사용됩니다. 주로 코드 및 텍스트 파일에 사용되며 GZIP는 JavaScript, CSS 및 HTML 파일의 크기를 최대 90%까지 줄일 수 있습니다.
기본적으로 GZIP 압축은 이미지 나 비디오를 압축하지 않습니다. 그렇기 때문에 Google Pagespeed Insight와 같은 대부분의 웹 사이트 속도 테스트 도구는 GZIP 압축을 활성화하는 것이 좋습니다.
웹 서버가 웹 페이지 요청을 받으면 웹 서버는 브라우저가 GZIP를 지원하는지 확인하도록 요청의 헤더를 확인합니다. 그렇다면 서버는 GZIP를 적용하기 전에 페이지의 마크 업을 생성합니다. GZIP는 HTML 마크 업을 압축 데이터로 변환 한 다음 최종 사용자에게 전달됩니다. 최종 사용자가 압축 데이터를 수신하면 브라우저가 압축 해제됩니다.

## nginx에서 gzip 압축 활성화   {#enable-gzip}
nginx gzip 구성을 변경하려면 "_vi_"또는 좋아하는 텍스트 편집기에서 기본 nginx 구성 파일을 엽니 다.
```
sudo vi /etc/nginx/nginx.conf
```
_gzip_ 설정 섹션을 찾으십시오.
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
보시다시피 gzip은 _gzip on; _로 기본적으로 활성화되지만 다른 주석은 GZIP 설정이 있습니다.
압축하려는 파일 유형에서 압축을 활성화하기 위해 _gzip_types_ 설정을 활성화 할 수 있습니다. 예를 들어
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
이제 Nginx를 다시 시작하여 새로운 설정을 수행하십시오.

## GZIP 압축 확인   {#verify}
이제 GZIP 압축을 활성화 했으므로 확인하겠습니다.
```
curl -H "Accept-Encoding: gzip" -I http://localhost/test.html

```
압축이 해당 필레 타입에 대해 이미 활성화되었으므로 응답은 동일하게 유지됩니다.
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

## 결론   {#conclusion}
이 기사에서는 Nginx GZIP 모듈을 사용하여 파일 전송 속도를 높일 수 있다는 것을 배웠습니다. GZIP 모듈을 사용하여 NGINX에서 GZIP 압축을 활성화하는 방법을 단계별로 보여주었습니다. [GZIP Module][7]에 대한 공식 문서에는 살펴볼 수있는 다른 구성 지시문이 나와 있습니다. 이 튜토리얼이 웹 사이트 성능 및 속도를 최적화하는 데 도움이되기를 바랍니다.

## 탐구하다
  * [우분투에서 Nginx를 사용하여 여러 PHP 버전을 설치하는 방법][8]
  * [Nginx를 리버스 프록시로 설정하고 구성하는 방법][9]

  
[1]: #optimize
[2]: #what-gzip
[3]: #how-gzip
[4]: #enable-gzip
[5]: #verify-gzip
[6]: #conclusion
[7]: https://nginx.org/en/docs/http/ngx_http_gzip_module.html
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
