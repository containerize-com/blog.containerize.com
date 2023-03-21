---
title: "소스 제어 서버에서 지속적인 통합 및 지속적인 배포" 
seoTitle: "소스 제어 서버에서 지속적인 통합 및 지속적인 배포" 
description: "무료 배포 도구는 개발 팀이 소프트웨어 전달 워크 플로우를 자동화 할 수 있도록 도와줍니다. Jenkins 및 Github 저장소로 소프트웨어를 신속하게 구축, 테스트, 배포하십시오." 
date: Mon, 22 Feb 2021 06:11:17 +0000
author: Masood Anwer
summary: "무료 배포 도구를 사용하여 개발 워크 플로우를 자동화합니다. Jenkins Automation Server와 소프트웨어 배포를 위해 CI/CD를 설정하는 방법을 배웁니다." 
url: /ko/automate-software-deployment-process-with-jenkins-and-github/
categories: ['Deployment Tools']
---

## 무료 배포 도구를 사용하여 개발 워크 플로우를 자동화합니다. Jenkins Automation Server와 소프트웨어 배포를 위해 CI/CD를 설정하는 방법을 배웁니다.

{{< figure align=center src="images/ci-cd-post.png" alt="지속적인 통합 및 지속적인 배포">}}

개발 팀은 FTP, 리포지토리에서 코드를 풀기 등 다양한 소프트웨어 배포 방법을 사용합니다. 이러한 모든 방법은 수동으로 수행되며 많은 노력이 필요합니다. 우리는 더 많은 팀이 소프트웨어 개발을위한 민첩한 방법론을 따른다는 것을 알 수 있습니다. 따라서 새로운 기능과 버그 수정을 자주 출시합니다. 따라서 소프트웨어 전달 워크 플로우를 자동화하면 팀이 새로운 버전을 빠르고 오류없이 시작하는 데 도움이됩니다. 소프트웨어 전달 프로세스를 자동화하기 위해 Jenkins  **및 Github와 함께 **  CI/CD를 사용하는 방법을 배웁니다. 이 기사에서 다음 섹션을 다룰 것입니다.
  *[ **Jenkins는 무엇입니까? ** ][1]
  *[ **연속 통합 ** ][2]
  *[ **연속 배포 ** ][3]
  *[ **Jenkins 구성 ** ][4]
  *[ **Jenkins job 만들기 ** ][5]

## Jenkins는 무엇입니까?   {#Jenkins}
**Jenkins **는 소프트웨어 전달 프로세스를 자동화하기위한 강력한 무료 배포 도구 **입니다. 구축, 테스트 및 배포를위한 오픈 소스 자동화 서버입니다. Jenkins는 마스터 슬레이브 아키텍처를 사용합니다. 이를 통해 소프트웨어 팀은 소프트웨어에 대한 여러 빌드 및 테스트를 동시에 실행할 수 있습니다. 또한 사용 가능한 플러그인이 많이 있으며 팀은 필요에 따라 사용할 수 있습니다. 자세한 내용과 설치는 [ **jenkins page ** ][6]를 방문 할 수 있습니다. 또한 Jenkins [ **github ** ][7] 리포지토리에서 소스 코드를 찾을 수 있습니다.

## 연속 통합   {#ci}
**지속적인 통합 ** 개발자는 개발자가 코드를 공유 저장소에 자주 통합 해야하는 개발 관행입니다. 저장소로의 모든 통합/푸시는 자동화 된 빌드 및 테스트로 확인할 수 있습니다. 또한 개발자가 코드의 문제를 쉽게 식별 할 수 있습니다.

## 연속 배포   {#cd}
**연속 배포 **는 지속적인 통합 후 다음 단계입니다. 이를 통해 팀은 서버에서 코드를 지속적으로 배포 할 수 있습니다. 또한 개발자가 반복적 인 작업을 줄이고 민첩성을 높이는 데 도움이됩니다.

## Jenkins 구성   {#configure}
Jenkins의 구성에 대한 단계별 가이드 라인 아래에 아래에 참조하십시오.
  * Jenkins 사이트를 열고 로그인하십시오.
  * "SSH를 통해 게시"플러그인을 설치하십시오. "Jenkins 관리 → 플러그인 관리 → 사용 가능한"을 탐색하여 검색 할 수 있습니다.
  * 아래와 같이 Build Server에서 SSH 키를 사용자 "Jenkins"로 생성하십시오.
