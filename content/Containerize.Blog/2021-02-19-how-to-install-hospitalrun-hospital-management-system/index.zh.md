---
title: "如何安装医院|医院管理系统" 
seoTitle: "如何安装医院|医院管理系统" 
description: "本文可帮助您在Localhost上安装医院。使用功能丰富的开源，免费医院管理系统自动化医疗流程。" 
date: Fri, 19 Feb 2021 09:24:09 +0000
author: muhammadmustafa
summary: "自我托管的医疗保健解决方案，以促进临床医生和患者。让我们学习如何按下简单步骤在Local主机上部署免费医院。" 
url: /zh/how-to-install-hospitalrun-hospital-management-system/
categories: ['Healthcare Software']
---

## 自托管医疗保健解决方案，以促进临床医生和患者。让我们学习如何按下简单的步骤在本地主机上部署免费医院。

{{< figure align=center src="images/hospitalrun.png" alt="医院管理系统">}}


## 概述
我们最近发表了一篇博客文章，介绍了[在线医疗软件如何增强医疗保健行业] [1]，该文章描述了开源医院管理系统对医疗保健行业的影响。随着时间的流逝，全球医疗保健软件行业正在获得值得的价值。事实是，技术改变了生活的每个领域。患者和工作人员的数量太高了，以至于管理如此庞大的数据已成为麻烦。另一方面，每天都有许多耗时的任务，医疗保健实体反复执行这些任务。因此，开源源社区开发了开源医疗软件，这些软件带有许多有用的模块来满足医疗保健需求。
开源医疗软件是为了管理有关其病史的患者记录以及医院管理的规定。此外，开源医疗保健软件正在利用人工智能提供高级服务。现在，大多数疾病治疗方法都被该软件处理，不仅可以诊断出问题，而且还提供了治疗中的帮助。但是，有许多用于医院的新兴软件。在此博客文章中，我们将介绍以下几点。
  *[**什么是医院？**] [2]
  *[**医院的特征是什么**] [3]
  *[**医院的安装步骤？**] [4]
  *[**结论**] [5]

## 什么是医院？ {#介绍}
HospitalRun是一种免费的开源医院信息管理系统。这种免费的医疗保健解决方案是环境友好的，因为用户可以充分利用此免费软件，即使没有互联网连接。它提供了许多功能，例如用户管理，患者注册，约会，计费系统，患者出院系统等。此开源EHealth系统的用户界面是合乎逻辑的，用户可以轻松地浏览不同的元素。此外，很容易设置并提供Docker映像，开发人员可以在其中使用Docker映像部署它。
这个**医院管理系统**提供了整合实验室的规定，以集中患者的病历。此外，它还使用户可以保持患者就诊，药物和评估的记录。此EHealth Record System是安全，灵活的，并提供了与第三方应用程序的集成。有一个非常充满活力的社区为医院提供支持。此外，还有一个完整的患者出院系统。此开源医疗软件完全用JavaScript编写。此外，还有有关开发和部署的全面文件。实际上，该开源医疗软件为支持部门，临床部和行政部门等不同部门提供不同的仪表板。所有这些角色都具有不同级别的许可和访问权限。

## 医院里的特征是什么？ {#特征}
在本节中，我们将介绍该eHealth系统的以下一些关键功能。
  ***自我托管**：医院带有自我托管功能，需要更少的努力来部署服务器。
  ***预约时间表**：此卫生系统使用户可以安排约会。仪表板上有一个完整的预约模块。此外，用户可以在过滤器的帮助下搜索约会。
  ***患者出院系统**：该医院管理系统保持了出院患者的记录。
  ***药物管理**：此EHealth记录系统使用户能够记录特定患者药物的完整数据。
  ***患者记录管理**：患者记录管理有一个完整的模块。用户可以记录新患者的详细信息，以医学，报告和探访等完整的病史录取患者。
  ***自定义计费系统**：此开源医疗保健软件中有一个丰富的计费系统。它允许用户生成和管理发票，并提供完整的详细信息，例如实验室价格，病房费用，成像价格等。
  ***电子病历**：此开源医疗软件提供了维护医疗和管理记录的所有必要模块。
  ***灵活**：医院跑步且可扩展足够的扩展，开发人员可以扩展其功能以满足所需的功能。

