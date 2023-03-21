---
title: "Ubuntu의 Nginx를 사용하여 Phpmyadmin을 설치하고 확보하는 방법" 
seoTitle: "Ubuntu의 Nginx를 사용하여 Phpmyadmin을 설치하고 확보하는 방법" 
description: "PHPMYADMIN은 PHP로 작성된 오픈 소스 데이터베이스 관리 소프트웨어입니다. nginx로 phpmyadmin을 설치하고 phpmyadmin을 통해 MySQL을 관리하는 방법을 배웁니다." 
date: Fri, 04 Jun 2021 13:25:15 +0000
author: yasir saeed
summary: "Phpmyadmin은 오픈 소스 그래픽 웹 인터페이스 데이터베이스 관리 도구입니다. PHP로 작성되었습니다. 이 튜토리얼에서는 nginx로 phpmyadmin을 설치하는 방법을 배웁니다." 
url: /ko/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

## phpmyadmin은 Open Source 그래픽 웹 인터페이스 데이터베이스 관리 도구입니다. PHP로 작성되었습니다. 이 튜토리얼에서는 nginx로 phpmyadmin을 설치하는 방법을 배웁니다.

{{< figure align=center src="images/install_phpmyadmin_with_nginx_on_ubuntu.png" alt="Ubuntu의 Nginx를 사용하여 Phpmyadmin을 설치하고 확보하는 방법">}}


## **개요 ** 
Phpmyadmin은 직관적 인 인터페이스를 통해 MySQL 또는 Mariadb 서버를 관리하는 웹 인터페이스를 제공하는 무료 및 오픈 소스 데이터베이스 관리 도구입니다. 이는 대부분의 인기있는 호스팅 제공 업체가 제공하는 널리 지원되는 소프트웨어 중 하나이며, 웹 관리자가 PhpmyAdmin에서 데이터베이스를 작성하고 데이터베이스를 관리하고 SQL- 진술을 실행하고 데이터를 쉽게 가져오고 내 보낼 수 있습니다. PHP 개발 환경과 함께 실행되는 그래픽 웹 인터페이스를 통해 NGINX를 통해 PHPMYADMIN의 MySQL 또는 MariaDB 데이터베이스에 액세스 할 수 있습니다.
이 안내서에서는 Ubuntu 20.04의 Nginx를 사용하여 Phpmyadmin을 설치하고 보호하는 방법을 설명 할 것입니다. Ubuntu 서버에 phpmyadmin을 설치하고 구성하여 MySQL 데이터베이스 및 테이블과 쉽게 작동하도록해야합니다. Ubuntu 20.04 / 20.10의 Nginx를 사용하여 Phpmyadmin을 설치하고 확보하는 방법을 배우겠습니다.
  * 전제 조건
  * phpmyadmin을 설치하십시오
  * 데이터베이스 구성
  * 상징적 링크를 만듭니다
  * phpmyadmin에 접근
  * MySQL 슈퍼 유저를 만듭니다
  * Phpmyadmin을 확보하십시오
  * 결론

## 1 단계 : 전제 조건   {#id-prererequisites}
이 안내서를 따르려면 로컬 컴퓨터 또는 전제 조건이있는 원격 서버에서 Ubuntu 20.04 서버가 실행됩니다.
  * Sudo 권한을 가진 뿌리가 아닌 사용자로 서버에 액세스하고 UFW 방화벽을 활성화해야합니다.
  * Ubuntu에 이미 Nginx, MySQL 및 PHP를 설치했다고 가정합니다.
  * phpmyadmin은 mySQL 자격 증명을 사용하여 인증을 받아 서버와 클라이언트 간의 암호화 된 트래픽을 활성화하기 위해 SSL/TLS 인증서를 설치해야합니다.
이를 통해 PhpmyAdmin을 설치하고 보안하여 웹 인터페이스를 통해 데이터베이스에 액세스하기 위해 MySQL 서버에 연결하도록하겠습니다.

## 2 단계 : phpmyadmin 설치   {#id-1-install-phpmyadmin}
Ubuntu 20.04에 phpmyadmin을 설치하기 전에 시스템에 모든 전제 조건을 성공적으로 설치했는지 확인하십시오. 패키지 목록을 업데이트하여 시작하십시오.
```
sudo apt update 
```
이제 Ubuntu 20.04 / 20.10의 기본 Ubuntu 저장소에서 phpmyadmin 패키지를 설치하려면 다음 명령을 실행하십시오.
```
sudo apt install phpmyadmin

```
**y **를 누르고  **계속하라고 요청하면 ** 를 입력하십시오. 아래의  **nginx ** 에 대한 옵션이 없으므로 웹 서버를 선택하라는 메시지가 표시되면  **탭 ** 을 눌러 확인을 선택한 다음 **를 입력하여 웹 서버를 선택하지 않고 계속하십시오.

