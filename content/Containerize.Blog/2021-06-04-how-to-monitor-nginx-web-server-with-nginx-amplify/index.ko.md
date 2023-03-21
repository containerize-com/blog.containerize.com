---
title: "Nginx Amplify를 사용하여 Nginx 웹 서버를 모니터링하는 방법" 
seoTitle: "Nginx Amplify를 사용하여 Nginx 웹 서버를 모니터링하는 방법" 
description: "Nginx Amplify는 Nginx 웹 서버 및 PHP 응용 프로그램의 무료 모니터링 에이전트입니다. 이 기사는 Nginx Amplify를 사용하여 Nginx 웹 서버를 모니터링하는 방법에 관한 것입니다." 
date: Fri, 04 Jun 2021 19:08:47 +0000
author: Masood Anwer
summary: "Nginx, PHP 응용 프로그램, Nginx Amplify를 사용하여 운영 체제를 모니터링하고 구성을 개선합니다. 이 기사는 Nginx Amplify를 설정하고 구성하도록 안내합니다." 
url: /ko/how-to-monitor-nginx-web-server-with-nginx-amplify/
categories: ['Web Server Solution Stack']
---

## nginx, PHP 애플리케이션, Nginx Amplify가있는 운영 체제 및 구성을 개선합니다. 이 기사는 Nginx Amplify를 설정하고 구성하도록 안내합니다.

{{< figure align=center src="images/nginx-post.png" alt="Nginx Amplify를 사용하여 Nginx 웹 서버를 모니터링하십시오">}}


## 개요   {#install}
**웹 서버 모니터링 **는 교통량이 많은 웹 사이트에서 매우 중요합니다. **모니터링 에이전트** 는 정기적으로 웹 서버에 대한 필수 메트릭을 기록합니다. 이러한 중요한 메트릭은 NGINX 구성을 최적화하는 데 사용될 수 있습니다. 웹 서버 및 응용 프로그램의 성능을 향상시키는 데 도움이됩니다.
이 블로그 게시물에서는 **nginx 모니터링**  오픈 소스 도구에 대한 다음 섹션을 다룰 것입니다.
  * [nginx 웹 서버][1]
  * [nginx 증폭][2]
  * [Nginx Amplify 설치][3]
  * [메트릭 모니터링][4]

## nginx 웹 서버   {#nginx}
[Nginx][5]는 무료 및 오픈 소스 웹 서버입니다. Apache보다 간단하고 가볍고 구성하기 쉽습니다. Nginx 웹 서버는 역시 프록시,로드 밸런서, 메일 프록시 및 HTTP 캐시 역할도합니다. HTTP, HTTPS, SMTP, POP3 및 IMAP 프로토콜에서 작동합니다. Nginx는 응용 프로그램의 성능을 향상시키는 고속, 신뢰할 수 있으며 메모리 효율적인 웹 서버입니다. 또한 인기가 높아졌으며 현재 가장 인기있는 웹 서버로 간주됩니다. 또한 NGINX는 트래픽이 많은 사이트 및 응용 프로그램을 포함한 모든 유형의 웹 사이트에 적합합니다. 거의 모든 운영 체제에 설치 및 구성 할 수 있습니다.

### nginx를 설치하십시오
  * 아래 명령을 실행하여 Nginx 웹 서버를 설치하십시오.
```
sudo apt update
sudo apt install nginx
```
  * 설치가 완료되면 브라우저를 열고“http : // ip \ _of \ _your_server”를 입력하십시오. 아래의 환영 페이지가 표시됩니다.

{{< figure align=center src="images/nginx-home.png" alt="Nginx에 오신 것을 환영합니다!">}}


## nginx amplify   {#amplify}
Nginx Amplify는 Nginx 오픈 소스, Nginx Plus 및 PHP-FPM을위한 무료 모니터링 도구입니다. NGINX 서버 모니터링 및 응용 프로그램을위한 SAAS 기반 도구입니다. 사용자는 인프라 자산을 쉽게 추적하고 성능을 모니터링하며 구성을 조정할 수 있습니다. 사용자가 웹 서버 및 애플리케이션 구성을 최적화하는 데 활용할 수있는 포괄적 인 정보를 제공합니다. NGINX 및 PHP 응용 프로그램을 호스팅하는 서버의 에이전트 역할을합니다. Nginx Amplify는 가벼운 푸시 로그 및 데이터를 모니터링하여 성능을 손상시키지 않고 서버를 증폭시킵니다. Amplify 대시 보드에서 메트릭을 볼 수 있습니다. 이 에이전트는 Rhel, Centos, Ubuntu, Debian, Fedora 및 FreeBSD와 같은 모든 1 차 운영 체제에 사용할 수 있습니다. Nginx Amplify에는 Nginx Amplify Agent, Nginx Amplify Web UI 및 Nginx Amplify 백엔드와 같은 세 가지 주요 구성 요소가 있습니다.
  ***Nginx Amplify Agent**  - 모니터링중인 시스템에서 작동합니다. 모든 통신은 SSL/TLS를 사용하여 암호화됩니다.
  ***Nginx는 웹 UI**  - 웹 UI가 웹 서버, 응용 프로그램 및 운영 체제의 메트릭을 보여줍니다.
  ***Nginx는 백엔드를 증폭시킵니다.**  - SAAS로 구현되고 메트릭을 수집하고 데이터베이스를 유지 관리하고 분석 엔진을 실행하며 핵심 API를 제공하는 핵심 구성 요소입니다.

