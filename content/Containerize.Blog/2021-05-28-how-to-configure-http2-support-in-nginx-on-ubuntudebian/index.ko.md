---
title: "Ubuntu/Debian의 Nginx에서 HTTP/2 지원을 구성하는 방법" 
seoTitle: "Ubuntu/Debian의 Nginx에서 HTTP/2 지원을 구성하는 방법" 
description: "HTTP2 또는 H2" 
date: Fri, 28 May 2021 18:59:02 +0000
author: yasir saeed
summary: "HTTP/2는 페이지로드 속도 및 보안을 개선하기위한 강력한 멀티플렉스 프로토콜입니다. 이 튜토리얼에서는 HTTP/2 지원으로 NGINX를 설정하는 방법을 배웁니다." 
url: /ko/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## HTTP/2는 페이지로드 속도 및 보안을 개선하기위한 강력한 멀티플렉스 프로토콜입니다. 이 튜토리얼에서는 HTTP/2 지원으로 NGINX를 설정하는 방법을 배웁니다.

{{< figure align=center src="images/nginx-enable-http2.png" alt="Nginx는 Ubuntu 및 Debian에서 HTTP2 지원을 활성화합니다">}}


## **개요** 
Nginx는 오픈 소스 빠르고 안정적인 웹 서버입니다. 메모리 풋 프린트가 낮아,로드 밸런싱, 높은 확장 성, 캐싱, 대부분의 프로토콜 지원 및 역전 프록시로 인해 인기가 높아졌습니다. 이제 Nginx가 HTTP2 프로토콜을 어떻게 활성화하는지 이야기 해 봅시다.
Nginx가 지원하는 프로토콜 중 하나는 2015 년 5 월에 게시 된 HTTP/2입니다. HTTP/2의 주요 장점은 콘텐츠가 풍부한 웹 사이트의 높은 전송 속도이며 웹 서버의로드를 줄이고 여러 병렬 요청을 시작할 수 있습니다. 단일 TCP 연결에서. NGINX ENABLE HTTP2는 개선 된 버전의 HTTP 프로토콜입니다. 시작하기 전에 SSL 인증서가 포함 된 우분투 또는 데비안 서버 몇 개가 필요합니다. 이 튜토리얼에서는 Ubuntu에서 HTTP2를 활성화하는 방법에 대한 단계별로 안내합니다.
  * 패키지 업데이트 및 Nginx 설치
  * HTTP/2 지원 활성화
  * 서버 이름 추가
  * SSL 인증서 추가
  * 암호를 제거합니다
  * 모든 HTTP 요청을 HTTP로 리디렉션합니다
  * nginx를 다시 시작합니다
  * 결론

## 1 단계 : 패키지 업데이트 및 Nginx 설치 {#4597}

첫 번째 단계는 APT 포장 시스템에서 저장소를 업데이트하고 업그레이드하는 것입니다. 업데이트를 사용하면 최신 버전 패키지를 다운로드하고 업그레이드는 최신 버전의 패키지를 목록에 설치합니다. 아래 APT 명령을 실행하여 패키지를 업데이트하고 업그레이드하십시오.
```
sudo apt-get update && apt-get upgrade
```
다음 단계는 최신 버전의 Nginx 패키지를 설치하는 것입니다. HTTP/2 프로토콜에 대한 지원은 NGINX 버전 1.9.5 이상에서 소개되었습니다. 따라서 최신 버전의 NGINX 패키지를 설치해야합니다. 아래의 APT 설치 명령을 실행하여 Nginx 패키지를 설치하십시오.
```
sudo apt-get install nginx
```
단계별 설치 프로세스를 확인하라는 메시지가 표시됩니다. 예 옵션을 선택하고 설치 프로세스를 완료하십시오. 설치 프로세스가 완료되면 다음 단계는 올바른 버전을 설치했는지 여부에 관계없이 패키지 버전을 확인하는 것입니다. 명령을 입력하여 Nginx 웹 서버의 버전을 확인할 수 있습니다.
```
sudo nginx -v
```
위 버전 확인 명령의 출력은 다음과 유사해야합니다.
```
nginx version: nginx/1.10.0 (Ubuntu)
```

## 2 단계 : HTTP/2 지원 활성화 {#f4d2}

NGINX 패키지를 설치 한 후 HTTP2 NGINX를 활성화해야합니다. 사용자는 청취 포트를 80에서 443으로 변경해야합니다. Nginx 구성 파일을 열어 보겠습니다.
```
sudo nano /etc/nginx/sites-available/domain-name.com
```
기본적으로 nginx의 값이 포트 80을 듣도록 설정되어 있음을 알 수 있습니다.
80 default_server를 듣습니다.
듣기 [::] : 80 default_server;
보시다시피 두 가지 다른 청취 변수가 있습니다. 첫 번째 청취 변수는 모든 IPv4 연결에 대한 것이고 두 번째는 IPv6 연결 용입니다. 두 변수 모두에 대한 암호화를 활성화합니다. 청취 포트 번호를 443으로 변경하고 아래와 같이 HTTPS 프로토콜에 대한 SSL 연결을 추가하십시오.
443 SSL http2 default_server;
듣기 [::] : 443 SSL http2 default_server;
SSL 외에도 HTTP2를 추가했습니다. Nginx는 이제 HTTP/2 프로토콜을 지원하는 브라우저를 사용할 수 있습니다.

## 3 단계 : 서버 이름 추가 {#a745}

