---
title: "배치자와 PHP 애플리케이션 배포를 자동화합니다" 
seoTitle: "배치자와 PHP 애플리케이션 배포를 자동화합니다" 
description: "오픈 소스 배포 도구로 PHP 애플리케이션을 배포하고 배포 워크 플로우를 자동화하십시오. 기능과 롤백을 이전 버전으로 쉽게 해제합니다." 
date: Fri, 05 Mar 2021 22:07:03 +0000
author: Masood Anwer
summary: "PHP 배포 도구로 PHP 응용 프로그램 배포 프로세스를 자동화하십시오. 배포자를 설정하고이를 사용하여 PHP 응용 프로그램을 배포하는 방법을 배웁니다." 
url: /ko/automate-php-application-deployment-with-deployer/
categories: ['Deployment Tools']
---

## PHP 배포 도구로 PHP 애플리케이션 배포 프로세스를 자동화합니다. 배포자를 설정하고이를 사용하여 PHP 응용 프로그램을 배포하는 방법을 배웁니다.

{{< figure align=center src="images/deployer-blog-post.png" alt="PHP 배포 도구">}}

개발 후 서버에 응용 프로그램을 배포하는 것이 매우 중요한 작업입니다. 새로운 기능과 버그 수정은 종종 팀이 출시합니다. 따라서 팀이 수동 작업을 제거하고  **소프트웨어 배포** 프로세스를 자동화하는 것이 바람직합니다. 이를 통해 소프트웨어 팀이 더 중요한 작업에 집중할 수 있습니다. 몇 가지  **오픈 소스 배포 도구**  이 있지만이 자습서에서는 **PHP 배포자**  에 집중할 것입니다. 이 게시물의 다음 섹션을 다룰 것입니다.
* [  **배포자는 무엇입니까**  ][1]
* [  **배치자 설치**  ][2]
* [  **PHP 응용 프로그램 배포**  ][3]
* [  **결론**  ][4]

## 배포자는 무엇입니까? {#What}

[  **배포자** ][5]는 무료 및 오픈 소스  **PHP 배포 도구**  입니다. 소프트웨어 팀은 PHP 기반 애플리케이션을위한 배포 워크 플로우를 자동화 할 수 있습니다. 설치가 매우 간단하고 사용하기 쉽습니다. 초보자부터 전문가 수준의 경험에 이르기까지 누구나 PHP 응용 프로그램을 배포하는 데 빠르게 사용할 수 있습니다. 배포자는 인기있는 PHP 프레임 워크, CMS 및 쇼핑 카트 소프트웨어를위한 상자 밖의 레시피/스크립트가 제공됩니다. 또한이  **오픈 소스 배포 도구**  를 사용하여  **laravel 배포**  를 수행 할 수 있습니다. 개발자는 프로젝트에 내장 레시피를 사용하여 배포에 사용할 수 있습니다. 또한  **PHP 배포자**  마법사로 쉽게 설치/배포 스크립트를 만들 수 있습니다. 또한이 **무료 배포 도구**  는 제로 다운 타임 배포, 이전 버전으로의 롤백, SSH, 병렬 실행 등과 같은 우수한 기능을 제공합니다.

## 배치자 설치 {#Installing}

  * 배포자는 PHP에 따라 다릅니다. PHP가 서버에서 실행되고 있는지 확인해야합니다. 그러나 아래 명령을 사용하여 우분투에 PHP를 설치할 수 있습니다.
```
sudo apt-get install php
```
  * 배포자를 설치하려면 아래 명령을 하나씩 실행하십시오.
```
curl -LO https://Deployer.org/Deployer.phar
sudo mv Deployer.phar /usr/local/bin/dep
sudo chmod +x /usr/local/bin/dep
```

## PHP 응용 프로그램을 배포합니다 {#Deploy}

단계별 가이드 라인을 따라 배포자와 함께 PHP 응용 프로그램**를 배포하십시오.
  * 배포자를위한 디렉토리를 만들고 새로 만들어진 디렉토리로 이동하십시오.
```
sudo mkdir deployer
cd deployer
```
  * 아래 명령을 실행하여 설치 스크립트를 생성합니다.
```
dep init
```
  * 아래 화면이 표시됩니다. 이것은 기본 설치 스크립트를 생성하기위한 배치자 마법사입니다.

