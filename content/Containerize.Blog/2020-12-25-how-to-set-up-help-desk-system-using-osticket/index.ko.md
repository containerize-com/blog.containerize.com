---
title: "Osticket을 사용하여 온라인 헬프 데스크 소프트웨어를 설정하는 방법" 
seoTitle: "Osticket을 사용하여 온라인 헬프 데스크 소프트웨어를 설정하는 방법" 
description: "Osticket 헬프 데스크를 사용하여 모든 지원 요청을 한 곳에서 관리하십시오. 이메일, 전화 및 양식을 통해 작성된 문의를 웹 기반 티켓으로 변환합니다." 
date: Fri, 25 Dec 2020 05:46:51 +0000
author: bilalahmed
summary: "Osticket을 사용하여 모든 지원 요청을 한 곳에서 관리하십시오. 이메일, 전화 및 양식을 통해 작성된 문의를 간단한 웹 기반 티켓으로 변환합니다." 
url: /ko/how-to-set-up-help-desk-system-using-osticket/
categories: ['Help Desk']
---

## 오스티켓을 사용하여 모든 지원 요청을 한 곳에서 관리하십시오. 이메일, 전화 및 양식을 통해 작성된 문의를 간단한 웹 기반 티켓으로 변환합니다.

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket.png" alt="Osticket을 사용하여 온라인 헬프 데스크 소프트웨어를 설정하는 방법">}}

오스티켓은 오픈 소스 온라인 헬프 데스크 소프트웨어 솔루션입니다. Osticket HelpDesk는 높은 비용 및 복잡한 고객 지원 시스템에 대한 무료 대안입니다. 간단하고 경량, 신뢰할 수 있으며 웹 기반이며 설정 및 사용이 쉽습니다. 가장 좋은 점은 완전히 무료입니다. 이 튜토리얼에서 다음 섹션을 다룰 것입니다.
  * [오스티켓이란 무엇입니까?][1]
  * [오스티켓의 장단점][2]
  * [오스티켓을 설정하는 방법?][3]
  * [결론][4]

## 오스티켓이란 무엇입니까?   {#osticket}
Osticket은 사용자 친화적 인 제어판과 실시간보고 구성 요소를 제공합니다. 사용자는 몇 가지 쉬운 단계로 로그인하고 티켓을 만들 수 있습니다. 웹 사이트, 이메일 또는 전화를 통해 티켓을 만들 수 있습니다. 수신 티켓은 에이전트에게 저장되고 할당됩니다. 에이전트는 이메일 알림을 받고 문제를 해결하기 위해 쿼리에 응답합니다. 고객과 에이전트는 의견 섹션에서 세부 사항과 진행 상황을 논의 할 수 있습니다. 고객은이 온라인 헬프 데스크 소프트웨어가 제공하는 내장 고객 포털을 통해 요청 및 진행 상황을 추적 할 수 있습니다.

## 오스티켓의 장단점   {#pros}

#### 장점
  * Osticket은 최종 사용자와 지원 에이전트 모두에게 매우 사용자 친화적입니다.
  * 풍부한 기능으로 번들로 오스티켓에는 지나치게 복잡하지 않고 필요한 모든 것이 있습니다.
  * 오스티켓은 완전히 무료이며 오픈 소스 티켓 관리 소프트웨어입니다.
  * 가볍고 안전하며 신뢰할 수 있으며 헬프 데스크 관리 소프트웨어를 설치하기가 쉽습니다.
  * Apache, Nginx, LightTPD 및 IIS 등을 포함한 모든 인기있는 웹 서버에서 실행할 수 있습니다.

#### 단점
  * Ostiket은 다른 유료 헬프 데스크 시스템과 같은 세부 정보 티켓 분석 및 통계를 제공하지 않습니다.
  * 다른 지원 시스템과 비교할 때 사용자 인터페이스는 매우 간단하고 기본적입니다.

## 오스티켓을 설치하는 방법은 무엇입니까?   {#어떻게}
다음 단계를 따라 Ubuntu 18.04 LTS에 Nginx가있는 Osticket을 설치하십시오.
  * 오스티켓에 대한 새 디렉토리를 만듭니다.
```
sudo mkdir -p /var/www/osticket/
cd /var/www/osticket/
```
  * 다음 명령을 사용하여 최신 오스티켓 설정을 다운로드하십시오.
```
sudo apt-get install wget unzip
sudo wget https://github.com/osTicket/osTicket/releases/download/v1.14.1/osTicket-v1.14.1.zip
sudo unzip osTicket-v1.14.1.zip
```
  * 그런 다음이 명령을 사용하여 샘플 파일에서 구성 파일을 만듭니다.
