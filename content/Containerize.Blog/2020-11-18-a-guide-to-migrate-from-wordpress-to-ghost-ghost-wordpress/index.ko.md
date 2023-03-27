---
title: "WordPress에서 Ghost로 마이그레이션하는 가이드 | WordPress Ghost" 
seoTitle: "WordPress에서 Ghost로 마이그레이션하는 가이드 | WordPress Ghost" 
description: "이 튜토리얼은 WordPress에서 Ghost로 마이그레이션하는 방법에 관한 것입니다. 기존 WordPress 웹 사이트에서 게시물과 페이지를 유령으로 마이그레이션하는 방법을 배울 것입니다." 
date: Wed, 18 Nov 2020 10:07:06 +0000
author: Assad Mahmood
summary: "고스트와 워드 프레스는 두 가지 주요 오픈 소스 콘텐츠 출판 플랫폼입니다. 이 튜토리얼에서는 WordPress에서 Ghost로 콘텐츠를 마이그레이션하는 방법을 배웁니다." 
url: /ko/a-guide-to-migrate-from-wordpress-to-ghost-ghost-wordpress/
categories: ['Blogging']
---

## Ghost와 WordPress는 두 가지 주요 오픈 소스 콘텐츠 게시 플랫폼입니다. 이 튜토리얼에서는 WordPress에서 Ghost로 콘텐츠를 마이그레이션하는 방법을 배웁니다.

{{< figure align=center src="images/ghostToWordpress-1024x536.png" alt="WordPress에서 Ghost로 마이그레이션하십시오">}}


## 개요
과거에는 [무료 Civicrm WordPress 통합으로 리드를 부스트][1], [Discourse Forum을 WordPress와 통합하는 방법][2] 등과 같은 주제에 대한 많은 기사를 게시했습니다. 고스트는 새로운 오픈 소스 블로깅 플랫폼입니다. 컨텐츠 게시를위한 Node.js CMS이며 사용하기 쉽고 간단하고 깨끗한 인터페이스가 제공됩니다. Wysiwyg 편집 대신 Markdown에 중점을 둔 초보자에게 훌륭한 플랫폼입니다. Node.js의 전원과 속도는 유령을 매우 빠르게 만듭니다. 플랫폼의 단순성으로 인해 많은 사용자가 다른 플랫폼에서 전환하고 있습니다. WordPress는 컨텐츠 관리를위한 최고의 플랫폼이므로.
따라서 더 많은 사용자 **가 WordPress에서 Ghost** 으로 마이그레이션합니다. 미디어 파일, 댓글, 게시물 등이 포함 된 컨텐츠가 많이 있습니다. WordPress에서 Ghost로 콘텐츠를 마이그레이션하는 데 도움이되는 플러그인이 있습니다. Ghost를 채택하는 것의 주요 이점은 검색 엔진 최적화에 중점을 둔다는 것입니다. 이 WordPress Ghost Tutorial에서는 공식 WordPress Export 플러그인을 사용하여 모든 마이그레이션 단계를 살펴 보겠습니다.
* **[WordPress의 Briedf 소개][3]** 
* **[유령이 뭐야?][4]** 
* **[요구 사항][5]** 
* **[플러그인을 사용하여 Wrodpress에서 내용 내용][6]** 
* **[고스트로 내용을 가져 오기][7]** 
* **[결론][8]** 

## **WordPress의 Briedf 소개** {#wp}

[WordPress][9]는 수많은 웹 사이트를 구축 한 주요 오픈 소스 블로깅 플랫폼입니다. 이 무료 블로깅 소프트웨어는 자체 주최되고 다국어이며 많은 언어를 지원합니다. 또한 WordPress의 개발 커뮤니티는 매우 활기차고 쉽게 사용할 수있는 유용한 플러그인의 거대한 풀을 개발했습니다. 이 플러그인은 비즈니스 웹 사이트의 거의 모든 사용 사례를 다룹니다. 또한 PHP로 작성되었으며 개발 및 배포에 관한 포괄적 인 문서가 제공됩니다. 모든 소스 코드는 Github에서 사용할 수 있습니다. 또한이 블로그 플랫폼은 확장 가능하고 구성 가능하며 타사 응용 프로그램과 통합을 제공합니다. 사용자가 요소를 드래그 앤 드롭하여 웹 사이트의 모양과 느낌을 수정할 수있는 매우 논리적이고 이해하기 쉬운 대시 보드가 있습니다.

## **유령은 무엇입니까?** {#ghost}

[고스트][10]은 또 다른 인기있는 오픈 소스 블로깅 플랫폼입니다. 이것은 개발자와 사이트 소유자가 고도로 채택하는 가장 널리 사용되는 컨텐츠 게시 플랫폼 중 하나입니다. 또한 Ghost는 SEO 친화적이며 내장 테마, 양식, 이메일 뉴스 레터 및 구독이 제공됩니다. 이 무료 블로깅 소프트웨어는 JavaScript로 작성되었으며 개발 및 배포와 관련된 모든 문서를 사용할 수 있습니다.

## 요구 사항 {#requirements}

