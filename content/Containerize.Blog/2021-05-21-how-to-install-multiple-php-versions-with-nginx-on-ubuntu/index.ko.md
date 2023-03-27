---
title: "Ubuntu에서 Nginx를 사용하여 여러 PHP 버전을 설치하는 방법" 
seoTitle: "Ubuntu에서 Nginx를 사용하여 여러 PHP 버전을 설치하는 방법" 
description: "이 기사는 Ubuntu에 Nginx를 사용하여 여러 버전의 PHP를 설치하는 방법을 설명합니다. Nginx를 사용하여 PHP를 설치하는 방법에 대한 단계별 지침을 살펴 보겠습니다." 
date: Fri, 21 May 2021 09:49:12 +0000
author: Assad Mahmood
summary: "Nginx와 함께 여러 버전의 PHP를 사용하려는 경우이 기사에서는 Ubuntu에서 Nginx를 사용하여 PHP를 설치하는 방법에 대한 단계별에 대한 단계별로 안내합니다." 
url: /ko/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

{{< figure align=center src="images/php-with-nginx-multiple-versions.png" alt="NGINX 다중 PHP 버전이있는 PHP">}}


## Nginx와 함께 여러 버전의 PHP를 사용하려면이 기사에서는 Ubuntu에서 Nginx를 사용하여 PHP를 설치하는 방법에 대한 단계별로 안내합니다.
이 기사는 Nginx에 대한 튜토리얼에 대한 시리즈를 계속 진행하고 있습니다. 지금까지 우리는 nginx를로드 밸런서로 사용하는 방법, nginx를 리버스 프록시로 사용하는 방법을 다루었습니다. 이제이 튜토리얼은“Nginx와 함께 여러 버전의 PHP를 사용하는 방법”을 다루고 있습니다. 이 자습서에서는 Ubuntu에 PHP를 설치하는 방법, Nginx로 PHP를 구성하는 방법 및 NGINX를 사용하여 여러 버전의 PHP를 설치하는 방법에 대한 단계별로 안내합니다. 그래서 시작합시다!
  * [nginx 설치][1]
  * [여러 PHP 버전 설치][2]
  * [PHP로 여러 웹 사이트 생성][3]
  * [웹 사이트의 다른 버전을 실행하도록 nginx를 구성][4]
  * [결론][5]

## nginx를 설치하십시오 {#nginx}

Nginx ( "Engine-X"로 발음)는 종종 리버스 프록시 또는 HTTP 캐시로 사용되는 오픈 소스 웹 서버입니다. Linux에서 무료로 사용할 수 있습니다.
nginx를 설치하려면 다음 명령을 사용하십시오.
```
sudo apt update
sudo apt install nginx
```
설치가 완료된 후 브라우저에서 "http : // localhost"를 열 수 있으며 모든 설정이 있습니다.

{{< figure align=center src="images/php-with-nginx-install.png" alt="Nginx로 PHP를 설치하십시오">}}


## 여러 PHP 버전을 설치하십시오 {#php}

 **PHP** ( **PHP : HyperText Preprocessor** 의 재귀 약어** )는 웹 사이트 및 웹 기반 애플리케이션을 개발하는 데 널리 사용되고 가장 적합한 오픈 소스, 인기있는 일반 목적 스크립팅 언어입니다. HTML에 포함될 수있는 서버 측 스크립팅 언어입니다.
현재  **PHP** , 즉  **PHP 5.6**  ,  **7.0,**  및  **8.0**  의 세 가지 지원 버전이 있습니다. 의미  **PHP 5.3**  ,  **5.4,**  및 **5.5**  는 모두 삶의 끝에 도달했습니다. 더 이상 보안 업데이트로 지원되지 않습니다. 먼저 PHP-FPM과 함께 PHP 7.0 및 PHP 7.2를 설치하겠습니다.
실제로 설치와 함께 이동하기 전에 첫 번째 밑면이 PHP-FPM이라는 말을하겠습니다.  **PHP-FPM** ( **FASTCGI 프로세스 관리자의 약어**  )는 매우 인기있는 대체 PHP (HyperText Processor) FASTCGI 구현입니다. PHP-FPM에는 대량으로 트래픽을 자주받는 웹 사이트에 유리한 수많은 기능이 포함되어 있습니다.
먼저 PHP 7.0 및 7.2를 설치하려면 여러 버전의 PHP를 설치하려면 서버에 PHP 저장소를 추가해야합니다. 다음 명령으로 ondrej php 저장소를 추가 할 수 있습니다.
```
sudo apt-get install software-properties-common -y
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update -y
```
리포지토리가 최신 상태가되면 다음 명령으로 PHP 7.0, PHP 7.2 및 PHP-FPM을 설치하십시오.
```
apt-get install php7.0 php7.0-fpm php7.2 php7.2-fpm -y
```
설치가 완료되면 다음 명령으로 PHP-FPM의 상태를 확인하십시오.
```
systemctl status php7.0-fpm
systemctl status php7.2-fpm
```

