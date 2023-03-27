---
title: "Ubuntu 20.04에서 SSL과 함께 웹 민을 설치하는 방법" 
seoTitle: "Ubuntu 20.04에서 SSL과 함께 웹 민을 설치하는 방법" 
description: "Webmin은 UNIX와 같은 시스템을위한 웹 기반 시스템 관리 도구입니다. 이 기사에서는 Ubuntu 20.04에서 SSL과 함께 웹 민을 설치하는 방법을 배웁니다." 
date: Mon, 21 Jun 2021 04:28:34 +0000
author: Assad Mahmood
summary: "Webmin은 명령 줄 시스템 관리의 간단한 대안 인 웹 기반 시스템 관리 도구입니다. 이 기사는 Webmin을 설치하는 방법을 안내합니다" 
url: /ko/how-to-install-webmin-with-ssl-on-ubuntu-20-04/
categories: ['Web Hosting']
---

{{< figure align=center src="images/how-to-install-webmin.png" alt="Webmin을 설치하는 방법">}}


## Webmin은 명령 줄 시스템 관리의 간단한 대안 인 웹 기반 시스템 관리 도구입니다. 이 기사는 Webmin을 설치하는 방법을 안내합니다
이 기사를 통해“Ubuntu 20.04에서 SSL을 사용하여 Webmin을 설치하는 방법”을 통해 웹 호스팅 소프트웨어 및 도구에 대한 새로운 시리즈 자습서를 시작하고 있습니다. Webmin을 사용하면 사용자 계정을 설정하고 파일 공유를 활성화하고 Apache 및 DNS 설정을 구성하며 웹 호스팅과 관련된 더 많은 작업을 수행 할 수 있습니다. 전체 웹 호스팅 서버를 관리 할 수 ​​있습니다. Linux 구성 파일을 수동으로 편집하는 데 문제가 발생합니다. SSL을 사용하여 Webmin을 설치하는 방법을 배우겠습니다.
* **[Webmin 소개][1]** 
* [ **강조 된 기능** ][2]
* [ **지원 운영 체제** ][3]
* [ **Ubuntu에 웹민을 설치하십시오** ][4]
* [ **Webmin을 사용하여 Apache 설치** ][5]
* [ **결론** ][6]

## Webmin 소개 {#intro}

Webmin은 Linux의 시스템 관리를위한 웹 기반 인터페이스입니다. 최신 웹 브라우저에서 자신의 호스팅 서버를 원격으로 관리하는 데 도움이됩니다. Webmin을 사용하면 사용자 계정, Apache, DNS, 파일 공유 등과 같은 운영 체제 내부를 구성 할 수 있습니다. 또한 Webmin을 사용하면 단일 인터페이스를 통해 많은 컴퓨터를 제어하거나 동일한 서브넷 또는 LAN의 다른 Webmin 호스트에서 완벽한 로그인 할 수 있습니다. Perl을 기반으로하는 Webmin은 자체 프로세스 및 웹 서버로 실행됩니다. 그리고 Webmin의 가장 중요한 부분은 100% 무료 및 오픈 소스이며 매우 번성하는 개발자 커뮤니티가 있습니다.

## 강조 표시된 기능 {#features}

  * 도메인, DNS 레코드, 바인딩 옵션 및보기를 작성 및 편집 할 수 있습니다.
  * IPFW를 사용하여 규칙을 작성하고 편집하여 방화벽 구성을 돕습니다.
  * 부팅 시간에 /etc/init.d 또는 /etc/rc.local에서 실행할 스크립트를 설정하겠습니다.
  * 서버에서 여러 서버로 파일 전송을 예약 할 수 있습니다.
  * 한 소스에서 여러 서버에 RPM, Debian 및 Solaris 패키지를 설치할 수 있습니다.
  * 대역폭 사용, 업로드, 다운로드, 방문자 등과 같은 보고서에 대한 액세스를 제공합니다.
  * 여러 서버에서 동시에 실행되는 예정된 CRON 작업을 만들 수 있습니다.
  * 한 번에 여러 서버에서 명령을 실행할 수 있습니다.
  * 로컬 파일 시스템에 대한 사용자 또는 그룹 디스크 할당량을 설정하고 편집 할 수 있습니다.
  * 덤프를 사용하여 백업 및 복원 파일 시스템을 포함하고 명령 패밀리를 복원합니다.
  * Windows와 유사한 파일 관리자를 사용하면 서버의 파일 및 디렉토리에서 권한을보고, 편집 및 변경할 수 있습니다.
  * 서비스 위치 프로토콜 서버를 구성 할 수 있습니다
  * Windows와 같은 파일 관리자를 사용하여 시스템의 파일 및 디렉토리에 대한 권한을보고, 편집 및 변경합니다.
  * Inetd에서 실행되는 스턴 넬을 사용하여 POP3 및 IMAP와 같은 서비스를 암호화하기 위해 SSL 터널을 설정하는 데 도움이됩니다.