```
sudo su -
cd upload/
cp ost-sampleconfig.php ost-config.php
```
  * 그런 다음 Osticket Web Directory의 소유권을 'www-data'사용자 및 그룹으로 변경하십시오.
```
sudo chown -R www-data:www-data /var/www/osticket/

```
  * 그 후 새 가상 호스트 구성 파일을 만듭니다.
```
sudo vim /etc/nginx/sites-available/osticket.conf

```
  * 그런 다음 구성 코드를 붙여 넣습니다.
```
server {
listen 80;
server_name 13.52.217.10;   ## change server_name as per your domain name.
root /var/www/osticket/upload;

access_log /var/log/nginx/access.log;
error_log /var/log/nginx/error.log;
index index.php index.html index.htm;


# Enable gzip
gzip on;
gzip_min_length 1000;
gzip_types text/plain application/x-javascript text/xml text/css application/xml;

set $path_info "";

location ~ /include {
deny all;
return 403;
}

if ($request_uri ~ "^/api(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/api/(?:tickets|tasks).*$ {
try_files $uri $uri/ /api/http.php?$query_string;
}

if ($request_uri ~ "^/scp/.*\.php(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/scp/ajax.php/.*$ {
try_files $uri $uri/ /scp/ajax.php?$query_string;
}

location / {
try_files $uri $uri/ index.php;
}

location ~ \.php$ {
fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
include fastcgi_params;
include snippets/fastcgi-php.conf;
fastcgi_pass unix:/run/php/php7.2-fpm.sock;
}
}
```
  * 도메인 이름에 따라 서버 이름을 변경하십시오. 파일을 저장하고 종료하십시오.
  * 이제이 가상 호스트 파일을 다음 명령을 사용하여 사이트 지원 폴더에 연결하십시오.
```
ln -s /etc/nginx/sites-available/osticket.conf /etc/nginx/sites-enabled/

```
  * 다음 명령을 사용하여 구성 오류를 테스트하십시오
```
nginx -t
```
  * 이제 다음 명령을 사용하여 nginx 서비스를 다시 시작하십시오
```
sudo systemctl restart nginx

```
  * 이제 모든 웹 브라우저에 도메인 이름을 입력하여 다음 그림과 같이 설치 마법사를 시작하십시오.

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-2.png" alt="Osticket을 사용하여 온라인 헬프 데스크 소프트웨어를 설정하는 방법">}}

  * php.ini에서 필요한 확장을 활성화하고 "계속"을 클릭하십시오.
* 필요한 모든 정보를 채우고“**지금 설치”**버튼을 클릭하십시오.

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-3.png" alt="Osticket을 사용하여 온라인 헬프 데스크 소프트웨어를 설정하는 방법">}}

  * 데이터베이스 설정에서 dbname, 사용자 이름 및 비밀번호를 입력하십시오.
  * 마지막으로 "지금 설치"버튼을 클릭하십시오
  * 설치가 완료되면 성공 메시지가 포함 된 페이지가 표시됩니다.
  * 다음으로, 다음 명령을 실행하여 ost-config.php의 허가를 변경하여 쓰기 액세스를 제거하십시오.
```
cd /var/www/osticket/upload/
chmod 0644 include/ost-config.php
```

## 결론   {#conclusion}
오스티켓은 예산이 낮은 회사 나 간단한 헬프 데스크 시스템을 원하고 복잡한 시스템이 아닌 회사에 가장 적합합니다. 간단하고 가볍고 신뢰할 수 있으며 오픈 소스이며 완전히 무료 온라인 헬프 데스크 소프트웨어입니다. 이로 인해 Osticket은 고등 고객 지원 시스템에 대한 훌륭한 대안이됩니다. 오스티켓 기능 및 설치 안내서에 대한 자세한 내용은 다음 자습서를 확인하십시오.

## 탐구하다
[최고의 오픈 소스 및 무료 IT 헬프 데스크 소프트웨어][5]
[인기있는 무료 발권 기반 헬프 데스크 및 고객 관리 시스템][6]
[오스티켓 플러그인 개발을위한 초보자 안내서][7]
[오스티켓에서 다중 테넌시를 구현하는 방법][8]
[WordPress 및 Osticket을 사용하여 발권 시스템 자동화][9]

  
[1]: #osticket
[2]: #pros
[3]: #how
[4]: #conclusion
[5]: https://products.containerize.com/helpdesk/
[6]: https://products.containerize.com/helpdesk/osticket
[7]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
[8]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
[9]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
