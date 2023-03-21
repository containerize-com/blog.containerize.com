---
title: "Ubuntu에 Pydio 파일 공유 및 동기화 플랫폼을 설치하는 방법" 
seoTitle: "Ubuntu에 Pydio 파일 공유 및 동기화 플랫폼을 설치하는 방법" 
description: "Pydio는 오픈 소스 파일 공유 및 자체 호스팅 공동 작업 문서 공유 소프트웨어입니다. Pydio 파일 공유 및 동기화 도구를 설치하는 방법을 검토해 봅시다." 
date: Fri, 02 Jul 2021 22:46:01 +0000
author: yasir saeed
summary: "Pydio는 클라우드 기반 파일 공유 및 동기화 플랫폼으로 모든 장치에서 모든 데이터에 액세스 할 수 있습니다. 이 튜토리얼은 우분투에 Pydio를 설치하는 방법에 관한 것입니다." 
url: /ko/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## pydio는 클라우드 기반 파일 공유 및 동기화 플랫폼으로 모든 장치에서 모든 데이터에 액세스 할 수 있습니다. 이 튜토리얼은 우분투에 Pydio를 설치하는 방법에 관한 것입니다.

{{< figure align=center src="images/How-to-Install-Pydio-File-Sharing-and-Sync-Platform-on-Ubuntu.png" alt="Ubuntu에 Pydio 파일 공유 및 동기화 플랫폼을 설치하는 방법">}}


##  **개요** 
Pydio Cells는 오픈 소스 파일 공유 및 동기화 소프트웨어입니다. 모든 데이터 스토리지에 대한 단일 액세스 지점을 제공하며 스토리지 서비스, 파일 공유 및 동기화를 제공하는 OwnCloud 및 NextCloud의 대안입니다. Pydio는 Dropbox 및 기타 스토리지 플랫폼과 유사한 엔터프라이즈 오픈 소스 파일 공유 플랫폼입니다. 하나의 플랫폼에서 모든 파일과 장치를 안전하게 연결하는 데 도움이됩니다.
Pydio Cells는 클라우드 기반 파일 동기화 및 협업 플랫폼입니다. 이 오픈 소스 소프트웨어는 개인 IT 인프라에서 실행되며 직원이 비즈니스 데이터를 보호하고 모니터링 할 수 있도록 도와줍니다. Pydio 셀을 사용하여 모바일 앱, 데스크탑 소프트웨어 또는 웹 브라우저를 사용하여 데이터를 동기화하고 어디서나 액세스 할 수 있습니다. Pydio Cells Best File Sharing App은 마이크로 서비스 아키텍처를 기반으로하며 Golang 프로그래밍 언어를 사용하여 작성됩니다.
이 튜토리얼을 사용하면 Ubuntu LTS 시스템에서 Pydio 자체 호스팅 파일 공유 소프트웨어 및 동기화 플랫폼을 설치하고 구성하는 데 도움이됩니다.
  * 시작하기
  * 램프 서버를 설치하십시오
  * 우분투에 Pydio를 설치하십시오
  * Pydio 데이터베이스 및 사용자를 만듭니다
  * 브라우저에서 pydio에 액세스하십시오
  * 결론

## 1 단계 : 시작하기
설치하기 전에 시스템이 최신 패키지를 실행하는지 확인해야합니다. 아래 명령을 사용하여 Ubuntu 20.04 서버를 업데이트하십시오.
```
sudo apt-get update -y
sudo apt-get upgrade -y
```
업데이트 후에는 새로운 변경 사항이 적용되도록 항상 서버를 재부팅하는 것이 좋습니다.
```
sudo reboot
```

## 2 단계 : 램프 서버를 설치합니다
Pydio Secure Enterprise 파일 공유 서버를 설정하고 오픈 소스 프라이빗 클라우드를 만드는 방법을 설정하려면 먼저 실행중인 램프 서버를 설정해야합니다. 램프 스택을 이미 설치하고 실행중인 경우이 단계를 건너 뛰면 다음 단계를 사용하여 다음 명령을 사용하여 우분투 시스템에서 램프를 설정하십시오.

