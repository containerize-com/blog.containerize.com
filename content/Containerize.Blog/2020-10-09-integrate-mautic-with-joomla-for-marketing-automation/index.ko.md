---
title: "디지털 마케팅 자동화를 위해 Mautic & Joomla 통합 " 
seoTitle: "디지털 마케팅 자동화를 위해 Mautic & Joomla를 통합하십시오" 
description: "Mautic 및 Joomla 통합은 디지털 마케팅 자동화를 통해 비즈니스에 도움이 될 수 있습니다. Mautic 캠페인을 통해 제품을 마케팅하는 데 도움이됩니다." 
date: Fri, 09 Oct 2020 15:16:25 +0000
author: bilalahmed
summary: "Mautic 및 Joomla 통합은 디지털 마케팅 자동화를 통해 비즈니스에 도움이 될 수 있습니다. 온라인 mautic 캠페인을 통해 제품을 마케팅하는 데 도움이됩니다." 
url: /ko/integrate-mautic-with-joomla-for-marketing-automation/
categories: ['Content Management', 'Marketing Automation']
---

## Mautic 및 Joomla 통합은 디지털 마케팅 자동화를 통해 비즈니스에 도움이 될 수 있습니다. 온라인 mautic 캠페인을 통해 제품을 마케팅하는 데 도움이됩니다.

{{< figure align=center src="images/banner-mautic-1200x628-1-1024x536.png" alt="Mautic 및 Joomla 통합">}}


## 이 통합이 비즈니스에 도움이되는 방법 :
Mautic 및 Joomla 통합을 통해 제품/서비스를 매우 쉽지만 효율적인 방식으로 마케팅 할 수 있습니다. Mautic은 무료 오픈 소스 마케팅 솔루션을 통해 마케팅 캠페인과 상황에 따라 드립 캠페인을 계속할 수있는 매우 간단한 제어를 제공합니다. 예를 들어, 고객이 이메일을 읽거나 제품 페이지를 방문한 경우 정보를 제공합니다. 해당 정보를 사용하여 캠페인을 설정하여 해당 고객을 위해 다음 이메일을 계속 발송할지 여부를 결정할 수 있습니다. 이 통합은 디지털 마케팅 자동화에 도움이됩니다. 이 블로그 게시물은 다음 섹션으로 안내합니다.
  * [개요][1]
  * [Joomla 플러그인 설치][2]
  * [mautic 구성][3]
  * [결론][4]

## 개요 :   {#overview}
Mautic은 오픈 소스 마케팅 자동화 시스템입니다. 무료 마케팅 소프트웨어입니다. 이를 사용하여 무제한 캠페인을 만들어 대상 고객에게 마케팅 이메일을 보내는 데 사용할 수 있습니다.
Joomla는 또한 웹 사이트 개발을위한 무료 오픈 소스 컨텐츠 관리 시스템입니다. Joomla에서 비즈니스 웹 사이트를 설정하는 것은 매우 쉽습니다. 요구 사항에 따라 사용할 수있는 수천 개의 확장 기능이 있습니다.

## Joomla 플러그인 설치 :   {#plugin}
  * [플러그인][5]를 다운로드하십시오.
  * 그런 다음 확장자로 이동 -> 관리 -> 설치.
  * mautic url을 입력하십시오.
  * mautic 인스턴스에서로드 된 1 px gif 이미지를 삽입합니다.
  * 다음 코드 스 니펫을 사용하여 Joomla 컨텐츠에 양식을 포함시킵니다. {mautic type =”form”id}
  * 그런 다음 Mautic 앱에서 양식을 작성하고 URL에서 ID를 얻을 수 있습니다.
  * 다음 코드 snippt : {mautic type =”content”slot =”slot_name”} 기본 콘텐츠는 여기에 동적 컨텐츠를 추가 할 수도 있습니다. {/mautic}.
  * SLOT_NAME은 캠페인에 "동적 컨텐츠 요청"결정을 추가 할 때 지정한 슬롯의 식별자입니다.
설치 후 Joomla 사이트에서 양식을 작성하고 포함해야합니다. 이 양식은 연락처 정보를 Mautic으로 보냅니다. Joomla에서 플러그인 구성이 완료되면 다음 단계는 Mautic에서 구성하는 것입니다.

## mautic 구성 :   {#Mautic}
  * Mautic 사이트로 이동하여 설정으로 이동하십시오.
  * 구성을 클릭하십시오.
  * API 설정에서 API를 활성화하십시오.
  * Mautic을 Joomla와 연결하려면 사이트에 SSL 인증서가 있어야합니다.
  * 다음으로 API 자격 증명으로 이동해야합니다.
* 웹 사이트에 SSL이없는 경우 (따라서**http**: //yourjoomlasite.com으로 이동) OAuth1을 선택하십시오. 사이트에 SSL이있는 경우 (따라서**https**: //yourjoomlasite.com으로 이동) OAuth2를 선택하십시오.
  * 새로 클릭하고 이름을 제공하십시오 (원하는 것이 될 수 있음)과 Joomla의 전체 URL을 제공하십시오! 사이트 ([https://yourjoomlasite.com][6])
  * 저장을 클릭하고 닫습니다.
  * 여기에서 공개 및 개인 키를 얻을 수 있습니다.
  * Joomla 사이트로 이동하여 이전에 설치 한 Mautic 플러그인을 찾으십시오.
  * Mautic 사이트에서 만든 공개 및 비밀 키를 입력하십시오.
  * OAUTH1 또는 OAUTH2 (MAUTIC에서 선택한 것과 동일)를 선택하고 등록 된 사용자를 YES로 설정하십시오.
  * 플러그인을 저장하고 게시하십시오.
  * 그 후 Joomla 사이트를 승인 할 수 있습니다.
  * Joomla는 Mautic 사례를 승인으로 다시 지시합니다.
  * "승인"을 클릭하십시오.
  * Mautic 사이트로 연락을 시작합니다.

{{< figure align=center src="images/Mautic-and-Joomla-integration-1024x591.png" alt="Mautic 및 Joomla 통합">}}


## 결론 :   {#conclusion}
이 기사에서 우리는 Mautic과 Joomla가 어떻게 디지털 마케팅 자동화에 도움이 될 수 있는지 논의했습니다. 이 오픈 소스 무료 마케팅 솔루션을 사용하면 Joomla 사이트에서 나오는 모든 연락처를 그룹화하고이를 사용하여 마케팅 캠페인을 만들 수 있습니다. Mautic을 사용하면 세그먼트를 만들 수 있으므로 필요에 따라 다른 세그먼트에서 다른 캠페인을 실행할 수 있습니다. 자세한 개요는 [Joomla][7] 및 [Mautic][8] 블로그를 확인하십시오.

## 탐구하다:
다음 링크를 찾을 수 있습니다.
  * [Joomla][7]
  * [mautic][8]
  * [Mautic - Facebook 통합 설정 방법][9]
  * [리드 육성을 자동화하기위한 Drupal Mautic 통합][10]
  * [Mautic 및 WordPress WooCommerce를 사용한 마케팅 자동화][11]
  * [Mautic에서 마케팅 캠페인을 설정하는 방법][12]

  
[1]: #overview
[2]: #plugin
[3]: #mautic
[4]: #conclusion
[5]: https://href.li/?https://extensions.joomla.org/extension/mautic/
[6]: https://href.li/?https://yourjoomlasite.com
[7]: https://products.containerize.com/content-management/joomla
[8]: https://products.containerize.com/marketing-automation/mautic
[9]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[10]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[11]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[12]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
