---
title: "gitlab 연속 배포 | 어떻게 작동합니까?" 
seoTitle: "gitlab 연속 배포 | 어떻게 작동합니까?" 
description: "이 튜토리얼에서는 Gitlab을 사용하여 지속적인 배포 파이프 라인을 구축 할 것입니다. Gitlab Continuous Deployment는 DevOps가 자동 배포를 수행 할 수 있도록 도와줍니다." 
date: Fri, 12 Feb 2021 12:51:28 +0000
author: Assad Mahmood
summary: "자동 배포는 워크 플로를 간소화합니다 & amp; 프로세스. 이 Gitlab 튜토리얼을 사용하면 Gitlab CI/CD를 사용하여 지속적인 배포 파이프 라인을 설정하는 법을 배우는 데 도움이됩니다." 
url: /ko/gitlab-continuous-deployment-how-it-works/
categories: ['Version Control Software']
---

## 자동 배포는 워크 플로 및 프로세스를 간소화합니다. 이 Gitlab 튜토리얼을 사용하면 Gitlab CI/CD를 사용하여 지속적인 배포 파이프 라인을 설정하는 법을 배우는 데 도움이됩니다.

{{< figure align=center src="images/Continuous-Deployment-Pipeline.png" alt="gitlab 연속 배포">}}


## 개요
마지막 몇 기사에서, 우리는 [버전 제어의 기본 사항][1]에 대해 알게 된 다음 다른 [분기 모델][2]와 워크 플로에 대해 배우고 지식을 향상 시켰습니다. 버전 제어 시스템은 개발, 배포 및 통합의 세계에서 효율성을 가져 왔습니다. 개발자는 빌드 및 테스트에 대해 걱정하지 않고 소스 코드를 커밋하기가 매우 쉽다고 생각합니다. 소프트웨어 산업은이 접근 방식이 배포를 시작함에 따라 자신감과 경쟁 우위를 점했습니다.
**GitLab Continuous Deployment ** 및 통합은 쉽게 문제를 찾는 데 도움이됩니다. 또한 개발자는 더 짧은 시간 내에 버그 및 기타 미스 처리를 추적 할 수 있습니다. 이 전체 자동화 프로세스는 자주 발생하는 작업에서 자유롭게 자유롭게 제공하며 인력과 오류 가능성을 줄입니다. 오늘이 블로그 게시물에서는 Gitlab CI/CD를 통한 지속적인 배포 파이프 라인을 살펴 보겠습니다. 다음 점을 다루어 시작하겠습니다!
  * **[CI & CD는 무엇입니까][3]**
  * **[gitlab 러너는 무엇입니까][4]**
  * **[. gitlab-ci.yml 파일][5]**
  * **[기본 샘플 앱 생성][6]**
  * **[결론][7]**

## ci & cd   {#cicd}
CI (Continuous Integration)는 여러 기고자로부터 코드 변경을 단일 소프트웨어 프로젝트로 자동화하는 데 필요한 DevOps 모범 사례 중 하나입니다. 이를 통해 개발자는 코드 변경을 자주 빌드 및 테스트를 실행하는 중앙 저장소로 병합 할 수 있습니다. CD (Continuous Deployment)는 각 코드가 커밋 및 빌드 후 코드를 대상 환경 (생산 또는 스테이징)에 자동으로 배포하여 한 단계 더 이동합니다.
시작하기 전에 Gitlab에 CI/CD를 사용하려는 프로젝트가 있는지 확인하십시오. 그리고 프로젝트에 대한 관리자 또는 소유자 수준의 액세스가 있어야합니다.

## gitlab 러너   {#runner}
**Gitlab Continuous Deployment **를 이해 한 후, Gitlab Runner는 로컬 컴퓨터의 CI (Continuous Integration) 관련 작업을 실행하는 GO에서 작성된 작은 경량 프로그램으로, 결과를 Gitlab에 보내 변경 사항을 고려합니다. 주요 OS에 설치할 수있는 단일 실행 가능한 바이너리입니다.
Gitlab CI / CD로 진행하기 전에 작업을 실행할 수있는 러너가 있는지 확인해야합니다. [install][8] 및 [register][9] gitlab 러너에 대한 공식 안내서를 따라갈 수 있습니다.

## .gitlab-ci.yml 파일   {#yml}
**. gitlab-ci.yml **는 gitlab ci/cd에 대한 특정 지침을 구성하는 파일입니다. 저장소의 루트에 배치되며 프로젝트를 구축 해야하는 방법에 대한 정의가 포함되어 있습니다. Gitlab 인스턴스에 커밋 할 때마다 Gitlab 은이 파일 내부의 지시에 따라 프로젝트를 빌드하고 테스트하기 위해 러너를 호출합니다.

