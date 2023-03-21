---
title: "DevOps를위한 상위 5 개 오픈 컨테이너 오케스트레이션 도구 2021" 
seoTitle: "DevOps를위한 상위 5 개 오픈 컨테이너 오케스트레이션 도구 2021" 
description: "오픈 소스 컨테이너 오케스트레이션 도구는 DevOps 엔지니어가 컨테이너의 배포, 네트워킹, 스케일링 및 관리를 자동화 할 수 있도록 도와줍니다." 
date: Mon, 11 Oct 2021 04:01:46 +0000
author: yasir saeed
summary: "컨테이너 오케스트레이션 도구는 사용자가 컨테이너의 배포, 네트워킹, 스케일링 및 관리를 자동화 할 수 있도록 도와줍니다. 최고의 오케스트레이션 도구를 검토합시다" 
url: /ko/top-5-open-source-container-orchestration-tools-for-devops-in-2021/
categories: ['DevOps', 'Software Development']
---

## 컨테이너 오케스트레이션 도구는 사용자가 컨테이너의 배포, 네트워킹, 스케일링 및 관리를 자동화 할 수 있도록 도와줍니다. 최고의 오케스트레이션 도구를 검토해 봅시다

{{< figure align=center src="images/Open-Source-Container-Orchestration-Tools.png" alt="상위 5 개 오픈 소스 컨테이너 오케스트레이션 도구">}}


##  **개요** 
컨테이너 오케스트레이션 도구는 IT 관리자, 소프트웨어 개발자 및 사용자가 개발, 테스트, 스케일링 및 배포 프로세스 중 컨테이너화 된 응용 프로그램을 관리 할 수 ​​있도록 도와줍니다. 이 컨테이너 오케스트레이션 소프트웨어는 또한 애플리케이션 내에서 구현을 위해 여러 컨테이너를 예약하고 배포하여 실패한 컨테이너 구현을 식별하고 선언적 구성을 관리하는 것을 용이하게합니다.  **오픈 소스 컨테이너 오케스트레이션 도구**  사용자가 실행되는 인스턴스, 호스트 프로비저닝 및 컨테이너 연결 프로세스를 자동화하여 컨테이너를 추가하여 애플리케이션의 확장 성 및 기능을 향상시키는 데 도움이됩니다.
오케스트레이션 도구는 오케스트레이션 프로세스 최적화, 컨테이너 액세스 권한을 설정하여 컨테이너 보안을 개선하고 컨테이너 구성 요소를 서로 분리하는 데 도움이됩니다. 현재 시장에는 다양한 조직이 생산 환경에 사용하여 컨테이너 및 마이크로 서비스**를 관리하는 데 사용하는 많은 클라우드 기반 오픈 소스 컨테이너 오케스트레이션 도구 목록이 많이 있습니다. 최고의 오케스트레이션 도구 중 일부를 검토해 봅시다.
**컨테이너 오케스트레이션 플랫폼은 무엇입니까?**이 기사에서는 2021 년 DevOps에 가장 인기있는 오픈 소스 컨테이너 오케스트레이션 프레임 워크에 익숙해집니다.
  * Kubernetes
  * Docker Swarm
  * Red Hat Openshift
  * 구성하다
  * 해시 코프 유목민
  * 오픈 소스 컨테이너 관리 도구는 무엇입니까?
  * 결론
1. Kubernetes

{{< figure align=center src="images/Kubernetes-open-source-container-orchestration-system-1.png" alt="오픈 소스 Kubernetes 컨테이너 오케스트레이션 시스템">}}

  * **기고자 수 :**  3,141
  * **최고 기고자 :**  Jordan Liggitt - Google의 소프트웨어 엔지니어 | [@liggitt][1]
  * **기본 언어 :**  이동
  * **별 수 :**  81,300
  * **포크 수 :**  2,960
