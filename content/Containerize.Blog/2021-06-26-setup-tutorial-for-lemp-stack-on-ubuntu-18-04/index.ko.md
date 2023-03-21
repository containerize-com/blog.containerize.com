---
title: "Ubuntu 18.04의 Lemp Stack에 대한 설정 자습서" 
seoTitle: "Ubuntu 18.04의 Lemp Stack에 대한 설정 자습서" 
description: "Lemp 스택은 웹 애플리케이션을 개발하고 배포하는 데 사용되는 소프트웨어 스택입니다. Ubuntu 18.04에 Nginx, MySQL 및 PHP를 설치하는 방법에 대해 알아보십시오." 
date: Sat, 26 Jun 2021 00:05:53 +0000
author: Masood Anwer
summary: "설치 & amp; 웹 애플리케이션을 개발하고 배포하기위한 Lemp 스택을 구성하십시오. 이 안내서는 Ubuntu 18.04에 Nginx, MySQL 및 PHP를 설치하는 데 도움이됩니다." 
url: /ko/setup-tutorial-for-lemp-stack-on-ubuntu-18-04/
categories: ['Web Server Solution Stack']
---

## 웹 애플리케이션을 개발하고 배포하기위한 Lemp 스택 설치 및 구성. 이 안내서는 Ubuntu 18.04에 Nginx, MySQL 및 PHP를 설치하는 데 도움이됩니다.

{{< figure align=center src="images/lemp-banner.png" alt="우분투에 렘 스택을 설치하십시오">}}


## 개요   {#perrequisites}
이 안내서에서는 웹 애플리케이션 개발 및 배포를 위해 Nginx, MySQL 및 PHP (Lemp Stack)를 설치합니다. 또한 Ubuntu Server 18.04에서 웹 서버 To Server PHP 응용 프로그램을 구성합니다. 이 튜토리얼에서 다음 섹션을 다룰 것입니다.
  *[ **전제 조건** ][1]
  *[ **Lemp 스택이란 무엇입니까?** ][2]
  *[ **LEMP 설치** ][3]
  *[ **결론** ][4]

## 전제 조건   {#perrequisites}
소프트웨어를 설치하기 전에 다음 요구 사항을 충족해야합니다.
  * 우분투 운영 체제가있는 서버
  * **sudo**  권한을 가진 뿌리가 아닌 사용자

## Lemp Stack이란 무엇입니까?   {#무엇}
**Lemp Stack**는 PHP 기반 웹 응용 프로그램을 실행하는 데 사용할 수있는 소프트웨어 모음입니다. LEMP는 Linux, Nginx, MySQL 및 PHP를 나타냅니다. Lemp 스택은 램프 스택의 변형입니다. Lamp와 Lemp는 웹 애플리케이션을 개발하고 배포하기위한 인기있는 소프트웨어 스택입니다. 이 두 소프트웨어 스택 사이에는 한 가지 차이가 ​​있습니다. Lemp 서버는 Nginx 웹 서버를 사용하는 반면 Apache 웹 서버를 사용합니다.

## lemp 설치   {#installation}
이 섹션에서는 Ubuntu 18.04에 Nginx, MySQL 및 PHP를 설치하는 방법에 중점을 둘 것입니다. 우선, 아래 명령을 실행하여 서버 패키지를 업데이트해야합니다.
```
$ sudo apt update
```

### nginx 웹 서버 설치
  *Ubuntu**에 nginx를 설치하려면 아래 명령을 실행하십시오.
```
$ sudo apt install nginx
```
  * NGINX 설치를 마치면 웹 브라우저를 열고 서버 IP 주소를 입력하십시오. Nginx 웹 서버 기본 환영 페이지를 보여줍니다.

{{< figure align=center src="images/nginx-home-1.png" alt="Nginx 웹 서버 기본 페이지">}}


### mySQL 설치
이제 응용 프로그램 데이터 관리를 위해 MySQL 데이터베이스 서버를 설치해야합니다.
  *Ubuntu**에 MySQL을 설치하려면 아래 명령을 실행하십시오.
```
$ sudo apt install mysql-server
```
  * MySQL 설치를 확보하려면 다음 명령을 실행하십시오.
```
$ sudo mysql_secure_installation
```
  *활성화하라는 요청** 비밀번호 플러그인을 유효성있게 확인하든 아니든. 그것을 활성화하지 않는 것이 좋습니다. N을 입력하고 Enter를 눌러 다음 단계에서 이동하십시오.
  * 다음으로, 아래와 같이 몇 가지 질문을합니다. 모든 질문에 대답해야합니다.
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  * 이제 MySQL 서버가 작동 중입니다. 다음 명령으로 테스트 할 수 있습니다. 비밀번호를 제출할 경우 MySQL이 아닌 Ubuntu 루트 계정 비밀번호를 입력하십시오.
```
$ sudo mysql
```
  * MySQL에서 종료하려면 아래 명령을 입력하십시오.
```
mysql> exit
```

### PHP 설치
PHP 처리를 위해 PHP-FPM의 설치를 다룰 것입니다. PHP-FPM은 FASTCGI 프로세스 관리자를 나타냅니다. Nginx 웹 서버에는 PHP 처리를위한 내장 기능이 없으므로 PHP-FPM을 사용합니다. 또한 Data Management 용 MySQL과 PHP를 통신하기위한 PHP-MYSQL을 설치합니다.
  *Ubuntu**에 PHP를 설치하려면 아래 명령을 실행하십시오.
