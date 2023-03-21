---
title: "WordPress에서 GZIP 압축을 활성화하는 방법 | Gzip WordPress" 
seoTitle: "WordPress에서 GZIP 압축을 활성화하는 방법 | Gzip WordPress" 
description: "WordPress에서 GZIP 압축을 활성화하여 웹 사이트 속도를 높이고 싶습니까? 이 블로그 게시물에서는 WordPress에서 압축을 활성화하는 방법을 배울 것입니다." 
date: Sat, 12 Dec 2020 11:51:16 +0000
author: Assad Mahmood
summary: "페이지 속도 및로드 시간은 검색 엔진에서 더 나은 순위를 높이기위한 주요 요소입니다. GZIP 압축은이를 가능하게하고 경쟁 우위를 제공 할 수 있습니다." 
url: /ko/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
categories: ['Blogging']
---

## 페이지 속도 및로드 시간은 검색 엔진에서 더 나은 순위를 높이기위한 핵심 요소입니다. GZIP 압축은이를 가능하게하고 경쟁 우위를 제공 할 수 있습니다.

{{< figure align=center src="images/Asset-1.png" alt="GZIP 압축을 활성화하십시오">}}


## 개요
Google 및 기타 검색 엔진이 웹 사이트의 사용자 경험 (UX)을 순위 알고리즘의 중요한 요소로 고려하고 있습니다. 최고 등급을 위해 웹 사이트를 개선하고 최적화하는 것이 더욱 중요해졌습니다. 주의를 기울여야 할 가장 중요한 요소 중 하나는 페이지 속도 및로드 시간입니다. 또한 현장 속도와 성능을 향상시키는 가장 빠르고 쉬운 방법은 웹 사이트에서 GZIP 압축을 가능하게하는 것입니다. 웹 호스트가 자동으로 GZIP 압축을 가능하게 할 가능성이 있습니다. 그렇지 않다면이 중요한 작업을 직접 수행해야합니다.
이 기사에서는 WordPress에서 GZIP 압축을 쉽게 활성화하는 방법을 정확하게 보여줍니다. 시작하자!
* [**gzip 압축이란 무엇입니까**?][1]
* [**GZIP 압축은 어떻게 작동합니까?**][2]
* **[GZIP 압축이 활성화되어 있는지 확인하는 방법?][3]**
* **[WordPress에서 GZIP 압축 활성화][4]**
* **[결론][5]**

## GZIP 압축이란 무엇입니까?   {#무엇}
GZIP는**파일 형식이며 파일 압축 및 감압에 사용되는 소프트웨어 응용 프로그램**입니다. 웹 서버 또는 기타 소프트웨어는 GZIP 압축을 사용하여 데이터 파일을 사용자의 브라우저로 전송하기 전에 압축합니다. 이렇게하면 파일 다운로드 시간이 줄어들어 웹 사이트가 더 빨라집니다. 모든 최신 브라우저는 GZIP 압축을 지원합니다.
파일 및 폴더 압축을 활성화하려면 웹 서버에서 GZIP 압축을 활성화해야합니다. 곧 웹 서버에 GZIP가 활성화되어 있는지 여부를 확인하는 방법을 살펴 보겠습니다.

## GZIP 압축은 어떻게 작동합니까?   {#일하다}
가장 인기있는 압축 방법 인 GZIP는 웹 서버와 브라우저에서 인터넷을 통해 전송 될 때 콘텐츠를 압축하고 압축하는 데 사용됩니다. 주로 코드 및 텍스트 파일에 사용되며 GZIP는 JavaScript, CSS 및 HTML 파일의 크기를 최대 90%까지 줄일 수 있습니다. 기본적으로 GZIP 압축은 이미지 나 비디오를 압축하지 않습니다. 이를 위해서는 WordPress 사이트에서 웹의 이미지를 최적화해야합니다. 그렇기 때문에 Google Pagespeed Insight와 같은 대부분의 웹 사이트 속도 테스트 도구는 GZIP 압축을 활성화하는 것이 좋습니다.
웹 서버가 웹 페이지 요청을 받으면 웹 서버는 브라우저가 GZIP를 지원하는지 확인하도록 요청의 헤더를 확인합니다. 그렇다면 서버는 GZIP를 적용하기 전에 페이지의 마크 업을 생성합니다. GZIP는 HTML 마크 업을 압축 데이터로 변환 한 다음 최종 사용자에게 전달됩니다. 최종 사용자가 압축 데이터를 수신하면 브라우저가 압축 해제됩니다.

## **GZIP 압축이 활성화되어 있는지 확인하는 방법?** {#verify}
웹 호스트는 기본적으로 WordPress에서 압축을 가능하게 할 수 있습니다. 그러나 이것이 항상 그런 것은 아닙니다. Chrome 'Devtools를 사용하여 이미 GZIP 압축을 활성화했는지 확인할 수 있습니다.
크롬 브라우저에서 사이트를 열린 다음 페이지의 어느 곳에서나 마우스 오른쪽 버튼을 클릭 한 다음**검사**를 선택하여 개발자 도구**를 엽니 다.
다음으로**네트워크**탭으로 이동하여 "이름"섹션에서 웹 사이트의 기본 URL을 클릭하십시오.**헤더**탭을 선택한 다음 아래로 스크롤하여**응답 헤더**섹션을 찾으십시오.

{{< figure align=center src="images/gzip-determine.gif" alt="콘텐츠 인코딩을 확인하십시오">}}

GZIP 압축이 활성화되어 있는지 여부를 알 수 있습니다.

