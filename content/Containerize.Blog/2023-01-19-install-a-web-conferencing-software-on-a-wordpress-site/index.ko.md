---
title: "WordPress 사이트에 웹 회의 소프트웨어를 설치하십시오" 
seoTitle: "WordPress 사이트에 웹 회의 소프트웨어를 설치하십시오" 
description: "이 안내서를 따라 오픈 소스 웹 회의 소프트웨어 BigBlueButton에 대해 알아보십시오. WordPress에 BigBlueButton 플러그인을 설치하는 방법을 살펴 보겠습니다." 
date: Thu, 19 Jan 2023 20:06:03 +0000
author: muhammadmustafa
summary: "WordPress 기반 비즈니스 웹 사이트에 BigBlueButton 플러그인을 설치하여 가상 회의를 수행하십시오. 무료이며 오픈 소스이며 다양한 기능을 제공합니다." 
url: /ko/install-a-web-conferencing-software-on-a-wordpress-site/
categories: ['Blogging', 'Video Conferencing Software']
---

## WordPress 기반 비즈니스 웹 사이트에 BigBlueButton 플러그인을 설치하여 가상 회의를 수행하십시오. 무료이며 오픈 소스이며 다양한 기능을 제공합니다.

{{< figure align=center src="images/Install-a-Web-Conferencing-Software-on-a-WordPress-Site.png" alt="WordPress 사이트의 웹 회의 소프트웨어">}}


## 개요
우리는 [오픈 소스 화상 회의 소프트웨어][1] 범주의 다른 블로그 게시물을 가지고 있습니다. 이메일 및 화상 통화와 같은 원격 커뮤니케이션 방법에는 특정한 방법이 있습니다. 그러나 대면 회의는 이메일이나 채팅보다 항상 더 효과적이고 편리합니다. 이 빠르게 성장하는 세상에서 사람들은 실제로 시간과 공간을 신경 쓰지 않습니다. 이제 소규모/거대한 조직은**원격 협업 도구**를 사용하여 가상 회의를 수행하기 시작했습니다. 비디오 컨퍼런스를 수행 할 수있는 강력한 도구를 제공하는 많은 웹 회의 플랫폼이 있지만 모두 지불됩니다. 따라서 이러한 요구를 감지 한 오픈 소스 커뮤니티는**웹 회의 서비스**를위한 일부 엔터프라이즈 수준의 솔루션을 개발했습니다. 또한,이 무료 플랫폼에는 거대한 시장이 생겨나 고 생생한 개발자 커뮤니티의 지원을받습니다. 이 블로그 게시물에서는 [WordPress][2] 사이트에 웹 회의 소프트웨어**를 설치하는 방법**를 배웁니다.
이 기사에서는 다음 사항이 다루어집니다.
* [**BigBlueButton은 무엇입니까?**][3]
* [**WordPress에 대한 간단한 소개**][4]
* **[WordPress에 BigBlueButton 플러그인을 설치하는 방법?][5]**

## **BigBlueButton은 무엇입니까?** {#What-is-BigblueButton}
[BigBlueButton][6]는 오픈 소스 무료**비디오 협업 소프트웨어**의 거대한 엔터프라이즈 수준의 기능을 갖춘 스택입니다. 이 오픈 소스 소프트웨어는 확장 가능하며 WordPress, [Redmine][7], [Schoology][8], [Drupal][9] 및 Canvas와 같은 많은 인기있는 응용 프로그램과 통합을 제공합니다. 또한 공유 화이트 보드, 공개/개인 메시지 보내기, HD 오디오, 전자식 수제 및 풍부한 프리젠 테이션 도구를 제공합니다. 또한**BigBlueButton**는 HTML5 지원이며 모든 인기있는 웹 브라우저에서 잘 작동합니다.
또한이**웹 회의 소프트웨어**는 거대하고 살아있는 개발자 커뮤니티를 보유하고 있습니다. [Github Repo][10]에는 7.8k 별과 5.8k 포크가있는 매우 좋은 통계가 있습니다. BigBlueButton은 Java 및 Ruby와 같은 다른 언어의 입력과 함께 JavaScript로 작성되었습니다. 실제로 개발자는 개발, 배포 및 사용에 관한 포괄적 인 문서를 찾을 수 있습니다. 따라서이 자체 호스팅 소프트웨어를 로컬 또는 클라우드 서버에서 쉽게 설정할 수 있습니다.

## **WordPress에 대한 간단한 소개** {#a-brief-intro-to-wordpress}
[WordPress][2]는 웹 사이트 소프트웨어 범주에서 최상위**오픈 소스 블로그 플랫폼**중 하나입니다. 이 오픈 소스 소프트웨어는 초보자 수준의 웹 개발자도 사이트 구축을 수행하여 시작할 수 있습니다. 또한 WordPress는 매우 구성 가능하며 비즈니스 요구 사항에 따라 사용자 정의 할 수 있습니다. 무엇보다도, 그것은 많은 플러그인을 찾을 수있는 엄청난 [Marketplace][11]가 있습니다.
이**블로깅 소프트웨어**에는 자체 호스팅 기능이 제공되며 여러 언어에 대한 완벽한 지원이 있습니다. 또한 [GitHub][12] Repo에는 매우 좋은 통계가 있으며 소스 코드를 다운로드하여 쉽게 설정할 수 있습니다. 또한 WordPress 웹 사이트에 기능에 대한 플러그인을 설치할 수 있습니다. 실제로 모든 카테고리에 속하는 사이트의 플러그인을 찾을 수 있습니다. 주로 PHP로 작성되었으며 개발, 배포 및 사용에 관한 완전한 지침을 찾을 수 있습니다.