## 샘플 앱 생성   {#sample}
이 **gitlab 튜토리얼** 의 섹션에서 샘플 앱을 만들 것입니다. Gitlab 저장소를 이미 작성했다고 가정하면 샘플 응용 프로그램을 작성하겠습니다. 응용 프로그램에 대한 CI / CD 프로세스를 설정합니다.
우선, 프로젝트의 루트에서 package.json 파일 작성
```
{
  "name": "sample_web_app",
  "version": "1.0.0",
  "description": "Sample Application",
  "author": "Assad",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.16.1"
  }
}
```
이제 프로젝트의 루트에서 app.js를 만듭니다.
```
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(8080, 'localhost');
console.log('Running on http://localhost:8080');
```
**gitlab Continuous Deployment의 마지막 단계에서 ** **dockerfile**  을 생성하고 다음 내용을 추가하십시오.
```
FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "app"]
```
Dockerfile에는이 앱의 빌드 프로세스가 포함되어 있습니다. 노드 컨테이너를 작성하고 종속성을 설치하는 것이 포함됩니다.
이제 우리는 **. gitlab-ci.yml ** 파일을 만들어야합니다. 이 파일에는 프로젝트를 구축하는 지침이 포함되어 있습니다. Gitlab 저장소에 커밋 할 때마다 Gitlab은 러너를 호출하여 프로젝트를 구축 할 것입니다.
```
image: node:latest
stages:
- build

install_dependencies:
stage: build
script:
- npm install
```
우리는 단 하나의 단계 빌드를 가지고 있으며 스크립트로 **npm 설치**  만 있습니다. 이것은 프로젝트가 변경 될 때마다 수동으로 실행 해야하는 명령입니다. 그리고 그곳에서 Gitlab 러너가 들어오는 곳이며 커밋 할 때마다 자동 으로이 작업을 수행 할 것입니다.
이제 Gitlab 러너를 이미 설치하고 Gitlab 인스턴스에 등록했다고 가정하면 응용 프로그램에 간단하게 커밋하고 Gitlab으로 밀어서 Gitlab CI / CD를 테스트 할 수 있습니다.
그런 다음 Gitlab에서 프로젝트를 열고 내 프로젝트 → 파이프 라인으로 이동하면 커밋 옆에 "통과"라는 태그가 표시됩니다. 후속 커밋도 태그가 있습니다.

## 결론   {#conclusion}
이것은 우리를이 **gitlab 튜토리얼의 끝까지 가져옵니다. 이 기사에서는 Gitlab Continuous Integration의 기본 사항,  **CI & CD ** ,  **gitlab 러너 **  및 지속적인 배포에 대해 배웠습니다. 또한 전체 CI / CD 워크 플로에서 러너의 사용이 무엇인지 연구했습니다. 또한 Gitlab을 사용하여 연속 배포를 설정하는 방법을 설명하는 샘플 프로젝트를 만들었습니다. 이 gitlab 튜토리얼은  **gitlab continuous deployment ** 를 찾고 있다면 실제로 도움이됩니다. 그러나 아래의 "탐색"섹션에는 체크 아웃 할 수있는 다른 많은 자료가 있습니다. 또한이 기사는 오픈 소스, 자체 주최 및 확장 가능한  **버전 제어 시스템**  에 관한 것입니다.
마지막으로, [Containerize.com][10]은 추가 오픈 소스 제품 및 주제에 대한 블로그 게시물을 지속적으로 작성하고 있습니다. 따라서 정기적 인 업데이트를 위해 [][11][버전 제어 소프트웨어][12] 범주와 연락하십시오. 또한 소셜 미디어 계정 [Facebook][13], [LinkedIn][14] 및 [Twitter][15]에서 우리를 따라갈 수 있습니다.

## 탐구하다
다음 링크를 찾을 수 있습니다.
  * [GitHub 조치로 소프트웨어 개발 워크 플로우를 자동화][16]
  * [지점을 이해하고 배우고 GIT에서 요청을 당기기][2]
  * [소스 코드 관리 소프트웨어 | git 란?][17]
  * [2021 년 상위 5 개 오픈 소스 버전 제어 시스템][18]
  * [무료 및 오픈 소스 소프트웨어를 사용하여 비즈니스 운영 자동화][19]

  
[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[3]: #cicd
[4]: #runner
[5]: #yml
[6]: #status
[7]: #conclusion
[8]: https://docs.gitlab.com/runner/install/
[9]: https://docs.gitlab.com/runner/register/
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/discussion-forum/
[12]: https://products.containerize.com/version-control/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://blog.containerize.com/version-control-software/github-actions-tutorial-automate-your-first-workflow/
[17]: https://blog.containerize.com/version-control-software/source-code-management-software-what-is-git/
[18]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
[19]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
