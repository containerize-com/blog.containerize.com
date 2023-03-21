---
title: "jhipster | RAD 소프트웨어를 시작합니다" 
seoTitle: "jhipster | RAD 소프트웨어를 시작합니다" 
description: "초보자가 시작하기위한 단계별 jhipster 튜토리얼. 이 기사를 따라 오픈 소스 JHIPSTER RAD 소프트웨어를 사용하여 첫 번째 응용 프로그램을 설정하십시오." 
date: Wed, 28 Oct 2020 10:42:37 +0000
author: muhammadmustafa
summary: "소스 코드 생성기로 뛰어 들어 봅시다. 문서화 된 REST API를 사용하여 웹 기반 반응 형 애플리케이션을 생성 할 수있는 기본 기능을 제공합니다." 
url: /ko/jhipster-tutorial-getting-started-with-rad-software/
categories: ['Rapid Application Development']
---

## 소스 코드 생성기로 뛰어 들자. 문서화 된 REST API를 사용하여 웹 기반 반응 형 애플리케이션을 생성 할 수있는 기본 기능을 제공합니다.

{{< figure align=center src="images/How-to-set-up-and-create-a-basic-application-with-Jhipster.png" alt="jhipster 튜토리얼">}}


## 개요 :
우리는 최근 현재 시간에 [RAD 소프트웨어][2]의 중요성에 대한 [블로그 게시물][1]을 게시했습니다. 기술은 매우 높은 속도로 발전하고 있습니다. 비즈니스 요구 사항과 요구는 매일 바뀌고 있습니다. 짧은 시간 내에 솔루션을 개발하기위한 경쟁이 있습니다. 반면에 모든 비즈니스는 가능한 빨리 제품을 출시하여 시장을 캡처하기를 원합니다. 따라서 오픈 소스 커뮤니티는**민첩한 소프트웨어 개발**을 기반으로하는 많은 소프트웨어를 개발했습니다. 이 무료 빠른 응용 프로그램 개발 소프트웨어는 빠른 프로토 타이핑 개발 기능을 갖춘 사용자를 촉진합니다. 제품의 초기 릴리스를 구축하고 시작할 수 있으므로 사용자 피드백의 입력으로 추가 릴리스를 개발할 수 있습니다. 또한이 소프트웨어는 프로젝트의 모든 단계에서 모든 변화를 흡수하도록 설계되었습니다.
한편, 소프트웨어 개발 팀은 개발 프로세스 속도를 높이고 조기 배송을 확인합니다. 실제로 비용 효율적이고 시간 절약이며 개발자와 사용자에게 만족을줍니다. 신속한 응용 프로그램 개발은 계획적이고 엄격한 마감일이 필요하지 않을 정도로 유연합니다. 당신은 당신의 최종 소비자에게 필요한 것을 구축합니다. 이 jhipster 튜토리얼에서는 [jhipster][3]를 설정하는 방법을 살펴보고 다음 사항을 다루어 첫 번째 응용 프로그램을 작성합니다.
  * [jhipster 란 무엇이고 설치 방법은 무엇입니까?][4]
  * [기본 응용 프로그램을 생성하고 실행하는 방법?][5]
  * [생성 된 앱의 관리자 대시 보드 탐색][6]
  * [결론][7]