[Kubernetes][2] 오픈 소스 오케스트레이션 시스템은  **kube 또는 k8s** 로 알려진 조직들 사이에서 컨테이너를 광범위하게 채택하는 것입니다 (8은“k”와“s”사이의 문자 수를 나타냅니다). Kubernetes 아키텍처의 유연한 특성으로 인해 컨테이너화 된 애플리케이션을 구축, 배포, 스케일링 및 관리하기 위해 컴퓨터 응용 프로그램을 예약하고 자동화하는 데 실제로 표준이되었습니다. K8 Kubernetes는 개인, 공개 및 하이브리드 클라우드 환경에서 Linux 컨테이너를 관리하는 데 사용됩니다. Kube는 컨테이너 중심이며 서비스 배포 및 관리에 더 중점을 둡니다.
Kubernetes 시작점은 클러스터 자체이며 Docker 방식에서 벗어나는 방법입니다. Kubernetes 클러스터에서 시작하여 컨테이너를 거의 구현 세부 사항으로 사용합니다. Google의 내부 클러스터 관리 시스템 인 BORG에서 영감을 얻은 운영 노력을 줄임으로써 **배포,로드 및 관리  **응용 프로그램과 관련된 모든 것을 쉽게 제공합니다. Kubernetes 컨테이너 오케스트레이션 플랫폼은 원래 Google의 엔지니어가 원래 개발하고 2014 년 중반에 Kubernetes 프로젝트를 오픈 소싱했습니다. **  K3S **는 CNCF 샌드 박스 프로젝트입니다.  **K3S ** 는 목적으로 제작 된 컨테이너 오케스트레이터이며 ** K8S**  오케스트레이션은 Kubernetes를 실행하기위한 범용 컨테이너 K8S Orchestrator 오픈 소스 도구입니다.
**가장 인기있는  ****  오케스트레이션 kubernetes와 통합되는 도구**는 Helm, Rancher, Snyk, Ansible, Docker, Microsoft Azure, Amazon EK, Google Compute Engine 및 Vagrant입니다.
**kubernetes를 사용하는 최고의 회사** 기술 스택에 오케스트레이션을 위해 오케스트레이션을 위해 컨테이너 환경을 구축, 관리 및 배포하는 것은 Google, Kubermatic, Digitalocean, Shopify, Udemy, Slack, Asana, Walmart 및 Prometheus입니다.

## 2. Docker Swarm

{{< figure align=center src="images/docker-swarm.png" alt="컨테이너 오케스트레이션 및 배포 오픈 소스 도구">}}

  * **기고자 수 :**  178
  * **최고 기고자 :**  프랑스 소프트웨어 엔지니어 [@cruise-automation][3] | [@vieux][4]
  * **기본 언어 :**  이동
  * **별 수 :**  5,800
  * **포크 수 :**  1,100
[Docker Swarm][5]는 컨테이너화 된 응용 프로그램을 관리하기위한 Docker 플랫폼을 기본으로 한 간단한 컨테이너 오케스트레이션 도구입니다. 이를 통해 개발자는 여러 호스트 머신에서 Docker 노드 클러스터를 생성, 배포 및 관리 할 수 ​​있습니다. Docker Swarm Mode를 사용하면 Docker 시스템 내에서 Docker 엔진 클러스터를 로컬로 관리 할 수 ​​있습니다. Docker Compose Orchestration에서 사용하는 것과 동일한 파일을 사용하여 생산에 분산 노드 클러스터를 효율적으로 관리, 스케일 및 배포하는 데 사용됩니다. Swarm의 주요 장점 중 하나는 응용 프로그램에 제공되는 높은 수준의 서비스 가용성입니다.
Docker Swarm Container Orchestration은 컨테이너에서 시작하여 기존 Docker 도구에 대한 지식없이 클라우드 컨테이너 오케스트레이션으로 쉽게 이동할 수있는 방법을 제공합니다. Swarm은 초기 떼 릴리스의 한계로 인해 실험 및 소규모 컨테이너 오케스트레이션 및 배치에 적합하며 Kubernetes 및 Mesos** 컨테이너 오케스트레이션보다 덜 입증되었습니다. Docker Swarm 오픈 소스는 서비스를 실행하는 관리자 및 작업자 노드로 구성됩니다.
**Docker Swarm과 통합되는 가장 인기있는 도구** AWS, Codefresh, Flocker, Continuous Delivery Service, Docker Datacenter, Traefik 및 Portainer는 Azure Container Service입니다.
**Docker Swarm을 사용하는 최고의 회사** 기술 스택에 오케스트레이션은 Ooda, Appwrite, Net Core, DevTeam, 환자는 최고 및 MainWebSolutions입니다.

## 3. Red Hat Openshift

{{< figure align=center src="images/openshift-red-hat.jpg" alt="컨테이너 오케스트레이션 엔진 및 오펜시프트 컨테이너 플랫폼">}}

  * **기고자 수 :**  447
  * **최고 기고자 :**  [David Eads][6]
  * **기본 언어 :**  GO 및 AngularJS
  * **별 수 :**  8,000
  * **포크 수 :**  4,600
