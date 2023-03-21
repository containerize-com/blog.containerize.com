---
title: "Ubuntu에서 오픈 소스 백업 소프트웨어 Restic 설정 방법" 
seoTitle: "Ubuntu에서 오픈 소스 백업 소프트웨어 Restic 설정 방법" 
description: "RESTIC은 빠르고 안전하며 최고의 오픈 소스 백업 소프트웨어 중 하나입니다. AWS S3, Microsoft Azure, Google Cloud 및 기타 백엔드 옵션을 지원합니다." 
date: Fri, 09 Jul 2021 20:38:14 +0000
author: Masood Anwer
summary: "오픈 소스 백업 소프트웨어로 백업하고 로컬 또는 외부 백엔드에 저장하십시오. RESTIC은 크로스 플랫폼이며 여러 스토리지 유형을 지원합니다." 
url: /ko/how-to-set-up-open-source-backup-software-restic-on-ubuntu/
categories: ['Backup Software']
---

## 오픈 소스 백업 소프트웨어로 백업하여 로컬 또는 외부 백엔드에 저장하십시오. RESTIC은 크로스 플랫폼이며 여러 스토리지 유형을 지원합니다.

{{< figure align=center src="images/restic-post-banner.png" alt="오픈 소스 백업 소프트웨어">}}

백업 시스템은 비즈니스와 개인 모두에게 중요합니다. 사이버 공격, 시스템 고장, 우발적 제거 등과 같은 여러 가지 이유로 데이터가 손실 될 수 있습니다. 데이터를 빠르게 복원 할 수 있도록 좋은 백업 전략이 있어야합니다. 이 안내서는 Ubuntu 서버에  **오픈 소스 백업 소프트웨어 **  RESTIC을 설치하고 활용하는 방법을 보여줍니다.
이 튜토리얼에서 다음 섹션을 다루었습니다.
  *[ **전제 조건 ** ][1]
  *[ **RESTIC 란? ** ][2]
  *[ **RESTIC 설치 ** ][3]
  *[ **RESTIC 구성 ** ][4]
  *[ **RESTIC 대안 ** ][5]
  * **[결론][6]**

## 전제 조건   {#perrequisites}
Restic Backup Software 프로그램은 3 가지 주요 운영 체제 Linux, MacOS 및 Windows를 지원합니다.  **Restic Backup ** 을 설치하기 전에 다음 시스템 요구 사항을 충족해야합니다.
  * 백업 할 데이터가있는 우분투 운영 체제가있는 기계 또는 데스크탑 시스템
  * 최신 Ubuntu 서버 인스턴스
  * 두 클라이언트와 서버간에 구성된 SSH 키 인증
  * sudo 권한이없는 뿌리가 아닌 사용자
이 비트를 손에 들고 움직여서 일을하겠습니다.

## Restic이란 무엇입니까?   {#restic}
[ **RESTIC ** ][7]는 환상적인  **오픈 소스 백업 도구 ** 입니다. 빠르고 안전하며 효율적인  **무료 백업 유틸리티 ** 입니다. 크로스 플랫폼 백업 프로그램이므로 Linux, BSD, Mac OS X 및 Windows에서 실행됩니다. RESTIC BEST Open Source 백업 소프트웨어는 실행하기 쉽고 서버 나 복잡한 구성이 필요하지 않습니다. 수정 된 데이터의 백업을 생성하고 사용자가 필요할 때이를 복원 할 수 있습니다. 또한 자체 호스팅 및 인터넷 저장소를 포함한 다양한 스토리지 옵션을 제공합니다. 또한 Restic Open Sourt Self Hosted Cloud Storage는 강력한 암호화 기술을 사용하여 데이터를 보호합니다.
RESTIC은 간단한 파일 복사 유틸리티가 아닙니다. 주로 스냅 샷과 리포지토리의 두 가지 개념을 기반으로합니다.  **RESTIC **  오픈 소스 백업 솔루션은 정보를 스냅 샷으로 저장 한 다음 저장소에 저장됩니다. GO 프로그래밍 언어로 작성되었습니다. Restic Go 기반 백업 유틸리티 및 오픈 소스 백업 응용 프로그램은 많은 클라우드 및 로컬 백엔드 스토리지 시스템에서 원활하게 작동합니다. RESTIC 오픈 소스 파일 백업 소스의 소스 코드는 [ **github ** ][8]에서 사용할 수 있습니다. 그러나 설치 및 사용에 대한 자세한 [ **문서 ** ][9]를 찾을 수 있습니다.
Restic Self Hosted Cloud Backup은 백업 스토리지를위한 백엔드를 따르는 상자 외부를 지원합니다.
  * 로컬 디렉토리
  * SFTP 서버 (SSH를 통해)
  * REST 서버
  * AWS S3
  * 미니오 서버
  * 와사비
  * 알리바바 클라우드
  * OpenStack Swift
  * Backblaze B2
  * Microsoft Azure Blob Storage
  * Google 클라우드 스토리지
