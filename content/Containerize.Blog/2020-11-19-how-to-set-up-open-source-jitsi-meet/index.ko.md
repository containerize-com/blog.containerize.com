---
title: "오픈 소스 Jitsi Meet 설정을위한 단계별 가이드" 
seoTitle: "오픈 소스 Jitsi Meet 설정을위한 단계별 가이드" 
description: "Jitsi 모임을 설정하는 방법을 배우십시오. 원격 커뮤니케이션 요구를 충족하도록 설계된 오픈 소스 화상 회의 소프트웨어이며 강력한 기능을 제공합니다." 
date: Thu, 19 Nov 2020 09:32:35 +0000
author: muhammadmustafa
summary: "Jitsi Meet은 원격 사람들을 모아 효과적인 회의를 실시합니다. 이 화상 회의 소프트웨어를 설정하고 기능을 탐색하는 방법을 배우겠습니다." 
url: /ko/how-to-set-up-open-source-jitsi-meet/
categories: ['Video Conferencing Software']
---

## Jitsi Meet은 원격 사람들을 하나로 모으기 위해 효과적인 회의를합니다. 이 화상 회의 소프트웨어를 설정하고 기능을 탐색하는 방법을 배우겠습니다.

{{< figure align=center src="images/jitsi-bannerF.png" alt="화상 회의 소프트웨어">}}


## 개요
우리는 최근 [블로그 게시물][1]을 기업 부문에 대한 [화상 회의 소프트웨어][2]의 영향에 대해 이야기했습니다. 그러나이 기사에서는 다음 사항을 다룰 것입니다.
  * [Jitsi Meet의 간단한 소개][3]
  * [Jitsi 모임을 설정하는 방법?][4]
  * [Jitsi는 특징 탐사를 만난다][5]
  * [결론][6]

## Jitsi의 간단한 소개 {#intro}

[Jitsi Meet][7]는 완전 무료 오픈 소스, 안전하고 확장 가능한 비디오 협업 소프트웨어입니다. 전체 암호화, EtherPAD 지원 및 비디오/오디오 녹음을 통한 다자 화상 회의와 같은 몇 가지 인기있는 기능을 제공합니다. 이 WEBRTC 호환 소프트웨어를 사용하면 비디오 회의에 원하는만큼 많은 사용자를 초대 할 수 있습니다.
가상 회의의 증가는 최근에 시작되었으며 사람들은 비디오/오디오 통화를 통한 커뮤니케이션이 더 효과적이고 협력 적이라고 생각합니다. 무엇 보다도이 범주의 소프트웨어는 랩톱/데스크탑에서 작동 할뿐만 아니라 참가자가 휴대 전화를 통해 보안 비디오 회의에 참석할 수 있습니다.

## Jitsi 모임을 설정하는 방법? {#setup}

이 섹션에서는 Jitsi Meet의 설치 프로세스에 들어갑니다. 먼저 다음 사전 반품을 설치했는지 확인하십시오.
  * [Docker][8]
Docker가 설치되면이 [Link][9]에서 소스 코드의 zip 파일을 다운로드하십시오.
터미널을 열고 다음 명령을 실행하십시오
`CD Docker-Jitsi-Meet`
그런 다음 다음 명령을 실행하여`.env`를 만듭니다.
`cp env.example .env`
이제 필요한 디렉토리를 만들려면 다음 명령을 실행하십시오.
`mkdir -p ~/.jitsi-meet-cfg/{Web/letsencrypt, 성적표, 프로디/구성, 프로디/프로디/플루그 핀-코스트, jicofo, jvb, jigasi, jibri}`
마지막 으로이 명령을 실행하여 Docker 이미지를 회전시키고 브라우저 의이 URL에서 응용 프로그램에 액세스하십시오.
`docker -compose -d`

## Jitsi는 기능 탐색을 만납니다 {#features}

이 무료 비디오 채팅 소프트웨어는 많은 풍부한 기능을 제공합니다. 이것은 먼저 표시 될 홈페이지입니다.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.15.55_-1024x585.jpg" alt="화상 회의">}}

회의의 캡션을 입력하고“Go”를 누르면 다음 비디오 스트림 창에 착륙합니다.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.30.25_-1024x585.jpg" alt="오픈 소스 소프트웨어">}}

팝업 창에 표시된 링크를 공유하여 사람들을 회의에 초대 할 수 있습니다. 또한 코드를 얻어 비디오 스트림을 어디에서나 포함시킬 수 있습니다.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.10_-1024x584.jpg" alt="오픈 소스 소프트웨어">}}

화면을 다른 참가자와 공유 할 수있는 옵션을 제공합니다.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.28_.jpg" alt="영상 채팅">}}

오른쪽 상단에서 비디오 연결의 세부 사항을 볼 수 있습니다.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.51_.jpg" alt="무료 영상 채팅">}}

Jitsi Meet은 이모티콘과의 통합 채팅을 제공합니다.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.57_.jpg" alt="비디오 회의 소프트웨어">}}


## 결론 {#con}

이 기사에서는 멋진 원격 통신 소프트웨어와 설치 프로세스를 거쳤습니다. 또한 비즈니스 요구 사항을 진화하는 기술과 동기화 할 수있는 최상의 솔루션을 선택할 때가되었습니다. 결국, [Containerize.com][10]은 화상 회의 소프트웨어 목록을 확장하기 위해 노력하고 있습니다. 따라서 정기적 인 업데이트를 위해 [비디오 회의 소프트웨어][2] 카테고리와 연결하십시오.

## 관련 제품 페이지
다음 링크를 찾을 수 있습니다.
  * [Jitsi Meet][7]
  * [BigBlueButton][11]
  * [OpenVidu][12]
  * [요소][13]
  * [와이어][14]



[1]: https://blog.containerize.com/video-conferencing-software/video-conferencing-apps-how-it-benefits-your-business/
[2]: https://products.containerize.com/video-conferencing/
[3]: #intro
[4]: #setup
[5]: #features
[6]: #con
[7]: https://products.containerize.com/video-conferencing/jitsi
[8]: https://www.docker.com/products/docker-desktop
[9]: https://github.com/jitsi/docker-jitsi-meet/releases/tag/stable-5142
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/video-conferencing/bigbluebutton
[12]: https://products.containerize.com/video-conferencing/openvidu
[13]: https://products.containerize.com/video-conferencing/element
[14]: https://products.containerize.com/video-conferencing/wire