### php를 설치하십시오
명령을 실행하여 우분투 또는 데비안 시스템에 PHP를 설치할 수 있습니다.
Sudo apt-get 설치 Python-Software-Properties
Sudo Add-Apt-Repository PPA : Ondrej/Php
Sudo apt-get install -y php-gd php-curl php-zip php-dom php-xml php-simplexml php-mbstring
{{_LINE_34_}}

### Apache2를 설치하십시오
Apache는 가장 널리 사용되는 오픈 소스 웹 서버 소프트웨어입니다. 다음으로 Ubuntu에 Apache 웹 서버를 설치하여 다음을 실행하십시오.
sudo apt-get install -y apache2 libapache2-mod-php
{{_LINE_38_}}

### MySQL을 설치하십시오
MySQL Open-Source Relational Database Management System은 LAMP 웹 애플리케이션 소프트웨어 스택 및 기타의 구성 요소입니다. 이제 아래에서 실행하여 Ubuntu에 MySQL을 설치하십시오.
sudo apt-get install -y mysql-server php-mysql
{{_LINE_42_}}
설치가 완료되면 편집 할  **php.ini**  구성 파일을 엽니 다. 선호하는 파일 편집기를 사용하십시오.
아래와 같이 php.ini 파일을 변경하십시오. 두 파일을 열고 표시된대로 변경하십시오
```
sudo vim /etc/php/7.4/apache2/php.ini
```
다음을 변경하십시오
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```
파일을 저장하고 닫고 다른 php.ini 파일을 편집하십시오.
```
sudo vim /etc/php/7.4/cli/php.ini
```
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```

## 3 단계 : 우분투에 Pydio를 설치하십시오
먼저 Ubuntu 20.04 서버에 Pydio Best 무료 파일 공유 소프트웨어 저장소를 추가 할 수 없으므로 추가해야합니다. 또한 비즈니스 공개 키를위한 Pydio 최고의 파일 공유 시스템을 추가하고 시스템 저장소를 업데이트하십시오.
```
echo "deb https://download.pydio.com/pub/linux/debian/ bionic main" | sudo tee /etc/apt/sources.list.d/pydio.list
wget -qO - https://download.pydio.com/pub/linux/debian/key/pubkey | sudo apt-key add -
sudo apt update

```
이제 Pydio EFSS를 설치하고 문서 공유 소프트웨어를 설치해야합니다. 표시된대로 명령을 실행하십시오
```
sudo apt install -y pydio pydio-all
```
아래에 표시된 명령을 사용하여 Apache Rewrite 모듈을 활성화하고 Apache2를 다시 시작하고 활성화합니다.
```
sudo a2enmod rewrite
sudo systemctl restart apache2
sudo systemctl enable apache2
```
Apache Service가 아래 명령을 사용하여 실행 중인지 확인하십시오.
```
sudo systemctl status apache2
```
APACHE2 서비스가 실행 중임을 보여주는 설치가 올바르게 수행 된 경우 출력이 표시되어야합니다.

## 4 단계 : Pydio 데이터베이스 및 사용자를 만듭니다
코드를 추출한 후 이제 Pydio 구성을위한 MySQL 데이터베이스 및 사용자 계정을 만들어 봅시다. 다음 명령 세트를 사용하여 MySQL Server에 로그인하여 AjaxPlorer sharesync 또는 pydio 데이터베이스 및 사용자를 만듭니다.
mysql -u 루트 -p
암호를 입력:
mysql> 데이터베이스 생성 pydio;
mysql> pydio에 모두 부여하십시오.* '_password_'로 식별 된 'pydio'@'localhost';
MySQL> 플러시 권한;
mysql> 종료
{{_LINE_69_}}
다음으로 Web Interface에서 Ubuntu에 Pydio를 설치하여 프라이빗 클라우드를 생성해야합니다.

## 5 단계 : 브라우저에서 Pydio에 액세스하십시오
브라우저를 열고 url _http : // pydio_를 입력하십시오. 표시된대로 페이지가 표시됩니다
Pydio Private Cloud 파일 공유 및 비즈니스 파일 공유 소프트웨어가 이제 설치 및 구성되어 웹 인터페이스에 액세스 할 때입니다.
브라우저를 열고 URL을 입력하십시오 http : // 서버 -ip / pydio. 다음 페이지로 리디렉션됩니다.