위에 나열된 것 외에도 다양한 백엔드에 [ **rclone ** ][10]를 사용할 수 있습니다.

## RESTIC 설치   {#INSTALLATION}
우분투 운영 체제에 Restic Best Self Hosted Cloud Storage를 설치하는 다양한 방법이 있습니다. 우리는 Ubuntu 패키지, Docker 및 소스 코드를 사용하여 Restic Self Hosted File Storage의 설치를 다룰 것입니다.

### 패키지를 사용하여 설치합니다
  * Ubuntu OS에 Restic Open Source 백업 서버를 설치하려면 아래 명령을 실행하십시오.
```
$ sudo apt-get install restic
```

### Docker를 사용하여 설치합니다
  * DockerHub에서 Restic Image를 얻으십시오.
```
$ docker pull restic/restic
```

### 소스를 사용하여 설치합니다
  * 먼저 소스에서 RESTIC을 설정하려면 GO 프로그래밍 언어를 설치해야합니다. GO를 설치하려면 공식 [ **Golang 웹 사이트 ** ][11]를 방문 할 수 있습니다.
  * 다음으로, 아래 명령을 실행하여 RESTIC 증분 백업을 설치하십시오.
```
$ git clone https://github.com/restic/restic
$ cd restic
$ go run build.go
```
  * 명령에서 대상 OS를 지정하면 모든 지원되는 플랫폼에 대해 RESTIC을 빠르게 컴파일 할 수 있습니다. 다음은 몇 가지 예입니다.
```
$ go run build.go --goos windows --goarch amd64
$ go run build.go --goos freebsd --goarch 386
$ go run build.go --goos linux --goarch arm --goarm 6
```

## Restic 구성   {#configuration}
위에서 이미 언급했듯이 RESTIC 오픈 소스 백업 시스템은 백업을위한 스냅 샷 및 리포지토리를 기반으로합니다. 저장소를 설정하고 스냅 샷을 찍고 백업을 복원하는 방법을 살펴 보겠습니다.

### 저장소 생성
  * 저장소를 초기화하려면 다음 명령을 실행하십시오. 또한 저장소의 비밀번호를 설정해야합니다.
```
$ restic init --repo /tmp/
```

### 백업 데이터는 로컬 디렉토리에 있습니다
  * 첫 번째 단계에서는 데이터를 저장하기위한 저장소를 만들었습니다. 이제 백업을 위해 저장소에 데이터를 추가 할 것입니다. 다음 명령을 실행하십시오.
```
$ restic --repo /tmp/backup backup ~/work
```

### 백업을 복원합니다
  * 복원 명령은 파일과 디렉토리를 복원합니다. RESTIC 오픈 소스 클라우드 백업을 사용하는 동안 파일은 원래 위치로 복원되지 않습니다. RESTIC에 의해 파일을 복원 할 대상 위치를 선택해야합니다.
```
$ restic restore 47a15bab -r /tmp/backup --target /tmp/backup/restore
```
  * 그러나 스냅 샷 ID를 지정하지 않고 최신 스냅 샷을 복원 할 수 있습니다. 아래와 같이 명령에 최신 매개 변수를 추가해야합니다.
```
$ restic restore latest -r /tmp/backup --target /tmp/backup/restore
```

### 스냅 샷 작업
이 섹션에서는 스냅 샷 기능 중 일부를 살펴 보겠습니다.
  * snaphosts를 나열하려면 다음 명령을 실행하십시오.
