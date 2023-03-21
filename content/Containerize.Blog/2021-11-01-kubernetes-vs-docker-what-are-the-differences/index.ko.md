---
title: "Kubernetes vs Docker | 차이점은 무엇입니까?" 
seoTitle: "Kubernetes vs Docker | 차이점은 무엇입니까?" 
description: "Kubernetes는 컨테이너 오케스트레이션 기술이며 Docker는 컨테이너를 만들고 실행하는 기술입니다. Kubernetes vs Docker를 검토합시다." 
date: Mon, 01 Nov 2021 01:16:43 +0000
author: yasir saeed
summary: "Kubernetes는 컨테이너 오케스트레이션 기술이며 Docker는 개발자가 컨테이너를 만들고 실행할 수 있도록합니다. 두 컨테이너 기술을 검토해 봅시다." 
url: /ko/kubernetes-vs-docker-what-are-the-differences/
categories: ['DevOps', 'Software Development']
---

## Kubernetes는 컨테이너 오케스트레이션 기술이며 Docker는 개발자가 컨테이너를 만들고 실행할 수 있도록합니다. 두 컨테이너 기술을 검토해 봅시다.

{{< figure align=center src="images/KubernetesVsDocker.png" alt="Kubernetes vs Docker">}}


##  **개요** 
컨테이너 기술에 관해서는 Kubernetes와 Docker라는 두 이름이 오픈 소스 리더로 등장합니다. 많은 사람들이 클라우드 컴퓨팅 산업에서 어떤 컨테이너 기술 옵션이 더 나은지 알고 싶어합니다. **Kubernetes vs docker  ****  튜토리얼  **토론은 컨테이너 화 세계에서 일반적입니다. 대부분의 사람들은 Kubernetes와 Docker를 비교하여 컨테이너화 된 응용 프로그램을보다 효율적으로 관리합니다. 이 두 개의 강력한 컨테이너화 기술은 교환 할 수 없으며 다른 하나를 선택할 수 없습니다. **  Docker vs Kubernetes **는 본질적으로 개별 컨테이너 기술입니다. 실제로, 가장 좋은 비교 주제는 ** Kubernetes vs Docker Swarm** 입니다.
이 기사는 Docker와 Kubernetes 기술의 기본 차이를 설명하고 Docker와 Kubernetes 차이를 명확하게하여 빠르게 확장되는 컨테이너 플랫폼을 탐색 할 수 있습니다. Awesome과 가장 인기있는 오픈 소스 Kubernetes vs Docker Container Technologies에 익숙해 봅시다. 그렇게하려면 컨테이너를 묶는 기초 기술로 시작하는 것이 중요합니다.
  * 컨테이너는 무엇입니까?
  * Docker는 무엇입니까?
  * Kubernetes는 무엇입니까?
  * 도커 대 Kubernetes : 어떤 채택해야합니까?
  * 결론

## 1.  **컨테이너는 무엇입니까?** 
컨테이너는 응용 프로그램 코드를 종속성으로 포장하는 표준 소프트웨어 단위로 IT 인프라에서 실행할 수 있습니다. 컨테이너는 단독으로 서서 **운영 체제 가상화 **와 같은 환경에서 휴대용이 가능합니다. 컨테이너의 인기가 커지는 것을 이해하는 가장 좋은 방법 중 하나는 컨테이너가 가상 머신 (VM)과 비교하는 것입니다. ** 컨테이너 및 가상 머신**  모두 가상화 기술을 기반으로합니다. 컨테이너는 OS를 가상화하고 VM은 VM과 컴퓨터 하드웨어 간의 경량 소프트웨어 계층을 활용하여 물리적 하드웨어를 가상화합니다.
컨테이너는 모든 라이브러리 및 종속성을 갖춘 응용 프로그램의 전체 런타임 환경으로 구성됩니다. VM은 호스트 운영 체제의 전체 사본, OS를 실행하는 데 필요한 하드웨어의 가상 사본과 응용 프로그램 및 관련 라이브러리 및 종속성으로 구성됩니다. 게스트 운영 체제가 없으면 컨테이너의 크기가 줄어들어 가볍고 빠르며 휴대가 가능합니다. 컨테이너는 휴대 성 문제를 해결하여 보안을 개선하기 위해 기본 인프라와 코드를 분리 할 수 ​​있도록 도와줍니다. 개발자는 모든 의존성 및 라이브러리를 포함한 응용 프로그램을 작은 **컨테이너 이미지 **의 ** 생산 컨테이너화 플랫폼** 로 포장 할 수 있습니다.
**DevOps **컨테이너를 사용하여 크로스 플랫폼 및 분산 환경에서 일관되게 실행되는 응용 프로그램을 신속하게 개발하십시오. 보다 휴대용 및 리소스 효율적인 컨테이너는 기능 팀 간의 도구와 소프트웨어의 차이에서 비롯된 많은 충돌을 해결합니다. 이 ** 경량 컨테이너** 는 애플리케이션이 느슨하게 결합되고 소규모 서비스로 구성된 마이크로 서비스 아키텍처에 이상적입니다.