## Hospital Run的安装步骤？ {#脚步}
博客文章的这一部分描述了医院跑步的安装步骤。
在开始之前，首先安装以下先决条件：
  * [Docker] [6]
  * [Docker-Compose] [7]
安装先决条件后，从此[链接] [8]下载源代码。
之后，打开终端并运行以下命令：
CD通用
CD服务器
现在，更改\'conf/initCouch.sh \ s的第8,9行上的密码，并在_config-demo.js_的第7行上更改密码。
然后，运行以下命令来制作构建并运行应用程序：
_docker-compose build && docker-compose _
之后，它将旋转Docker容器，如下图所示：

{{< figure align=center src="images/Screenshot-2021-02-16-at-23.45.48-1024x554.png" alt="医院管理系统">}}

最后，您可以在http：// localhost/#/login的浏览器中访问此医疗解决方案。它将显示以下登录屏幕。

{{< figure align=center src="images/Screenshot-2021-02-16-at-23.46.35-1024x676.png" alt="医院管理系统">}}


## 结论{#conclusion}
这是本教程文章的结尾。该患者记录系统确实有助于自动化**医疗服务**。现代开源医院管理系统配备了数据分析工具，可帮助医疗保健工人采取必要的措施以提供更好的医疗机构。如果您正在认真寻求为您的医院/诊所部署eHealth系统，那么这篇博客文章将真正为您提供帮助。这些开源解决方案具有成本效益，因为它们与实验室和其他诊所集成在一起，并通过计算机化每个过程来最大程度地减少文书工作。开源医疗保健解决方案允许用户对所有医疗保健操作的视觉效果，例如患者的药物，出院，报告和计费管理。此外，您可以专注于其他重要任务，例如资源计划和风险评估。但是，下面的“探索”部分中提到了许多其他针对医院的企业级软件。
最后，**** [Containerize.com] [9] ****旨在在其他开源产品上写入。因此，与此[10]类别保持联系以获取最新更新。

## 探索
您可能会发现以下链接相关：
  * [OpenEmr] [11]
  * [OpenMRS] [12]
  * [Hospital Run] [13]
  * [开放医院] [14]
  * [孤独] [15]
  * [在2021年选择开源软件之前需要审查的内容] [16]
  * [功能探索医疗记录经理医院Run] [17]
  * [前5名开源患者健康记录软件] [18]
  * [对医疗健康解决方案的特征探索openemr] [19]
  * [如何在local主机上建立eHealth System医院] [20]
  * [在线医疗保健软件如何赋予医疗保健行业] [1]
[1]: https://blog.containerize.com/2021/02/12/how-online-healthcare-software-empowers-healthcare-industry/
[2]: #intro
[3]: #features
[4]: #steps
[5]: #Conclusion
[6]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fdocs.docker.com%2Finstall%2F&h=b220f083ceda72a13e4e77091860b9761ee26229422b3c2590128582d7227f81&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[7]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fdocs.docker.com%2Fcompose%2Finstall%2F&h=58cfa40eb1b8827698a31cbe9ac3661def22ae2b5c28eb832c19da2e3b5a5b0d&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[8]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fhospitalrun.fra1.cdn.digitaloceanspaces.com%2Fdeployments%2Fhr-1.0.0-beta-generic.zip&h=3e79da04f5c6cd968d616537e74f30eef38c16590dc0cbc1945ec8ad214de9c0&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/health-care-technologies
[11]: https://products.containerize.com/health-care-technologies/openemr
[12]: https://products.containerize.com/health-care-technologies/openmrs
[13]: https://products.containerize.com/healthcare-technologies/hospitalrun
[14]: https://products.containerize.com/healthcare-technologies/open-hospital
[15]: https://products.containerize.com/healthcare-technologies/solismed
[16]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
[17]: https://blog.containerize.com/healthcare-software/features-exploration-of-medical-record-manager-hospitalrun/
[18]: https://blog.containerize.com/2021/03/05/top-5-open-source-patient-record-management-software/
[19]: https://blog.containerize.com/healthcare-software/open-source-medical-software-openemr-features/
[20]: https://blog.containerize.com/healthcare-software/zh/how-to-install-hospitalrun-hospital-management-system/
