---
title: "웹 사이트에서 라이브 채팅 소프트웨어를 설정하는 방법 | rocket.chat" 
seoTitle: "웹 사이트에서 라이브 채팅 소프트웨어를 설정하는 방법 | rocket.chat" 
description: "Rocket.chat는 설정하기 쉽고 팀과 고객이 효율적으로 의사 소통하는 데 도움이됩니다. 이 라이브 채팅 소프트웨어는 오픈 소스, 크로스 플랫폼 및 자조 주최입니다." 
date: Thu, 24 Dec 2020 10:37:56 +0000
author: Assad Mahmood
summary: "라이브 채팅 지원 소프트웨어는 고객 지원을 제공하는 데 편의성과 효율성을 제공합니다. 비즈니스 웹 사이트에 Rocket.chat을 설치하는 방법을 배우겠습니다." 
url: /ko/how-to-setup-live-chat-software-on-website-rocket-chat/
categories: ['Live Chat']
---

## 라이브 채팅 지원 소프트웨어는 고객 지원을 제공하는 데 편의성과 효율성을 제공합니다. 비즈니스 웹 사이트에 Rocket.chat을 설치하는 방법을 배우겠습니다.

{{< figure align=center src="images/rocketchat-1.png" alt="라이브 채팅 소프트웨어">}}


## 개요
우리는 [Top 5 무료 고객 지원 채팅 소프트웨어를위한 상위 5 개 고객 지원 채팅 소프트웨어][1], [Rocket.chat][2] 등과 같은 오픈 소스 라이브 채팅 소프트웨어와 관련된 일부 블로그 게시물을 게시했습니다. 이 블로그 게시물에서는 최고의 고객 지원 소프트웨어 Rocket.Chat을 살펴 보겠습니다. 온라인 트래픽이 크게 증가함에 따라 기업들은 정시에 많은 문의를 즐기기가 어렵다는 것을 알게되었습니다. 방문자는 귀하의 사이트에 와서 제품이나 서비스와 관련된 정보를 얻는 경향이 있으며 응답이없는 경우 사이트를 떠납니다. 따라서 라이브 채팅 지원은 고객이 웹 사이트를 진행하는 동안 사전에 인사하는 데 도움이됩니다. 또는 구매 결정을 내리기 위해 도움과 설명이 필요한 경우.
라이브 채팅 지원은 방문자를 고객으로 전환 할 가능성이 높아집니다. 많은 오픈 소스**라이브 채팅 지원 소프트웨어**e가 있습니다. 그러나 Rocket.chat은 그 기능 때문에 많은 매력을 얻었습니다. 또한 Slack 및 Microsoft Team과 같은 업계 최고의 채팅 소프트웨어의 대안으로 취급되고 있습니다. 이 기사에서는 서버에 Rocket.chat을 설치하는 방법과 웹 사이트에서 구성하는 방법을 배웁니다. 다음 점을 다루어 시작하겠습니다.
* [**rocket.cha**t?][3]
* **[로켓을 설치하는 방법 .Chat? 춘다?] ..4]
* **[라이브 채팅 기능 활성화][5]**
* **[웹 사이트에 라이브 채팅 위젯 설치][6]**
* **[결론][7]**

## rocket.chat   {#intro}
[Rocket.chat][8]는 인기있는**라이브 채팅 소프트웨어**중 하나입니다. 커뮤니티 에디션으로서 무료 라이브 채팅 버전과 개인 내부 채팅 기능이있는 대기업을위한 유료 호스팅 라이브 채팅 버전이 있습니다. Rocket.chat은 팀 채팅 기능과 함께 라이브 채팅 고객 지원을 지원합니다. 크로스 플랫폼이며 Windows, Mac, Linux 및 모바일 앱과 같은 거의 모든 인기있는 플랫폼을 지원합니다. 이**고객 지원 소프트웨어**는 안전하고 확장 가능하며 Trello, Google Drive 등과 같은 타사 인기 앱과 통합을 제공합니다. Rocket.Chat은 여러 객실, 개인 대화방 및 그룹, 알림, 이모티콘, LDAP 인증 및 편안한 인터페이스와 같은 많은 강력한 기능이 있습니다. 또한이 무료 도구는 배포하기 쉽고 자체 호스팅 기능이 제공됩니다. 또한 사용자가 어둡거나 빛 또는 검은 색과 같은 테마를 수정할 수있는 논리적이고 사용자 친화적 인 인터페이스를 제공합니다.
이**채팅 지원 소프트웨어**는 JavaScript로 작성되었으며 개발 및 배포와 관련된 모든 문서를 사용할 수 있습니다. 따라서 [github][9]에서 모든 소스 코드를 찾을 수 있습니다. 자세한 내용은 Rocket.chat [여기][10]에 대해 읽을 수 있습니다.

## Rocket.chat   {#install}을 설치하는 방법
따라서 Rocket.chat이 무엇인지 알고이 섹션에서는이 라이브 채팅 소프트웨어를 설치하는 방법을 배웁니다. Ubuntu Snaps, DockerHub와 같은 다양한 마켓 플레이스에서 Rocket.Chat을 설치하거나 자신의 서버에 설치할 수 있습니다. 이 기사에서는 Ubuntu의 Snaps를 통한 Rocket.chat의 설치에 중점을 둘 것입니다. 이것이 가장 빠른 설치 방법입니다.
스냅은 안전합니다. Rocket.chat 및 모든 종속성은 시스템의 나머지 부분에서 분리됩니다. 새 릴리스가있을 때도 자동 업데이트가 스냅됩니다.
우분투에서 다음 명령으로 Snap을 설치하십시오.
```
sudo apt-get install snapd
```
그런 다음 Snap 명령을 통해 Rocket.chat 서버를 설치하십시오.
```
sudo snap install rocketchat-server
```
Snap은 이미 가동되었습니다. http : // localhost : 3000으로 찾아보고 로켓을 설정하십시오. 도메인과 함께 Rocket.Chat 인스턴스를 MANGINX 프록시를 구성 할 수 있습니다.