WordPress Ghost 튜토리얼 섹션에서 WordPress에서 Ghost로 마이그레이션하는 데 필요한 요구 사항이 표시됩니다. 공식 WordPress Export 플러그인을 사용하면 컨텐츠를 WordPress에서 Ghost로 쉽게 마이그레이션 할 수 있습니다. 이 자습서에서는 WordPress에서 Ghost 사이트로 콘텐츠를 내보내는 방법에 대해 안내합니다. 따라서 WordPress 및 WordPress **내보내기 플러그인** 를 설치해야합니다.

## WordPress에서 내용 내용 {#export}

우선, 플러그인을 설치해야합니다. 다음 단계를 따라 플러그인을 설치하십시오
* **플러그인** 사이드 바 메뉴에서 클릭하십시오.
* **새**추가**를 클릭하고 오른쪽 상단의 검색 필드를 사용하여** 고스트 내보내기**를 검색하십시오.
* **설치**및 **활성화** "**Ghost Foundation** "의 플러그인

{{< figure align=center src="images/ghost-activate-plugin.png" alt="WordPress 용 Ghost 플러그인을 설치하고 활성화하십시오">}}

* 플러그인이 활성화되면 측면 메뉴에서 **도구** 로 이동합니다.
* ghost에 **를 고스트로 내보내십시오** 사이드 바 메뉴를 클릭하십시오.
  * 유령을 위해 WordPress 콘텐츠를 준비하는 방법에 대한 안내서가 제공됩니다.
  * 고스트는 카테고리 대신 태그를 사용하므로 플러그인을 사용하면 범주를 태그로 변환 할 수 있습니다.
{{_LINE_37_}}
{{_LINE_38_}}
    다음 단계는 WordPress 사이트의 내용 구조를 영구적으로 변경합니다. 이 변경을 확실하지 않은 경우 도구> 내보내기 아래의 표준 WordPress 내보내기 도구를 사용하여 모든 컨텐츠의 전체 백업을 만듭니다.
{{_LINE_40_}}
{{_LINE_41_}}
* 사이드 바 메뉴에서 **가져 오기** 로 이동
****분류 컨버터** 가져 오기 항목에서**수입업자를 클릭하십시오.** .
  * 확인란을 사용하여 태그와 유령 사이트로 가져올 카테고리를 선택하십시오.
* 그런 다음 **카테고리를 태그로 변환하십시오** 을 클릭하십시오.
* 사이드 바 메뉴에서 **도구**내에서**고스트로** 고스트로 내보내십시오**로 다시 탐색하십시오.
* **고스트 파일 다운로드** 버튼을 클릭하십시오. 모든 콘텐츠가 포함 된 ZIP 파일을 다운로드했습니다.

## 목차를 유령으로 가져옵니다 {#import}

WordPress Ghost 자습서 의이 섹션에서는 목차를 Ghost로 가져 오는 단계를 구현합니다.
* Ghost Admin에 로그인하여 **labs** 보기로 이동하십시오.
* **옵션 옵션**옵션 내에서**파일 선택** 버튼을 클릭하고 내보낸 ZIP 파일을 선택하십시오.
* **가져 오기** 를 클릭하십시오. 그러면 모든 콘텐츠가 유령 사이트로 가져옵니다.
현재 고스트는 내장 댓글 시스템이 없습니다. 가장 인기있는 대안은 disqus입니다.

## 결론 {#conclusion}

이것은 우리를이 블로그 게시물의 끝으로 가져옵니다. 이 WordPress Ghost Tutorial에서는 Ghost로 마이그레이션 할 준비가 된 WordPress 콘텐츠를 준비하는 방법을 배웠습니다. 우리는 Ghost Foundation의 공식 Ghost Migration 플러그인을 사용하여 마이그레이션을 수행했습니다. 또한,이 블로그 게시물은 필요한 모든 단계를 다루었으므로 WordPress에서 Ghost로 마이그레이션하려는 경우 반드시 도움이됩니다. 또한 아래의 "탐색"섹션에 언급 된 많은 오픈 소스 콘텐츠 게시 플랫폼 및 튜토리얼 기사가 있습니다. 그러나이 오픈 소스 블로깅 플랫폼은 모두 비즈니스 웹 사이트 요구 사항을 충족시키기 위해 엔터프라이즈 수준의 기능을 제공하는 최고의 소프트웨어입니다.
마지막으로, [Containerize.com][11]는 추가 오픈 소스 소프트웨어에 대한 새로운 블로그 게시물을 작성하고 있습니다. 따라서 정기적 인 업데이트를 위해 [this][12] 플랫폼과 계속 연결하십시오.

## 탐구하다
다음 링크를 찾을 수 있습니다.
  * [WordPress][9]
  * [Jekyll][13]
  * [담론][14]
  * [유령][10]
  * [Docker Compose로 WordPress를 dockerize하는 방법][15]
  * [더 나은 PagSpeed ​​및 SEO를 위해 WordPress에서 GZIP 압축을 활성화하는 방법][16]
  * [무료 CIVICRM WordPress 통합으로 리드를 높이십시오][1]
  * [WordPress 및 Osticket을 사용하여 발권 시스템 자동화][17]
  * [WordPress와 담론 포럼을 통합하는 방법][2]
  * [상위 7 개 SEO 블로그에 따라 웹 사이트 검색 트래픽 증가][18]
  * [WordPress 및 Gatsby로 웹 사이트를 구축하는 방법][19]



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