```
$ sudo apt install php-fpm php-mysql
```
  * 이제 PHP 설치 및 Web Application을 실행하기 위해 필요한 모든 LEMP 스택 소프트웨어를 수행합니다.
  *이 단계에서는 Nginx에 동적 컨텐츠에 PHP 프로세서를 사용하도록 Nginx 구성 파일을 작성합니다. 아래 명령을 실행하여 nginx 구성 파일을 만듭니다.
```
$ sudo nano /etc/nginx/sites-available/example.com
```
  * 코드를 nginx 구성 파일에 복사하고 저장하십시오.
```
server {
        listen 80;
        root /var/www/html;
        index index.php index.html index.htm index.nginx-debian.html;
        server_name example.com;

        location / {
                try_files $uri $uri/ =404;
        }

        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
        }

        location ~ /\.ht {
                deny all;
        }
}
```
  *이 지침과 위치 블록을 짧게 살펴 보겠습니다. 기본 정보를 가질 수 있습니다.
      * **듣기**  : nginx의 포트를 정의 할 수 있습니다. HTTP의 경우 포트 80을 사용하고 HTTPS 프로토콜에는 443을 사용하십시오.
      * **root**  : 프로젝트의 루트 디렉토리를 정의하십시오. Nginx는 웹 사이트 또는 웹 응용 프로그램을 제공하는 데 사용합니다.
      * **index**  : 파일이 제공되어야하는 순서를 정의합니다. 인덱스 파일이 호출되면 nginx는 index.php 파일을 전달합니다.
      * **server_name**  : 서버의 도메인 이름 또는 공개 IP 정의.
      ***위치 / **:이 위치 블록에는**   try_block** 지시문이 있으며 요청 된 URI와 일치합니다. 요청 된 파일을 찾지 못하면 Nginx는 404 오류를 반환합니다.
      * **위치 ~ .php $**  :이 위치 블록은 PHP 처리를 처리합니다.
      ***위치 ~ /.ht **: nginx는 처리하지 않습니다 ** . htaccess ** 파일 및이 위치 블록은이를 처리합니다. nginx는** 를 정의하여 .htaccess 파일을 제공하지 않습니다.
  * 새로 생성 된 nginx 구성 파일에 대한 Symlink를 작성하여 활성화하십시오.
```
$ sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
```
  * 구문 오류에 대해 Nginx 구성 파일을 테스트하려면 다음 명령을 실행하십시오.
```
$ sudo nginx -t
```
  * Nginx 웹 서버를 다시 시작합니다.
```
$ sudo systemctl restart nginx
```

### 테스트 php
  * nginx가 PHP 페이지를 올바르게 제공하는지 확인하기 위해 구성 테스트를위한 PHP 파일을 만듭니다.
  * 아래 명령을 실행하여 nginx 웹 서버의 루트 디렉토리에서 info.php 파일을 만듭니다.
```
$ sudo nano /var/www/html/info.php
```
  * 아래 코드를 추가하고 파일을 저장하십시오.
```
<?php
phpinfo();
```
  * 웹 브라우저 및 유형 도메인 이름 또는 서버 IP를 열고 http : // server \ _ip \ _or_domain/info.php와 같은 php 파일 이름이 이어집니다. 아래 페이지가 표시됩니다.

{{< figure align=center src="images/info-php.png" alt="PHP 정보 페이지">}}


## 결론   {#conclusion}
이 튜토리얼에서는  **Lemp Stack** 를 설치하고 구성하는 방법에 대해 논의했습니다. 보시다시피 소프트웨어 스택 구성 요소 구성은 정말 쉽습니다. 또한 몇 분 안에 웹 앱 생성 및 서비스를 시작할 수 있습니다.
마지막으로, [**containerize.com **][5]는 최신 오픈 소스 제품에 대한 블로그 게시물을 작성하는 일관된 프로세스에 있습니다. 따라서 최신 업데이트를 위해이 [**  웹 서버 솔루션 스택**][6] 카테고리와 연락하십시오.

## 탐구하다
다음 링크를 찾을 수 있습니다.
  *[ **최고의 오픈 소스 웹 서버 솔루션 스택** ][7]
  * **[가장 인기있는 오픈 소스 디지털 법의학 도구][8]**
  * **[2021 년 MQ (MQ) 소프트웨어 상위 5 개 오픈 소스 메시지 큐 (MQ) [9]**
  * **[최고의 오픈 소스 클라우드 스토리지 및 파일 공유 소프트웨어][10]**
  *[ **Ubuntu에 nginx를 사용하여 phpmyadmin을 설치하고 고정하는 방법** ][11]
  *[ **Ubuntu에서 Nginx를 사용하여 여러 PHP 버전을 설치하는 방법** ][12]
  *[ **가장 인기있는 5 대 OSI 승인 오픈 소스 라이센스 2021** ][13]

  
[1]: #Prerequisites
[2]: #What
[3]: #Installation
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/web-server-solution-stack/
[7]: https://products.containerize.com/solution-stack/
[8]: https://blog.containerize.com/digital-forensic-tools/top-5-open-source-digital-forensic-tools-in-2021/
[9]: https://blog.containerize.com/message-queue-software/top-5-open-source-message-queue-software-in-2021/
[10]: https://products.containerize.com/backup-and-sync/
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[12]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[13]: https://blog.containerize.com/licenses-standards/top-5-most-popular-osi-approved-open-source-licenses-of-2021/