[Redhat Openshift][7]는 백엔드에 Kubernetes가있는 가장 안전하고 엔터프라이즈 등급 클라우드 기반 컨테이너 오케스트레이션 시스템입니다. 레드 모자 컨테이너 오케스트레이션 엔진과  **PAAS (Platform-as-A-Service)** 로 사용할 수 있습니다. OpenShift Container 플랫폼은 개발자 경험 및 응용 프로그램 보안에 중점을 둔 업계 표준 Kubernetes 배포와 함께 작동합니다. Redhat Enterprise Linux 및 Kubernetes 엔진을 기반으로하며 UI 및 CLI를 통해 클러스터를 관리하는 다양한 기능이 있습니다.
**Red Hat Openshift와 통합되는 가장 인기있는 도구**는 새로운 유물, Travis CI, Wercker, Mongolab, Twilio Sendgrid, CloudAmqp, Appcelerator 및 OpendevStack입니다.
**Red Hat OpenShift를 사용하는 최고의 회사** 기술 스택에는 Ericsson, Accenture, Melio Consulting, Dotgroup 및 Bilyoner.com이 있습니다.

## 4. 작곡

{{< figure align=center src="images/docker-compose-1024x568.jpg" alt="도커 컴포지 오케스트레이션 도구">}}

  * **기고자 수 :**  55
  * **최고 기고자 :**  선임 소프트웨어 엔지니어 @ Docker | [@gtardif][8]
  * **기본 언어 :**  이동
  * **별 수 :**  23,800
  * **포크 수 :**  4,000
[Docker Compose][9]는 Compose 파일 형식을 사용하여 정의 된 Docker에서 다중 컨테이너 응용 프로그램을 실행하기위한 Docker Orchestration 도구입니다. 표준 Docker API 및 네트워킹을 사용합니다.  **Compose 파일** 는 응용 프로그램을 구성하는 하나 이상의 컨테이너가 구성되는 방법을 정의하는 데 사용됩니다. Docker Compose 파일이 있으면 단일 명령으로 응용 프로그램을 작성하고 시작할 수 있습니다. Docker Compose Up.
**Compose와 통합되는 가장 인기있는 도구**는 목장주, Kubernetes, Doppler, Amplication 및 K8Guard에 작용합니다.
**기술 스택에 Docker Compose**을 사용하는 최고 회사는 Stackshare, Pratilipi, Circleci, TrustPilot, Alibaba Travels 및 Onesignal입니다.

## 5. Hashicorp nomad

{{< figure align=center src="images/Nomad-1024x416.png" alt="Hashicorp Nomad는 워크로드 오케스트레이터입니다">}}

  * **기고자 수 :**  490
  * **최고 기고자 :**  Alex Dadgar at HCP @hashicorp | [@adadgar][10]
  * **기본 언어 :**  파이썬
  * **별 수 :**  10,000
  * **포크 수 :**  1,400
[NOMAD][11]는 인프라에 컨테이너화 또는 레거시 애플리케이션을 쉽게 배포하는 유연한 워크로드 오케스트레이터,  **클러스터 관리자 및 스케줄러** 입니다. 생산주기의 광범위한 채택 워크로드 오케스트레이터는 서버에 배치, 컨테이너화, 마이크로 서비스 및 비 함유 응용 프로그램을 배치하여 리소스 활용을 극대화합니다. Nomad Container Orchestration은 가벼운 컨테이너 오케스트레이션으로 모든 주요 운영 체제에서 쉽게 확장 할 수 있으며 가상화, 컨테이너화 또는 독립형 애플리케이션에서 작동합니다. Hashicorp 컨테이너 오케스트레이션에는 기본 영사 및 금고 통합이 있습니다.
**Nomad와 통합되는 가장 인기있는 도구는 Docker, Vault, Hashicorp Sentinel, Consul, Portworx, Humio 및 Gloo Edge입니다.
**기술 스택에 NONDER를 사용하는 최고의 회사는 꽃잎, Trivago, Wealthsimple, Edgelab, Fundamentei, 5G Systems, Aislelabs, Botmetric, Taboola 및 Machete Inc입니다.

