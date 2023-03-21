---
title: "WordPress 및 Osticket을 사용하여 발권 시스템을 자동화하십시오" 
seoTitle: "WordPress 및 Osticket을 사용하여 발권 시스템을 자동화하십시오" 
description: "Osticket-Wordpress 통합은 고객이 WordPress 사이트에서 지원 티켓을 생성하고 Osticket Dashboard에서 관리 할 수있는 방법을 제공합니다." 
date: Tue, 13 Oct 2020 07:58:41 +0000
author: bilalahmed
summary: "헬프 데스크 프로세스를 원활한 WordPress 및 Ostiket 통합으로 자동화하십시오. 웹 기반 양식을 통해 고객의 문의를 지원 티켓으로 변환합니다." 
url: /ko/automate-ticketing-system-using-wordpress-and-osticket/
categories: ['Blogging', 'Help Desk']
---

## HelpDesk 프로세스를 원활한 WordPress 및 Osticket 통합으로 자동화하십시오. 웹 기반 양식을 통해 고객의 문의를 지원 티켓으로 변환합니다.

{{< figure align=center src="images/integrate-osticket-with-wordpress-banner-1024x536.png" alt="발권 시스템을 자동화하기위한 오스티켓-워드 프레스 통합">}}

고객은 귀하의 제품/서비스에 관한 질문을 가질 수 있습니다. WordPress 사이트에서 다양한 형태를 통해 쿼리를 보냅니다. Osticket-Wordpress 통합은 이러한 쿼리를 티켓으로 변환하는 데 도움이됩니다. API를 통해 OSTIKET HELPDESK 시스템으로 데이터를 보냅니다.
오스티켓은 오픈 소스 및 무료 헬프 데스크 티켓팅 시스템입니다. 고객은 Osticket에서 쿼리에 관한 티켓을 만들 수 있습니다. 이 HelpDesk 시스템을 사용하면 모든 조직이 고객이 제공하는 쿼리를 쉽게 관리 할 수 ​​있습니다. 관리자는 부서와 팀을 생성하고 생성 된 티켓의 특성에 따라 다른 에이전트에 티켓을 할당 할 수 있습니다. 이 무료 오픈 소스 시스템은 문제를 추적합니다. 이를 통해 고객과 에이전트 모두가 티켓에 대해 의견을 제시하여 진행 상황에 대해 논의 할 수 있습니다. 이 블로그 게시물에서 다음 섹션을 다룰 것입니다.
  * [통합 프로세스][1]
  * [WordPress 플러그인 설치][2]
  * [인증 절차][3]
  * [결론][4]

## 통합 프로세스 :   {#integration}
오스티켓 및 WordPress 통합에는 다음 필드가있는 WordPress 사이트의 연락처 양식이 필요합니다.
  1. 주제를 도와줍니다
  2. 이메일
  3. 전체 이름
  4. 주제
  5. 메시지
이 플러그인은 wp_mail 함수를 연결하여 양식의 데이터를 가져 오기 때문에 연락처 양식은 이메일을 보내야합니다.

## WordPress 플러그인 설치 :   {#WordPress}
  1. WordPress 사이트의 Admin Dashboard로 이동하십시오.
  2. 다음으로 플러그인 섹션으로 이동하십시오.
  3.이 [플러그인][5]를 설치하십시오.
  4. 그 후 플러그인을 활성화합니다.
  5.“설정” ->“오스티켓 커넥터”로 이동하십시오.
  6. 그런 다음 오스티켓 사이트의 URL을 입력하십시오 [http : //your.domain/api/tickets.json][6]
  7. Ostiket Admin 패널에서 생성 된 API 키를 입력하십시오 (다음 섹션에서 설명).
  8. 결국 모든 필드를 작성하여 연락처 양식에서 Osticket의 티켓 필드로 데이터를 매핑합니다.

{{< figure align=center src="images/wordpress-osticket-1024x776.png" alt="발권 시스템을 자동화하기위한 오스티켓-워드 프레스 통합">}}


## 인증 절차 :   {#auth}
API 인증은 오스티켓의 관리자 패널 내에서 구성된 API 키를 통해 수행됩니다. API 키가 생성되어 HTTP API 요청의 소스 IP에 대해 확인되는 소스 IP 주소에 연결됩니다. API 키를 만들려면
  1. 오스티켓의 관리자 패널로 이동하십시오.
  2. "관리"를 클릭하십시오.
  3. 서브 메뉴 "API 키"로 이동하십시오.
  4. "새 API 키 추가"를 클릭하십시오.
  5. "상태"를 활성으로 설정하십시오.
  6. 확인란을 확인하십시오.
  7. WordPress 사이트의 IP 주소를 입력하고 "키 추가"를 누르십시오.

{{< figure align=center src="images/osticket-1024x729.png" alt="발권 시스템을 자동화하기위한 오스티켓-워드 프레스 통합">}}


## 결론 :   {#conclusion}
Ostiket-Wordpress 통합은 발권 프로세스를 자동화합니다. 따라서 지원 팀의 삶을 더 쉽게 만들 것입니다. WordPress 웹 사이트의 문의는 Ostiket의 지원 티켓으로 자동 변환됩니다. 지원 팀이 모든 고객의 쿼리를보다 쉽고 효율적으로 관리 할 수 ​​있도록합니다. 지원 에이전트는 이메일 알림으로 통지됩니다. 따라서 에이전트는 제 시간에 고객의 질문을 해결할 수 있습니다. Osticket에 대한 의견 섹션은 고객과 에이전트가 효과적이고시기 적절하게 의사 소통하는 데 도움이됩니다. 또한 관리자가 각 티켓의 진행 상황을 쉽게 추적 할 수 있습니다.

## 탐구하다:
Osticket 및 WordPress에 대한 자세한 내용은 다음 페이지를 확인하십시오.
  * [오스티켓 - 무료 오픈 소스 헬프 데스크 발권 시스템][7]
  * [WordPress - 무료 오픈 소스 및 가장 널리 사용되는 CMS 및 블로그 도구][8]
  * [Osticket을 사용하여 온라인 헬프 데스크 소프트웨어를 설정하는 방법][9]

  
[1]: #integration
[2]: #wordpress
[3]: #auth
[4]: #conclusion
[5]: https://href.li/?https://wordpress.org/plugins/scand-osticket-connector/
[6]: https://href.li/?http://your.domain/api/tickets.json
[7]: https://href.li/?https://products.containerize.com/helpdesk/osticket
[8]: https://href.li/?https://products.containerize.com/blogging/wordpress
[9]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
