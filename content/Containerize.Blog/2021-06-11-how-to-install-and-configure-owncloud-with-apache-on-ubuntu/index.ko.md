---
title: "Ubuntu의 Apache를 사용하여 OwnCloud를 설치하고 구성하는 방법" 
seoTitle: "Ubuntu의 Apache를 사용하여 OwnCloud를 설치하고 구성하는 방법" 
description: "OwnCloud는 파일 호스팅 서비스를 작성하기위한 오픈 소스 클라이언트 서버 소프트웨어입니다. 이 튜토리얼에서는 Ubuntu에서 OwnCloud를 설치하고 구성하는 방법을 배울 것입니다." 
date: Fri, 11 Jun 2021 18:59:44 +0000
author: yasir saeed
summary: "OwnCloud는 파일 호스팅 서버를 작성하기위한 클라이언트 서버 소프트웨어의 오픈 소스 컬렉션입니다. 이 튜토리얼은 Ubuntu에서 OwnCloud를 구성하는 방법에 관한 것입니다." 
url: /ko/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## OwnCloud는 파일 호스팅 서버를 작성하기위한 클라이언트 서버 소프트웨어의 오픈 소스 컬렉션입니다. 이 튜토리얼은 Ubuntu에서 OwnCloud를 구성하는 방법에 관한 것입니다.

{{< figure align=center src="images/Install-and-Configure-ownCloud-with-Apache-on-Ubuntu.png" alt="">}}


## **개요** 
OwnCloud는 데이터 동기화 및 파일 공유에 사용되는 PHP로 작성된 무료이며 인기있는 강력한 오픈 소스 엔터프라이즈 웹 응용 프로그램입니다. 또한 데이터 파일, 연락처, 캘린더, 목록 등을 쉽게 관리 할 수 ​​있습니다. Google Drive, Dropbox, Icloud 및 기타 클라우드 스토리지 서비스와 같은 가장 인기있는 클라우드 플랫폼에 대한 훌륭한 대안입니다. 그러나 다른 클라우드 스토리지 서비스와는 달리, OwnCloud Self Hosted는 자신의 호스트 클라우드를 자유롭게 만들 수 있습니다.
OwnCloud는 웹 인터페이스를 사용하여 프라이빗 클라우드를 생성하는 데이터 액세스를 제공하는 오픈 소스 프라이빗 클라우드 소프트웨어입니다. 이를 통해 캘린더 이벤트, 아카이브, 그림, 녹음, 작업, Dropbox 및 Google Drive와 유사한 북마크가있는 주소록을 쉽게보고 동기화하고 동기화 할 수 있습니다. 또한 제어하에있는 장치에서 데이터를 동기화하고 공유하는 옵션을 제공합니다. 설치 및 구성 OwnCloud는 모바일 앱 장치뿐만 아니라 데스크탑 클라이언트에 동기화 된 데이터를 지원합니다. 또한 Ubuntu에서 OwnCloud를 사용하여 사용자 당 파일에서 사용자 및 그룹 액세스 제한을 쉽게 구현할 수 있습니다. OwnCloud 오픈 소스 개인 스토리지 서버는 크로스 플랫폼 응용 프로그램이며 모든 인기있는 운영 체제에 설치할 수 있습니다.
이 튜토리얼을 사용하면 Ubuntu LTS 시스템에서 OwnCloud를 설정하고 OwnCloud를 구성하는 데 도움이됩니다.
  * 램프 서버를 설치하십시오
  * OwnCloud를 다운로드하십시오
  * MySQL 데이터베이스 및 사용자를 만듭니다
  * OwnCloud를 설치하십시오
  * OwnCloud에 가장 적합한 대안은 무엇입니까?
  * 결론

## 1 단계 : 램프 서버를 설치합니다
자체 클라우드 서버를 설정하고 프라이빗 클라우드를 만드는 방법을 위해 먼저 실행중인 램프 서버를 설정해야합니다. 램프 스택을 이미 설치하고 실행중인 경우이 단계를 건너 뛰면 다음 단계를 사용하여 다음 명령을 사용하여 우분투 시스템에서 램프를 설정하십시오.

