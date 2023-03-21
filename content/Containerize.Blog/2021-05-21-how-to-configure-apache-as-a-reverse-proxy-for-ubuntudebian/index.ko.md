---
title: "Apache를 Ubuntu/Debian의 역 프록시로 구성하는 방법" 
seoTitle: "Apache를 Ubuntu/Debian의 역 프록시로 구성하는 방법" 
description: "Apache Reverse Proxy Configuration Step를 통해 Ubuntu/Debian Linux에서 mod_proxy가있는 프록시 서버 뒤에 하나 이상의 백엔드 서버를 실행할 수 있습니다." 
date: Fri, 21 May 2021 18:58:46 +0000
author: yasir saeed
summary: "Apache Reverse Proxy를 사용하면 프록시 서버 뒤에 하나 이상의 백엔드 서버를 실행할 수 있습니다. Ubuntu/Debian 시스템에서 Apache Reverse 프록시를 구성하는 방법은 다음과 같습니다." 
url: /ko/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## Apache Reverse Proxy를 사용하면 프록시 서버 뒤에 하나 이상의 백엔드 서버를 실행할 수 있습니다. Ubuntu/Debian 시스템에서 Apache Reverse 프록시를 구성하는 방법은 다음과 같습니다.

{{< figure align=center src="images/Install-and-Configure-Apache-as-a-Reverse-Proxy-1.png" alt="Apache Reverse 프록시를 설치하고 구성하십시오">}}


##  **개요** 
Apache Reverse Proxy는 모든 트래픽을 허용하고 전달하여 프록시 서버 뒤에 하나 이상의 백엔드 서버 또는 컨테이너를 공개적으로 노출시키지 않고 실행할 수 있도록 전달합니다. 백엔드 웹 서버는 다른 APACHE2 또는 NGINX와 같은 오픈 소스 HTTP 서버 일 수 있습니다. APACHE2 HTTP 서버는 오늘날 가장 인기있는 오픈 소스 웹 서버 중 하나입니다.
프록시 서버를 설치하고 구성 해야하는 여러 가지 이유가 있습니다. 예를 들어, 리버스 프록시는 보안을 추가하고로드 밸런싱을 위해 공격을 방지하기 위해 특정 위치에 대한 액세스를 제한하는 데 도움이 될 수 있습니다. 이 기사는 Ubuntu/Debian의 HTTPS 서버에 대한 Apache Reverse 프록시 구성을 단계별로 설치하고 구성하는 방법을 설명합니다.
  * APACHE2 설치
  * APACHE2를 구성합니다
  * 프록시 모듈을 활성화합니다
  * SSL을 활성화하십시오
  * Apache2를 다시 시작합니다
  * 결론

## 1 단계 : APACHE2를 설치하십시오
Apache2를 설치하는 것은 매우 간단하고 실행하기 쉽습니다. 설치하려면 아래 명령을 간단히 실행하십시오.
Sudo apt-get 업데이트
sudo apt-get install apache2
{{_LINE_25_}}
시스템에 APACHE2를 설치 한 후 Debian Linux 또는 Ubuntu Linux 버전 Ubuntu에서 다음 SystemCTL 명령을 사용하여 APACHE2를 중지, 시작, 활성화 및 다시 시작하여 서버가 부팅 될 때 항상 다시 시작하십시오.
Sudo SystemCtl 중지 Apache2.Service
sudo systemctl start apache2.service
Sudo SystemCTL 활성화 APACHE2.Service
Sudo SystemCTL 재시작 apache2.Service
{{_LINE_31_}}
다음 명령을 사용하여 웹 서버 상태를 볼 수 있습니다.
sudo systemctl 상태 apache2.Service
{{_LINE_34_}}
APACHE2 설정을 확인하려면 브라우저를 열고 서버 호스트 이름 또는 시스템 IP 주소로 찾아 보면 아래와 같이 APACHE2 기본 테스트 페이지가 표시됩니다. 당신이 그것을 보면, Apache2는 예상대로 작동합니다. http : // localhost

{{< figure align=center src="images/apache-reverse-proxy.png" alt="Ubuntu의 Apache Reverse 프록시 프록시를 설치하고 구성하십시오">}}