## **WordPress에 BigBlueButton 플러그인을 설치하는 방법?** {#how-install-bigbluebutton-in-wordpress}
이 섹션에서는 WordPress 사이트**에 웹 회의 소프트웨어를 설치하는 방법을 보여줍니다. 또한 BigBlueButton 플러그인을 조금 더 탐색 할 것입니다. 더 옮기기 전에 컴퓨터에 WordPress를 설치하고 비즈니스 웹 사이트를 UP & RUNGEN을 사용해야합니다.
WordPress를 설치하지 않은 경우이 [링크][2]를 방문하십시오. 완전한 설치 지침을 찾을 수 있습니다.
WordPress에서 BigBlueButton [플러그인][13]의 설치 프로세스를 시작하겠습니다.
WordPress 대시 보드로 이동하여 "플러그인"옵션을 열고 "새 추가"를 누릅니다. 검색 창에 BigBlueButton을 작성하면 아래 이미지와 같이 검색에서 첫 번째 장소를 표시하는 플러그인을 찾을 수 있습니다.
{{_LINE_29_}}
이제 "Now Now"버튼을 누르면이**웹 회의 소프트웨어**를 설치하고 "활성화"를 누르면 플러그인을 활성화하십시오. 활성화가 살아 나면이 화상 회의 소프트웨어를 사용하기 시작할 수 있습니다. 앞으로 아래 이미지에 표시된 것처럼 창의 왼쪽 패널에 메뉴 항목 "객실"이 새로 추가 된 것을 볼 수 있습니다.

{{< figure align=center src="images/bigbluebutton-plugin-1024x516.png" alt="BigBlueButton 플러그인">}}

이제 동료들과 비디오 회의를 할 수있는 방을 만들고 출판하여 회의실을 만들 수 있습니다. 또한 배경색을 변경하고 브랜드 로고를 업로드하여 객실의 모양과 느낌을 사용자 정의 할 수 있습니다. 아래 이미지에서 회의를 만들었고 회의실의 사용자 인터페이스에는 라이브 채팅 및 공유 메모와 같은 기능이 풍부합니다.

{{< figure align=center src="images/bigbluebutton-plugin-ui-1024x532.png" alt="BigBlueButton 플러그인 UI">}}


## 마무리
이것은 우리를이 블로그 게시물의 끝으로 가져옵니다. WordPress 사이트에**웹 회의 소프트웨어**를 설치하는 방법을 배웠기를 바랍니다. 또한, 우리는 또한 회의실 제작 과정을 거쳤습니다.**BigBlueButton 플러그인**는 가상 대면 회의를 수행 할 때 많은 것을 제공합니다. 이**웹 회의 소프트웨어**는 오픈 소스이므로 비즈니스 요구 사항을 충족하도록 사용자 정의 할 수 있습니다. 또한“참조”섹션에서 정말 흥미로운 기사를 찾을 수 있습니다.
마지막으로, [Containerize.com][14]는 추가 오픈 소스 제품 및 주제에 대한 블로그 게시물을 지속적으로 작성하고 있습니다. 따라서 정기적으로 업데이트하려면 [[[비디오 회의][1] 및 [블로그 플랫폼][15] 카테고리][16]과 연락하십시오. 또한 소셜 미디어 계정 [Facebook][17], [LinkedIn][18] 및 [Twitter][19]에서 우리를 따라갈 수 있습니다.

## 질문을하십시오
[포럼][20]에서 귀하의 질문이나 질문에 대해 알려줄 수 있습니다.

## FAQ
* * WordPress 사이트에 화상 통화를 추가하려면 어떻게합니까?**
이 bigbluebutton [플러그인][13]을 사용하여 [WordPress][2] 사이트에 웹 회의 소프트웨어를 추가 할 수 있습니다. 이 소프트웨어는 오픈 소스이며 대면 화상 통화를 설정하는 많은 기능을 제공합니다.
* * WordPress에 BigBlueButton을 어떻게 추가합니까?**
이 [링크][5]를 따라 [WordPress][2]에서 설치 및 설정 프로세스를 배우십시오.

## 또한보십시오
  * [Jitsi가 WordPress 플러그인을 만나고 설치 방법은 무엇입니까?][21]
  * [2021 년의 상위 5 개 오픈 소스 화상 회의 소프트웨어][22]
  * [오픈 소스 Jitsi Meet 설정을위한 단계별 가이드][23]

  
[1]: https://products.containerize.com/video-conferencing/
[2]: https://products.containerize.com/blogging/wordpress/
[3]: #What-is-BigBlueButton
[4]: #A-brief-intro-to-WordPress
[5]: #How-to-install-BigBlueButton-plugin-in-WordPress
[6]: https://products.containerize.com/video-conferencing/bigbluebutton/
[7]: https://products.containerize.com/project-management/redmine/
[8]: https://app.schoology.com/login
[9]: https://products.containerize.com/content-management/drupal/
[10]: https://github.com/bigbluebutton/bigbluebutton
[11]: https://wordpress.org/plugins/
[12]: https://github.com/WordPress/WordPress
[13]: https://wordpress.org/plugins/video-conferencing-with-bbb/
[14]: https://www.containerize.com/
[15]: https://products.containerize.com/blogging/
[16]: https://products.containerize.com/social-network-platforms/
[17]: https://web.facebook.com/containerize
[18]: https://www.linkedin.com/company/containerize/
[19]: https://twitter.com/containerize_co
[20]: https://forum.containerize.com/
[21]: https://blog.containerize.com/blogging/what-is-jitsi-meet-wordpress-plugin-and-how-to-install-it/
[22]: https://blog.containerize.com/video-conferencing-software/top-5-open-source-video-conferencing-software-of-2021/
[23]: https://blog.containerize.com/video-conferencing-software/how-to-set-up-open-source-jitsi-meet/