다음 단계는 서버 이름이 도메인 이름과 연관되도록 서버 \ _name을 변경하는 것입니다. 사용자는 구성 파일에서 서버 이름을 변경하면됩니다. 구성 파일에서 서버 \ _name 항목을 찾아서 _를 실제 도메인으로 변경하십시오.
```
server_name example.com www.example.com;
```
텍스트 편집기에서 편집하여 서버 구성 파일을 저장하십시오. 명령으로 구문 오류에 대한 Nginx 구성을 확인할 수 있습니다.
```
sudo nginx -t
```
구문이 오류가 없으면 아래 출력이 표시됩니다.
nginx : 구성 파일 /etc/nginx/nginx.conf syntax는 괜찮습니다
nginx : 구성 파일 /etc/nginx/nginx.conf 테스트가 성공적입니다

## 4 단계 : SSL 인증서 추가 {#37c0}

다음 단계는 NGINX HTTPS 구성을 활성화하여 SSL 인증서를 사용하는 것입니다. 자체 서명 인증서를 생성하거나 [Let 's Encrypt에서 무료 인증서를 설치할 수 있습니다][1]. SSL 인증서가없는 경우이 자습서를 따르십시오. Nginx 구성 디렉토리 내에 SSL 인증서를 다음과 유사하게 추가하십시오.
```
sudo mkdir /etc/nginx/ssl
```
이 위치에 인증서와 개인 키를 복사하고 example.com을 실제 도메인 이름으로 바꾸십시오.
sudo cp/path/to/your/certificate.crt /etc/nginx/ssl/example.com.crt
sudo cp/path/to/your/private.key /etc/nginx/ssl/example.com.key
이제 Nginx 서버 구성 파일을 다시 한 번 엽니 다. NGINX SSL 구성을 활성화하기 위해 인증서의 위치를 ​​사용하여 NGINX 서버 블록 내부에 새 SSL 라인을 추가 및 구성하십시오.
sudo nano /etc/nginx/sites-available/domain-name.com
ssl_certificate /etc/nginx/ssl/example.com.crt;
ssl_certificate_key /etc/nginx/ssl/example.com.key;
파일 nginx 파일을 저장하고 텍스트 편집기를 종료하십시오.

## 5 단계 : 암호 제거 {#d291}

Cipher는 데이터 암호화 및 암호 해독에 대한 암호화에 사용되는 알고리즘입니다. Cipher Suites는 네트워크 연결을 보호하는 데 사용되는 많은 암호화 알고리즘입니다. HTTP/2에는 제거 해야하는 불안한 암호의 거대한 블랙리스트가 있습니다. 여기서는 Internet Giants Cloudflare가 승인 한 인기있는 암호 세트를 사용합니다.
다음 nginx 구성 파일 /etc/nginx/nginx.conf를 열고 **ssl \ _prefer \ _server_ciphers 바로 다음 줄을 추가하십시오.** 이 라인에는 HTTP2 브라우저가 이해하는 최신 암호 목록이 포함되어 있습니다.
```
ssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+
AES256:EECDH+3DES:RSA+3DES:!MD5;
```
gzip을 끄고 프록시 \ _max \ _temp \ _file \ _size 0을 추가 할 수 있습니다. err \ _http2 \ _protocol_error nginx 오류를 피하려면

## 6 단계 : 모든 HTTP 요청을 HTTPS로 리디렉션합니다 {#b387}

이제 서버가 HTTP 요청을 수신하는 경우에만 HTTPS를 통해 컨텐츠를 제공 해야하는 내용을 NGINX HTTP2 프록시에게 알려야합니다. 마지막으로, 주석화 된 줄을 무시하면 nginx 구성 파일 /etc/nginx/sites-ailable/domain-name.com이 다음과 유사하게 보일 것입니다.
서버 {듣기 443 SSL http2 default_server; 듣기 [::] : 443 SSL http2 default_server; root/var/www/html; index index.html index.htm index.nginx-debian.html; server_name example.com; location/{try_files $ uri $ uri/= 404 ; } ssl_certificate /etc/nginx/ssl/example.crt ;ssl_certificate_key /etc/nginx/ssl/example.com.key ;ssl_dhparam /etc/nginx/ssl/dhparam.pem; }server {Listen 80; 듣기 [::] : 80; server_name example.com; 반환 301 https : // $ server_name $ request_uri;}
/etc/nginx/sites-available/domain-name.com 파일을 저장 한 다음 종료하십시오. 구문 오류에 대한 구성을 확인하십시오.
```
sudo nginx -t
```

## 7 단계 : nginx를 다시 시작합니다 {#e687}

모든 변경 사항을 적용하려면 NGINX HTTP2 리버스 프록시 서버를 다시 시작하고 구성 상태를 확인하십시오.
sudo systemctl nginx를 다시 시작합니다
sudo systemctl 상태 nginx

## **결론:**  {#4a1a}

축하합니다. Ubuntu 서버에서 nginx config http2 지원을 설정하는 방법을 성공적으로 배웠습니다. NGINX HTTP2 설정은 이제 HTTP/2 페이지를 제공하고 있으며 HTTP/1과 HTTP/2 프로토콜의 차이를 제거했습니다. 여전히 구성 문제에 직면해도 의견 섹션에 알려주십시오.
HTTP2 Multiplexed Protocol에 대한 질문이 있습니까? _, Please_ [연락을 취합니다][2].

## 탐구하다
아래 기사를 좋아할 수도 있습니다.
  * [Apache를 Ubuntu/Debian의 역 프록시로 구성하는 방법][3]
  * ...
  * [AWS 프로덕션 서버에서 승객으로 Nginx를 설정하는 방법][5]
  * [우분투에 대한하자와 함께 Nginx를 안전하고 암호화합니다. 20.04][1]
  * [우분투에서 Apache를 사용하여 OwnCloud를 설치하고 구성하는 방법][6]



[1]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[2]: mailto:yasir.saeed@aspose.com
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
