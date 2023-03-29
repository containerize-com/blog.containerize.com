---
title: "AWS 프로덕션 서버에서 승객으로 Nginx를 설정하는 방법" 
seoTitle: "AWS 프로덕션 서버에서 승객으로 Nginx를 설정하는 방법" 
description: "이 블로그 게시물은 APT 방법에 따라 Ubuntu 20.04 LTS 운영 체제를 통해 승객과 함께 Nginx 설치 단계를 설명합니다." 
date: Fri, 07 May 2021 15:19:29 +0000
author: yasir saeed
summary: "이 블로그 게시물은 APT 방법에 따라 Ubuntu 20.04 LTS 운영 체제를 통해 승객과 함께 NGINX 설치 단계를 설명합니다." 
url: /ko/how-to-setup-nginx-with-passenger-on-aws-production-server/
categories: ['Web Server Solution Stack']
---

##이 블로그 게시물은 APT 방법에 따라 Ubuntu 20.04 LTS 운영 체제를 통해 승객과 함께 Nginx를 설치하기위한 단계에 대해 설명합니다.

{{< figure align=center src="images/Nginx-With-Passenger-on-AWS-Production-Server.png" alt="AWS 프로덕션 서버에서 승객으로 Nginx를 설정합니다">}}


## **개요** :
생산 서버에 응용 프로그램을 배포하기 전에 AWS 제작 **서버의 승객을 사용하여** nginx를 설치하고 구성해야합니다.
**오픈 소스 Phusion 승객** 는 많은 사용자 정의 및 기능 옵션을 제공합니다. 승객 일부 기능은 응용 프로그램의 성능 특성을 향상시키는 데 사용됩니다. 일부 사용자 정의에 영향을 미치는 응용 프로그램 또는 연결 취급 동작 등에 영향을 미칩니다. 승객에 대한 두 가지 구성 옵션은 승객 \ _enabled 및 승객 \ _root로 지명 된 Nginx에서 설정해야합니다. 이 설치 프로세스는이 두 옵션을 자동으로 설정합니다.
이 블로그 기사에서는 **APT 메소드** 에 따라 Ubuntu 운영 체제에 웹 애플리케이션 서버를 설치하기위한 필수 구성 단계 중 일부를 다룰 것입니다. 아래 가이드를 읽고 팔로우 한 후 Node.js, Python 및 Ruby로 작성된 웹 응용 프로그램을 배포하고 관리 할 수 ​​있습니다.
* **Nginx와 승객은 무엇입니까?** 
* **Nginx 및 승객 패키지 설치** 
* **승객 Nginx 모듈을 활성화하고 Nginx를 다시 시작하십시오** 
* **설치 검증** 
* **시스템 및 승객 업데이트** 
* **최고의 오픈 소스 웹 서버** 
  * **결론** 

## 1. Nginx와 승객이란 무엇입니까? {#step-4:-update-regularly}

**[nginx 서버 란 무엇입니까?][1] **Nginx 및 smtp. 최대의 성능과 안정성을 위해 설계된 매우 확장 가능합니다. Nginx는 고성능 비동기식, 비 스레드 및 이벤트 중심 웹 서버로 동시에 여러 클라이언트 요청을 처리 할 수 ​​있습니다. Igor Sysoev가 2004 년에 2 명 BSD 라이센스의 조건에 따라 발표했습니다.** Nginx는 Apache보다 2.5 배 더 빠른**를 수행하며 벤치 마크 테스트에 따라 메모리를 적게 소비했습니다.
**[승객 란 무엇입니까?][2] **Phusion 승객은 mod \ _rails 및 mod \ _rack으로도 알려진 승객은 무료 웹 서버 및 오픈 소스 웹 애플리케이션 서버입니다. Apache 및 Nginx와 통합되는 빠르고 강력하며 기능이 풍부하고 경량이되도록 설계되었습니다. 또한 응용 프로그램의 보안, 신뢰성 및 확장 성을 향상시킵니다. 이를 통해 관리자는 웹 애플리케이션 작업, 서버 성능에 대한 통찰력을 얻을 수 있습니다. 승객 앱 서버는 웹 응용 프로그램을 쉽게 실행하고 자동 관리합니다. 또한 여러 응용 프로그램** 동시에 멀티 테넌트 및 독립형을 제공 할 수 있습니다. HTTP 요청을 처리하고 프로세스 및 리소스를 관리하며 관리 작업, 모니터링 및 문제 진단을 가능하게합니다. Phusion 승객은 Meteor, Ruby on Rails Nginx 승객, JavaScript, Python 및 Node.js 애플리케이션을 배포하고 관리하는 지원을 제공하는 무료 응용 프로그램 서버입니다.

## 2. Nginx 및 승객 패키지 설치 : {#step-1:-install-passenger-packages}

이제 승객과 Nginx를 설치할 때입니다. 이 안내서에 이어 인기있는 웹 서버 중 하나를 쉽게 배포 할 수 있습니다. 아래에 나열된 명령은 Phusion의 APT 저장소를 통해 승객 및 NGINX를 설치합니다. 이미 Nginx를 설치 한 경우이 명령은 승객을 컴파일 한 상태에서 Nginx를 Phusion 버전으로 업그레이드합니다.
```
# Install Ubuntu PGP key and add HTTPS support for APT
sudo apt-get install -y dirmngr gnupg
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 561F9B9CAC40B2F7
sudo apt-get install -y apt-transport-https ca-certificates

# Add and update phusionpassenger APT repository
sudo sh -c 'echo deb https://oss-binaries.phusionpassenger.com/apt/passenger xenial main > /etc/apt/sources.list.d/passenger.list'
sudo apt-get update

# Install Passenger with Nginx
sudo apt-get install -y nginx-extras passenger
```