## WordPress에서 GZIP 압축 활성화   {#enable}
* * WordPress GZIP 압축이 아직 활성화되지 않았다고 판단한 경우**를 실행하는 데 사용할 수있는 여러 가지 방법이 있습니다. 가장 쉬운 방법은 [WP Rocket][6], [WP Super Cache][7] 또는 [W3 Total Cache][8]와 같은 일부 WordPress 플러그인을 사용하는 것입니다. 그러나 .htaccess 파일 또는 nginx 구성을 업데이트하여 서버 레벨에서 수동으로 수행 할 수 있습니다.

.htaccess 파일을 편집하여 ## #
WordPress GZIP 압축을 활성화하는 가장 일반적인 방법 중 하나는 _.htaccess_ 파일**을**편집하는 것입니다. 그러나 여기에는 무언가를 깨는 위험이 포함됩니다. 이것은 민감한 서버 파일이며 하나의 잘못된 이동으로 인해 많은 문제가 발생할 수 있습니다.
위험을 줄이려면 변경하기 전에 원본 파일의 사본을 저장하십시오. _.htaccess_ 파일은 웹 사이트의**루트 폴더**에 있어야합니다. _.htaccess_를 열면`## ## end wordpress` 태그가 표시된 섹션 아래에 다음 코드를 추가하십시오.
```
# Compress HTML, CSS, JavaScript, Text, XML and fonts
AddOutputFilterByType DEFLATE application/javascript
AddOutputFilterByType DEFLATE application/rss+xml
AddOutputFilterByType DEFLATE application/vnd.ms-fontobject
AddOutputFilterByType DEFLATE application/x-font
AddOutputFilterByType DEFLATE application/x-font-opentype
AddOutputFilterByType DEFLATE application/x-font-otf
AddOutputFilterByType DEFLATE application/x-font-truetype
AddOutputFilterByType DEFLATE application/x-font-ttf
AddOutputFilterByType DEFLATE application/x-javascript
AddOutputFilterByType DEFLATE application/xhtml+xml
AddOutputFilterByType DEFLATE application/xml
AddOutputFilterByType DEFLATE font/opentype
AddOutputFilterByType DEFLATE font/otf
AddOutputFilterByType DEFLATE font/ttf
AddOutputFilterByType DEFLATE image/svg+xml
AddOutputFilterByType DEFLATE image/x-icon
AddOutputFilterByType DEFLATE text/css
AddOutputFilterByType DEFLATE text/html
AddOutputFilterByType DEFLATE text/javascript
AddOutputFilterByType DEFLATE text/plain
AddOutputFilterByType DEFLATE text/xml

# Remove browser bugs (only needed for really old browsers)
BrowserMatch ^Mozilla/4 gzip-only-text/html
BrowserMatch ^Mozilla/4.0[678] no-gzip
BrowserMatch bMSIE !no-gzip !gzip-only-text/html
Header append Vary User-Agent
```
* * 파일을 저장하고**사이트 서버에 업로드하십시오. 완료되면 위에서 설명한대로 Chrome의 DevTools를 사용하여 GZIP가 활성화되어 있는지 확인하십시오.

## nginx에서 gzip 압축을 활성화합니다
* * 압축**을 활성화하려면**gzip**지침을 ON 매개 변수에 포함시킵니다.**gzip**on; 기본적으로**nginx**는 Mime Type Text/HTML에서만 응답을 압축합니다. 다른 MIME 유형으로 응답을 압축하려면 GZIP_TYPES 지시문을 포함하고 추가 유형을 나열하십시오.
* * _nginx.conf_ 파일**을 열고 다음 코드를 추가하여 WordPress에서 GZIP 압축을 활성화 할 수 있습니다.
```
gzip on;
gzip_disable "MSIE [1-6].(?!.*SV1)";
gzip_vary on;
gzip_types text/plain text/css text/javascript image/svg+xml image/x-icon application/javascript application/x-javascript;
```

## 결론   {#conclusion}
이것이이 GZIP WordPress 튜토리얼의 끝입니다. 속도와 성능을 위해 웹 사이트를 최적화하는 방법에는 여러 가지가 있습니다. 이 GZIP WordPress 자습서에서는 GZIP 압축, GZIP 압축의 중요성 및 설치 단계를 살펴 보았습니다. 또한 아래의 "탐색"섹션에 언급 된 많은 관련 링크가 있습니다.
마지막으로, [Containerize.com][9]는 추가 오픈 소스 제품에 대한 기사를 작성하고 있습니다. 따라서 일반 뉴스 및 업데이트를 위해 [블로깅][10] 카테고리와 연락하십시오.

## 탐구하다
  * [Matomo][11]
  * [그럴듯한][12]
  * [WordPress][13]
  * [Jekyll][14]
  * [Docker Compose로 WordPress를 dockerize하는 방법][15]
  * [무료 비즈니스 분석 도구가 비즈니스를 지원하는 방법][16]
  * [2021 년 상위 5 개 오픈 소스 비즈니스 인텔리전스 도구][17]
  * [WordPress에서 플러그인을 설치하는 방법 | 바닐라 포럼][18]
  * [무료 CIVICRM WordPress 통합으로 리드를 높이십시오][19]

  
[1]: #what
[2]: #work
[3]: #verify
[4]: #enable
[5]: #conclusion
[6]: https://wp-rocket.me/
[7]: https://wordpress.org/plugins/wp-super-cache/
[8]: https://wordpress.org/plugins/w3-total-cache/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/blogging/
[11]: https://products.containerize.com/business-intelligence/matomo
[12]: https://products.containerize.com/business-intelligence/plausible
[13]: https://products.containerize.com/blogging/wordpress/
[14]: https://products.containerize.com/blogging/jekyll/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/2021/03/12/how-free-business-analytics-tools-assist-your-business/
[17]: https://blog.containerize.com/business-intelligence-software/top-5-open-source-business-intelligence-solutions-of-2021/
[18]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[19]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