{{< figure align=center src="images/Pydio-Installer.png" alt="Pydio 설치 프로그램">}}

모든 컨트롤을 확인하고  **계속 Pydio 설치**  버튼을 클릭하십시오. 다음 페이지가 표시됩니다.

{{< figure align=center src="images/Pydio-setup-wizard.png" alt="Pydio 설정 마법사">}}

언어를 선택하고  **마법사 시작** 를 클릭하십시오. 다음 페이지가 표시됩니다.

{{< figure align=center src="images/Starting-the-setting.png" alt="Pydio 설정을 시작하십시오">}}

프로그램 이름을 입력하고 오신 것을 환영합니다. 그런 다음 버튼  **다음** 을 클릭하십시오. 다음 페이지가 표시됩니다.

{{< figure align=center src="images/Enter-the-application-name.png" alt="Pydio 응용 프로그램을 입력하십시오">}}

그런 다음 관리자 계정을 입력하고  **다음**  버튼을 클릭하십시오. 다음 페이지가 표시됩니다.

{{< figure align=center src="images/MySQL-database-settings.png" alt="MySQL 데이터베이스 설정">}}

그런 다음 데이터베이스 이름, 사용자 이름 및 비밀번호와 같은 데이터베이스 세부 정보를 입력하십시오. 그런 다음  **테스트 DB 연결**  버튼을 클릭하십시오. 다음 페이지가 표시됩니다.

{{< figure align=center src="images/Pydio-Advanced-Options.png" alt="Pydio 고급 옵션">}}

다음으로  **Pydio**  설치 버튼을 클릭하십시오. 설치가 성공적으로 완료되면 다음 페이지로 리디렉션됩니다.

{{< figure align=center src="images/Pydio-Login.png" alt="Pydio 로그인">}}

그런 다음 관리자의 사용자 이름과 비밀번호를 입력하십시오. 그런 다음 [Enter] 버튼을 클릭하십시오. 다음 페이지가 표시됩니다.

응! 끝났다. 이제 Dropbox 또는 Google 드라이브와 유사한 단계별로 프라이빗 클라우드를 단계별로 구축하기 위해 Ubuntu에 Pydio 자체 호스팅 파일 동기화 및 오픈 소스 파일 공유 소프트웨어를 완전히 설치하는 방법을 알 수 있습니다.

##  **결론 :**    {#4a1a}
이 튜토리얼에서는 Ubuntu 시스템에 Pydio Cells Open Source Secure 파일 공유를 성공적으로 설치했습니다. 이 기사를 사용하여 자체 호스팅 클라우드에 파일을 저장, 보호 및 공유하기위한 클라우드 인프라를 만들 수 있습니다. Pydio 공동 작업 문서 공유 및 최고의 무료 파일 공유 앱을 사용하여 데이터를 더 많이 제어하고 비즈니스 조직의 효율적인 협업을 보장하십시오. 다가오는 자습서에서는 오픈 소스 클라우드 스토리지 솔루션 및 파일 공유 협업 도구의 더 흥미로운 주제에 대해 설명합니다.
_ 당신은 [Twitter][1], [LinkedIn][2] 및 [Facebook][3] 페이지에서 우리와 함께 할 수 있습니다. 어떤 클라우드 기반 _ 오픈 소스 _file 공유 플랫폼을 온라인으로 사용하십니까?. 궁금한 점이 있으면 제발 _ [연락][4].

## 탐구하다:
또한 귀하의 서버의 일상 관리와 관련된 몇 가지 다른 기사가 있습니다.
  * [우분투/데비안의 역 프록시로 아파치를 구성하는 방법][5]
  * [우분투에 nginx를 사용하여 phpmyadmin을 설치하고 고정하는 방법][6]
  * [우분투에서하자 암호화와 함께 Nginx를 안전하고 암호화합니다.][7]
  * [우분투/데비안의 NGINX에서 HTTP/2 지원을 구성][8]
  * [AWS 프로덕션 서버에서 승객으로 Nginx 설정][9]

  
[1]: https://twitter.com/containerize_co
[2]: https://www.linkedin.com/company/containerize/
[3]: http://facebook.com/containerize
[4]: mailto:yasir.saeed@aspose.com
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
