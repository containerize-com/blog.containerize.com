---
title: "Ubuntu 서버에서 Apache를 사용하여 NextCloud를 설치하는 방법" 
seoTitle: "Ubuntu 서버에서 Apache를 사용하여 NextCloud를 설치하는 방법" 
description: "NextCloud는 PHP로 작성된 오픈 소스 자체 호스팅 클라우드 스토리지 솔루션입니다. 이 기사는 Ubuntu의 Apache와 함께 NextCloud를 설치하는 방법을 보여줍니다." 
date: Fri, 18 Jun 2021 13:53:31 +0000
author: yasir saeed
summary: "NextCloud는 자체 호스팅 오픈 소스 파일 동기화 및 협업 소프트웨어입니다. 이 튜토리얼은 Ubuntu의 Apache와 함께 NextCloud를 설치하는 방법을 보여줍니다." 
url: /ko/how-to-install-nextcloud-with-apache-on-ubuntu-server/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## NextCloud는 자체 호스팅 오픈 소스 파일 동기화 및 협업 소프트웨어입니다. 이 튜토리얼은 Ubuntu의 Apache와 함께 NextCloud를 설치하는 방법을 보여줍니다.

{{< figure align=center src="images/install-nextcloud-ubuntu.png" alt="Ubuntn에서 Apache를 사용하여 NextCloud를 설치하는 방법">}}


## **개요** 
**[NextCloud][1] **는 무료 및 안전한** 자체 호스팅 클라우드 스토리지 솔루션**PHP 프로그래밍 언어로 작성되었습니다. 웹 인터페이스를 사용하여 데이터 액세스를 제공하고 Dropbox와 기능적으로 유사합니다. Dropbox 및 Google Drive와 같은 독점적 인 클라우드 스토리지 솔루션은 편리하지만 파일은 시스템에 저장되므로 개인 데이터를 수집하는 데 사용할 수 있습니다. 안전하고 안전하며 준수하는 파일 동기화 및 공유 솔루션이 필요한 경우 Open Source NextCloud 서버로 전환 할 수 있습니다. NextCloud 설정은 개인 홈 서버 또는 가상 개인 서버에 설치할 수 있습니다.
NextCloud 오픈 소스는 **엔드 투 엔드 암호화** 를 제공합니다. 서버에 업로드하기 전에 클라이언트 장치에서 파일을 암호화 할 수 있음을 의미합니다. 또한 Collobora와 같은 온라인 사무실 제품군, Alde Office NextCloud와 같은 온라인 사무실 제품군과 통합 될 수 있으므로 Doc, PPT, XLS 파일을 NextCloud 클라이언트에서 직접 작성하고 편집 할 수 있습니다. NextCloud 클라이언트 다운로드 후 NextCloud 서버와 컴퓨터에서 하나 이상의 파일과 폴더를 공유하고 동기화 할 수 있습니다. NextCloud 데스크탑 다운로드 및 모바일 클라이언트는 제어하에있는 모든 장치에서 동기화하고 공유 할 수있는 옵션을 제공합니다. 로컬 공유 디렉토리에 데이터 파일을 배치하면 해당 파일은 즉시 NextCloud Desktop Sync 클라이언트, iOS 앱 또는 Android 장치를 사용하여 서버 및 기타 장치와 동기화됩니다.
이 튜토리얼을 사용하면 Apache와 함께 Ubuntu 20.04 LTS Linux 운영 체제에 NextCloud를 설치하는 데 도움이됩니다.
* **전제 조건 설치 (램프 스택)** 
* **Ubuntu에서 다음 클라우드 아카이브 다운로드** 
* **MySQL 데이터베이스 생성** 
* **NextCloud 웹 설치 프로그램 실행** 
  * **마무리** 

## 1 단계 : 전제 조건 설치 (램프 스택)
Ubuntu에 NextCloud를 설치하는 첫 번째는 Ubuntu LTS 시스템에서 램프 서버 **를 실행해야한다는 것입니다. 시스템에 로그인하고 터미널 창에 액세스하십시오. 이미 실행중인 경우** 램프 스택**이 단계를 건너 뛰면 다음 명령을 사용하여 필요한 종속성을 설치하십시오.

### php를 설치하십시오
Ubuntu 서버에서 PHP 버전 5.6 이상의 버전을 설치하는 것으로 시작하겠습니다.
sudo apt-get 업데이트
sudo apt-get install -y php-gd php-curl php-zip php-xml php-mbstring
다음 명령을 사용하여 PHP 버전을 확인할 수 있습니다.
PHP -V
{{_LINE_29_}}

### Apache2를 설치하십시오
다음으로, 명령으로 Apache를 설치하십시오.
sudo apt-get install -y apache2 libapache2-mod-php
sudo systemctl 다시 시작 apache2
{{_LINE_34_}}

### MySQL을 설치하십시오
종속성이 벗어나면 다음 단계는 MySQL 데이터베이스 서버를 보호하는 것입니다. 실행하여 MySQL 데이터베이스 서버를 설치하십시오.
sudo apt-get install -y mysql-server php-mysql
{{_LINE_38_}}

