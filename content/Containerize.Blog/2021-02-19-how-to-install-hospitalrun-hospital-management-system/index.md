---
title: How To Install Hospitalrun | Hospital Management System
seoTitle: How To Install Hospitalrun | Hospital Management System
description: This article helps you to install Hospitalrun on localhost. Automate medical processes using rich-featured, open-source, free hospital management system.
date: Fri, 19 Feb 2021 09:24:09 +0000
author: muhammadmustafa
summary: "Self-hosted healthcare solution to facilitate clinicians and patients. Let's learn how to deploy free Hospitalrun on the localhost by following simple steps."
url: /healthcare-software/how-to-install-hospitalrun-hospital-management-system/
aliases: 
    -  /2021/02/19/how-to-install-hospitalrun-hospital-management-system/
categories: ['Healthcare Software']

---
## Self-hosted healthcare solution to facilitate clinicians and patients. Let’s learn how to deploy free Hospitalrun on the localhost by following simple steps.

{{< figure align=center src="images/hospitalrun.png" alt="Hospital Management System">}}  

## Overview

We recently published a blog post on [How Online Healthcare Software Empowers Healthcare Industry][1] that describes the impact of open source hospital management system on the healthcare industry. The global healthcare software industry is gaining worth with the passage of time. Matter of fact is that technology has transformed every field of life. The number of patients and staff members is gone so high that it has become a hassle to manage such huge data. On the other hand, there are many time-consuming tasks that take place every day and healthcare entities repeatedly perform those tasks. Therefore, the open-source source community has developed open source medical software that come with many helpful modules to address healthcare needs. 

Open-source medical software are developed to manage patient records regarding their medical history as well as the provisions for hospital management. In addition, open source healthcare software are leveraging artificial intelligence to provide advanced levels of services. Most of the disease treatments are now being handled by the software that not only diagnoses the problems but also provides assistance in the cure. However, there are many emerging software for hospitals. In this blog post, we will cover the following points. 

  * [**What is HospitalRun?**][2]
  * [**What are the features of HospitalRun**][3]
  * [**Installation steps of HospitalRun?**][4]
  * [**Conclusion**][5] 

## What is HospitalRun? {#intro}

HospitalRun is a free open-source hospital information management system. This free healthcare solution is environment friendly as users can make full use of this free software even if there is no internet connectivity. It provides many features such as user management, patient registrations, appointments, billing system, patient discharge system, and more. The user interface of this open source ehealth system is logical where users can navigate through different elements easily. In addition, it is easy to set up and offers a Docker image where developers can deploy it using a Docker image. 

This **hospital management system** offers provision to integrate labs to centralize the patient’s medical records. Moreover, it also lets users maintain records of patient visits, medication, and assessments. This ehealth record system is secure, flexible and offers integrations with third party applications. There is a very vibrant community that provides support for Hospitalrun. Further, there is a complete patient discharge system. This open source medical software is completely written in JavaScript. Moreover, there is comprehensive documentation available regarding development and deployment. In fact, this open source medical software provides different dashboards for different departments such as the support department, clinical department, and administrative department. All these roles come with different levels of permission and access. 

## What are the features of HospitalRun? {#features}

In this section, we will go through some of the following key features of this eHealth system. 

  * **Self-Hosted**: Hospitalrun comes with self-hosting capabilities and requires fewer efforts to deploy on servers. 
  * **Appointment Scheduling**: This Health system lets users schedule appointments. There is a complete module for appointments available on the dashboard. Further, users can search the appointments with the help of filters.
  * **Patient Discharge System**: This hospital management system maintains the record of patients who have been discharged.
  * **Drug Management**: This ehealth record system enables users to record complete data of medication of a particular patient. 
  * **Patient Records Management**: There is a complete module for patients record management. Users can record the details of new patients, admitted patients against their complete medical history such as medicine, reports and visits.
  * **Customized Billing System**: There is a rich billing system available in this open source healthcare software. It lets users generate and manage invoices with complete details such as lab prices, ward charges, imaging prices and etc.
  * **Electronic Medical Records**: This open source medical software provides all necessary modules to maintain medical and administrative records. 
  * **Flexible**: HospitalRun is flexible and extensible enough that developers can extend its functionality to meet the needed functionalities. 

## Installation steps of HospitalRun? {#steps}

This section of the blog post describes the installation steps of HospitalRun. 

Before we begin, first install the following pre-requisites:

  * [Docker][6]
  * [Docker-compose][7]

Once pre-requisites are installed, download the source code from this [link][8].

After that, open the terminal and run the following commands:

cd generic  
cd server

Now, change the password on row 8,9 of \`conf/initcouch.sh\` and the password on row 7 of _config-demo.js_.

Then, run the following command to make build and run the application:

_docker-compose build && docker-compose up_

After that, it will spin up the Docker container as shown in the image below:

{{< figure align=center src="images/Screenshot-2021-02-16-at-23.45.48-1024x554.png" alt="Hospital Management System">}}  

Finally, you can access this healthcare solution in the browser at http://localhost/#/login. It will show the following login screen.

{{< figure align=center src="images/Screenshot-2021-02-16-at-23.46.35-1024x676.png" alt="Hospital Management System">}}  

## Conclusion {#Conclusion}

This is the end of this tutorial article. This patient record system really helps to automate **healthcare services**. Modern open source hospital management system comes with data analytical tools that help healthcare workers to take necessary actions for better healthcare facilities. This blog post will really help you if you are seriously looking to deploy a ehealth system for your hospital/clinic. These open-source solutions are cost-effective as they are integrated with labs and other clinics and also minimize the paperwork by computerizing every process. Open source healthcare solution allows users to have visuals of all the healthcare operations such as patients’ medication, discharge, reports, and billing management. Moreover, you can focus on other important tasks such as resource planning and risk evaluation. However, there are many other enterprise-level software for hospitals that are mentioned in the “Explore” section below. 

In the end, ****[containerize.com][9]**** is intended to write on further open source products. Therefore, stay in touch with this [Healthcare Technologies][10] category for the latest updates. 

## Explore

You may find the following links relevant:

  * [OpenEMR][11]
  * [OpenMRS][12]
  * [HospitalRun][13]
  * [Open Hospital][14]
  * [Solismed][15]
  * [Things To Review Before Opting Open Source Software In 2021][16]
  * [Features Exploration Of Medical Record Manager HospitalRun][17]
  * [Top 5 Open Source Patient Health Record Software][18]
  * [Features Exploration Of Medical Health Solution OpenEMR][19]
  * [How To Set Up eHealth System Hospitalrun On Localhost][20]
  * [How Online Healthcare Software Empowers Healthcare Industry][1]

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
 [16]: https://blog.containerize.com/2021/09/29/things-to-review-before-opting-open-source-software-in-2021/
 [17]: https://blog.containerize.com/2021/08/04/features-exploration-of-medical-record-manager-hospitalrun/
 [18]: https://blog.containerize.com/2021/03/05/top-5-open-source-patient-record-management-software/
 [19]: https://blog.containerize.com/2021/02/26/features-exploration-of-medical-health-solution-openemr/
 [20]: https://blog.containerize.com/2021/02/19/how-to-set-up-ehealth-system-hospitalrun-on-localhost/