### php를 설치하십시오
명령을 실행하여 우분투 또는 데비안 시스템에 PHP 5.6 이상의 버전을 설치할 수 있습니다.
sudo apt-get 설치 Python-Software-Properties
Sudo Add-Apt-Repository PPA : Ondrej/Php
sudo apt-get 업데이트
sudo apt -get 업그레이드 -y
Sudo apt-get install -y php-gd php-curl php-zip php-dom php-xml php-simplexml php-mbstring
{{_LINE_31_}}

### Apache2를 설치하십시오
Apache는 가장 널리 사용되는 오픈 소스 웹 서버 소프트웨어입니다. 다음으로 Ubuntu에 Apache 웹 서버를 설치하여 자신의 클라우드 서버를 실행하여 다음을 수행하십시오.
sudo apt-get install -y apache2 libapache2-mod-php
{{_LINE_35_}}

### MySQL을 설치하십시오
MySQL Open-Source Relational Database Management System은 LAMP 웹 애플리케이션 소프트웨어 스택 및 기타의 구성 요소입니다. 이제 아래에서 실행하여 Ubuntu에 MySQL을 설치하십시오.
sudo apt-get install -y mysql-server php-mysql
{{_LINE_39_}}

## 2 단계 : Ubuntu에서 OwnCloud를 다운로드하십시오
Ubuntu 시스템에서 Lamp Server를 성공적으로 구성한 후 [공식 웹 사이트][1]에서 최신 Cloud Private Cloud Storage 솔루션을 다운로드하겠습니다.
CD /TMP
wget https://download.owncloud.org/community/owncloud-10.4.0.tar.bz2
{{_LINE_44_}}
다운로드 한 후 OwnCloud Server 소프트웨어가 완료된 후 이제 웹 사이트 문서 루트 아래로 다운로드 된 아카이브를 추출하고 Ubuntu에 weldcloud를 설치하기 위해 실행하여 파일 및 디렉토리에 대한 적절한 권한을 설정하십시오.
CD/var/www/html
Sudo tar xjf /tmp/owncloud-10.4.0.tar.bz2
Sudo chown -r www-data : www-data oncloud
Sudo chmod -r 755 OwnCloud
{{_LINE_50_}}
이제 아카이브 파일을 제거하고 Apache Server를 다시 시작하십시오.
Sudo rm -f /tmp/owncloud-10.4.0.tar.bz2
sudo systemctl 다시 시작 apache2

## 3 단계 : OwnCloud 데이터베이스 및 사용자를 만듭니다
코드를 추출한 후 이제 MySQL 데이터베이스 및 사용자 계정을 작성하여 OwnCloud Personal Cloud Storage Server 구성을 작성하겠습니다. 다음 명령 세트를 사용하여 MySQL Server에 로그인하여 OwnCloud 데이터베이스 및 사용자를 작성하십시오.
mysql -u 루트 -p
암호를 입력:
mysql> 데이터베이스 weencloud 만들기;
mysql> onselfcloud에 모든 것을 부여하십시오.* 'onevercloud'@'localhost'로 '_password_'로 식별;
MySQL> 플러시 권한;
mysql> 종료
{{_LINE_62_}}
다음으로 개인 클라우드를 생성하려면 웹 인터페이스에서 Ubuntu에 weldcloud를 설치해야합니다.

## 4 단계 : 우분투에 OwnCloud를 설치하십시오
이제 웹 브라우저에서 OwnCloud Best Personal Cloud Server 웹 패널 디렉토리에 액세스하십시오. LocalHost를 서버 IP 주소 또는 도메인 이름으로 변경하십시오.
http : // localhost/onsolcloud/
{{_LINE_67_}}
오픈 소스 OwnCloud 로그인 페이지가 표시됩니다. 새 관리자 사용자 이름 및 비밀번호 자격 증명을 입력하여 관리자 계정을 생성하고 데이터 폴더의 위치를 ​​제공하십시오. 모든 것이 괜찮다면 이와 같은 웹 페이지를 가져와야합니다.
{{_LINE_69_}}

{{< figure align=center src="images/owncloud-setup-1.png" alt="우분투에 Apache와 함께 OwnCloud를 설치하십시오">}}

