---
title: "Github 액션 에리있어서 | 첫 번째 워크 플로를 자동화하십시오" 
seoTitle: "Github 액션 에리있어서 | 첫 번째 워크 플로를 자동화하십시오" 
description: "이 GitHub Action 튜토리얼을 따라 GitHub 액션을 사용하여 소프트웨어 개발 워크 플로를 자동으로 실행하고 실행할 수있는 방법을 탐색하십시오." 
date: Fri, 19 Feb 2021 10:21:38 +0000
author: Assad Mahmood
summary: "Github는 지속적인 통합을 설정할 수있는 Github 작업을 도입했습니다. & amp; GitHub Repo에서 바로 구성 파일을 사용하여 연속 배포." 
url: /ko/github-actions-tutorial-automate-your-first-workflow/
categories: ['Version Control Software']
---

## github는 GitHub Repo의 구성 파일을 사용하여 연속 통합 및 연속 배포를 설정할 수있는 GitHub 작업을 도입했습니다.

{{< figure align=center src="images/github-actions-workflows.png" alt="Github 액션 튜토리얼">}}


## 개요
소프트웨어 프로젝트에서 생산성을 높이는 가장 좋은 방법 중 하나는 수동 또는 반복적 인 모든 것을 자동화하는 것입니다. **github 액션** 과 같은 멋진 도구를 사용할 때 자동화가 얼마나 쉬운 지에 놀랄 수도 있습니다. 마지막 몇 기사 이후, 나는 [git][1], [버전 제어][1] 및 [소프트웨어 개발 워크 플로의 자동화][2]에 대해 글을 쓰고 있으며 [연속 통합 및 지속적인 전달][3 ]. 그래서 지금까지, 당신은 저장소와 사용 방법을 잘 알고 있습니다.
오늘의 **github Action Tutorial** 에서 GitHub 액션과 응용 프로그램 자동화, 사용자 정의 및 저장소에서 소프트웨어 개발 워크 플로우를 실행하는 방법을 탐색 할 것입니다. 그래서 시작하겠습니다
* **[검토 CI/CD 워크 플로우][4]** 
* **[github 행동은 무엇입니까][5]** 
* **[Yaml 구문 이해][6]** 
* **[첫 번째 워크 플로 생성][7]** 
* **[결론][8]** 

## CI/CD 워크 플로우 {#cicd}

CI/CD는 자동화를 통해 다른 단계에서 최종 사용자에게 소프트웨어 개발 프로젝트를 자주 배포하는 방법입니다. **지속적인 통합 및 지속적인 배포** 는 코드 변경을 더 자주 그리고 안정적으로 제공하기 위해 DevOps 팀이 구현할 수있는 철학이자 모범 사례 중 하나입니다.
**지속적인 통합** 개발 팀은 코드대로 버전 제어 저장소를 자주 확인하도록 장려하는 일련의 관행입니다. 또한 저장소로의 푸시마다 응용 프로그램을 자동으로 빌드하고 테스트 할 수있는 스크립트 세트를 만들 수 있습니다. 이 스크립트는 애플리케이션에 오류가 발생할 가능성을 줄이는 데 도움이됩니다.
**연속 배포** 는 CI/CD 워크 플로에서 한 걸음 앞서 있습니다. 코드 변경이 코드베이스로 푸시 될 때마다 응용 프로그램을 구축하고 테스트 할뿐만 아니라 응용 프로그램이 서버에 지속적으로 배포됩니다.

## Github 동작은 무엇입니까? {#github-actions}

이 GitHub Action 튜토리얼의 섹션에서는 **github Action** 이 무엇인지 알게 될 것입니다. 그러나 Github 조치는 Github에 대한 원인과 영향을위한 API입니다. 이제 CI/CD로 모든 소프트웨어 워크 플로우를 쉽게 자동화 할 수 있습니다. GitHub은 실행을 관리하는 동안 (지점으로 푸시, 풀 요청 등) 이벤트 (예 : 분기에 대한 푸시, 풀 요청 등)를 기준으로 워크 플로를 설계 할 수 있습니다. 그러나 당신은 혼자서 행동을 쓸 필요가 없습니다. Github에는 사람들이 다른 사람들이 만든 행동을 찾아서 자신의 요구에 맞는 경우 재사용 할 수있는 내장 시장이 있습니다. GitHub Actions는 Node.js, Python, Java, Ruby, PHP, Go, Rust, .NET 등을 지원합니다. 선택한 언어로 응용 프로그램을 구축, 테스트 및 배포하십시오.

## Yaml 구문 {#yaml}

먼저 **github 동작** 의 구문과 용어에 익숙해 봅시다.
* **워크 플로 :**  GitHub 동작은 엔드 투 엔드**연속 통합 및 연속 배포를 구축 할 수있는 시설을 제공하기 때문에이 용어는 CI 도구에 의해 흐름이 실행되는 시점을 나타냅니다.
* **작업** :이 용어는 단일 워크 플로의 모든 작업을 말합니다. 워크 플로에는 둘 이상의 작업이 포함되어 있으며 실패를 방지하기 위해 실행을 완료해야합니다.
* **단계 :**  작업이 실행을 완료하려면 모든 단계를 완료해야합니다.
* **액션 :**  작업은 단계의 1 차 하위 집합이며 가장 작은 워크 플로우입니다. 모든 단계는 성공적으로 실행 해야하는 여러 작업으로 구성됩니다.
보시다시피 워크 플로우, 작업, 단계 및 행동은 상호 의존적이며 CI/CD 파이프 라인의 성공적인 완료를 위해서는 모든 것을 성공적으로 실행해야합니다.

