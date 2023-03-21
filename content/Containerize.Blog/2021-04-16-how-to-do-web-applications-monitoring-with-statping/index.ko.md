---
title: "스 태핑으로 웹 응용 프로그램 모니터링을 수행하는 방법" 
seoTitle: "스 태핑으로 웹 응용 프로그램 모니터링을 수행하는 방법" 
description: "Statping은 모든 서비스를 모니터링 할 수있는 최고의 웹 사이트 모니터링 도구 중 하나입니다. 쇼케이스 서비스 가동 시간에 아름다운 상태 페이지를 렌더링하십시오." 
date: Fri, 16 Apr 2021 18:12:12 +0000
author: Masood Anwer
summary: "무료 모니터링 도구를 사용하여 웹 사이트, 웹 응용 프로그램, API를 자동으로 모니터링하고 오픈 소스 상태 페이지 시스템을 사용하여 서비스 가동 시간을 보여줍니다." 
url: /ko/how-to-do-web-applications-monitoring-with-statping/
categories: ['Status Page']
---

## 무료 모니터링 도구를 사용하여 웹 사이트, 웹 응용 프로그램, API를 자동으로 모니터링하고 오픈 소스 상태 페이지 시스템을 사용하여 서비스 가동 시간을 보여줍니다.

{{< figure align=center src="images/How-to-monitor-websites-with-statping.png" alt="웹 응용 프로그램 모니터링">}}

Statping은 **오픈 소스 상태 페이지 소프트웨어 **이며  **최고의 웹 사이트 모니터링 도구**   중 하나입니다. 또한 HTTP, TCP, UDP, ICMP 및 GRPC 서비스와 같은 서비스 모니터링에도 사용됩니다. Statping은 자동으로 서비스를 가져오고 모니터링하며 아름다운 상태 페이지를 렌더링합니다. 크로스 플랫폼이며 Liunx, Mac 및 Windows 운영 체제에 설치할 수 있습니다. 또한 정보 저장을 위해 MySQL, Postgres 또는 SQLite 데이터베이스 시스템을 사용할 수 있습니다. 또한 iPhone 및 Android 장치 용 Box 모바일 애플리케이션에서 제공됩니다.
Statping의 핵심 기능을 살펴 보겠습니다.
  ***서비스 모니터링**  - Statping을 사용하면 모든 HTTP, TCP, UDP, GRPC 및 ICMP 서비스를 쉽게 추적 할 수 있습니다.
  ***알림** -Statping은 알림 수신을위한 대부분의 주요 타사 응용 프로그램을 지원합니다.
  ***모바일 앱**  - iPhone 및 Android 장치 용 무료 앱을 사용하고 이동 중에 모든 것을 관리하십시오.
  ***Oauth Authenticatio**  N - Github, Google, Slack 및 Custom OpenID 제공 업체와 같은 인기있는 서비스에 대한 OAUTH 인증을 지원합니다. 이 기능을 사용하고 보안을 향상시킵니다.
이 튜토리얼에서 다음 주제를 다룰 것입니다.
  * [Linux에 설치][1]
  * [SystemD 서비스 구성][2]
  * [모니터링을위한 서비스 생성][3]
  * [결론][4]

## Linux에 설치   {#installing}
Statping 설치를 위해 아래 명령을 실행하십시오.
```
curl -o- -L https://statping.com/install.sh | bash
```

## systemd 서비스   {#configure} 구성
SystemD 서비스를 설정하면 필요한 경우 스 태핑 서버를 자동으로 재부팅 할 수있는 훌륭한 방법입니다. SystemD 서비스를 만들려면 아래 단계를 따르십시오.
  * 먼저 아래 명령을 실행하여 새 파일을 만듭니다.
```
sudo nano /etc/systemd/system/statping.service
```
  * 아래 코드를 복사하여 붙여 넣습니다.
```
[Unit]
Description=Statping Server
After=network.target
After=systemd-user-sessions.service
After=network-online.target

[Service]
Type=simple
Restart=always
ExecStart=/usr/local/bin/statping
WorkingDirectory=/usr/local/bin

[Install]
WantedBy=multi-user.target
```
  * 마지막으로 아래 명령을 사용하여 SystemD 서비스를 활성화하고 시작하십시오.
```
systemctl daemon-reload
systemctl enable statping
systemctl start statping
```

## 모니터링을위한 서비스 작성   {#Create}
  * 브라우저를 열고 통계 설치에 로그인하려면 URL을 입력하십시오.
  * 최고 탐색에서 서비스 링크를 클릭하십시오. 아래에서 보이는 서비스 페이지를 보여줍니다.

{{< figure align=center src="images/statping-dashboard.png" alt="웹 서비스 모니터링 목록">}}

  * 생성 버튼을 클릭하여 모니터링을 위해 새 서비스를 추가하십시오. 서비스 이름, 서비스 유형, 확인 간격, 서비스 엔드 포인트 (URL) 등과 같은 필수 필드를 채우십시오.

## 결론   {#conclusion}
Statping, Linux에 설치하는 방법 및이 자습서에서 SystemD 서비스를 만드는 방법에 대해 배웠습니다. 또한 다양한 기능에 대해 모니터링하고 소개하기위한 새로운 서비스를 만들었습니다. 이 안내서가 **웹 서비스 모니터링  **및 **  웹 애플리케이션 모니터링** 를 수행하는 데 Statping을 사용하는 데 도움이되기를 바랍니다.
마지막으로, [**containerize.com **][5]는 최신 오픈 소스 제품에 대한 블로그 게시물을 작성하는 일관된 프로세스에 있습니다. 따라서 최신 업데이트에 대한이 [ **상태 페이지**  ][6] 카테고리와 연락하십시오.

## 탐구하다
다음 링크를 찾을 수 있습니다.
  *[**2020의 상위 5 개 오픈 소스 상태 페이지 소프트웨어** ][7]
  *[**Statping** ][8]
  *[**Cachet** ][9]
  *[**모니터** ][10]
  *[**Staytus** ][11]
  *[**upptime** ][12]
  *[**statusfy** ][13]

  
[1]: #Installing
[2]: #Configure
[3]: #Create
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/status-page/
[7]: https://blog.containerize.com/status-page/top-5-open-source-status-page-software-for-2020/
[8]: https://products.containerize.com/status/statping
[9]: https://products.containerize.com/status/cachet/
[10]: https://products.containerize.com/status/monitoror/
[11]: https://products.containerize.com/status/staytus/
[12]: https://products.containerize.com/status/upptime/
[13]: https://products.containerize.com/status/statusfy/