##  **오픈 소스 컨테이너 관리 도구는 무엇입니까?** {#4a1a}
가상 머신 (VMS)에 대한 컨테이너 오케스트레이션 솔루션에는 많은 이점이 있습니다. 컨테이너는 단일 운영 체제 커널을 공유하며 VM (Virtual Machine)을 시작하는 데 몇 분이 대신 몇 초 안에 시작됩니다. 컨테이너를 확장하고 복제하는 것은 매우 쉽고 디스크 크기가 작고 공유하기가 간단합니다.  **컨테이너 관리 플랫폼** 는 여러 컨테이너를 관리하는 클라우드 애플리케이션입니다. 다음은 컨테이너 관리의 특정 측면을 간소화하기 위해 가장 널리 사용되는 최고의 컨테이너 관리 소프트웨어 및 컨테이너 오케스트레이터 목록입니다.
  * **[Rancher][12]**는 Kubernetes를 규모로 관리하는 오픈 소스 최고의 컨테이너 관리 플랫폼입니다.
  * **[Apache Mesos][13]**는 차세대 오픈 소스 클러스터 관리자이자 Apache 컨테이너 오케스트레이션 서비스입니다.
  * **[Portainer CE][14]**는 강력한 오픈 소스 Docker 및 Kubernetes 관리 도구입니다.
  * **[Azure Kubernetes Service (AKS)][15]**는 오픈 소스 컨테이너 오케스트레이션 Kubernetes 서비스입니다.
  * **[Amazon Elastic Container Service (Amazon ECS)][16]** AWS ECS 오케스트레이션 및 컨테이너 관리 서비스는 Docker 컨테이너를 지원하여 Amazon EC2 인스턴스 클러스터에서 응용 프로그램을 실행할 수 있습니다.
  * **[Amazon Elastic Kubernetes Service (Amazon EKS)][17]**는 Kubernetes 응용 프로그램 및 관리 인프라를 실행하기위한 컨테이너 오케스트레이션 AWS 서비스입니다.

##  **결론 :** {#4a1a}
**컨테이너 오케스트레이션 기술은 비즈니스 및 소프트웨어 애플리케이션에 어떻게 작동합니까? **위에서 언급 한 5 개의 최고 Docker 컨테이너 오케스트레이션 도구는 가장 인기있는 무료 및 최고의 오픈 소스 DevOps 소프트웨어입니다.  **kubernetes vs docker swarm **  vs redhat ** compose**  vs hashicorp nomad를 선택하는 데 도움이되는 하나의 주요 정보를 기억해야한다면 각 솔루션에 몇 가지 장단점이 있어야합니다. 서비스 오케스트레이션에서 다양한 기능을 제공하는 다른 오케스트레이션 플랫폼 옵션이 있습니다. 궁극적으로, 당신이 취하는 옵션은 당신이 달성하려는 규모와 가장 편안한 생태계에 따라 달라집니다. 컨테이너 오케스트레이션에 대한 더 깊은 다이빙을 위해 [Containerize Blog][18]를 방문하십시오.
_ 가장 좋아하는 최고의 컨테이너 오케스트레이션 도구는 무엇입니까?. 위에서 언급 한 컨테이너 오케스트레이터 목록에 대해 궁금한 점이 있습니까?

## 탐구하다:
우리는 또한 몇 가지 다른 관련 정보 도구 시계가 있습니다.
  * [최고의 오픈 소스 클라우드 스토리지 및 파일 공유 소프트웨어][20]
  * [2021 년의 MQ (MQ) 소프트웨어 상위 5 개 오픈 소스 메시지 대기열][21]
  * [가장 인기있는 오픈 소스 디지털 법의학 도구][22]
  * [가장 인기있는 OSI 승인 오픈 소스 라이센스][23]

  
[1]: https://twitter.com/liggitt?lang=en
[2]: https://kubernetes.io/
[3]: https://github.com/cruise-automation
[4]: https://twitter.com/vieux?lang=en
[5]: https://github.com/docker-archive/classicswarm
[6]: https://github.com/deads2k
[7]: https://github.com/openshift/origin
[8]: https://twitter.com/gtardif?lang=en
[9]: https://github.com/docker/compose
[10]: https://twitter.com/adadgar?lang=en
[11]: https://github.com/hashicorp/nomad
[12]: https://github.com/rancher/rancher
[13]: https://github.com/apache/mesos
[14]: https://github.com/portainer/portainer
[15]: https://github.com/Azure/AKS
[16]: https://github.com/aws/amazon-ecs-agent
[17]: https://github.com/aws/eks-distro
[18]: https://blog.containerize.com/
[19]: mailto:yasir.saeed@aspose.com
[20]: https://products.containerize.com/backup-and-sync/
[21]: https://blog.containerize.com/message-queue-software/top-5-open-source-message-queue-software-in-2021/
[22]: https://blog.containerize.com/digital-forensic-tools/top-5-open-source-digital-forensic-tools-in-2021/
[23]: https://blog.containerize.com/licenses-standards/top-5-most-popular-osi-approved-open-source-licenses-of-2021/