## jhipster 란 무엇이며 설치 방법은 무엇입니까?   {#설치하다}
[Jhipster][3]는 엔터프라이즈 웹 애플리케이션을 생성하는 데 사용되는 오픈 소스 RAD 소프트웨어입니다. 이 오픈 소스 애플리케이션 Builder는 Server-Side 및 인기있는 프론트 엔드 기술에서 Angular, Vue.js 및 React.js와 같은 인기있는 프론트 엔드 기술에 Java 기반 스프링 부트 프레임 워크를 제공합니다. 이 소스 코드 생성기에는 OAUTH.20, JWTS 및 HTTP 세션 인증과 같은 여러 사용자 인증 메커니즘을 갖춘 강력한 마이크로 서비스 아키텍처가 포함되어 있습니다. 또한 사용자가 모든 기능을 탐색 할 수있는 온라인 버전을 제공합니다. 이**오픈 소스 프로토 타이핑 도구**는 약간의 타임 스크립트를 입력하여 JavaScript로 작성되었습니다. 따라서 개발 및 배포와 관련하여 포괄적 인 문서를 사용할 수 있습니다. 개발자는 [GitHub][8] Repo에서 소스 코드를 찾을 수 있습니다. Gatling 및 Retractor와 같은 인기있는 테스트 프레임 워크를 사용하여 테스트를 실행할 수있는 완벽한 지원이 있습니다. 또한 강력하고 안전하며 크로스 플랫폼이며 타사 통합을 지원합니다.
이**jhipster 튜토리얼에서**설정 및 사용에 관한 jhipster를 탐색 할 것입니다. [Jhipster][3]는 무료이며 빠른 응용 프로그램 개발 모델 위에 구축되었습니다. 그것은 매우 유망하고 강력한 빠른 웹 애플리케이션 개발 도구를 제공하는 개발자 친화적 인 생태계를 제공합니다.
이 오픈 소스 응용 프로그램 빌더를 어떻게 설치할 수 있는지 살펴 보겠습니다. 먼저 다음 전제 조건을 설치합니다.
  * [Java 11 JDK][9]
  * [node.js 10.20.1+][10]
설치가 완료되면 터미널을 열고 다음 명령을 실행하십시오.
`npm install -g generator -jhipster`
이 명령은 몇 분이 걸릴 수 있으며, 성공적인 완료 후 Jhipster가 컴퓨터에 설치됩니다.
설치를 확인하려면 다음 명령을 확인할 수 있습니다.
`jhipster -version`

{{< figure align=center src="images/install-1024x564.png" alt="Jhipster 설치">}}


## 기본 애플리케이션을 생성하고 실행하는 방법은 무엇입니까?   {#달리다}
이**jhipster 튜토리얼**섹션 에서이 오픈 소스 RAD 소프트웨어를 사용하여 첫 번째 응용 프로그램을 생성하는 방법을 배웁니다.
터미널 창으로 돌아가서 다음 명령을 실행하십시오.
`mkdir 1stappcd 1stapp/`
디렉토리를 만든 후 아래에 언급 된 다음 명령을 실행하십시오.
`jhipster`
이 명령은 프로세스를 시작합니다. 아래 이미지에서 볼 수 있듯이 프론트 엔드 및 백엔드 기술, 데이터베이스, 테스트 프레임 워크 등과 같은 애플리케이션 기술 선호도에 관한 모든 질문에 답하십시오.

{{< figure align=center src="images/qst-1024x474.png" alt="jhipster 튜토리얼">}}

모든 질문에 답한 후이 소스 코드 생성기는 폴더에 코드 파일을 생성합니다.
이제 다음 명령으로 생성 된 응용 프로그램을 실행하십시오.
`./mvnw`
참고 :이 명령은 백엔드의 빌드 자동화로 Maven을 선택한 경우 작동합니다.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.02.31-1024x196.png" alt="jhipster 튜토리얼">}}

http : // localhost : 8080/의 브라우저에 응용 프로그램에 액세스하십시오.

## 생성 된 앱   {#dashboard}의 관리자 대시 보드 탐색
브라우저에서 http : // localhost : 8080/를 누르면 다음 화면이 표시됩니다.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.56.41-1024x488.png" alt="코드 생성기">}}

언급 된 자격 증명을 사용하여 관리자로 로그인 할 수 있습니다. Jhipster는 두 가지 기본 사용자 역할을 제공합니다. 성공적인 로그인 후 이미지에 다음과 같은 조항이 표시됩니다.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.12-1024x532.png" alt="오픈 소스 RAD 소프트웨어">}}

