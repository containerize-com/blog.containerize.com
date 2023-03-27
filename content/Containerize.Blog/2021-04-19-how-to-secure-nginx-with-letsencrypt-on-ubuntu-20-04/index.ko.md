---
title: "Ubuntu 20.04의 암호화로 Nginx를 보호하는 방법" 
seoTitle: "Ubuntu 20.04의 암호화로 Nginx를 보호하는 방법" 
description: "Ubuntu에서 Let 's Encrypt를 사용하여 Nginx를 설정, 암호화 및 고정하는 방법. 클라이언트를 암호화하여 Nginx를 자동으로 구성하기 위해 인증서를 생성하겠습니다." 
date: Mon, 19 Apr 2021 06:27:22 +0000
author: yasir saeed
summary: "웹 사이트에는 방문자를 유치하기위한 도메인에 대한 SSL/TLS 암호화가 포함됩니다. 이 기사에서는 CERTBOT 유틸리티를 사용하여 NGINX에 대한 TLS/SSL 인증서를 얻습니다." 
url: /ko/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
categories: ['Web Server Solution Stack']
---

## 웹 사이트에는 방문자를 유치하기위한 도메인에 대한 SSL/TLS 암호화가 포함됩니다. 이 기사에서는 CERTBOT 유틸리티를 사용하여 NGINX에 대한 TLS/SSL 인증서를 얻습니다.

{{< figure align=center src="images/nginxletsencrypt.png" alt="Ubuntu에서하자 암호화로 Nginx를 고정하십시오">}}


##  **개요**  
방문자를 유치하려는 모든 웹 사이트에는 도메인에 대한 TLS/SSL 암호화를 포함해야합니다. SSL 무료 인증서는 웹 서버간에 Nginx와 애플리케이션 브라우저를 보안하는 것을 좋아하는 웹 서버간에 안전한 연결을 보장합니다. 암호화하자는 Nginx SSL letSencrypt에 대한 이러한 보호를 설정할 수있는 무료, 자동화 및 개방 인증 기관입니다. 무료 SSL 인증서를 암호화하겠습니다. 모든 주요 브라우저에서 신뢰할 수 있으며 발행일로부터 90 일 동안 유효합니다.
이 블로그 게시물은 NGINX HTTPS LetSencrypt 인증서를 얻어 Ubuntu 20.04 / 18.04에서 Nginx를 실행하는 Nginx 실행 웹 서버를 암호화하고 보안하는 가장 간단한 방법을 설명하고 인증서를 설정하여 자동으로 갱신합니다. letsencrypt ubuntu nginx 구성을 시작하고 설정합시다.
  * 의존성 및 전제 조건
  * Certbot 유틸리티 설치
  * nginx의 구성 확인
  * 방화벽을 통해 HTTPS 허용
  * SSL 인증서를 얻습니다
  * 결론

## 가장 먼저 : 의존성과 전제 조건 {#prerequisites}

이 기사를 따르려면 LetSencrypt Ubuntu Nginx 유틸리티를 설치하려면 다음의 종속성 및 전제 조건이 필요합니다.
  * 로컬/원격 기계에서 Sudo가 지원하지 않거나 루트 사용자.
  * 우분투 20.04 또는 우분투 18.04를 실행하는 시스템
  * 명령 줄 터미널에 대한 액세스
  * 로컬/원격 기계의 sudo 또는 루트 권한
  * nginx가 설치되어 설정되었습니다
  * 공개 IP를 가리키는 등록 된 도메인 이름
  * 해당 도메인 이름에 대해 구성된 서버 블록
  * 방화벽은 포트 80 및 443의 연결을 수락하도록 구성됩니다.

## 1 단계 - CertBot 설치 {#step-1-—-installing-certbot}

