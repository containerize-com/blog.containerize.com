---
title: "캐시에서 웹 애플리케이션 모니터링을 자동화하는 방법" 
seoTitle: "캐시에서 웹 애플리케이션 모니터링을 자동화하는 방법" 
description: "Cachet은 모든 서비스를 모니터링하고 구독자에게 즉시 알리는 데 도움이됩니다. 이 기사는 타사 플러그인을 통합하여 모니터링을 자동화하는 것에 관한 것입니다." 
date: Fri, 04 Dec 2020 19:42:42 +0000
author: Masood Anwer
summary: "Cachet Status Page를 사용하면 기업이 서비스 다운 타임에 대한 즉각적인 알림을받을 수 있습니다. 캐시에서 웹 애플리케이션 모니터링을 자동화하는 방법을 배웁니다." 
url: /ko/how-to-automate-application-monitoring-in-cachet/
categories: ['Status Page']
---

## Cachet Status Page를 사용하면 비즈니스가 서비스 다운 타임에 대한 즉각적인 알림을받을 수 있습니다. 캐시에서 웹 애플리케이션 모니터링을 자동화하는 방법을 배웁니다.

{{< figure align=center src="images/cachet-monitor.png" alt="웹 응용 프로그램 모니터링">}}

애플리케이션 및 서비스 모니터링은 온라인 비즈니스에서 매우 중요한 부분입니다. 귀하의 웹 사이트는 24x7을 실행하며 언제든지 잘못 될 수 있습니다. 방문 할 때까지 어느 사이트가 작동하는지 알 수 없습니다. 또한 고객은이 문제에 대한 정보가 없습니다. 서비스 다운 타임은 지원 팀에 연락 할 수 있습니다. 또한 이로 인해 고객이 실망하게 될 수 있습니다. 그러나 상태 페이지 시스템을 구성하여 서비스 다운 타임을 줄일 수 있습니다. 상태 페이지 시스템은 24 시간 내내 모든 서비스를 모니터링하고 즉시 팀과 고객에게 알림을 보냅니다. 이를 통해 문제를 해결하기 위해 빠른 조치를 취할 수 있으며 클라이언트는 진행 상황을 계속 업데이트합니다. 이 블로그 게시물에서는**모니터링**을 위해**캐시 킷**와 타사 라이브러리를 통합하는 방법을 배우게됩니다.
  * [요구 사항][1]
  * [모니터링 모니터링 플러그인][2]
  * [Linux 서비스 생성][3]
  * [결론][4]

## 요구 사항   {#requirements}
  * Cachet의 최신 버전을 설치하십시오.
  * Linux 서비스에 익숙합니다.

## 설정 모니터링 플러그인   {#plugin}
다음은 우분투에서 모니터링하기위한 플러그인을 설치하고 구성하는 단계입니다.
  * [릴리스 페이지][5]에서 바이너리를 다운로드하십시오.
  * 파일의 이름을 캐시 넷 모니터로 바꿉니다.
  * 명령으로 파일 실행 파일을 만듭니다.
```
sudo chmod +x cachet-monitor
```
  * 실행 파일을 경로 디렉토리에 넣으면 터미널을 통해 직접 액세스 할 수 있습니다. 따라서**/usr/local/bin**아래로 이동하는 것이 좋습니다.
  * 다음 명령을 실행하여 config.json 파일을 만듭니다.
```
sudo nano config.json
```
  * 아래 코드를 복사하고 파일을 저장하십시오.
```
{
  "api": {
    "url": "https://demo.cachethq.io/api/v1",
    "token": "9yMHsdioQosnyVK4iCVR",
    "insecure": false
  },
  "date_format": "02/01/2006 15:04:05 MST",
  "monitors": [
    {
      "name": "google",
      "target": "https://google.com",
      "strict": true,
      "method": "POST",
      "component_id": 1,
      "metric_id": 4,
      "template": {
        "investigating": {
          "subject": "{{ .Monitor.Name }} - {{ .SystemName }}",
          "message": "{{ .Monitor.Name }} check**failed** (server time: {{ .now }})\n\n{{ .FailReason }}"
        },
        "fixed": {
          "subject": "I HAVE BEEN FIXED"
        }
      },
      "interval": 1,
      "timeout": 1,
      "threshold": 80,
      "expected_status_code": 200
    }
  ]
}
```
  * 이제이 명령으로 구성을 테스트하십시오.
```
cachet-monitor -c config.json
```
  * 모든 것이 잘 작동하면 다음 섹션으로 이동하여 Linux 서비스를 만듭니다.

## Linux 서비스 생성   {#service}
다음은 모니터링 프로세스를 자동화하기 위해 Linux 서비스를 작성하고 시작하는 단계입니다.
* 서비스 생성**Cachet-Monitor.service**파일.
```
sudo nano cachet-monitor.service
```
  * 아래 코드를 복사하고 파일을 저장하십시오.
```
[Unit]
Description=Cachet Monitor
After=syslog.target
After=network.target

[Service]
Type=simple
User=root
Group=root
WorkingDirectory=/usr/local/sbin
ExecStart=cachet-monitor -c /root/config.json
Restart=always
Environment=USER=root HOME=/root

[Install]
WantedBy=multi-user.target
```
  * 명령을 실행하여 SystemD 구성을 업데이트합니다.
```
sudo systemctl daemon-reload
```
  * Cachet Monitor Service를 사용하여 명령을 실행하여 시스템 시작에로드 할 수 있습니다.
```
sudo systemctl enable cachet-monitor.service
```

## 결론   {#conclusion}
Cachet A는 무료이며**오픈 소스 상태 페이지**시스템입니다. 그러나**웹 애플리케이션 모니터링**에 대한 상자 기능을 제공하지 않습니다. 대신, 사건, 구성 요소, 그룹 등과 같은 작업을 수행하는 데 사용할 수있는 강력한 REST API가 있습니다. 이 기사에서는 타사 플러그인을 사용하여 Cachet에서 응용 프로그램 모니터링을 자동화했습니다. 무엇보다도 자신의 플러그인을 개발하거나 기존 플러그인을 사용하여 작업을 수행 할 수 있습니다.
또한, [Containerize.com][6]는 여러 언어 및 프레임 워크로 오픈 소스 제품의 스택을 향상시키기위한 길에 있습니다. 정기적으로 업데이트하려면 더 흥미로운 기사를 보려면 [상태 페이지][7] 카테고리로 계속 지켜봐 주시기 바랍니다.

## 탐구하다
다음 링크를 찾을 수 있습니다.
  * [최고의 오픈 소스 상태 페이지 시스템][8]
  * [Cachet - 무료 및 오픈 소스 상태 페이지 소프트웨어][9]
  * [2020 년 상위 5 개 오픈 소스 상태 페이지 소프트웨어][10]

  
[1]: #Requirements
[2]: #Plugin
[3]: #Service
[4]: #Conclusion
[5]: https://github.com/CastawayLabs/cachet-monitor/releases
[6]: https://www.containerize.com/
[7]: https://blog.containerize.com/category/status-page
[8]: https://products.containerize.com/status
[9]: https://products.containerize.com/status/cachet
[10]: https://blog.containerize.com/status-page/top-5-open-source-status-page-software-for-2020/
