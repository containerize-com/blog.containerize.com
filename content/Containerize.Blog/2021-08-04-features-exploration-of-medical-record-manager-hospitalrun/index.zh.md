---
title: "功能探索医疗记录经理Hospital Run" 
seoTitle: "功能探索医疗记录经理Hospital Run" 
description: "请按照本指南开始医疗记录经理Hospital Run。它是开源的，多语言，可以自动化许多重要的过程。" 
date: Wed, 04 Aug 2021 18:37:19 +0000
author: muhammadmustafa
summary: "医院管理系统是医疗保健机构的重要组成部分。 HospitalRun提供数据控制，基于访问的角色和收入管理。" 
url: /zh/features-exploration-of-medical-record-manager-hospitalrun/
categories: ['Healthcare Software']
---

## 医院管理系统是医疗机构的重要组成部分。 HospitalRun提供数据控制，基于访问的角色和收入管理。

{{< figure align=center src="images/blog-banners-template-1.png" alt="病历经理">}}


## 概述
开源[Healthcare Software][1]在最近的过去广受欢迎。首先，这是由于技术的进步。其次，Covid-19以各种方式影响了医疗行业，并为开源社区带来了新的机会。在整个世界经历关键时期，为患者提供高质量的医疗服务非常重要。幸运的是，有几种开源健康记录管理解决方案可提供数据中心化，透明度，安全性，集成以及许多其他强大功能。这些免费的医疗保健服务提供了对医生，患者，诊所和其他工作人员等工作流程的平稳管理。最近，[Containerize.com][2]发表了一些有关开源医院信息管理系统的文章，其中包括[前5名开源患者健康记录软件][3]，[特征对医疗健康解决方案的探索openemr][4]， [在线医疗软件如何赋予医疗保健行业的能力][5]。
过去，我们写了一篇文章，描述了在Localhost上的[HospitalRun][6]的设置程序。在这篇博客文章中，我们将通过介绍以下几点进一步探讨[Hospital Run][6]。
  ***[为什么要医院？][7]** 
  ***[患者和调度模块][8]** 
  ***[实验室整合和药物][9]** 
  ***[成像和事件][10]** 
  ***[结论][11]** 

## 为什么要医院？   {#为什么}
这位病历经理的受欢迎程度背后有很多原因。 HospitalRun是一个完整的电子健康记录和医院信息系统。它支持离线和在线版本。它使您可以整合诊所并提供数据同步。此外，它是多语言，跨平台，并具有自我托管功能。该患者记录系统提供患者记录管理，预约时间表，药物和处方管理。还有一项规定生成包含完整诊断详细信息的自定义报告。此外，医务人员可以从患者出院模块中获得帮助。最重要的是，该医院管理系统提供了意外和紧急情况的管理。它是安全，可靠且用户友好的。但是，该病历管理系统完全用JavaScript编写，所有源代码都可以在[Github][12]上提供，并提供有关开发和部署的文档。

## 患者和调度模块 {#modules}
在本节中，我们将浏览该医院信息管理系统的仪表板。登录后，您将登陆如下图所示的医院仪表板。

{{< figure align=center src="images/Screenshot-2021-08-02-at-17.40.46-1024x502.png" alt="病历经理">}}

在右上方，有两个选择。首先，用户可以选择一种语言，例如英语，意大利语，土耳其语等。其次，可以选择创建新的患者记录，新约会，请求药物，请求实验室，新成像请求和报告事件。

{{< figure align=center src="images/Screenshot-2021-08-02-at-17.45.03-1024x576.png" alt="医院管理系统">}}

左侧有多种选择，例如患者，日程安排，药物，实验室，成像和事件。在患者模块中，您可以添加新的患者记录，并查看已经添加的患者的列表。这位免费的病历经理让用户可以记录完整的患者记录，例如名称，地址，联系人，患者类型和其他基本细节。在患者列表中，还有一个搜索栏，用户可以在其中搜索列表中的患者。此外，在调度模块中，医务人员可以安排约会。该模块的接口如下图所示。