## 지원되는 운영 체제 {#support}

다른 UNIX와 유사한 운영 체제 및 Linux 배포판은 다양한 구성 파일에 다른 위치를 사용하기 때문에 Webmin은 구성된 시스템 만 지원할 수 있습니다. 다음 운영 체제는 Webmin의 1.979 버전으로 지원됩니다.
  * Almalinux Linux
  * 알파 코어 리눅스
  * 아마존 리눅스
  * Aplinux
  * Asianux
  * Asianux 서버
  * 큰 블록
  * BSDI
  * Caixa Magica
  * Caldera Openlinux
  * Caldera Openlinux Eserver
  * Caos Linux
  * Cendio lbs Linux
  * Centos Linux
  * Citrix Hypervisor
  * CloudLinux
  * 클라우터 리눅스
  * 코발트 리눅스
  * 일관된 기술 리눅스
  * Conectiva Linux
  * 코렐 리눅스
  * Corvus latinux
  * Cygwin
  * 다윈
  * 데비안 리눅스
  * Dec/Compaq OSF/1
  * Devuan Linux
  * 잠자리 BSD
  * Endian 방화벽 Linux
  * Fedora Linux
  * freebsd
  * 일반 리눅스
  * Gentoo Linux
  * gralinux
  * Haansoft Linux
  * HP/UX
  * IBM AIX
  * Immunix Linux
  * Lanthan Linux
  * 리눅스 민트
  * linuxppc
  * Lycoris 데스크탑/LX
  * 맥 OS X
  * MACOS 카탈리나
  * Macos High Sierra
  * Macos Mojave
  * 마코스 시에라
  * Mageia Linux
  * Mandrake Linux
  * Mandrake Linux Corporate Server
  * Mandriva Linux
  * Mandriva Linux Enterprise Server
  * Mepis Linux
  * 대부분 Linux
  * MSC Linux
  * Neoshine Linux
  * netbsd
  * OpenBsd
  * opendarwin
  * OpenMamba Linux
  * Openna Linux
  * Linux Tumbleweed를 Opensuse
  * Oracle Enterprise Linux
  * 오라클 리눅스
  * 오라클 VM
  * OS X
  * Pardus Linux
  * pclinuxos linux
  * PlayStation Linux
  * 라즈비안 리눅스
  * Redhat Enterprise Linux
  * Redhat Linux
  * Redhat Linux 데스크탑
  * 록키 리눅스
  * Sangoma Linux
  * SCI Linux
  * 과학적 리눅스
  * SCO OpenServer
  * SCO Unixware
  * 보안 리눅스
  * sgi irix
  * Slackware Linux
  * SLAMD64 LINUX
  * smartos
  * 솔 리눅스
  * Springdale Linux
  * STARTCOM LINUX
  * Sun Java 데스크탑 시스템
  * Sun Solaris
  * Suse Linux
  * suse openexchange linux
  * SUSE SLES LINUX
  * Synology DSM
  * 타오 리눅스
  * Tawie Server Linux
  * thizlinux 데스크탑
  * thizserver
  * Tinysofa Linux
  * Trustix
  * Trustix SE
  * Turbolinux
  * 우분투 리눅스
  * 유나이티드 리눅스
  * UTE Linux
  * Virtuozzo Linux
  * 화이트 드워프 리눅스
  * 화이트 박스 리눅스
  * Wind River Linux
  * 창
  * X/OS Linux
  * Xandros Linux
  * XCP-NG Linux
  * Xenserver Linux
  * 노란 개 리눅스
  * 요퍼 리눅스
현재 가장 잘 지원되는 시스템은 Solaris, Linux (특히 Redhat) 및 FreeBSD입니다.