```
$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/var/lib/jenkins/.ssh/id_rsa):
Created directory '/var/lib/jenkins/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /var/lib/jenkins/.ssh/id_rsa.
Your public key has been saved in /var/lib/jenkins/.ssh/id_rsa.pub.
The key fingerprint is:
```
  * SSH를 사용하여 대상/배포 서버에 연결하십시오. 아래에서 명령을 실행하고 펍 파일 내용을 대상 서버에 붙여 넣습니다.
```
$ cd .ssh
$ nano authorized_keys
```
  * "Jenkins → System 구성 → SSH를 통해 게시"를 관리합니다.
  * 파일 경로를 찾거나 배포 서버와 동일한 내용을 붙여 넣어 SSH 키를 추가하십시오.
  * "SSH 서버"옆의 "추가"버튼을 클릭하여 SSH 서버를 추가하십시오.
  * 배포/대상 서버의 이름, 호스트 이름, 사용자 이름 및 원격 디렉토리를 입력하십시오.
  * 테스트 구성 버튼을 클릭하여 Jenkins가 배포 서버에 연결할 수 있는지 확인하십시오.
  * 마지막으로 저장 버튼을 클릭하여 정보를 저장합니다.

## Jenkins Create   {#Create}
이 단계를 사용하여 Jenkins 작업을 만들 수 있습니다.
  * Jenkins 대시 보드를 열고 "새 항목"버튼을 클릭하십시오.
  * 프로젝트 이름을 입력하고 "자유형 작업"을 선택하십시오.
  * "구성 창"아래에 github 리포지토리 URL을 입력하십시오.
  * "빌드 환경"섹션 에서이 옵션을 확인하십시오. "빌드 시작하기 전에 작업 공간 삭제"및 "빌드 실행 후 SSH를 통해 파일 보내거나 실행"을 확인하십시오.
  * 빌드 환경에서 이름, 소스 파일 및 원격 디렉토리를 입력하십시오.
  * 작업을 저장하고 구축하십시오.
  * 배포 서버에 연결하고 코드가 있는지 확인하십시오.

## 결론
이 기사에서  **Jenkins Server ** ,  **Continuous Integration **  및  **Continuous Deployment ** 에 대해 논의했습니다. 또한  **무료 배포 도구 ** 를 구성하는 방법을 배웠고 GitHub을 사용하여 배포를위한 Jenkins 작업을 만들었습니다. 무료 CI/CD 도구를 사용하면 개발 팀이 소프트웨어 전달 워크 플로우를 자동화하고 중요한 작업에 중점을 둘 수 있습니다. 우리는 앞으로 게시물의 다른 배포 도구를 다룰 것입니다.
마지막으로, [ **containerize.com ** ][8]는 추가 오픈 소스 배포 도구에 대한 기사를 게시합니다. 따라서 정기적 인 업데이트를 위해 [ **배포 도구 ** ][9] 카테고리와 연락하십시오.

## 탐구하다
다음 링크를 찾을 수 있습니다.
  * **[Jenkins][6]**
  *[ **드론 ** ][10]
  *[ **배포자 ** ][11]
  *[ **capistrano ** ][12]
  *[ **목장주 ** ][13]
  *[ **콩 코스 ** ][14]
  *[ **ansible ** ][15]
  *[ **gocd ** ][16]
  *[ **2021 년 상위 5 개 오픈 소스 배포 도구 ** ][17]
  *[ **배포자와 함께 PHP 애플리케이션 배포 자동화 ** ][18]

  
[1]: #Jenkins
[2]: #CI
[3]: #CD
[4]: #Configure
[5]: #Create
[6]: https://products.containerize.com/deployment-tools/jenkins
[7]: https://github.com/jenkinsci/jenkins
[8]: https://containerize.com
[9]: https://blog.containerize.com/category/deployment-tools/
[10]: https://products.containerize.com/deployment-tools/drone/
[11]: https://products.containerize.com/deployment-tools/deployer/
[12]: https://products.containerize.com/deployment-tools/capistrano/
[13]: https://products.containerize.com/deployment-tools/rancher/
[14]: https://products.containerize.com/deployment-tools/concourse/
[15]: https://products.containerize.com/deployment-tools/ansible/
[16]: https://products.containerize.com/deployment-tools/gocd/
[17]: https://blog.containerize.com/deployment-tools/top-5-open-source-deployment-tools-in-the-year-2021/
[18]: https://blog.containerize.com/deployment-tools/automate-php-application-deployment-with-deployer/
