---
title: "아파치 대 nginx | 아파치 란 무엇입니까? | nginx는 무엇입니까?" 
seoTitle: "아파치 대 nginx | 아파치 란 무엇입니까? | nginx는 무엇입니까?" 
description: "이 기사는 Apache 대 Nginx 비교에 관한 것입니다. 두 웹 서버는 모두 오픈 소스이며 구성 가능하며 세계 인터넷 트래픽의 절반 이상을 처리합니다." 
date: Fri, 26 Feb 2021 10:57:10 +0000
author: bilalahmed
summary: "Apache는 프로세스 중심의 접근 방식을 사용하며 Nginx는 이벤트 중심 접근 방식을 사용하여 사용자 요청을 처리합니다. Apache와 Nginx의 차이점을 살펴 보겠습니다." 
url: /ko/apache-vs-nginx-what-is-apache-what-is-nginx/
categories: ['Web Server Solution Stack']
---

## Apache는 프로세스 중심의 접근 방식을 사용하고 Nginx는 이벤트 중심 접근 방식을 사용하여 사용자 요청을 처리합니다. Apache와 Nginx의 차이점을 살펴 보겠습니다.

{{< figure align=center src="images/Apache-vs-NGINX-–-Detailed-Comparison-in-2021.png" alt="아파치 대 nginx">}}


## 개요
Apache와 Nginx는 많은 자질을 공유하지만 완전히 교환 가능한 것으로 간주되어서는 안됩니다. 두 오픈 소스 웹 서버는 서로 다르며 웹 응용 프로그램의 요구에 따라 선택해야합니다. 이 기사에서는 **apache vs nginx**  비교에 대해 자세히 설명합니다.
  * [아파치 란 무엇입니까?][1]
  * [nginx 란 무엇입니까?][2]
  * [Apache vs Nginx 비교][3]
  * [아파치보다 nginx가 낫다][4]
  * [결론][5]
  * [탐색][6]

## 아파치 란 무엇입니까?   {#whatisapache}
Apache 웹 서버는 인터넷에서 가장 인기있는 서버 중 하나이며 웹 사이트의 27% 이상을 지원합니다. Apache는 주로 유연성, 힘, 광범위한 지원 및 자세한 문서로 인해 개발자의 첫 번째 선택입니다. 개발자가 기능을 쉽게 확장 할 수 있도록 동적으로로드 가능한 모듈을 지원합니다.

## nginx는 무엇입니까?   {#whatisnginx}
이 기사는 Apache 대 Nginx 비교에 관한 것입니다. 두 웹 서버는 모두 오픈 소스이며 구성 가능하며 세계 인터넷 트래픽의 절반 이상을 처리합니다.

## apache vs nginx 비교   {#apachevsnginx}
이 섹션에서는 지원, 문서화, 컨텐츠 유형 및 구성 구조를 기반으로 Apache 및 Nginx를 비교해 봅시다.

#### 건축학
Apache는 부팅 시간에 워크로드를 공유하기 위해 여러 서버 프로세스를 시작합니다. 부모 과정과 많은 아동 과정이 있습니다. 각 어린이 프로세스는 들어오는 요청을 처리하는 서버 스레드를 작성해야합니다. Apache는 다중 처리 모듈을 사용하여 자식 프로세스를 할당하여 요청을 수락하고 네트워크 포트를 바인딩합니다. 반대로 Nginx는 이벤트 중심의 아키텍처를 특징으로합니다. Nginx에는 포트 바인딩 및 구성 판독 값을 제어하는 ​​마스터 프로세스가 있습니다. Mas 모든 새로운 요청에 대해 NGINX는 이벤트를 시작하고 작은 프로세스 메모리 만 취하는 파일 디스크립터를 만듭니다. 이것은 Nginx를 Apache보다 더 확장 가능하게 만듭니다. Apache는 각 연결에 대해 훨씬 더 많은 프로세스 메모리를 소비합니다.

#### 모듈
Apache와 Nginx는 핵심 기능을 확장하거나 수정하기 위해 모듈을 할 수 있습니다. 모듈의 구현은 Apache와 Nginx 모두에 대해 다르며 주요 차이점은 모듈의 로딩입니다. 아파치의 경우 모듈이 필요할 때만 동적으로로드됩니다. 반대로 Nginx 모듈은 코어에 통합되어 필요하지 않은 경우에도 부팅시로드됩니다. 그런 의미에서 Apache는 Nginx와 비교할 때 개발자에게보다 사용자 정의 가능한 플랫폼입니다. 이는 유연성에 관한 한 사용자의 한계이지만 긍정적 인 점에서 동적 모듈이 보안 문제를 제기 할 수 있기 때문에 더 나은 보안을 의미합니다.