{{< figure align=center src="images/Screenshot-2021-08-02-at-18.23.42-1024x576.png" alt="医院信息管理系统">}}

界面显示计划的约会。此外，用户可以使用过滤器查看每天，每周和每月的约会数量。右上角有一个选择，医疗官员可以预订新的任命。医务官员可以插入约会详细信息，例如开始日期，结束日期，原因等。

## 实验室集成和药物 {#lab}
本节介绍了此免费医疗保健软件的两个突出模块的功能。药物模块使用户可以针对药物添加数据，在其中可以将药物优先级设置为常规，紧急或ASAP等药物优先级。同样，还有一个用药请求列表，官员可以在其中搜索过滤器。

{{< figure align=center src="images/Screenshot-2021-08-02-at-18.54.03-1024x576.png" alt="病历管理系统">}}

在实验室模块中，医疗人员可以通过插入患者信息，访问和类型来请求实验室。除此之外，医疗保健工人可以添加其他注释。同样，实验请求选项中有一些过滤器，用户可以在其中执行搜索功能。

## 成像和事件 {#imaging}
成像是通过用电磁场扫描来创建事物的视觉表示。 HospitalRun提供成像记录的管理。此外，它允许用户创建新的成像请求，并且该模块与患者的模块链接，因为其他模块相互关联。同样，用户可以看到成像请求列表。接下来，在事件模块中，官员可以通过插入详细信息来报告事件。因此，用户可以看到已经报告的事件的列表。在下图中所示，在最后一个中也可用的事件图形表示。

{{< figure align=center src="images/Screenshot-2021-08-02-at-19.59.11-1024x577.png" alt="健康记录管理">}}


## 结论 {#conclusion}
这是此博客文章的结尾。实际上，大多数卫生机构都取决于手动操作。就数据安全性和完整性而言，它可能很容易受到攻击。但是，自动化系统确保了常规医疗保健操作的基本和最关键的方面。因此，安装良好的开源医疗记录经理可以保护您的资产免受未经授权的资源的影响，并帮助您轻松和自信地执行常规任务。这些开源软件同步了多个实体，例如医生，患者，诊所，实验室，并使工作流程更容易。最重要的是，现在是时候采用开源软件为您的医院或诊所采用最新挑战了。您可以节省时间和精力，并专注于重要的，关键的任务。
最后，[Containerize.com][2]正在撰写有关进一步开源产品的文章。因此，请与常规新闻和更新的[1]类别保持联系。

## 探索
您可能会发现以下链接相关：
  * [OpenEmr][13]
  * [OpenMrs][14]
  * [医院][15]
  * [开放医院][16]
  * [孤独][17]
  * [前5名开源患者健康记录软件][3]
  * [功能探索医疗保健解决方案OpenEMR][4]
  * [如何在local主机上建立eHealth System医院][18]
  * [在线医疗保健软件如何赋予医疗保健行业][5]

  
[1]: https://products.containerize.com/healthcare-technologies/
[2]: https://www.containerize.com/
[3]: https://blog.containerize.com/2021/03/05/top-5-open-source-patient-record-management-software/
[4]: https://blog.containerize.com/healthcare-software/open-source-medical-software-openemr-features/
[5]: https://blog.containerize.com/2021/02/12/how-online-healthcare-software-empowers-healthcare-industry/
[6]: https://products.containerize.com/healthcare-technologies/hospitalrun/
[7]: #why
[8]: #modules
[9]: #lab
[10]: #imaging
[11]: #Conclusion
[12]: https://github.com/HospitalRun/hospitalrun
[13]: https://products.containerize.com/health-care-technologies/openemr
[14]: https://products.containerize.com/health-care-technologies/openmrs
[15]: https://products.containerize.com/healthcare-technologies/hospitalrun
[16]: https://products.containerize.com/healthcare-technologies/open-hospital
[17]: https://products.containerize.com/healthcare-technologies/solismed
[18]: https://blog.containerize.com/healthcare-software/how-to-install-hospitalrun-hospital-management-system/