## 우분투에 웹 민을 설치하십시오 {#install}

Webmin을 설치하려면 **root**권한이있는 사용자에게 액세스해야합니다.**sudo** 액세스로 뿌리가 아닌 사용자를 설정하는 것이 좋습니다.
다음 명령을 사용하여 서버에 대한 첫 번째 SSH
```
ssh user@server_IP_address
```
_apt-get_을 통해 웹 민을 설치하려면 먼저 _sources.list_ 파일에 Webmin Repository를 추가해야합니다. 서버에서 좋아하는 텍스트 편집기에서 _sources.list_ 파일을 엽니 다. 이 튜토리얼에서 VIM을 사용할 것입니다.
```
sudo vi /etc/apt/sources.list
```
파일이 열리면 파일 끝에 다음 줄을 추가하십시오.
```
deb http://download.webmin.com/download/repository sarge contrib
deb http://webmin.mirror.somersettechsolutions.co.uk/repository sarge contrib
```
이제 APT에 Webmin GPG 키를 추가하여 추가 한 소스 저장소를 신뢰할 수 있습니다. 이 명령은 다음을 수행합니다.
```
wget -q http://www.webmin.com/jcameron-key.asc -O- | sudo apt-key add -
```
Webmin을 설치하기 전에 Apt-Get의 패키지 목록을 업데이트해야합니다.
```
sudo apt-get update
```
이제이 apt-get 명령을 실행하여 웹 민을 설치하십시오.
```
sudo apt-get install webmin 
```
설치를 확인하려면 Y를 입력하십시오. 설치가 완료되면 웹 민족 서비스가 자동으로 시작됩니다. 웹 인터페이스는 포트 10000에서 실행됩니다. 다음 URL을 사용하여 인터페이스에 액세스 할 수 있습니다.
```
https://server_IP_address:10000
```
서버의 SSL 인증서가 신뢰할 수 없다는 경고가 표시됩니다. 이는 Webmin이 설치 후 SSL 인증서를 자동으로 생성하고 설치하고 컴퓨터에서 신뢰하는 인증서에 의해 인증서를 발행하지 않았기 때문입니다. 진행하는 것은 괜찮습니다. 웹 브라우저에 인증서를 신뢰하도록 지시하십시오.
이 시점에서는 Webmin 로그인 화면이 표시됩니다.

{{< figure align=center src="images/webmin-login-screen.png" alt="Webmin을 설치하십시오">}}

Webmin에 처음 로그인하면 **시스템 정보** 페이지로 이동합니다. 시스템의 리소스 및 기타 기타 정보에 대한 개요를 제공합니다.

{{< figure align=center src="images/install-webmin-system-info.png" alt="웹 민 시스템 정보를 설치하십시오">}}


## Webmin을 사용하여 Apache를 설치하십시오 {#install-apache}

Webmin에는 다양한 소프트웨어 패키지를 관리하는 다양한 모듈이 제공됩니다. Webmin을 사용하여 Apache를 설치하려면 아래 지침을 따르십시오
**1 단계 **: 탐색 메뉴에서** 사용하지 않은 모듈**을 클릭하여 범주를 확장 한 다음** Apache WebServer**를 클릭하십시오.
서버에 Apache가 설치되지 않은 경우 모듈에 알리고 Apache를 설치하는 방법을 제공합니다.
**2 단계**:**  여기를 클릭하십시오**링크 (마지막 문장)를 통해 apt-get을 통해 Apache를 설치하십시오.
Apache 설치가 완료되면 서버가 기본 Apache 서버를 실행합니다.

## 결론 {#conclusion}

이 기사에서는 Webmin이 할 수있는 수많은 것들에 대해 설명하며 Webmin은 Linux/Unix 서버를 관리하는 가장 좋은 도구 중 하나입니다. 이 튜토리얼에서 우리는 Ubuntu에 Webmin을 설치하는 방법을 배웠습니다. 또한 Webmin을 사용하여 서버에 Apache를 설치하는 방법에 대해 논의했습니다.

## 탐구하다
  * [우분투에서 Nginx를 사용하여 여러 PHP 버전을 설치하는 방법][7]
  * [Nginx를 리버스 프록시로 설정하고 구성하는 방법][8]



[1]: #intro
[2]: #features
[3]: #support
[4]: #install
[5]: #install-apache
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
