---
title: "Mautic 및 Woocommerce 통합을 통한 마케팅 자동화" 
seoTitle: "Mautic 및 Woocommerce 통합을 통한 마케팅 자동화" 
description: "Mautic 및 Woocommerce 통합을 통해 WordPress 사이트에서 Mautic으로 연락처 정보를 보낼 수 있습니다. 그것은 Mautic 앱을 통해 제품을 마케팅하는 데 도움이됩니다." 
date: Mon, 12 Oct 2020 06:09:14 +0000
author: bilalahmed
summary: "Mautic 및 WordPress WooCommerce를 사용하여 판매를 자랑합니다. WordPress에서 Mautic으로 고객의 데이터를 가져와 마케팅 프로세스를 자동화하십시오." 
url: /ko/marketing-automation-using-mautic-and-wordpress-woocommerce/
categories: ['Blogging', 'Marketing Automation']
---

##은 Mautic 및 WordPress WooCommerce를 사용하여 판매를 자랑합니다. WordPress에서 Mautic으로 고객의 데이터를 가져와 마케팅 프로세스를 자동화하십시오.

{{< figure align=center src="images/banner-mauticWP-1200x628-1-1024x536.png" alt="Mautic-Woocommerce 통합을 사용한 마케팅 자동화">}}


## 개요 :
Mautic-Woocommerce 통합은 Mautic 앱에서 모든 연락처를 쉽게 얻을 수있는 방법을 제공합니다. 그런 다음 이러한 연락처를 사용하면 요구 사항에 따라 마케팅 캠페인을 만들 수 있습니다. Mautic은 마케팅 캠페인을 완전히 제어 할 수있는 훌륭한 마케팅 도구입니다.
Mautic은 오픈 소스 및 무료 마케팅 자동화 솔루션입니다. 마케팅 캠페인, 세그먼트, 양식, 보고서 등을 만드는 데 사용됩니다.
WooCommerce는 WordPress 용 오픈 소스 전자 상거래 플러그인입니다. 이 시점에서 전 세계에서 주로 사용되는 전자 상거래 솔루션입니다. WooCommerce에는 수백 개의 추가 기능이 필요하며 귀하의 요구에 따라 사용할 수 있습니다.
마케팅 자동화 솔루션을 제공하는 Mautic 및 WordPress에 사용할 수있는 플러그인이 있습니다. 플러그인을 사용하여 WooCommerce를 Mautic과 통합하려면 다음 단계를 수행하십시오 [Woocommerce 용 Mautic - 오픈 소스 마케팅 자동화.][1]
이 블로그는 다음 섹션을 다룹니다.
  * [WordPress 플러그인 구성][2]
  * [mautic 구성][3]
  * [최종 생각][4]

## WordPress 플러그인 구성   {#WordPress}
  1. 플러그인으로 이동하십시오.
  2.“새 추가”를 클릭하십시오.
  3.“Woocommerce**”에 대한 Mautic과의 통합을 검색하십시오.
  4. 플러그인을 찾으면 "지금 설치"를 클릭하십시오.
  5. 설치 후 "활성화"를 클릭하십시오.
  6. 그런 다음 woocommerce-> mautic-> 연결 탭으로 이동하십시오.
  7. 다음 데이터로 양식을 작성하십시오.
      * 기본 URL.
      * 클라이언트 ID.
      * 비밀 ID.
  8. 모든 필드는 다음 섹션에서 설명 된 Mautic 앱을 구성한 후에 올 것입니다.

{{< figure align=center src="images/woocommerce-1024x665.png" alt="Mautic 및 WordPress 통합">}}


## mautic 구성 :   {#Mautic}
  1. Mautic 사이트에서 설정으로 이동하십시오.
  2. 구성으로 이동하십시오.
  3. API 설정에서 API를 활성화합니다.
  4. API 자격 증명으로 이동하십시오.
  5.“새”를 클릭하고 원하는 이름과 WordPress 사이트의 전체 URL을 입력하십시오. 즉 [http://yourwordpresssite.com/wp-admin/admin.php]].
  6. 저장 및 닫으십시오.
  7. 공개 및 개인 키를 만듭니다.
  8. WordPress 사이트로 이동하여 이전에 설치 한 Mautic 플러그인을 찾으십시오.
  9. Mautic 사이트에서 만든 공개 및 비밀 키를 입력하십시오.
 10. OAUTH1 또는 OAUTH2 (MAUTIC에서 선택한 것과 동일)를 선택하고 등록 된 사용자를 YES로 설정하십시오.
 11. 플러그인을 저장하고 게시하십시오.
 12. 그 후 WordPress 사이트를 승인 할 수 있습니다.
 13. WordPress는 승인에 대한 Mautic 사례를 다시 지시합니다.
 14.“승인”을 클릭하십시오.
 15. 당신은 당신의 mautic 사이트로 연락을 시작합니다.

{{< figure align=center src="images/mautic-1024x622.png" alt="Mautic 및 WordPress 통합 단계">}}


## 최종 생각 :   {#final}
Mautic-Woocommerce 통합은 마케팅 목표를 달성하는 데 도움이 될 수 있습니다. 이 통합은 전자 상거래 마케팅 자동화를위한 최상의 솔루션 중 하나입니다. WordPress를 사용하면 많은 고객을 쉽게 얻을 수 있고 Mautic을 사용하면 해당 고객을 대상으로 한 무제한 캠페인을 만들고 제품/서비스와 관련하여 업데이트를 유지할 수 있습니다.

## 탐구하다:
다음 링크를 찾을 수 있습니다.
  * [Wodpress][6]
  * [mautic][7]
  * [Mautic - Facebook 통합 설정 방법][8]
  * [리드 육성을 자동화하기위한 Drupal Mautic 통합][9]
  * [Mautic 및 WordPress WooCommerce를 사용한 마케팅 자동화][10]
  * [Mautic에서 마케팅 캠페인을 설정하는 방법][11]

  
[1]: https://href.li/?https://wordpress.org/plugins/enhanced-woocommerce-mautic-integration/
[2]: #wordpress
[3]: #mautic
[4]: #final
[5]: https://href.li/?http://yourWordpressSite.com/wp-admin/admin.php
[6]: https://products.containerize.com/blogging/wordpress
[7]: https://products.containerize.com/marketing-automation/mautic
[8]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[9]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[10]: https://blog.containerize.com/blogging/ko/marketing-automation-using-mautic-and-wordpress-woocommerce/
[11]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