{{< figure align=center src="images/mysql-setup.png" alt="Ubuntu 20.04에 Nginx를 위해 Phpmyadmin을 설치하고 고정하십시오">}}


## 2 단계 : 데이터베이스 구성   {#id-1-install-phpmyadmin}
다음으로  **예 ** 를 선택하고 **를 눌러 ** 입력하여 DBCONFIG-COMMON 도구를 사용하여 데이터베이스를 설치하고 설정하십시오.

{{< figure align=center src="images/phpmyadmin-install2.png" alt="phpmyadmin과 mySQL을 구성하는 방법">}}

MySQL 응용 프로그램 비밀번호는 MySQL 데이터베이스와 통신하기 위해 PhpmyAdmin에서 내부적으로 사용됩니다. phpmyadmin dbms에 대한 새 비밀번호를 입력하여 새 데이터베이스로 등록하려면 확인을 선택하고 Enter를 눌러 계속하십시오.

{{< figure align=center src="images/phpmyadmin-install3.png" alt="phpmyadmin을 위해 MySQL을 구성하는 방법">}}

비밀번호를 확인하고 동일한 비밀번호를 입력하고  **OK ** 를 선택하고  **입력 ** 를 누르십시오. 축하해요! Phpmyadmin은 시스템에 성공적으로 설치되었습니다.

## 4 단계 : 기호 링크 생성   {#id-2-create-symbolic-link}
phpmyadmin 파일을 제공하기 위해 nginx를 구성하는 방법에는 여러 가지가 있습니다. 도메인의 서버 블록이 이미 PHP 요청을 제공하도록 설정된 경우 PHPMYADMIN NGINX 설치 파일/USR/SHARE/PHPMYADMIN에서 도메인 문서 루트 디렉토리로 상징적 링크를 작성해야합니다. Ubuntu 20.04/20.10의 Nginx 문서 루트의 기본 위치는/var/www/html/이어야하며 INS 설정에 따라 다를 수 있습니다. 문서 루트는 예를 들어 /var/www/example.com/public_html에 위치 할 수 있습니다.
다음으로 Phpmyadmin 디렉토리/USR/Share/PhpmyAdmin에서 문서 루트로 상징적 링크를 생성합니다. 여기서 우리는 우리의 문서 루트가/var/www/html이라고 가정 할 것이며, 우리는 단순히 이것의 끝에 phpmyadmin을 추가 할 것입니다. 이를 통해 URL example.com/phpmyadmin에서 phpmyadmin에 액세스 할 수 있습니다.
```
sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
```

## 5 단계 : phpmyadmin 액세스   {#id-3-test-phpmyadmin}
이제 서버의 호스트/도메인 이름 또는 공개 IP 주소를 방문한 다음 좋아하는 웹 브라우저에서 domain.com/phpmyadmin을 방문하여 Phpmyadmin 웹 인터페이스에 액세스 할 수 있어야합니다. 예를 들어 http://example.com/phpmyadmin 또는 http://192.168.1.10/phpmyadmin입니다
{{_LINE_48_}}
MySQL 5.7로 실행되는 Ubuntu 서버에서 MySQL 기본 루트 계정을 사용하여 무료 phpmyadmin 데이터베이스에 로그인 할 수 없으며 _ "root '@'localhost '_에 대한 액세스 거부와 같은 오류가 발생합니다. 대신, phpmyadmin에 대한 새로운 슈퍼 사용자 계정을 만들어야합니다. 다음으로 PhpmyAdmin에 로그인하기 위해 MySQL 루트 계정을 만들 것입니다.

## 6 단계 : MySQL SuperUser 생성   {#id-4-create-mysql-superuser}
터미널에서 MySQL 루트 비밀번호를 사용하여 MySQL에 로그인하여 시작하여 PhpmyAdmin MySQL 데이터베이스를 처음으로 설치했을 때 루트 비밀번호를 만들 수 있습니다.
```
sudo mysql -u root -p
```
MySQL에 로그인 한 후 선택한 사용자 이름이 포함 된 새로운 MySQL 슈퍼 사용자를 추가하십시오. 이 예에서 우리는 그것을 Yasiradmin이라고 부릅니다. [강력한 비밀번호를 생성하려면 여기를 클릭하십시오][2][2] 아래로 새로운 \ _password \ _를 교체하십시오.
```
CREATE USER 'yasiradmin'@'localhost' IDENTIFIED BY 'new_password_here';
```
이제 새로운 사용자 Yasiradmin에게 수퍼 유저 권한을 부여하십시오.
```
GRANT ALL PRIVILEGES ON *.* TO 'yasiradmin'@'localhost';
```
이제 MySQL 세션을 종료하십시오. 이제이 새로운 슈퍼 사용자 자격 증명을 사용하여 phpmyadmin에 액세스 할 수 있어야합니다.

