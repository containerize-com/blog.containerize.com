---
title: Continuous Integration And Continuous Deployment From Source Control Server
seoTitle: Continuous Integration And Continuous Deployment From Source Control Server
description: Free deployment tool helps development teams to automate software delivery workflows. Quickly build, test, deploy software with Jenkins and GitHub repository.
date: Mon, 22 Feb 2021 06:11:17 +0000
author: Masood Anwer
summary: Automate development workflows using free deployment tool. We will learn how to setup CI/CD with Jenkins automation server and GitHub for software deployment.
url: /deployment-tools/automate-software-deployment-process-with-jenkins-and-github/

categories: ['Deployment Tools']

---
## Automate development workflows using free deployment tool. We will learn how to setup CI/CD with Jenkins automation server and GitHub for software deployment.

{{< figure align=center src="images/ci-cd-post.png" alt="Continuous Integration And Continuous Deployment">}}  

Development teams use different methods for software deployment such as FTP, pulling code from the repository, and many more. All of these methods are performed manually and require a lot of effort. We can see that more teams follow agile methodology for software development. So, they release new features and bug fixing frequently. Therefore, automating software delivery workflows helps teams for launching new versions quickly and without errors. We will learn how to use **CI/CD with Jenkins** and GitHub for automating the software delivery process. We will cover the following sections in this article.

  * [**What is Jenkins?**][1]
  * [**Continuous Integration**][2]
  * [**Continuous Deployment**][3]
  * [**Configure Jenkins**][4]
  * [**Create Jenkins Job**][5]

## What is Jenkins? {#Jenkins}

**Jenkins** is a powerful **free deployment tool** for automating the software delivery process. It is an open source automation server for building, testing, and deployment. Jenkins uses Master-Slave architecture. This allows software teams to run multiple builds and tests for software simultaneously. In addition, there are plenty of plugins available and teams can use them as needed. You can visit the [**Jenkins page**][6] for more information and installation. Further, you can find source code at Jenkins [**GitHub**][7] repository.

## Continuous Integration {#CI}

**Continuous Integration** is a development practice that requires developers to frequently integrate code into a shared repository. Every integration/push of code into the repository can be verified by automated build and tests. It also allows developers to easily identify problems in the code.

## Continuous Deployment {#CD}

**Continuous Deployment** is the next step after continuous integration. It would allow teams to continuously deploy code on the server. Moreover, it helps developers to reduce repetitive tasks and increases agility.

## Configure Jenkins {#Configure}

Follow below step by step guideline for configuration in Jenkins.

  * Open your Jenkins site and login.
  * Install “Publish over SSH” plugin. You can search it by Navigating to “Manage Jenkins → Manage Plugins → Available”.
  * Generate SSH key on build server as user “jenkins” as shown below.


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


  * Connect to the target/deployment server using SSH. Run below command and paste the pub file contents onto the target server.


```
$ cd .ssh
$ nano authorized_keys
```


  * Navigate to Manage “Jenkins → Configure System → Publish over SSH”.
  * Add SSH key either by locating the file path or paste the same contents as done for deployment server.
  * Add an SSH Server by clicking on the “Add” button next to “SSH Servers”.
  * Enter Name, Hostname, Username, and Remote directory for the deployment/target server.
  * Click on the Test Configuration button to ensure that Jenkins can connect to the deployment server.
  * Finally, click Save button to store information.

## Create Jenkins Job {#Create}

You can use these steps for creating Jenkins job.

  * Open Jenkins dashboard and click on “New Item” button.
  * Enter project name and choose “Freestyle Job”.
  * Enter GitHub repository URL under “Configuration Window”.
  * In “Build Environment” section, check these options “Delete workspace before build starts” and “Send files or execute commands over SSH after the build runs”.
  * Enter Name, Source files, and Remote directory under Build Environment.
  * Save job and build it.
  * Connect to deployment server and make sure that code is there.

## Conclusion

We have discussed the **Jenkins server**, **continuous integration**, and **continuous deployment** in this article. We have also learned how to configure the **free deployment tool** and created a Jenkins job for deployment using GitHub. Free CI/CD tool allows the development team to automate software delivery workflows and keep the focus on important jobs. We will be covering other deployment tools in the coming posts.

Finally, [**containerize.com**][8] will publish articles on further open source Deployment Tools. Therefore, please stay in touch with [**Deployment Tools**][9] category for regular updates.

## Explore

You may find the following links relevant:

  * **[Jenkins][6]**
  * [**Drone**][10]
  * [**Deployer**][11]
  * [**Capistrano**][12]
  * [**Rancher**][13]
  * [**Concourse**][14]
  * [**Ansible**][15]
  * [**GoCD**][16]
  * [**Top 5 Open Source Deployment Tools In 2021**][17]
  * [**Automate PHP Application Deployment With Deployer**][18]

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
