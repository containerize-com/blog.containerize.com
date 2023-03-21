---
title: "소스 코드 관리 소프트웨어 | git 란 무엇입니까?" 
seoTitle: "소스 코드 관리 소프트웨어 | git 란 무엇입니까?" 
description: "git 란 무엇입니까? GIT는 무료 소스 코드 관리 소프트웨어로, 소스 파일의 변경 사항을 녹음하고 검토하며 프로젝트를 효율적으로 관리 할 수 ​​있습니다." 
date: Fri, 08 Jan 2021 14:11:16 +0000
author: Assad Mahmood
summary: "이 기사에서는 Git & amp가 무엇인지 탐구 할 것입니다. GIT는 어떻게 작동합니까? GIT는 소스 코드, Track & Amp를 관리하도록 설계된 버전 제어 시스템입니다. 로그 버전." 
url: /ko/source-code-management-software-what-is-git/
categories: ['Version Control Software']
---

## 이 기사에서는 GIT가 무엇이며 GIT가 작동하는 방식을 탐구 할 것입니까? GIT는 소스 코드, 트랙 및 로그 버전을 관리하도록 설계된 버전 제어 시스템입니다.

{{< figure align=center src="images/version-control-banner.png" alt="소스 코드 관리 소프트웨어">}}


## 개요
프로젝트 작업을하는 소프트웨어 개발자라고 상상해보십시오. 당신은 그 일을하고있는 사람이 있습니다. 소스 코드가 포함 된 단일 파일이 있습니다. 모두 코드를 변경할 때 변경할 때마다 파일의 다른 버전이 있습니다. 이제 동일한 파일의 다른 버전을 어떻게 관리합니까? 여기에서 소스 코드 관리 소프트웨어가 시작됩니다. 동일한 파일의 다른 버전을 관리하고 병합하는 데 도움이됩니다. 그리고 변화 역사를 다시 추적 할 수 있습니다. 그리고 누가 파일을 변경했는지 항상 그리고 그 변화가 무엇인지 확인할 수 있습니다.
이 기사에서는 GIT 버전 제어 시스템에 대해 배웁니다. 소프트웨어 개발 소스 코드 파일 또는 기타 파일을 관리하는 방법을 사용하는 방법. 그래서 시작하자.
  * **[버전 제어 시스템이란?][1]**
  * **[git은 무엇입니까][2]**
  * **[git의 작동 방식][3]**
  * **[GIT 설치][4]**
  * **[저장소 설정][5]**
  * **[저장소 변경 저장][6]**
  * **[저장소 상태 확인][7]**
  * **[변경 또는 실행 취소][8]**
  * **[결론][9]**

## 버전 제어 시스템이란?   {#version-control}
버전 컨트롤은 시간이 지남에 따라 파일 또는 파일 세트의 변경을 기록하여 나중에 특정 버전을 기억할 수있는 시스템입니다. 소프트웨어 개발자이고 소스 코드 파일의 버전을 유지하려면 소스 코드 관리 소프트웨어가 매우 유용합니다. 선택한 파일을 이전 상태로 되돌리고 전체 프로젝트를 이전 상태로 되돌리고 시간이 지남에 따라 변경 사항을 비교하고 문제를 일으킬 수있는 사람, 문제를 도입 한 사람 등을 마지막으로 수정 한 사람을 확인하십시오. 버전 제어를 사용한다는 것은 작업을 잃는 것에 대해 걱정할 필요가 없습니다.

## git   {#git}이란 무엇입니까?
GIT는 속도와 효율성으로 소규모 프로젝트에서 매우 큰 프로젝트에 이르기까지 모든 것을 처리하도록 설계된 무료 및 오픈 소스 버전 제어 시스템입니다. SVN 및 CVS와 같은 구형 중앙 집중식 버전 제어 시스템과 달리 GIT 버전 제어가 배포됩니다. 모든 개발자는 코드 저장소의 전체 기록을 로컬로 가지고 있습니다. 그러나 초기 클론을 조금 느리게 만듭니다. 그러나 그 후에 모든 커밋 및 기타 운영은 매우 빠릅니다. Git을 사용하면 서로 독립적 일 수있는 여러 개의 현지 지점을 가질 수 있습니다.

## git의 작동 방식   {#how}
GIT를 사용하면 로컬 저장소를 변경하여 호스팅 도구로 푸시 할 수 있습니다. 또는 호스팅 도구에서 로컬 컴퓨터로 다른 사람의 변경 사항을 가져올 수 있습니다. 다음은 소스 코드 관리 소프트웨어 (GIT) 작동 방식에 대한 기본 개요입니다.
  1. gitub, gitlab 또는 bitbucket과 같은 호스팅 도구가있는 "저장소"를 만듭니다.
  2. 저장소를 로컬 컴퓨터로 복제하십시오
  3. 로컬 저장소에 파일을 추가하십시오
  4. 지역 저장소의 변경 (커밋) 저장 (커밋)
  5. 원격 호스팅에서 마스터 브랜치로 변경 사항을 "밀기"
  6. GIT 호스팅 도구로 파일을 변경하고 커밋
  7. 로컬 컴퓨터의 변경 사항을 "당기기"
  8. "Branch"(버전)를 만들고 변경하고 변경을 저 지르십시오.
  9. "풀 요청"을 엽니 다 (마스터 브랜치 변경 제안)
 10. 당신의 지점을 마스터 지점으로“병합”