## PHP로 여러 웹 사이트를 만듭니다 {#web}

기본 페이지는/var/www/html/위치에 배치됩니다. 여기에 정적 페이지를 배치하거나 가상 호스트를 사용하여 다른 위치에 배치 할 수 있습니다.
```
mkdir /var/www/html/site1.containerize.com
mkdir /var/www/html/site2.containerize.com
```
다음으로 Site1의 샘플 index.php 파일을 만듭니다.
```
vi /var/www/html/site1.containerize.com/index.php
```
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hello, Nginx! Site1</title>
</head>
<body>
    <h1>Hello, Nginx! Site1</h1>
    <p>We have just configured our Nginx web server on Ubuntu Server!</p>
<?php
phpinfo();
?>
</body>
</html>
```
이제 site2에 대한 샘플 index.php 파일을 만듭니다.
```
vi /var/www/html/site2.containerize.com/index.php
```
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hello, Nginx! Site2</title>
</head>
<body>
    <h1>Hello, Nginx! Site2</h1>
    <p>We have just configured our Nginx web server on Ubuntu Server!</p>
<?php
phpinfo();
?>
</body>
</html>
```
그런 다음 두 웹 사이트의 소유권을 www-data로 변경하십시오.
```
chown -R www-data:www-data /var/www/html/site1.containerize.com
chown -R www-data:www-data /var/www/html/site2.containerize.com
```

## nginx를 구성합니다 {#configure}

다음으로 PHP 7.0을 사용하는 도메인 사이트 1.containerize.com 용 Nginx 가상 호스트 파일을 작성해야합니다. PHP 7.2를 사용하는 Site2.containerize.com의 다른 것.
```
vi /etc/nginx/sites-available/site1.containerize.com.conf
```
다음 줄 추가 :
```
server {
   listen 80;
   root /var/www/html/site1.containerize.com/;
   index index.php;
   server_name site1.containerize.com;
   location / {
      try_files $uri $uri/ =404;
   }
   location ~ \.php$ {
      try_files $uri =404;
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
      fastcgi_pass unix:/var/run/php/php7.0-fpm.sock;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include fastcgi_params;
   }
}
```
이제 site2.containerize.com의 두 번째 파일을 만듭니다
```
vi /etc/nginx/sites-available/site2.containerize.com.conf
```
```
server {
   listen 80;

   root /var/www/html/site2.containerize.com/;
   index index.php;

   server_name site2.containerize.com;

   location / {
      try_files $uri $uri/ =404;
   }

   location ~ \.php$ {
      try_files $uri =404;
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
      fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include fastcgi_params;
   }
}
```
그런 다음 다음 명령으로 두 가상 호스트 파일을 활성화합니다.
```
ln -s /etc/nginx/sites-available/site1.containerize.com.conf /etc/nginx/sites-enabled/
ln -s /etc/nginx/sites-available/site2.containerize.com.conf /etc/nginx/sites-enabled/
```
마지막으로 모든 구성 변경 사항을 적용하려면 NGINX 및 PHP-FPM 서비스를 다시 시작하십시오.
```
systemctl restart nginx
systemctl restart php7.0-fpm
systemctl restart php7.2-fpm
```

## 결론 {#conclusion}

이 튜토리얼에서 우리는 Ubuntu의 여러 PHP 버전에 대한 방법을 탐구했습니다. 우리는 nginx를 설치하는 방법을 배웠습니다. 그런 다음 Nginx에서 두 개의 다른 웹 사이트를 설정하는 방법을 살펴 보았습니다. 마지막으로 Nginx를 사용하여 다른 버전의 PHP로 두 개의 다른 웹 사이트를 구성하는 방법을 배웠습니다. 튜토리얼이 도움이 되었기를 바랍니다.

## 탐구하다
  * [Nginx를 리버스 프록시로 설정하고 구성하는 방법][6]
  * [응용 프로그램의로드 밸런서로 nginx를 사용하는 방법][7]



 [1]: #nginx
 [2]: #php
 [3]: #web
 [4]: #configure
 [5]: #conclusion
 [6]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
 [7]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