## 2 단계 : Ubuntu에서 NextCloud 아카이브를 다운로드하십시오
이 기사를 작성할 때 NextCloud 최신 버전은 22.0.0beta5입니다. 시스템에서 Lamp Server를 성공적으로 구성한 후 [공식 웹 사이트][2]에서 NextCloud를 다운로드하겠습니다.
CD /TMP
wget https://download.nextcloud.com/server/releases/nextcloud-22.0.0beta5.zip
{{_LINE_43_}}
NextCloud 서버 다운로드가 완료되면 웹 사이트 문서 루트 아래에서 다운로드 된 아카이브를 추출하고 다음 클라우드 디렉토리의 소유권을 파일 및 디렉토리에서 www-data로 설정합니다.
CD/var/www/html
sudo unzip /tmp/nextcloud-22.0.0beta5.zip
Sudo chown -r www-data : www-data nextcloud
Sudo chmod -r 755 NextCloud
{{_LINE_49_}}
이제 다운로드 된 아카이브 파일을 제거하십시오.
Sudo rm -f /tmp/nextcloud-22.0.0beta5.zip
{{_LINE_52_}}

## 3 단계 : MySQL 데이터베이스 생성
소스 코드를 추출한 후 NextCloud MySQL 데이터베이스 및 사용자 계정을 작성하여 NextCloud를 구성하겠습니다. 다음 명령 세트를 사용하여 MySQL Server에 로그인하고 NextCloud 데이터베이스를 작성하고 사용자 및 MySQL 콘솔에서 종료하십시오.
mysql -u 루트 -p
암호를 입력:
MySQL> 데이터베이스 작성 NextCloud;
mysql> infertcloud에 모두 부여.
MySQL> 플러시 권한;
mysql> 종료
{{_LINE_61_}}

## 4 단계 : NextCloud 웹 설치 프로그램을 실행하십시오
이 시점에서 NextCloud는 Ubuntu 20.04를 성공적으로 설치하고 구성했습니다. 이제 아래와 같은 웹 브라우저에서 NextCloud 구성 디렉토리를 열고 URL http://your-domain.com을 입력하십시오. LocalHost를 서버 IP 주소 또는 도메인 이름으로 변경하십시오. 다음 화면이 표시됩니다.
http : // localhost/nextcloud/또는 http : // your_domain_name/nextcloud/
{{_LINE_65_}}
새 관리자 자격 증명을 입력하여 관리자 계정을 생성하고 데이터 폴더의 위치를 ​​제공하십시오.
{{_LINE_67_}}

{{< figure align=center src="images/install-nextcloud-2.png" alt="Ubuntu Linux 서버에서 Apache를 사용하여 NextCloud를 설치하는 방법">}}

{{_LINE_69_}}
이제 페이지를 아래로 밀고 데이터베이스 이름, 데이터베이스 사용자 이름, 비밀번호를 입력하고 **설정** 버튼을 클릭하십시오.
{{_LINE_71_}}

{{< figure align=center src="images/nextcloud-server.png" alt="Apache로 NextCloud Ubuntu 20.04를 설치하는 방법">}}

{{_LINE_73_}}
설치가 완료되면 다음 화면에 NextCloud 관리 대시 보드가 표시됩니다. 여기에서 사용자, 그룹을 만들고 권한을 지정하는 등.
{{_LINE_75_}}

{{< figure align=center src="images/create_cloud_nextcloud.png" alt="Apache와 함께 Ubuntu에 NextCloud를 설치합니다">}}

{{_LINE_77_}}
축하합니다. Ubuntu LTS 시스템에서 NextCloud 온 프레미스 클라우드 솔루션이 있습니다. 이제 클라우드 서버 사용자 정의를 시작하여 요구 사항을 완벽하게 충족시킬 수 있습니다.

## **마무리:**  {#4a1a}

축하해요! Apache**를 사용하여 Ubuntu 서버에서 NextCloud를 구성하고 설치했습니다. 프라이빗 클라우드를 만드는 방법을 배웠습니다. NextCloud Ubuntu Server는 모든 사람의 개인 또는 하이브리드 클라우드 스토리지 요구에 대해 제공 할 수있는 놀라운 클라우드 스토리지 협업 플랫폼입니다. 이제 Ubuntu에 NextCloud를 설치하는 방법을 알았으며 자체 주최 클라우드에서 데이터가 안전하고 안전합니다. 다가오는 튜토리얼에서는 웹 서버 솔루션 스택과 관련된 더 흥미로운 주제에 대해 논의 할 것입니다.
_ 클라우드 기반 자체 호스팅 스토리지 솔루션을 선호하는 것은 무엇입니까? 궁금한 점이 있으면 [3] ._을 연락하십시오.

## 탐구하다:
서버의 일상적인 관리와 관련된 기사를 좋아할 수 있습니다.
  * [우분투에서 Apache를 사용하여 OwnCloud를 설치하고 구성하는 방법][4]
  * [아파치를 우분투 또는 데비안의 역 프록시로 구성하는 방법][5]
  * [우분투에 nginx를 사용하여 phpmyadmin을 설치하고 보장합니다][6]
  * [우분투에서하자 암호화 20.04로 Nginx를 안전하고 암호화합니다][7]
  * [우분투/데비안의 NGINX에서 HTTP/2 지원을 구성][8]
  * [AWS 프로덕션 서버에서 승객으로 Nginx 설정][9]



[1]: https://nextcloud.com/
[2]: https://nextcloud.com/install/
[3]: mailto:yasir.saeed@aspose.com
[4]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