## 워크 플로를 만듭니다 {#workflow}

소프트웨어 개발 프로젝트에서 개발 팀이 직면 한 문제 중 하나는 소스 코드의 형식과 모범 사례 시행입니다. 이 문제는 더 큰 팀에게 더 분명합니다. 더 많은 개발자가 참여하고 모든 사람은 자신의 스타일의 작문 코드를 가지고 있기 때문에. 따라서 Linter 패키지의 사용은 팀 전체에서 매우 일반적입니다. 그러나 이제 **github 동작** 을 사용하면 누군가가 코드를 Github Repo로 푸시 할 때마다 실제로 Linter를 시행 할 수 있습니다.
이 GitHub Action Tutorial에서는 [GitHub Super-Linter][9] 작업을 사용하여 여러 코딩 언어를 줄이는 워크 플로를 추가합니다. 워크 플로우는 슈퍼 라인터를 사용하여 새 커밋이 저장소에 푸시 될 때마다 소스 코드를 유효성을 유지합니다.
github의 저장소에서 **. github/workflows** 디렉토리에서 새 파일을 작성하고 다음 내용을 복사하십시오.
```
name: Super-Linter

# Run this workflow every time a new commit pushed to your repository
on: push

jobs:
  # Set the job key. The key is displayed as the job name
  # when a job name is not provided
  super-lint:
    # Name the Job
    name: Lint code base
    # Set the type of machine to run on
    runs-on: ubuntu-latest

    steps:
      # Checks out a copy of your repository on the ubuntu-latest machine
      - name: Checkout code
        uses: actions/checkout@v2

      # Runs the Super-Linter action
      - name: Run Super-Linter
        uses: github/super-linter@v3
        env:
          DEFAULT_BRANCH: main
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
워크 플로를 실행하려면 GitHub 저장소로 변경 및 푸시를 푸시하십시오. 이 푸시 이벤트는 수퍼 라이터 워크 플로를 트리거합니다. 이제 액션 탭으로 이동하여 워크 플로 결과를 볼 수 있습니다.

{{< figure align=center src="images/actions-tab.png" alt="Github 액션 튜토리얼">}}

왼쪽 사이드 바에서보고 싶은 워크 플로를 클릭하십시오.

{{< figure align=center src="images/superlinter-workflow-sidebar-1024x211.png" alt="GitHub 작업 워크 플로">}}

방금 추가 한 Super-Linter 워크 플로우는 코드에서 문제를 찾을 수 있도록 코드가 저장소로 푸시됩니다. 저장소에는 다른 이벤트를 기반으로 다른 작업을 트리거하는 여러 워크 플로우가있을 수 있습니다. GitHub 조치는 응용 프로그램 개발 프로세스의 거의 모든 측면을 자동화하는 데 도움이 될 수 있습니다. 이것은 Github 행동에 대한 기본 소개 일뿐입니다. GitHub 동작에 대한 심층적 인 지식에 사용할 수있는 수많은 [Resources][10]가 있습니다.

## 결론 {#conclusion}

이 **github Action Tutorial**에서, 우리는 **연속 통합 및 지속적인 배포** 및 **Github Action** 에 대해 배웠습니다. 또한 CI/CD 워크 플로우를 구축하기 위해 **github 액션** 를 사용하는 방법도 탐구했습니다. 우리는 Github Actions Marketplace의 간단한 슈퍼 라인 워크 플로우를 사용하여 코드베이스의 불일치를 찾았습니다. 다가오는 기사에서는 Github 액션을 더 깊이 탐색 할 것입니다. 또한 아래의 "탐색"섹션에 언급 된**버전 제어 시스템** 과 관련된 다른 블로그 게시물을 찾을 수 있습니다.
마지막으로, [Containerize.com][11]는 추가 오픈 소스 제품 및 주제에 대한 블로그 게시물을 지속적으로 작성하고 있습니다. 따라서 정기적 인 업데이트를 위해 [버전 제어 소프트웨어][12] 카테고리와 연락하십시오. 또한 소셜 미디어 계정 [Facebook][13], [LinkedIn][14] 및 [Twitter][15]에서 우리를 따라갈 수 있습니다.

## 탐구하다
다음 링크를 찾을 수 있습니다.
  * [gitlab 연속 배포 | 어떻게 작동합니까?][16]
  * [지점을 이해하고 배우고 GIT에서 요청을 당기기][2]
  * [소스 코드 관리 소프트웨어 | git 란?][17]
  * [2021 년 상위 5 개 오픈 소스 버전 제어 시스템][18]



[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[3]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[4]: #cicd
[5]: #github-actions
[6]: #yaml
[7]: #workflow
[8]: #conclusion
[9]: https://github.com/github/super-linter
[10]: https://docs.github.com/en/actions/learn-github-actions
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/version-control/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[17]: https://blog.containerize.com/version-control-software/source-code-management-software-what-is-git/
[18]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