## 2 단계 : APACHE2를 리버스 프록시로 구성하십시오
Apache2가 성공적으로 설치되어 사용할 준비가되었습니다. 이제 APACHE2 리버스 프록시 우분투로 작동하도록 APACHE2를 구성 할 수 있습니다. Apache2 프록시 모듈의 **proxypass  **및 **  proxypassreverse  **함수는 역전 프록시를 제공합니다. **  proxypass  **및**   proxypassReverse**를 사용하려면 먼저 사이트 트래픽을 직접 지시 할 위치를 먼저 알아야합니다.
APACHE2 리버스 프록시 서버는 기본 HTTP 포트의 모든 트래픽을 듣습니다.이 포트는 간단한 설정으로 포트 80입니다. 웹 사이트 콘텐츠를 호스팅하는 백엔드 서버는 사용자 정의 포트에서 듣고 포트 8080 일 가능성이 높습니다.
이 블로그 기사에서는 포트 80에서 듣기 위해 APACHE2를 설정 한 다음 포트 8080을 듣는 백엔드 서버로 트래픽을 직접 지시합니다. 아래 명령을 실행하여 Apache2Proxy.conf라는 프록시 가상 호스트 파일을 만듭니다.
sudo nano /etc/apache2/sites-available/apache2proxy.conf
그런 다음 Apache2Proxy.conf 파일에 다음 코드 블록을 추가 한 다음 저장하십시오.
{{_LINE_43_}}
        ServerName example.com
        Serveralias www.example.com
        serveradmin webmaster@example.com
        ErrorLog $ {apache_log_dir} /error.log
        CustomLog $ {apache_log_dir} /access.log combined
        근위 퀘스트
{{_LINE_50_}}
          주문 거부, 허용
          모두에게 허용합니다
{{_LINE_53_}}
        proxypass/http://127.0.0.1:8080/
        proxypassreverse/http://127.0.0.1:8080/
{{_LINE_56_}}
          주문 허용, 거부
          모두에게 허용합니다
{{_LINE_59_}}
{{_LINE_60_}}
{{_LINE_61_}}
Apache2Proxy.conf 파일에는 서버 이름과 HTTP 프록시 서버가 수신 할 때 트래픽이 지시되는 proxy_pass가 포함되어 있습니다.

## 3 단계 : Apache2 프록시 활성화
Apache2 웹 서버가 이제 설치되어 성공적으로 설정되었습니다. Apache에는 여러 번 사용 가능한 번들 모듈이 있습니다. 이 모듈은 새로운 APACHE2 설치에서 활성화되지 않습니다. 먼저 다른 네트워크 프로토콜을 지원하기 위해 필요한 Apache Mod_proxy 모듈과 여러 추가 모듈을 활성화하는 데 필요한 모듈을 활성화해야합니다. 아래 나열된 명령을 실행하여 HTTP 프록시 모듈을 활성화하십시오.
Sudo a2enmod 프록시
sudo a2enmod proxy_http
sudo a2enmod proxy_balancer
sudo a2enmod lbmethod_byrequests
{{_LINE_69_}}
이제 VirtualHost 사이트를 활성화하고 APACHE2를 다시 시작하여 APACHE2 모듈 구성을 다시로드 할 수 있습니다.
Sudo a2ensite apache2proxy.conf
Sudo SystemCTL 재시작 apache2.Service
선택한 웹 브라우저를 시작하고 example.com과 같은 서버 호스트 이름으로 이동하십시오. 이제 기본 포트, 즉 8080의 APACHE2 서버로 프록시됩니다.

## 4 단계 : SSL 활성화   {#block-07B86D83-DCA0-4924-B991-206719C342EB}
Apache Reverse Proxy SSL 모듈을 활성화하려면 아래 명령을 실행하여 Apache Reverse Proxy HTTPS Proxy Pass :
Sudo a2enmod ssl
이를 통해 보안 Apache 리버스 프록시 HTTP에 HTTPS 지원을 제공하여 서버를 백엔드합니다.

## 5 단계 : APACHE2   {#block-836BB4FF-17AD-4317-8ECB-153104BD28A7}
이러한 변경 사항을 시행하려면 아래 명령을 실행하여 Apache를 다시 시작하십시오.
Sudo SystemCTL 재시작 apache2.Service
축하해요! Linux 시스템에 Apache2 리버스 프록시를 성공적으로 설치하고 구성했습니다.

##  **결론 :** {#4a1a}
이 튜토리얼에서는 프록시 서버와 Apache 리버스 프록시 예제 구성을 단계별로 탐색하고 논의했습니다. 또한 Linux 시스템에서 APACHE2를 리버스 프록시로 설정하고 구성하는 방법을 배웠습니다. 다가오는 자습서에서는 Apache 및 기타 웹 서버 솔루션 스택에 대한 더 흥미로운 주제에 대해 설명합니다.

## 탐구하다
아래에 더 관련된 기사를 좋아할 수도 있습니다.
  * [1][Ubuntu에 nginx를 사용하여 phpmyadmin을 설치하고 고정][2]
  * [AWS 프로덕션 서버에서 승객으로 Nginx를 설정하는 방법][3]
  * [우분투/데비안의 NGINX에서 HTTP/2 지원을 구성][4]
  * [우분투에서하자 암호화 20.04로 Nginx를 안전하고 암호화합니다][5]
  * [우분투의 Apache를 사용하여 OwnCloud를 설치하고 구성하는 방법][6]

  
[1]: https://blog.containerize.com/web-server-solution-stack/ko/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[2]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