Nginx를 보호하고 Nginx를 암호화하기위한 첫 번째 단계는 Nginx Certbot가 완전히 기능하고 사용하기 쉬운 패키지를 설치하여 서버에서 SSL 인증서를 암호화하고 갱신하는 것입니다. 그렇게하려면 Ubuntu의 터미널을 열고 로컬 저장소를 업데이트하는 것으로 시작하십시오. y를 입력하고 프롬프트가있는 경우 입력하십시오.
```
sudo apt update
sudo apt install certbot python3-certbot-nginx

```
이제 Nginx 보안 구성 설정 중 일부를 확인해 봅시다.

## 2 단계 - Nginx의 구성 확인 {#step-2-—-confirming-nginx-39-s-configuration}

종속성 및 전제 조건 섹션에 설명 된 바와 같이, 이미 등록 된 도메인이 있어야하며 CERTBOT는 해당 도메인의 올바른 NGINX 서버 블록을 찾아 SSL을 자동으로 구성 할 수 있어야합니다. 예를 들어,이 블로그 게시물은 Domain Blog.containerize.com 및 Domain의 Domain at /etc/nginx/sites-ailable/blog.containerize.com의 서버 블록을 사용하여 Server_name 지시문이 이미 올바르게 설정되어 있습니다.
확인하려면 Nano 또는 좋아하는 텍스트 편집기를 사용하여 도메인의 구성 파일을 엽니 다.
```
sudo nano /etc/nginx/sites-available/blog.containerize.com

```
file /etc/nginx/sites-available/blog.containerize.com에서 기존 Server_name 지시 행을 찾으십시오. 다음과 같아야합니다.
```
...
server_name blog.containerize.com www.blog.containerize.com;
...
```
이제 nginx 구성 파일의 구문을 확인하고 Nginx 서버를 다시로드하여 새 구성 설정을로드하십시오.
```
sudo nginx -t
sudo systemctl reload nginx

```
CertBot 유틸리티는 이제 NGINX를 보장하고 자동으로 업데이트하기 위해 올바른 NGINX 서버 블록 지시문을 찾을 수 있습니다. 다음 단계에서는 방화벽을 업데이트하여 HTTPS 트래픽을 허용하겠습니다.

## 3 단계 - 방화벽을 통해 HTTPS 허용 {#step-3-—-allowing-https-through-the-firewall}

이 기사에서 권장 된대로 전제 조건은 HTTPS 트래픽을 허용하기 위해 설정을 조정해야합니다. 방화벽이 활성화되고 활성화되어 있는지 확인하려면 아래 명령을 실행하십시오.
```
sudo ufw status

```
출력은 UFW가 활성화되었다고 말하고 정해진 규칙 목록을 제공해야합니다. HTTP 트래픽 만 웹 서버에 허용된다는 것을 보여줍니다. 암호화 된 트래픽을 허용하려면 NGINX HTTPS 프로파일을 추가하거나 NGINX 전체를 사용하여 기존 NGINX HTTP 규칙을 삭제할 수 있습니다. 명령을 입력하여 nginx https 트래픽을 허용합니다.
```
sudo ufw allow 'Nginx Full'
sudo ufw delete allow 'Nginx HTTP'

```
UFW 상태 명령을 입력하여 HTTPS 트래픽을 허용하는 HTTPS 규칙을 확인하십시오.
```
sudo ufw status

```
다음으로 CertBot을 실행하고 인증서를 가져 오겠습니다.

## 4 단계 - SSL 인증서 획득 {#step-4-—-obtaining-an-ssl-certificate}