```
$ restic snapshots -r /tmp/backup
```
  * 두 개의 스냅 샷을 다음 명령과 비교할 수 있습니다.
```
$ restic diff -r /tmp/backup First_Snapshot_ID Second_Snapshot_ID
```
  * 저장 공간을 확보하려면 이전 백업을 삭제해야 할 수도 있습니다. 스냅 샷을 제거하려면 아래 명령을 실행하십시오.
```
$ restic -r /srv/restic-repo forget bdbd3439
```

## RESTIC 대안
RESTIC은 가장 인기있는 오픈 소스 백업 소프트웨어 응용 프로그램이며 중요한 파일 데이터의 기밀성과 무결성을 보장합니다. 다음은 가장 인기있는 대안과 Restic Data Backup 도구의 최고 경쟁사입니다.
  * 아마존 빙하
  * 복제
  * runrestic
  * AFI
  * 비오는 날 백업
  * 보그
  * Veeam 백업
  * AWS 스토리지 게이트웨이
  * 응집력

## 결론
이 기사에서는 Restic  **무료 오픈 소스 백업 소프트웨어 ** 를 다루었습니다. 또한 몇 가지 설치 기술과 백업을 만드는 방법과 백업을 복원하는 방법에 대해 논의했습니다. 다른 많은 형태의 데이터 백업 저장소가 있으며이 기사에서 방금 다루었습니다. 나머지 백엔드 스토리지 유형은 향후 출판물에서 다룰 것입니다. 이 튜토리얼이 RESTIC Best Open Source 백업 도구를 사용하여 백업을 복원하고 복원 할 수있는 출발점이되기를 바랍니다.
마지막으로, [ **containerize.com ** ][12]는 추가 최신 오픈 소스 제품에 대한 블로그 게시물을 작성하는 일관된 프로세스에 있습니다. 따라서 최신 업데이트를 위해이 [ **백업 소프트웨어 ** ][13] 카테고리와 연락하십시오.
_ 가장 좋아하는 무료 및 오픈 소스 백업 소프트웨어는 무엇입니까?. 오픈 소스 백업 소프트웨어에 대해 궁금한 점이 있습니까?

## 탐구하다:
또한 OSS Watch의 다른 관련 정보도 있습니다.
  * [2021 년 상위 5 개 오픈 소스 클라우드 스토리지 소프트웨어][15]
  * [Ubuntu 서버에서 Apache를 사용하여 NextCloud를 설치하는 방법][16]
  * [우분투에 Apache를 사용하여 OwnCloud를 설치하고 구성][17]
  * [우분투에 Pydio 파일 공유 및 동기화 플랫폼을 설치하는 방법][18]
  * [NSQ 대 Kafka | 주요 차이점은 무엇입니까?][19]
  * [NextCloud vs OwnCloud | 차이점은 무엇입니까?][20]
  * [최고의 오픈 소스 클라우드 스토리지 및 파일 공유 소프트웨어][21]

  
[1]: #Prerequisites
[2]: #Restic
[3]: #Installation
[4]: #Configuration
[5]: #Alternativestorestic
[6]: #Conclusion
[7]: https://restic.net/
[8]: https://github.com/restic/restic
[9]: https://restic.readthedocs.io/
[10]: https://rclone.org/
[11]: https://golang.org/doc/install
[12]: https://containerize.com
[13]: https://blog.containerize.com/category/backup-software/
[14]: mailto:yasir.saeed@aspose.com
[15]: https://blog.containerize.com/backup-and-sync-software/top-5-open-source-cloud-storage-software-in-2021/
[16]: https://blog.containerize.com/backup-and-sync-software/how-to-install-nextcloud-with-apache-on-ubuntu-server/
[17]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
[18]: https://blog.containerize.com/backup-and-sync-software/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/
[19]: https://blog.containerize.com/backup-and-sync-software/nsq-vs-kafka-what-are-the-key-differences/
[20]: https://blog.containerize.com/backup-and-sync-software/nextcloud-vs-owncloud-what-are-the-differences/
[21]: https://products.containerize.com/backup-and-sync/
