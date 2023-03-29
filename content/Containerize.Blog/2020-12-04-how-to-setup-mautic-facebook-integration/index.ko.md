---
title: "Mautic 설정 - Facebook 통합" 
seoTitle: "Mautic 설정 - Facebook 통합" 
description: "Mautic- Facebook 통합은 Facebook 리드를 Mautic 시스템에 동기화 한 다음 마케팅 캠페인에 사용하는 데 도움이 될 수 있습니다." 
date: Fri, 04 Dec 2020 09:51:26 +0000
author: bilalahmed
summary: "페치 페이스 북을 가져 오면 Mautic으로 이어지고 세그먼트에 연락처를 추가하고 이메일 캠페인을 실행합니다. 또한이 연락처를 사용하여 Facebook 광고에 맞는 사용자 정의 잠재 고객을 만듭니다." 
url: /ko/how-to-setup-mautic-facebook-integration/
categories: ['Marketing Automation']
---

## Fetch Facebook은 Mautic으로 이어지고 세그먼트에 연락처를 추가하고 이메일 캠페인을 실행합니다. 또한이 연락처를 사용하여 Facebook 광고에 맞는 사용자 정의 잠재 고객을 만듭니다.

{{< figure align=center src="images/How-to-set-up-Mautic-Facebook-Integration.png" alt="Mautic - Facebook 통합을 설정하는 방법">}}

Mautic은 마케팅 자동화 소프트웨어이며 마케팅 이메일, 방문 페이지 및 마케팅 활동을위한 워크 플로를 완전히 제어 할 수 있습니다. Mautic의 드립 캠페인은 대상 고객을 참여시키고 제품에 대한 업데이트를 유지하는 데 도움이됩니다. Mautic Facebook 통합은 새로운 리드가 Mautic에 추가 될 수있는 방법을 제공합니다. 이 mautic - Facebook 통합을 사용하면 Facebook 캠페인의 리드가 자동으로 Mautic에 추가됩니다.
이 튜토리얼에서 다음 섹션을 다룰 것입니다.
  * [Facebook 개발자 계정 구성][1]
  * [Facebook 개발자의 앱 구성][2]
  * [mautic 플러그인 구성][3]
  * [결론][4]

## Facebook 개발자 계정을 구성하십시오 {#account}

  * [Facebook for Developers][5]로 이동하십시오.
  * 계정이없는 경우 계정을 등록하십시오.
  * 새 계정을 등록하려면 오른쪽 상단에서 "시작"을 클릭하십시오.
  * 그런 다음 Facebook 계정을 선택하고 "계속"을 누르십시오.
  * 그런 다음 팝업 창에서 "개발자"버튼을 클릭하십시오.

{{< figure align=center src="images/Mautic-Facebook-Integration-Register-Developer-Account-1024x582.png" alt="Mautic- Facebook 통합 - 등록 개발자 계정">}}


## Facebook 개발자의 앱을 구성하십시오 {#app}

  * "첫 번째 앱 생성"을 클릭하십시오.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Create-First-APP.png" alt="Mautic - Facebook 통합 - 첫 번째 앱 생성">}}

  * "비즈니스 통합 관리"를 클릭하고 "계속"을 누르십시오.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Choose-Purpose.png" alt="Mautic - Facebook 통합 - 목적을 선택하십시오">}}

  * 다음 창에서 앱 이름을 입력하고 앱 목적을 선택하십시오. "앱 만들기"버튼을 클릭하십시오.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Fill-Form-to-Create-App.png" alt="Mautic - Facebook 통합 - 앱 생성을위한 양식 작성">}}

  * 다음 단계는 Facebook 로그인을 설정하는 것입니다. 제품 페이지에서 "Facebook 로그인"상자에서 "설정"버튼을 클릭하십시오.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-SetUp-FB-Login-1024x563.png" alt="Mautic - Facebook 통합 - 설정 FB 로그인">}}

  * 왼쪽 메뉴에서 제품 -> Facebook 로그인에서 "설정"을 클릭하십시오.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Configure-FB-Login-1024x621.png" alt="Mautic - Facebook 통합 - FB 로그인을 구성합니다">}}

  * Mautic 웹 사이트 URL을 입력하십시오. "Client Oauth 로그인"및 "Web Oauth Login"을 "예"로 설정하십시오.
  * 이제 설정 -> 기본 설정으로 이동하십시오. 페이지 하단에서 "+ 플랫폼 추가"버튼을 클릭하십시오. 그 후 팝업 창이 열립니다. 웹 사이트 URL을 입력하고 변경 사항을 저장하십시오.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Add-Website-as-Platform-1024x179.png" alt="Mautic - Facebook 통합 - 웹 사이트를 플랫폼으로 추가하십시오">}}


## Mautic 플러그인 구성 {#configuration}

  * Mautic 대시 보드로 이동하십시오.
  * 그런 다음 오른쪽 상단에서 "설정"으로 이동하십시오.
  * "플러그인"을 클릭하십시오.
  * 그 후 "Facebook"플러그인 설정을 엽니 다.
  * 그런 다음 클라이언트 ID 및 클라이언트 비밀을 입력하십시오. 위의 단계에 따라 방금 만든 Facebook 개발자 앱에서 이러한 키를 얻으십시오.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Configure-FB-Plugin-on-Mautic.png" alt="Mautic - Facebook 통합 - Mautic에서 FB 플러그인 구성">}}

  * "Authorize 앱"버튼을 누르십시오.
  그 후 새로운 Facebook 인증 창이 열립니다. 프롬프트를 따라 앱 승인을 완료하십시오.
  * 성공적인 승인 후 Mautic의 Facebook 플러그인에서 "연락처 매핑"탭으로 이동하십시오.
  * 여기에서 연락처 필드를 Facebook 필드에 매핑 할 수 있습니다.
  * 마지막으로 설정을 게시하면 가면 좋습니다.

## 결론 {#conclusion}

MAUTIC - Facebook 통합은 Facebook 리드를 Mautic 시스템으로 동기화하는 데 도움이 될 수 있습니다. Mautic 앱에서는이 모든 리드를 세그먼트에 추가 할 수 있습니다. 이메일 마케팅 캠페인을 실행할 수 있습니다. 이를 통해 비즈니스가 훨씬 더 큰 대상 고객에게 제품/서비스를 성장, 마케팅 및 판매하는 데 도움이 될 수 있습니다.

## 탐구하다
Mautic 및 Facebook에 대한 자세한 내용은 다음을 방문하십시오.
  * [mautic | 오픈 소스 콘텐츠 마케팅 기술 플랫폼][6]
  * [캠페인 빌더를 사용하여 Mautic 캠페인을 설정하는 방법][7]
  * [리드 육성을 자동화하기위한 Drupal Mautic 통합][8]
  * [Mautic 및 Woocommerce 통합을 통한 마케팅 자동화][9]
  * [디지털 마케팅 자동화를 위해 Mautic & Joomla 통합][10]



[1]: #account
[2]: #app
[3]: #configuration
[4]: #conclusion
[5]: https://developers.facebook.com/docs/apps#register
[6]: https://products.containerize.com/marketing-automation/mautic
[7]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[8]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[9]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[10]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