## 3. 승객 Nginx 모듈을 활성화하고 Nginx를 다시 시작하십시오. {#step-2:-enable-the-passenger-nginx-module-and-restart-nginx}

/etc/nginx/nginx.conf edit and incomment는 /etc/nginx/passenger.conf;. 예를 들어, 당신은 이것을 볼 수 있습니다.
```
# include /etc/nginx/passenger.conf;
```
다음과 같은‘#’문자를 제거하십시오.
```
include /etc/nginx/passenger.conf;
```
댓글이 포함 된 includec/nginx/passenger.conf의 주석 버전이 표시되지 않은 경우; Nginx.conf 내부에 직접 삽입해야합니다. HTTP 블록 내부의 /etc/nginx/nginx.conf에 삽입하십시오.
http {
    /etc/nginx/passenger.conf 포함;
    ...
}
이 단계로 끝나면 **nginx를 다시 시작합니다** :
```
$ sudo service nginx restart
```

## 4. 설치 검증 : {#step-3:-check-installation}

설치 후`sudo/usr/bin/confenger-config validate-install`를 실행하여 터미널의 설치를 확인하십시오.
```
sudo /usr/bin/passenger-config validate-install
```
모든 수표가 통과해야합니다. 수표가 통과되지 않으면 화면의 제안을 따르십시오.
마지막으로 Nginx가 승객 핵심 프로세스를 시작했는지 확인하십시오. `sudo/usr/sbin/여객-메모리-스테이트를 실행하십시오. 승객 프로세스뿐만 아니라 NGINX 프로세스를 볼 수 있습니다. 예를 들어 다음과 같이 :
```
sudo /usr/sbin/passenger-memory-stats
```
NGINX 프로세스 나 승객 프로세스가 표시되지 않으면 설치 문제 또는 구성 문제가있을 수 있습니다. [문제 해결 안내서][3]를 참조하십시오.

## 5. 시스템 및 승객 업데이트 : {#step-4:-update-regularly}

NGINX 업데이트, 승객 업데이트 및 시스템 업데이트는 **APT 패키지 관리자** 를 통해 전달됩니다. 다음 명령을 정기적으로 실행하여 최신 상태로 유지해야합니다.
sudo apt-get 업데이트
Sudo apt-get 업그레이드
업데이트 후 웹 또는 응용 프로그램을 다시 시작할 필요가 없으며 업데이트 후 구성 파일을 수정할 필요도 없습니다. 그것은 모두 Apt에 의해 당신을 위해 자동으로 처리됩니다.

## 6. **최고의 오픈 소스 웹 서버** : {#step-4:-update-regularly}

**오픈 소스 웹 서버 란 무엇입니까?** 오픈 소스 웹 서버 소프트웨어는 인터넷 월드 와이드 웹을 통해 웹 페이지를 전달하도록 설계된 공개 도메인 소프트웨어입니다. 기본적으로 HTTP 네트워크 프로토콜을 통해 요청을 처리하여 월드 와이드 웹에 정보를 배포합니다.
웹 애플리케이션 및 웹 사이트의 80% 이상이 오픈 소스 웹 서버로 구동됩니다. 여기에서 가장 인기있는 오픈 소스 웹 서버**중 일부를 나열했으며 이러한 인기있는 웹 서버 중 하나를 직접 쉽게 배포 할 수 있습니다.
* **Apache HTTP 서버** 
* **lighttpd 웹 서버** 
* **OpenLitespeed 웹 서버** 
* **Apache Tomcat 웹 서버** 
* **캐디 웹 서버** 

## [][4] 결론 : {#next-step}

축하합니다. 웹 애플리케이션을 위해 **aws 프로덕션 서버**에 승객과 함께 Nginx를 성공적으로 설치하고 구성했습니다. 승객 애플리케이션 서버를 완전히 마스터하려면 [여객 도서관][5]의 다양한 가이드를 살펴보십시오.**Capistrano** 를 통한 Ruby 응용 프로그램의 [자동화 배포][6] 안내서에 특히 관심이있을 수 있습니다. 이제 AWS 프로덕션 인스턴스에 웹 응용 프로그램을 배포 할 준비가되었습니다.
_ 무료 웹 서버 및 오픈 소스 웹 애플리케이션 서버 _ **웹 개발 또는 호스팅** Needs_?. 무료 웹 서버 및 오픈 소스 웹 애플리케이션 서버에 대해 궁금한 점이 있습니까?

## 탐구하다
다음과 관련된 블로그 게시물을 찾을 수 있습니다.
  * [Apache를 Ubuntu/Debian의 역 프록시로 구성하는 방법][8]
  * [우분투에 nginx를 사용하여 phpmyadmin을 설치하고 보장합니다][9]
  * [우분투/데비안의 NGINX에서 HTTP/2 지원을 구성][10]
  * [Ubuntu 20.04의 암호화와 함께 Nginx를 안전하고 암호화합니다][11]
  * [우분투의 Apache를 사용하여 OwnCloud를 설치하고 구성하는 방법][12]



[1]: http://nginx.com/
[2]: https://www.phusionpassenger.com/
[3]: https://www.phusionpassenger.com/library/admin/nginx/troubleshooting/
[4]: https://www.phusionpassenger.com/library/walkthroughs/deploy/ruby/aws/nginx/oss/xenial/install_passenger.html#next-step
[5]: https://www.phusionpassenger.com/library/#guides
[6]: https://www.phusionpassenger.com/library/deploy/nginx/automating_app_updates/ruby/
[7]: mailto:yasir.saeed@aspose.com
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[12]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