{{< figure align=center src="images/image.png" alt="Ubuntu 20.04에 phpmyadmin을 로그인하는 방법">}}

phpmyadmin nginx를 확보하기 위해 phpmyadmin에 대한 추가 보안을 설정하는 것이 좋습니다. Phpmyadmin URL을 Absperure URL과 같은 것으로 변경하고 액세스 할 수 있어야합니다.

## 7 단계 : 보안 phpmyadmin   {#id-6-secure-phpmyadmin recommorded}
다음으로, 추가 보안 계층을 제공하기 위해 Nginx에서 인증을 설정하려고합니다. 이제 Nginx 및 Apache2 서버에서 작동하는 .htpasswd 파일을 생성 할 수있는 Apache2-Utils를 설치합니다.
```
sudo apt install apache2-utils
```
설치되면 .htpasswd 파일을 생성 할 수 있습니다. 선택한 사용자 이름을 변경하십시오. [비밀번호 생성][3] 그리고 안전하게 유지하십시오.
```
sudo htpasswd -c /etc/nginx/.htpasswd username
```
이제 사용자 이름과 암호화 된 비밀번호가 포함 된 .htpasswd 파일이 있습니다. 아래 명령으로 이것을 확인할 수 있습니다.
```
cat /etc/nginx/.htpasswd
```
사용자 이름 : $ APR1SDFSDF4435SDTSKLFWMMG1SFDSDGG4와 같은 것을 볼 수 있습니다
이제 Nginx 구성 파일에 2 개의 지시문을 추가해야합니다. 기본 파일 경로는 일반적으로/etc/nginx/sitees-available/default에 있지만 구성 파일의 위치는 설치에 따라 다를 수 있습니다. 여러 도메인을 설정하면 구성 파일이 /etc/nginx/sites-available/example.com과 같은 곳에있을 수 있습니다.
이 예에서는 nginx 구성 파일이/etc/nginx/sitees-available/default에 있다고 가정합니다. 파일을 열어 편집하십시오.
```
sudo nano /etc/nginx/sites-available/default
```
아래로 스크롤하고 위치 블록을 찾고 가려진 phpmyadmin 폴더의 이름으로 위치 블록에 붙여 넣습니다.
```
location /aspose_hidden {
        auth_basic "Restricted Access";
        auth_basic_user_file /etc/nginx/.htpasswd;
}
```
파일을 저장하고 종료합니다 (Ctrl + X를 누르고 Y를 누른 다음 Enter를 누릅니다). nginx 구성 파일이 유효한지 확인하십시오. 그렇지 않으면 명령을 실행하여 서버가 다시 시작될 수 있습니다.
```
sudo nginx -t
```
유효한 경우 nginx 구성을 다시로드하십시오.
```
sudo service nginx reload
```
이제 example.com/aspose_hidden을 방문 할 때는 인증 창이 표시되어야합니다.

{{< figure align=center src="images/auth3.png" alt="phpmyadmin을 확보하는 방법">}}

당신은 모두 Ubuntu 서버에서 phpmyadmin 설치로 완료되었습니다.

## 결론 :   {#id-what-next}
축하합니다. Ubuntu 20.04 / 20.10 서버 용 Nginx와 함께 Phpmyadmin을 성공적으로 설치했으며 이제 phpmyadmin을 통해 MySQL을 관리 할 수 ​​있습니다. 이제 MySQL 데이터베이스, 사용자, 테이블, MySQL 쿼리 및 기타 다양한 작업을 수행 할 수 있습니다.
궁금한 점이 있으면 아래에 의견 섹션에서 자유롭게 알려주십시오.

## 탐구하다
아래에 더 관련된 기사를 좋아할 수도 있습니다.
  * [Apache를 Ubuntu/Debian의 역 프록시로 구성하는 방법][4]
  * [우분투에서 암호화로 Nginx를 보호하고 암호화하는 방법][5]
  * [우분투/데비안의 NGINX에서 HTTP/2 지원을 구성하는 방법][6]
  * [AWS 프로덕션 서버에서 승객으로 Nginx를 설정하는 방법][7]
  * [우분투에서 Apache를 사용하여 OwnCloud를 설치하고 구성하는 방법][8]

  
[1]: https://devanswers.co/installing-phpmyadmin-nginx-ubuntu-16-04-17-04/mysql-setup/
[2]: https://passgen.co/
[3]: https://passgen.co/?pw=10&a=1
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[8]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