Jhipster는 아래 이미지에서 볼 수 있듯이 사용자를 관리 할 수있는 완벽한 사용자 관리를 제공합니다.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.25-1024x451.png" alt="Jhipster 사용자 관리">}}

건강 옵션은 디스크 공간 및 데이터베이스에 대한 정보를 제공합니다.

{{< figure align=center src="images/Screenshot-2020-10-27-at-16.10.54-1024x344.png" alt="jhipster 튜토리얼">}}

Jhipster Admin Dashboard에는 완전한 로깅 시스템이 있습니다.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.38-1024x583.png" alt="오픈 소스 RAD 소프트웨어">}}

이 오픈 소스 애플리케이션 빌더의 관리 대시 보드는 내장 및 사용자 정의 기능의 휴식 엔드 포인트를 제공합니다.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.48-1024x582.png" alt="오픈 소스 jhipster">}}


## 결론   {#con}
이것은이 jhipster 튜토리얼의 끝입니다.**인스턴트 앱 개발**을 제공하는 많은 오픈 소스 RAD 플랫폼이 있습니다. 문제와 솔루션에 항상 대응하기 위해 항상 살아있는 매우 활기찬 커뮤니티가 있습니다. RAD 방법론은 많은 요인으로 인해 명성을 얻고 있습니다. 첫째, 요구 사항을 완전히 이해할 필요가 없습니다. 둘째, 최종 소비자는 소프트웨어 개발 수명주기 전반에 걸쳐 관여합니다. 셋째, 모든 이해 관계자가 탑승 할 때 위험 요소는 매우 적습니다. 그러나 RAD 소프트웨어는 적응력이 있고 개발자 친화적이며 변경 사항에 유연합니다. 코드 생성기가 반복적 인 스크립트를 다시 작성하는 엄청난 시간을 절약함에 따라 많은 시간이 절약됩니다. 이**[jhipster][3] 튜토리얼**기사는 몇 가지 중요한 통찰력을 강조했습니다. 몇 가지 간단한 쉘 명령으로 가볍고 쉽게 설정할 수 있습니다.
오픈 소스 Rapid Application Development 플랫폼을 진지하게 찾고 있다면 오늘이 오픈 소스 응용 프로그램 빌더를 자유롭게 설치하십시오. 마지막으로, [Containerize.com][11]는 모두 더 흥미로운 자습서를 통해 자습서 기반을 향상시키기 위해 설정되었습니다. 정기적 인 업데이트를 위해이 [빠른 응용 프로그램 개발][2] 카테고리와 연결하십시오.

## 탐구하다
다음 링크를 찾을 수 있습니다.
  * [쿠바 플랫폼][12]
  * [QuickApp][13]
  * [Jhipster][3]
  * [li3][14]
  * [Apache ISIS][15]
  * [2021 년 상위 5 개의 무료 빠른 응용 프로그램 개발 소프트웨어][16]
  * [비즈니스 용 빠른 응용 프로그램 개발 소프트웨어 | rad][17]
  * [2021 년 오픈 소스 소프트웨어를 선택하기 전에 검토 할 것들][18]

  
[1]: https://blog.containerize.com/2020/10/23/how-rad-software-can-help-you-to-grow-business-to-next-level/
[2]: https://products.containerize.com/rad
[3]: https://products.containerize.com/rad/jhipster
[4]: #install
[5]: #run
[6]: #dashboard
[7]: #con
[8]: https://github.com/jhipster/generator-jhipster
[9]: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html
[10]: https://nodejs.org/en/
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/rad/cuba
[13]: https://products.containerize.com/rad/quickapp
[14]: https://products.containerize.com/rad/li3
[15]: https://products.containerize.com/rad/apache-isis
[16]: https://blog.containerize.com/rapid-application-development/top-5-free-rapid-application-development-software-in-2021/
[17]: https://blog.containerize.com/rapid-application-development/rapid-application-development-software-for-business-rad/
[18]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