## 라이브 채팅 기능   {#enable} 활성화
Rocket.chat 소프트웨어가 설치되고 구성되면 다음 단계는 기능을 활성화하는 것입니다. 이 블로그 게시물 의이 섹션에서는 웹 사이트에서 채팅 지원 소프트웨어**를 활성화하는 방법에 대해 설명합니다. 로켓에서 LiveChat 기능을 활성화하려면 Chat 인스턴스 :
1.**행정**로 이동

{{< figure align=center src="images/go-to-administration-1024x324.png" alt="로켓. 차트 관리">}}

2.‘**omnichannel**‘**설정**를 검색하고 활성화하십시오.

{{< figure align=center src="images/search-omini-in-settings-1024x453.png" alt="Rocket.Chat 검색 Omini">}}

일단 활성화되면 관리자는 왼쪽 상단 코너 드롭 다운 메뉴에서 Omnichannel이라는 새 메뉴를 통해 Omnichannel 패널 설정에 액세스 할 수 있습니다.

{{< figure align=center src="images/omini-channel-menu-1024x324.png" alt="Rocket. Chat Omini 채널">}}

그런 다음 라이브 채팅 위젯의 모양과 느낌을 구성하십시오.

{{< figure align=center src="images/livechat-widget-demo-1-1024x724.png" alt="Rocket.Chat LiveChat 위젯">}}


## **웹 사이트에 라이브 채팅 위젯을 설치하십시오** {#widget}
이 섹션에서는 비즈니스 웹 사이트에 라이브 채팅 위젯을 설치합니다. 이제**LiveChat 설치**설정에 액세스하려면 : 설정 :
아래와 같이 옴니 채널 패널 설정에서**LiveChat 설치**로 이동하여 주어진 코드를 복사하십시오.

{{< figure align=center src="images/widget-install-1-1024x488.png" alt="로켓. 차트 위젯">}}

그리고 사이트의 마지막 태그 위에이 코드를 붙여 넣으십시오. 라이브 채팅 위젯이 웹 페이지의 오른쪽 하단에 나타납니다. 라이브 채팅 구성에 따라 아래에 표시된대로.
{{_LINE_46_}}

{{< figure align=center src="images/rocket.chat-widget-edited.png" alt="라이브 채팅 소프트웨어">}}

{{_LINE_48_}}

## 결론   {#conclusion}
이것은 우리를이 블로그 게시물의 끝으로 가져옵니다. 이 기사에서는 Rocket.chat, Rocket.chat을 설치하는 방법을 살펴 보았으며 Ubuntu Snaps를 통해 자신의 서버에 설치하는 방법도 보여주었습니다. 또한 라이브 채팅 기능을 활성화하고 웹 사이트에 위젯을 설치하는 방법을 배웠습니다. 또한**고객 지원 소프트웨어**는 위에서 논의한 특정 요인으로 인해 모든 비즈니스 웹 사이트의 필수 구성 요소가되었습니다. 그러나이 블로그 게시물은 비즈니스 웹 사이트에 오픈 소스 라이브 채팅 소프트웨어를 배포하려는 경우 실제로 도움이됩니다. 또한 아래의 "탐색"섹션에는 체크 아웃 할 수있는 다른 많은**채팅 지원 소프트웨어**및 기사가 있습니다.
마지막으로, [**containerize.com**][11]는 추가 오픈 소스**오픈 소스 채팅 앱에 기사를 작성하고 있습니다.**정기적 인 업데이트를 위해 [Live Chat][12] 범주와 연락하십시오. 또한 소셜 미디어 계정 [Facebook][13], [LinkedIn][14] 및 [Twitter][15]에서 우리를 따라갈 수 있습니다.

## 탐구하다
다음 링크가 관련이있을 수 있습니다.
  * [Zulip][16]
  * [lets-chat][17]
  * [Botpress][18]
  * [Botpress를 사용하여 비즈니스를위한 AI 기반 FAQ 봇을 만드는 방법][19]
  * [웹 사이트 용 5 개의 무료 고객 지원 채팅 소프트웨어][1]
  * [로켓을 사용한 WordPress 인스턴트 메시징][2]
  * [무료 및 오픈 소스 소프트웨어를 사용하여 비즈니스 운영 자동화][20]
  * [로켓에서 봇을 생성하고 실행하는 방법.
  * [무료 및 오픈 소스 소프트웨어를 사용하여 비즈니스 운영 자동화][20]

  
[1]: https://blog.containerize.com/live-chat/top-5-free-customer-support-chat-software-for-website/
[2]: https://blog.containerize.com/blogging/instantly-communicate-with-customers-using-wordpress-and-rocket-chat/
[3]: #intro
[4]: #install
[5]: #enable
[6]: #widget
[7]: #conclusion
[8]: https://products.containerize.com/live-chat/rocketchat/
[9]: https://github.com/RocketChat/Rocket.Chat
[10]: https://products.containerize.com/live-chat/rocketchat
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/live-chat/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://products.containerize.com/live-chat/zulip/
[17]: https://products.containerize.com/live-chat/lets-chat/
[18]: https://products.containerize.com/live-chat/botpress/
[19]: https://blog.containerize.com/live-chat/how-to-create-an-ai-based-faq-bot-for-your-business-using-botpress/
[20]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[21]: https://blog.containerize.com/live-chat/how-to-create-and-run-a-bot-in-rocket-chat-using-botpress/