## 2.  **Docker는 무엇입니까?** 
[Docker][1]는 애플리케이션을 독립형 휴대용 컨테이너로 쉽게 개발, 배포 및 실행할 수있는 가장 인기있는 컨테이너 플랫폼입니다.  **컨테이너화** 는 혁신적인 운영 체제 가상화로 코드와 종속성을 자급 자족 단위로 포장 할 수 있습니다. 응용 프로그램이 다른 분리 된 환경에서 일관되게 실행되도록합니다. Docker를 시작하기 전에 여러 컨테이너화 기술을 사용할 수있었습니다. Docker는 최근 몇 년 동안 사실상의 컨테이너화 플랫폼으로 성장했습니다. 그것은 컨테이너 애플리케이션의 실행을 단순화했으며 최근 몇 년 동안 컨테이너화 플랫폼 Defacto가되었습니다.
**Docker, Inc.는 2013 년 3 월 20 일 Docker를 발표했으며 독점 ​​소프트웨어 엔터프라이즈 에디션 및 오픈 소스 소프트웨어 커뮤니티 에디션으로 배포됩니다. Docker Open Source Software Community Edition은 적시에 시장에 출연하여 현재 시장 지배로 이어 졌을 것입니다. 기업의 30%가 현재 AWS 생산 환경에 Docker를 사용합니다.
대부분의 사람들이 Docker에 대해 이야기하면 실제로 응용 프로그램을 빌드, 관리 및 컨테이너화 할 수있는 런타임 인 ​​**Docker Engine **에 대해 이야기합니다. 그러나 Docker 컨테이너를 실행하기 전에 Docker 파일을 사용하여 제작해야합니다. Docker 파일은 OS 네트워크 사양 및 파일 위치를 포함하여 이미지를 실행하는 데 필요한 모든 명령을 정의하고 포함합니다. 이제  **docker 파일 ** 이 있으므로 Docker 엔진에서 실행되는 컨테이너를 만들기위한 일련의 지침이있는 휴대용 정적 구성 요소 인 Docker 이미지를 만들 수 있습니다. Docker는 또한  **Docker Hub ** 라는 서비스가있어 팀, 고객 또는 Docker 커뮤니티와 컨테이너 이미지를 저장하고 공유 할 수 있습니다. ** Docker Compose** 는 YAML 파일에서 멀티 컨테이너 응용 프로그램을 정의하고 실행하는 데 사용됩니다.
여러 서버 환경에 여러 컨테이너가 배치 될 때 많은 문제가 발생합니다. 수많은 컨테이너 인스턴스, 상호 작용, 조정 및 일정 컨테이너를 컨테이너화 된 응용 분야에서 확장하는 것이 매우 어려워집니다. 이곳은 Kubernetes가 이러한 복잡성의 대부분을 해결하기 위해 들어오는 곳입니다. 소스 컨테이너화 플랫폼  **Docker 소스 코드 저장소** 는 [Github][2]에서 사용할 수 있습니다.

## 3.  **Kubernetes는 무엇입니까?** 
[kubernetes][3]**k8s **로도 알려진 컨테이너를 오케스트레이션하기위한 오픈 소스 플랫폼 ** 2014 년에 Google에서 출시되었습니다. 배포, 스케일링, 스케줄링 및 관리를 자동화하는 포괄적 인 시스템입니다. 컨테이너화 된 응용 분야. Docker와 같은 많은 컨테이너화 도구를 지원합니다. Kubernetes는 이제 Cloud Native Computing Foundation (**  CNCF**)에 기부되었습니다. 컨테이너를 조정하고 분산 응용 프로그램을 배포하는 시장 리더로 성장했습니다.
Kubernetes는 여러 서버 시스템에서 **멀티 몬테이너 애플리케이션 **를 배포, 스케일링 및 관리 할 때 운영적인 어려움을 처리 할 수 ​​있습니다. 단일 호스트에서 실행하는 대신 물리적 또는 가상 머신 클러스터에 컨테이너화 된 응용 프로그램을 배포하고 일정을 잡습니다. 이런 식으로 Kubernetes에서 실행되는 응용 프로그램은 단일 엔티티처럼 작동하지만 실제로는 느슨하게 결합 된 컨테이너의 구색을 포함 할 수 있습니다. ** 클러스터링** 는 관리자가 중복성을 제공하는 응집력 있고 협력적인 시스템 그룹을 구축 할 수있는 중요한 컨테이너화 개념입니다.
Kubernetes는 Docker 기반 애플리케이션이있는 고객을 위해 퍼블릭 클라우드 서비스를 실행할 수 있으며 활기찬 커뮤니티가 있습니다. 많은 회사가 IT에 투자하고 있으며 많은 클라우드 제공 업체가 Kubernetes를 서비스로 제공합니다. 사용 가능한 리소스에 따라 컨테이너 앱을 자동으로 스케일링하고 Kubernetes의 도움으로 수평 스케일링 및로드 밸런싱을 수행 할 수 있습니다. 소스 컨테이너 오케스트레이션 도구  **Kubernetes 소스 코드 저장소** 는 [Github][4]에서 사용할 수 있습니다.