Certbot 용 Nginx 플러그인은 Nginx 재구성을 처리하고 필요할 때 구성을 다시로드합니다. 따라서 다음 명령을 실행하여 Nginx 플러그인으로 인증서를 생성하면됩니다.
```
sudo certbot --nginx -d blog.containerize.com -d www.blog.containerize.com

```
CertBot 유틸리티를 실행하는 첫 번째 경우 CertBot은 HTTPS 설정을 구성하도록 요청합니다. 이메일 주소를 입력하고 서비스 약관에 동의하라는 메시지가 표시됩니다. Enter가 히트되면 구성이 업데이트되고 Nginx가 새로 고침되어 새 설정을 선택합니다. 마지막으로, CertBot은 인증서가 성공적으로 생성되고 인증서가 저장 된 위치를 알려주는 메시지와 함께 표시됩니다.
인증서는 Nginx SSL 인증서를 다운로드, 설치 및로드합니다. https : //를 사용하여 웹 사이트를 다시로드하고 브라우저의 보안 표시기를 확인하십시오. 일반적으로 잠금 아이콘이있는 사이트가 올바르게 고정되어 있음을 나타냅니다. SSL Labs 서버 테스트를 사용하여 서버를 테스트하면 Nginx 및 LetSencrypt에 대한 A 등급이 나타납니다.
갱신 과정을 테스트하여 마무리하겠습니다.

## 5 단계-Certbot Auto-Renewal 확인 {#step-5-—-verifying-certbot-auto-renewal}

인증서를 암호화하자 90 일마다 만료되므로 Nginx SSL은 사용자가 설정하고 자동 갱신 CRON 작업을 장려합니다. 먼저 현재 사용자의 Crontab 구성 파일을 엽니 다.
```
sudo crontab -e
```
CertBot 명령을 실행하는 Cron 작업을 추가하고 CertBot Renex Nginx가 30 일 이내에 인증서가 만료되는 경우 인증서를 갱신합니다. 지정된 시간에 매일 오전 5시 5 분에 실행하도록 예약하십시오.
```
sudo certbot renew --dry-run

```
Cron 작업에는 위 명령에서와 같이 –Quiet 속성도 포함되어야합니다. 이를 통해 NGINX Renew SSL 인증서는 작업을 수행 한 후에는 출력을 포함하지 않도록 지시합니다. 자동 인증서 갱신을 활성화하십시오. CRON 작업을 추가하면 변경 사항을 저장하고 파일을 종료하십시오.

## 결론 {#conclusion}

이 기사에서는 Nginx 설치 LetSencrypt SSL 인증서를 설치하는 방법을 배웠습니다. 이 인증서를 사용하기 위해 도메인에 대한 SSL 인증서를 다운로드하고 NGINX를 구성했습니다. 또한 CertBot은 SSL Nginx letSencrypt의 인증서를 자동으로 갱신 할 수 있어야합니다. 다가오는 자습서에서는 웹 브라우저와 웹 서버 간의 암호화 된 통신을 가능하게하는 표준 보안 기술을 통해 웹 서버를 보호하는 방법에 대한보다 흥미로운 주제에 대해 논의 할 것입니다.
_ 당신은 [Twitter][1], [LinkedIn][2] 및 [Facebook][3] 페이지에서 우리와 함께 할 수 있습니다. 컴퓨터 네트워크를 통해 커뮤니케이션 보안을 제공하기 위해 어떤 암호화 프로토콜을 사용합니까?. 궁금한 점이 있으면 제발 _ [연락][4].

## 탐구하다
서버 성능을 모니터링하고 신뢰성과 보안을 보장하기 위해 다음과 관련된 링크를 찾을 수 있습니다.
  * [Apache를 Ubuntu/Debian의 역 프록시로 구성하는 방법][5]
  * [우분투에 nginx를 사용하여 phpmyadmin을 설치하고 고정하는 방법][6]
  * [우분투/데비안의 NGINX에서 HTTP/2 지원을 구성][7]
  * [AWS 프로덕션 서버에서 승객으로 Nginx 설정][8]
  * [우분투의 Apache를 사용하여 OwnCloud를 설치하고 구성하는 방법][9]



 [1]: https://twitter.com/containerize_co
 [2]: https://www.linkedin.com/company/containerize/
 [3]: http://facebook.com/containerize
 [4]: mailto:yasir.saeed@aspose.com
 [5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
 [6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
 [7]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
 [8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
 [9]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