{{< figure align=center src="images/deployer-1.png" alt="">}}

  * 먼저 숫자를 입력하여 프로젝트 유형을 선택해야합니다. 프로젝트 유형에 대해 확실하지 않거나 배치자에 익숙해지는 경우 0을 입력 할 수 있습니다.
  * 둘째, git 리포지토리 경로를 제공해야합니다. 선택적 단계는 건너 뛰고 나중에 경로를 추가 할 수 있습니다.
  * 마지막 단계에서는 예를 선택하거나 건너 뛰기 위해 NO를 입력하여 배치자 커뮤니티와 정보를 공유 할 수 있습니다.
```
<?php
namespace Deployer;

require 'recipe/common.php';

// Project name
set('application', 'my_project');

// Project repository
set('repository', '');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true); 

// Shared files/dirs between deploys 
set('shared_files', []);
set('shared_dirs', []);

// Writable dirs by web server 
set('writable_dirs', []);
set('allow_anonymous_stats', false);

// Hosts

host('project.com')
    ->set('deploy_path', '~/{{application}}');    
    

// Tasks

desc('Deploy your project');
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'deploy:writable',
    'deploy:vendors',
    'deploy:clear_paths',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
    'success'
]);

// [Optional] If deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');
```
PHP 응용 프로그램을 배포하려면 다음 변수를 변경해야합니다.
*  **set (‘응용 프로그램’,‘my_project’);**  - 응용 프로그램 이름을 설정하십시오.
*  **set ( 'repository',”);**  -‘git@github.com : masood/first-app-with-deployer.git’과 같은 git 저장소 경로를 설정하십시오. 배포 키를 GitHub 리포지토리에 설정해야합니다. 익숙하지 않은 경우 서버에서 SSH 키를 만드는 방법을 검색 할 수 있습니다.
***호스트 ( 'project.com')
    -> set ( 'deploy_path', '~/{{application}}');**-프로젝트 이름을 설정하고 애플리케이션 파일을 저장하려는 경로를 정의하십시오. /var/www/html/deployer처럼 보입니다.
마지막으로 아래 명령을 실행하여 PHP 응용 프로그램을 배포하십시오.
```
dep deployer
```
새 릴리스에 문제가 있고 롤백 변경을 원하는 경우. 아래 명령을 단순히 실행하여 수행 할 수 있습니다.
```
dep rollback
```

## 결론 {#결론}

배치자 와이 튜토리얼에서 설치하는 방법에 대해 논의했습니다. 또한 GitHub 저장소에서 PHP 기반 응용 프로그램을 배포하기위한 완전한 지침을 만들었습니다. 이 블로그 게시물이 배포자와 함께 PHP 응용 프로그램  **를 시작하는 데 도움이되기를 바랍니다. 또한이**  PHP 배포 도구**가 다가오는 튜토리얼에 대해 더 많이 쓸 것입니다.
마지막으로, [  **containerize.com** ][6]는 추가 최신 오픈 소스 제품에 대한 블로그 게시물을 작성하는 일관된 프로세스에 있습니다. 따라서 최신 업데이트를 위해이 [ **배포 도구**  ][7] 카테고리와 연락하십시오.

## 탐구하다
다음 링크를 찾을 수 있습니다.
* [  **배치자**  ][8]
* [  **jenkins**  ][9]
* [  **드론**  ][10]
* [  **capistrano**  ][11]
* [  **목장주**  ][12]
* [  **콩 코스**  ][13]
* [  **ansible**  ][14]
* [  **gocd**  ][15]
* [  **2021 년 상위 5 개 오픈 소스 배포 도구**  ][16]
* [  **소스 제어 서버의 지속적인 통합 및 지속적인 배포**  ][17]



 [1]: #What
 [2]: #Installing
 [3]: #Deploy
 [4]: #Conclusion
 [5]: https://deployer.org/
 [6]: https://containerize.com
 [7]: https://blog.containerize.com/category/deployment-tools/
 [8]: https://products.containerize.com/deployment-tools/deployer
 [9]: https://products.containerize.com/deployment-tools/jenkins/
 [10]: https://products.containerize.com/deployment-tools/drone/
 [11]: https://products.containerize.com/deployment-tools/capistrano/
 [12]: https://products.containerize.com/deployment-tools/rancher/
 [13]: https://products.containerize.com/deployment-tools/concourse/
 [14]: https://products.containerize.com/deployment-tools/ansible/
 [15]: https://products.containerize.com/deployment-tools/gocd/
 [16]: https://blog.containerize.com/deployment-tools/top-5-open-source-deployment-tools-in-the-year-2021/
 [17]: https://blog.containerize.com/deployment-tools/automate-software-deployment-process-with-jenkins-and-github/