## 4. Docker vs. Kubernetes : 어떤 채택해야합니까?
컨테이너는 놀랍습니다. **Docker와 K8S Kubernetes **는 뚜렷한 기술이지만 실제로는 서로를 보완하고 함께 일할 수 있습니다. Docker 설치는 쉽고 빠르며 Kubernetes를 설정하는 것은 복잡하고 시간이 많이 걸립니다. Docker는  **단일 대형 클러스터 ** 에 최적화되어 있으며 Kubernetes는 ** 여러 개의 작은 클러스터** 에서 작동 할 수 있습니다. Docker는 컨테이너화 기술의 핵심이며 응용 프로그램 컨테이너를 구축, 공유, 실행 및 배포 할 수 있습니다. 응용 프로그램이 작고 간단한 경우 Docker 컨테이너에는 수명주기 관리를위한 필수 인프라가 있습니다.
**Kubernetes 대 Docker를 사용하는시기? **. 컨테이너화 된 애플리케이션이 커지고 복잡해지면 여러 개의 작은 클러스터와 더 정교한 관리가 필요할 수 있습니다. Kubernetes는 편리한 도구가됩니다. Kubernetes는 Docker 컨테이너를위한  **오케스트레이션 플랫폼** 를 제공합니다. 컨테이너를 생성 할뿐만 아니라 Docker 컨테이너가 가장 인기있는 옵션 인 컨테이너 도구가 필요합니다. Docker와 함께 Kubernetes를 사용하면 인프라의 견고성이 향상됩니다. 애플리케이션은 더 많이 사용 가능하며 응용 프로그램의 확장 성을 향상시킵니다.

##  **결론 :**    {#4a1a}
**최고의 선택 Kubernetes 또는 Docker **는 무엇입니까? 대답은 분명한 것입니다. 둘 다. 위에서 언급 한 Kubernetes와 Docker는 개발자에게 가장 인기있는 무료 및 최고의 오픈 소스 소프트웨어입니다. 그들은 인프라가 가장 많이 필요로하는 완전히 새롭고 디지털 방식으로 서비스와 시스템에 대해 생각할 수 있습니다. 결론적으로 Kubernetes와 Docker는 시스템 컨테이너의 컨테이너 관리, 스케일링, 파괴 및 배포를보다 효과적으로 자동화 할 수있는 잘 통합 된 플랫폼 **을 제공한다는 것입니다.  **컨테이너 중심의 플랫폼**  용 새로운 소프트웨어를 설계하면 응용 프로그램을보다 확장 가능 할뿐만 아니라 미래에도 방해 할 수 있습니다.
_ 무엇을 선호하는 오픈 소스 컨테이너 기술 _y?. Kubernetes와 Docker_? 사이의 _difference에 대한 질문이 있습니까?

## 탐구하다:
IT 관리자의 일상적인 작업 관리를 처리하기위한 다른 관련 기사가 여러 개 있습니다.
  * **[DevOps를위한 상위 5 개 오픈 소스 컨테이너 오케스트레이션 도구 2021][6]**
  * **[최고의 오픈 소스 클라우드 스토리지 및 파일 공유 소프트웨어][7]**
  * **[2021 년 MQ (MQ) 소프트웨어 상위 5 개 오픈 소스 메시지 큐 (MQ) [8]**
  * **[가장 인기있는 오픈 소스 디지털 법의학 도구][9]**
  * **[가장 인기있는 OSI 승인 오픈 소스 라이센스][10]**

  
[1]: https://www.docker.com/
[2]: https://github.com/docker
[3]: https://kubernetes.io/
[4]: https://github.com/kubernetes/kubernetes
[5]: mailto:yasir.saeed@aspose.com
[6]: https://blog.containerize.com/devops/top-5-open-source-container-orchestration-tools-for-devops-in-2021/
[7]: https://products.containerize.com/backup-and-sync/
[8]: https://blog.containerize.com/message-queue-software/top-5-open-source-message-queue-software-in-2021/
[9]: https://blog.containerize.com/digital-forensic-tools/top-5-open-source-digital-forensic-tools-in-2021/
[10]: https://blog.containerize.com/licenses-standards/top-5-most-popular-osi-approved-open-source-licenses-of-2021/