{{_LINE_71_}}
이제 페이지를 아래로 밀어 넣으십시오. 아래 양식에서는 Manager Best Personal Cloud Server OwnCloud 패널에 사용자 이름과 비밀번호를 입력해야합니다. 또한 데이터베이스 및 비밀번호와 함께 데이터베이스를 제공하여 데이터베이스 서버, 데이터 폴더의 위치를 ​​사용하여 자신의 Cloud 서버를 연결하고 **설정 설정** 를 클릭하십시오.
{{_LINE_73_}}

{{< figure align=center src="images/owncloud-setup-2.png" alt="Ubuntu에서 OwnCloud를 구성하십시오">}}

{{_LINE_75_}}
설정을 완료하면 관리자 대시 보드가 나타납니다. 사용자, 그룹 및 할당 권한 등을 생성 할 수있는 곳.
{{_LINE_77_}}

{{< figure align=center src="images/owncloud-after-login.png" alt="OwnCloud 대시 보드를 설치하십시오">}}

{{_LINE_79_}}
응! 우리는 개인 클라우드 스토리지를 구축하기 위해 OwnCloud 설치 가이드를 완료했습니다. 이제 Dropbox 또는 Google Drive와 유사한 단계별로 개인 클라우드를 구축하기 위해 Ubuntu에 OwnCloud를 완전히 설치하는 방법을 알고 있습니다.

## **OwnCloud에 가장 적합한 대안은 무엇입니까?** {#4a1a}

다음은 자체 호스팅 된 OwnCloud 대안 및 경쟁사 파일 호스팅 소프트웨어입니다.
* **Seafile** 는 오픈 소스 크로스 플랫폼 파일 호스팅 소프트웨어 시스템입니다.
* **NextCloud** 는 무료이며 오픈 소스 클라우드 스토리지 플랫폼입니다.
* **resilio sync** 는 오픈 소스 피어 투 피어 파일 동기화 응용 프로그램입니다.
* **Pydio Cells** 는 오픈 소스 파일 공유 및 동기화 소프트웨어입니다.
* **동기화** 는 무료이며 오픈 소스 피어 투 피어 파일 동기화 응용 프로그램

## **결론:**  {#block-dd1258f4-e0c5-4ac9-be18-7dd2a700f09e}

축하해요! Ubuntu 머신에서 Apache로 자신의 프라이빗 클라우드를 구축하기 위해 OwnCloud를 성공적으로 설치하고 구성했습니다. 이제 귀하의 데이터는 타사의 손에 달려 있지 않으며 Virtual Private Cloud OwnCloud Ubuntu 서버 스토리지에서 개인적으로 관리 할 수 ​​있습니다. 많은 회사들이 데이터의 개인 정보 보호 문제로 인해 많은 중요한 정보를 가진 자체 클라우드 서버를 만들기로 선택하고 있습니다. 다가오는 튜토리얼에서는 웹 서버 솔루션 스택의 더 흥미로운 주제에 대해 논의 할 것입니다.
_ 당신은 [Twitter][2], [LinkedIn][3] 및 [Facebook][4] 페이지에서 우리와 함께 할 수 있습니다. 온라인에서 어떤 클라우드 기반 스토리지 솔루션을 사용하십니까?. 궁금한 점이 있으면 제발 _ [연락을 취하십시오][5].

## 탐구하다:
또한 서버의 일상적인 관리와 관련된 몇 가지 다른 기사가 있습니다.
  * [우분투/데비안의 역 프록시로 아파치를 구성하는 방법][6]
  * [우분투에 nginx를 사용하여 phpmyadmin을 설치하고 고정하는 방법][7]
  * [우분투에서하자 암호화 20.04로 Nginx를 안전하고 암호화합니다][8]
  * [우분투/데비안의 NGINX에서 HTTP/2 지원을 구성][9]
  * [AWS 프로덕션 서버에서 승객으로 Nginx 설정][10]



[1]: https://owncloud.org/install/
[2]: https://twitter.com/containerize_co
[3]: https://www.linkedin.com/company/containerize/
[4]: http://facebook.com/containerize
[5]: mailto:yasir.saeed@aspose.com
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