## nginx amplify   {#install} 설치
Ubuntu에 Nginx Amplify 설치를 위해 아래 단계별 가이드를 따르십시오.
  * 먼저 Nginx [웹 사이트][6]에서 계정을 만들어야합니다.
  * 로그인 후 아래 화면이 Nginx Amplify 웹 사이트에 표시됩니다. 이제 SSH를 통해 서버에 연결하고 아래 단계에 제공된 명령을 사용하십시오.

{{< figure align=center src="images/amplify-1.png" alt="Nginx Amplify를 설치하십시오">}}

  * 에이전트를 다운로드하려면 아래 명령을 실행하십시오.
```
$ sudo wget https://github.com/nginxinc/nginx-amplify-agent/raw/master/packages/install.sh
```
  * 다음 명령을 실행하여 서버에 nginx 앰프를 설치하십시오. XXXXX를 실제 API 키로 바꾸십시오. Nginx Amplify 대시 보드에서 찾을 수 있습니다.
```
$ API_KEY='XXXXXXXX' sh ./install.sh
```
  * 설치가 완료되면 다음 명령으로 상태를 확인할 수 있습니다.
```
$ sudo service amplify-agent status
```
  * 이제 메트릭을보기 위해 Nginx Amplify 에이전트를 구성해야합니다.

{{< figure align=center src="images/amplify-2-1.png" alt="NGINX 모니터링 구성">}}

  * stub_status 구성으로 새 파일을 만듭니다.
```
$ sudo nano /etc/nginx/conf.d/stub_status.conf
```
  * 아래 코드를 복사하고 파일을 저장하십시오.
```
server {
  listen 127.0.0.1:80;
  server_name 127.0.0.1;
    location /nginx_status {
    stub_status on;
    allow 127.0.0.1;
    deny all;
  }
 }
```
  * nginx 웹 서버를 다시 시작하여 stub_status 모듈을 활성화하십시오.
```
$ sudo service nginx restart
```
  * 이제 다음 명령으로 nginx 구성 파일을 엽니 다.
```
$ sudo nano /etc/nginx/nginx.conf
```
  * 아래 코드를 추가하고 저장하십시오.
```
error_log /var/log/nginx/error.log warn;
access_log /var/log/nginx/access.log main_ext;
log_format main_ext '$remote_addr - $remote_user [$time_local] "$request" ' '$status $body_bytes_sent "$http_referer" ' '"$http_user_agent" "$http_x_forwarded_for" ' '"$host" sn="$server_name" ' 'rt=$request_time ' 'ua="$upstream_addr" us="$upstream_status" ' 'ut="$upstream_response_time" ul="$upstream_response_length" ' 'cs=$upstream_cache_status' ;
```
  * 모든 변경 사항을 적용하려면 NGINX 서비스를 다시 시작하십시오.
```
$ sudo service nginx restart
```
  * 다음으로, 대시 보드를 증폭시키고 '마무리'버튼을 클릭하십시오. 다음 페이지가 표시됩니다.

{{< figure align=center src="images/amplify-after-finish-1024x503.png" alt="웹 서버 모니터링">}}

  ***개요**  탭을 클릭하여 더 쉽고 읽을 수있는 형식의 통계를 볼 수 있습니다. 아래에 표시된 것처럼 보입니다.

{{< figure align=center src="images/amplify-overview.png" alt="NGINX 모니터링 통계">}}


## 모니터링 메트릭   {#Monitoring}
Nginx Amplify Agent는 다음 유형의 데이터를 수집합니다.
  ***nginx 메트릭** -stub_status, 로그 파일 및 프로세스 상태에서 다양한 nginx 관련 메트릭을 수집합니다.
  ***시스템 메트릭**  - Nginx는 CPU 사용, 메모리 사용, 네트워크 트래픽 등과 같은 다양한 시스템 메트릭을 모니터링합니다.
  ***PHP-FPM 메트릭** -실행중인 PHP-FPM 마스터 프로세스를 식별하면 PHP-FPM 풀 상태에서 메트릭을 얻습니다.
  ***MySQL 메트릭**  - MySQL 글로벌 지위 변수 세트는 에이전트가 메트릭을 수집하는 데 사용할 수 있습니다.
  ***nginx 메타 데이터**  - 에이전트는 패키지 데이터, 빌드 정보, 이진 경로, 구성 설정 빌드 등과 같은 NGINX 인스턴스에 대한 데이터를 수집합니다.
  ***시스템 메타 데이터**  - 에이전트는 호스트 이름, 가동 시간, OS 풍미 및 기타 세부 사항을 포함하여 운영 체제에 대한 데이터를 수집합니다.

## 결론
우리는 Nginx 웹 서버와 Nginx Amplify Advanced Monitoring Agent를 자세히 살펴 보았습니다. Nginx Amplify는 설정 및 구성이 매우 간단합니다. 또한 Nginx **를 모니터링하기 위해 중요한 메트릭 NGINX AMPLIFY가 추적 할 수있는 것을 해결했습니다. 이러한 중요한 메트릭은 NGINX 웹 서버 및 앱의 구성을 향상시키는 데 사용될 수 있습니다.
마지막으로, [Containerize.com][7]는 최신 오픈 소스 제품에 대한 블로그 게시물을 작성하는 일관된 프로세스에 있습니다. 따라서 최신 업데이트를 위해이 [Web Server Solution Stack][8] 카테고리와 연락하십시오.

## 탐구하다
다음 링크를 찾을 수 있습니다.
  * [응용 프로그램의로드 밸런서로 nginx를 사용하는 방법][9]
  * [Nginx를 리버스 프록시로 설정하고 구성하는 방법][10]

  
[1]: #Nginx
[2]: #Amplify
[3]: #Install
[4]: #Monitoring
[5]: https://products.containerize.com/solution-stack/nginx
[6]: https://amplify.nginx.com/signup/
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/web-server-solution-stack/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