#### 지원 및 문서
아파치는 우리가 너무 오랫동안 시장에 있었기 때문에 지원과 문서를 기준으로 비교하면 여기에서 명확한 승자입니다. Apache 서버에는 사용 가능한 문서 라이브러리가 많이 있습니다. 이에 비해 Nginx는 고성능 및 자원 활용으로 인해 인기를 얻고 있기 때문에 지원 및 문서화가 빠르게 증가하고 있습니다.

#### 정적 대 동적 컨텐츠
Apache는 자체적으로 정적 및 동적 컨텐츠를 제공합니다. 반면에 Nginx는 동적 컨텐츠를 제공 할 수있는 기능이 없으므로 해당 요청을 타사 소프트웨어에 전달합니다. Apache 서버는 기존 파일 기반 방법을 사용하여 정적 컨텐츠를 처리합니다.

#### 파일 대 URI 기반 해석
Apache Server는 요청을 파일 시스템 또는 URI 위치의 물리적 리소스로 해석 할 수 있습니다. 반면에 Nginx는 웹 서버와 프록시 서버로 작동하도록 설계되었습니다. 이 두 가지 역할에 필요한 아키텍처로 인해 주로 URI와 함께 작동하여 필요할 때 파일 시스템으로 번역됩니다. Nginx는 파일 시스템 디렉토리에 대한 구성을 지정하지 않고 대신 URI 자체를 구문 분석합니다.

#### 구성
Apache는 개발자가 .htaccess라고하는 파일을 사용하여 디렉토리 수준에서 구성을 설정할 수있는 기능을 제공합니다. 그러나 NGINX의 경우 디렉토리 수준에서 구성을 설정하는 메커니즘이 없습니다. Apache는 구성 측면에서 NGINX보다 더 많은 유연성을 제공합니다.

## nginx가 Apache보다 낫습니까?   {#nginx}
Nginx는 정적 컨텐츠를 제공하기 위해 Apache보다 빠릅니다. 따라서 웹 애플리케이션이 많은 정적 컨텐츠를 제공하는 경우 예 Nginx는 Apache보다 더 좋고 빠릅니다. 동적 컨텐츠에 관한 한, 두 웹 서버는 거의 동일한 성능을 제공하므로 여기에는 명확한 승자가 없습니다. Apache와 Nginx는 거의 모든 운영 체제에서 실행되지만 Windows에서 Nginx의 성능은 Apache의 성능이 좋지 않습니다. 운영 체제가 Unix와 유사한 시스템이고 웹 애플리케이션이 성능이 중요하다면 예, Nginx는 Apache보다 낫습니다.

## 결론   {#conclusion}
Apache와 Nginx는 모두 자신의 방식으로 사용할 수 있습니다. 우리는 Apache vs Nginx 비교, Apache가 무엇인지, Nginx가 무엇인지, Apache와 Nginx의 차이점에 대해 논의했습니다. 이 두 개의 가장 인기있는 웹 서버 중 하나를 선택하는 것은 웹 앱의 요구 사항에 전적으로 달려 있습니다. 선택은 성능, 자원 활용, 속도, 확장 성 및 웹 서버 지원에 대한 귀하의 기대에 달려 있습니다. 둘 다 자신의 이점이 있습니다. 하나의 크기에 맞는 웹 서버는 없으므로 목표와 기대에 가장 적합한 솔루션을 사용하십시오.
마지막으로, [Containerize.com][7]는 추가 오픈 소스 제품 및 주제에 대한 블로그 게시물을 지속적으로 작성하고 있습니다. 따라서 정기적 인 업데이트를 위해 [오픈 소스 웹 서버][8] 카테고리와 연락하십시오. 또한 소셜 미디어 계정 [Facebook][9], [LinkedIn][10] 및 [Twitter][11]에서 우리를 따라갈 수 있습니다.

## 탐색   {#explore}
다음 링크를 찾을 수 있습니다.
  * [2021 년 상위 5 개 오픈 소스 웹 서버 솔루션 스택][12]
  * [Windows에서 로컬 호스트로 XAMPP 및 PhpmyAdmin을 설정][13]
  * [XAMPP | 무료 및 오픈 소스 웹 서버 솔루션 스택][14]
  * [nginx | 경량 및 고성능 웹 서버][15]
  * [우분투 18.04의 Lemp Stack 설정 튜토리얼][16]

  
[1]: #whatisapache
[2]: #whatisnginx
[3]: #apachevsnginx
[4]: #nginx
[5]: #conclusion
[6]: #explore
[7]: https://www.containerize.com/
[8]: https://blog.containerize.com/category/web-server-solution-stack/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://blog.containerize.com/2021/01/08/top-5-open-source-web-server-solution-stacks-in-2021/
[13]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
[14]: https://products.containerize.com/solution-stack/xampp
[15]: https://products.containerize.com/solution-stack/nginx
[16]: https://blog.containerize.com/web-server-solution-stack/setup-tutorial-for-lemp-stack-on-ubuntu-18-04/