## git   {#install} 설치
컴퓨터에 GIT를 설치하는 데 사용할 수있는 다양한 방법이 있습니다. 패키지 또는 다른 설치 프로그램을 통해 설치하거나 소스 코드를 다운로드하여 직접 컴파일 할 수 있습니다.

## # Linux에 설치
바이너리 설치 프로그램을 통해 Linux에 기본 GIT 도구를 설치하려면 일반적으로 분포와 함께 제공되는 패키지 관리 도구를 통해이를 수행 할 수 있습니다. Fedora (또는 Rhel 또는 Centos와 같은 밀접하게 관련된 RPM 기반 분포)의 경우 "DNF"를 사용할 수 있습니다.
```
$ sudo dnf install git-all
```
우분투와 같은 데비안 기반 배포판에 있다면“Apt”를 사용해보십시오.
```
$ sudo apt install git-all
```

## # macOS에 설치
Mac에 Git을 설치하는 방법에는 여러 가지가 있습니다. 가장 쉬운 것은 아마도 Xcode 명령 줄 도구를 설치하는 것입니다. Mavericks (10.9) 이상에서는 터미널에서 처음으로  **git** 를 실행하려고 시도하면이 작업을 수행 할 수 있습니다.
```
$ git --version
```
이미 설치하지 않은 경우 설치하라는 메시지가 표시됩니다.

## 저장소 설정   {#init}
git 저장소는 코드 파일의 가상 스토리지입니다. 다른 버전의 코드를 저장할 수 있으며 필요할 때 액세스 할 수 있습니다.
새 저장소를 만들려면 **git init  **명령을 사용합니다. Git Init는 새 저장소의 초기 설정 중에 사용하는 일회성 명령입니다. 이 명령을 실행하면 현재 작업 디렉토리에 새 .git 하위 디렉토리가 생성됩니다. 이것은 또한 새로운**   마스터** 지점을 만들 것입니다.

{{< figure align=center src="images/git-init-2.gif" alt="git은 무엇입니까?">}}


## 저장소 변경   {#commit} 저장
리포지토리가 초기화되었으므로 파일 버전 변경을 커밋 할 수 있습니다.

{{< figure align=center src="images/git-add-commit-1.gif" alt="git 커밋">}}


## 저장소 상태 확인   {#Status}
**git 상태 **명령은 작업 디렉토리 및 준비 영역의 상태를 표시합니다. GIT (Source Code Management Software)에서 어떤 변경 사항이 무대에 올랐는지, 그렇지 않은, 어떤 파일을 추적하지 않는지 확인할 수 있습니다. 상태 출력은 커밋 된 프로젝트 이력에 관한 정보를 표시하지 않습니다. 이를 위해서는 ** git log** 를 사용해야합니다.

{{< figure align=center src="images/git-status-2.gif" alt="소스 코드 관리 소프트웨어">}}

git 로그는 다음 출력을 보여줍니다
```
$ git log
commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500
```

## 변경 사항을 되돌립니다   {#revert}
Git Revert 명령을 사용하여 Repo에서 이미 저지른 변경 사항을 취소 할 수 있습니다. 먼저“git log”명령을 사용하여 커밋 목록을 얻습니다.
```
$ git log
commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500

```
그런 다음 되돌릴 커밋을 결정하십시오. 그리고 아래와 같이 git revert 명령을 사용하십시오
```
$ git revert ce1c0a5fccd9e48631d85286cbf40feaae641d7e
[master df0fc7a] Revert "Second Commit"
 1 file changed, 1 deletion(-)

$ git log
commit df0fc7ae1ff722fb2ea50ba77fc3bd830195d668 (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:35:47 2021 +0500

    Revert "Second Commit"
    
    This reverts commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e.

commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500

    First Commit
```
보시다시피 Git Revert는“두 번째 커밋”에서 이루어진 변경 사항을 취소하는 새로운 커밋을 만들었습니다.

## 결론
Git이 무엇인지, GIT의 작동 방식에 대해 논의한 전체 기사를 읽었으므로 소스 코드 관리 소프트웨어를 알고 있어야합니다. 그것의 목적은 무엇이며 왜 필요한가? GIT가 프로젝트의 소스 코드를 관리하는 데 도움이되는 방법을 살펴 보았습니다. 또한 다른 GIT 명령을 사용하여 초기화 및 저장소를 저장하고 변경 사항을 취소하는 방법에 대해 배웠습니다. 다가오는 튜토리얼에서는 Git을 더 많이 탐색하고 다른 명령을 사용하여 코드를 더 잘 관리하는 방법을 공유 할 것입니다.

## 탐구하다
다음 링크를 찾을 수 있습니다.
  *[ **GitHub 액션으로 소프트웨어 개발 워크 플로우를 자동화** ][10]
  * **[Gitlab CI/CD로 지속적인 배포 파이프 라인을 설정하는 방법][11]**
  * **[지점을 이해하고 배우고 요청을 당기고 요청을 당기고][12]**
  * **[2021 년 상위 5 개 오픈 소스 버전 제어 시스템][13]**

  
[1]: #version-control
[2]: #git
[3]: #how
[4]: #install
[5]: #init
[6]: #commit
[7]: #status
[8]: #revert
[9]: #conclusion
[10]: https://blog.containerize.com/version-control-software/github-actions-tutorial-automate-your-first-workflow/
[11]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[12]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[13]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
